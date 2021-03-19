import React from 'react';
import { Accordion, Button } from "react-bootstrap";

const MoreDescription = () => {
    return (
        <Accordion>
            <Accordion.Collapse eventKey="0">
                <p>
                    This CBT, have ability to use import data with spreadsheet for lists of student or tests subject.
                    In test deployment you could randomize questions, have many ways to upload tests subject.
                    And of course, client-side android application for student.
                </p>
            </Accordion.Collapse>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">More...</Accordion.Toggle>
        </Accordion>
    );
}

export default MoreDescription;