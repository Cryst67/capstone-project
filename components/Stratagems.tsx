import { useState } from 'react';
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
import TerminidWiki from './TerminidWiki';
import AutomatonWiki from './AutomatonWiki';
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
          <View
            key={key}
            style={[
              styles.stratagemContainer,
              activeStratagem === key && styles.activeItem,
            ]}
          >
            <TouchableOpacity onPress={() => handlePress(key)}>
              <Text
                style={[
                  styles.stratagemName,
                  { color: activeColors.textColor },
                  activeStratagem === key && styles.activeStratagemName,
                ]}
              >
                {stratagem.name}
              </Text>
              {activeStratagem === key && (
                <>
                  <Text style={{ color: activeColors.textColor }}>
                    Cost: {stratagem.cost}
                  </Text>
                  <Text style={{ color: activeColors.textColor }}>
                    Sequence: {stratagem.sequence.join(', ')}
                  </Text>
                  <Text style={{ color: activeColors.textColor }}>
                    {stratagem.content.replace(/<\/?p>/g, '')}
                  </Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        ));
      case 'AutomatonWiki':
        return <AutomatonWiki />;
      case 'TerminidWiki':
        return <TerminidWiki />;
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
  stratagemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeStratagemName: {
    color: 'yellow',
  },
});

export default Stratagems;
