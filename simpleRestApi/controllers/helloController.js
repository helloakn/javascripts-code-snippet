const helloMethod =  (req,client)=>{

  client.send(301,"hi hi hi tes");
}

//export {helloMethod}
module.exports = helloMethod