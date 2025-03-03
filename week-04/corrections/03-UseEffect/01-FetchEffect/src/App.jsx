import './App.css';
import { useState, useEffect } from 'react';
import Articles from './components/Articles';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  
  return (
    <>
    <h1>List of Articles</h1>
    <Articles posts={posts} />
      
    </>
  )
}

export default App
