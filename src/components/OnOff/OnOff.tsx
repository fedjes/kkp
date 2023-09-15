import React, { useState } from "react"
import styled from "styled-components"

type OnOffPropsType = {
    // value: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {
    const [on, setOne] = useState(false)
    const onStyle = {
        height: '20px',
        width: '40px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white'
    };
    const ofStyle = {
        height: '20px',
        width: '40px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red'
    };
    const circle = {
        height: '10px',
        width: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red'
    };

    const onCliced = () => {
        setOne(true)
        props.onChange(true)
    }
    const offCliced = () => {
        setOne(false)
        props.onChange(false)
    }

    return (
        <Wrapper>
            <div style={onStyle} onClick={onCliced}>On</div>
            <div style={ofStyle} onClick={offCliced}>Off</div>
            <div style={circle}></div>
        </Wrapper>
    )
}

const Cirle = styled.div`
    color: white;
`


const Wrapper = styled.div`
    display: flex;

`