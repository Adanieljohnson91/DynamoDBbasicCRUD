const AWS_CALLS = require("./Aws_Services/awsServices");

async function main(){
    //GET//
   async function get(id){
        let params = {TableName:"Cars",Key:{"id":id}}
    let items = await AWS_CALLS
    .get(params)
    .then(res=> res)
    .catch(err=>console.log(err, "ERROR"))
    return items;
    }
    //GET ALL//
    async function getAll(){
        let params = {"TableName":"Cars"}
    let items = await AWS_CALLS
    .getAll(params)
    .then(res=>res)
    .catch(err=>console.log("ERROR GET ALL: ", err))
    console.log(items, "GET ALL");
    }
    async function insert(){
        let params = {TableName:"Cars", Item:{
            fuel_type: 'Electric',
    manufacturer: 'Ford',
    description: 'A smooth ride',
    name: 'Bronco',
    id:4,
    type: 'Automatic',
    ReturnValues:{success:true}
        }}
        let res = await AWS_CALLS.insert(params)
        .then(res=>res)
        .catch(err=>console.log(err))
        console.log(res);
    }
  //  await insert();
  //  await getAll();
  async function update(id, name){
    let car = await get(id).then();
    console.log(car, "CARRRR")
     car.name = name;
     debugger;
     let params = {
         TableName:"Cars",
         Item:car
     }
    console.log(car)
    await AWS_CALLS.insert(params)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
// await getAll();
// await update(2,"Mustang");
await getAll();
    
}

main();




























// const AWS = require("aws-sdk");
// const fs = require('fs');
// const JSON_DATA = require("../data/cars.json")


// AWS.config.update({
//    "accessKeyId":"AKIAJ7772MWOEURDHUUA",
//     "secretAccessKey":"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",
//     "region":"us-east-2",
//     "endpoint":"http://dynamodb.us-east-2.amazonaws.com"
// });
// var dynamodb = new AWS.DynamoDB();
// const DOC_CLIENT = new AWS.DynamoDB.DocumentClient();
// // INSERTING DATA INTO DB
// console.log("Importing Cars into DynamoDB. Please Wait.");

// const cars = JSON.parse(fs.readFileSync("data/cars.json"));

// cars.forEach(car => {
//     console.log(car);

// const TABLE = "Cars";
// const ID = 1;
// var params = {
//     TableName: TABLE,
//     Item: {
//         "id": car.id,
//         "type": car.type,
//         "name": car.name,
//         "manufacturer": car.manufacturer,
//         "fuel_type": car.fuel_type,
//         "description": car.description
//     }
// };

// DOC_CLIENT.put(params, (err, data)=>{
//     if(err)console.log("Unable to add Car", car.name,". Error Json:", JSON.stringify(err, null, 2));
//     else{
//         console.log("PutItem succeeded:", car.name);
//     }
// })

// });





//Params for new table
// var params = {
//     TableName : TABLE   ,
//     Key: {
//         "id":ID
//     }
// };
// dynamodb.createTable(params, function(err, data) {
//     if (err) {
//         console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
//     }
// });

        
        

