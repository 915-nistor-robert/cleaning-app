import CompanyComponent from "../CompanyComponent/CompanyComponent";
import './CompaniesComponent.scss'
import CompaniesComponentsProps from "../../utils/interfaces/CompaniesComponentsProps";
import {useEffect, useState} from "react";
import ContactCompanyModal from "../modals/ContactCompanyModal";

export default function CompaniesComponent(props: CompaniesComponentsProps) {
    const [contactCompany, setContactCompany] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * props.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - props.itemsPerPage;

    const currentItems = props.companies.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setCurrentPage(1);
    }, [props.companies])
    const handlePageChange = (pageNumber: number) => {
        if (pageNumber < 1 || pageNumber > props.companies.length / props.itemsPerPage) {
            return;
        }
        setCurrentPage(pageNumber);
    };
    let handleContact = (company: any) => {
        console.log(company)
        setContactCompany(company);
    }

    let handleSend = (message: any) => {
        console.log(message)
    }
    return (
        <div className={'companies-container'}>
            <div className={'companies-list'}>
                {currentItems.map((company, index) => {
                        return <CompanyComponent company={company} handleContact={handleContact}/>
                    }
                )}
            </div>
            <div className={'pagination-container'}>
                <div className={'previous-page-button'} onClick={() => handlePageChange(currentPage - 1)}>
                    &lt;
                </div>
                <div className={'page-number'}>{currentPage}/{props.companies.length / props.itemsPerPage}</div>
                <div className={'next-page-button'} onClick={() => handlePageChange(currentPage + 1)}>
                    &gt;
                </div>
            </div>
            {contactCompany && <ContactCompanyModal company={contactCompany} handleSend={handleSend}
                                                    handleClose={() => setContactCompany(null)}/>}
        </div>
    )
}