import React, { useState } from "react"
import styled from "styled-components"

type OnOffPropsType = {
    on: boolean
    onChange: (on:boolean)=> void
}

export function OnOffControl(props: OnOffPropsType) {
    
    const onStyle = {
        height: '20px',
        width: '40px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white'
    };
    const ofStyle = {
        height: '20px',
        width: '40px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red'
    };
    const circle = {
        height: '10px',
        width: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'red'
    };

    return (
        <Wrapper>
            <div style={onStyle} onClick={() => props.onChange(true)}>On</div>
            <div style={ofStyle} onClick={() => props.onChange(false)}>Off</div>
            <div style={circle}></div>
        </Wrapper>
    )
}




const Wrapper = styled.div`
    display: flex;

`