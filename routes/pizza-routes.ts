import express from 'express';

//creates a new router object
const routes = express.Router();

routes.get('/fruit-of-the-day', (req, res) => {
  const fruit = "Cherry";
  res.render('basics-fruit', { 
    fruit
  });
});

routes.get('/math', (req, res) => {
  const word = req.query.word;
  const num = Number(req.query.num);
  const double = num * 2;
  res.render('basics-math', {
    word, num, double
  });
});

routes.get('/', (req, res) => {
    res.render ('homepage');
});

routes.get('/specialty-pizza', (req, res) => {
    const name = req.query.name;
    const price = parseFloat(req.query.price as string);
    res.render ('specialty-pizza', {
        name, price
    });
});

routes.get('/review', (req, res) => {
    res.render("review");
});

routes.post('/review', (req, res) => {
    const name = req.body.name;
    const comment = req.body.comment;
    const rating = req.body.rating;
    res.render("confirmation", {name, comment, rating});
});


export default routes;