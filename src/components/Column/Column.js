import React from "react";
import Card from "components/Card/Card";
import {mapOder} from 'utilities/sorts'

import "./Column.scss";

function Column(props) {
  const { column } = props
  const cards = mapOder(column.cards, column.cardOrder, 'id')
  return (
    <div class="column">
      <header>{column.title}</header>
      <ul className="card-list">
        {cards.map((card, index) => <Card key={index} card={card}/>)}
        {/* <li className="card-item">Add anythings</li>
        <li className="card-item">Add anythings</li>
        <li className="card-item">Add anythings</li>
        <li className="card-item">Add anythings</li> */}
      </ul>
      <footer>Add another</footer>
    </div>
  );
}

export default Column;
