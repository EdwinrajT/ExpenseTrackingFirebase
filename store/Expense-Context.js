import { createContext, useReducer } from "react";


export const ExpenceCtxt=createContext({
    expenses:[],
    setExpense:(expenses)=>{},
    addExpenses:({description,amount,date})=>{},
    deleteExpenses:(id)=>{},
    updateExpenses:(id,{description,amount,date})=>{},
});

function expenceReducer(state,action){
    switch (action.type){
        case 'ADD':
            return [action.payload,...state]
        case 'SET':
            const inverted=action.payload.reverse();
            return inverted;
        case 'DELETE':
            return state.filter((expense)=>expense.id!==action.payload)
        case 'UPDATE':
            const expenseValueIndex=state.findIndex((expense)=>expense.id===action.payload.id);
            const expenseValue=state[expenseValueIndex];
            const updatableExpense= {...expenseValue,...action.payload.data};
            const updatedExpense=[...state];
            updatedExpense[expenseValueIndex]=updatableExpense;
            return updatedExpense;
        default:
    }
}

function ExpenseContext({children}){
    const [expenseState,dispatch]=useReducer(expenceReducer,[]);
    function addExpenses(expenceData){
        dispatch({type:'ADD',payload:expenceData});
    }
    function setExpense(expenses){
        dispatch({type:'SET',payload:expenses});
    }
    function deleteExpenses(id){
        dispatch({type:'DELETE',payload:id});
    }
    function updateExpenses(id,expenceData){
        dispatch({type:'UPDATE',payload:{id:id,data:expenceData}});
    }
    const value={
        expenses:expenseState,
        setExpense:setExpense,
        addExpenses:addExpenses,
        deleteExpenses:deleteExpenses,
        updateExpenses:updateExpenses,
    }
    return <ExpenceCtxt.Provider value={value}>{children}</ExpenceCtxt.Provider>
}
export default ExpenseContext;