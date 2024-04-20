import { ScrollView } from 'react-native';
import Stratagems from './Stratagems';
import { Stratagem } from '../api/mappings/stratagems';

const StratagemScreen = () => {
  return (
    <ScrollView>
      {Object.values(Stratagem).map((stratagem, index) => (
        <Stratagems key={index} {...stratagem} />
      ))}
    </ScrollView>
  );
};
