import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import AppStack from './AppStack';
import BitcoinStack from './BitcoinStack';
import SmartphoneStack from './SmartphoneStack';
const Tab = createBottomTabNavigator();

export default function AppTab(){
    return(
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 75,

                },
                tabStyle:{
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius: 10
                },
                iconStyle:{
                    flex:0,
                    width: 20,
                    height: 20
                },
                labelStyle:{
                    fontFamily: 'Ubuntu_700Bold',
                    fontSize:13,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#7D3F53'
            }}>
                <Tab.Screen
                    name="AppStack"
                    component={AppStack}
                    options={{
                        tabBarLabel: 'Gustavo',
                        tabBarIcon: () => {
                            return(
                                <MaterialIcons name="contacts" size={20} color="#7D3F53" />
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="BitcoinStack"
                    component={BitcoinStack}
                    options={{
                        tabBarLabel: 'Felipe',
                        tabBarIcon: () => {
                            return(
                                <MaterialIcons name="monetization-on" size={20} color="#7D3F53" />
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="SmartphoneStack"
                    component={SmartphoneStack}
                    options={{
                        tabBarLabel: 'Leonardo',
                        tabBarIcon: () => {
                            return(
                                <MaterialIcons name="contacts" size={20} color="#7D3F53" />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
