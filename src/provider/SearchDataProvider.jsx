import { createContext, useState } from 'react';


export const SearchContext = createContext()

const SearchDataProvider = ({children}) => {

    const [searchData, setSearchData] = useState({})

    const dataInfo = {
        searchData,
        setSearchData
    }

    return (
        <SearchContext.Provider value={dataInfo}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchDataProvider;