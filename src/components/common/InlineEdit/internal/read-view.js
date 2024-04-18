/** @jsx jsx */
import React, {useRef} from 'react';
import {css, jsx} from '@emotion/react';

const readViewContainerStyle = css({
    lineHeight: 1
})
const editButtonStyle = css({
    display: 'block',
    margin: '0px',
    padding: '0px',
    background: 'transparent',
    border: 0,
    lineHeight: 1,
    '&:focus + div': {
        border: '2px solid red'
    }
});

const readViewWrapperStyles = css({
    display: 'inline-block',
    boxSizing: 'border-box',
    width: 'auto',
    maxWidth: '100%',
    border: '2px solid transparent',
    transition: 'background 0.2s',
    '&:hover': {
        background: '#ddd'
    }
})

const ReadView = (props) => {

    const {
        onEditRequested,
        readView,
        editButtonRef,
    } = props;

    const onReadViewClick = (event) => {
        event.preventDefault();
        onEditRequested();
    }

    return (
        <div css={readViewContainerStyle}>
            <button css={editButtonStyle} type="button" onClick={onEditRequested} ref={editButtonRef}/>
            <div
                css={readViewWrapperStyles}
                role="presentation"
                onClick={onReadViewClick}
            >
                {readView()}
            </div>
        </div>
    )
}

export default ReadView;
