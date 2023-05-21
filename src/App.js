import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Exercises, Chest, ChestPress, Shoulders } from './pages/Exercises';
import Contact from './pages/ContactUs';

function App() {
    return(
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path='/exercises' element={<Exercises />} />
          <Route path='/exercises/chest' element={<Chest />} />
          <Route path='/exercises/chest/chestpress' element={<ChestPress />} />
          <Route path='/exercises/shoulders' element={<Shoulders />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    );
}

export default App;
