import axios from "axios";
const URL = "http://localhost:8080/users/"

export const getUsers = async function () {
    const users = await axios.get(URL)
    return users.data
}

export const addUser = async function (user) {
    const newUser = await axios.post(URL,user)
    return newUser.data
}