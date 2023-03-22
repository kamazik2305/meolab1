import React, { useState } from 'react'

function MatrixInput() {
    const [rows, setRows] = useState(2) // начальное количество строк матрицы 
    const [cols, setCols] = useState(2) // начальное количество столбцов матрицы 
    const [matrix, setMatrix] = useState(
        Array.from({ length: rows }, () => Array.from({ length: cols }, () => ''))
    )
    const handleInputChange = (event, row, col) => {
        const value = event.target.value
        const newMatrix = [...matrix]
        newMatrix[row][col] = value
        setMatrix(newMatrix)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(matrix.flat()) // выводит в консоль значения всех инпутов в одном массиве } 
    }

    const renderMatrixInputs = () => {
        const matrixInputs = []
        for (let i = 0; i < rows; i++) {
            const rowInputs = []
            for (let j = 0; j < cols; j++) {
                rowInputs.push(
                    <input
                        key={`${i}-${j}`}
                        type="number"
                        value={matrix[i][j]}
                        onChange={(event) => handleInputChange(event, i, j)}
                    />
                )
            }
            matrixInputs.push(<div key={i}>{rowInputs}</div>)
        }
        return matrixInputs
    }

    const handleRowsChange = (event) => {
        const value = event.target.value
        setRows(value)
        setMatrix(
            Array.from({ length: value }, () =>
                Array.from({ length: cols }, () => '')
            )
        )
    }

    const handleColsChange = (event) => {
        const value = event.target.value
        setCols(value)
        setMatrix(
            Array.from({ length: rows }, () =>
                Array.from({ length: value }, () => '')
            )
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rows:
                <input type="number" value={rows} onChange={handleRowsChange} />
            </label>
            <label>
                Columns:
                <input type="number" value={cols} onChange={handleColsChange} />
            </label>
            {renderMatrixInputs()}
            <button type="submit">Submit</button>
        </form>
    )
}

export default MatrixInput