import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import colors from '../constants/colors';
import { modules } from '../api/data/modules';

const ModulesInfo = () => {
    const theme = { mode: 'dark' };
    const activeColors = colors[theme.mode as keyof typeof colors];

    const [activeModule, setActiveModule] = useState(null);
    
    const handlePress = (key: any) => {
      setActiveModule(activeModule === key ? null : key);
    };
  
 return (
    <ScrollView>
      
      <View
        style={{
          flex: 1,
          backgroundColor: activeColors.backgroundColor,
        }}
        >
        {Object.entries(modules).map(([key, module]) => (
          <View key={key} style={styles.moduleContainer}>
            <TouchableOpacity onPress={() => handlePress(key)}>
              <Text
                style={[
                  styles.moduleName,
                  activeModule === key && styles.activeModuleName,
                ]}
              >
                {module.name}
              </Text>
            </TouchableOpacity>
            {activeModule === key && (
              <>
                <Text style={styles.moduleDetail}>
                  Common: {module.common}
                </Text>
                <Text style={styles.moduleDetail}>
                  Rare: {module.rare}
                </Text>
                <Text style={styles.moduleDetail}>
                  Super: {module.super}
                </Text>
                <Text style={styles.moduleDetail}>
                  Requisition: {module.requisition}
                </Text>
                <Text style={styles.moduleEffect}>
                  Effect: {module.effect}
                </Text>
              </>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.backgroundColor,
  },
  moduleContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  moduleName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark.textColor,
  },
  moduleDetail: {
    color: colors.dark.textColor,
  },
  moduleEffect: {
    color: colors.dark.textColor,
  },
  activeModuleName: {
    color: 'yellow',
  },
});

export default ModulesInfo;
