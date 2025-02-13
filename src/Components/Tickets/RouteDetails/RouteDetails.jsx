import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Seat from '../Seats/Seat'

const RouteDetails = () => {

    const [routeData, setRouteData] = useState([])
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)
    const [viewSeat, setViewSeat] = useState(false)

    const from = searchParams.get("from")
    const to = searchParams.get("to")

    // data load ---------------------------
    useEffect(() => {
        fetch(`http://localhost:4000/alltickets?from=${from}&to=${to}`)
            .then(res => res.json())
            .then(data => {
                setRouteData(data)
                setLoading(false)
                setViewSeat(true)
            })
    }, [])
    if (loading) {
        return "Loading ..."
    }

    return (
        <div>

            {loading ? "Laoding ..." : <div>
                {/* <p className='bg-slate-400 w-60 mx-auto my-3'> {routeData.data[0].from} -- to -- {routeData.data[0].to} </p> */}

                <button type="button" className='bg-red-700 p-1 rounded-sm w-44' onClick={() => setViewSeat(!viewSeat)}>{viewSeat ? "Close" : "View Seat"}</button>

                {viewSeat ? <Seat seatQuantity={routeData.data[0].seats.length}></Seat> : ""}

            </div>}

        </div>
    )
}
export default RouteDetails