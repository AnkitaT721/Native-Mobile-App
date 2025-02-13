import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import FooterMenu from "../Components/Menus/FooterMenu";
import axios from "axios";
import PostCard from "../Components/PostCard";

const MyPosts = () => {
    //local state
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    //get user posts
    const getUserPosts = async () => {
        try {
            setLoading(true)
            const {data} = await axios.get("/post/get-user-posts")
            setLoading(false)
            setPosts(data?.userPosts)
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert(error)
        }
    }
    //initial
    useEffect(() => {
        getUserPosts()
    }, [])
  return (
    <View style={styles.container}>
      <ScrollView>
        <PostCard posts={posts} myPostsScreen={true}/>
        {/* <Text>{JSON.stringify(posts, null, 4)}</Text> */}
      </ScrollView>
      <View style={{ backgroundColor: "#ffffff" }}>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //   margin: 10,
      marginTop: 10,
      justifyContent: "space-between",
    },
  });

export default MyPosts;
