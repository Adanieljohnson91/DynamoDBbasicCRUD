async function main() {
    const { MachineLearning } = require("aws-sdk");
    const AWS = require("aws-sdk");

    AWS.config.update({
        "accessKeyId": "AKIAJ7772MWOEURDHUUA",
        "secretAccessKey": "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",
        "region": "us-east-2",
        "endpoint": "http://dynamodb.us-east-2.amazonaws.com"
    });


    //GET
    const docClient = new AWS.DynamoDB.DocumentClient()
    const table = "Cars";
    const id = 1;
    const params = {
        TableName: table,
        Key: {
            "id": id
        }
    };
    async function getAllCars(params, documentClient) {
        let result = [];
        let items;

        items = await documentClient.scan(params, (err, data) => {
            if (err) {
                console.log(err, "UNABLE TO RUN OPERATION")
            } else {
                return data.Items;
            }
        }).promise().then((data, err) => {
            result.push(data)
        })

        return result;
    }
    let results = await getAllCars(params, docClient);
    let arr = []
    results.forEach(item => item.Items.forEach(item => arr.push(item)));
    console.log(arr, "Array");

    function getCar(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    }
}
main();