import { StyleSheet,View , Dimensions} from "react-native";
import colors from "../constants/colors";
function Card({children}){
    return <View style={styles.card}>{children}</View>
}
export default Card;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    card:{
        flexDirection: 'column',
        marginHorizontal:24,
        padding:16,
        marginTop:deviceWidth < 380 ? 18 : 36,
        backgroundColor:colors.primary800,
        borderRadius:8,
        elevation:10, // creates a shadow in android
        shadowColor:'black', // shadowColor ,shadowOffset ,shadowRadius ,shadowOpacity Creates Shadpow in ios
        shadowOffset:{width:0,height:2},
        shadowRadius :6,
        shadowOpacity:0.25,
        marginTop:36,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})