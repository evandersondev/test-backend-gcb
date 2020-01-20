import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Container } from "./styles";
import Hospital from "../../assets/hospital.png";
import { FaSearch } from "react-icons/fa";

const Search = props => {
  const state = props.state;
  const [crm, setCrm] = useState("");
  const [uf, setUf] = useState("");

  const stateChange = e => {
    setUf(e.target.value);
  };

  const searchDoctor = async e => {
    e.preventDefault();
    if (uf === "" || crm === "") {
      return;
    } else {
      const { data } = await api.get("/doctors", {
        params: { state: uf, crm }
      });
      await props.showDoctor(data);
    }
  };

  return (
    <Container>
      <header>
        <img src={Hospital} alt="crm" />
        <h1>Consultar CRM ↴</h1>
      </header>
      <form onSubmit={searchDoctor}>
        <select onChange={stateChange} name="uf" id="uf">
          <option value="">Todos UF</option>
          {state.map(state => {
            return (
              <option key={state.id} value={state.sigla}>
                {state.sigla}
              </option>
            );
          })}
        </select>
        <input
          onChange={e => setCrm(e.target.value)}
          value={crm}
          type="text"
          placeholder="Digite o CRM do médico"
          name="name"
        />
        <button>
          <FaSearch className="search" />
        </button>
      </form>
    </Container>
  );
};

export default Search;
