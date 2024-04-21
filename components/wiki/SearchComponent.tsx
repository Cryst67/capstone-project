import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import colors from '../../constants/colors';

interface StratagemEntry {
  name: string;
  content: string;
  cost?: number;
  sequence: string[];
}

interface SearchProps {
  data: Record<string, StratagemEntry>;
}

const SearchComponent: React.FC<SearchProps> = ({ data }) => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeName, setActiveName] = useState<string | null>(null);

  const filteredData = searchTerm.trim() ? Object.values(data).filter((entry) =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  const dynamicStyles = StyleSheet.create({
    itemContainer: {
      backgroundColor: colors[theme.mode].itemBackground,
      padding: 20,
      marginVertical: 8,
      borderRadius: 5,
      borderColor: theme.mode === 'dark' ? 'white' : 'black',
      borderWidth: activeName ? 1 : 0,
    },
    itemText: {
      color: colors[theme.mode].textColor,
      fontSize: 16,
    }
  });

  const handlePress = (name: string) => {
    setActiveName(name === activeName ? null : name);
  };

  const renderItem = ({ item }: { item: StratagemEntry }) => (
    <TouchableOpacity style={dynamicStyles.itemContainer} onPress={() => handlePress(item.name)}>
      <Text style={dynamicStyles.itemText}>{item.name}</Text>
      {activeName === item.name && (
        <>
          <Text style={dynamicStyles.itemText}>Cost: {item.cost}</Text>
          <Text style={dynamicStyles.itemText}>Sequence: {item.sequence.join(', ')}</Text>
          <Text style={dynamicStyles.itemText}>{item.content.replace(/<\/?p>/g, '')}</Text>
        </>
      )}
    </TouchableOpacity>
  );

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
          renderItem={renderItem}
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