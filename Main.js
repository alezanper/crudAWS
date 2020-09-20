var Item = require("./Item");
var Crud = require("./Crud");

const table = "Users";
const mItem = new Item();
const mCrud = new Crud(table);

mItem.setEmail("Juana la cubana");
mItem.setId(12345);

mCrud.create(table, mItem);



