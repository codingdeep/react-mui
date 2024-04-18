import React from 'react';
interface Props {
    children: React.ReactNode
}
const LeftSidebar:React.FC<Props> = ({children}) => {
   return (
       <div className="left-sidebar">
           {children}
       </div>
   )
}
export default LeftSidebar;