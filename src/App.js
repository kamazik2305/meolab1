import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import InterimResult from './Components/InterimResult';
import MatrixInput from './Components/MatrixInput';
import RatableThings from './Components/RatableThings';
import { InputPage } from './Pages/InputPage';
import { ResultPage } from './Pages/ResultPage';

function App() {

  const [size, setSize] = useState(10)
  const [matrix, setMatrix] = useState(
    Array.from({ length: size }, () => Array.from({ length: size }, () => ''))
  )
  const [accuracy, setAccuracy] = useState(0.05)
  const [things, setThings] = useState(
    Array.from({ length: size }, () => '')
  )


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InputPage size={size} setSize={setSize} matrix={matrix} setMatrix={setMatrix}
          things={things} setThings={setThings} accuracy={accuracy} setAccuracy={setAccuracy} />} />
        <Route path='result' element={<ResultPage size={size} matrix={matrix} accuracy={accuracy} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
