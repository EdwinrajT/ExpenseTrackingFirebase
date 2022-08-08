import {Pressable, StyleSheet, Text,View} from 'react-native';
import {GlobalStyle} from '../../constants/style';
function Button({children,onPress,mode}){
    return(
       <View style={styles.container}>
        <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
            <View style={[styles.buttonFormat, mode==='flat' && styles.buttonStyleColor]}>
                <Text style={styles.textStyle}>{children}</Text>
            </View>
        </Pressable>
       </View>
    );
}
export default Button;
const styles=StyleSheet.create({
    buttonFormat:
    {
        padding:8,
        minWidth:100,
        borderRadius:5,
    },
    container:
    {
        justifyContent:'center',
        alignItems:'center',
    },
    buttonStyleColor:
    {
        backgroundColor:GlobalStyle.colors.color1,
    },
    textStyle:
    {
        color:GlobalStyle.colors.color3,
        textAlign:'center'
    },
    pressed:
    {
        opacity:0.25,
        backgroundColor:GlobalStyle.colors.color1,
        borderRadius:5,
    }
})