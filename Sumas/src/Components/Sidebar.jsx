import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ButtonGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import {Row} from 'react-bootstrap';
function Sidebar() {
  const [show, setShow] = useState(true);
  const [ev,setEv]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header >
          <Offcanvas.Title>Sumas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
        {/* <Button variant="outline-primary" onClick={setEv(!ev)}>Event Mangment</Button>
        {ev&&<Row>
            <Button>hi</Button>
        </Row>}  */}
         <Dropdown className='my-3'>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                HR
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Configuration</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Event Request</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Event Reuest List</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        
       
        <Dropdown className='my-3'>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                 Report
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Configuration</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Event Request</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Event Reuest List</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='my-3'>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                 Assessmnt 
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Configuration</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Event Request</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Event Reuest List</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown className='my-3'>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                 Event Mangment
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Configuration</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Event Request</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Event Reuest List</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </Offcanvas.Body>
        
      </Offcanvas>
    </>
  );
}

export default Sidebar;