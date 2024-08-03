import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Title() {
  return (
    <View style={styles.sBody}>
      <View style={styles.smallArea}>
        <Image
          source={require('./../../../assets/logo.jpg')}
          style={styles.logo} 
        />
        <Text style={styles.sHeader}>Book</Text>
      </View>
      <Text style={styles.sDeveloper}>by Shahryar Salim</Text>
    </View>
  );
}
