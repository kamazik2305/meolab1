import { useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css"

function InterimResult({ size, matrix, accuracy }) {


    let ok

    const writeMatrix = (mtr) => {
        const currentMatrix = []
        for (let i = 0; i < size; i++) {
            const rowInputs = []
            for (let j = 0; j < size; j++) {
                rowInputs.push(
                    <input
                        className='inputMatrixCell'
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

    const getIteration = (mtr, index) => {
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

        // for (let i = 0; i < size; i++) {
        //     if (difPi[i] > Number(accuracy)) {
        //         ok = false
        //         console.log(`${difPi[i]} > ${accuracy}`)
        //     }
        // }
        ok = false
        let i = 0
        while (!(ok) && i < size) {
            if ((difPi[i] > Number(accuracy)) || (difPi[i] < -1 * Number(accuracy))) {
                ok = true
                console.log(`${difPi[i]} > ${accuracy}`)
            }
            i++
        }

        ok ? resultArray.push(<p> {`Итерация ${index}:`} </p>) : resultArray.push(<a>Конец</a>)

        return resultArray

    }

    const calculateResult = () => {
        const resultArray = []
        let currentMatrix = matrix
        let index = 2
        resultArray.push(getStartValues())
        resultArray.push(<p>Итерация 1:</p>)
        resultArray.push(getIteration(currentMatrix, index))
        currentMatrix = multiplyMatrix(currentMatrix)
        while (ok) {
            currentMatrix = multiplyMatrix(currentMatrix)
            resultArray.push(getIteration(currentMatrix, index))
            index++
        }




        return resultArray
    }

    return (
        <div>
            <p>{`Точность измерений: ${accuracy}`}</p>
            <p>Начальная матрица</p>
            {calculateResult()}
        </div>
    )
}

export default InterimResult;