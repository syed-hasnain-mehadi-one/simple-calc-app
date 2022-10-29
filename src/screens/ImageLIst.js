import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ImageLIst = () => {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);
  const getImg = async () => {
    try {
      setLoader(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const result = await res.json();
      setLoader(false);
      setData(result);
    } catch (error) {
      setLoader(false);
    }
  };
  useEffect(() => {
    getImg();
  }, []);

  const Card = ({item}) => (
    <ScrollView style={styles.card}>
      <Image source={{uri: item?.thumbnailUrl}} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>
        {item?.title}
      </Text>
      <Text style={styles.title}>{`#${item?.id}`}</Text>
    </ScrollView>
  );
  return (
    <View style={styles.container}>
      {loader ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={data}
          renderItem={Card}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default ImageLIst;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: '#f5f7f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '96%',
    backgroundColor: '#ffffff',
    height: 300,
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 20,
    elevation: 1,
    borderColor: '#f5f7f6',
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
});
