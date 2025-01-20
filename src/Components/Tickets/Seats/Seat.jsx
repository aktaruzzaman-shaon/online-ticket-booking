import React, { useEffect, useRef, useState } from 'react'

const Seat = (props) => {

    const { seatQuantity } = props
    const [selectedSeat, setSelectedSeat] = useState([])
    const intervalId = useRef()

    const seatsArray = [];
    for (let i = 1; i < seatQuantity; i++) {
        seatsArray.push(i)
    }

    useEffect(() => {
        if (selectedSeat.length > 0) {
            intervalId.current = setInterval(() => {
                removeSelectedSeat()
            }, 5000)
        }

        if (selectedSeat.length === 0) {
            clearInterval(intervalId.current)
        }

        return () => clearInterval(intervalId.current)
    }, [selectedSeat])
    // const seatBookingHandler = (index) => {
    //     (() => {
    //         setSelectedSeat((item) => item.pop())
    //         console.log(selectedSeat)

    //     }, 3000);

    //     setSelectedSeat(prevIndexes => prevIndexes.includes(index)
    //         ? prevIndexes.filter((i) => i !== index)
    //         : [...prevIndexes, index]
    //     )
    // }

    const removeSelectedSeat = () => {

        setSelectedSeat((prev) => {
            const [removedSeat, ...restSelectedSeat] = prev
            return restSelectedSeat
        })
    }

    const seatBookingHandler = (index) => {

        //after clicking selected seat
        if (selectedSeat.includes(index)) {
            setSelectedSeat((prev) => prev.filter((el) => el !== index))
        } else {
            setSelectedSeat((prev) => [...prev, index])
        }
    }

    console.log(selectedSeat, "double clicked seleced seat")

    return (
        <>
            <div className='flex flex-row mx-auto justify-center space-x-1 mt-5'>
                {
                    seatsArray.map((seat, index) =>
                        <div className={`p-2  w-20 rounded-md ${selectedSeat.includes(index) ? "bg-green-600 " : "bg-orange-600"} ${selectedSeat.length < 4 ? "cursor-auto" : "cursor-not-allowed"}`} onClick={selectedSeat.length < 4 ? () => seatBookingHandler(index) : undefined} key={seat}>{seat}</div>
                    )
                }
            </div>
            {selectedSeat ? <p className='p-2 my-2'>Selected Seat No : {selectedSeat.map((seatNo) => `${seatNo} ,`)}</p> : null}
        </>
    )
}

export default Seat