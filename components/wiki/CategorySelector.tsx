import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import colors from '../../constants/colors';

type Props = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const categories = ['Stratagems', 'Terminids', 'Automatons', 'Modules'];

const CategorySelector: React.FC<Props> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const { theme } = useTheme();
  const activeColors = colors[theme.mode];

  return (
    <View style={styles.categoriesContainer}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => onSelectCategory(category)}
          style={[
            styles.category,
            selectedCategory === category && {
              borderBottomWidth: 2,
              borderBottomColor: activeColors.primary,
            },
          ]}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#2A2A2A',
  },
  category: {
    padding: 10,
  },
  categoryText: {
    color: 'white',
  },
});

export default CategorySelector;
