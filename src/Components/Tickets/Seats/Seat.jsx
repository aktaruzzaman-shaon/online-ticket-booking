import React, { useEffect, useState } from 'react'

const Seat = (props) => {

    const { seatQuantity } = props
    const [selectedSeat, setSelectedSeat] = useState([])

    const seatsArray = [];
    for (let i = 1; i < seatQuantity; i++) {
        seatsArray.push(i)
    }

    useEffect(() => {
        const seatTimeInterval = setInterval(() => {
            selectedSeat.pop()
        }, 3000)

        return clearInterval(seatTimeInterval)
    }, selectedSeat)

    const seatBookingHandler = (index) => {
        // setTimeout(() => {
        //     selectedSeat.pop()
        //     console.log("poped")
        //     console.log(selectedSeat)
        // }, 3000);


        setSelectedSeat(prevIndexes => prevIndexes.includes(index)
            ? prevIndexes.filter((i) => i !== index)
            : [...prevIndexes, index]
        )
    }

    console.log(selectedSeat)
    return (
        <>
            <div className='flex flex-row mx-auto justify-center space-x-1 mt-5'>
                {
                    seatsArray.map((seat, index) =>
                        <div className={`p-2  w-20 rounded-md ${selectedSeat.includes(index) ? "bg-green-600" : "bg-orange-600"}`} onClick={() => seatBookingHandler(index)} key={seat}>{seat}</div>
                    )
                }
            </div>
            {selectedSeat ? <p className='p-2 my-2'>Selected Seat No : {selectedSeat.map((seatNo) => `${seatNo} ,`)}</p> : null}
        </>
    )
}

export default Seat