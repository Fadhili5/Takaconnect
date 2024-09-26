import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const leaderboardData = [
  { id: '1', name: 'Alice', earnings: 'ksh 150' },
  { id: '2', name: 'Bob', earnings: 'ksh 120' },
  { id: '3', name: 'Charlie', earnings: 'ksh 100' },
  { id: '4', name: 'David', earnings: 'ksh 90' },
  { id: '5', name: 'Eve', earnings: 'ksh 80' },
  // Add more entries as needed
];

const LeaderboardScreen = () => {
  return (
    <View style={[tw`bg-gray-100`, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      {/* Section: Leaderboard */}
      <View style={styles.card}>
        <Text style={styles.title}>Leaderboard</Text>
        <Text style={styles.subtitle}>See who is doing well and how much they have earned.</Text>

        {/* Leaderboard List */}
        <FlatList
          data={leaderboardData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.leaderItem}>
              <Text style={styles.leaderName}>{item.name}</Text>
              <Text style={styles.leaderEarnings}>{item.earnings}</Text>
            </View>
          )}
          contentContainerStyle={styles.listContainer}
        />

        {/* Footer Section */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>View My Earnings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Share Leaderboard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    width: '100%',
  },
  leaderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  leaderName: {
    fontSize: 18,
    color: '#333',
  },
  leaderEarnings: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  footerButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 10,
    width: '45%',
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LeaderboardScreen;