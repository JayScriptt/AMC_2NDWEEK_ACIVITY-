import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from'react-native';

const App = () => {
  return (
    <ScrollView
     style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
        <View
              style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
        >
        <Text>Cornelio A. Gatbonton Jr</Text>
            <Text>IT - 302 </Text> 
            
            </View>
        
    <View>

    <Image
      source={{
        uri:'https://pics.craiyon.com/2023-12-03/S5qIsx4VTbyv_n0-8Ka6xw.webp',
      }}
    style={{windth: 200,
            height: 200,
            }}
    />
    </View>
    <TextInput
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      textAlign: 'center',
    }}
    defaultValue="Type Here"
    />
    </ScrollView>
  );
};
export default App;