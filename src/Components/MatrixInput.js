import React, { useState } from 'react'

function MatrixInput({size, setSize, matrix, setMatrix}) {
    //const [size, setSize] = useState(2) // начальный размер матрицы 
    // const [matrix, setMatrix] = useState(
    //     Array.from({ length: size }, () => Array.from({ length: size }, () => ''))
    // )

    const handleMatrixInputChange = (event, row, col) => {
        const value = event.target.value
        const newMatrix = [...matrix]
        if (row == col) { matrix[row][col] = 1 }
        else {
            matrix[row][col] = Number(value)
            matrix[col][row] = 1/value
        }
        setMatrix(newMatrix)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(matrix.flat()) // выводит в консоль значения всех инпутов в одном массиве } 
    }

    const renderMatrixInputs = () => {
        const matrixInputs = []
        for (let i = 0; i < size; i++) {
            const rowInputs = []
            for (let j = 0; j < size; j++) {
                rowInputs.push(
                    <input
                        key={`${i}-${j}`}
                        type="number"
                        value={matrix[i][j]}
                        onChange={(event) => handleMatrixInputChange(event, i, j)}
                    />
                )
            }
            matrixInputs.push(<div key={i}>{rowInputs}</div>)
        }
        return matrixInputs
    }

    const handleSizeChange = (event) => {
        const value = event.target.value
        setSize(value)
        setMatrix(
            Array.from({ length: value }, () =>
                Array.from({ length: size }, () => '')
            )
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rows:
                <input type="number" value={size} onChange={handleSizeChange} />
            </label>
            {renderMatrixInputs()}
            <button type="submit">Submit</button>
        </form>
    )
}

export default MatrixInput