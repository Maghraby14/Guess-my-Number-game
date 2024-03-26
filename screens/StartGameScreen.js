import { useState } from "react";
import { TextInput , View ,StyleSheet, Alert ,Text , Dimensions , useWindowDimensions , KeyboardAvoidingView , ScrollView} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
function StartGameScreen({onSubmitnumber}){
    const [enteredNumber,setEnteredNumber]=useState('');
    const {width,height} = useWindowDimensions();
    function NumberInputHandler(text){
        setEnteredNumber(text);
    }
    function confrimHandler(){
const number = parseInt(enteredNumber);
if (isNaN(number) || number <= 0 || number > 99)
{
    Alert.alert("Invalid Number","Number must be between 0 and 99",[{
        text:"Okay",style:"destructive",onPress:resetHandler
    }]);

    return;
}

onSubmitnumber(number);
    
}
    function resetHandler(){
        setEnteredNumber('');
    }
const marginTop = height < 380 ? 30 : 100 ;
    return (
        <ScrollView style={{flex:1}}>
            <KeyboardAvoidingView style={{flex:1}} behavior="position">
            <View style={styles.rootContainer}>
            <Title >Guess My Number</Title>
            <Card >
                <InstructionText >Enter a number</InstructionText>
                    <View style={styles.fisrtContainer}>
                    <TextInput style={styles.inputelement} 
                    maxLength={2} 
                    keyboardType="number-pad"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={enteredNumber}
                    onChangeText={NumberInputHandler}
                    /> 
                    </View>
                    <View style={styles.seccondContainer}>
                        <View   style={{flex:1}}>
                        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={{flex:1}}>
                        <PrimaryButton onPress={confrimHandler}>Confirm</PrimaryButton>
                        </View>
                    </View>
                    
            </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
// maxLength of digits entered in TextInput
    );
}
const deviceheight = Dimensions.get('window').height;
const styles = StyleSheet.create({ 
    rootContainer:{
        flex: 1,
        marginTop:deviceheight < 380 ? 30 : 100,
        alignItems:"center"
    },
    
    
    inputelement :{
        height:50,
        width:50,
        textAlign: 'center',
        fontSize : 32,
        borderBottomColor: colors.accent500,
        borderBottomWidth:2,
        color:colors.accent500,
        marginVertical: 8 ,
        fontWeight:"bold",
    },
    fisrtContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        
    },
    seccondContainer:{
        flexDirection:'row',
        justifyContent: "space-around",

    }
    
})

// justify content works on main axis align items works on secondary



export default StartGameScreen; 