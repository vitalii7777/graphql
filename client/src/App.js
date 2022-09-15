import React, { useEffect, useState } from 'react';
import './App.css';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USERS, GET_USER_NAME } from './query/user';
import { CREATE_USER } from './mutations/user';

const App = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);
  const { data: oneUser, loading: loadingOneUser } = useQuery(GET_USER_NAME, {
    variables: {
      name: '1'
    },
  });
  const [newUser] = useMutation(CREATE_USER);

  const [users, setUsers] = useState([]);
  const [name, setUsername] = useState('');
  const [age, setAge] = useState(0);

    if (!loadingOneUser) {
        console.log(oneUser);
    }


  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  const addUser = async (e) => {
    e.preventDefault();
    const resp = await newUser({
      variables: {
        input: {
          name,
          age,
        },
      },
    });
    setUsername('');
    setAge(0);
  };

  const getAll = (e) => {
    e.preventDefault();
    refetch();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form>
        <input
          value={name}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <input
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
          type="number"
        />
        <div className="btns">
          <button onClick={(e) => addUser(e)}>Create</button>
          <button onClick={(e) => getAll(e)}>Get All</button>
        </div>
      </form>
      <div>
        {users.map((user) => (
          <div>
            {user.name} {user.age}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
