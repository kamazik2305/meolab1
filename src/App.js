import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import InterimResult from './Components/InterimResult';
import MatrixInput from './Components/MatrixInput';
import RatableThings from './Components/RatableThings';

function App() {

  const [size, setSize] = useState(10)
  const [matrix, setMatrix] = useState(
    Array.from({ length: size }, () => Array.from({ length: size }, () => ''))
  )
  const [accuracy, setAccuracy] = useState(0.05)
  const [things, setThings] = useState(
    Array.from({ length: size }, () => '')
  )

  const handleSizeChange = (event) => {
    const value = event.target.value
    setSize(value)
    setMatrix(
      Array.from({ length: value }, () =>
        Array.from({ length: size }, () => '')
      )
    )
    setThings(
      Array.from({ length: value }, () => '')
    )
  }


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>
          <p>Введите количество объектов для сравнения</p>
          <input type="number" value={size} onChange={handleSizeChange} />
          <RatableThings size={size} things={things} setThings={setThings} />
          <MatrixInput size={size} setSize={setSize} matrix={matrix} setMatrix={setMatrix}
            setThings={setThings} accuracy={accuracy} setAccuracy={setAccuracy} />
          <p>Задайте точность измерений</p>
          <input type="number" value={accuracy} onChange={(e) => { setAccuracy(e.target.value) }} />
          <Link to='result' >Расчитать</Link>
        </div>} />
        <Route path='result' element={<InterimResult size={size} matrix={matrix} accuracy={accuracy} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
