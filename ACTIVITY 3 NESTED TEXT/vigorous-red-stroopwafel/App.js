import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Cornelio");
  const bodyText = '.';

  const onPressTitle = () => {
    setTitleText(<Text style={styles.titleText1}>Gatbonton</Text> );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
              <Text> I am currently an IT Student at GRC </Text>
              <Text> I am 3rd Year</Text> 
              <Text>Currently focusing in Web Development</Text>
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    color: 'red',
  },
   titleText1: {
    color: 'blue',
  },
});

export default TextInANest;