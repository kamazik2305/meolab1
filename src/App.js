import { useState } from 'react';
import MatrixInput from './Components/MatrixInput';

function App() {

  const [size, setSize] = useState(5)
  const [matrix, setMatrix] = useState(
    Array.from({ length: size }, () => Array.from({ length: size }, () => ''))
  )

  return (
    <div id="main">
      <p>Введите размер матрицы</p>
      {/* <input id="rows" type="number" placeholder="Введите количество строк" value={size}
        onChange={(e) => setSize(e.target.value)} /> */}
      <MatrixInput size={size} setSize={setSize} matrix={matrix} setMatrix={setMatrix} />
    </div>
  );
}

export default App;
