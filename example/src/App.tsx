/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useThemeContext } from '@humayunkabir/react-native-theme';

import Shadows from './components/Shadows';
import Typography from './components/Typography';
import Colors from './components/Colors';

function App() {
  const { getColor, getTypo } = useThemeContext();
  const [tab, setTab] = useState<'typography' | 'shadow' | 'color'>('color');

  return (
    <SafeAreaView style={styles.full}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 16,
          gap: 16,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.85}
          style={[
            styles.button,
            { backgroundColor: tab === 'color' ? getColor() : 'white' },
          ]}
          onPress={() => setTab('color')}
        >
          <Text
            style={[
              getTypo('base', 'SemiBold'),
              { color: tab === 'color' ? 'white' : getColor() },
            ]}
          >
            Colors
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.85}
          style={[
            styles.button,
            { backgroundColor: tab === 'shadow' ? getColor() : 'white' },
          ]}
          onPress={() => setTab('shadow')}
        >
          <Text
            style={[
              getTypo('base', 'SemiBold'),
              { color: tab === 'shadow' ? 'white' : getColor() },
            ]}
          >
            Shadows
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.85}
          style={[
            styles.button,
            { backgroundColor: tab === 'typography' ? getColor() : 'white' },
          ]}
          onPress={() => setTab('typography')}
        >
          <Text
            style={[
              getTypo('base', 'SemiBold'),
              { color: tab === 'typography' ? 'white' : getColor() },
            ]}
          >
            Typography
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.full}>
        <View style={styles.container}>
          {tab === 'color' && <Colors />}
          {tab === 'shadow' && <Shadows />}
          {tab === 'typography' && <Typography />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
});
