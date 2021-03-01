import axios from 'axios';

export default axios.create({
  baseURL:"http://bcc-filkom-ub-elb-392908734.ap-southeast-1.elb.amazonaws.com:8085",
  header:{
      "Access-Control-Allow-Origin" : "*"
  }
})