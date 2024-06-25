import logo from './logo.svg';
import './App.css';
import PlayGround from './pages/playGround/playGround';
import HomePage from './pages/homepage/homePage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./config/authProvider";
import ProtectedRoute from "./config/protectedRoute";

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route exact path="/" element={<HomePage/>}/>
                        <Route path="/play" element={<ProtectedRoute><PlayGround/></ProtectedRoute>}/>
                    </Routes>
                </AuthProvider>
            </Router>

        </div>
    );
}

export default App;
