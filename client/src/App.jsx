import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignInPage from './pages/Signin';
import SignUpPage from './pages/Signup';
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
    const location = useLocation();

    // Define routes where the Navbar should be hidden
    const hideNavbarRoutes = ['/signin', '/signup'];

    return (
        <div className="App">
            {/* Conditionally render Navbar */}
            {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signin" element={<SignInPage />} />
                <Route path="signup" element={<SignUpPage />} />
            </Routes>
        </div>
    );
}

export default App;
