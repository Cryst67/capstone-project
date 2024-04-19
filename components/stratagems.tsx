import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Stratagem } from '../api/mappings/statagems'; // Import the Stratagem data

const StratagemsComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stratagems</Text>

      {Object.entries(Stratagem).map(([key, stratagem]) => (
        <View key={key} style={styles.stratagemContainer}>
          <Text style={styles.stratagemName}>{stratagem.name}</Text>
            <Text style={styles.stratagemCost}>Cost: {stratagem.cost}</Text>
          <Text style={styles.stratagemSequence}>Sequence: {stratagem.sequence.join(', ')}</Text>
          <Text style={styles.stratagemContent}>{stratagem.content.replace(/<\/?p>/g, '')}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  stratagemCost: {
    marginBottom: 5,
  },
  stratagemSequence: {
    marginBottom: 5,
  },
  stratagemContent: {
    marginBottom: 5,
  },
});

export default StratagemsComponent;