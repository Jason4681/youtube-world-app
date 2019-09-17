const initialState = {
    activeContinent: null,
    activeVideo: null,
    activeData: null,
    activeContinentCountryOrder: [],
    asia: {
        data: null,
        loaded: false,
        countryOrder: [],
    },
    europe: {
        data: null,
        loaded: false,
        countryOrder: [],
    },
    northAmerica: {
        data: null,
        loaded: false,
        countryOrder: [],
    },
    southAmerica: {
        data: null,
        loaded: false,
        countryOrder: [],
    },
    australia: {
        data: null,
        loaded: false,
        countryOrder: [],
    },
    africa: {
        data: null,
        loaded: false,
        countryOrder: [],
    },
    updateString: null,
    loading: false

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_CONTINENT':
            if (state.activeContinent === action.val) {
                return state;
            }
            return {
                ...state,
                activeContinent: action.val,
                updateString: 'UPDATE_' + action.val.toUpperCase(),
                loading: true
            }
        case 'NEW_VIDEO':
            document.getElementById("youtube-player").scrollIntoView({ behavior: 'smooth' })
            return {
                ...state,
                activeVideo: action.val
            }
        case 'LOAD_PREV':
            return {
                ...state,
                activeData: state[action.val].data,
                activeContinentCountryOrder: state[action.val].countryOrder,
                loading: false
            }
        case 'UPDATE_EUROPE':
            return {
                ...state,
                europe: {
                    data: action.payload,
                    loaded: true,
                    countryOrder: action.countryOrder,
                },
                activeData: action.payload,
                activeContinentCountryOrder: action.countryOrder,
                loading: false
            }
        case 'UPDATE_NORTHAMERICA':
            return {
                ...state,
                northAmerica: {
                    data: action.payload,
                    loaded: true,
                    countryOrder: action.countryOrder,
                },
                activeData: action.payload,
                activeContinentCountryOrder: action.countryOrder,
                loading: false
            }
        case 'UPDATE_ASIA':
            return {
                ...state,
                asia: {
                    data: action.payload,
                    loaded: true,
                    countryOrder: action.countryOrder,
                },
                activeData: action.payload,
                activeContinentCountryOrder: action.countryOrder,
                loading: false
            }
        case 'UPDATE_SOUTHAMERICA':
            return {
                ...state,
                southAmerica: {
                    data: action.payload,
                    loaded: true,
                    countryOrder: action.countryOrder,
                },
                activeData: action.payload,
                activeContinentCountryOrder: action.countryOrder,
                loading: false
            }
        case 'UPDATE_AUSTRALIA':
            return {
                ...state,
                australia: {
                    data: action.payload,
                    loaded: true,
                    countryOrder: action.countryOrder,
                },
                activeData: action.payload,
                activeContinentCountryOrder: action.countryOrder,
                loading: false
            }
        case 'UPDATE_AFRICA':
            return {
                ...state,
                africa: {
                    data: action.payload,
                    loaded: true,
                    countryOrder: action.countryOrder,
                },
                activeData: action.payload,
                activeContinentCountryOrder: action.countryOrder,
                loading: false
            }
        default:
    }
    return state;

}

export default reducer; 