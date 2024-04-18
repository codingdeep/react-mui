import React from 'react';

const Header:React.FC<{title: string}> = ({title}) => {
   return (
       <>
       <h1 title="title">{title}</h1>
          <h2>Cats</h2>
          </>
   )
}
export default Header;