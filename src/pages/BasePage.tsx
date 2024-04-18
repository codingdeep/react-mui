import React from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
interface Props {
    children: React.ReactNode;
    renderLeftSidebar?: React.ReactNode
}

const BasePage: React.FC<Props> = ({children,renderLeftSidebar}) => {
   return (
       <div>
           <TopNavigation/>
           <div className="main-content">
               {renderLeftSidebar &&
                   (<LeftSidebar>
                   <div>
                       {renderLeftSidebar}
                   </div>
               </LeftSidebar>)}
               <div className="main">
                   {children}
               </div>
           </div>
       </div>
   )
}
export default BasePage;