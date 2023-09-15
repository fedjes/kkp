import React, { useState } from "react"

type AcardionPropsType = {
    title: string
    // collapsed: boolean
}

export function AcardionUncontroled (props: AcardionPropsType) {
    function HandlerOnClick () {
        setCollapsed(!collapsed);
    }
    const [collapsed, setCollapsed] = useState(true)
        return (
            <>
                <AcardionTitle title={props.title} handler={HandlerOnClick} />
                { !collapsed && <AcardionBody /> }
            </>
        )
    }

// export function Acardion(props: AcardionPropsType) {
//     if (props.collapsed === true) {
//         return <>
//             <AcardionTitle title={props.title} />

//         </>
//     } else {
//         return (
//             <>
//                 <AcardionTitle title={props.title} />
//                 <AcardionBody />
//             </>
//         )
//     }

// }

type AcardionTitlePropsType = {
    title: string
    handler: ()=>void
}



function AcardionTitle(props: AcardionTitlePropsType) {
    return (
        <h3 onClick={props.handler}>{props.title}</h3>
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