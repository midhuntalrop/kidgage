import "./App.css";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";

import Dashboard from "./Components/Pages.jsx/Dashboard";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Dashboard />
            <Footer />
        </div>
    );
}

export default App;
