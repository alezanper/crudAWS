var AWS = require("aws-sdk");

AWS.config.update({
region: "us-west-1",
endpoint: "http://localhost:8081"
});

var mDB = new AWS.DynamoDB.DocumentClient();

class Crud {
    constructor (table) {
        this.table = table
    };
    
    create (item) {   
        var params = {
            TableName:this.table, Item:item
        };
        
        mDB.put(params, function(err, data) {
            if (err) {
              console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            }else {
              console.log("Added item:", JSON.stringify(data, null, 2));
            }
        });      
    }

    Read (item){
        var params = {
            TableName:this.table, Key:item.getKey()
        };

        var result;

        mDB.get(params, function(err, data) {
            if (err) {
                console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            }

            try {
                result = data;
              } catch (err) {
                throw err;
              }

        });

        return result;

    }

    Update (item, field, data){
        var params = {
            TableName:this.table,
            Key: item.getKey(),
            UpdateExpression: "set " + field + " = :data",
            ExpressionAttributeValues:{
                ":data": data
            }
        };

        mDB.update(params, function(err, data) {
            if (err) {
                console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
            }
        });

    }

    Delete(item){
        var params = {
            TableName:this.table, Key:item.getKey()
        };

        mDB.delete(params, function(err, data) {
            if (err) {
                console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
            }
        });

    }

}

module.exports = Crud;