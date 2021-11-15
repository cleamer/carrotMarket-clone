"use strict";

const express = require("./config/express");
const { logger } = require("./config/winston");

const PORT = 3000;
express().listen(PORT);
logger.info(`${process.env.NODE_ENV} - Carrot Market API Server Start At Port ${PORT}`);
