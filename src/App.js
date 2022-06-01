import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Posts from "./Components/Posts";
import { useState } from "react";
import AddPost from "./Components/AddPost";
function App() {
  const onDelete = (post)=> {
    // alert("delete");
    
  setPosts(posts.filter((e)=>{
    return e!==post;

  }))
  
}
const addPost = (title, content)=>{
  console.log("i am adding this post", title, content)
}
    
const [posts, setPosts] = useState([
  {
    srno: "0",
    title: "abc",
    content: "abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"

  },
  {
    srno: "1",
    title: "abc",
    content: "abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"

  },
  {
    srno: "2",
    title: "abc",
    content: "abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"

  },
  {
    srno: "3",
    title: "abc",
    content: "abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc"

  }]);
  return (

    <>
      <Header title="Blog-App"/>
      <AddPost addPost={addPost} />
        <Posts posts={posts} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
