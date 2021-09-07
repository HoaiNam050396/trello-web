import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";

import Column from "components/Column/Column";
import "./BoardContent.scss";
import { initialData } from "actions/initialData";
import { mapOder }from 'utilities/sorts'

function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    const boardFromDB = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (boardFromDB) {
      setBoard(boardFromDB);

      //sort column
      setColumns(mapOder(boardFromDB.columns, boardFromDB.columnOrder, 'id'));
    }
  }, []);

  if (isEmpty(board)) {
    return (
      <div className="not-found" style={{ padding: "10px", color: "white" }}>
        Board not found!
      </div>
    );
  }
  return (
    <div className="dashboard-content">
      {columns.map((column, index) => {
        return <Column key={index} column={column}/>;
      })}
    </div>
  );
}

export default BoardContent;
