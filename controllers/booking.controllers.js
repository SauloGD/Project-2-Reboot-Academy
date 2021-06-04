const { json } = require('express')
const { populate } = require('../models/booking.model')
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


function updateBooking(req,res){
    bookingModel.findByIdAndUpdate(req.params.bookingId, req.body, { new: true })
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
    .populate("userId")
    .populate("establishmentId")
    .then ((booking) => {
       res.json(booking)
    })
    .catch((err) => {
        res.json(err)
    })
}


function getAllBookingByAdmin (req, res){
    bookingModel.find()
    .populate("userId")
    .populate("establishmentId")
    .then ((booking) => {
       res.json(booking)
    })
    .catch((err) => {
        res.json(err)
    })
}

function getOneBookingByUser (req, res){
    bookingModel.findById(req.params.bookingId)
    .populate("establishmentId")
    .then ((booking) => {
        var plant = {
            "_id" : booking._id,
            "establishmentName" : booking.establishmentId.establishmentName,
            "categoryType" : booking.establishmentId.category[0].categoryType,
            "date" : booking.date,
            "covidTest" : booking.covidTest,
            "checkInComplete" : booking.checkInComplete
        }
       if(booking.userId._id.toString() === res.locals.id){
        res.json(plant)
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
    .populate("establishmentId")
    .then ((booking) => {
        var result = []
        booking.forEach((elem) => {
        var plant = {
            "_id" : elem._id,
            "establishmentName" : elem.establishmentId.establishmentName,
            "categoryType" : elem.establishmentId.category[0].categoryType,
            "date" : elem.date,
            "covidTest" : elem.covidTest,
            "checkInComplete" : elem.checkInComplete
        }
        result.push(plant)
    })

    res.json(result)
        })
    
    .catch((err) => {
        res.json(err)
    })
}



//          Query

function filterUserBookingByDateandCheckInComplete (req, res){
    bookingModel.find({userId : res.locals.id , date : {$eq : req.query.date} , checkInComplete : {$eq : req.query.checkInComplete}})
    .populate("establishmentId")
    .then ((booking) => {
        var result = []
        booking.forEach((elem) => {
        var plant = {
            "_id" : elem._id,
            "establishmentName" : elem.establishmentId.establishmentName,
            "categoryType" : elem.establishmentId.category[0].categoryType,
            "date" : elem.date,
            "covidTest" : elem.covidTest,
            "checkInComplete" : elem.checkInComplete
        }
        result.push(plant)
    })
    res.json(result)
        })
    .catch((err) => {
        res.json(err)
    })
}

function filterUserBookingByDate (req, res){
    bookingModel.find({userId : res.locals.id , date : req.query.date})
    .populate("establishmentId")
    .then ((booking) => {
        var result = []
        booking.forEach((elem) => {
        var plant = {
            "_id" : elem._id,
            "establishmentName" : elem.establishmentId.establishmentName,
            "categoryType" : elem.establishmentId.category[0].categoryType,
            "date" : elem.date,
            "covidTest" : elem.covidTest,
            "checkInComplete" : elem.checkInComplete
        }
        result.push(plant)
    })
    res.json(result)
        })
    .catch((err) => {
        res.json(err)
    })
}


module.exports = {createBooking, deleteBooking, getOneBookingByAdmin, getAllBookingByAdmin, getOneBookingByUser, getAllBookingByUser, filterUserBookingByDateandCheckInComplete, filterUserBookingByDate, updateBooking}