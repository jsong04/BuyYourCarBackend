const users = [
  {
    id: 1,
    name: "songjz",
    email: "song.jingz@northeastern.edu",
    password: "12345",
    age: 24,
    budget: 20000,
  },
  {
    id: 2,
    name: "John",
    email: "john@domain.com",
    password: "12345",
    age: 31,
    budget: 35000,
    avatar: "../assets/avatar.png"
  },
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser,
};
