import React, { useState } from 'react'
import './NewExpense.css'


const NewExpense = () => {
  const [expenseData, setExpenseData] = useState({ title: '', userId: '', body: '' });

  
  const submitHandler = (event) => {
    event.preventDefault();
    dataPost();
  }


  const dataPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/', {
      method: 'POST',
      body: JSON.stringify(expenseData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(function (res) {
      return res.json();
    }).then(data=>{
      console.log(data);
    }).catch(err=>{
      console.log(err,"request failed");
    })
  }



  const inputHandler = (event) => {
    // console.log(event.target.name);
    setExpenseData({ ...expenseData, [event.target.name]: event.target.value });
  }




  return (
    <div className='new-expense'>
      <form class="form" onSubmit={submitHandler} >
        <label for="title">Title:</label>
        <input onChange={inputHandler} type="text" id="title" name="title" value={expenseData.title} />
        <br />
        <label for="amount">userID:</label>
        <input onChange={inputHandler} type="text" id="amount" name="userId" value={expenseData.amount} />
        <br />
        <label for="date">Body:</label>
        <input onChange={inputHandler} type="text" id="date" name="body" value={expenseData.date} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewExpense