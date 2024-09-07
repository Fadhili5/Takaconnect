import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useRouter } from 'expo-router';

 // assuming the router is imported from another file

const QRCodeScanner = () => {
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [isScanned, setIsScanned] = useState(false);
const handleBarCodeScanned = ({ data, type }) => {
        setScanned(true);
        alert(`Barcode scanned: ${type} - ${data}`);
    };
const requestPermission = async () => {
    try {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        } catch (error) {
          // Handle the error, e.g., log it or display an error message
        console.error('Error requesting permission:', error);
        }
};

React.useEffect(() => {
const requestCameraPermission = async () => {
    try {
        const permissionStatus = await requestPermission();
        setHasPermission(permissionStatus);
    } catch (error) {
        console.error('Error requesting camera permission:', error);
    }
    };
    requestCameraPermission();
    }, []);

if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
}
if (!hasPermission) {
    return <Text>No access to camera. Please enable camera permissions to continue.</Text>;
}

return (
    <View style={styles.container}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
    />
    <TouchableOpacity style={styles.scanButton} onPress={() => setScanned(false)}>
        <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" />
        <Text style={styles.scanButtonText}>Scan QR Code</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cancelButton} onPress={() => router.push('/session/page')}>
        <MaterialCommunityIcons name="close" size={24} color="white" />
        <Text style={styles.cancelButtonText}>Cancel</Text>
    </TouchableOpacity>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4567b7', // blue background
},
scanner: {
    width: 300,
    height: 300,
    marginBottom: 20,
},
scanButton: {
    backgroundColor: '#2196f3', // blue button
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
},
scanButtonText: {
    color: 'white',
    fontSize: 18,
},
    cancelButton: {
    backgroundColor: '#2196f3', // blue button
    padding: 10,
    borderRadius: 5,
},
cancelButtonText: {
    color: 'white',
    fontSize: 18,
},
});

export default QRCodeScanner;