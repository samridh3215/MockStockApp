const urlForTickers = "https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=6c26a26ee21c72ea8d84650fbefb2135"
const urlForLosers = "https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=6c26a26ee21c72ea8d84650fbefb2135"
const urlForGainers = "https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=6c26a26ee21c72ea8d84650fbefb2135"


function getGainers(){
    var a  =[];
    fetch(urlForGainers)
        .then(res => res.json())
        .then(data => {
            for (var i = 0; i < 100; i++) {
                a[i]=data[i].symbol
            } 
        })
    return a;
}


function getLosers(){
    var a  =[];
    fetch(urlForLosers)
        .then(res => res.json())
        .then(data => {
            for (var i = 0; i < 100; i++) {
                a[i]=data[i].symbol
            } 
        })
    return a;
}

function getSymbols() {
    var a =[];
    var b= getGainers();
    var c = getLosers();
    fetch(urlForTickers)
        .then(res => res.json())
        .then(data => {
            for (var i = 0; i < 100; i++) {
                a[i]=data[i].symbol
            } 
        })
    
    return a+b+c;
}


export {getSymbols, getGainers, getLosers};