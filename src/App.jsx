import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";

function App() {
	return (
    <div className="App">
      <Article name="Aa" titles={["hai", "hi", "he"]} />
      <br></br>
      <Article name="Nn" titles={["ho", "hei", "hu"]} />
    </div>
	);
}

export default App;
