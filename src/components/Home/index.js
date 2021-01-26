import React from 'react'
import { StyleSheet, View, Image, Button } from 'react-native'

function HomeScreen({ navigation }) {
    return (
        <View style={styles.homes}>
             <Image source={require('../../assets/background.jpg')} style={styles.bg1}/>
             <Image source={require('../../assets/logo.png')} style={styles.bg2}/>
             <Button
                title="Chatt Now"
                onPress={() => navigation.navigate('Chat')}
                style={styles.bgbutton}
            />
        </View>
    )
}


export default HomeScreen

const styles = StyleSheet.create({
    homes: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    bg1 : {
        position:'absolute', 
        height:700, 
        width:420
    },
    bg2 :{
        height:300, 
        width:400
    },
    bgbutton:{
        
    }
})
