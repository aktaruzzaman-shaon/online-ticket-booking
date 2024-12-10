import React, { useRef, useState } from 'react'

const Seat = (props) => {

    const { seatQuantity } = props;
    const [selectedSeat, setSelectedSeat] = useState()

    const seatsArray = [];

    for (let i = 1; i < seatQuantity; i++) {
        seatsArray.push(i)
    }

    const seatBookingHandler = (index) => {
        setSelectedSeat(index)
        setTimeout(() => {
            setSelectedSeat(null)
        }, 9000);
    }

    return (
        <>
            <div className='flex flex-row mx-auto justify-center space-x-1 mt-5'>
                {
                    seatsArray.map((seat, index) => <div className={`p-2  w-20 rounded-md ${selectedSeat === index ? "bg-red-600" : "bg-slate-700"}`} onClick={() => seatBookingHandler(index)} key={seat}>{seat}</div>)
                }
            </div>
            {selectedSeat ? <p className='p-2 my-2'>Selected Seat No : {selectedSeat}</p> : null}
        </>
    )
}

export default Seat