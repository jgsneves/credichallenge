import React, { createContext } from "react";
import companies from '../data/companies.json';
import users from '../data/users.json';

export const companyContext = createContext<CompanyContext>({} as CompanyContext);

export const CompanyProvider: React.FC = ({children}) => {
    const currentCompany = companies.data.filter(comp => comp.selected === true);
    const userList = users.data.filter(user => user.companyId === currentCompany[0].id);

    const [company, setCompany] = React.useState<CompanyData>({
        companyName: currentCompany[0].fantasyName,
        companyUsers: userList,
        approvedLoans: [],
        reprovedLoans: [],
    });

    return (
        <companyContext.Provider value={{
            companyData: company,
            setCompany
        }}>
            {children}
        </companyContext.Provider>
    );
}
