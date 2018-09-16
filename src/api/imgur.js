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
  fetchImages(token){
    // axios.get takes 2 args here: https string & according to imgur api docs, we must provide: header w/ access token attached to Bearer
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  uploadImages(images, token){
    //turn our file list object into an array, them call map function to iterate over each item
    const promises = Array.from(images).map(image => {
      //FormData object is vanilla JS, takes ref to file and attach a real files, so we are creating a key 'image' attached to value image
      const formData = new FormData();
      formData.append('image', image);

      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    });
    return Promise.all(promises);
  }
};
