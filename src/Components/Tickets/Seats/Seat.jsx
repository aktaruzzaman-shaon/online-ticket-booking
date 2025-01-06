import React, { useRef, useState } from 'react'

const Seat = (props) => {

    const { seatQuantity } = props;
    const [selectedSeat, setSelectedSeat] = useState([])

    const seatsArray = [];
    
    for (let i = 1; i < seatQuantity; i++) {
        seatsArray.push(i)
    }

    const seatBookingHandler = (index) => {
        setSelectedSeat((prev) => [...prev, index])
        setTimeout(() => {
            setSelectedSeat([])
        }, 9000);
    }

    return (
        <>
            <div className='flex flex-row mx-auto justify-center space-x-1 mt-5'>
                {
                    seatsArray.map((seat, index) =>
                        <div className={`p-2  w-20 rounded-md ${selectedSeat[index + 1] === index ? "bg-red-600" : "bg-orange-600"}`} onClick={() => seatBookingHandler(index)} key={seat}>{seat}</div>
                    )
                }
            </div>
            {selectedSeat ? <p className='p-2 my-2'>Selected Seat No : {selectedSeat.map((seatNo) => `${seatNo} ,`)}</p> : null}
        </>
    )
}

export default Seat