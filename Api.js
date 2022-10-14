// import axios from 'axios';

// // https://sujeitoprogramador.com/r-api/?api=filmes

// const Api = axios.create({
//     baseURL: 'https://sujeitoprogramador.com'
// });

// export default Api;

// Base URL https://free.currencyconverterapi.com/api/v5/
// convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad

import axios from 'axios';

const api = axios.create({
    baseURL: ' https://free.currencyconverterapi.com/api/v5'
});

export default api;