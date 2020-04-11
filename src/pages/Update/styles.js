import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 20,
      backgroundColor: '#FFF',
    },

    title: {
      fontSize: 20,
      marginBottom: 16,
      marginTop: 20,
      color: '#13131a',
      fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#13131a',
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    newContainer:{
      marginTop: 10,    
      flexDirection: 'column',            
    },

    newTitle: {     
      marginTop: 10,
      borderBottomWidth : 1.5,   
      borderRadius: 8,          
      fontSize: 16,
    },

    newText:{
      fontSize: 16,
      lineHeight: 24,
      color: '#000000',
      fontWeight: 'bold',
      marginTop: 10,
    },

    newDescription:{   
      borderBottomWidth : 1.5,   
      borderRadius: 8,    
      marginTop: 10,
      fontSize: 16,
    },

    actions:{
      marginTop: 20,     
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },  

    button: {
      backgroundColor: '#000000',
      borderRadius: 8,
      height: 40,
      width: '38%',      
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonText:{
      color: '#FFF',
      fontSize: 15,
      fontWeight: 'bold',
    },
 });
  