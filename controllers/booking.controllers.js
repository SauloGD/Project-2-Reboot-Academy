const { json } = require('express')
const bookingModel = require('../models/booking.model')

function createBooking(req,res){
    bookingModel.create(req.body)
    .then ((booking) => {
        res.json(booking)
    })
    .catch((err) => {
        res.json(err)
    })
}

function deleteBooking(req,res){
    bookingModel.findByIdAndDelete (req.params.bookingId)
    .then ((booking) => {
        res.json("Booking deleted successfully")
    })
    .catch((err) => {
        res.json(err)
    })
}

function getOneBookingByAdmin (req, res){
    bookingModel.findById(req.params.bookingId)
    .then ((booking) => {
       res.json(booking)
    })
    .catch((err) => {
        res.json(err)
    })
}


function getAllBookingByAdmin (req, res){
    bookingModel.find()
    .then ((booking) => {
       res.json(booking)
    })
    .catch((err) => {
        res.json(err)
    })
}

function getOneBookingByUser (req, res){
    bookingModel.findById(req.params.bookingId)
    .then ((booking) => {
       if(booking.userId._id.toString() === res.locals.id){
        res.json(booking)
       }else{
        res.json("La reserva que buscas no esta a tu nombre")
       }
    })
    .catch((err) => {
        res.json(err)
    })
}

function getAllBookingByUser (req, res){
    bookingModel.find({userId : res.locals.id})
    .then ((booking) => {
       res.json(booking)
    })
    .catch((err) => {
        res.json(err)
    })
}




module.exports = {createBooking, deleteBooking, getOneBookingByAdmin, getAllBookingByAdmin, getOneBookingByUser, getAllBookingByUser}