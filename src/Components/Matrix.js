import { useState } from 'react';

function Matrix({rows, columns}) {
    const [values, setValues] = useState(Array(rows).fill().map(() => Array(columns).fill("")));

    function calculate() {
        console.log(values);
    }

    function handleInputChange(event, row, column) {
        const newValues = [...values];
        newValues[row, column] = event.target.value;
        setValues(newValues);
    }

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let key = 1;
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push(
                <td key={key}>
                    <input type="text" value={values[i,j]} onChange={(event) => handleInputChange(event, i, j)} />
                </td>
            );
            key++;
        }
        matrix.push(<tr key={i}>{row}</tr>);
    }

    return (
        <div id="startmatrix">
            <table>
                <tbody>{matrix}</tbody>
            </table>
            <button onClick={calculate}>Выполнить расчет</button>
        </div>
    );
}

export default Matrix;