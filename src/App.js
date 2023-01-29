import Expense from './Components/Expense'
const expense = [
  {
    id: 1,
    title: "car wash",
    amount: 456,
    date: new Date(2023, 5, 30)
  },
  {
    id: 2,
    title: "car fourishnish",
    amount: 5678,
    date: new Date(2023, 5, 30)
  },
  {
    id: 3,
    title: "car care",
    amount: 7654,
    date: new Date(2023, 5, 30)
  },
  {
    id: 4,
    title: "car polish",
    amount: 12345,
    date: new Date(2023, 5, 30)
  }
]

function App(props) {
  return (
    <div className="App">
      <h2 className='center'>Lets get started</h2>
      <Expense item={expense} />
    </div>
  );
}

export default App;
