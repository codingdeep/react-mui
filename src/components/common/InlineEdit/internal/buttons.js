/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/react';
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack} from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const buttonsContainerStyle = css({
    display: 'flex',
    marginBlockStart: '6px',
    insetBlockStart: '100%',
    insetInlineEnd: 0,
    flexShrink: 0,
    position: 'absolute'
});
const buttonWrapperBaseStyle = css({
    boxSizing: 'border-box',
    width: '32px',
    zIndex: 200,
    backgroundColor: "white",
    borderRadius: '3px',
    '&:last-child': {
        marginLeft: '4px'
    },
    boxShadow: '0 4px 8px -2px #ddd, 0 0 1px #ddd',
    '& > button': {
        padding: '5px',
        minWidth: 'auto',
        textAlign: 'center',
        '& > span': {
            margin: 0
        }
    }
})
const additonalActionButtonStyles = css({
    height: '32px',
    padding: '0 4px',
    borderRadius: '3px',
    color: '#0d6efd',
    boxShadow: '0 4px 8px -2px #ddd, 0 0 1px #ddd',
    marginRight: '4px',
    '& > div': {
        height: '32px'
    }
})

const Buttons = (props) => {
    const {
        confirmButtonLabel,
        cancelButtonLabel,
        onMouseDown,
        onCancelClick
    } = props;
    return (
        <div css={buttonsContainerStyle}>
            <div>
                <div css={additonalActionButtonStyles}>
                    <Stack direction="row" spacing=".5em" alignItems="center">
                        <label>Apply To:</label>
                        <div><input type="radio" value="5" name="apply"/> &nbsp;5</div>
                        <div><input type="radio" value="10" name="apply"/> &nbsp;10</div>
                        <div><input type="radio" value="all" name="apply"/> &nbsp;all</div>
                    </Stack>
                </div>
            </div>
            <div css={buttonWrapperBaseStyle}>
                <Button onMouseDown={onMouseDown} type="submit" variant="text" startIcon={<CheckOutlinedIcon/>}>
                    {confirmButtonLabel}
                </Button>
            </div>
            <div css={buttonWrapperBaseStyle}>
                <Button onClick={onCancelClick} onMouseDown={onMouseDown} variant="text"
                        startIcon={<CloseOutlinedIcon/>}>
                    {cancelButtonLabel}
                </Button>
            </div>
        </div>
    )
}
export default Buttons;