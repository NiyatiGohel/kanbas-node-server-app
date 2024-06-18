const module = {
    id: 4, name: "Webdev Su1",
    description: "CS5610 Summer 1",
    course:" Webdev "
  };
  export default function WorkingWithObjects2(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
    app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
      });
  };
  
  