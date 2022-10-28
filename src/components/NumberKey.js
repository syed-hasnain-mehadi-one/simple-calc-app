import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../constants/Theme';

const NumberKey = ({number}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </TouchableOpacity>
  );
};

export default NumberKey;

const styles = StyleSheet.create({
  container: {
    height: '19%',
    width: '23%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  number: {
    color: COLORS.white,
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
  },
});
