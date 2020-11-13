import React from 'react';
import { View, Text, Image, Modal, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../components/Header';
import ButtonIcon from '../../components/ButtonIcon';
import LineInfo from '../../components/LineInfo';

import styles from './style';
import { Alert } from 'react-native';

interface HomeRouteParams{
    avatar: string;
    name: string;
    number: string;
    email: string;
    address: string;
}

function HomeDetails(){
    const route = useRoute();
    const {navigate} = useNavigation();

    const params = route.params as HomeRouteParams;

    function handleToBack(){
        navigate('HomeList');
    }

    function handlePage404(){
        Alert.alert("Info", "Ops que pena! Funcionalidade ainda não criada")
    }

    return(
        <View style={styles.container}>
            <Header title="Detalhes" left={(
                <RectButton style={{position: 'absolute', left: 25, top: 50}} onPress={handleToBack}>
                    <FontAwesome5 name="arrow-left" size={28} color="#FFF" />
                </RectButton>
            )}/>

            <ScrollView style={styles.main}>
                <View style={styles.mainBox1}>
                    <Image style={styles.image} source={{uri: params.avatar}}/>
                    <Text style={styles.textBox1}>{params.name}</Text>
                </View>
                <View style={styles.mainBox2}>
                    <ButtonIcon name="call" text="Call"/>
                    <ButtonIcon name="message" text="Message"/>
                    <ButtonIcon name="videocam" text="Video"/>
                    <ButtonIcon name="email" text="Email"/>
                </View>

                <View style={styles.mainBox3}>
                    <LineInfo icon="call" text={params.number} />
                    <LineInfo icon="email" text={params.email} />
                    <LineInfo icon="location-on" text={params.address} />
                </View>
            </ScrollView>

            <RectButton style={styles.button} onPress={handlePage404}>
                <MaterialIcons name="edit" size={24} color="#FAFAFA"/>
                <Text style={styles.textButton}>Edit Contact</Text>
            </RectButton>

        </View>
    );
}

export default HomeDetails;