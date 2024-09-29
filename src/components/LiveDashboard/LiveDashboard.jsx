import { useState, Suspense, lazy } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import styles from './LiveDashboard.module.scss';
import { FaClock } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { CategoryScale } from "chart.js";
import { useTranslation } from "react-i18next";
import Chart from "chart.js/auto";
import { Data } from "../../Utils/Data";
import { Data2 } from "../../Utils/Data2";
import { Data3 } from "../../Utils/Data3";
import o2 from "../../img/o2.PNG";
import n2o from "../../img/n2o.PNG";
import ch4 from "../../img/ch4.PNG";
import co2 from "../../img/co2.PNG";
import { LuThermometerSun } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import { Trans } from 'react-i18next'

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

let LineChart = lazy(() => delayForDemo(import('../Charts/LineChart.js')))

Chart.register(CategoryScale);

export default function LiveDashboard() {

  const { t } = useTranslation();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

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
        borderColor: "yellow",
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
        borderColor: "black",
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
        borderColor: "green",
        borderWidth: 2
      }
    ]
  });

  // To Simulate Real-Time Data:
  setInterval(UpdateChartData, 10000);

  let currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

  let counter = 41;

  function UpdateChartData() {
    Data.shift();
    Data.push({
      id: counter,
      date: datetime,
      temperature: getRandomInt(100),
    },)
    Data2.shift();
    Data2.push({
      id: counter,
      date: datetime,
      temperature: getRandomInt(100),
    },)
    Data3.shift();
    Data3.push({
      id: counter,
      date: datetime,
      temperature: getRandomInt(100),
    },)
    counter = counter + 1;

    setChartData({
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
          borderColor: "yellow",
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
          borderColor: "black",
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
          borderColor: "green",
          borderWidth: 2
        }
      ]
    })
  }

  return (
    <div className={styles.LiveDashboard}>
      <div className={styles.main2}>
        <Sidebar />
        <Header />
      </div>
      <div className={styles.LiveDashboardMain}>
        <div className={styles.LiveDashboardContent}>
          <div className={styles.first}>
            <div className={styles.sub1}>
              <span className={styles.subIcon1}>
                <FaClock />
                <b style={{ color: "gray", fontSize: "14px" }}> 19/09/24 - 14:11:11</b>
              </span>
            </div>
            <div className={styles.sub2}>
              <span className={styles.subIcon2}>
                <FaComputer />
              </span>
              <span className={styles.switchIs}>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label={t("ScatterChart")}
                />
              </span>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.measurement}>
              <div className={styles.sub3}>
                <Trans i18nkey='MeasuringPoint' values={{ num: 1 }}>
                  {t('MeasuringPoint')}
                </Trans>
              </div>
              <br />
              <div className={styles.sub4}>
                <span className={styles.sub41}>
                  <img src={o2} alt="o2" style={{ float: "left", marginLeft: "-20px" }} />
                  <span className={styles.sub411}>
                    O2
                  </span>  &nbsp;
                  <span className={styles.sub412}>
                    <b>17.71%</b>
                  </span>
                </span>
                <span className={styles.sub42}>
                  <img src={co2} alt="co2" style={{ float: "left", marginLeft: "-10px" }} />
                  <span className={styles.sub421}>
                    CO2
                  </span>  &nbsp;
                  <span className={styles.sub422}>
                    <b> 1.98%</b>
                  </span>
                </span>
              </div>
              <br />
              <div className={styles.sub5}>
                <span className={styles.sub51}>
                  <img src={n2o} alt="n2o" style={{ float: "left", marginLeft: "-10px" }} />
                  <span className={styles.sub511}>
                    N2O
                  </span>  &nbsp;
                  <span className={styles.sub512}>
                    <b>55.4 ppm</b>
                  </span>
                </span>
                <span className={styles.sub52}>
                  <img src={ch4} alt="ch4" style={{ float: "left", marginLeft: "-10px" }} />
                  <span className={styles.sub521}>
                    CH4
                  </span>  &nbsp;
                  <span className={styles.sub522}>
                    <b> 98.9ppm</b>
                  </span>
                </span>
              </div>
              <br />
              <div className={styles.sub6}>
                <span className={styles.sub61}>
                  <span className={styles.icon}>
                    <LuThermometerSun />
                  </span>
                  <span className={styles.sub611}>
                    {t("Temperature")}
                  </span>  &nbsp;
                  <span className={styles.sub612}>
                    <b>30.6 °C</b>
                  </span>
                </span>
                <span className={styles.sub62}>
                  <span className={styles.icon}>
                    <BsSpeedometer />
                  </span>
                  <span className={styles.sub66}>
                    <span className={styles.sub621}>
                      {t("Flowrate")}
                    </span>  &nbsp;
                    <span className={styles.sub622}>
                      <b>4.2m3/h</b>
                    </span>
                  </span>
                </span>
              </div>
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
                }>
                  <div
                    style={{
                      width: '30vw',
                      height: '3vh'
                    }}
                  >
                    <LineChart chartData={chartData} xtitle={"Date"} ytitle={"N2O (ppm)"} />
                  </div>
                  <div className={styles.legend}>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "yellow", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> N2O (ppm)</div>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "black", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> CH4 (ppm)</div>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "green", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> CO2 (Vol-%)</div>
                  </div>
                </Tab>
                <Tab eventKey="MEASURING POINT 1 EMISSIONS" title={<Trans i18nkey='MEASURINGPOINTEMISSIONS' values={{ num: 1 }}>
                  {t('MEASURINGPOINTEMISSIONS')}
                </Trans>
                }>
                  <div
                    style={{
                      width: '30vw',
                      height: '3vh'
                    }}
                  >
                    <LineChart chartData={chartData} xtitle={"Date"} ytitle={"N2O (ppm)"} />
                  </div>
                  <div className={styles.legend}>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "yellow", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> N2O (ppm)</div>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "black", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> CH4 (ppm)</div>
                    <hr style={{ width: "15%", borderWidth: "5px", color: "green", marginTop: "10px" }} /> <div style={{ marginTop: "-30px" }}> CO2 (Vol-%)</div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className={styles.third}>
            <div className={styles.measurement}>
              <div className={styles.sub3}>
                <Trans i18nkey='MeasuringPoint' values={{ num: 2 }}>
                  {t('MeasuringPoint')}
                </Trans>
              </div>
              <br />
              <div className={styles.sub4}>
                <span className={styles.sub41}>
                  <img src={o2} alt="o2" style={{ float: "left", marginLeft: "-20px" }} />
                  <span className={styles.sub411}>
                    O2
                  </span>  &nbsp;
                  <span className={styles.sub412}>
                    <b>17.71%</b>
                  </span>
                </span>
                <span className={styles.sub42}>
                  <img src={co2} alt="co2" style={{ float: "left", marginLeft: "-10px" }} />
                  <span className={styles.sub421}>
                    CO2
                  </span>  &nbsp;
                  <span className={styles.sub422}>
                    <b> 2.11%</b>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
