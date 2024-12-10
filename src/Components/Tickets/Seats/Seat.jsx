import React, { useRef, useState } from 'react'

const Seat = (props) => {
    const { seatQuantity } = props;
    // const [selectColor, setSelectColor] = useState(null)
    const seatRef = useRef(null)

    const seatsArray = [];

    for (let i = 1; i < seatQuantity; i++) {
        seatsArray.push(i)
    }

    const seatBookingHandler = (e) => {
        e.preventDefault()
        const selectedSeat = seatRef.current;
        selectedSeat.backgroundColor = "red"
        console.log(selectedSeat)
    }

    return (
        <>
            <div className='flex flex-row mx-auto justify-center space-x-1 mt-5'>
                {
                    seatsArray.map((seat) => <div ref={seatRef} className={`p-2  w-20 rounded-md `} onClick={(e) => seatBookingHandler(e)} key={seat}>{seat}</div>)
                }
            </div>
        </>
    )
}

export default Seat