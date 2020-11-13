import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import Header from '../../components/Header';

import styles from '../HomeDetails/style';
import { Alert } from 'react-native';

interface SmartRouteParams {
  id: string;
  modelName: string;
  screenSize: number;
  batteryCapacity: number;
  memory: number;
  storage: number;
}

function SmartphoneDetails() {
  const route = useRoute();
  const nav = useNavigation();

  const params = route.params as SmartRouteParams;

  function goBack() {
    nav.navigate('SmartphoneList');
  }
  function go404Page() {
    Alert.alert('Info', 'Not Found');
  }

  return (
    <View style={styles.container}>
      <Header title="Detalhes" left={(
        <RectButton style={{position: 'absolute', left: 25, top: 50}} onPress={goBack}>
          <FontAwesome5 name="arrow-left" size={28} color="#FFF" />
        </RectButton>
      )}/>

      <View style={styles.main}>
        <View style={styles.mainBox1}>
          <Text style={styles.textBox1}>Modelo: {params.modelName}</Text>
          <Text style={styles.textBox1}>Tamanho tela: {params.screenSize}</Text>
          <Text style={styles.textBox1}>Bateria: {params.batteryCapacity}</Text>
          <Text style={styles.textBox1}>Memoria: {params.memory}</Text>
          <Text style={styles.textBox1}>Armazenamento: {params.storage}</Text>
        </View>
      </View>

      <RectButton style={styles.button} onPress={go404Page}>
        <MaterialIcons name="edit" size={24} color="#FAFAFA"/>
        <Text style={styles.textButton}>Edit Smartphone</Text>
      </RectButton>
    </View>
  )
}

export default SmartphoneDetails;
