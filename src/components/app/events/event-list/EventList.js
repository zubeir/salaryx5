import React from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap';
import events from 'data/events/events';
import Event from './Event';
import Flex from 'components/common/Flex';

import events2 from 'data/events/events2';
import Event2 from './Event2';


import jobposts from 'data/events/jobposts';
import JobPost from './JobPost';

const EventList = () => {
  return (
    <Card>
      <Card.Header
        as={Flex}
        justifyContent="between"
        alignItems="center"
        className="bg-body-tertiary"
      >


        <h5 className="mb-0"> Job Posts</h5>
        <Form.Group>
          <Form.Select size="sm" aria-label="Default select example">
            <option value="1">Select Category</option>
            <option>Executive</option>
            <option>Managerial</option>
            <option>Technical</option>
            <option>Sales</option>
            <option>Accounting</option>
            <option>Creative</option>
            <option>Administrative</option>
            <option>Legal</option>
            <option>Marketing</option>

          </Form.Select>
        </Form.Group>
      </Card.Header>
      <Card.Body className="fs-10">

        <row></row>
        <Row>




        </Row>

        <Row>

          {jobposts.map((jobpost, index) => (
            <Col key={jobpost.id} md={6} className="h-100">
              <JobPost details={jobpost} isLast={index === jobpost.length - 1} />
            </Col>
          ))}


        </Row>

      </Card.Body>
    </Card>
  );
};

const EventListOrig = () => {
  return (
    <Card>
      <Card.Header
        as={Flex}
        justifyContent="between"
        alignItems="center"
        className="bg-body-tertiary"
      >
        <h5 className="mb-0"> Events</h5>
        <Form.Group>
          <Form.Select size="sm" aria-label="Default select example">
            <option value="1">Select Category</option>
            <option value="2">Health &amp; Wellness</option>
            <option value="3">Business &amp; Professional</option>
            <option value="4">Performing &amp; Visual Arts</option>
            <option value="5">Science &amp; Technology</option>
            <option value="6">Sports &amp; Fitness</option>
            <option value="7"> Charity &amp; Causes</option>
            <option value="8">Film &amp; Media</option>
            <option value="9">Fashion &amp; Beauty</option>
            <option value="10">Travel &amp; Outdoor</option>
            <option value="11">Entertainment</option>
            <option value="12">Other</option>
          </Form.Select>
        </Form.Group>
      </Card.Header>
      <Card.Body className="fs-10">
        <Row>
          {events.map((event, index) => (
            <Col key={event.id} md={6} className="h-100">
              <Event details={event} isLast={index === events.length - 1} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EventList;
