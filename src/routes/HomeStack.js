import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../screen/Home';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home',
          headerRight: () => {
            return (
              <Pressable style={styles.searchBtn}>
                <Icon name="search1" size={20} />
              </Pressable>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  searchBtn: {
    marginRight: 15,
  },
});

export default HomeStack;
