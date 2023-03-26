import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MatrixInput({ size, setSize, matrix, setMatrix, accuracy, setAccuracy }) {
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

    function checkMatrix(e)
    {

        
        // e.preventDefault()
        // alert('Иди нахуй еблан')
    }

    return (
        <div id='main'>
            <form onSubmit={handleSubmit}>
            <p>Задайте точность измерений</p>
                <input type="number" value={accuracy} onChange={(e) => {setAccuracy(e.target.value)}} />
                <p>Введите размер матрицы</p>
                <input type="number" value={size} onChange={handleSizeChange} />              
                {renderMatrixInputs()}
                <button type='submit'>sub</button>
                <Link to='result' onClick={(e) => checkMatrix(e)} >Расчитать</Link>
            </form>
        </div>

    )
}

export default MatrixInput