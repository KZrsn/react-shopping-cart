import React from 'react';
import { Accordion } from 'react-bootstrap';

const AccordionBox = ({ title, content }) => {
  return (
    <div className='AccordionBox'>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="1">
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>
            {content}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default AccordionBox;