import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Modal from 'react-native-modal';
import tw from 'tailwind-react-native-classnames';

const QRCodeScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setModalVisible(true);
    // You can perform additional actions with the scanned data here
  };

  if (hasPermission === null) {
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-gray-600`}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-red-500`}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <View style={tw`flex-1 items-center justify-center`}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={tw`h-96 w-full rounded-lg overflow-hidden`}
        />
      </View>
      <TouchableOpacity
        style={tw`mx-8 mb-8 py-4 rounded-lg bg-blue-500`}
        onPress={() => { setScanned(false); setModalVisible(true); }}
      >
        <Text style={tw`text-center text-white font-bold`}>
          {scanned ? 'Scanning...' : 'Scan QR Code'}
        </Text>
      </TouchableOpacity>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHandle} />
          <Image
            source={{ uri: 'https://example.com/glass-bottle.jpg' }} // Change URI to match your image
            style={styles.image}
          />
          <Text style={styles.title}>Glass bottle ♻️</Text>
          <Text style={styles.text}>Materials: Glass</Text>
          <Text style={styles.text}>Price: €4</Text>
          <Text style={styles.text}>Points: 3p</Text>
          <Text style={styles.text}>Saved CO2: 4g</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.recycleButton]}
              onPress={() => { alert('Recycling bottle'); }}
            >
              <Text style={styles.buttonText}>Recycle Bottle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.sellButton]}
              onPress={() => { alert('Selling bottle'); }}
            >
              <Text style={styles.buttonText}>Sell</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <Text style={styles.faqTitle}>FAQs</Text>
            <Text style={styles.faqText}>How do you make recycled glass?</Text>
            <Text style={styles.faqText}>How can you reuse glass?</Text>
            <Text style={styles.faqText}>Can glass be recycled for kids?</Text>
            <Text style={styles.faqText}>How can we reduce glass waste at home?</Text>
          </ScrollView>
          <TouchableOpacity
            style={[styles.button, styles.closeButton]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '50%',
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  recycleButton: {
    backgroundColor: 'green',
  },
  sellButton: {
    backgroundColor: 'blue',
  },
  closeButton: {
    backgroundColor: 'red',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  faqTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  faqText: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default QRCodeScreen;