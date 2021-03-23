import React, { useState } from 'react'
import { Modal, Row, Col, Button, Toast } from 'react-bootstrap';
import Navbar from './Navbar'
import { useSelector } from 'react-redux';
function Dashboard(props) {
    const accessToken = useSelector(state => state.accessToken)
    const [modalShow, setModalShow] = useState(false);
    const [lists, setLists] = useState([]);
    const [list, setList] = useState({});
    const [alert, setAlert] = useState(false);
    const handleChange = (e) => {
        setList({ ...list, [e.target.name]: e.target.value })
    }
    const deleteList = (id) => {
        console.log('object')
        let l = lists;
        l = l.filter(lis => lis.time !== id);
        setLists(l);
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
            setAlert(true)
        }
    }
    return (
        <diV className="dashboard" >
            <Modal show={modalShow} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={list.content ?? ''} name="content" onChange={handleChange} type="text" />
                </Modal.Body>
            </Modal >
            <Navbar />
            <Toast className="custom-toast-success" style={{ float: 'right', backgroundColor: '#f34636', color: 'white' }} onClose={() => setAlert(false)} show={alert} delay={3000} autohide>
                <Toast.Body>Discarded Empty Note</Toast.Body>
            </Toast>
            <input type="text" value={''} onChange={(e) => setModalShow(true)} className="mx-auto" onClick={(e) => setModalShow(true)} placeholder="   Type" style={{ width: '50vw', height: '5vh', fontFamily: 'Arial, FontAwesome', outline: 'none', padding: '10px' }} />
            <center>
                {(accessToken.payload)}
                <Row>
                    {lists.map((l) => {
                        return (
                            <Col lg={3} style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 6px 2px', margin: '10px' }}>
                                {l.content}<br />
                                {l.author}<br />
                                {l.time}<br />
                                <Button onClick={(e) => deleteList(l.time)} style={{ background: 'none', border: 'none' }}><i style={{ color: 'red' }} className="fa fa-trash"></i></Button>
                            </Col>
                        )
                    })}
                </Row>
            </center>
        </diV>
    )
}

export default Dashboard;
