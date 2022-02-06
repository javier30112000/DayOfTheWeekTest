import React from "react";
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import Puntaje from '../puntaje';

const carItem = (props) => {
    return (
        <View style={styles.carContainer}>

        <ImageBackground 
          source={require('../../assets/images/fondo.jpeg')} 
          style={styles.image}
        />

        <View style={styles.container}>
          <Puntaje type="Primario"/>
        </View>
        



      </View>
    );
};

export default carItem;
