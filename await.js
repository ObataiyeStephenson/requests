const axios = require("axios");
const api_key = `G9t2NdJSwXvmPA8Xr7rKQMp5afwWKkRm`;
const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=1&q=`;
let search1 = process.argv[2]
let search2 = process.argv[3]


async function getGifs(search1, search2){
    try {
        let search1Data = await axios.get(`${url}${search1}`);   
        let search2Data = await axios.get(`${url}${search2}`);   
        return [search1Data.data.data[0].bitly_url,search2Data.data.data[0].bitly_url]
    } catch (error) {   
        console.log(error);
    }
}

getGifs(search1,search2).then(searchResults=>{
    searchResults.forEach(result=>console.log(result));
})


