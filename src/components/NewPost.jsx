import { useState, useEffect } from "react";
import { createPost } from "../api";

const NewPost = () => {
  const [newPost, setNewPost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [willDeliver, setwillDeliver] = useState(false);
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    createPost(title, description, price, willDeliver, location);

    // When someone types a messge into your form the handle submit function is going to grab the value of
    console.log("This is the handleSubmit");
    console.log(event.target.value);
  };
  const handleChange = (event) => {
    setnewPost(event.taget.value);
  };

  useEffect(() => {
    const makePost = async () => {
      const result = newPost();
      const theNewPost = setNewPost(result);
      console.log(theNewPost);
    };
    makePost();
    console.log(makePost);
  }, []);

  return (
    <div className="newPost">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="title"></input>
        <input
          type="text"
          onChange={handleChange}
          placeholder="description"
        ></input>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Will Deliver?"
        ></input>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Location "
        ></input>
        <button type="submit">Submit</button>
        <p>testing testing </p>
      </form>
    </div>
  );
};

export default NewPost;
