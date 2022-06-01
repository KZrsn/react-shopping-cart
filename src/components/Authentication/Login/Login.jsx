import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Spinner } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const auth = getAuth()
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit (e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true) // 按鈕未加載
      await login(emailRef.current.value, passwordRef.current.value)
      history("/") // 自動轉跳到首頁
      setLoading(false) // 按鈕加載
    } catch(error) {
      switch (error.code) { // 此信箱不存在
        case 'auth/user-not-found': setError("此信箱不存在");
      }
      switch (error.code) { // 密碼錯誤
        case 'auth/wrong-password': setError("密碼錯誤");
      }
      // switch (error.code) { // 信箱格式不正確
      //   case 'auth/invalid-email': setError("信箱格式不正確");
      // }
      console.log(error)
    }

    setLoading(false) // 按鈕加載
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">登入</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>信箱</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>密碼</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              {loading ?
                <Spinner animation="border" role="status"></Spinner>
                :
                <>登入</>
              }
            </Button>
          </Form>
          {/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password" className="forgotPassword">忘記密碼?</Link>
          </div> */}
          <div className="w-100 text-center mt-2">
            還沒有帳號?
            <Link to="/signUp">註冊</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Login;