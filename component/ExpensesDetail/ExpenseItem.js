import {View, Text,StyleSheet, Pressable} from 'react-native';
import {GlobalStyle} from '../../constants/style';
import {formatedDate} from '../../util/date';
import { useNavigation } from '@react-navigation/native'
function ExpenseItem({id,description,amount,date}){
    const navigation=useNavigation();

    function expensePressHandler(){
        navigation.navigate('ManageExpenses',{expenseId:id});
    }
    return (
        <Pressable onPress={expensePressHandler} style={({pressed})=>pressed && styles.pressed}>
        <View style={styles.container}>
            <View>
                <Text style={styles.headText}>{description}</Text>
                 <Text style={styles.dateText}>{formatedDate(date)}</Text>
            </View>
            <View>
                <Text style={styles.amountStyle}>{amount}</Text>
            </View>
        </View>
        </Pressable>
    );
}
export default ExpenseItem;
const styles=StyleSheet.create({
    pressed:{
        opacity:0.60,
    },
    container:{
        backgroundColor:GlobalStyle.colors.color1,
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:6,
        borderRadius:8,
    },
    headText:
    {
        fontWeight:'800',
        fontSize:16,
        color:GlobalStyle.colors.color3,
    },
    dateText:{
        fontSize:12,
        color:GlobalStyle.colors.color3,
    },
    amountStyle:{
        color:GlobalStyle.colors.color2,
        padding:10,
        fontWeight:'800',
        backgroundColor:'white',
        borderRadius:5,
        minWidth:70,
        textAlign:'center',
    }
})