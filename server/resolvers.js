const usersDB = require('./MockDB');
const User = require('./models/User');

const createUser = (input) => {
    const id = Date.now();
    return { id, ...input }
};

const root = {
    getAllUsers: async () => {
        const user =  await User.find({});
        const candidate = await User.findOne({ email:"asd@mail.com" });
        console.log(user)
        console.log(candidate)
        return user
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
