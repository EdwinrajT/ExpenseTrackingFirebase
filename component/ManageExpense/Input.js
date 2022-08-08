import {View,Text, TextInput, StyleSheet} from 'react-native';
import { GlobalStyle } from '../../constants/style';
function Input({label,invalid,inputData,style}){
    let inputTextStyle=[styles.inputStyle];
    if(inputData && inputData.multiline){
        
        inputTextStyle.push(styles.inputMultiLine);
    }
    if(invalid)
    {
        inputTextStyle.push(styles.errorInput);
    }
    return (
        <View style={[styles.container,style]}>
            <Text style={[styles.labelStyle,invalid && styles.errorLabel]}>{label}</Text>
            <TextInput {...inputData}  style={inputTextStyle}/>
        </View>
    );
}
export default Input;
const styles=StyleSheet.create({
    container:{
        margin:8,
        
    },
    labelStyle:
    {
        color:GlobalStyle.colors.color4,
        fontSize:12,
        marginBottom:4,
    },
    inputStyle:
    {
        backgroundColor:GlobalStyle.colors.color4,
        padding:5,
        borderRadius:6,
        
    },
    inputMultiLine:
    {
        minHeight:100,
        textAlignVertical:'top',
    },
    errorLabel:
    {
        color:'red',
    },
    errorInput:{
        backgroundColor:'#f8b3b3',
    }


})