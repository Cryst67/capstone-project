import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Terminids } from '../api/data/terminids'; // Import the Bugs data
import colors from '../constants/colors';

const Bugs = () => {
  const [activeBug, setActiveBug] = useState(null);

  const handlePress = (key: any) => {
    setActiveBug(activeBug === key ? null : key);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {Object.entries(Terminids).map(([key, bug]) => (
          <View key={key} style={styles.bugContainer}>
            <TouchableOpacity onPress={() => handlePress(key)}>
              <Text style={[styles.bugName, activeBug === key && styles.activeBugName]}>
                {bug.name}
              </Text>
            </TouchableOpacity>
            {activeBug === key && (
              <>
                <Text style={styles.bugAppearance}>{bug.appearance}</Text>
                <Text style={styles.bugTactics}>{bug.tactics}</Text>
              </>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.backgroundColor,
  },
  bugContainer: {
    borderWidth: 1,
    borderColor: 'gray', 
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10, 
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3, 
  },

  bugName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark.textColor,
  },
  bugAppearance: {
    color: colors.dark.textColor,
  },
  bugTactics: {
    color: colors.dark.textColor,
  },
  activeBugName: {
    color: 'yellow',
  },
});

export default Bugs;