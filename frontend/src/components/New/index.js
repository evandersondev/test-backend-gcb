import React from "react";

import { Container } from "./styles";

const New = props => {
  const state = props.state;
  const county = props.county;

  return (
    <Container>
      <form onSubmit={props.formSubmit} method="POST">
        <h1>Cadastrar novo medico</h1>
        <input
          name="name"
          type="text"
          placeholder="nome"
          onChange={e =>
            props.setDoctor({ ...props.doctor, name: e.target.value })
          }
        />
        <input
          name="phone"
          type="number"
          placeholder="telefone"
          onChange={e =>
            props.setDoctor({ ...props.doctor, phone: e.target.value })
          }
        />
        <div className="form-group">
          <select name="state" onChange={props.stateChange}>
            <option value="{}">UF</option>
            {state.map(state => {
              return (
                <option key={state.id} value={JSON.stringify(state)}>
                  {state.sigla}
                </option>
              );
            })}
          </select>
          <input
            name="crm"
            type="number"
            placeholder="CRM"
            min="4"
            maxLength="4"
            onChange={e =>
              props.setDoctor({ ...props.doctor, crm: e.target.value })
            }
          />

          <select name="county" onChange={props.countyChange}>
            <option value="{}">Municipio</option>
            {county.map(county => {
              return (
                <option key={county.id} value={JSON.stringify(county)}>
                  {county.nome}
                </option>
              );
            })}
          </select>
        </div>
        <div name="specialty" className="specialty-group">
          <select onChange={props.specialtyChange1} className="specialty">
            <option value="">Especialidade 1</option>
            {props.specialtyType.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <select onChange={props.specialtyChange2} className="specialty">
            <option value="">Especialidade 2</option>
            {props.specialtyType.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <button>Cadastrar</button>
      </form>
    </Container>
  );
};

export default New;
