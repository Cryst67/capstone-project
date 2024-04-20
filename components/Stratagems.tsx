import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Stratagem } from '../api/data/stratagems'; // Import the Stratagem data
import colors from '../constants/colors';
import { useTheme } from '../contexts/ThemeContext';
import CategorySelector from './category';
import Bugs from './bugs';
import Bots from './bots';
import ModulesInfo from './ModulesInfo';

const Stratagems = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode as keyof typeof colors];

  const [selectedCategory, setSelectedCategory] = useState('Guns');
  const [activeStratagem, setActiveStratagem] = useState(null);

  const handleSelectCategory = (category: any) => {
    setSelectedCategory(category);
  };

  const handlePress = (key: any) => {
    setActiveStratagem(activeStratagem === key ? null : key);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Guns':
        return Object.entries(Stratagem).map(([key, stratagem]) => (
          <View key={key} style={styles.stratagemContainer}>
            <TouchableOpacity
              key={key}
              onPress={() => handlePress(key)}
              style={[
                styles.stratagemContainer,
                activeStratagem === key && styles.activeItem,
              ]}
            >
              <Text
                style={[
                  {
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: activeColors.textColor,
                  },
                  activeStratagem === key && styles.activeStratagemName,
                ]}
              >
                {stratagem.name}
              </Text>
            </TouchableOpacity>
            {activeStratagem === key && (
              <>
                <Text
                  style={{
                    color: activeColors.textColor,
                  }}
                >
                  Cost: {stratagem.cost}
                </Text>
                <Text
                  style={{
                    color: activeColors.textColor,
                  }}
                >
                  Sequence: {stratagem.sequence.join(', ')}
                </Text>
                <Text
                  style={{
                    color: activeColors.textColor,
                  }}
                >
                  {stratagem.content.replace(/<\/?p>/g, '')}
                </Text>
              </>
            )}
          </View>
        ));
      case 'Bots':
        return <Bots />;
      case 'Bugs':
        return <Bugs />;
        case 'Modules':
        return <ModulesInfo />;
      default:
        return null;
    }
  };

  return (
    <>
      <CategorySelector
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <ScrollView style={{ backgroundColor: activeColors.backgroundColor }}>
        {renderContent()}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  stratagemContainer: {
    borderWidth: 1,
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
    borderColor: 'gray', // Default border color
  },
  activeItem: {
    borderColor: 'yellow',
  },
  scrollView: {
    flexDirection: 'row',
  },
  activeStratagemName: {
    color: 'yellow',
  },
});
export default Stratagems;
