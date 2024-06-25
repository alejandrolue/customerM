import logo from './logo.svg';
import './App.css';
import PlayGround from './pages/playGround/playGround';
import HomePage from './pages/homepage/homePage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route path="/play" element={<PlayGround/>}/>
            </Routes>
        </Router>
        
    </div>
  );
}

export default App;
