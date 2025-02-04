import React from 'react';

function Header(props) {
  return (
    <div>
      <img src={props.profileImg} />
      <h1 username={props.username}></h1>
    </div>
  )
}

export default Header;