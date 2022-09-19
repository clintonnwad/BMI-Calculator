import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MetricCalc from './MetricCalc';
import StandardCalc from './StandardCalc';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Standard" component={StandardCalc} />
            <Tab.Screen name="Metric/Imperial" component={MetricCalc} />
        </Tab.Navigator>
    )
}

export default BottomTab
const styles = StyleSheet.create({})