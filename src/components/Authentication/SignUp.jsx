import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import 'firebase/compat/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from 'firebase/auth';

const SignUp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const auth = getAuth()

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false) // 按鈕加載
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) { // 密碼確認
      return setError("密碼與密碼確認不一致")
    }

    try {
      setError("")
      setLoading(true) // 按鈕未加載
      await signup(emailRef.current.value, passwordRef.current.value)
      history("/") // 自動轉跳到首頁
      setLoading(false) //按鈕加載
    } catch(error) {
      switch (error.code) { // 此信箱已經存在
        case 'auth/email-already-in-use': setError("此信箱已經存在");
      }
      switch (error.code) { // 密碼強度不足
        case 'auth/weak-password': setError("密碼長度至少為6個字元");
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
          <h2 className="text-center mb-4">註冊</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>信箱</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>密碼</Form.Label>
              <Form.Control type="password" ref={passwordRef} placeholder="密碼長度應至少為6個字元" required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>密碼確認</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} placeholder="密碼長度應至少為6個字元" required />
            </Form.Group>
            <Button className="w-100" type="submit">
              {loading ?
                <Spinner animation="border" role="status"></Spinner>
                :
                <>註冊</>
              }
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            已經擁有帳號? <Link to="/login">登入</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default SignUp;