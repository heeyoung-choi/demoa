import React, { useState, useEffect } from 'react';
import miliToDate from '../func/miliToDate'
import './Clock.css'
const RlsCounter = () => {
    
    const a = new Date();
    // console.log(a)
    const b = new Date('2021-12-22 20:00:00')
    // console.log('hello', b)

    const [timer, setTimer] = useState(a.getTime() - 1640178000000)
    const [time, setTime] = useState([0,0,0,0,0,0,0])
    useEffect(()=>{
        const interval = setInterval(() =>{
             setTimer(timer => timer + 1);
                setTime(time => miliToDate(timer))
            }, 1);
        return () => clearInterval(interval)

    })
    return(
       <div className="Clock">
       {time[0]} year {time[1]} month {time[2]} days {time[3]} hours {time[4]} minutes {time[5]} seconds
       </div>
        
    )
};

export default RlsCounter;