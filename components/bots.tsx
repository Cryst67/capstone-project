import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Automatons } from '../api/data/automatons'; // Import the Automatons data
import colors from '../constants/colors';

const Bots = () => {
  const [activeRobot, setActiveRobot] = useState(null);

  const handlePress = (key: any) => {
    setActiveRobot(activeRobot === key ? null : key);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {Object.entries(Automatons).map(([key, robot]) => (
          <View key={key} style={styles.robotContainer}>
            <TouchableOpacity onPress={() => handlePress(key)}>
              <Text style={[styles.robotName, activeRobot === key && styles.activeRobotName]}>
                {robot.name}
              </Text>
            </TouchableOpacity>
            {activeRobot === key && (
              <>
                <Text style={styles.robotAppearance}>Appearance: {robot.appearance}</Text>
                <Text style={styles.robotTactics}>Tactics: {robot.tactics}</Text>
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
  robotContainer: {
    borderWidth: 1,
    borderColor: 'gray', 
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10, 
    backgroundColor: 'black', 
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3, 
  },

  robotName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark.textColor,
  },
  robotAppearance: {
    color: colors.dark.textColor,
  },
  robotTactics: {
    color: colors.dark.textColor,
  },
  activeRobotName: {
    color: 'yellow',
  },

});

export default Bots;