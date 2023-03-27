import { Link } from "react-router-dom"
import MatrixInput from "../Components/MatrixInput"
import RatableThings from "../Components/RatableThings"
import '../Components/style.css'

export const InputPage = ({ size, setSize, matrix, setMatrix, things, setThings, accuracy, setAccuracy }) => {

    const handleSizeChange = (event) => {
        const value = event.target.value
        setSize(value)
        setMatrix(
            Array.from({ length: value }, () =>
                Array.from({ length: size }, () => '')
            )
        )
        setThings(
            Array.from({ length: value }, () => '')
        )
    }

    const checkParams = (e) => {
        let ok = true
        for (let i = 0; i < size; i++) {
            if (things[i] == '')
                ok = false
        }
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if ((matrix[i][j] == '') || (matrix[i][j] < 0) || (matrix[i][j] > 10))
                    ok = false
                if (i != j) {
                    if (matrix[i][j] == 1)
                        ok = false
                }

            }
        }
        if (!(ok)) {
            e.preventDefault()
            alert("Не все значения заполнены или заполнены неправильно")
        }
    }



    return (
        <div>
            <p>Введите количество объектов для сравнения</p>
            <input type="number" value={size} onChange={handleSizeChange} />
            <p>Введите объекты для сравнения и их оценки (оценки от 2 до 10 или от 1/2 до 1/9) </p>
            <div className="tables">
                <RatableThings size={size} things={things} setThings={setThings} />
                <MatrixInput size={size} setSize={setSize} matrix={matrix} setMatrix={setMatrix}
                    setThings={setThings} accuracy={accuracy} setAccuracy={setAccuracy} />
            </div>

            <p>Задайте точность измерений</p>
            <input type="number" value={accuracy} onChange={(e) => { setAccuracy(e.target.value) }} />
            <Link to='result' onClick={(e) => { checkParams(e) }} >Расчитать</Link>
        </div>
    )
}