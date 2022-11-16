const urlForTickers = "https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=6c26a26ee21c72ea8d84650fbefb2135"
const urlForLosers = "https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=6c26a26ee21c72ea8d84650fbefb2135"
const urlForGainers = "https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=6c26a26ee21c72ea8d84650fbefb2135"

//changed url for gainers for testing purpose

async function getGainers(){
    var a  =[];
    let res = await fetch(urlForGainers);
    const data =(await res.json())
    for (var i = 0; i < 16; i++) {
        a[i]=data[i]
    } 
    return a;
}



async function getLosers(){
    var a  =[];
    let res = await fetch(urlForLosers)
    const data = await res.json()
    for(let i= 0;i<16;i++){
        a[i]=data[i]
    }
    return a;
}

async function getSymbols(){
    var a  =[];
    let res = await fetch(urlForTickers)
    const data = await res.json()
    for(let i= 0;i<100;i++){
        a[i]=data[i]
    }
    return a;
}

export {getSymbols, getGainers, getLosers};