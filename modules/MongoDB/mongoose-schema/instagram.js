// Node Module
const mongoose = require('mongoose');


// Creating structure for Collections, which will be used in Database 

// Post Schema
const PostSchema = mongoose.Schema({
    caption  : String,
    image    : String,
    contentType: String,
    date   : { type: Date, default: Date.now },
    author : {
      type: mongoose.Schema.Types.ObjectId,
      ref : 'User'
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref : 'Comment'
    }],
    reacts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref : 'React'
    }],
})

// Post Model
const Post = mongoose.model("Post", PostSchema);


// Comment Schema
const CommentSchema = mongoose.Schema({
    text  : String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref : 'User'
    },
    authorUsername: String,
    date: { type: Date, default: Date.now }
})

// Comment Model
const Comment = mongoose.model("Comment", CommentSchema);


// React Schema
const ReactSchema = mongoose.Schema({
    reaction: Boolean,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref : 'User'
    },
    authorUsername: String,
    date: { type: Date, default: Date.now }
})

// React Model
const React = mongoose.model("React", ReactSchema);




// the below section exports a module
module.exports = {
  Post,
  Comment,
  React,
}