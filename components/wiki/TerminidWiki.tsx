import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
23;
import { terminids } from '../../api/data/terminids'; // Import the Bugs data
import colors from '../../constants/colors';
import { useTheme } from '../../contexts/ThemeContext';

const TerminidWiki = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode];

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
        {Object.entries(terminids).map(([key, bug]) => (
          <View key={key} style={styles.bugContainer}>
            <TouchableOpacity onPress={() => handlePress(key)}>
              <Text
                style={[
                  {
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: activeColors.textColor,
                  },
                  activeBug === key && {
                    color: activeColors.primary,
                  },
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
                 Appearance: {bug.appearance}
                </Text>
                <Text> </Text>
                <Text
                  style={{
                    color: activeColors.textColor,
                  }}
                >
                 Tactics: {bug.tactics}
                </Text>
                <Image source={bug.image} style={styles.image} />
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: `center`,
  },
});

export default TerminidWiki;
