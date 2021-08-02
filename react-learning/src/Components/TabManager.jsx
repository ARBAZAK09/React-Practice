import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { L1 } from "./Section1/L1";
export const TabManager = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Section1" title="section 1"></Tab>
      <h1>this is L1</h1>
      <L1 />
      <Tab eventKey="Section2" title="section2"></Tab>
      <Tab eventKey="section3" title="section 3"></Tab>
    </Tabs>
  );
};
