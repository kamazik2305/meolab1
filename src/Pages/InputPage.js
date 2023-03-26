import { Link } from "react-router-dom"
import MatrixInput from "../Components/MatrixInput"
import RatableThings from "../Components/RatableThings"

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

    return (
        <div>
            <p>Введите количество объектов для сравнения</p>
            <input type="number" value={size} onChange={handleSizeChange} />
            <RatableThings size={size} things={things} setThings={setThings} />
            <MatrixInput size={size} setSize={setSize} matrix={matrix} setMatrix={setMatrix}
                setThings={setThings} accuracy={accuracy} setAccuracy={setAccuracy} />
            <p>Задайте точность измерений</p>
            <input type="number" value={accuracy} onChange={(e) => { setAccuracy(e.target.value) }} />
            <Link to='result' >Расчитать</Link>
        </div>
    )
}