import './App.css';
import CallLog from './pages/CallLog';
import DialPad from './pages/DialPad';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CallLog />}/>
        <Route path="/dial" element={<DialPad />}/>
      </Routes>
    </div>
  );
}

export default App;
