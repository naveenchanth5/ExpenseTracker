
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpenseDate from "./Expensedate"
import Card1 from './Card1'
import react ,{useState} from 'react'





function ExpenseItem(props) {

const [title,setTitle]=useState(props.title); 


  

  const handleClick = () => {
    setTitle("apple");
   
  }


  return (
    <Card1 className="container">
      <Card className='card2' sx={{ }}>
        <Card1 sx={{ border: "2px solid #22211f" }}>
          <ExpenseDate date={props.date} />
        </Card1>
        <CardContent sx={{ marginTop: "50px" }}>          <Typography variant="body2" color="text.secondary">
          {title}
        </Typography></CardContent>
        <CardActions>
          <Button variant="outlined">{props.amount}</Button>
        </CardActions>
        <CardActions>
          <Button variant="outlined" onClick={handleClick}>change amount</Button>
        </CardActions>
      </Card>


    </Card1>
  )
}

export default ExpenseItem