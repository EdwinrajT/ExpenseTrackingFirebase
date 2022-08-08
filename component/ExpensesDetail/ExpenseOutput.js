import {View,StyleSheet,Text} from 'react-native';
import ExpenseList from './ExpenseList';
import ExpenseSymmary from './ExpenseSymmary';
import {GlobalStyle} from '../../constants/style';

function ExpenseOutput({expense,expensePeriod,textforNoResult}){
    
    let content=<Text style={styles.textformat}>{textforNoResult}</Text>
    if(expense.length>0)
    {
        content=<ExpenseList expense={expense} />
    }
    return(
        <View style={styles.container}>
            <ExpenseSymmary expense={expense} periodText={expensePeriod} />
            {content}
            
        </View>
    );
}
export default ExpenseOutput;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:GlobalStyle.colors.color2,
        padding:20,
        paddingBottom:0,
    },
    textformat:
    {
        padding:10,
        color:'white',
        textAlign:'center',
        marginTop:20,
    }
})