import {StyleSheet, View, Text, Button} from 'react-native'
import { GlobalStyle } from '../../constants/style';
function ErrorOverlay({message}){
    return(
    <View style={styles.container}>
       <Text style={[styles.textSty,styles.stylesText]}>An error occured</Text>
       <Text style={styles.stylesText}>{message}</Text>
       
    </View>);
}
export default ErrorOverlay;
const styles=StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:GlobalStyle.colors.color1,
    },
    textSty:
    {
        fontSize:20,
        fontWeight:'700',
    },
    stylesText:
    {
        textAlign:'center',
    }

})