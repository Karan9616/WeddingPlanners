import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import Rout from './rout';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Sidebar />
      </div>

      <BrowserRouter>
        <Rout />
      </BrowserRouter>

    </div>
  );
}

export default App;
