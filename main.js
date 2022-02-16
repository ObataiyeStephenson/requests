const axios = require('axios');
const reqUrl = 'http://localhost:6020/constellations';
let constellation = process.argv[2];

axios.get(reqUrl).then(resp=>{
    const constellations =resp.data;
    let found = constellations.find(constell=>constell.name===constellation);
    console.log(found);


});
