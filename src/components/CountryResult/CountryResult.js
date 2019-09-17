import React from 'react';
import VideoResult from '../VideoResult/VideoResult';
import styles from '../VideoResult/VideoResult.css';

const countryResult = (props) => {
    let countryDisplay = null;
    let countryCode = props.countryName.toLowerCase();
    let countryName = getFullName(countryCode)
    if (props.countryData) {
        countryDisplay = props.countryData.map(vid => {
            return (<VideoResult
                key={vid.etag}
                imgUrl={vid.snippet.thumbnails.medium.url}
                title={vid.snippet.title}
                embedPlayer={vid.player.embedHtml} />
            )
        })
    }
    return (
        // <div style={{ overflow: 'scroll', width: '100%' }}>
        <div>
            <h2 style={{ 'fontFamily': 'martel sans;', 'paddingLeft': '30px' }}>Trending in {countryName}</h2>
            <div className={styles.Scroll}>

                <div className={styles.CountryResult}>
                    {countryDisplay}
                </div>
            </div>
        </div>


    );
}

const getFullName = (code) => {
    const listing = {
        'tw': "Taiwan",
        'kr': "South Korea",
        'pk': "Pakistan",
        'hk': "Hong Kong",
        'vn': "Vietnam",
        'sg': "Singapore",
        'in': "India",
        'id': "Indonesia",
        'th': "Thailand",
        'my': "Malaysia",
        'il': "Israel",
        'jp': "Japan",
        'bd': "Bangladesh",
        'au': "Australia",
        'nz': "New Zealand",
        'ke': "Kenya",
        'dz': "Algeria",
        'ng': "Nigeria",
        'tz': "Tanzania",
        'za': "South Africa",
        'et': "Ethiopia",
        'cg': "Rep Of Congo",
        'mo': "Macao",
        'fr': "France",
        'ch': "Switzerland",
        'gb': "United Kingdom",
        'de': "Germany",
        'se': "Sweden",
        'pt': "Portugal",
        'pl': "Poland",
        'nl': "Netherlands",
        'tr': "Turkey",
        'be': "Belgium",
        'gr': "Greece",
        'ru': "Russia",
        'es': "Spain",
        'it': "Italy",
        'br': "Brazil",
        'cl': "Chile",
        'co': "Colombia",
        'pe': "peru",
        'ar': "Argentina",
        'pr': "Puerto Rico",
        'mx': "Mexico",
        'us': "United States",
        'ca': "Canada"
    }
    return listing[code];
}

export default countryResult;