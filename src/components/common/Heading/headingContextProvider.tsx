import React, {createContext, ReactNode, useContext} from 'react';


type HeadingLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type HeadingElement = `h${1|2|3|4|5|6} | 'div'`;

const HeadingLevelContext = createContext<HeadingLevel>(0);


export const useHeadingLevel = (): HeadingLevel => {
    return useContext(HeadingLevelContext);
}


export const useHeading = (fallback: HeadingElement) => {
    const hLevel = useHeadingLevel();
    return [
        hLevel,
        ((hLevel && hLevel > 6 ? 'div' : `h${hLevel as 1 | 2 | 3 | 4 | 5 | 6}`) || fallback) as HeadingElement
    ] as const;
}


export interface HeadingLevelContextProps {
    value?: HeadingLevel;
    children: ReactNode;
}


const HeadingLevelContextProvider = ({value, children}: HeadingLevelContextProps) => {
    const parentHeadingLevel = useHeadingLevel();
    const headingLevel = (parentHeadingLevel + 1) as HeadingLevel;
    return (
        <HeadingLevelContext.Provider value={value || headingLevel}>
            {children}
        </HeadingLevelContext.Provider>
    )
}

export default HeadingLevelContextProvider;