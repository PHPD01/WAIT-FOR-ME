import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Card, ListGroup } from 'react-bootstrap';
import Axios from 'axios';
// 引入圖片 
function OrderCompleted({ data }) {
    const [completedInfo, setCompletedInfo] = useState([]);
    const [completedContact, setCompletedContact] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/order/completed_info').then((response) => {
            setCompletedInfo(response.data)
        })

    }, []);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/order/completed_contact').then((response) => {
            setCompletedContact(response.data)
        })

    }, []);
    return (
        <Container>
            <Card style={{ width: '40rem' }}>
                <Card.Title>
                    <img src={`/images/orderImg/checkIcon.png`} alt="" width="300" height='auto' />
                    <div>訂位完成</div>
                </Card.Title>
                <Card.Header>訂位資訊</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>餐廳名稱{` `}:{` `}{data[0].name}</ListGroup.Item>
                    <ListGroup.Item>訂位日期{` `}:{` `}{completedInfo.length >= 1 ? completedInfo[0].datetime : " "}</ListGroup.Item>
                    <ListGroup.Item>預訂人數{` `}:{` `}{completedInfo.length >= 1 ? completedInfo[0].person : " "}</ListGroup.Item>
                    <ListGroup.Item>選擇時段{` `}:{` `}{completedInfo.length >= 1 ? completedInfo[0].ordertime_select : " "}</ListGroup.Item>
                    <ListGroup.Item>聯絡人{` `}:{` `}{completedContact.length >= 1 ? completedContact[0].name : " "}</ListGroup.Item>
                    <ListGroup.Item>聯絡電話{` `}:{` `}{completedContact.length >= 1 ? completedContact[0].phone : " "}</ListGroup.Item>
                    <ListGroup.Item>備註{` `}:{` `}{completedContact.length >= 1 ? completedContact[0].note : " "}</ListGroup.Item>

                </ListGroup>
            </Card>
        </Container>
    )
}

export default OrderCompleted;