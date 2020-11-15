import React from 'react'
import { View, Text } from 'react-native'

const Question = ({question,key,validate}) => {
    console.log(question)
    return (
        <View>
            <Text>{question.question}</Text>
            <Text onPress={()=>validate("True")}>True</Text>
            <Text onPress={()=>validate("False")}>False</Text>
        </View>
    )
}

export default Question
