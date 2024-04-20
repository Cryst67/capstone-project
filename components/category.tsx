import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
  };
  
const categories = ['Guns', 'Bots', 'Bugs', 'Modules'];

const CategorySelector: React.FC<Props> = ({ selectedCategory, onSelectCategory }) => {
    return (
    <View style={styles.categoriesContainer}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => onSelectCategory(category)}
          style={[
            styles.category,
            selectedCategory === category && styles.categorySelected,
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
  categorySelected: {
    borderBottomWidth: 2,
    borderBottomColor: 'yellow', 
  },
  categoryText: {
    color: 'white', 
  },
});

export default CategorySelector;
