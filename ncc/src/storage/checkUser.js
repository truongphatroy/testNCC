/* Create user and handling with Local storeage */
import { userArr } from "./storage";

export function checkRestoreUser(restoreUser) {
  let isActiveUser = userArr.find((user) => user?.email === restoreUser.email);
  if (isActiveUser) {
    return isActiveUser;
  } else {
    return false;
  }
}

export function checkExistingUser(enteredEmail, enteredPassword) {
  let isUser = userArr.find(
    (user) => user?.email === enteredEmail && user?.password === enteredPassword
  );
  if (isUser) {
    return { email: isUser.email, fullName: isUser.fullName };
  } else {
    return false;
  }
}
