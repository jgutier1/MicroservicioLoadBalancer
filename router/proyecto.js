const { Router } = require("express");
const Proyecto = require("../models/Proyecto");

//index
const Cliente = require("../models/Cliente");
const Etapas = require("../models/Etapas");
const TipoProyecto = require("../models/TipoProyecto");
const Universidad = require("../models/Universidad");



//const { validarProyecto } = require("../helpers/validar-proyecto");

const router = Router();

router.get("/", async function (req, res) {
  try {
    console.log("Ambiente: ", process.env.CONTAINER_HOST)
    const proyecto = await Proyecto.find().populate([
      {
        path: "cliente",
        select: "nombre email",
      },

      {
        path: "tipoProyecto",
        select: "nombre",
      },

      {
        path: "universidad",
        select: "nombre direccion telefono",
      },

      {
        path: "etapaProyecto",
        select: "nombre",
      },
    ]);

    res.send(proyecto);
  } catch (error) {
    console.log(error);
    res.send("Ocurio un error");
  }
});





module.exports = router;
