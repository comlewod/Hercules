import React from 'react';
import { Link, Route } from 'react-router-dom';

const Category = ({ match }) => {
	//match.url用来构建嵌套链接，match.path用来构建嵌套路由
	return (
		<div>
			<div>
				<Link to={`${match.url}/test`}>Test</Link>
			</div>
			<Route path={`${match.path}/:name`} render={ ({match}) => ( <div>haha</div> )} />
		</div>
	);
};

export default Category;
