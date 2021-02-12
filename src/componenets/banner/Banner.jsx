import React from 'react'
import { 
    Container, 
    Row, 
    Col, 
    Button, 
    Form, 
    FormGroup, 
    Input
} from 'reactstrap';
import BgColor from '..//..//common//BgColor'
import man from '..//..//assets/pex.jpg'
import check_circle from '..//..//assets/check-solid.svg'

import styles from './banner.module.css'

function Banner() {
    return (
        <div>
            <BgColor />
            <Container className="mt-4">
            <Row>
                <Col xs="6">
                   <h2 className={styles.text}>Launch your own <br/> online learning platform</h2> 
                   <ul className="mt-4">
                       <li className={styles.list}><span><img className={styles.checkSvg} src={check_circle} alt="check circle"/></span>{'  '}Skilled and experienced coaches.</li>
                       <li className={styles.list}><span><img className={styles.checkSvg} src={check_circle} alt="check circle"/></span>{'  '}Supportive 1:1 coaching</li>
                   </ul>
                   {/* form */}
                   <Form className="form-row">
                    <FormGroup>
                        <Input 
                        className={styles.input}
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter your email..." 
                        />
                    </FormGroup>
                    <Button>Start learning</Button>
                   </Form>
                </Col>
                <Col xs="6">
                    <img src="" alt=""/>
                </Col>
            </Row>
      </Container>
        </div>
    )
}

export default Banner
