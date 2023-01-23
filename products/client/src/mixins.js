import axios from "axios";

export default{
  method:{
    async $api(url,data){
      return(await axios({
        method: 'post',
        url,
        data
      }).catch(e=>{
        console.log(e);
      })).data;
    }
  }
}
