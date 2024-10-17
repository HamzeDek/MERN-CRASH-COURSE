import mongoose from "mongoose";

const productschema = New mongoose.schema({

    name:{
        type:String,
        required:true
    },
    
    price:{
        type:number,
        required:true
    },
    image:{
        type:string,
        required:true
    }
},
{timestamps:true});

const products = mongoose.model('Product' , productschema);

const express = require('express');

