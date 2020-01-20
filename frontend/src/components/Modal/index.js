import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../services/api";

import { Container } from "./styles";
import { FaTimes } from "react-icons/fa";

const Modal = props => {
  const [doctor, setDoctor] = useState(props.doctor[0]);
  const [state, setState] = useState([]);
  const [county, setCounty] = useState([]);
  const specialty = props.doctor[0].specialty.split(",");

  const closeAlert = () => {
    props.setBlur(false);
  };

  const formSubmit = async e => {
    e.preventDefault();

    await api.put(`/doctors/${doctor.id}`, {
      name: doctor.name,
      phone: doctor.phone,
      state: doctor.state,
      city: doctor.city,
      county: doctor.county,
      crm: parseInt(doctor.crm),
      specialty:
        doctor.hasOwnProperty("specialty1") ||
        doctor.hasOwnProperty("specialty2")
          ? [
              doctor.specialty1 == null ? specialty[0] : doctor.specialty1,
              doctor.specialty2 == null ? specialty[1] : doctor.specialty2
            ]
          : [doctor.specialty]
    });

    window.location = "/";
  };

  useEffect(() => {
    getState();
    console.log(specialty);
  }, []);

  const getState = async () => {
    const { data } = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );

    await setState(data);
  };

  const getCounty = async id => {
    const { data } = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
    );

    await setCounty(data);
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

  return (
    <Container>
      <span onClick={closeAlert}>
        <FaTimes />
      </span>
      <form onSubmit={formSubmit} method="POST">
        <h1>{props.doctor[0].name}</h1>

        <input
          onChange={e => setDoctor({ ...doctor, name: e.target.value })}
          name="name"
          type="text"
          value={doctor.name}
          placeholder="nome"
        />

        <input
          onChange={e => setDoctor({ ...doctor, phone: e.target.value })}
          name="phone"
          value={doctor.phone}
          type="number"
          placeholder="telefone"
        />

        <div className="form-group">
          <select
            onChange={e => setDoctor({ ...doctor, state: e.target.value })}
            name="state"
          >
            <option value="{}">"UF"</option>
            {state.map(state => {
              return (
                <option
                  key={state.id}
                  value={state.sigla}
                  selected={doctor.state === state.sigla}
                >
                  {state.sigla}
                </option>
              );
            })}
          </select>

          <input
            onChange={e => setDoctor({ ...doctor, crm: e.target.value })}
            value={doctor.crm}
            name="crm"
            type="number"
            placeholder="CRM"
            min="4"
            maxLength="4"
          />

          <select name="county">
            <option value={doctor.county}>{doctor.county}</option>
            {county.map(county => {
              return (
                <option
                  key={county.id}
                  value={county.nome}
                  selected={doctor.county === county.nome}
                >
                  {county.nome}
                </option>
              );
            })}
          </select>
        </div>
        <div name="specialty" className="specialty-group">
          <select onChange={specialtyChange1} className="specialty">
            <option value="{}">Especialidade 1</option>
            {props.specialtyType.map(type => (
              <option
                selected={specialty.length === 2 ? specialty[0] === type : type}
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>

          <select onChange={specialtyChange2} className="specialty">
            <option value="{}">Especialidade 2</option>
            {props.specialtyType.map(type => (
              <option
                selected={specialty.length === 2 ? specialty[1] === type : type}
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>
        </div>
        <button>Atualizar</button>
      </form>
    </Container>
  );
};

export default Modal;
