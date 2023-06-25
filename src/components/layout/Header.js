import { useEffect } from "react";

import { Row, Col } from "antd";

function Header({
  name,
  subName,
}) {

  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {subName.replace("/", "")}
            </span>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Header;
