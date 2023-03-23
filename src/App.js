import { useState } from 'react';
import InterimResult from './Components/InterimResult';
import MatrixInput from './Components/MatrixInput';

function App() {

  const [size, setSize] = useState(5)
  const [matrix, setMatrix] = useState(
    Array.from({ length: size }, () => Array.from({ length: size }, () => ''))
  )

  return (
    <div id="main">
      <p>Введите размер матрицы</p>
      <MatrixInput size={size} setSize={setSize} matrix={matrix} setMatrix={setMatrix} />
      <InterimResult size={size} matrix={matrix}/>
    </div>
  );
}

export default App;
