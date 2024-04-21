import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';

import TerminidWiki from '../wiki/TerminidWiki';
import AutomatonWiki from '../wiki/AutomatonWiki';
import ModuleWiki from '../wiki/ModuleWiki';
import StratagemWiki from '../wiki/StratagemWiki';
import CategorySelector from '../wiki/CategorySelector';

import colors from '../../constants/colors';

const WikiScreen = () => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode as keyof typeof colors];

  const [selectedCategory, setSelectedCategory] = useState('Stratagems');

  return (
    <>
      <CategorySelector
        selectedCategory={selectedCategory}
        onSelectCategory={(category: string) => setSelectedCategory(category)}
      />
      <View style={{ flex: 1, backgroundColor: activeColors.backgroundColor }}>
        {selectedCategory === 'Stratagems' && <StratagemWiki />}
        {selectedCategory === 'Terminids' && <TerminidWiki />}
        {selectedCategory === 'Automatons' && <AutomatonWiki />}
        {selectedCategory === 'Modules' && <ModuleWiki />}
      </View>
    </>
  );
};

export default WikiScreen;
