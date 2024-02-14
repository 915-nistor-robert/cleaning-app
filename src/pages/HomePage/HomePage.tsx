import './HomePage.scss'
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import CompaniesComponent from "../../components/CompaniesComponent/CompaniesComponent";
import SortPanelComponent from "../../components/SortPanelComponent/SortPanelComponent";
import {useState} from "react";
import {CLEANING_COMPANIES, SORT_OPTIONS} from "../../utils/GeneralUtils";

export default function HomePage() {
    const [companies, setCompanies] = useState(CLEANING_COMPANIES)
    const [selectedSort, setSelectedSort] = useState(SORT_OPTIONS.NONE);
    let filterByLocation = (location: string) => {
        const filteredCompanies = CLEANING_COMPANIES.filter((company: any) => {
            return company.city.toLowerCase().includes(location.toLowerCase())
        })
        setCompanies(filteredCompanies)
        setSelectedSort(SORT_OPTIONS.NONE)
    }

    let sortCompanies = (sortType: SORT_OPTIONS) => {
        switch (sortType) {
            case SORT_OPTIONS.RATING_HIGH_TO_LOW:
                setCompanies([...companies].sort((a, b) => b.rating - a.rating))
                break;
            case SORT_OPTIONS.RATING_LOW_TO_HIGH:
                setCompanies([...companies].sort((a, b) => a.rating - b.rating))
                break;
            case SORT_OPTIONS.CITY_A_TO_Z:
                setCompanies([...companies].sort((a, b) => a.city.localeCompare(b.city)))
                break;
            case SORT_OPTIONS.CITY_Z_TO_A:
                setCompanies([...companies].sort((a, b) => b.city.localeCompare(a.city)))
                break;
            case SORT_OPTIONS.NAME_A_TO_Z:
                setCompanies([...companies].sort((a, b) => a.name.localeCompare(b.name)))
                break;
            case SORT_OPTIONS.NAME_Z_TO_A:
                setCompanies([...companies].sort((a, b) => b.name.localeCompare(a.name)))
                break;
        }
        setSelectedSort(sortType)
    }

    
    return (
        <div className={'home-page-container'}>
            <SearchComponent onSearch={filterByLocation}/>
            <div className={'section-delimiter'}/>
            <div className={'display-companies-container'}>
                <SortPanelComponent sortFunction={sortCompanies} sortType={selectedSort}/>
                <CompaniesComponent itemsPerPage={5} companies={companies}/>
            </div>
        </div>
    )
}