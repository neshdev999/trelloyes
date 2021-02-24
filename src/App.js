import React from 'react';
import Card from './Card';
import List from './List';
import './App.css';

function App(props){
  return(
    <main className="App">
      {/* content goes here */}
      <h1 className="mainHeaderText">Trelloyes!</h1>      
      {/* <Card cardStore={props.storeProp}/> */}
      <div className="mainListsContainer">
        <div className="mainListItem">
          <List listStore = {props.storeProp} listId={props.storeProp.lists[0].id} listHeader={props.storeProp.lists[0].header} listCardIds={props.storeProp.lists[0].cardIds} key={1}/>
        </div>
        <div className="mainListItem">
          <List listStore = {props.storeProp} listId={props.storeProp.lists[1].id} listHeader={props.storeProp.lists[1].header} listCardIds={props.storeProp.lists[1].cardIds} key={2}/>
        </div>
        <div className="mainListItem">
          <List listStore = {props.storeProp} listId={props.storeProp.lists[2].id} listHeader={props.storeProp.lists[2].header} listCardIds={props.storeProp.lists[2].cardIds} key={3}/>
        </div>
        <div className="mainListItem">
          <List listStore = {props.storeProp} listId={props.storeProp.lists[3].id} listHeader={props.storeProp.lists[3].header} listCardIds={props.storeProp.lists[3].cardIds} key={4}/>
        </div>
      </div>
    </main>
  );
}

export default App;
