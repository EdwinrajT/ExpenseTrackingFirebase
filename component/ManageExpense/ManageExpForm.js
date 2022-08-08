import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from './Input';
import Button from '../UI/Button';
function ManageExpForm({onCancel,onSubmit,submitLabel,defaultValue}) {
    const [allInputValues, setInputValues] = useState({
        amount: {value:defaultValue ? defaultValue.amount.toString() :'',isValid:true},
        date: {value:defaultValue ? defaultValue.date.toISOString().slice(0,10) :'',isValid:true},
        description: {value:defaultValue ? defaultValue.description :'',isValid:true}
    })
    function changeInputHandler(initialIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [initialIdentifier]: {value:enteredValue,isValid:true}
            };
        });

    }
    function submitHandler(){
        const expenseData={
            amount:+allInputValues.amount.value,
            date:new Date(allInputValues.date.value),
            description:allInputValues.description.value,
        };
        const amountIsValid=!isNaN(expenseData.amount) && expenseData.amount>0;
        const dateIsValid=expenseData.date.toString()!=='Invalid Date';
        const descriptionIsValid=expenseData.description.trim().length>0;
        if(!amountIsValid || !dateIsValid || !descriptionIsValid)
        {
           // Alert.alert('Invalid Input','Please check your input values');
           setInputValues((curInputValues)=>{
            return{
                amount:{value:curInputValues.amount.value,isValid:amountIsValid},
                date:{value:curInputValues.date.value,isValid:dateIsValid},
                description:{value:curInputValues.description.value,isValid:descriptionIsValid},
            };
                
        });
            return
        };
        onSubmit(expenseData);
    }
    const inputsIsInValid=!allInputValues.amount.isValid || !allInputValues.date.isValid || !allInputValues.description.isValid;
    return (
        
        <View style={styles.rootContainer}>
            <Text style={styles.headStyle}>Your Expense</Text>
            <View style={styles.container}>

                <Input style={styles.inputStyle} invalid={!allInputValues.amount.isValid} label='Amount' inputData={{
                    keyboardType: 'decimal-pad',
                    
                    onChangeText: changeInputHandler.bind(this, 'amount'),
                    value: allInputValues.amount.value,
                }} />
                <Input style={styles.inputStyle} invalid={!allInputValues.date.isValid} label='Date' inputData={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    
                    onChangeText: changeInputHandler.bind(this, 'date'),
                    value: allInputValues.date.value,
                }} />
            </View>
           
            <Input label='Description' invalid={!allInputValues.description.isValid} inputData={{
                multiline: true,
               
                onChangeText: changeInputHandler.bind(this, 'description'),
                value: allInputValues.description.value,
            }} />
             {inputsIsInValid &&(<Text style={styles.errorMsgStyle}>Please Check your Input values</Text>)}
            <View style={styles.buttonContainer}>
                <Button onPress={onCancel}>Cancel</Button>
                <Button mode="flat" onPress={submitHandler}>{submitLabel}</Button>
            </View>
        </View>
    );
}
export default ManageExpForm;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    rootContainer:
    {
        marginTop: 70,
    },
    headStyle:
    {
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputStyle:
    {
        flex: 1,
    },
    buttonContainer:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginVertical:20,
        
    },
    errorMsgStyle:
    {
        color:'red',
        textAlign:'center',
    }

})