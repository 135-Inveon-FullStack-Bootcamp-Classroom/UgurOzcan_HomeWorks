import React from 'react';
import { NavLink, Switch, Route, useRouteMatch} from "react-router-dom";

import User from "./User";

function Users(props) {
	const { path, url } = useRouteMatch();

    return (



        <div className="container">
            <div className="row">
            <h2>Users</h2>
            
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
						<NavLink activeClassName="active" to={`${url}/${user.id}`}>
							{user.name}
						</NavLink>
					</li>
				))}
			</ul>

			<Switch>
				<Route exact path={path}>
					<h3>Please select a user.</h3>
				</Route>
				<Route path={`${path}/:id`} component={User} />
			</Switch>
		</div>
        </div>
    );
}


export default Users;
