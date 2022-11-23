const express = require("express");

const listRouter = express.Router();

const lists = [];

let id = 0;

// list route
listRouter
  .route("")
  .get((req, res) => {
    return res.status(200).json({ items: lists });
  })
  .post((req, res) => {
    lists.push({ ...req.body, id: ++id });
    return res.status(200).json({ message: "Item added to list" });
  });

// list/:id route
listRouter
  .route("/:id")
  .get((req, res) => {
    const list = lists.find((item) => {
      return item.id === parseInt(req.params.id);
    });
    return res.status(200).json({ list });
  })
  .patch((req, res) => {
    const list = lists.find((item) => {
      return item.id === parseInt(req.params.id);
    });
    // updated
    list.name = req.body.name;
    list.price = req.body.price;
    list.weight = req.body.weight;

    return res.status(200).json({ message: "list updated!" });
  })
  .delete((req, res) => {
    const itemIndex = lists.findIndex((item) => {
      return (item.id = parseInt(req.params.id)); // get the index of the item
    });

    lists.splice(itemIndex, 1); // delete the item from the list

    return res
      .status(200)
      .json({ message: "Item deleted from the shopping list" });
  });

// // GET all the items on the shopping list
// listRouter.get("/items", (req, res) => {
//   return res.status(200).json({ items: lists });
// });

// // GET a single item from the list
// listRouter.get("/items/:id", (req, res) => {
//   const list = lists.find((item) => {
//     return item.id === parseInt(req.params.id);
//   });
//   return res.status(200).json({ list });
// });

// // POST an item to the shopping list
// listRouter.post("/items", (req, res) => {
//   lists.push({ ...req.body, id: ++id });
//   return res.status(200).json({ message: "Item added to list" });
// });

// // PATCH an item on the list
// listRouter.patch("/items/:id", (req, res) => {
//   const list = lists.find((item) => {
//     return item.id === parseInt(req.params.id);
//   });
//   // updated
//   list.name = req.body.name;
//   list.price = req.body.price;
//   list.weight = req.body.weight;

//   return res.status(200).json({ message: "list updated!" });
// });

// // DELETE an item from the shopping list
// listRouter.delete("/items/:id", (req, res) => {
//   const itemIndex = lists.findIndex((item) => {
//     return (item.id = parseInt(req.params.id)); // get the index of the item
//   });

//   lists.splice(itemIndex, 1); // delete the item from the list

//   return res
//     .status(200)
//     .json({ message: "Item deleted from the shopping list" });
// });

module.exports = listRouter;
