import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sBody: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    borderBottomColor: '#008080',
    borderBottomWidth: 3,
    paddingTop: 20, 
    paddingHorizontal: 20, 
  },
  smallArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sHeader: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  sDeveloper: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 5,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default styles;
