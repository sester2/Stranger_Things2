import React from "react";
import { useState, useEffect } from "react";
import {Profile} from "./Profile";

const NewMsg = () => {
  const [newMsg, setNewMsg] = useState("");

  console.log(newMsg);

  useEffect(() => {
    const makeMsg = async () => {
      const result = await newMsg;
      setNewMsg(result);
    };
    makeMsg();
  });
// When the click event is fired this should send a response to the API with 
// The handleSubmit is triggered by the submit button 
const handleSubmit = async (event) => {
  event.preventDefault();
  createPost(title, description, price, willDeliver, location);
}  
const handleChange = (event) => {
    setnewMsg(event.taget.value);
  };

  return (
    <div>
      <form action="" method="post">
        <label for="fname">MessageBox</label>
        <input
          type="text"
          value={newMsg}
          placeholder="text"
          onChange={(e) => {
            setNewMsg(e.target.value);
          }}
        ></input>

        <input type="submit" value="Submit">
          Submit
        </input>
      </form>
    </div>
  );
};

export default NewMsg;
