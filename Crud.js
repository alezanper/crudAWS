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


    create(item){
        var params = {
            TableName:this.table, Item:item
        };        
        return mDB.put(params).promise(); 
    };

    read(item){
        var params = {
            TableName:this.table, Key:item.getKey()
        };
        return mDB.get(params).promise();
    };

    update (item, field, data){
        var params = {
            TableName:this.table,
            Key: item.getKey(),
            UpdateExpression: "set " + field + " = :data",
            ExpressionAttributeValues:{
                ":data": data
            }
        };

        return mDB.update(params).promise();
    };

    delete(item){
        var params = {
            TableName:this.table, Key:item.getKey()
        };

        return mDB.delete(params).promise();
    }

}

module.exports = Crud;