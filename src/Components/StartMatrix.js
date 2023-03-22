import { render } from "@testing-library/react"

export const StartMatrix = ({rows, columns}) =>{

        let matrix = []
        for(let i=0; i<rows; i++)
        {
            let key = 1
            let row = []
            for(let j=0; j<columns; j++)
            {
                row.push(<td key={key} ><input type="text"/></td>) 
                key ++
            }
            matrix.push(<tr> {row} </tr>)
        }
        return(
            <div id="startmatrix">
                {matrix}
                <p> </p>
                <button>Выполнить расчет</button>
            </div>
        )   
}