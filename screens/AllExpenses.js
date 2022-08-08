import { useContext } from 'react';
import {Text} from 'react-native';
import ExpenseOutput from '../component/ExpensesDetail/ExpenseOutput';
import {ExpenceCtxt} from '../store/Expense-Context';
function AllExpenses(){
    const expCtxt=useContext(ExpenceCtxt);
    return(
        <ExpenseOutput expense ={expCtxt.expenses} expensePeriod='All' textforNoResult='No data found'/>
    );
}
export default AllExpenses;