import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

//context
const PostContext = createContext();

//provider
const PostProvider = ({ children }) => {
  //gloabal text
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  //get posts
  const getAllPosts = async (req, res) => {
    try {
      const { data } = await axios.get("/post/get-all-posts");
      setLoading(false);
      setPosts(data?.posts);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //initial posts
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <PostContext.Provider value={[posts, setPosts, getAllPosts]}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
