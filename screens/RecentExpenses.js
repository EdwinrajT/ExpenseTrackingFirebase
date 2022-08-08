import ExpenseOutput from '../component/ExpensesDetail/ExpenseOutput';
import {ExpenceCtxt} from '../store/Expense-Context';
import { useContext, useEffect, useState } from 'react';
import {diffBwDateDays} from '../util/date';
import { fetchExpense } from '../util/http';
import LoadingOverlay from '../component/UI/LoadingOverlay';
import ErrorOverlay from '../component/UI/ErrorOverlay';
function RecentExpenses(){
    const [isFetching,setIsFetching]=useState(true);
    const [isError,setError]=useState();
    
    const expCtxt=useContext(ExpenceCtxt);
    useEffect(()=>{
        async function getExpense(){
            setIsFetching(true);
            try{
                
                const expenses=await fetchExpense();
                expCtxt.setExpense(expenses);
            }
            catch(error){
                setError("Not able to fetch data");
            }
            setIsFetching(false);
            
        }
        getExpense();
    },[])

    
    if(isError && !isFetching)
    {
        return <ErrorOverlay message={isError} />
    }

    if(isFetching)
    {
        return <LoadingOverlay/>
    }
    const expContext=expCtxt.expenses.filter((expense)=>{
        const today=new Date();
        const expenseValue=diffBwDateDays(today,7);
        return (expense.date>=expenseValue) && (expense.date<=today);
    })
    return(
       
        <ExpenseOutput expense={expContext} expensePeriod='Last 7 days' textforNoResult='No data found for last 7 days'/>
      
    );
}
export default RecentExpenses;

