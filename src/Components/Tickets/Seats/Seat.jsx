import React, { useState } from 'react'

const Seat = (props) => {

    const { seatQuantity } = props
    const [selectedSeat, setSelectedSeat] = useState([])
    const [selectedSeatArrayIndex, setselectedSeatArrayIndex] = useState([])

    const seatsArray = [];

    for (let i = 1; i < seatQuantity; i++) {
        seatsArray.push(i)
    }

    const seatBookingHandler = (index) => {
        setSelectedSeat((prev) => [...prev, index])
        setTimeout(() => {
            setSelectedSeat([])
        }, 9000);
        if (selectedSeatArrayIndex) {
            console.log("Entering")
            setselectedSeatArrayIndex(0)
        } else {
            setselectedSeatArrayIndex(prev => prev + 1)
            console.log("second stage")
        }
    }

    return (
        <>
            <div className='flex flex-row mx-auto justify-center space-x-1 mt-5'>
                {
                    seatsArray.map((seat, index) =>
                        <div className={`p-2  w-20 rounded-md ${selectedSeat[selectedSeatArrayIndex] === index ? "bg-green-600" : "bg-orange-600"}`} onClick={() => seatBookingHandler(index)} key={seat}>{seat}</div>
                    )
                }
            </div>
            {selectedSeat ? <p className='p-2 my-2'>Selected Seat No : {selectedSeat.map((seatNo) => `${seatNo} ,`)}</p> : null}
        </>
    )
}

export default Seat