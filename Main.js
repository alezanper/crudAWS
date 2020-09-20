var Item = require("./Item");
var Crud = require("./Crud");

const table = "Users";
const mItem = new Item();
const mCrud = new Crud(table);
const mKey = new Item();

mItem.setEmail("Juana la cubana");
mItem.setId(12345);

mCrud.create(mItem);

mKey.setId(12345);
mCrud.Read(mKey);

mCrud.Update(mKey);

mCrud.Read(mKey);

mCrud.Delete(mKey);
