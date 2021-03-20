import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Navbar from './Navbar'
function Dashboard() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="dashboard">
            <Modal show={modalShow} onHide={(e) => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" />
                </Modal.Body>
            </Modal >
            <Navbar />
            <input type="text" className="mx-auto" onClick={(e) => setModalShow(true)} placeholder="   Type" style={{ width: '50vw', height: '5vh', fontFamily: 'Arial, FontAwesome', outline: 'none', padding: '10px' }} />
        </div >
    )
}

export default Dashboard
