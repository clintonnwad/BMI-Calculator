import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';

export default function HomeScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.icon} 
                    source={{
                        uri: 'https://tinyurl.com/mpwkh2pn',
                    }} 
                />
                <Text style={styles.introText}>BMI Calculator</Text>
                <Text>By Clinton Nwadiukor</Text>
                <Text>301291242</Text>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: 300,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    introText:{
        marginTop: 20,
        fontSize: 20,
        fontWeight: '600',
        alignItems: 'center',
        justifyContent: 'center',
    }
});