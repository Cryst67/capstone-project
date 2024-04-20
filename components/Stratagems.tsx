import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Stratagem } from '../api/data/stratagems'; // Import the Stratagem data
import colors from '../constants/colors';

const Stratagems = () => {
  const [activeStratagem, setActiveStratagem] = useState(null);

  const handlePress = (key: any) => {
    setActiveStratagem(activeStratagem === key ? null : key);
  };
  return (
    <>
      <View style={{ height: 1, backgroundColor: '#343536', width: '100%' }} />
      <ScrollView>
        <View style={styles.container}>
          {Object.entries(Stratagem).map(([key, stratagem]) => (
            <View key={key} style={styles.stratagemContainer}>
              <TouchableOpacity onPress={() => handlePress(key)}>
                <Text style={[styles.stratagemName, activeStratagem === key && styles.activeStratagemName]}>
                  {stratagem.name}
                </Text>
              </TouchableOpacity>
              {activeStratagem === key && (
                <>
                  <Text style={styles.stratagemCost}>Cost: {stratagem.cost}</Text>
                  <Text style={styles.stratagemSequence}>Sequence: {stratagem.sequence.join(', ')}</Text>
                  <Text style={styles.stratagemContent}>{stratagem.content.replace(/<\/?p>/g, '')}</Text>
                </>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.backgroundColor,
  },
  stratagemContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  stratagemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark.textColor,
  },
  stratagemCost: {
    color: colors.dark.textColor,
  },
  stratagemSequence: {
    color: colors.dark.textColor,
  },
  stratagemContent: {
    color: colors.dark.textColor,
  },
  scrollView: {
    flexDirection: 'row',
  },
  activeStratagemName: {
    color: 'yellow',
  },
});
export default Stratagems;
