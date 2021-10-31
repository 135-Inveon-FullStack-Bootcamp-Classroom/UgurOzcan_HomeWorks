import { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Album from './Components/Album';

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchMyPosts();
  }, []);

  const fetchMyPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    const json = await response.json();
    setPosts(json);
  };

  if (!posts) return <h3>...Loading</h3>;

  return (
    <div className="App">
      <Album posts={posts}/>
    </div>
  );
}

export default App;
