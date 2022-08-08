import {StyleSheet, Text,View} from 'react-native';
import {GlobalStyle} from '../../constants/style';
function ExpenseSymmary({expense,periodText}){
    const totalAmount=expense.reduce((sum,exp)=>{
    return sum+exp.amount},0);
    return(
        <View style={styles.summaryContainer}>
            <Text style={styles.periodStyle}>{periodText}</Text>
            <Text style={styles.amountStyle}>${totalAmount.toFixed(2)}</Text>
        </View>
    );
}
export default ExpenseSymmary;
const styles=StyleSheet.create({
    summaryContainer:{
        backgroundColor:GlobalStyle.colors.color3,
        padding:10,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    periodStyle:{
        fontSize:10,
        color:GlobalStyle.colors.color2,
    },
    amountStyle:{
        fontSize:13,
        fontWeight:'800',
        color:GlobalStyle.colors.color1,
    }
})
