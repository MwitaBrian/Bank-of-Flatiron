import React, { useState } from "react";


function AddTransactionForm({ addTransaction }) {

  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  })

  function handleChange(event) {
    const key = event.target.id
    setFormData({
      ...formData,
      [key]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "content-Type":"application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => addTransaction(data))
  }
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input id="date" type="date" name="date" value={formData.date} onChange={handleChange} />
          <input id="description" type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          <input id="category" type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
          <input id="amount" type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
