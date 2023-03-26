import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function MatrixInput({ size, setSize, matrix, setMatrix, setThings, accuracy, setAccuracy }) {
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
            matrix[col][row] = 1 / value
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
                        className='inputMatrixCell'
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

    

    function checkMatrix(e)
    {


        // e.preventDefault()
        // alert('Иди нахуй еблан')
    }

    return (
        <div id='main'>
            <form onSubmit={handleSubmit}>            
                {renderMatrixInputs()}
            </form>
        </div>

    )
}

export default MatrixInput