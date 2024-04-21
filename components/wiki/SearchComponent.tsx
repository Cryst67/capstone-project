import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import colors from '../../constants/colors';
import { StratagemEntry } from '../../api/data/stratagems'; // Import the interface

interface SearchProps {
  data: Record<string, StratagemEntry>;
}

const SearchComponent: React.FC<SearchProps> = ({ data }) => {
    const { theme } = useTheme();
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredData = searchTerm.trim() ? Object.values(data).filter((entry) =>
      entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];
  
    // Dynamic theme-dependent styles
    const dynamicStyles = StyleSheet.create({
      itemContainer: {
        backgroundColor: colors[theme.mode].itemBackground,
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
      },
      itemText: {
        color: colors[theme.mode].textColor,
        fontSize: 16,
      }
    });
  
    return (
      <View style={{ flex: 1, backgroundColor: colors[theme.mode].backgroundColor }}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={setSearchTerm}
          value={searchTerm}
        />
        {searchTerm && (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity style={dynamicStyles.itemContainer}>
                <Text style={dynamicStyles.itemText}>{item.name}</Text>
                <Text style={dynamicStyles.itemText}>{item.content.replace(/<\/?p>/g, '').trim()}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    margin: 10,
    borderRadius: 5,
  }
});

export default SearchComponent;