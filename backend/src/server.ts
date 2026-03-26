import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// temporary storage (no database yet)
let orders: any[] = [];

// GET all orders
app.get("/orders", (req, res) => {
    res.json(orders);
});

// POST create new order
app.post("/orders", (req, res) => {
    const newOrder = {
        id: orders.length + 1,
        ...req.body
    };

    orders.push(newOrder);
    res.json(newOrder);
});

// PUT update order
app.put("/orders/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const order = orders.find(o => o.id === id);

    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }

    Object.assign(order, req.body);
    res.json(order);
});

// DELETE order
app.delete("/orders/:id", (req, res) => {
    const id = parseInt(req.params.id);

    orders = orders.filter(o => o.id !== id);

    res.json({ message: "Order deleted" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});