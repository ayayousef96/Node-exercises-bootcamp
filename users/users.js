import fs from "fs";
import { v4 as uuidv4 } from "uuid";


const Save = (users) => {
    const dataJson = JSON.stringify(users);
    fs.writeFileSync("users.json", dataJson);
  };
  
  const Load = () => {
    try {
      const dataBuffer = fs.readFileSync("users.json");
      const dataJson = dataBuffer.toString();
      return JSON.parse(dataJson);
    } catch (e) {
      return [];
    }
  };

//add a user
export function addUser(userName, userEmail) {
  const users = Load();

  users.push({
    id: uuidv4(),
    name: userName,
    email: userEmail,
  });

  Save(users);
}

//delete a user

export function removeUser(userID) {
  const users = Load();

  const newUsers = users.filter((user) => {
    return user.id !== userID;
  });

  Save(newUsers);
}

//update a user
export function updateUser(userID, userName, userEmail) {
  const users = Load();

  const theUser = users.find((user) => {
    return user.id === userID;
  });

  if (theUser) {
    const editedUser = {
      id: userID,
      name: userName || theUser.name,
      email: userEmail || theUser.email,
    };
    const newUsers = users.map((user) => {
      return user.id === userID ? editedUser : user;
    });
    Save(newUsers);
  }
}

//read a user

export function readUser(userID) {
  const users = Load();
  const user = users.find((user) => {
    return user.id === userID;
  });

  if (user) {
    console.log("name: ", user.name, "email: ", user.email);
  } else {
    console.log("User not found");
  }
}

