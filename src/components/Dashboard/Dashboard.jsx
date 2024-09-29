import styles from './Dashboard.module.scss';
import React, { useState } from "react";
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdLibraryBooks } from "react-icons/md";
import { GrCloudComputer } from "react-icons/gr";
import { FaBullhorn } from "react-icons/fa";
import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';
import TimePicker from 'react-bootstrap-time-picker';
import Button from 'react-bootstrap/Button';
import { MdOutlineRefresh } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { Data } from "../../Utils/Data";
import { Data2 } from "../../Utils/Data2";
import { Data3 } from "../../Utils/Data3";
import LineChart from "../Charts/LineChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useTranslation } from "react-i18next";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Trans } from 'react-i18next'
import Form from 'react-bootstrap/Form';

Chart.register(CategoryScale);

export default function Dashboard() {

  const { t } = useTranslation();

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.date),

    datasets: [
      {
        label: "Temperature ",
        data: Data.map((data) => data.temperature),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      },
      {
        label: "Temperature ",
        data: Data2.map((data) => data.temperature),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "blue",
        borderWidth: 2
      },
      {
        label: "Temperature ",
        data: Data3.map((data) => data.temperature),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "red",
        borderWidth: 2
      }
    ]
  });

  return (
    <div className={styles.Dashboard}>
      <div className={styles.main2}>
        <Sidebar />
        <Header />
        <br />
      </div>
      <div className={styles.DashboardMain}>
        <div className={styles.DashboardContent}>
          <div className={styles.DashboardTopic}>
            <div className={styles.sub1}>
              <span className={styles.subIcon1}>
                <HiOutlineBuildingOffice2 /> 3
              </span>
              <b> {t('Organisation')}
              </b>
            </div>
            <div className={styles.sub2}>
              <span className={styles.subIcon2}>
                <MdLibraryBooks /> 3
              </span>
              <b> {t('Projects')}</b>
            </div>
            <div className={styles.sub3}>
              <span className={styles.subIcon3}>
                <GrCloudComputer /> 4
              </span>
              <b> {t('DevicesDeployed')}</b>
            </div>
            <div className={styles.sub4}>
              <span className={styles.subIcon4}>
                <FaBullhorn /> 0
              </span>
              <b> {t('NeedsAttention')}</b>
            </div>
          </div>
          <div className={styles.filters}>
            <span className={styles.filter1}>
              <label for="All" style={{ marginBottom: "10px" }}>
                {t("SelectInterval")}
              </label>
              <select name="All" id="All" style={{ width: "250px", marginTop: "-10px", height: "40px", borderRadius: "10px", border: "none" }}>
                <option value="all">{t("All")}</option>
                <option value="16">16:00</option>
              </select>
            </span>
            <span className={styles.filter2}>
              <span className={styles.filterTopic2}>
                {t("DateRange")}
              </span>
              <DateRangePicker
                initialSettings={{ startDate: '01/01/2020', endDate: '01/15/2020' }}
              >
                <input type="text" className="form-control"
                  style={{ border: "none" }}
                />
              </DateRangePicker>
            </span>
            <span className={styles.filter3}>
              <span className={styles.filterTopic3}>
                {t("StartTime")}
              </span>
              <TimePicker start="10:00" end="21:00" step={30}
                style={{ border: "none" }}
              />
            </span>
            <span className={styles.filter4}>
              <span className={styles.filterTopic4}>
                {t("EndTime")}
              </span>
              <TimePicker start="10:00" end="21:00" step={30}
                style={{ border: "none" }}
              />
            </span>
            <span className={styles.filter5}>
              <Button variant="outline-warning">{t("Filter")} <MdOutlineRefresh />
              </Button>
            </span>
            <span className={styles.filter6}>
              <Button variant="outline-warning">{t("Download")} <FaArrowDown /></Button>
            </span>
          </div>
          <div className={styles.third}>
            <div className={styles.tree}>
              <input type="text" placeholder="Search.." className={styles.search} />
              {['512 Document', '323 Document', '432 Document', '343 Document', '343 Document', '434 Document'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={"checkbox"}
                    id={`default-${type}`}
                    label={`🏛️ ${type}`}
                  />
                </div>
              ))}
            </div>
            <div className={styles.chart}>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                style={{ float: "right" }}
              >
                <Tab eventKey="MEASURING POINT 1 CONCENTRATION" title={<Trans i18nkey='MEASURINGPOINT' values={{ num: 1 }}>
                  {t('MEASURINGPOINT')}
                </Trans>
                }
                >
                  <div
                    style={{
                      width: '35vw',
                      height: '3vh',
                      marginTop: "80px",
                      marginLeft: "30px"
                    }}
                  >
                    <LineChart chartData={chartData} xtitle={"Date"} ytitle={"Temperature (°C)"} />
                  </div>

                  <div className={styles.legend}>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "blue", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> N2O (ppm)</div>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "black", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> CH4 (ppm)</div>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "red", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> CO2 (Vol-%)</div>
                  </div>
                </Tab>
                <Tab eventKey="MEASURING POINT 1 EMISSIONS" title={<Trans i18nkey='MEASURINGPOINTEMISSIONS' values={{ num: 1 }}>
                  {t('MEASURINGPOINTEMISSIONS')}
                </Trans>
                }>
                  <div
                    style={{
                      width: '35vw',
                      height: '3vh',
                      marginTop: "80px",
                      marginLeft: "30px"
                    }}
                  >
                    <LineChart chartData={chartData} xtitle={"Date"} ytitle={"Temperature (°C)"} />
                  </div>

                  <div className={styles.legend}>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "blue", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> N2O (ppm)</div>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "black", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> CH4 (ppm)</div>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "red", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> CO2 (Vol-%)</div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
