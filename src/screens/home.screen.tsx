import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView} from "react-native";
import Icon from 'react-native-remix-icon'
import Header from '../components/Header/header.component';

type HomeProps = {
    test: string
}

const HomeScreen: React.FC<HomeProps> = () => {
    return (
        <SafeAreaView>
            <Header useSidebar appName='Mofii'/>
            <ScrollView>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen