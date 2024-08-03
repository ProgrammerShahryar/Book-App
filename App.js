import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Header from './src/components/SSTitle/SSTitle';
import styles from './src/styles/main';
import { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { spShowData, spDataUpdate } from './src/components/ssAddUpdate';
import BorrowedBooks from './src/components/BorrowedBooks/BorrowedBooks';
import Side from './src/components/MainBookLayout/Side';

const Tab = createBottomTabNavigator();

export default function App() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    spShowData(setBook);
  }, []);

  const handleBookRemoval = (id) => {
    const updatedBook = book.filter(
      (book) => book.id !== id
    );
    setBook(updatedBook);
  }

  return (
    <NavigationContainer>
      <View style={styles.default}>
        <StatusBar style="auto" />
        <Header />
        <Tab.Navigator screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Borrowed') {
              iconName = 'checkmark-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = 'ios-settings';
            } else if (route.name === 'Book') {
              iconName = 'ios-book';
            }
            return <Ionicons name={iconName} size={37} color={color} />;
          },
        })}
        >
          <Tab.Screen name='Book'>
            {(props) => (
              <Side {...props} book={book} onBookRemoval={handleBookRemoval} />
            )}
          </Tab.Screen>
          <Tab.Screen name='Borrowed'>
            {(props) => (
              <BorrowedBooks {...props} book={book} onBookRemoval={handleBookRemoval} />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}
