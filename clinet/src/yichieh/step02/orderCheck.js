import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Card, ListGroup } from 'react-bootstrap';
import './orderCheck.css';
import Axios from 'axios';
function OrderCheck({ data }) {
    const [orderInfo, setOrderInfo] = useState([]);
    const [inputName, setInputName] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [note, setNote] = useState('');
    useEffect(() => {
        Axios.get('http://localhost:3001/api/order/get').then((response) => {
            setOrderInfo(response.data)
        })
    }, []);
    const handleGender = (e) => {
        setGender(e.target.value);
    }
    const submitContact = () => {
        Axios.post('http://localhost:3001/api/order/contact', {
            id: orderInfo[0].id,
            name: inputName + gender,
            phone: phone,
            note: note,
        }).then(() => {
            alert('successful insert');
        })
    }
    const history = useHistory();

    return (
        <Container>

            <Card style={{ width: '40rem' }}>
                <Card.Title> <h2>訂位資料核對</h2></Card.Title>
                <Card.Header>您的訂位資訊</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>餐廳名稱{` `}:{` `}{data[0].name}</ListGroup.Item>
                    <ListGroup.Item>訂位日期{` `}:{` `}{orderInfo.length >= 1 ? orderInfo[0].datetime : " "}</ListGroup.Item>
                    <ListGroup.Item>預訂人數{` `}:{` `}{orderInfo.length >= 1 ? orderInfo[0].person : " "}</ListGroup.Item>
                    <ListGroup.Item>選擇時段{` `}:{` `}{orderInfo.length >= 1 ? orderInfo[0].ordertime_select : " "}</ListGroup.Item>
                </ListGroup>
                <Card.Header>您的聯絡資訊</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className="orderLabelStyle">
                        訂位人{` `}:{` `}
                        <input type="text" style={{ width: '3rem' }} onChange={(e) => { setInputName(e.target.value) }} />{` `}
                        <fieldset value={gender} onChange={(e) => { handleGender(e) }}>
                            <input type="radio" name="Gender" id="sir" value="先生" />
                            <label htmlFor="sir">先生</label>{` `}
                            <input type="radio" name="Gender" id="miss" value="小姐" />
                            <label htmlFor="miss">小姐</label>
                        </fieldset>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        聯絡電話{` `}:{` `}
                        <input type="tel" size="20" maxLength="15" onChange={(e) => { setPhone(e.target.value) }} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        備註{` `}:{` `}
                        <textarea rows="5" cols="30" style={{ verticalAlign: "middle" }} onChange={(e) => { setNote(e.target.value) }}></textarea>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Text>
                    <button onClick={() => { history.push('/order/Completed'); submitContact() }}>確認完成</button>
                </Card.Text>
            </Card>
        </Container>
    )
}

export default OrderCheck;