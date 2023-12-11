"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header(props){
return (
    <header className="px-3">
        <nav className="flex justify-between">
            <FontAwesomeIcon icon={props.icons[0]} />
            <h1>{props.title}</h1>
            <FontAwesomeIcon icon={props.icons[1]} />
        </nav>
    </header>
)
}