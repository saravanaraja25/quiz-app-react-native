import React,{ useState,useEffect } from 'react'
import {View, StyleSheet, FlatList, Alert,Text } from 'react-native'
import Question from './components/Question';
import Score from './components/Score'
const App = () => {
  const [questions,setQuestions]=useState([]);
  // let i=0;
  const [index,setIndex]=useState(1);
  const [isStarted,setisStarted]=useState(false);
  const [score,setScore]=useState(0);
  const [answered,setAnswered]=useState(false);
  useEffect(() => {
    quiz();
  }, []);
  const quiz= async ()=>{
    console.log(score);
    const data= await (await fetch("https://opentdb.com/api.php?amount=2&category=12&difficulty=medium&type=boolean")).json();
    setQuestions(data.results);
    
  }
  const validate=(val)=>{
    if(!answered){
      setAnswered(true);
      if(questions[index].correct_answer==val)
      {
        setScore(score+1);
      }
    }
      
  }
  const finalscore=(s)=>{
    alert('Your Score is :'+s);
    setQuestions([]);
    setisStarted(false);
    setIndex(0);
    setScore(0);
  }
  return (
    <View>
      <Text  style={styles.text}>Quiz App</Text>
      {isStarted ?     
        [
          <Score score={score} question={questions} />,
          <Question key={index } validate={validate} question={questions[index]} />,
          index != questions.length-1 ? 
            <Text onPress={()=>{
              if(questions.length > index){
                setIndex(index+1)
                setAnswered(false);
              }
            }
            }>Next</Text>:
            <Text onPress={()=>{
              finalscore(score);
              quiz();
            }
            }>Finish</Text>
          
        ]:
        (<Text onPress={()=>setisStarted(true)}  style={styles.text}>Start Now</Text>)
      }
      
      {/* <Text onPress={()=>setisStarted(true)}  style={styles.text}>Start Now</Text> */}
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'blue',
  },
  text: {
    color: 'blue',
    fontSize: 23,
    textAlign: 'center',
  },
});
export default App
