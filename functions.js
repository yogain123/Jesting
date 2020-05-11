const axios = require("axios");
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  isUndefined: () => undefined,
  checkValue: (x) => x,
  createUser: (firstName, lastName) => {
    return { firstName, lastName };
  },
  fetchUser: async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return result;
  },
};

module.exports = functions;
