import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Dialer from '../components/Dialer'

const DialPad = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    <Button onClick={() => setShow(true)}>Dial</Button>
    <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        backdrop="static"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><Dialer /></Modal.Body>
      </Modal>
    </>
  )
}

export default DialPad