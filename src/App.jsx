import "./App.css";
import Header from "./components/Header";

function App() {
	const element = <h2>Hello, JSX!</h2>;

	return (
		<div style={{ textAlign: "center", padding: "20px" }}>
			<Header title="Welcome to My App" />
			{element}
			<p>My first React app!</p>
		</div>
	);
}

export default App;
