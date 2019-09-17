import React, { Component } from 'react';
import CountryResult from '../../components/CountryResult/CountryResult';
import YTSearchHelper from '../../components/YTSearchHelper';
import axios from '../../axios-orders';
import { connect } from 'react-redux';

class continentResults extends Component {
    componentDidMount() {
    }

    getYTData() {
        const continent = (getCountryArray(this.props.continent));
        let count = continent.length;
        let videoData = [];
        let countryOrder = [];
        continent.map((country, index) => {
            return (
                axios.get(YTSearchHelper(country))
                    .then(rspData => {
                        videoData.push(rspData.data);
                        count--;
                        countryOrder.push(country);
                        if (count === 0) {
                            this.props.updateData(this.props.updateString, videoData, countryOrder)
                        }

                    }
                    )
                    .catch(error => {
                        console.log(error);
                    })
            )
        });
    }

    checkIfAlreadyLoaded(continent) {
        switch (continent) {
            case 'northAmerica':
                return this.props.northAmerica.loaded;
            case 'southAmerica':
                return this.props.southAmerica.loaded;
            case 'asia':
                return this.props.asia.loaded;
            case 'europe':
                return this.props.europe.loaded;
            case 'africa':
                return this.props.africa.loaded;
            case 'australia':
                return this.props.australia.loaded;
            default:
                return true;
        }
    }

    render() {
        let countryResult = null;
        if (!this.checkIfAlreadyLoaded(this.props.activeContinent)) {
            this.getYTData();
        } else {
            this.props.loadPrev(this.props.continent);
        }
        if (this.props.activeData) {
            countryResult = Object.keys(this.props.activeData)
                .map(vids => {
                    return (
                        <CountryResult
                            key={this.props.activeData[vids].etag}
                            countryData={this.props.activeData[vids].items}
                            countryName={this.props.activeContinentCountryOrder[vids]}
                        />
                    )
                })
        }


        return (
            <div>
                {countryResult}
            </div>
        );
    }
}

const getCountryArray = (continent) => {
    switch (continent) {
        case 'northAmerica':
            return ['us', 'mx', 'ca', 'pr'];
        case 'southAmerica':
            return ['br', 'CO', 'ar', 'pe', 'cl'];
        case 'asia':
            return ['kr', 'jp', 'tw', 'vn', 'id', 'hk', 'in', 'SG', 'th', 'my', 'il', 'pk', 'bd', 'ru'];
        case 'europe':
            return ['gb', 'de', 'ru', 'fr', 'se', 'ch', 'it', 'es', 'pt', 'gr', 'pl', 'nl', 'tr', 'be'];
        case 'africa':
            return ['ke', 'et', 'ng', 'dz', 'mo', 'za', 'cg', 'tz'];
        case 'australia':
            return ['au', 'nz'];
        default:
            return [];
    }

}

const mapStateToProps = state => {
    return {
        activeContinent: state.activeContinent,
        activeData: state.activeData,
        asia: state.asia,
        europe: state.europe,
        northAmerica: state.northAmerica,
        southAmerica: state.southAmerica,
        australia: state.australia,
        africa: state.africa,
        updateString: state.updateString,
        activeContinentCountryOrder: state.activeContinentCountryOrder
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateData: (continent, vidData, order) => dispatch({ type: continent, payload: vidData, countryOrder: order }),
        loadPrev: (continent) => dispatch({ type: 'LOAD_PREV', val: continent })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(continentResults);