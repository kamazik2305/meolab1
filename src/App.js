import { useState } from 'react';
import Matrix from './Components/Matrix';
import MatrixInput from './Components/MatrixInput';
import { StartMatrix } from './Components/StartMatrix';

function App() {

  const [size, setSize] = useState(0)

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
