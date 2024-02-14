import {MouseEventHandler} from "react";
import './BaseButton.scss'

export interface IBaseButton {
    id?: string;
    disabled?: boolean;
    icon?: string;
    text?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    notAnimated?: boolean;
    alt?: string;
}

export default function BaseButton(props: IBaseButton) {
    const className = 'base-button-container' + (props.notAnimated ? '' : ' animated')

    return <button onClick={props.onClick}
                   className={className}
                   disabled={props.disabled}>
        <p>{props.text}</p>
    </button>
}