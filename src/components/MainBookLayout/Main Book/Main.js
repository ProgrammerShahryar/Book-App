import React, { useState } from 'react';
import { View, Switch, Pressable, Modal, Alert, Text } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDatabase, ref, update, remove } from 'firebase/database';

export default function Main(props) {
  const [showModal, setShowModal] = useState(false);
  const [borrowed, setBorrowed] = useState(props.book.borrowed);

  const handleRemovePress = () => {
    Alert.alert(
      'Remove Book',
      'Are you sure you want to remove this book?',
      [
        {
          text: 'I Have To',
          onPress: () => {
            props.onBookRemoval(props.book.id);
            removeSpData();
            setShowModal(false);
          }
        },
        {
          text: 'Nahh'
        }
      ]
    );
  }

  const handleSSBorrowChange = (value) => {
    setBorrowed(value);
    updateSSBorrowStatus(value);
  }

  const updateSSBorrowStatus = (value) => {
    const spDb = getDatabase();
    const bookRef = ref(spDb, '/shahryar/' + props.book.id);
    update(bookRef, { borrowed: value })
      .then(() => {
        console.log('Borrowed status updated!');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  function removeSpData() {
    const spDb = getDatabase();
    remove(ref(spDb, '/shahryar/' + props.book.id))
      .then(() => {
        console.log('Data successfully deleted!');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  const handleModalToggle = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <Pressable onPress={handleModalToggle}>
        <View style={styles.PopupBody}>
          <Text>Book Name: {props.book.name}</Text>
          <Text>Book Author: {props.book.author}</Text>
        </View>
      </Pressable>

      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.sPopup}>
          <Text style={styles.sHeading}>Book</Text>
          <Text style={styles.sBody}>Name: {props.book.name}</Text>
          <Text style={styles.sBody}>Author: {props.book.author}</Text>
          <Text style={styles.sBody}>CoverPage: {props.book.coverPage}</Text>
          <Text style={styles.sBody}>Rating: {props.book.rating}</Text>
          <Text style={styles.sBody}>Summary: {props.book.summary}</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.sBody}>Borrowed:</Text>
            <Switch
              value={borrowed}
              onValueChange={handleSSBorrowChange}
            />
          </View>
          <View style={styles.buttonArea}>
            <Pressable onPress={handleModalToggle} style={styles.sClicker}>
              <Text style={styles.sButtonBody}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}
