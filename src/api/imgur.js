// we are creating a helper function for doing the grunt work of connected to the IMGUR API, and sending it to our store

//qs is a library for creating querystrings
import qs from 'qs';

const CLIENT_ID = require('./../../.env').apiKey;
const ROOT_URL = 'https://api.imgur.com'


export default {
  login(){
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    //window.location navigates window to IMGUR oath page w/ querystring
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  }
};
