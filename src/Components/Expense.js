import ExpenseItem from "./ExpenseItem"

function Expense({ item }) {

    return (
        <div>
            {item.map(({ title, amount, date },index) =>
                <ExpenseItem key={index} title={title} amount={amount} date={date} />
            )}
        </div>
    )
}

export default Expense