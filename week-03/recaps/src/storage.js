// store data
const storeData = (key, data) => {
  if (typeof data === "object") {
    localStorage.setItem(key, JSON.stringify(data));
    return;
  }
  localStorage.setItem(key, data);
};

// get data
const getData = (key) => {
  const data = localStorage.getItem(key);
  if (!data) throw new Error("Data not found");
  if (data.includes("[") || data.includes("{")) {
    return JSON.parse(data);
  }
  return data;
};

// updating data
const updateData = (key, data, newInfo) => {
  if (Array.isArray(data)) {
    const newArray = data.map((item) => {
      if (item.id === newInfo.id) {
        return { ...item, title: newInfo.title };
      }
      return item;
    });
    localStorage.setItem(key, JSON.stringify(newInfo));
    return;
  }
  localStorage.setItem(key, data);
};

// deleting data
const deleteData = (key, data, id) => {
  if (Array.isArray(data)) {
    const newArray = data.filter((item) => item.id !== id);
    localStorage.setItem(key, JSON.stringify(newArray));
    return;
  }
  localStorage.removeItem(key);
};
