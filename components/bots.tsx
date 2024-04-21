import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Automatons } from '../api/data/automatons'; // Import the Automatons data
import colors from '../constants/colors';
import { useTheme } from '../contexts/ThemeContext';

const Bots = () => {
  const { theme } = useTheme(); // Use the theme from the context
  const activeColors = colors[theme.mode as keyof typeof colors]; // Access colors based on the current theme

  const [activeRobot, setActiveRobot] = useState(null);

  const handlePress = (key: any) => {
    setActiveRobot(activeRobot === key ? null : key);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: activeColors.backgroundColor }}>
        {Object.entries(Automatons).map(([key, robot]) => (
          <View key={key} style={[styles.robotContainer, { borderColor: activeColors.textColor }]}>
            <TouchableOpacity onPress={() => handlePress(key)}>
              <Text
                style={[
                  styles.robotName,
                  { color: activeColors.textColor },
                  activeRobot === key && styles.activeRobotName,
                ]}
              >
                {robot.name}
              </Text>
            </TouchableOpacity>
            {activeRobot === key && (
              <>
                <Text style={{ color: activeColors.textColor }}>Appearance: {robot.appearance}</Text>
                <Text style={{ color: activeColors.textColor }}>Tactics: {robot.tactics}</Text>
              </>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  robotContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  robotName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeRobotName: {
    color: 'yellow', // Highlight color for the active item
  },
});

export default Bots;