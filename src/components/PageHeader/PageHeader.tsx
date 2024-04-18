import React from 'react';
import './PageHeader.css'
interface Props {
    children:React.ReactNode;
}
const PageHeader:React.FC<Props> = ({children}) => {
   return(
       <div className="page-header">
           <h3>
               {children}
           </h3>
       </div>
   )
}
export default PageHeader;