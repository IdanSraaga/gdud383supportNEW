import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Form = () => {
  
  const [activeTab, setActiveTab] = useState('#step-1');

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    
    <Tab.Container activeKey={activeTab} onSelect={handleTabClick}>
      <Nav className="nav nav-tabs nav-justified" role="tablist">
        <Nav.Item>
          <Nav.Link eventKey="#step-1" className={`h3`} role="tab">
            step 1 <small className="d-none d-md-block lead">personal info</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="#step-2"
            className={`h3`}
            role="tab"
          >
            step 2 <small className="d-none d-md-block lead">questions/answers</small>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="#step-3"
            className={`h3`}
            role="tab"
          >
            step 3 <small className="d-none d-md-block lead">questions/rating</small>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="#step-1">
          {/* Content for step 1 */}
          <Step1/>
        </Tab.Pane>
        <Tab.Pane eventKey="#step-2">
          {/* Content for step 2 */}
          <Step2/>
          <p>content for step 2</p>
        </Tab.Pane>
        <Tab.Pane eventKey="#step-3">
          {/* Content for step 3 */}
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default Form;
