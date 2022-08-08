import {View,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {GlobalStyle} from '../constants/style';
import Button from '../component/UI/Button';
import { useContext, useLayoutEffect, useState } from 'react';
import {ExpenceCtxt} from '../store/Expense-Context';
import ManageExpForm from '../component/ManageExpense/ManageExpForm';
import { storeDateExpense,updateExpense,deleteExpensess } from '../util/http';
import LoadingOverlay from '../component/UI/LoadingOverlay';
import ErrorOverlay from '../component/UI/ErrorOverlay';
function ManageExpenses({route,navigation}){
    const [isConfirming,setIsConfirming]=useState(false);
    const [error,setError]=useState();
    const expenseContxt=useContext(ExpenceCtxt);
    const expensesId=route.params?.expenseId;
    const expIdIsPresent=!!expensesId;
    const selectedExpense=expenseContxt.expenses.find((expense)=>expense.id===expensesId);

    useLayoutEffect(()=>{ navigation.setOptions({
        title:expIdIsPresent?'Edit Expenses':'Add Expenses',
    });},[navigation,expIdIsPresent]);
    function cancelHandler(){
        navigation.goBack();
    }
    async function confirmExpense(expenseData)
    {
        setIsConfirming(true);
        try{
        if(expIdIsPresent)
        {
            expenseContxt.updateExpenses(expensesId,expenseData);
            await updateExpense(expensesId,expenseData);
        }
        else
        {
            const id=await storeDateExpense(expenseData);
            expenseContxt.addExpenses({...expenseData,id:id});
        }
        navigation.goBack();
    }
    catch(error){
        setError('Could not Save data')
        setIsConfirming(false);
    }
    }
   
    async function deleteExpense(){
        setIsConfirming(true);
       try{
        await deleteExpensess(expensesId);
        expenseContxt.deleteExpenses(expensesId);
        navigation.goBack();
        }
        catch(error){
            setError('Could not delete data')
            setIsConfirming(false);
        }
    }
  
    if(error && !isConfirming)
    {
        return <ErrorOverlay message={error} />
    }
    if(isConfirming)
    {
        return <LoadingOverlay/>
    }
    return(
        <View style={styles.container}>
            <ManageExpForm onSubmit={confirmExpense} defaultValue={selectedExpense} submitLabel={expIdIsPresent ? 'Update' : 'Add'} 
            onCancel={cancelHandler}
            />
          
            {
                expIdIsPresent && (
                    <View style={styles.barStyle}>
                        <Ionicons name="trash" color="#af0362" size={24} onPress={deleteExpense}/>
                    </View>
                )
            }

        </View>
    );
}
export default ManageExpenses;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: GlobalStyle.colors.color2,
     padding:30,
    },
    barStyle:
    {
        borderTopWidth:2,
        borderTopColor:GlobalStyle.colors.color1,
        alignItems:'center',
        padding:15,
    },
   

  });