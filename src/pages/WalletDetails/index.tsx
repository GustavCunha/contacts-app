import React from 'react';
import { View, Text, Image, Modal } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../components/Header';
import ButtonIcon from '../../components/ButtonIcon';
import LineInfo from '../../components/LineInfo';

import styles from '../HomeDetails/style';
import { Alert } from 'react-native';
import QRCode from 'react-native-qrcode-generator';

interface HomeRouteParams{
    bitcoinAddress: any;
    name: string;
}

function WalletDetails(){
    const route = useRoute();
    const {navigate} = useNavigation();

    const params = route.params as HomeRouteParams;

    function handleToBack(){
        navigate('BitcoinList');
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

            <View style={styles.main}>
                <View style={styles.mainBox1}>
                  <View style={styles.image}>
                  <QRCode
                      value={params.bitcoinAddress}
                      size={150}
                      bgColor='black'
                      fgColor='white'
                    />
                  </View>
                    
                    <Text style={styles.textBox1}>{params.name}</Text>
                    <Text style={styles.textBox1}>{params.bitcoinAddress}</Text>
                </View>
            </View>

            <RectButton style={styles.button} onPress={handlePage404}>
                <MaterialIcons name="edit" size={24} color="#FAFAFA"/>
                <Text style={styles.textButton}>Edit Wallet</Text>
            </RectButton>

        </View>
    );
}

export default WalletDetails;