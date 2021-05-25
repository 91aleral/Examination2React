import { createContext, useState } from 'react'

export const DataContext = createContext([])

export const DataProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState()



    return (
        <DataContext.Provider value={[globalData, setGlobalData]}>
            { children }
        </DataContext.Provider>

        
    )
}