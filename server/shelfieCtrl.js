module.exports = {
    getAllInv (req, res) {
        const db = req.app.get('db');
        db.all_inventory().then(inventory => {
            res.status(200).send(inventory)
        })
    },
    addToInv (req, res) {
        const db = req.app.get('db');
        db.add_item([req.body.name, req.body.price, req.body.img]).then(newInv => {
            res.status(200).send(newInv)
        })
    },
    deleteItem (req, res) {
        const db = req.app.get('db');
        db.delete_item([req.params.id]).then(newInv => {
            res.status(200).send(newInv)
        })
    },
    updateItem (req, res) {
        const db = req.app.get('db');
        db.update_item([req.params.id, req.body.name, req.body.img, req.body.price]).then(newInv => {
            res.status(200).send(newInv)
        })
    }
}