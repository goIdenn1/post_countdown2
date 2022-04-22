import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Quiz from './Quiz.js';
import Result from './Result.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      Hi
     
    <Routes>
      <Route path="/" exact>
        <Home />

      </Route>
      <Route path="/quiz" exact>
        <Quiz />
      </Route>
      <Route path="/result" exact>
        <Result />
      </Route>
    </Routes>
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
