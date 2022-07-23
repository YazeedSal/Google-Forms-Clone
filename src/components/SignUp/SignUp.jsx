import React, { useState } from "react";
//import { addUser, getUsers } from "";
import { addUser } from "../../services/ApiManager";

const SignUp = () => {
  const [user, setNewUser] = useState({ email: "", password: "" });

  const handleInput = function (property, value) {
    const newUser = { ...user };
    newUser[property] = value;
    setNewUser(newUser);
  };
  const handleClick = async function () {
    if (!user.email || !user.password) {alert("Please Check If you have entered your email and password")};
    try {
      await addUser(user);
      setNewUser({ email: "", password: "" });
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  return (
    <div>
      <h1>Please Sign Up</h1>
      <input
        type="text"
        value={user.email}
        placeholder="Example@gmail.com"
        onChange={(e) => handleInput("email", e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <br />
      <input
        type="text"
        value={user.password}
        placeholder="Password"
        onChange={(e) => handleInput("password", e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <br />
      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
};

export default SignUp;
