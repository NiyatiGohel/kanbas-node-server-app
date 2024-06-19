import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import WorkingWithObjects2 from "./module.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
export default function Lab5(app) {
    app.get("/lab5/welcome", (req, res) => {
      res.send("Welcome to Lab 5");
    });
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
  
    PathParameters(app);
    QueryParameters(app);
    WorkingWithObjects(app);
    WorkingWithObjects2(app);
    WorkingWithArrays(app);
  };
  