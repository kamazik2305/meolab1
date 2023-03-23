import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InterimResult from './Components/InterimResult';
import MatrixInput from './Components/MatrixInput';

function App() {

  const [size, setSize] = useState(5)
  const [matrix, setMatrix] = useState(
    Array.from({ length: size }, () => Array.from({ length: size }, () => ''))
  )

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MatrixInput size={size} setSize={setSize} matrix={matrix} setMatrix={setMatrix} />} />
      <Route path='result' element={<InterimResult size={size} matrix={matrix}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
