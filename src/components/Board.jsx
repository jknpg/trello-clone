import React from "react";
import Column from "./Column.jsx"

export default class Board extends React.Component {
  // Board has Columns
  constructor(props) {
    super(props);
    this.state={
      columns:[],
    }
  }

  componentDidMount(event) {
    // Fetch Columns for Board
    const url = 'api/boards/'+this.props.boardId+'/columns';
    const init = {  
      method : 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
    }
    console.log(url);
    const req = new Request(url, init);
    fetch(req)
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then(json => this.setState({ 'columns' : json, }))
      .catch(err => console.log("ERROR! " + err ))
  }

  render() {
    // Board-view contains Columns
    const board=this.props;
    const { columns }=this.state;

    return (
    	<div className="board" style={{'backgroundColor':'beige'}}>
        <div> 
          Board Id: {board.boardId}
        </div>
        <div>
          Board Title: {board.title}
        </div>
        {
          columns.map(column=>
            <Column 
              key={column.id} 
              columnId={column.id}
              title={column.title}
              description={column.description}/>
          )
        }
      </div>
    );
  }
}