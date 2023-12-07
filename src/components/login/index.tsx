/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style/index.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'

const LoginFrom: React.FC = () => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
    navigate('/center2')
  }

  return (
    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="#">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <br />
        Or <a href="#">register now!</a>
      </Form.Item>
    </Form>
  )
}

const LoginCom: React.FC = () => (
  <div className="loginCom">
    <LoginFrom></LoginFrom>
  </div>
)

export default LoginCom
