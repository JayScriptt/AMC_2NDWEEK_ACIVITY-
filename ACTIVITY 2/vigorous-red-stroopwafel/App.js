
import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Cornelio");
  const bodyText = 'Hi  .';

  const onPressTitle = () => {
    setTitleText("Gatbonton" +
                 '\n' +
                 '\n' +
                 "I am currently an IT Student at GRC" +
                '\n' +
                  "I am 3rd Year" +
                  '\n' +
                   "Section - 302" +
                   '\n' + "Currently focusing in Web Development.");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView 
      style={styles.container}
      
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  
      }}
      
      >
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n'}
            {'\n'}
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
    fontWeight: 'bold',
  },
});

export default TextInANest;