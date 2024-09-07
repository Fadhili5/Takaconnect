import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default function ScanScrapScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setIsModalVisible(true);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <View style={styles.container}><Text>Requesting camera permission</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={styles.container}><Text>No access to camera</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={styles.overlay}>
          <View style={styles.scanFrame}>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </View>
          <Text style={styles.instructions}>Scan Scrap or product barcode and get details</Text>
        </View>
      </Camera>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Scan Scrap</Text>
            <View style={styles.itemDetails}>
              <Image
                source={{ uri: 'https://via.placeholder.com/100' }}
                style={styles.itemImage}
              />
              <View>
                <Text style={styles.itemName}>Glass bottle</Text>
                <View style={styles.itemSpecs}>
                  <View style={styles.specItem}>
                    <Text style={styles.specLabel}>Material</Text>
                    <Text>Glass</Text>
                  </View>
                  <View style={styles.specItem}>
                    <Text style={styles.specLabel}>Price</Text>
                    <Text>₹4</Text>
                  </View>
                  <View style={styles.specItem}>
                    <Text style={styles.specLabel}>Points</Text>
                    <Text>3p</Text>
                  </View>
                  <View style={styles.specItem}>
                    <Text style={styles.specLabel}>Saved CO2</Text>
                    <Text>4g</Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.sellButton}>
              <Text style={styles.sellButtonText}>Sell</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recycleButton}>
              <Text style={styles.recycleButtonText}>Recycle Bottle</Text>
            </TouchableOpacity>
            <ScrollView style={styles.faqSection}>
              <Text style={styles.faqItem}>How do you make recycled glass?</Text>
              <Text style={styles.faqItem}>How can you reuse glass?</Text>
              <Text style={styles.faqItem}>How can glass be recycled for cash?</Text>
              <Text style={styles.faqItem}>How can we recycle glass waste at home?</Text>
            </ScrollView>
            <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="location-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanButton}>
          <Ionicons name="scan-outline" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanFrame: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#22c55e',
    borderRadius: 12,
  },
  corner: {
    position: 'absolute',
    width: 20,
    height: 20,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#22c55e',
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: '#22c55e',
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#22c55e',
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#22c55e',
  },
  instructions: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemDetails: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  itemSpecs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  specItem: {
    marginRight: 16,
    marginBottom: 8,
  },
  specLabel: {
    color: '#6b7280',
  },
  sellButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 9999,
    marginBottom: 8,
  },
  sellButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  recycleButton: {
    borderWidth: 1,
    borderColor: '#22c55e',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 9999,
  },
  recycleButtonText: {
    color: '#22c55e',
    textAlign: 'center',
    fontWeight: '600',
  },
  faqSection: {
    marginTop: 16,
  },
  faqItem: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  closeButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 9999,
    marginTop: 16,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  scanButton: {
    backgroundColor: '#22c55e',
    padding: 16,
    borderRadius: 9999,
    marginTop: -32,
  },
});