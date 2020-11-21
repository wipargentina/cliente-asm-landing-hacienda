const apiURL =
  'https://alfredosmondino.herokuapp.com/eventos?_where[fecha_gte]=2020-11-21&_sort=fecha:ASC';

export default function getCalendar() {
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
