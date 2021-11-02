import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Album from './Components/Album';
import Users from './Components/Users';


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

        <Link to="/">Home</Link> 

        <Link to="/about">About</Link>

        <Link to="/users">Users</Link>

        <Link to="/album">Album</Link>

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
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

