import {FlatList, Text} from 'react-native';
import ExpenseItem from './ExpenseItem'
function renderExpenseitem(itemData){
    return <ExpenseItem {...itemData.item}/>
}
function ExpenseList({expense}){
   
    return(
        <FlatList data={expense} renderItem={renderExpenseitem} keyExtractor={(item)=>item.id}/>
    );
}
export default ExpenseList;