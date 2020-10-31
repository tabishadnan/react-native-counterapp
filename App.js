import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text } from 'react-native';

export default function App() {

  const Separator = () => (
    <View style={styles.separator} />
  );

  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Counter : {counter}
      </Text>
      </View>
      <Separator />
      <View>
        <View style={styles.fixToText}>
          <Button
            title="INCREMENT"
            onPress={() => setCounter(counter + 1)}
          />
          <Button
            title="DECREMENT"
            onPress={() => setCounter(counter - 1)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
