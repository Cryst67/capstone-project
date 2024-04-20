import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Terminids } from '../api/data/terminids'; // Import the Bugs data
import colors from '../constants/colors';
import { useTheme } from '../contexts/ThemeContext';

const Bugs = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode as keyof typeof colors];

  const [activeBug, setActiveBug] = useState(null);

  const handlePress = (key: any) => {
    setActiveBug(activeBug === key ? null : key);
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: activeColors.backgroundColor,
        }}
      >
        {Object.entries(Terminids).map(([key, bug]) => (
          <View key={key} style={styles.bugContainer}>
            <TouchableOpacity onPress={() => handlePress(key)}>
              <Text
                style={[
                  {
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: activeColors.textColor,
                  },
                  activeBug === key && styles.activeBugName,
                ]}
              >
                {bug.name}
              </Text>
            </TouchableOpacity>
            {activeBug === key && (
              <>
                <Text
                  style={{
                    color: activeColors.textColor,
                  }}
                >
                  {bug.appearance}
                </Text>
                <Text
                  style={{
                    color: activeColors.textColor,
                  }}
                >
                  {bug.tactics}
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
  bugContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  activeBugName: {
    color: 'yellow',
  },
});

export default Bugs;
