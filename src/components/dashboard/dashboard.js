import React, { useState, useEffect, useRef } from 'react'
import { Modal, Row, Col, Button } from 'react-bootstrap';
import Navbar from './Navbar'
function Dashboard() {
    const [modalShow, setModalShow] = useState(false);
    const [lists, setLists] = useState([]);
    const [list, setList] = useState({});
    const handleChange = (e) => {
        setList({ ...list, [e.target.name]: e.target.value })
    }
    const closeModal = () => {
        setModalShow(false);
        if (list.content) {
            let l = list;
            l.author = "Harsh";
            l.time = new Date().toUTCString();
            setList(l);
            l = lists;
            l.push(list);
            setLists(l);
            setList({});
        }
        else {
            alert("discarded empty note")
        }
    }
    return (
        <div div className="dashboard" >
            {console.log(modalShow)}
            <Modal show={modalShow} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={list.content ?? ''} name="content" onChange={handleChange} type="text" />
                </Modal.Body>
            </Modal >
            <Navbar />
            <input type="text" className="mx-auto" onClick={(e) => setModalShow(true)} placeholder="   Type" style={{ width: '50vw', height: '5vh', fontFamily: 'Arial, FontAwesome', outline: 'none', padding: '10px' }} />
            <center>
                <Row>
                    {lists.map((l, idx) => {
                        return (
                            <>
                                <Col lg={3} style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 6px 2px', margin: '10px' }}>
                                    {l.content}<br />
                                    {l.author}<br />
                                    {l.time}<br />
                                    <Button style={{ background: 'none', border: 'none' }}><i style={{ color: 'red' }} className="fa fa-trash"></i></Button>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </center>
        </div >
    )
}

export default Dashboard
