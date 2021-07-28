import React from 'react-dom';
import {Tab, ListGroup, Col, Row} from 'react-bootstrap'
const ListComp = () => {
    return(
<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Link 2
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
          <p>hiiiiiiiiiii</p>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
        <p>hiiiiiiiiiiiddddddddddddd</p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    )
};

export default ListComp;
