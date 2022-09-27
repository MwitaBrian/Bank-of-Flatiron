import React, { useEffect, useState }  from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [ bankTransactions, setBankTransactions] = useState([]);
  const [ search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then((response) => response.json())
    .then((data) => {
      setBankTransactions(data)
    })
  }, [])

  function addTransaction(newTransaction) {
    const updateTransactions = [...bankTransactions, newTransaction]
    setBankTransactions(updateTransactions)
  }

  function searchTransaction(newSearch) {
    setSearch(newSearch)
  }

  return (
    <div>
      <Search search = {search} onSearchTransaction={searchTransaction}/>
      <AddTransactionForm addTransaction = {addTransaction} />
      <TransactionsList bankTransactions ={bankTransactions} search={search}/>
    </div>
  );
}

export default AccountContainer;
