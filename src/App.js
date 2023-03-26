import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InterimResult from './Components/InterimResult';
import MatrixInput from './Components/MatrixInput';

function App() {

  const [size, setSize] = useState(3)
  const [matrix, setMatrix] = useState(
    Array.from({ length: size }, () => Array.from({ length: size }, () => ''))
  )
  const[accuracy, setAccuracy] = useState(0.05)

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MatrixInput size={size} setSize={setSize} matrix={matrix} setMatrix={setMatrix}
        accuracy={accuracy} setAccuracy={setAccuracy} />} />
        <Route path='result' element={<InterimResult size={size} matrix={matrix} accuracy={accuracy} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
