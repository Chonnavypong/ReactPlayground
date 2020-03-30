import React from "react";
import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom";

import form_Hook from "../components/Form/FormHook/FormHook";
import form_Hook_Yup from "../components/Form/FormHookYup/FormHookYup";

const AppForm = () => {
	let { path, url } = useRouteMatch();
	return (
		<div className="container">
			<h1>App Form </h1>
			<div>
				<ul>
					<li>
						<Link to={`${url}/form_Hook`}> Form Hook </Link>
					</li>
					<li>
						<Link to={`${url}/form_Hook_Yup`}> Form Hook Yup </Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path={path}>
					<h3>Please select a topic.</h3>
				</Route>
				<Route path={`${path}/form_Hook`} component={form_Hook} />
				<Route path={`${path}/form_Hook_Yup`} component={form_Hook_Yup} />
			</Switch>
		</div>
	);
};


export default AppForm;
