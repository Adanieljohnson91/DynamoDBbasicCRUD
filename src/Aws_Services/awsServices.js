//IMPORT AWS SDK to interact with DynamoDB
const AWS = require("aws-sdk");

//Configure your calls
AWS.config.update({
   
});
const docClient = new AWS.DynamoDB.DocumentClient()
const AWS_CALLS = {
   async get(params){
       let result;
      await  docClient.get(params, (err,data)=>{
            if(err){
                console.log(err);
                return;
            }else{
             retult = data;
             
            }
        }).promise()
        .then((data,err)=>{
            result = data.Item;
            if(err)console.log(err);
        });
        return result;
    },

    async getAll(params){
        let result = undefined;
        await docClient.scan(params, (err, data)=>{
            if(err){
                console.log(err, "ERROR");
            }else{
                return data.Items
            }
        }).promise().then(res=>{
            result = res.Items
        });
        return result;
    },

    async insert(params){
        await docClient.put(params, (err, data)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(data, "success");
        })
    },

   async update(){
    await docClient.put(params, (err, data)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(data, "success updated");
    })
    },

    async remove(){
        
    }
    
}
module.exports = AWS_CALLS;
