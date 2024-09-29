import React, { useState, useContext } from 'react';
import { LoginContext } from "../../Contexts/LoginContext";
import styles from './Login.module.scss';
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Login() {
  const { setUsername, setShowDashboard } = useContext(LoginContext);
  const { t } = useTranslation();

  const [validated, setValidated] = useState(false);

  const validateEmail = (email) => {
    {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
      }
      alert(t("invalidemailaddress"))
      return (false)
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() === true && validateEmail(event.currentTarget.validationCustom03.value)) {
      setShowDashboard(true);
    }
    setValidated(true);
  };

  return (
    <div className={styles.main1}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className={styles.form}>
        <h3 style={{ color: 'black' }}>{t("LoginHere")}</h3>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03" style={{ width: "100%" }}>
            <Form.Label style={{ color: "black" }}>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              {t("ProvideValidEmail")}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04" style={{ width: "100%" }}>
            <Form.Label style={{ color: "black" }}>{t("Password")}</Form.Label>
            <Form.Control type="text" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              {t("PleaseprovideavalidPassword")}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">{t("LogIn")}</Button>
      </Form>
    </div>
  )
}
