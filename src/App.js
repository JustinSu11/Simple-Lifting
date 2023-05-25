import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Exercises, Chest, ChestPress, InclineChestPress, Shoulders, ShoulderPress, LateralRaises, RearDeltFly, Tricep, TricepPushdown, OverheadTricepExtension} from './pages/Exercises';
import Contact from './pages/ContactUs';

function App() {
    return(
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path='/exercises' element={<Exercises />} />
          <Route path='/exercises/chest' element={<Chest />} />
          <Route path='/exercises/chest/chestpress' element={<ChestPress />} />
          <Route path='/exercises/chest/inclinechestpress' element={<InclineChestPress />} />
          <Route path='/exercises/shoulders' element={<Shoulders />} />
          <Route path='/exercises/shoulders/shoulderpress' element={<ShoulderPress />} />
          <Route path='/exercises/shoulders/lateralraises' element={<LateralRaises />} />
          <Route path='/exercises/shoulders/reardeltfly' element={<RearDeltFly />} />
          <Route path='/exercises/tricep' element={<Tricep />} />
          <Route path='/exercises/tricep/triceppushdown' element={<TricepPushdown />} />
          <Route path='/exercises/tricep/overheadtricepextension' element={<OverheadTricepExtension />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    );
}

export default App;
