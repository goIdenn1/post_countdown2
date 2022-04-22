import logo from './logo.svg';
import Header from "./Header.js";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      Hi
      <Header />

    </div>
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
