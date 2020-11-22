const moment = require('moment');

const today = moment().format('YYYY-MM-DD');
const apiURL = `https://alfredosmondino.herokuapp.com/eventos?_where[fecha_gte]=${today}&_limit=1`;

export default function getNextAuction() {
  return fetch(apiURL)
    .then((resp) => resp.json())
    .then((response) => {
      const data = response;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
