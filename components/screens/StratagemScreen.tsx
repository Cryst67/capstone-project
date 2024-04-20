import { ScrollView } from 'react-native';
import Stratagems from '../Stratagems';
import { Stratagem } from '../../api/data/stratagems';
import colors from '../../constants/colors';

const StratagemScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: colors.dark.backgroundColor }}>
      {Object.values(Stratagem).map((stratagem, index) => (
        <Stratagems key={index} {...stratagem} />
      ))}
    </ScrollView>
  );
};
//this is unreferenced, do we need it? 