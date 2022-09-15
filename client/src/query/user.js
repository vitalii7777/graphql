import {gql} from '@apollo/client'

export const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            _id, name, age
        }
    }

`;

export const GET_USER_NAME = gql`
    query getUserName($name: String){
        getUserName(name: $name) {
            age, _id, name
        }
    }    

`;
