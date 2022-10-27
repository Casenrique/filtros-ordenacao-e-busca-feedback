import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const handleSearch = (e) => {
    props.setPesquisa(e.target.value);
  };

   const handleIdSearch = (e) => {
    props.setIdFilter(e.target.value);
  };

  return (
    <Container>
        <input
        type="number"
        placeholder="Buscar por id"
        onChange={handleIdSearch}
        value={props.idFilter}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        onChange={handleSearch}
        value={props.pesquisa}
      />
      <select
      value={props.sortingParameter}
      onChange={(e) => props.setSortingParameter(e.target.value)}
      >
        <option value={"name"}>Nome</option>
        <option value={"id"}>ID</option>
        <option value={"type"}>Tipo</option>
      </select>
      <select
      value={props.order}
      onChange={(e) => props.setOrder(e.target.value)}
      >
        <option value="">Ordenar</option>
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
      </select>
      <select
        value={props.selectType}
        onChange={(e) => props.setSelectType(e.target.value)}
        name="tipo"
        id="tipo"
          >
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
