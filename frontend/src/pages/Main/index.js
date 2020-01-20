import React, { useState, useEffect } from "react";
import api from "../../services/api";
import axios from "axios";

import { Container } from "./styles";
import Search from "../../components/Search";
import New from "../../components/New";
import Alert from "../../components/Alert";
import Modal from "../../components/Modal";

const Main = () => {
  const [blur, setBlur] = useState(false);
  const [alert, setAlert] = useState(false);
  const [show, setShow] = useState(false);
  const [doctor, setDoctor] = useState({});
  const [state, setState] = useState([]);
  const [county, setCounty] = useState([]);
  const [getDoctor, setGetDoctor] = useState({});
  const specialtyType = [
    "ALERGOLOGIA",
    "ANGIOLOGIA",
    "BUCO MAXILOC",
    "ARDIOLOGIA CLÍNICA",
    "CARDIOLOGIA INFANTIL",
    "CIRURGIA CABEÇA E PESCOÇO",
    "CIRURGIA CARDÍACA",
    "CIRURGIA DE TORAX",
    "CIRURGIA GERAL",
    "CIRURGIA PEDIÁTRICA",
    "CIRURGIA PLÁSTICA",
    "CIRURGIA TORÁCIC",
    "CIRURGIA VASCULAR",
    "CLÍNICA MÉDICA"
  ];

  useEffect(() => {
    getState();
  }, []);

  // fecth all states api ibge
  const getState = async () => {
    const { data } = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );

    await setState(data);
  };

  // fecth all county for state selected
  const getCounty = async id => {
    const { data } = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
    );

    await setCounty(data);
  };

  const stateChange = e => {
    const { id, sigla } = JSON.parse(e.target.value);
    getCounty(id);
    setDoctor({ ...doctor, state: sigla });
  };

  const countyChange = e => {
    const { nome, microrregiao } = JSON.parse(e.target.value);
    setDoctor({ ...doctor, county: nome, city: microrregiao.nome });
  };

  const specialtyChange1 = async e => {
    if (!(e.target.value === "")) {
      setDoctor({ ...doctor, specialty1: e.target.value });
    }
  };

  const specialtyChange2 = async e => {
    if (!(e.target.value === "")) {
      setDoctor({ ...doctor, specialty2: e.target.value });
    }
  };

  const formSubmit = async e => {
    e.preventDefault();

    if (
      doctor.hasOwnProperty("crm") === false ||
      doctor.crm.length > 4 ||
      doctor.specialty1 == null ||
      doctor.specialty2 == null
    ) {
      setShow(false);
      setBlur(true);
      setAlert(true);
    } else {
      await api.post("/doctors", {
        name: doctor.name,
        phone: doctor.phone,
        state: doctor.state,
        city: doctor.city,
        county: doctor.county,
        crm: parseInt(doctor.crm),
        specialty: [doctor.specialty1, doctor.specialty2]
      });

      window.location = "/";
    }
  };

  const showAlert = () => {
    return <Alert setBlur={setBlur} />;
  };

  const showDoctor = doctor => {
    if (doctor.length === 0) {
      setBlur(true);
      setAlert(true);
      setShow(false);
      showAlert();
    } else {
      setGetDoctor(doctor);
      setAlert(false);
      setBlur(true);
      setShow(true);
    }
  };

  return (
    <>
      {blur && show ? (
        <Modal
          doctor={getDoctor}
          specialtyType={specialtyType}
          setBlur={setBlur}
        />
      ) : (
        ""
      )}
      {blur && alert ? showAlert() : ""}
      <Container blur={blur}>
        <Search
          showDoctor={showDoctor}
          state={state}
          setDoctor={setDoctor}
          doctor={doctor}
          setBlur={setBlur}
        />
        <New
          state={state}
          county={county}
          specialtyType={specialtyType}
          setDoctor={setDoctor}
          doctor={doctor}
          countyChange={countyChange}
          stateChange={stateChange}
          specialtyChange1={specialtyChange1}
          specialtyChange2={specialtyChange2}
          formSubmit={formSubmit}
          setBlur={setBlur}
        />
      </Container>
    </>
  );
};

export default Main;
