import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {

    async function getPosts() {
      try {
        console.log("fetching results")
        const results = await fetch("https://twitter-clone-backendv2.herokuapp.com/posts");
        const posts = await results.json();
        setAllPosts(posts)
        console.log(posts)
      } catch (error) {
        console.log(error)
      }
      
    }

    getPosts();

  }, [])
  return (
    <View style={styles.container}>
      {allPosts.map(posts => 
        <Text>{posts.postText}</Text>
        )}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
