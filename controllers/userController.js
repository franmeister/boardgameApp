'use strict'

function store(req, res){
    res.status(200).send({
        result: "User created"
    });
}

module.exports = {
    store
}