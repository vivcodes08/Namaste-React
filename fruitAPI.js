const axios = require('axios');
const https = require("https");
const NodeCache=require('node-cache')
const mycache=new NodeCache();
axios.defaults.timeout = 30000;
axios.defaults.httpsAgent = new https.Agent({ keepAlive: true });

const  requestFruitsData= async(name)=>{
let config = {
  method: 'get',
  url: 'https://www.fruityvice.com/api/fruit/'+name,
  headers: { }
};

let data= await axios.get(config.url,config)
console.log("DATA fetch from API for"+name)
console.log(data ? data.data : "AXIOS NO DATA FOUND")
  return data

}


const fruits=[
  'apple',
  'orange',
  'apple',
]

let i=0;

console.log("mycache".mycache)
fruits.forEach(async(index)=>{
  if(mycache.has(index))
      {
        console.log("--Using Cached Data For " + index);
        console.log("Cache Object---\n"+mycache.get(index))
     }
  else{
        console.log("--getting Data From API for "+index);
        requestFruitsData(index).then((response)=>{
          console.log("I counter", i);
          i++;
              console.log("API DATA 200 ok")
              console.log(response ? response.data :"NO DATA FOUND")
             
        }).catch(error=>{
          console.log(error)
        })
      
        



        
  }   
        
})


module.exports=requestFruitsData


