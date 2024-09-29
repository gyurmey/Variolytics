import React, { useState } from "react";
import styles from './Profile.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import avatar from "../../img/avatar.png";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useTranslation } from "react-i18next";

export default function Profile() {
  const [validated, setValidated] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className={styles.Profile}>
      <div className={styles.main2}>
        <Sidebar />
        <Header />
      </div>
      <div className={styles.ProfileMain}>
        <div className={styles.ProfileContent}>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="profile" title={t("Profile")} >
              <img src={avatar} alt="Avatar" className={styles.avatar} />
              <br />
              <b>{t("Admin")}</b>
              <br />
              <Form noValidate validated={validated} onSubmit={handleSubmit} className={styles.form}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label style={{ color: "black" }}>{t("TenantName")}</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Tenant Name"
                      defaultValue="Mark"
                    />
                    <Form.Control.Feedback>{t("Looksgood")}!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label style={{ color: "black" }}>{t("Superiorname")}</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Superior name"
                      defaultValue="Otto"
                    />
                    <Form.Control.Feedback>{t("Looksgood")}!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label style={{ color: "black" }}>{t("Username")}</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {t("ChooseUsername")}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label style={{ color: "black" }}>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">
                      {t("ProvideValidEmail")}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label style={{ color: "black" }}>{t("DisplayName")}</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Display Name"
                      defaultValue="Mark"
                    />
                    <Form.Control.Feedback>{t("Looksgood")}!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label style={{ color: "black" }}>{t("PhoneNumber")}</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" required />
                    <Form.Control.Feedback type="invalid">
                      {t("ProvideValidPhoneNumber")}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className={`${styles.text} mb-3`}>
                  <Form.Check
                    required
                    label={t("Agreetotermsandconditions")}
                    feedback={t("Youmustagreebeforesubmitting")}
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button type="submit" className={styles.btn}>{t("Save")}</Button>
              </Form>
            </Tab>
            <Tab eventKey="changePassword" title={t("ChangePassword")}>
              <Form noValidate validated={validated}
                onSubmit={handleSubmit}
                className={styles.formPassword}>
                <h3 style={{ color: 'black' }}>{t("ChangePassword")}</h3>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03" style={{ width: "100%" }}>
                    <Form.Label style={{ color: "black" }}>{t("OldPassword")}</Form.Label>
                    <Form.Control type="text" placeholder="Old Password" required />
                    <Form.Control.Feedback type="invalid">
                      {t("PleaseprovideavalidPassword")}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom04" style={{ width: "100%" }}>
                    <Form.Label style={{ color: "black" }}>{t("NewPassword")}</Form.Label>
                    <Form.Control type="text" placeholder="New Password" required />
                    <Form.Control.Feedback type="invalid">
                      {t("PleaseprovideavalidPassword")}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button type="submit">{t("ChangePassword")}</Button>
              </Form>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
