import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Calendar from 'react'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const UserInput = () => {

    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const navigate = useNavigate()
    const [value, onChange] = useState(new Date())

    // form handler ========================
    const formHandler = (e) => {
        e.preventDefault()
        navigate(`/tickets/${from}/${to}`)
    }

    return (
        <div className='border mt-5 rounded-md'>
            <form onSubmit={(e) => formHandler(e)} className='p-5 space-x-1'>
                <input type="text" value={from} name="from" id="" onChange={(e) => setFrom(e.target.value)} className='border-slate-900 bg-slate-700 p-1' placeholder='From' />
                <input type="text" value={to} name="to" id="" onChange={(e) => setTo(e.target.value)} className='bg-slate-700 p-1' placeholder='To' />
                <DatePicker className="w-44 bg-slate-700 text-rose-400" onChange={onChange} value={value} clearIcon={null}></DatePicker>
                <input type="submit" name="" id="" value="search" className='bg-yellow-500 p-1 w-44' />
            </form>
        </div>
    )
}

export default UserInput