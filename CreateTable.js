
/**
 * Creating a table to test crud application 
*/
var AWS = require("aws-sdk");

AWS.config.update({
  region: "None",
  endpoint: "http://localhost:8081"
});

var dynamodb = new AWS.DynamoDB();

var mTable = {
    TableName : "Users",
    KeySchema: [       
        { AttributeName: "id", KeyType: "HASH"},  //Partition key
    ],
    AttributeDefinitions: [       
        { AttributeName: "id", AttributeType: "N" },
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 2, 
        WriteCapacityUnits: 2
    }
};

dynamodb.createTable(mTable, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});