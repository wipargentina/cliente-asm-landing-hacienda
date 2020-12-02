const moment = require('moment');

const today = moment().format('YYYY-MM-DD');
const apiCalendarURL = `https://alfredosmondino.herokuapp.com/eventos?_where[fecha_gte]=${today}&_sort=fecha:ASC`;
const apiEventURL = `https://alfredosmondino.herokuapp.com/eventos?_where[fecha_gte]=${today}&_limit=1&_sort=fecha:ASC`;

export function getCalendar() {
  return fetch(apiCalendarURL)
    .then((resp) => resp.json())
    .then((response) => {
      const data = response;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getEvent() {
  return fetch(apiEventURL)
    .then((resp) => resp.json())
    .then((response) => {
      const data = response;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
