import './App.css';
// import './bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";


function App() {
	return (
		<div className="app">
			<Header />
			<Intro />
			<Footer />
		</div>
	);
}

export default App;