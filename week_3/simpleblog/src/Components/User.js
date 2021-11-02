
   
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function User() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});
    const [userTodos, setUserTodos] = useState({});

	const { id } = useParams();

	useEffect(() => {
		fetchUser(id).finally(() => setLoading(false))
        fetchUserTodo(id).finally(() => setLoading(false));
	}, [id]);

    const fetchUser = async (id) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let json = await response.json();
        setUser(json);
      };

      const fetchUserTodo = async (id) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
        let json = await response.json();
        setUserTodos(json);
      };

	return (
		<div>
			<h2>User Detail</h2>
			{loading && <div>Loading...</div>}
			{!loading && <code>{JSON.stringify(user)}</code>}

			<br />
			<br />

			<Link to={`/users/${parseInt(id) + 1}`}>
				Next User ({parseInt(id) + 1})
			</Link>

            <h2>User Todos</h2>
			{loading && <div>Loading...</div>}
			{!loading && <code>{JSON.stringify(userTodos)}</code>}

			<br />
			<br />

			<Link to={`/users/${parseInt(id) + 1}/todos`}>
				Next User ({parseInt(id) + 1})
			</Link>


		</div>
	);
}

export default User;