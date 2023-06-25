import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Row, Col, Typography, Form, Input } from "antd";
import Sidenav from "../components/layout/Sidenav";
import Home from "./Home";

const { Title } = Typography;
const { Content, Sider } = Layout;

export default class SignIn extends Component {
    state = {
        isAuthenticated: false,
    };

    onFinish = async (values) => {
        try {
            const response = await fetch("http://localhost:8000/api/clients/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Success:", data);
                this.setState({
                    isAuthenticated: true,
                });
                this.props.history.push("/dashboard");
            } else {
                alert("Wrong email or password!")
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
        const { isAuthenticated } = this.state;

        return (
            <>
                <Layout className="layout-default layout-signin">
                    <Content className="signin">
                        <Row gutter={[24, 0]} justify="space-around">
                            <Col
                                xs={{ span: 24, offset: 0 }}
                                lg={{ span: 6, offset: 2 }}
                                md={{ span: 12 }}
                            >
                                <Title className="mb-15">Sign In</Title>
                                <Title className="font-regular text-muted" level={5}>
                                    Enter your email and password to sign in
                                </Title>
                                <Form
                                    onFinish={this.onFinish}
                                    onFinishFailed={this.onFinishFailed}
                                    layout="vertical"
                                    className="row-col"
                                >
                                    <Form.Item
                                        className="username"
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your email!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Email" />
                                    </Form.Item>

                                    <Form.Item
                                        className="username"
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your password!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Password" />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            style={{ width: "100%" }}
                                        >
                                            SIGN IN
                                        </Button>
                                        {isAuthenticated && <Sidenav color="red" showSidebar={false} />}
                                    </Form.Item>
                                    <p className="font-semibold text-muted">
                                        Don't have an account?{" "}
                                        <Link to="/sign-up" className="text-dark font-bold">
                                            Sign Up
                                        </Link>
                                    </p>
                                </Form>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </>
        );
    }
}
