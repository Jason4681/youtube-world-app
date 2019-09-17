

const YTSearchHelper = (regionCode) => {

    return 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+player&chart=mostPopular&maxResults=10&maxWidth=720&regionCode='
        + regionCode + '&key=' + process.env.YT_APP_API_KEY
}
//?
export default YTSearchHelper;

