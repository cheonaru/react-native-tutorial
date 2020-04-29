import React, {createContext} from 'react';

const DataContext= createContext({
    searchText: '',
    id: ''
});

export default DataContext;
