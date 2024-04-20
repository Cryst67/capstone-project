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
  const { theme } = useTheme();
  const activeColors = colors[theme.mode as keyof typeof colors];

  const [activeRobot, setActiveRobot] = useState(null);

  const handlePress = (key: any) => {
    setActiveRobot(activeRobot === key ? null : key);
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: activeColors.backgroundColor,
        }}
      >
        {Object.entries(Automatons).map(([key, robot]) => (
          <View key={key} style={styles.robotContainer}>
            <TouchableOpacity onPress={() => handlePress(key)}>
              <Text
                style={[
                  {
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: activeColors.textColor,
                  },
                  activeRobot === key && styles.activeRobotName,
                ]}
              >
                {robot.name}
              </Text>
            </TouchableOpacity>
            {activeRobot === key && (
              <>
                <Text style={{ color: activeColors.textColor }}>
                  Appearance: {robot.appearance}
                </Text>
                <Text style={{ color: activeColors.textColor }}>
                  Tactics: {robot.tactics}
                </Text>
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
    borderColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  activeRobotName: {
    color: 'yellow',
  },
});

export default Bots;
