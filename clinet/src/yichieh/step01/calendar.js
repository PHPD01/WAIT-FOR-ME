import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Order.css';
// function DatePicker({orderDate, setOrderDate}) {
const DatePicker = ({ orderDate, setOrderDate }) => {

    const [date, setDate] = useState(new Date());
    let year = date.getFullYear() + '年';
    let month = date.getMonth() + 1 + '月';
    let day = date.getDate() + '日';
    let DateToLocal = [year, month, day].join(' ');
    useEffect(() => {
        setOrderDate('');
        setOrderDate(DateToLocal);
    })
    return (
        <div className="orderLabelStyle">
            <Calendar minDate={new Date()} maxDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 13)} onChange={setDate} value={date} />
            <label >訂位日期</label>{" "}
            <span>{orderDate}</span>
        </div>

    );
}
export default DatePicker;