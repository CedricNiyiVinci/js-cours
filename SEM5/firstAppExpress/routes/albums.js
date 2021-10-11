var express = require("express");
var router = express.Router();

//tableau d'album
const ALBUMS = [
  { id: 1, title: "Unplugged", artist: "Nirvana", year: 1950 },
  { id: 2, title: "Thriller", artist: "Micheal Jackson", year: 1989 },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  //res.send("respond with a resource");
  return res.json(ALBUMS);
});

/* GET users listing. */
router.post("/", function (req, res, next) {
  //verif si j'ai recu qqchose dans le body de ma requete
  //verifie ce que le client envoie
  // ! req.body equivaut a req.body === undifined
  if (!req.body || !req.body.title || !req.body.artist || !req.body.year)
    return res.sendStatus(400); // res == ce qu'on revoie

  // dans le cas ou l'utilisteur a fournis toutes les donnees
  const newAlbum = {
    id: ALBUMS.length+1, 
    title: req.body.title,
    artist: req.body.artist,
    year: req.body.year,
  };
  //ajouter le nvx livre
  ALBUMS.push(newAlbum);
  //on revoie le nouveau livre au client
  return res.json(newAlbum);
});

module.exports = router;
