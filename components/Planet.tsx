import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Planets from '../api/mappings/planets';

interface PlanetStatus {
  index: keyof typeof Planets;
  owner: number;
  health: number;
  regenPerSecond: number;
  players: number;
}

const PlanetInfo = () => {
  const [warStatus, setWarStatus] = useState<any>({});
  const [planetStatuses, setPlanetStatuses] = useState<PlanetStatus[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiFetch = await fetch('https://api.live.prod.thehelldiversgame.com/api/WarSeason/801/Status');
        const apiData = await apiFetch.json();
        setWarStatus(apiData);

        if (apiData.planetStatus && apiData.planetStatus.length > 0) {
          setPlanetStatuses(apiData.planetStatus);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>War ID: {warStatus.warId}</Text>
      {planetStatuses.map((planetStatus, index) => (
        <View key={index} style={styles.infoContainer}>
          <Text style={styles.subtitle}>Planet Name: {Planets[planetStatus.index]}</Text>
          <Text>Owner: {planetStatus.owner}</Text>
          <Text>Health: {planetStatus.health}</Text>
          <Text>Regen Per Second: {planetStatus.regenPerSecond}</Text>
          <Text>Players: {planetStatus.players}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
