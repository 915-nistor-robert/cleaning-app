import './CompanyComponents.scss'
import {CiLocationOn, CiPhone, CiStar} from "react-icons/ci";
import BaseButton from "../buttons/BaseButton/BaseButton";
import CompanyComponentInterface from "../../utils/interfaces/CompanyComponentInterface";

export default function CompanyComponent(props: CompanyComponentInterface) {
    return (
        <div className={'company-container'}>
            <p className={'company-name'}>{props.company.name}</p>
            <p className={'company-address'}>{props.company.address}</p>
            <div className={'company-footer-container'}>

                <div className={'company-info-container'}>
                    <div className={'company-phone'}><CiPhone/><p>{props.company.phone}</p></div>
                    <div className={'company-rating'}><CiStar/><p>{props.company.rating}</p></div>
                    <div className={'company-city'}><CiLocationOn/><p>{props.company.city}</p></div>
                </div>
                <div className={'contact-button-container'}>
                    <BaseButton onClick={() => props.handleContact(props.company)} text={'Contact'}/>
                </div>
            </div>

        </div>
    )
}