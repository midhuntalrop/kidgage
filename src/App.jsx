import "./App.css";
import Footer from "./Components/_components/Footer";
import Navbar from "./Components/_components/Navbar";
import Dashboard from "./Components/Pages.jsx/Dashboard";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Dashboard />
            <Footer/>
        </div>
    );
}

export default App;
