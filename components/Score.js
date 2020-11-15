import React from 'react'
import { View, Text,Button,TouchableOpacity } from 'react-native'

const Score = ({score,question}) => {
    return (
        <View>
            <Text >Score : {score}/{question.length}</Text>
        </View>
    )
}

export default Score
