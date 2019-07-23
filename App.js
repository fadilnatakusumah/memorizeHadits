/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ padding: 12 }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <Text style={{ fontSize: 24, marginVertical: 5, fontFamily: 'Josefin Sans' }}>Memorize Hadits</Text>
          {/* ========= */}
          <View style={{
            height: 50, backgroundColor: 'red', marginVertical: 5, borderRadius: 10,
          }}>
            <Text style={{ fontSize: 18, color: 'white', padding: 10, fontFamily: 'JosefinSans' }}>Search hadits..</Text>
          </View>
          {/* ========= */}
          <Text style={{ fontSize: 18, color: 'purple', marginVertical: 5 }}>All the hadits</Text>
          <View style={{
            height: 200, marginVertical: 5, flexDirection: 'row'
          }}>
            <ScrollView horizontal>
              <View style={{
                backgroundColor: 'purple', borderRadius: 15, height: '100%', width: 150,
                marginRight: 10, justifyContent: 'center', alignItems: 'center',
              }}>
                <Text style={{ fontSize: 18, color: 'white', marginVertical: 5 }}>Hadits 1</Text>
              </View>
              <View style={{
                backgroundColor: 'purple', borderRadius: 15, height: '100%', width: 150,
                marginRight: 10, justifyContent: 'center', alignItems: 'center',
              }}>
                <Text style={{ fontSize: 18, color: 'white', marginVertical: 5 }}>Hadits 1</Text>
              </View>
              <View style={{
                backgroundColor: 'purple', borderRadius: 15, height: '100%', width: 150,
                marginRight: 10, justifyContent: 'center', alignItems: 'center',
              }}>
                <Text style={{ fontSize: 18, color: 'white', marginVertical: 5 }}>Hadits 1</Text>
              </View>
            </ScrollView>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: "space-between", marginVertical: 20, padding: 5 }}>
            <Text style={{ fontSize: 18, color: 'purple' }}>Bookmarked Hadits</Text>
            <Text style={{ fontSize: 14, color: 'purple' }}>View All</Text>
          </View>

          <View style={{ marginVertical: 10 }}>
            <View style={{ marginVertical: 5, alignItems: 'center', padding: 8, flexDirection: 'row', height: 80, width: '100%', backgroundColor: 'red', borderRadius: 15 }}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 5 }}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <Text style={{ fontSize: 16, marginHorizontal: 5, alignSelf: 'flex-start' }}>Hadits ke 15</Text>
            </View>
            <View style={{ marginVertical: 5, alignItems: 'center', padding: 8, flexDirection: 'row', height: 80, width: '100%', backgroundColor: 'red', borderRadius: 15 }}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 5 }}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <Text style={{ fontSize: 16, marginHorizontal: 5, alignSelf: 'flex-start' }}>Hadits ke 15</Text>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({

});

export default App;
