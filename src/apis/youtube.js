import axios from 'axios';


const KEY = 'AIzaSyABib8cWLP94smQcVnOKaMsXExn_0yGVH4';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:5,
    key:KEY
  }
})
