import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const BudgetTrackingScreen = () => {
    const navigation = useNavigation();

  const [budgets, setBudgets] = useState([
    {
      id: '1',
      title: 'Education Budget',
      amount: 'Kes 3,000,000,000',
      spent: 'Kes 1,970,000,000',
      percentageUsed: '65.6%',
      officials: [
        { name: 'Julius Ogamba', email: ' psvtt@education.go.ke' },
      ],
    },
    {
      id: '2',
      title: 'Healthcare Budget',
      amount: 'Kes 8,942,939,134',
      spent: 'Kes 6,500,000,000',
      percentageUsed: '72.6%',
      officials: [
        { name: 'Debra Mulongo Barasa', email: 'ps.medical@health.go.ke' },
      ],
    },
    {
      id: '3',
      title: 'Infrastructure Budget',
      amount: 'Kes 3,234,707,930',
      spent: 'Kes 2,200,000,000',
      percentageUsed: '68%',
      officials: [
        { name: 'Johnson Sakaja', email: 'info@nairobi.go.ke' },
        { name: 'Hesbon Nyagaka', email: 'info@nairobi.go.ke' },
      ],
    },
    {
      id: '4',
      title: 'Defense Budget',
      amount: 'Kes 135,000,000,000',
      spent: 'Kes 126,000,000,000',
      percentageUsed: '93.33%',
      officials: [
        { name: 'Soipan Tuya', email: 'cs@defence.go.ke' },
        { name: 'Patrick Mariru', email: 'publicaffairs@mod.go.ke' },
      ],
    },
  ]);

  const [selectedBudget, setSelectedBudget] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTrackPress = (budget) => {
    setSelectedBudget(budget);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.budgetItem}>
      <Text style={styles.budgetTitle}>{item.title}</Text>
      <Text style={styles.budgetAmount}>Total: {item.amount}</Text>
      <Text style={styles.budgetSpent}>Spent: {item.spent}</Text>
      <TouchableOpacity style={styles.trackButton} onPress={() => handleTrackPress(item)}>
        <Text style={styles.trackButtonText}>Track</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={tw`flex-1 p-6 bg-white`}>
      <Text style={[tw`text-2xl text-center mb-4 mt-12`, { fontFamily: 'outfit-bold' }]}>Budget Tracking</Text>
      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={tw`pb-4`}
      />

      {selectedBudget && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
            <View style={tw`bg-white p-6 rounded-lg`}>
              <Text style={[tw`text-xl mb-4`, { fontFamily: 'outfit-bold' }]}>Budget Details</Text>
              <Text style={styles.detailText}>Title: {selectedBudget.title}</Text>
              <Text style={styles.detailText}>Total Amount: {selectedBudget.amount}</Text>
              <Text style={styles.detailText}>Spent Amount: {selectedBudget.spent}</Text>
              <Text style={styles.detailText}>Percentage Used: {selectedBudget.percentageUsed}</Text>
              <Text style={styles.detailText}>Officials Responsible:</Text>
              {selectedBudget.officials.map((official, index) => (
                <Text key={index} style={styles.detailText}>
                  {official.name} - {official.email}
                </Text>
              ))}
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
      style={styles.closeButton}
      onPress={() => {
        setModalVisible(false);
        navigation.navigate('publicPetitions/page'); // Navigate to the petition page
      }}
    >
      <Text style={[tw`text-white text-center`, { fontFamily: 'outfit-bold' }]}>Join 200 others in a petition</Text>
    </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  budgetItem: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  budgetTitle: {
    fontSize: 18,
    fontFamily: 'outfit-bold',
    marginBottom: 5,
  },
  budgetAmount: {
    fontSize: 16,
    fontFamily: 'outfit',
    marginBottom: 5,
  },
  budgetSpent: {
    fontSize: 16,
    fontFamily: 'outfit',
    marginBottom: 10,
  },
  trackButton: {
    backgroundColor: '#6b21a8',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  trackButtonText: {
    color: '#fff',
    fontFamily: 'outfit-bold',
  },
  detailText: {
    fontSize: 16,
    fontFamily: 'outfit',
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: '#6b21a8',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default BudgetTrackingScreen;