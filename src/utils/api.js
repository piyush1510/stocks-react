import axios from 'axios'

export default (fx,symbol)=>{
    return axios.get(`https://www.alphavantage.co/query?function=${fx}&symbol=${symbol}&apikey=${process.env.REACT_APP_api_key}`)
    // return axios.get('http://localhost:5000/')
}