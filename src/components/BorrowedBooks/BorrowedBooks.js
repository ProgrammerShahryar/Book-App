import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import Main from '../MainBookLayout/Main Book/Main';

export default function BorrowedBooks(props) {
  const borrowedBooks 
  = props.book.filter(
    book => book.borrowed);
  return (
    <View style={styles.default}>
      <FlatList
        data={borrowedBooks}
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