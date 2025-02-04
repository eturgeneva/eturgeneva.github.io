import React from 'react';
import {comments} from './commentData';
import Card from './Card';

function App() {
  // const map = comments.map(comment => {
  //   return <Card commentObject={comment}/>
  // })
  // return map;
  return comments.map(comment => 
    <Card commentObject={comment}/>
  )
}

export default App;