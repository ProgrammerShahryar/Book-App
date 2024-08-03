import { View, FlatList } from 'react-native';
import styles from './styles';
import Main from './Main Book/Main';

export default function Side(props) {
  return (
    <View style={styles.default}>
      <FlatList
        data={props.book}
        renderItem={({ item }) => (
          <Main
            book={item}
            onBookRemoval={props.onBookRemoval}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
      />
    </View>
  );
}
