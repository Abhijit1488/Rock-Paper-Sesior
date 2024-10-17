
import './App.css';
import Rock from './rock';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
function App() {
  return (
    <>
      <div className='App'> 
      <Router>
        <Routes>
          <Route exact path='/Home' element={<Rock/>} />
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
