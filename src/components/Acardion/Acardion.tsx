import React from "react"

type AcardionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

export function Acardion(props: AcardionPropsType) {

    return (
        <>
            <AcardionTitle title={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AcardionBody />}
        </>
    )
}

type AcardionTitlePropsType = {
    title: string
    onChange: () => void
}

function AcardionTitle(props: AcardionTitlePropsType) {
    return (
        <h3 onClick={ props.onChange }>{props.title}</h3>
    )
}

function AcardionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}