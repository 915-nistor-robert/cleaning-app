import CleaningCompanyInterface from "./CleaningCompanyInterface";

interface ContactCompanyProps{
    company: CleaningCompanyInterface;
    handleClose: () => void;
    handleSend: (message: string) => void;
}

export default ContactCompanyProps;