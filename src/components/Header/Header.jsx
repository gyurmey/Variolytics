import React, { useState } from 'react'
import styles from "./Header.module.scss";
import { IoMdPerson } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import { Dropdown, ButtonGroup } from "react-bootstrap";
import ukflag from "../../img/uk.png";
import deflag from "../../img/de.png";

export default function Header() {

  const options = [
    {
      value: "en",
      label: (
        <img src={ukflag} width="20" alt="" />
      )
    }, //en
    {
      value: "de",
      label: (
        <img src={deflag} width="20" alt="" />
      )
    } //de
  ];

  const [langLabel, setLangLabel] = useState(options[0].label);
  const { t, i18n } = useTranslation();

  function handlclick(lng, n) {
    setLangLabel(options[n].label);
    i18n.changeLanguage(lng);
  }

  return (
    <div className={styles.main}>
      <span className={styles.headerIcon1}>

        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle
            className=" bg-transparent btn-outline-secondary border-0 "
            id="lng-dropdown"
          >
            <IoMdPerson />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/Profile">
              {t("Profile")}
            </Dropdown.Item>
            <Dropdown.Item href="/">
              {t("logout")}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </span>
      <span className={styles.headerIcon2}>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle
            className=" bg-transparent btn-outline-secondary border-0 "
            id="lng-dropdown"
          >
            {langLabel} &nbsp;
            <AiOutlineGlobal />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handlclick(options[0].value, 0)}>
              {options[0].value}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handlclick(options[1].value, 1)}>
              {options[1].value}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </span>
      <h1 className={styles.header}>
        Variolytics GmbH</h1>
    </div>
  )
}


