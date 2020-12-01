import './App.css';
import Nav from './Components/Nav/Nav';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="origin">
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
