import {View ,Text,Image, StyleSheet , Dimensions , useWindowDimensions } from 'react-native';
import Title from '../components/Title';
import colors from '../constants/colors';
import PrimaryButton from '../components/PrimaryButton';
function GameOverScreen({roundsNumber,userNumber,onStartNewGame}){
    const {width,height} = useWindowDimensions();
    let imageSize = 300 ; 
    if (width < 300) {
        imageSize=150;
    }
    if (height < 400){
        imageSize=80;
    }
    const imageStyle = {
        width:imageSize,
        height:imageSize,
        borderRadius:imageSize/2
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={[styles.imageContainer,imageStyle]}>
            <Image style={styles.image} source={require('../assets/imgs/success.png')}/>

            </View>
            <Text style={styles.summaryText}>
                Your Phone needed <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds to guess the number 
                <Text style={styles.highlightedText}>{userNumber}</Text>.</Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}
export default GameOverScreen;
let deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding:24,
        justifyContent: 'center',
        alignItems:'center'
    },
    imageContainer:{
        width:deviceWidth < 380 ? 150 : 300,
        height:deviceWidth < 380 ? 150 : 300,
        borderRadius:deviceWidth < 380 ? 75 : 150,
        borderWidth:3,
        borderColor:colors.primary800,
        overflow:'hidden',
        margin:36
    },
    image:{
        width:'100%',
        height:'100%'
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign: 'center',
        marginVertical:24
    },
    highlightedText:{
        fontFamily:'open-sans-bold',
        color:colors.primary500
    }

});