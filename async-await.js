const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;

 
const orion = {
    name: "Orion",
    meaning: "Archer",
    starsWithPlanets: 10,
    quadrant: "NQ4",
  };
   
function returnProm(){
    const postUrl = `${BASE_URL}/constellations`;
    return axios.post(postUrl,orion)
}

async function getConstellationNameById(id) {
    try {
      const posted = await returnProm();
      console.log(posted.data);  
      const url = `${BASE_URL}/constellations/${posted.data.id}`;
      const { data } = await axios.get(url);
      console.log(data);
      return data.name;
    } catch (error) {
      throw `Constellation with id of ${id} could not be found.`;
    }
  }
   
  getConstellationNameById("n2OEOzp").then(console.log);
  //> "Libra"
   
  //getConstellationNameById("error").catch(console.log);
  //> Constellation with id of error could not be found.