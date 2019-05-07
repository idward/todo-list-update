export const loadState = () => {
  try {
    const data = localStorage.getItem("state");
    if (data) {
      return JSON.parse(data);
    } else {
      return undefined;
    }
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = data => {
  try {
    const savedData = {...data,form:{}};
    localStorage.setItem("state", JSON.stringify(savedData));
  } catch (err) {
    console.log(err);
  }
};
