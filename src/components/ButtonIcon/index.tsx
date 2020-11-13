import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import styles from './style';

interface ButtonIconProps{
    name: string;
    text: string;
    func: Function | undefined;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({name, text, func}) => {



    return(
        <>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={func}>
                <MaterialIcons name={name} size={36} color="#7D3F53"/>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </>
    );
}

export default ButtonIcon;