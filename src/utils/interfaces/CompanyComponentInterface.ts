import CleaningCompanyInterface from "./CleaningCompanyInterface";

interface CompanyComponentInterface{
    company: CleaningCompanyInterface;
    handleContact: (company: CleaningCompanyInterface) => void;
}

export default CompanyComponentInterface;