const Book = require("../models/book");
const Author = require('../models/author');
// const BookInstance = require('../models/bookInstance');
const Genre = require('../models/genre');
const async= require('async');
const { functionsIn } = require("lodash");


exports.index = async (req, res) => {
  async.parallel({
    one(callback){
      Book.countDocuments({},callback);
    }, 
    two(callback){
      Author.countDocuments({},callback);
    }, 
    three(callback){
      Book.countDocuments({},callback);
    }, 
    four(callback){
      Genre.countDocuments({}, callback);
    },
    five(callback){
      BookInstance.countDocuments({status:'Available'},callback); 
    }
  },(err,results)=>{
    res.render("index", {
      title: "Local Library Home",
      error: err,
      data: results,
    });
  });
  //res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all books.
exports.book_list = async (req, res,next) => {
  await Book.find({},'title author').populate('author').sort({title:1}).exec(function (err,list_books){
    if(err) return next(err);
    res.render('book_list',{title:'list of books ', book_list:list_books});
  });
};

// Display detail page for a specific book.
exports.book_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
};

// Display book create form on GET.
exports.book_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
exports.book_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// Display book delete form on GET.
exports.book_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
exports.book_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
exports.book_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
exports.book_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};
