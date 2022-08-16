import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function TodoList(props) {
    console.log(props)
    return (
      <View style={styles.container}>
          
        <Text style={{ fontSize: 20, color: 'blue' }}>Todo List Page!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });