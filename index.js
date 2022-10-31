const axios = require('axios').default

axios({url:'https://alpha-testnet.api.matrixmarket.xyz/mart/v2/api-docs',responseType:'text',withCredentials:true,headers:{ "User-Agent": "Mozilla"}}).then(v=>{console.log(v)}).catch((e)=>console.log(JSON.stringify(e)))