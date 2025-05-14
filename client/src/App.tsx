import "./App.css";

function App() {
	return (
		<div className="app-container">
			<header className="app-header">
				<h1>Carbon Tracker</h1>
			</header>
			<main className="app-main">{/* Main content will go here */}</main>
			<footer className="app-footer">
				<p>&copy; {new Date().getFullYear()} Carbon Trackera</p>
			</footer>
		</div>
	);
}

export default App;
