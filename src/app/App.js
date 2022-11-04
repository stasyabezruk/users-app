import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from '../pages/SearchPage';
import UserPage from '../pages/UserPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user/:userName" element={<UserPage />} />
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
