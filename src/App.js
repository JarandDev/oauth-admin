import './App.css';
import Login from "./routes/Login";
import Register from "./routes/Register";
import NewApplication from "./routes/new/NewApplication";

function App() {
    return (
        <div className="App">
            <h1>OAuth Administration</h1>
            <Login/>
            <Register/>
            <NewApplication/>
        </div>
    );
}

export default App;
