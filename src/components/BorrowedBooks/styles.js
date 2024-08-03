import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ssOut: {
    flex: 1,
    backgroundColor: '#f5f5dc',
    paddingTop: 10, 
  },
  bigOne: {
    alignSelf: 'stretch',
    backgroundColor: '#FFA500',
    padding: 10,
    marginBottom: 10, 
    marginHorizontal: 10,  
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 2, 
    elevation: 5, 
  },
  ssPic: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textbox: {
    backgroundColor: '#fff',
    borderWidth: 0,
    padding: 7,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  errorMessage: {
    container: {
      backgroundColor: '#fff',
      padding: 10,
      marginBottom: 10,
      borderColor: '#c00',
      borderWidth: 1,
      borderLeftWidth: 8,
      marginHorizontal: 10, 
      borderRadius: 10, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.8, 
      shadowRadius: 2, 
      elevation: 5, 
    },
    label: {
      color: '#c00',
      fontSize: 14,
      fontWeight: 'bold',
    },
    text: {
      color: '#c00',
      fontSize: 16,
    },
  },
});

export default styles;
