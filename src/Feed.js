import React, { useEffect } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import CreateIcon from "@mui/icons-material/Create";
import CollectionsIcon from "@mui/icons-material/Collections";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import { useState } from "react";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={CollectionsIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={OndemandVideoIcon} title="Video" color="E7A33E" />
          <InputOption Icon={EventIcon} title="Event" color="C0CBCD" />
          <InputOption
            Icon={ArticleIcon}
            title="Write article"
            color="7FC15E"
          />
        </div>
      </div>
      {/* Posts */}

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={user.photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
