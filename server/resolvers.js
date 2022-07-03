const usersDB = require('./MockDB');


const createUser = (input) => {
    const id = Date.now();
    return { id, ...input }
};

const root = {
    getAllUsers: () => {
        return usersDB;
    },
    getUser: ({ id }) => {
        return usersDB.find(user => user.id == id)
    },
    createUser: ({ input }) => {
        const user = createUser(input);
        usersDB.push(user);
        return user;
    },
};

module.exports = root;
