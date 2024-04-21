import React from 'react';
import { View } from 'react-native';


import SearchComponent from '../wiki/SearchComponent';
import { Stratagem } from '../../api/data/stratagems';

const SearchScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchComponent data={Stratagem} />
    </View>
  );
};

export default SearchScreen;