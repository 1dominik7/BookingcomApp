import { createContext, useReducer } from "react"

const INITIAL_STATE = {
    departureAirport: undefined,
    arrivalAirport: undefined,
    fromCity: undefined,
    toCity: undefined,
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        seat: undefined,
    },
}

export const SearchFlightContext = createContext(INITIAL_STATE)

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return INITIAL_STATE
        default:
            return state;
    }
}

export const SearchFlightContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE)


    return (
        <SearchFlightContext.Provider
            value={{
                departureAirport: state.departureAirport,
                arrivalAirport: state.arrivalAirport,
                fromCity: state.fromCity,
                toCity: state.toCity,
                dates: state.dates,
                options: state.options,
                dispatch
            }}>
            {children}
        </SearchFlightContext.Provider>
    )
}