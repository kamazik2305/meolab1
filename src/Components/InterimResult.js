import "./style.css"

function InterimResult({ size, matrix, accuracy, things }) {


    let ok

    const writeThingArray = () => {
        const resultArray = []
        const thingArray = []
        for (let i = 0; i < size; i++) {
            thingArray.push(
                <input
                    value={things[i]}
                    className='inputThingCell'
                    key={`${i}`}
                    type="number"
                    placeholder={things[i]}
                    readOnly='readonly'
                />
            )
        }
        resultArray.push(<form className="thingform"> {thingArray} </form>)
        return resultArray
    }

    const writeMatrix = (mtr) => {
        const resultArray = []
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
        resultArray.push(<div> {currentMatrix} </div>)
        return resultArray
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
        const currentArray = []
        for(let i =0; i<size; i++)
        {
            currentArray.push(
                <a> {`${things[i]}: ${values[i]};   `} </a>
            )
        }
        resultArray.push(
            <div>
                <a> {message} </a>
                {currentArray}
            </div>
        )
        
    }

    const getStartValues = () => {
        const resultArray = []
        resultArray.push(
            <div className="tables">
                {writeThingArray()}
                {writeMatrix(matrix)}
            </div>
        )

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

    function sortArray(param) {
        return (a, b) => a[param] < b[param] ? 1 : -1;
    }

    const getIteration = (mtr, index) => {
        const resultArray = []
        const arrayOfPiPrevous = calculateNumberPi(calculateSumStrings(mtr), calculateGeneralSum(calculateSumStrings(mtr)))

        const currentMatrix = multiplyMatrix(mtr)
        resultArray.push(
            <div className="tables">
                {writeThingArray()}
                {writeMatrix(currentMatrix)}
            </div>
        )

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

        if (!(ok)) {
            let thingPiArray = []
            for (let i = 0; i < size; i++) {
                thingPiArray[i] = { thing: things[i], pi: arrayOfPiNext[i] }
            }
            thingPiArray = thingPiArray.sort(sortArray('pi'))
            resultArray.push(
                <div>
                    <a> значения вектора ПИ по убыванию: </a>
                    {thingPiArray.map(value => (
                        <p key={value}> {`${value.thing} - ${value.pi}; `} </p>
                    ))}
                </div>
            )
        }

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