// we are creating a helper function for doing the grunt work of connected to the IMGUR API, and sending it to our store

//qs is a library for creating querystrings
import qs from 'qs';
import axios from 'axios';

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
  },
  fetchImages(){
    // axios.get takes 2 args here: https string & according to imgur api docs, we must provide: header w/ access token attached to Bearer
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${}`
      }
    })
  }
};
