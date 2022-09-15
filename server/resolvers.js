const usersDB = require('./MockDB');
const User = require('./models/User');

const { ObjectID }  = require('mongodb');

const mongoAlwaysNewObjectId = () => new ObjectID().toHexString();

const createUser = (input) => {
    const _id = mongoAlwaysNewObjectId();
    return { _id, createdAt: new Date().toString(), ...input }
};

const root = {
    getAllUsers: async () => {
        const user =  await User.find({});
        console.log(user);
        return user
    },
    getUserName: ({ name }) => {
        return User.find({name})
    },
    createUser: async ({ input }) => {
        const userData = createUser(input);
        const user = new User(userData);
        await user.save();
        return user;
    },
};

module.exports = root;
