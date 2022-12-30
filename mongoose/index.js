const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/shanukart")
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

const Cat = mongoose.model('Cat', { name: string });

const kitty = new Cat({ name: 'Zildjian' });
console.log(kitty.name);
kitty.save().then(() => console.log('meow'));

const kitty2 = new Cat({ name: 'shanu' });
console.log(kitty2.name);
kitty2.save().then(() => console.log('show'));