export const saveLocalstorage = (info, key) => {
  localStorage.setItem(key, JSON.stringify(info.todos));
};
export const getLocalstorage = (setInfo, key) => {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem(key));
    setInfo((preVal) => ({ ...preVal, todos: todoLocal }));
  }
};
