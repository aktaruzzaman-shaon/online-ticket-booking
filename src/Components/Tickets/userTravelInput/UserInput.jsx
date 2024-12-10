import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const UserInput = () => {

    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const navigate = useNavigate()

    // form handler ========================
    const formHandler = (e) => {
        e.preventDefault()
        navigate(`/tickets/${from}/${to}`)
    }

    return (
        <form onSubmit={(e) => formHandler(e)} className='p-5 space-x-1'>
            <input type="text" value={from} name="from" id="" onChange={(e) => setFrom(e.target.value)} className='border-slate-900 bg-slate-500 p-1' placeholder='From' />
            <input type="text" value={to} name="to" id="" onChange={(e) => setTo(e.target.value)} className='bg-slate-700 p-1' placeholder='To' />
            <input type="submit" name="" id="" value="search" className='bg-yellow-500 p-1' />
        </form>
    )
}

export default UserInput