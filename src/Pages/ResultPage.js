import InterimResult from "../Components/InterimResult"

export const ResultPage = ({ size, matrix, accuracy }) => {
    return (
        <InterimResult size={size} matrix={matrix} accuracy={accuracy} />
    )
}