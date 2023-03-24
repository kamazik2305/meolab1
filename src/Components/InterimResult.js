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

    const pushValues = (values, resultArray, message) => {
        resultArray.push(
            <div>
                <a> {message} </a>
                {values.map(value => (
                    <a key={value}> {`${value};  `} </a>
                ))}
            </div>
        )
    }

    const getStartValues = () => {
        const resultArray = []
        resultArray.push(writeMatrix(matrix))

        const sumStrings = calculateSumStrings(matrix)
        pushValues(sumStrings, resultArray, "Суммы строк матрицы:")
        resultArray.push(
            <p> {`Общая сумма строк: ${calculateGeneralSum(sumStrings)}`} </p>
        )
        const arrayOfPi = calculateNumberPi(sumStrings, calculateGeneralSum(sumStrings))
        pushValues(arrayOfPi, resultArray, "Число ПИ:")

        return resultArray
    }


    function multiplyMatrix(mtr) {
        let currentMatrix = [];
        for (let i = 0; i < size; i++) currentMatrix[i] = [];
        for (let k = 0; k < size; k++) {
            for (let i = 0; i < size; i++) {
                let t = 0;
                for (let j = 0; j < size; j++) t += mtr[i][j] * mtr[j][k];
                currentMatrix[i][k] = t;
            }
        }
        return currentMatrix;
    }

    const getIteration = (mtr) => {
        const resultArray = []
        const arrayOfPiPrevous = calculateNumberPi(calculateSumStrings(mtr), calculateGeneralSum(calculateSumStrings(mtr)))

        const currentMatrix = multiplyMatrix(mtr)
        resultArray.push(writeMatrix(currentMatrix))

        const sumStrings = calculateSumStrings(currentMatrix)
        pushValues(sumStrings, resultArray, "Суммы строк матрицы: ")
        resultArray.push(
            <p> {`Общая сумма строк: ${calculateGeneralSum(sumStrings)}`} </p>
        )
        const arrayOfPiNext = calculateNumberPi(sumStrings, calculateGeneralSum(sumStrings))
        pushValues(arrayOfPiNext, resultArray, "Число ПИ: ")

        const difPi = []
        for (let i = 0; i < size; i++) {
            difPi[i] = arrayOfPiNext[i] - arrayOfPiPrevous[i]
        }
        pushValues(difPi, resultArray, "Разница ПИ: ")

        return resultArray

    }

    

    return (
        <div>
            <p>Начальная матрица</p>
            {getStartValues()}
            {getIteration(matrix)}
            <button>check</button>
        </div>
    )
}

export default InterimResult;