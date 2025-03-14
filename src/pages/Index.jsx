import { useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
	const [posts, setPosts] = useState(postsData);

	const onSearchChange = (value) => {
		console.log(value);
		const filteredPosts = postsData.filter(
			(item) => item.title.includes(value) || item.tags.includes(value)
		);
		setPosts(filteredPosts);
	};

	return (
		<>
			<h1>Simple Page</h1>
			<Search onSearchChange={onSearchChange} count={posts.length} />
			{posts.map((props, index) => (
				<Article {...props} key={index} />
			))}
		</>
	);
}

export default Homepage;
