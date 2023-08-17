
import './Timestamp.css'
import { useState } from 'react';

export default function TimeStamp(){
    const [date, setdate] = useState('')
    setInterval(() => {
        var d = String(new Date())
        var day = d.slice(0, 3)
        var datee = d.slice(4, 16)
        var time = d.slice(16, 25)
        setdate(day+' | '+datee+' | '+time)
    }, 1000);
    return(
        <>
            {date}
        </>
    )
}