import React from 'react'
import { InputGroup, Form, Col, Row} from 'react-bootstrap'

function FormField({ name, label, children, ...rest }) {
  return (
    <div className="form-group">
      <Form.Group as={Row} size="sm" className="mb-3">
        <Form.Label column sm="2" htmlFor={name} className="col-form-label">{label}</Form.Label>
        <Col sm="10">
          <input id={name} name={name} {...rest} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
          {children}
        </Col>
      </Form.Group>
    </div>
  )
}

export default FormField
