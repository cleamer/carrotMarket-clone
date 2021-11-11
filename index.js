const express = require("./config/express");
const { logger } = require("./config/winston");

const port = 3000;
express().listen(port);
logger.info(`${process.env.NODE_ENV} - Carrot Market API Server Start At Port ${port}`);
