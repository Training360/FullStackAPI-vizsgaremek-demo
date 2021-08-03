const express = require('express');
const createError = require('http-errors');

const orderService = require('./order.service');

// Create a new person.
exports.create = (req, res, next) => {
    const { user, products, note } = req.body;
    if (!user) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newOrder = {
        user, products: products || [], note: note || ''
    };

    return orderService.create(newOrder)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return orderService.findAll()
        .then( orders => {
            res.json(orders);
        });
};

exports.findOne = (req, res, next) => {
    return orderService.findOne(req.params.id)
        .then( order => {
            if (!order) {
                return next(new createError.NotFound("Order is not found"));
            }
            return res.json(order);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { user, products, note } = req.body;
    if (!user) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    return orderService.update(req.params.id, req.body)
        .then(person => {
            res.json(person);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return orderService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
