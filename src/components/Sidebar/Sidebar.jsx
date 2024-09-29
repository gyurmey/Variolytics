import styles from './Sidebar.module.scss';
import React from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { BsPersonFillAdd } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PiVideoFill } from "react-icons/pi";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import logo from "../../logo.jpg"
import { useTranslation } from "react-i18next";

export default function Sidebar() {
    const { t } = useTranslation();

    return (
        <div className={styles.main2}>
            <Navbar key={0} expand={0} className="bg-body-tertiary mb-3" style={{ backgroundColor: "white" }}>
                <Container fluid style={{ backgroundColor: "white" }}>
                    <Navbar.Brand href="#"><img src={logo} alt="logo" style={{ width: "50px", height: "50px" }} /><b> EmiCo Lite </b></Navbar.Brand>
                    <div className={styles.sidebar1}>
                        <div style={{ display: "flex", alignItems: "center" }}> <div style={{ position: "absolute", marginRight: "100px" }}><HiSquares2X2 style={{ marginRight: "1000px" }} /> </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <NavDropdown
                                title={t('Overview')}
                                id={`offcanvasNavbarDropdown-expand-${0}`}
                            >
                                <NavDropdown.Item href="/Dashboard">   <HiSquares2X2 style={{ marginRight: "10px", color: "#FFAA1D" }} /> <span className={styles.subtitle}>{t("Dashboard")} </span> </NavDropdown.Item>
                                <NavDropdown.Item href="/LiveDashboard"> <PiVideoFill style={{ marginRight: "10px", color: "#FFAA1D" }} /> <span className={styles.subtitle}>
                                    {t("LiveViewer")}</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}> <BsPersonFillAdd style={{ marginRight: "10px" }} /><NavDropdown
                            title={t("Management")}
                            id={`offcanvasNavbarDropdown-expand-${0}`}
                        >
                            <NavDropdown.Item href="#action3">List</NavDropdown.Item>
                        </NavDropdown>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}> <BsFillFileBarGraphFill style={{ marginRight: "10px" }} />
                            <NavDropdown
                                title={t("Analysis")}
                                id={`offcanvasNavbarDropdown-expand-${0}`}
                            >
                                <NavDropdown.Item href="#action3">List</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <Nav.Link href="#action1"><b>{t("Security")}</b></Nav.Link>

                        <div style={{ display: "flex", alignItems: "center" }}> <BsPersonFillAdd style={{ marginRight: "10px" }} />
                            <NavDropdown
                                title={t("Authorization")}
                                id={`offcanvasNavbarDropdown-expand-${0}`}
                            >
                                <NavDropdown.Item href="#action3">List</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}> <FaComputer style={{ marginRight: "10px" }} />
                            <NavDropdown
                                title={t("System")}
                                id={`offcanvasNavbarDropdown-expand-${0}`}
                            >
                                <NavDropdown.Item href="#action3">List</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}
