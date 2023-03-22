import { useState } from 'react';
import MatrixInput from './Components/MatrixInput';

function App() {

  const [size, setSize] = useState(3)



  return (
    <div id="main">
      <p>Введите размер матрицы</p>
      <input id="rows" type="number" placeholder="Введите количество строк" value={size}
        onChange={(e) => setSize(e.target.value)} />
      <MatrixInput/>
    </div>
  );
}

export default App;
