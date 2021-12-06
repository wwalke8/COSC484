const express = require("express");

const recordRoutes = express.Router();

const dbo = require("mongodb").ObjectId;


//get all user records
recordRoutes.route("/record").get(function (req, res){
    let db_connect = dbo.getDb("user");
    db_connect.collection("records")
    .find({})
    .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

//get one user record by id
recordRoutes.route("/record/:id").get(function (req, res){
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
       
    db_connect
        .collection("records")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

//create a new user record
recordRoutes.route("/record/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        user_id: req.body.user_id,
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        user_profilePicture: req.body.user_profilePicture,
        user_isArtist: req.body.user_isArtist
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

//update a user record
recordRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    let newvalues = {
      $set: {
        user_id: req.body.user_id,
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        user_profilePicture: req.body.user_profilePicture,
        user_isArtist: req.body.user_isArtist
      },
    };
    db_connect
      .collection("records")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });


  //delete a user record by id
  recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("records").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.status(obj);
    });
  });

  module.exports = recordRoutes;