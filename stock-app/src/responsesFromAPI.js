const APIkey1 = "d78579335eda3e1157a940afc7cd4f19"
const APIkey2 = "6c26a26ee21c72ea8d84650fbefb2135"

const urlForTickers = "https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&&apikey="+APIkey2
const urlForLosers = "https://financialmodelingprep.com/api/v3/stock_market/losers?apikey="+APIkey2
const urlForGainers = "https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey="+APIkey2

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
    for(let i= 0;i<data.length;i++){
        a[i]=data[i]
    }
    return a;
}

export {getSymbols, getGainers, getLosers};