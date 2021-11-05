import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Album from './Components/Album';
import Users from './Components/Users';
import './App.css'


export default function App() {

  const [albums, setAlbums] = useState();
  const [users, setUsers] = useState();
  const [userTodos, setUserTodos] = useState();


  useEffect(() => {
    fetchAlbums();
    fetchUsers();
  }, []);

  const fetchAlbums = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    let json = await response.json();
    setAlbums(json);
  };

  const fetchUsers = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/");
    let json = await response.json();
    setUsers(json);
  };

  console.log(users)

  if (!albums) return <h3>...Loading</h3>;
  if (!users) return <h3>...Loading</h3>;

  return (
    <Router>
      <div className="App">
      <nav id="navbar" className="nav">
        <ul class="nav-list">
          <li>
          <Link to="/">Home</Link></li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/users">Users</Link>
          </li>
          <li>
          <Link to="/album">Album</Link>
          </li>
        </ul>
      </nav>	
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/album">
            <Album albums={albums}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users users={users} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <img src = 'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo' alt="Italian Trulli" />;
}

function About() {
  return <div class="header">
  <h1>About Me</h1>
  <h2>Uğur Özcan</h2>
  <p>Software Engineer</p>
</div>;
}

