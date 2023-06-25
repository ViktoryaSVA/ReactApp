import React from "react";
import { Layout, Button, Typography, Card, Form, Input } from "antd";
import { Link, withRouter } from "react-router-dom";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

class SignUp extends React.Component {
  onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:8000/api/clients/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        this.props.history.push("/sign-in");
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
        <>
          <div className="layout-default ant-layout layout-sign-up">
            <Header>
              <div className="header-col header-brand">
                <h5>Dashboard</h5>
              </div>
            </Header>

            <Content className="p-0">
              <div className="sign-up-header">
                <div className="content">
                  <Title>Sign Up</Title>
                </div>
              </div>

              <Card className="card-signup header-solid h-full ant-card pt-0">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    className="row-col"
                >
                  <Form.Item
                      name="username"
                      rules={[
                        { required: true, message: "Please input your username!" },
                      ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                  <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please input your email!" },
                      ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                      name="password"
                      rules={[
                        { required: true, message: "Please input your password!" },
                      ]}
                  >
                    <Input placeholder="Password" />
                  </Form.Item>
                  <Form.Item>
                    <Button
                        style={{ width: "100%" }}
                        type="primary"
                        htmlType="submit"
                    >
                      SIGN UP
                    </Button>
                  </Form.Item>
                </Form>
                <p className="font-semibold text-muted text-center">
                  Already have an account?{" "}
                  <Link to="/sign-in" className="font-bold text-dark">
                    Sign In
                  </Link>
                </p>
              </Card>
            </Content>
          </div>
        </>
    );
  }
}

export default withRouter(SignUp);
