import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NumberKey from '../components/NumberKey';
import SymbolKey from '../components/SymbolKey';
import {COLORS} from '../constants/Theme';

const Home = () => {
  const [display, setDisplay] = useState('');

  const handleNumPress = text => {
    if (text === 'C') {
      setDisplay('');
    } else if (text === '<') {
      setDisplay(pre => pre.substring(0, pre?.length - 1));
    } else if (text === '=') {
      // let temp = display;
      // temp = temp.replaceAll('X', '*');
      // console.log('temp', temp);
      // const result = parseFloat(temp);
      // console.log('ressult', result);
      setDisplay('');
    } else {
      setDisplay(pre => pre + text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{display}</Text>
      </View>
      <View style={styles.keysContainer}>
        <NumberKey number="C" onPress={handleNumPress} />
        <NumberKey number="%" onPress={handleNumPress} />
        <NumberKey number="<" onPress={handleNumPress} />
        <SymbolKey number="/" onPress={handleNumPress} />
        <NumberKey number={7} onPress={handleNumPress} />
        <NumberKey number={8} onPress={handleNumPress} />
        <NumberKey number={9} onPress={handleNumPress} />
        <SymbolKey number="-" onPress={handleNumPress} />
        <NumberKey number={4} onPress={handleNumPress} />
        <NumberKey number={5} onPress={handleNumPress} />
        <NumberKey number={6} onPress={handleNumPress} />
        <SymbolKey number="X" onPress={handleNumPress} />
        <NumberKey number={1} onPress={handleNumPress} />
        <NumberKey number={2} onPress={handleNumPress} />
        <NumberKey number={3} onPress={handleNumPress} />
        <SymbolKey number="+" onPress={handleNumPress} />
        <NumberKey number="00" onPress={handleNumPress} />
        <NumberKey number="0" onPress={handleNumPress} />
        <NumberKey number="." onPress={handleNumPress} />
        <SymbolKey number="=" color={COLORS.green} onPress={handleNumPress} />
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
