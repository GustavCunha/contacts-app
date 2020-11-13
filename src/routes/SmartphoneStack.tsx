import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SmartphoneList from '../pages/SmartphoneList';
import SmartphoneDetails from '../pages/SmartphoneDetails';

const { Navigator, Screen } = createStackNavigator();

function SmartphoneStack() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="SmartphoneList" component={SmartphoneList}/>
      <Screen name="SmartphoneDetails" component={SmartphoneDetails}/>
    </Navigator>
  )
}

export default SmartphoneStack;
