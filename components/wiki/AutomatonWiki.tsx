import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import { automatons } from '../../api/data/automatons';
import colors from '../../constants/colors';
import { useTheme } from '../../contexts/ThemeContext';

const AutomatonWiki = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode];

  const [activeRobot, setActiveRobot] = useState(null);

  const handlePress = (key: any) => {
    setActiveRobot(activeRobot === key ? null : key);
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: activeColors.backgroundColor }}>
        {Object.entries(automatons).map(([key, robot]) => (
          <View
            key={key}
            style={[
              styles.robotContainer,
              { borderColor: activeColors.textColor },
            ]}
          >
            <TouchableOpacity onPress={() => handlePress(key)}>
              <Text
                style={[
                  styles.robotName,
                  { color: activeColors.textColor },
                  activeRobot === key && {
                    color: activeColors.primary,
                  },
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
                <Text> </Text>
                <Text style={{ color: activeColors.textColor }}>
                  Tactics: {robot.tactics}
                </Text>
                <Image source={robot.image} style={styles.image} />
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: `center`,
  },
});

export default AutomatonWiki;
