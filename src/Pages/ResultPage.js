import InterimResult from "../Components/InterimResult"

export const ResultPage = ({ size, matrix, accuracy, things }) => {
    return (
        <InterimResult size={size} matrix={matrix} accuracy={accuracy} things={things} />
    )
}