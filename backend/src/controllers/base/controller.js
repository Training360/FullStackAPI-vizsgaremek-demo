const express = require('express');
const createError = require('http-errors');

const baseService = require('../base/service');

const checkModel = (model, body, next) => {
    const validationErrors = new model(body).validateSync();
    if (validationErrors) {
        next(
            new createError.BadRequest(
                JSON.stringify({
                    message: 'Scmema validation error',
                    error: validationErrors
                })
            )
        );
        return false;
    }
    return true;
};

module.exports = (model, populates = []) => {
    const currentService = baseService(model, populates);
    return {
        // Create a new person.
        create: (req, res, next) => {
            if (!checkModel(model, req.body, next)) {
                return;
            }
        
            return currentService.create(req.body)
                .then(cp => {
                    res.status(201);
                    res.json(cp);
                })
                .catch(err => next(new createError.InternalServerError(err.message)));
        },
        
        findAll: (req, res, next) => {
            return currentService.findAll()
                .then( orders => {
                    res.json(orders);
                });
        },
        
        findOne: (req, res, next) => {
            return currentService.findOne(req.params.id)
                .then( order => {
                    if (!order) {
                        return next(new createError.NotFound("Order is not found"));
                    }
                    return res.json(order);
                });
        },
        
        update: (req, res, next) => {
            const id = req.params.id;
            if (!checkModel(model, req.body, next)) {
                return;
            }
        
            return currentService.update(req.params.id, req.body)
                .then(person => {
                    res.json(person);
                })
                .catch( err => {
                    next(new createError.InternalServerError(err.message));
                });
        },
        
        delete: (req, res, next) => {
            return currentService.delete(req.params.id)
                .then( () => res.json({}) )
                .catch( err => {
                    next(new createError.InternalServerError(err.message));
                } );
        },

    }
}
