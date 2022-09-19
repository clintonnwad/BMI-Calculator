import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Alert, ScrollView, Pressable } from 'react-native';

export default function StandardCalc() {
  const [inches, setInches] = useState(0);
  const [feet, setFeet] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('');

  let calculateBMI = (e) => {
    if( inches === 0 || weight === 0 || !inches || !weight )
    {
      Alert.alert("Incomplete input supplied", "You need to enter a value for both Height AND Weight", [
        { text: "Ok" }
      ]);
    }else{
      // Proceed with our calsulation.
      // Formula for converting ft and inches to meters is
      // d(m) = d(ft) × 0.3048 + d(in) × 0.0254
      let heightMeters = feet * 0.3048 + inches * 0.0254;
      let heightSquare = Math.pow(heightMeters, 2);

      // Convert the weight from pounds(lbs) to 
      // Kilograms(kg)
      let weightKg = weight * 0.45359237;

      let bmiCalc = weightKg / heightSquare;

      setBmi( bmiCalc.toFixed(1) );

      // Now, for our logic
      if( bmiCalc < 18.5 ){
        setMessage("You are Underweight");
      }else if( bmiCalc >= 18.5 && bmiCalc <= 24.9 ){
        setMessage("You've got normal weight");
      }else if( bmiCalc >= 25 && bmiCalc <= 29.9 ){
        setMessage("You are overweight");
      }else if( bmiCalc >= 30 ){
        setMessage("You are obese");
      }
    }
  } 
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.topSpace}>
        <View>
          <Text style={styles.headerText}>Standard Measurement System</Text>
          <Text style={styles.caption}>Measure of body fat based on height and weight</Text>

          <Text style={styles.label}>Your Height (Feet):</Text>
          <TextInput style={styles.textInput} onChangeText={ (feet) => setFeet( feet ) } keyboardType='numeric' maxLength={5}></TextInput>

          <Text style={styles.label}>Your Height (Inches):</Text>
          <TextInput style={styles.textInput} onChangeText={ (inches) => setInches( inches ) } keyboardType='numeric' maxLength={5}></TextInput>
          
          <Text style={styles.label}>Your Weight (Pounds):</Text>
          <TextInput style={styles.textInput} onChangeText={ (weight) => setWeight( weight ) } keyboardType='numeric' maxLength={5}></TextInput>


          <Pressable style={styles.buttonCalc} onPress={() => calculateBMI()}>
            <Text style={styles.btnText}>Calculate BMI</Text>
          </Pressable>

          <Text style={styles.resultText}>Your BMI is:</Text>
          {/* <Text style={styles.bmiResult}>{bmi}</Text> */}

          <Text style={styles.bmiResult}>{bmi}</Text>
          <Text>{message}</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    fontSize: 20,
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption:{
    marginBottom: 15,
  },
  bmiResult:{
    fontSize: 40,
  },
  label:{
    marginBottom: 5,
    marginTop: 10,
  },
  resultText:{
    marginTop: 50,
  },
  textInput:{
    borderColor: '#d7d4d4',
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 3,
    height: 50,
    paddingLeft: 20
  },
  topSpace:{
    paddingTop: '20%'
  },
  buttonCalc: {
    marginTop:20,
    paddingVertical: 20,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#FF4F5A',
    elevation: 3,
  },
  btnText: {
    fontSize: 24,
    lineHeight: 25,
    fontWeight: '300',
    letterSpacing: 0.25,
    color: 'white',
  },
});
