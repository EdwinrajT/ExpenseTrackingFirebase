import {Ionicons} from '@expo/vector-icons';
import { Pressable,View,StyleSheet } from 'react-native';
function AddButton({name,size,color,onPress}){
    return(
        <Pressable style={({pressed})=>pressed && styles.pressed} onPress={onPress}>
            <View style={styles.container}>
                <Ionicons name={name} size={size} color={color}/>
            </View>
        </Pressable>
    );
}
export default AddButton;
const styles = StyleSheet.create({
    container: {
     padding:8,
     marginHorizontal:16,
     marginVertical:2,
    },
    pressed:{
        opacity:0.25,
    }
  });