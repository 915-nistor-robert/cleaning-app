import './SearchComponent.scss'
import BaseButton from "../buttons/BaseButton/BaseButton";
import {useState} from "react";
import {CLEANING_COMPANIES} from "../../utils/GeneralUtils";
import SearchComponentProps from "../../utils/interfaces/SearchComponentProps";
import {CiUndo} from "react-icons/ci";
import {hamburgerMenu, headerLogo} from "../../assets";

export default function SearchComponent(props: SearchComponentProps) {
    const [searchInput, setSearchInput] = useState<string>('')
    const [cities, setCities] = useState<any[]>([])
    const [selectedCity, setSelectedCity] = useState<string>('')
    const [resetVisible, setResetVisible] = useState<boolean>(false)

    const handleSearch = (query: any) => {
        setSearchInput(query);
        if (query === '') return setCities([])

        const filtered = CLEANING_COMPANIES.filter((company: any) => {
            return company.city.toLowerCase().includes(query.toLowerCase())
        })

        // @ts-ignore
        setCities([...new Set(filtered.map((company: any) => company.city))])
    }

    const handleSearchButton = () => {
        props.onSearch(selectedCity)
        setResetVisible(true)
    }

    const handleCitySelection = (city: string) => {
        setSelectedCity(city)
        setSearchInput(city)
        setCities([])
    }

    const handleResetLocation = () => {
        setSelectedCity('')
        setSearchInput('')
        setResetVisible(false)
        setCities([])
        props.onSearch('')
    }


    return (
        <div className={'search-component-container'}>
            <div className={'header-container'}>
                <img className={'header-logo'} src={headerLogo} alt={'LOGO'}/>
                <div className={'navigation-container'}>
                    <p>Cleaners</p>
                    <p>Services</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>App</p>
                </div>
                <img src={hamburgerMenu} alt={'Hamburger Menu'} className={'hamburger-menu'}/>
            </div>
            <div className={'search-container'}>
                <div className={'cleaning-slogan'}>
                    <p>Make Cleaning Easy and Fast</p>
                </div>
                <div className={'search-input-container'}>
                    <div className={'search-input'}>
                        <input type={'text'} placeholder={'Enter your location'} value={searchInput}
                               onChange={(e) => handleSearch(e.target.value)}/>
                        <ul>
                            {cities.map((city, index) => (
                                <li onClick={() => {
                                    handleCitySelection(city)
                                }} key={index}>{city}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={'search-button-container'}>
                        <BaseButton onClick={() => {
                            handleSearchButton()
                        }} notAnimated={true} text={'Search'}/>
                    </div>
                    {resetVisible && <CiUndo onClick={() => {
                        handleResetLocation()
                    }} className={'reset-location-icon'}/>}

                </div>
            </div>
        </div>
    )
}