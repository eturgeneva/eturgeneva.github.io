import React from 'react';
import GroceryItem from './GroceryItem';
import {comments} from './commentData';
import Card from './Card';

function CommentMap() {
  return comments.map(comment => 
    <Card commentObject={comment}/>
  )
}

function App() {
  return (
    <div>
      <GroceryItem name='Banana'>
      </GroceryItem>
      <GroceryItem name='Apple'>
      </GroceryItem>
      <CommentMap />
    </div>
  )
}

export default App