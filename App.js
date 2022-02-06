import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/carItem';

export default function App() {

  return (
    <View style={styles.container}>
      
      <CarItem />

      <StatusBar style="auto" />

      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
