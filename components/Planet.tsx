import React, { useState, useEffect } from 'react';
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
      <View style={styles.infoContainer}>
        {planetStatuses.map((planetStatus, index) => (
          <View key={index} style={styles.planetInfo}>
            <Text style={styles.subtitle}>Planet Name: {Planets[planetStatus.index]}</Text>
            <Text style={styles.infoText}>Owner: {planetStatus.owner}</Text>
            <Text style={styles.infoText}>Health: {planetStatus.health}</Text>
            <Text style={styles.infoText}>Regen Per Second: {planetStatus.regenPerSecond}</Text>
            <Text style={styles.infoText}>Players: {planetStatus.players}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // White text color
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white', // White text color
  },
  infoContainer: {
    marginTop: 20,
  },
  planetInfo: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoText: {
    color: 'white', // White text color
  },
});

export default PlanetInfo;