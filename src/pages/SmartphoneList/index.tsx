import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface SmartProps {
  item: SmartphoneProps;
}

interface SmartphoneProps {
  id: string;
  modelName: string;
  screenSize: number;
  batteryCapacity: number;
  memory: number;
  storage: number;
}

function SmartphoneList() {
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      const device = await api.get('/products');
      setDevices(device.data);
    }
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Samrtphone List" />
      {error ? (
        <View>
          <Text>Erro carregando as informações</Text>
        </View>
      ) : (
        <FlatList
          data={devices}
          renderItem={({item}) => <SmartDevice item={item} />}
          keyExtractor={({item, index}) => index}
        />
      )}
    </View>
  )
}

export default SmartphoneList;

const SmartDevice: React.FC<SmartProps> = ({ item }) => {
  const nav = useNavigation();
  function goToDetails(){
    nav.navigate(
      'SmartphoneDetails', {
        id: item.id,
        modelName: item.modelName,
        screenSize: item.screenSize,
        batteryCapacity: item.batteryCapacity,
        memory: item.memory,
        storage: item.storage,
      }
    );
  }

  return (
    <TouchableOpacity
      style={styles.containerItem}
      activeOpacity={0.8}
      onPress={goToDetails}
    >
      <View>
        <Text style={styles.text}>Modelo: {item.modelName}</Text>
        <Text style={styles.number}>Memoria: {item.memory}Gb</Text>
        <Text style={styles.number}>Armazenamento: {item.storage}Gb</Text>
      </View>
    </TouchableOpacity>
  )
}
