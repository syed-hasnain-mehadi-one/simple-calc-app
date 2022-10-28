import React from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/Theme';

const SymbolKey = ({number, color = COLORS.lightGary, onPress}) => {
  return (
    <TouchableOpacity style={{...styles.container, backgroundColor: color}}>
      <Pressable onPress={() => onPress(number)}>
        <Text style={styles.number}>{number}</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

export default SymbolKey;

const styles = StyleSheet.create({
  container: {
    height: '19%',
    width: '23%',
    justifyContent: 'center',
    backgroundColor: COLORS.gray,
    alignItems: 'center',
    borderRadius: 60,
    margin: 2,
  },
  number: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
});
