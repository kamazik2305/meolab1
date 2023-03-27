function RatableThings({ size, things, setThings }) {

    const handleArrayInputChange = (event, index) => {
        const value = event.target.value
        const newArray = [...things]
        newArray[index] = value
        setThings(newArray)
    }

    const renderArrayInputs = () => {
        const arrayInputs = []
        for (let i = 0; i < size; i++) {
            arrayInputs.push(
                <div>
                    <input
                        className='inputThingCell'
                        placeholder={`#${i+1}`}
                        key={`thing #${i}`}
                        type="text"
                        value={things[i]}
                        onChange={(event) => handleArrayInputChange(event, i)}
                    />
                </div>

            )
        }
        return arrayInputs
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(things.flat()) // выводит в консоль значения всех инпутов в одном массиве } 
    }


    return (
        <form onSubmit={handleSubmit}>
            {renderArrayInputs()}
        </form>

    )
}

export default RatableThings;