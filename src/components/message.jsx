import React from "react";
import { useState, useEffect } from "react";




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
    
      return (
        <div>
          <form action="" method="post">
            <label for="fname">MessageBox</label>
            <input
              type="text"
              value={newMsg}
              placeholder='text'
              onChange={(e) => {
                setNewMsg(e.target.value);
              }}></input>
    
            <input type="submit" value="Submit">Submit</input>
          </form>
        </div>
      );
    };

    export default NewMsg