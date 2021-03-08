// const today = moment().format('YYYY-MM-DD');
const apiRemateURL = `https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=1ILdG1sgH2b7bT2Y5v4U-Y81sm6CaIHHA5BNskRL3uCc&sheet=data`;

export function getRemates() {
  return fetch(apiRemateURL)
    .then((resp) => resp.json())
    .then((response) => {
      const data = response;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
