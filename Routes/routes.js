import express, { application } from "express";
import cricStar from "../model/cricStar.js";

const router = new express.Router();

router.post("/cricStars", async (req, res) => {
  try {
    const createStar = cricStar(req.body);
    const saveStar = await createStar.save();
    res.status(201).send(saveStar);
    console.log(saveStar);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/cricStars", async (req, res) => {
  try {
    const getStar = await cricStar.find({}).sort({ ranking: 1 })
    res.status(200).send(getStar);
  } catch (error) {
    res.status(500).send("server error" + error);
  }
});

router.get("/cricStars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const singlePlayer = await cricStar.findById(id);
    if (!singlePlayer) {
      res.send("Player not found");
    } else {
      res.status(200).send("player founded" + singlePlayer);
    }
  } catch (error) {
    res.status(500).send("server error " + error);
  }
});

router.patch("/cricStars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatePlayer = await cricStar.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(updatePlayer);
  } catch (error) {
    res.status(500).send("internal server error" + error);
  }
});

router.delete("/cricStars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPlayer = await cricStar.findByIdAndDelete(id);
    res.status(200).send("Player deleted \n " + deletedPlayer);
  } catch (error) {
    res.status(500).send("internal server error" + error);
  }
});

export default router;
