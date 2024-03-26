import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View ,ImageBackground ,SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [gameIsOver,setGameOver] = useState(true);
  const [guessRounds,setGuessRounds] = useState(0);


  const[fontsLoaded]=useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if(!fontsLoaded){
    return <AppLoading />
  }
  function submithandle(number){
    setUserNumber(number);
    setGameOver(false);
  }
  function gameOverHandler(numberOfRounds){
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  }
  function StartNewGame(){
    setUserNumber(null);
    setGuessRounds(0);

  }
  let screen = <StartGameScreen onSubmitnumber={submithandle} />;


  if (userNumber){
     screen= <GameScreen userNumberr={userNumber} onGameOver={gameOverHandler}/> ;
   }

  if (gameIsOver && userNumber){
    screen=<GameOverScreen onStartNewGame={StartNewGame} userNumber={userNumber} roundsNumber={guessRounds}/>
  }

  return (
  <LinearGradient colors={[colors.primary700,colors.accent500]} style={styles.rootScreen}>
    <ImageBackground 
    source={require('./assets/imgs/background.png')}
    resizeMode='cover'
    style={styles.rootScreen}
    imageStyle={styles.imageStyle }
    >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </ImageBackground>
</LinearGradient>
  
  
  );
  
}

const styles = StyleSheet.create({
  rootScreen:{
    
    flex:1

  },
  imageStyle:{
    opacity:0.15
  }
  
});
