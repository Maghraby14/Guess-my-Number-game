import {Text, View , StyleSheet ,SafeAreaView, Alert, FlatList , useWindowDimensions} from 'react-native';
import { useState , useEffect} from 'react';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from '../components/GuessLogItem';
function generateRandomNummberBetween(min,max,exclude){
    const rndnum = Math.floor(Math.random() * (max-min)) + min ;
    if(rndnum === exclude){
        return generateRandomNummberBetween(min, max, exclude);
    }
    else{
        return rndnum;
    }
}
let minBoundary =1 ; // as they are dynamic better to initiaize before 
let maxBoundary = 100;
function GameScreen({userNumberr , onGameOver}){

    const initialguess = generateRandomNummberBetween(1, 100, userNumberr);
    const [currenGuess,setCurrentGuess] = useState(initialguess);
    const [guessRounds,setGuessRounds] = useState([initialguess]);
    const {width , height} = useWindowDimensions();
    useEffect(()=>{
        if(currenGuess===userNumberr)
        {
            onGameOver(guessRounds.length);
        }
    },[currenGuess,userNumberr,onGameOver]);

    useEffect(()=>{
        minBoundary=1;
        maxBoundary=100;
    },[]);


   function nextGuessHnadler(direction){
    if ((direction == 'lower' && currenGuess < userNumberr) || (direction== 'higher' && currenGuess > userNumberr))
    {
        Alert.alert("Don't Lie ","You Know This is Wrong ...",[{text:'Sorry!' , style:'cancel'}]);
        return;
    } 
    if (direction == 'lower')
    {
        maxBoundary=currenGuess;
        
    }
    else{
        minBoundary=currenGuess+1;
        
    }
    const newRndNumber = generateRandomNummberBetween(minBoundary, maxBoundary, currenGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prev =>[newRndNumber , ... prev])
   }
   const guessRoundslength = guessRounds.length;
   let content = <>
    <NumberContainer>{currenGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructiontext}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                <View style={{flex:1}}>
                <PrimaryButton onPress={nextGuessHnadler.bind(this,'higher')}>
                <Ionicons name='add'  size={24} color='white' />
                </PrimaryButton>
                </View>
                <View style={{flex:1}}>
                <PrimaryButton onPress={nextGuessHnadler.bind(this,'lower')}>
                    <Ionicons name='remove'  size={24} color='white' />
                </PrimaryButton>
                </View>
                
                </View>
            </Card>
   </>;
   if (width > 500 ){
    content = <>
    
    <View style={{
        flexDirection:'row',
        alignItems:'center'
    }}>
    <View style={{flex:1}}>
                <PrimaryButton onPress={nextGuessHnadler.bind(this,'higher')}>
                <Ionicons name='add'  size={24} color='white' />
                </PrimaryButton>
                </View>
                
    <NumberContainer>{currenGuess}</NumberContainer>
    <View style={{flex:1}}>
                <PrimaryButton onPress={nextGuessHnadler.bind(this,'lower')}>
                    <Ionicons name='remove'  size={24} color='white' />
                </PrimaryButton>
                </View>
    </View>
    
    </>
   }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
           {content}
            <View style={{
                flex:1,
                padding:16
            }}>
                {/*{guessRounds.map(num => <Text key={num}>{num}</Text>)}*/}
                <FlatList 
                data={guessRounds}
                renderItem={(itemData)=> <GuessLogItem roundNumber={guessRoundslength - itemData.index} guess={itemData.item}/>}
                keyExtractor={(item)=> item}
                />

                
            </View>
        </View>
    ); 
    
}
export default GameScreen;
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
        alignItems: 'center',
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    instructiontext:{
        marginBottom:12
    }
})