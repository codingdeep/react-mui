import React from 'react';
import {Box} from '@mui/material';
import styleed from '@emotion/styled';

interface Props {
    alignitems?: 'center' | 'flex-end' | 'flex-start',
    justifyContent?: 'center' | 'space-between' | 'flex-end' | 'flex-start',
    direction?: 'column' | 'row'
}

const Flex = styleed(Box)(({alignitems = 'center',justifyContent = 'space-between', direction = 'row'}: Props)=>({
    alignItems: alignitems,
    justifyContent: justifyContent,
    gap: 4,
    flexDirection: direction,
}));

export type FlexProps = React.ComponentProps<typeof Flex>;

export default Flex;