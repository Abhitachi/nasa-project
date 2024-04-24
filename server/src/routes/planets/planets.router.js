const express = require("express");

const { getAllPlanets } = require("./planets.controller");

const PlanetsRouter = express.Router();

PlanetsRouter.get("/", getAllPlanets);

module.exports = PlanetsRouter;
