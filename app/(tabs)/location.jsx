// File: Map.js
import  { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const ORS_API_KEY = '5b3ce3597851110001cf6248e7e723f7a3ef40b2bbcc38be7f59d9c5';

const Map = ({ buyerLocation, wasteSellers }) => {
    const [distances, setDistances] = useState([]);

    useEffect(() => {
        const fetchDistances = async () => {
            const updatedDistances = await Promise.all(wasteSellers.map((seller) => calculateDistance(buyerLocation, seller.location)));
            setDistances(updatedDistances);
        };

        fetchDistances();
    }, [buyerLocation, wasteSellers]);

    const calculateDistance = async (buyer, seller) => {
      const url = `https://api.openrouteservice.org/v2/directions/driving-car/geojson`;
      const body = {
          coordinates: [
              [buyer.longitude, buyer.latitude],
              [seller.longitude, seller.latitude]
          ]
      };
      try {
          const response = await axios.post(url, body, {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': ORS_API_KEY
              }
          });
          const distance = response.data.features[0].properties.segments[0].distance;
          return (distance / 1000).toFixed(2); // distance in Km
      } catch (error) {
          console.error(error);
          return null;
      }
    };

    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: buyerLocation.latitude,
                longitude: buyerLocation.longitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.04
            }}
        >
            <Marker
                coordinate={buyerLocation}
                title={'Buyer Location'}
                pinColor={"blue"}
            />
            {wasteSellers.map((seller, index) => (
                <Marker
                    key={index}
                    coordinate={seller.location}
                    title={`Seller ${index + 1}`}
                    description={`Distance: ${distances[index]} Km`}
                />
            ))}
        </MapView>
    );
};

export default Map;


// // File: App.js
// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import Map from './Map';

// const App = () => {
//     const buyerLocation = { latitude: -1.286389, longitude: 36.817223 }; // Center of Nairobi
//     const wasteSellers = [
//         { location: { latitude: -1.280256, longitude: 36.816282 } }, // Example seller location
//         { location: { latitude: -1.278001, longitude: 36.817527 } }  // Example seller location
//     ];

//     return (
//         <SafeAreaView style={styles.container}>
//             <Map buyerLocation={buyerLocation} wasteSellers={wasteSellers} />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     }
// });

// export default App;