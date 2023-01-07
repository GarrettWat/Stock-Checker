const apiKey = 'NV0ZL9IPUAEU7WQN';
const apiURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&datatype=json&limit=1&outputsize=1&symbol=IBM&apikey=';
function fetchStockData() {
    fetch(apiURL + apiKey)
        .then(response => response.json())
        .then(data => {
            const stockData = Object.values(data['Time Series (Daily)']).at(-1);
            console.log(stockData);
        });
}


export default fetchStockData;