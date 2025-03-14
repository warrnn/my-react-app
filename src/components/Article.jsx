function Article(props) {
	return (
		<>
			<h3>{props.name}</h3>
			<small>
				Date: {props.date}, tags: {props.tags.join(", ")}
			</small>
		</>
	);
}

export default Article;
