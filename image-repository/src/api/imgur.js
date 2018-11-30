import qs from 'qs';

const CLIENT_ID = '58b0fcc2cfe0606';
const ROOT_URL = "https://api.imgur.com";

//"?client_id=YOUR_CLIENT_ID&response_type=token&state=APPLICATION_STATE"

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }

    window.location = `${ROOT_URL}//oauth2/authorize?${qs.stringify(queryString)}`;
  }
}