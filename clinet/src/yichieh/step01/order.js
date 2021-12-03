import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import DatePicker from './calendar';
import "./order.css";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useHistory } from "react-router-dom";
import Axios from 'axios';
function Order_information({ data }) {
  const [orderDate, setOrderDate] = useState('');
  const [person, setPerson] = useState('');
  const [Time, setTime] = useState('');
  const submitData = () => {
    Axios.post('http://localhost:3001/api/order', {
      datetime: orderDate,
      person: person,
      ordertime_select: Time,
      id: data[0].id
    }).then(() => {
      alert('successful insert');
    })
  }
  const handleSelectTime = (e) => {
    setTime(e.target.value);
  }
  const history = useHistory();
  return (
    <Container>
      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title><h1>一笈壽司</h1></Card.Title>
          <Card.Text className="orderLabelStyle">

            <p>電話:0423206368</p>
            <p>地址:台中市南屯區公益路二段25號</p>
            <DatePicker orderDate={orderDate} setOrderDate={setOrderDate} />
            <label>訂位人數</label>{" "}
            <input type='number' step='1' min='0' max='20' required onChange={(e) => { setPerson(e.target.value) }} />{" "}
            <span>超過20人以上請洽電餐廳詢問</span>
            <br />
            <label> 選擇時段</label>
            <br />
            <fieldset value={Time} onChange={(e) => { handleSelectTime(e) }}>
              <input type="radio" name="time" value="11:00" id="t11" />
              <label htmlFor="t11">上午11點</label>
              <input type="radio" name="time" value="13:00" id="t13" />
              <label htmlFor="t13">下午13點</label>
              <br />
              <input type="radio" name="time" value="15:00" id="t15" />
              <label htmlFor="t15">下午17點</label>
              <input type="radio" name="time" value="17:00" id="t17" />
              <label htmlFor="t17">晚上19點</label>
            </fieldset>
            <br />
            <button onClick={() => { history.push('/order/check'); submitData() }}>送出</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );

}

export default Order_information;
