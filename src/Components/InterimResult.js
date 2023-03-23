import { useState } from "react";

function InterimResult({size, matrix}) {

    let sumStrings =[1,2,3]
    let generalSum = 0
    let numberPi = []

    return (
        <div>

            {sumStrings.map(str =>(
                <p key={str} > {str} </p>
            ))}
            <button>Вывести значения</button>
            <p> {size} </p>
            <p>Общая сумма:</p>
            <p>Число ПИ по строкам:</p>
        </div>
    )
}

export default InterimResult;