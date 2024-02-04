import { Col, Row } from "antd";
import React from "react";
import { CompanyForm } from "./form";
import { CompanyContactsTable } from "./contacts-table";

const EditCompany = () => {
  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24} xl={12}>
          <CompanyForm />
        </Col>
        <Col xs={24} xl={12}>
          <CompanyContactsTable />
        </Col>
      </Row>
    </div>
  );
};

export default EditCompany;
