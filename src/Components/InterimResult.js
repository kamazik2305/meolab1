import { useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css"

function InterimResult({ size, matrix }) {

    const writeMatrix = (mtr) => {
        const currentMatrix = []
        for (let i = 0; i < size; i++) {
            const rowInputs = []
            for (let j = 0; j < size; j++) {
                rowInputs.push(
                    <input
                        key={`${i}-${j}`}
                        type="number"
                        placeholder={mtr[i][j]}
                        readOnly='readonly'
                    />
                )
            }
            currentMatrix.push(<div key={i}>{rowInputs}</div>)
        }
        return currentMatrix
    }

    const calculateSumStrings = (mtr) => {
        const sumStrings = []
        for (let i = 0; i < size; i++) {
            sumStrings[i] = 0
            for (let j = 0; j < size; j++) {
                sumStrings[i] = sumStrings[i] + mtr[i][j]
            }
        }
        return sumStrings
    }

    const calculateGeneralSum = (sumStrings) => {
        let sum = 0
        for (let i = 0; i < size; i++) {
            sum = sum + sumStrings[i]
        }
        return sum
    }

    const calculateNumberPi = (sumStrings, generalSum) => {
        const arrayOfPi = []
        for (let i = 0; i < size; i++) {
            arrayOfPi[i] = sumStrings[i] / generalSum
        }
        return arrayOfPi
    }

    const getStartValues = () => {
        const resultArray = []
        const currentMatrix = matrix
        resultArray.push(writeMatrix(matrix))

        const sumStrings = calculateSumStrings(matrix)
        resultArray.push(
            <div>
                <a> Суммы строк матрицы: </a>
                {sumStrings.map(sum => (
                    <a key={sum}> {`${sum};  `} </a>
                ))}
            </div>
        )
        resultArray.push(
            <p> {`Общая сумма строк: ${calculateGeneralSum(sumStrings)}`} </p>
        )
        const arrayOfPi = calculateNumberPi(sumStrings, calculateGeneralSum(sumStrings))
        resultArray.push(
            <div>
                <a> Число ПИ: </a>
                {arrayOfPi.map(pi => (
                    <a key={pi}> {`${pi};  `} </a>
                ))}
            </div>
        )
        return resultArray
    }



    return (
        <div>
            <p>Начальная матрица</p>
            {getStartValues(matrix)}
            <button>check</button>
        </div>
    )
}

export default InterimResult;