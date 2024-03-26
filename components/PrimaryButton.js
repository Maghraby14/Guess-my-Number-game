
import {View , Text ,Pressable ,StyleSheet} from 'react-native';
import colors from '../constants/colors';



function PrimaryButton ({children,onPress}) {

    return (
        
            <View style={styles.btnOuter}>
                <Pressable onPress={onPress} 
                android_ripple={{color:colors.primary600}} 
                style={({pressed})=> pressed ? [styles.btnInnerContainer,styles.pressed] : styles.btnInnerContainer}>  
                
                <Text style={styles.butntext}>{children}</Text>
        
            </Pressable>
        </View>

        
    );


}

const styles = StyleSheet.create({
    btnOuter:{
        borderRadius:28,
        margin:4,
        overflow:"hidden",

    },
    btnInnerContainer:{
        backgroundColor:'#72063c',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        
    },
    butntext:{
        color:'white',
        textAlign:'center',
    },
    pressed:{
        opacity:0.75,

    }
});




export default PrimaryButton;