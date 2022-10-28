import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NumberKey from '../components/NumberKey';
import SymbolKey from '../components/SymbolKey';
import {COLORS} from '../constants/Theme';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>10,000</Text>
      </View>
      <View style={styles.keysContainer}>
        <NumberKey number="C" />
        <NumberKey number="%" />
        <NumberKey number="<" />
        <SymbolKey number="/" />
        <NumberKey number={7} />
        <NumberKey number={8} />
        <NumberKey number={9} />
        <SymbolKey number="/" />
        <NumberKey number={4} />
        <NumberKey number={5} />
        <NumberKey number={6} />
        <SymbolKey number="X" />
        <NumberKey number={1} />
        <NumberKey number={2} />
        <NumberKey number={3} />
        <SymbolKey number="+" />
        <NumberKey number="00" />
        <NumberKey number="0" />
        <NumberKey number="." />
        <SymbolKey number="=" color={COLORS.green} />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayContainer: {
    height: 300,
    width: '100%',
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  keysContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.lightBlack,
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    flexWrap: 'wrap',
  },
  display: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
