var Item = require("./Item");
var Crud = require("./Crud");

const table = "Users";
const mItem = new Item();
const mCrud = new Crud(table);

mItem.setEmail("juana@gmail.com");
mItem.setId(26345);

/*
mCrud.read(mItem).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.error(err);
});

mCrud.create(mItem).then(()=>{
    console.log("Item was wrote")
}).catch((err)=>{
    console.error(err);
});

mCrud.update(mItem, "email", "other@gmail.com" ).then(()=>{
    console.log("item updated");
}).catch((err)=>{
    console.error(err);
});

mCrud.delete(mItem).then(()=>{
     console.log("item was deleted");
 }).catch((err)=>{
     console.error(err);
 })
*/

