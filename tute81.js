// inserting data in mongo db
use shanukart
db.items.insertOne({ name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98 })

db.items.insertMany([{ name: "Samsung 40s", price: 2200, rating: 3.5, qty: 133, sold: 88 }, { name: "Moto 30s", price: 22000, rating: 6.5, qty: 133, sold: 598 }])


// how to quring a data from the mongodb
// this query will return all the objects with rating equal to 3.5
db.items.find({ price: 22000 })
db.items.find({ rating: { $gte: 3.5 } })

// end operator
db.items.find({ rating: { $gte: 3.5 }, price: { $gt: 22000 } })
    // or operator
db.items.find({
    $or: [{ rating: { $gte: 3.5 } }, { price: { $gte: 11400 } }]
})

// if else opersator isme kya hoga ye sirf rating dega gte 3.5 wale argument ko chod dega
db.items.find({ rating: { $gte: 3.5 } }, { rating: 1, qty: 1 })

// delete any term from the database

db.items.deleteOne({ price: 22000 })
    // update any term from the database
    // is database me price mera 400 tha after apply this command the price will be 2
db.items.updateOne({ name: "priynka8489" }, { $set: { price: 2 } })
    // update many terms from he database
    // is database me price or rating qty me updation ho rhi hai it means multiple updation
db.items.insertMany({ name: "priynka8489" }, { $set: { price: 200, rating: 3.3, qty: 144 } })