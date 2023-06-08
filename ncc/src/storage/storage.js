/* handling with Local storeage */

// valiable
export const keyOfUserArr = "UserArr";
export const keyOfActiveUser = "ActiveUser";
export const keyOfCartList = "CartList";
/* COMMON */
// Save to Local Storage
export const saveToStorage = (key, value) => {
  console.log("logdfsd");

  return localStorage.setItem(key, JSON.stringify(value));
};

// Reading data from Local Storage
export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Delete data
export const deleteDataInStorage = (data) => {
  return localStorage.removeItem(data);
};

/* FOR USER */
// get user array
export const userArr = getFromStorage(keyOfUserArr) || [];

/*
// tetst
var totalBytes = 0;
for (var key in localStorage) {
  if (localStorage.hasOwnProperty(key)) {
    totalBytes += localStorage.getItem(key).length + key.length;
  }
}

var totalUsedSpace = (totalBytes / 1024).toFixed(2); // Đổi kết quả thành kilobyte
var maxSpace = 5 * 1024; // Dung lượng tối đa trong LocalStorage là 5MB

console.log("Dung lượng đã sử dụng: " + totalUsedSpace + " KB");
console.log("Dung lượng tối đa: " + maxSpace + " KB");
console.log("Dung lượng còn lại: " + (maxSpace - totalUsedSpace) + " KB"); */
