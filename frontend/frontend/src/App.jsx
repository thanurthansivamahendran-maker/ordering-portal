import { useEffect, useState } from "react";

function App() {
  const [orders, setOrders] = useState([]);
  const [customer, setCustomer] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchOrders = () => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSubmit = () => {
    if (editingId === null) {
      // ADD
      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer, item, quantity }),
      }).then(fetchOrders);
    } else {
      // UPDATE
      fetch(`http://localhost:5000/orders/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer, item, quantity }),
      }).then(() => {
        fetchOrders();
        setEditingId(null);
      });
    }

    setCustomer("");
    setItem("");
    setQuantity("");
  };

  const deleteOrder = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    }).then(fetchOrders);
  };

  const editOrder = (order) => {
    setCustomer(order.customer);
    setItem(order.item);
    setQuantity(order.quantity);
    setEditingId(order.id);
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR / LOGO */}
      <div style={styles.navbar}>
        <h1 style={styles.logo}>🍔 Ordering Portal</h1>
      </div>

      <div style={styles.container}>
        {/* FORM */}
        <div style={styles.form}>
          <input
            style={styles.input}
            placeholder="Customer"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
          <input
            style={styles.input}
            placeholder="Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <input
            style={styles.input}
            placeholder="Qty"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button style={styles.addButton} onClick={handleSubmit}>
            {editingId ? "Update" : "Add"}
          </button>
        </div>

        {/* ORDERS */}
        <div style={styles.list}>
          {orders.length === 0 ? (
            <p>No orders yet</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} style={styles.card}>
                <div>
                  <strong>{order.customer}</strong>
                  <p>{order.item} | Qty: {order.quantity}</p>
                </div>

                <div>
                  <button
                    style={styles.editButton}
                    onClick={() => editOrder(order)}
                  >
                    Edit
                  </button>
                  <button
                    style={styles.deleteButton}
                    onClick={() => deleteOrder(order.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "#333",
    color: "white",
  },
  logo: {
    margin: 0,
    fontSize: "32px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    fontFamily: "Arial",
    textAlign: "center",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    justifyContent: "center",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "8px 12px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
  editButton: {
    marginRight: "5px",
    backgroundColor: "orange",
    border: "none",
    padding: "5px 10px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "red",
    border: "none",
    padding: "5px 10px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;