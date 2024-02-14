import './ContactCompanyModal.scss';
import ContactCompanyProps from "../../utils/interfaces/ContactCompanyProps";
import BaseButton from "../buttons/BaseButton/BaseButton";

export default function ContactCompanyModal(props: ContactCompanyProps) {
    return (
        <div className={'contact-company-container'}>
            <div className={'contact-company-content'}>
                <div className={'contact-company-header'}>
                    <h2>Contact {props.company.name}</h2>
                    <div className={'close-contact-company'}>
                        <BaseButton onClick={() => props.handleClose()} text={'X'}/>
                    </div>
                </div>
                <p>Phone: {props.company.phone}</p>
                <p>Address: {props.company.address}</p>
                <p>City: {props.company.city}</p>
                <p>Rating: {props.company.rating}</p>
                <label htmlFor={'contact-message'}>Send a request</label>
                <textarea cols={40} rows={5}/>
                <div className={'contact-company-buttons'}>
                    <BaseButton onClick={() => props.handleSend('SNESD')} text={'Send'}/>
                </div>
            </div>
        </div>
    )
}