import Typography from '@mui/material/Typography';



function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <Typography classNAme="calender" sx={{ display: "grid" }} gutterBottom variant="h5" component="div">
            <box>{month}
            </box>
            <box>
                {day}  
            </box>
            <box>{year}</box>
        </Typography>
    )
}
export default ExpenseDate