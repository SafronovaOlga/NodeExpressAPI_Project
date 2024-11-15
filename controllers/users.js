import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
    console.info("GET request to endpoint '/users' received.");

    res.send(users.length ? users: "There are not a user.");
};

export const postUsers = (req, res) => {
    console.info("POST request to endpoint '/users' received.");

    // create user
    const user = req.body;
    console.info(user);
    const id = uuid();
    users.push({...user, id: id});

    res.send("User created successful!")
};

export const getUserById = (req, res) => {
    console.info("GET request to endpoint '/users/id' received.");

    const userId = req.params.id;
    const foundUser = users.find((user) => user.id === userId);

    res.send( foundUser ? foundUser : "User not found." );
};

export const deleteUserById = (req, res) => {
    console.info("DElETE request to endpoint '/users/id' received.");

    const userID = req.params.id;
    users = users.filter((user) => user.id !== userID);

    res.send("User was deleted successfully.");
};

export const patchUserById = (req, res) => {
    console.info("PATCH request to endpoint '/users/id' received.");

    const userID = req.params.id;

    const newFirstName = req.body.firstName;
    const newLastName = req.body.lastName;
    const newAge = req.body.age;

    const foundUser = users.find((user) => user.id === userID);

    if(newFirstName) {
        foundUser.firstName = newFirstName;
    }
    if(newLastName) {
        foundUser.lastName = newLastName;
    }
    if(newAge) {
        foundUser.age = newAge;
    }

    res.send("User was updated successfully.");
};