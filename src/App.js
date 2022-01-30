import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import { Login } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
