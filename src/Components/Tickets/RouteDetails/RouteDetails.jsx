import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Seat from '../Seats/Seat'

const RouteDetails = () => {
    const [routeData, setRouteData] = useState([])
    const { from, to } = useParams()
    const [loading, setLoading] = useState(true)
    const [viewSeat, setViewSeat] = useState(false)

    // data load ---------------------------
    useEffect(() => {
        fetch('http://localhost:5173/data.json')
            .then(res => res.json())
            .then(data => {
                const findRoute = data.tickets.find((singleRoute) => singleRoute.to === to)

                setRouteData(findRoute)
                setLoading(false)
            })
    }, [])

    return (
        <div>

            {loading ? "Laoding ..." : ""}

            <div>
                <p className='bg-slate-400 w-60 mx-auto my-3'>{routeData.from} -- to -- {routeData.to}</p>

                <button type="button" className='bg-red-700 p-1 rounded-sm w-44' onClick={() => setViewSeat(!viewSeat)}>{viewSeat ? "Close" : "View Seat"}</button>

                {viewSeat ? <Seat seatQuantity={routeData.seatQuantity}></Seat> : ""}

            </div>
        </div>
    )
}
export default RouteDetails