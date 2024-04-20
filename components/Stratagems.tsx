import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Stratagem } from '../api/data/stratagems'; // Import the Stratagem data
import colors from '../constants/colors';

const Stratagems = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {Object.entries(Stratagem).map(([key, stratagem]) => (
          <View key={key} style={styles.stratagemContainer}>
            <Text style={styles.stratagemName}>{stratagem.name}</Text>
            <Text style={styles.stratagemCost}>Cost: {stratagem.cost}</Text>
            <Text style={styles.stratagemSequence}>Sequence: {stratagem.sequence.join(', ')}</Text>
            <Text style={styles.stratagemContent}>{stratagem.content.replace(/<\/?p>/g, '')}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark.backgroundColor,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stratagemContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  stratagemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.dark.textColor,
  },
  stratagemCost: {
    marginBottom: 5,
    color: colors.dark.textColor,
  },
  stratagemSequence: {
    marginBottom: 5,
    color: colors.dark.textColor,
  },
  stratagemContent: {
    marginBottom: 5,
    color: colors.dark.textColor,
  },
});

export default Stratagems;
