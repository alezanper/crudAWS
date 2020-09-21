var Item = require("./Item");
var Crud = require("./Crud");

const table = "Users";
const mItem = new Item();
const mCrud = new Crud(table);

mItem.setEmail("juana@gmail.com");
mItem.setId(26345);

//mCrud.create(mItem);

//mKey.setId(12345);
//mCrud.Read(mItem);


//mCrud.Update(mItem, "email", "my@gmail.com" );

//mCrud.Read(mItem);

//mCrud.Delete(mKey);



mCrud.write(mItem ).then(()=>{
    console.log("Item was wrote")
}).catch((err)=>{
    console.error(err);
});

console.log("other message");