import InterimResult from "../Components/InterimResult"

export const ResultPage = ({ size, matrix, accuracy, things }) => {

    const checkParams = () => {
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
        return ok
    }

    if(checkParams())
    {
        return (
            <InterimResult size={size} matrix={matrix} accuracy={accuracy} things={things} />
        )
    }
    else{
        return(
            <div>Не все значения заполнены или заполнены неправильно</div>
        )
    }
    
}