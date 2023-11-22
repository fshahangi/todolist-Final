import axios from "axios";

export const Service = (setInfo) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      setInfo((preVal) => ({
        ...preVal,
        todos: response.data.slice(1, 3),
      }));
    })
    .catch((error) => {
      console.log(error);
    });
};
