import { connectToDatabase } from "../../utils/mongodb";
let mongodb = require('mongodb');

export default async (req, res) => {
    const { db } = await connectToDatabase();
    console.log("DB Connected in server");

    if (req.method === "GET") {
        // Process a GET request
        // res.send("SUCCESS!");
        db.collection("todos")
            .find()
            .toArray(function (err, items) {
                console.log(items);
                res.send(items);
            });

        // console.log("I was here!")
    } else if (req.method === "POST") {
        // Handle any other HTTP method
        db.collection("todos").insertOne(
            { complete: false, title: req.body.title },
            function (err, info) {
                res.json(info.ops[0]);
            }
        );
    } else if (req.method === "DELETE") {
        console.log("Request Body here", req.body);
        // db.collection("todos").deleteOne(
        //     { _id: new db.ObjectId(req.body.id) },
        //     function () {
        //         res.send("Successfully deleted!");
        //     }
        // );

        db.collection("todos").deleteOne({ _id: mongodb.ObjectId(req.body.id) }, () => {
            res.send("Successfully deleted!");
        });
    } else if (req.method === "PUT") {
        console.log("PUT Body here", req.body.data);
        // console.log(complete, !complete, complete, req.body.data.id);

        db.collection("todos").findOneAndUpdate(
            { _id: mongodb.ObjectId(req.body.data.id) },
            { $set: { complete: !req.body.data.complete } },
            {upsert: true},
            function () {
                res.send("The task is done!");
            }
        );
    } else {
        res.status(500);
        res.end();
    }
};

/*const mongodb = require("mongodb");

let connectionString =
    "mongodb+srv://harsha123:harsha123@cluster0.q4q5c.mongodb.net/myfullstackapp?retryWrites=true&w=majority";
let db;

export default function handler(req, res) {
    mongodb.connect(
        connectionString,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function (err, client) {
            db = client.db();
            console.log("Conencted to DB");
            // app.listen(5000);

            if (req.method === "GET") {
                // Process a GET request
                // res.send("SUCCESS!");
                db.collection("todos")
                    .find()
                    .toArray(function (err, items) {
                        res.send(items);
                    });
            } else if (req.method === "POST") {
                // Handle any other HTTP method
                db.collection("todos").insertOne(
                    { complete: false, title: req.body.title },
                    function (err, info) {
                        res.json(info.ops[0]);
                    }
                );
            } else if (req.method === "DELETE") {
                console.log("Request Body here", req.body);
                db.collection("todos").deleteOne(
                    { _id: new mongodb.ObjectId(req.body.id) },
                    function () {
                        res.send("Successfully deleted!");
                    }
                );
            } else if (req.method === "PUT") {
                console.log("PUT Body here", req.body);

                db.collection("todos").findOneAndUpdate(
                    { _id: new mongodb.ObjectId(req.body.id) },
                    { $set: { complete: !req.body.complete } },
                    function () {
                        res.send("The task is done!");
                    }
                );
            } else {
                res.status(500);
                res.end();
            }
        }
    );
}
*/
