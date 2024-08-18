import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { Colors } from '@/constants/Colors';

const LegalAid = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', { name, email, message });
    Toast.show({
      type: 'success',
      text1: 'Form Submitted',
      text2: 'Your request has been sent successfully.',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Legal Aid</Text>
      <Text style={styles.description}>
        Get the legal assistance you need. Explore our resources and reach out for help.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Legal Advice</Text>
        <Text style={styles.adviceText}>
          - Know your rights when dealing with law enforcement.
        </Text>
        <Text style={styles.adviceText}>
          - Understand the basics of contract law.
        </Text>
        <Text style={styles.adviceText}>
          - Learn about tenant rights and landlord obligations.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Legal Aid Organizations</Text>
        <Text style={styles.organizationText}>1. Legal Aid Society</Text>
        <Text style={styles.organizationText}>2. Pro Bono Legal Services</Text>
        <Text style={styles.organizationText}>3. Community Legal Clinics</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Request Legal Assistance</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: Colors.GRAY,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    marginBottom: 10,
  },
  adviceText: {
    fontSize: 16,
    color: Colors.DARK_GRAY,
    marginBottom: 5,
  },
  organizationText: {
    fontSize: 16,
    color: Colors.DARK_GRAY,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 16,
  },
});

export default LegalAid;