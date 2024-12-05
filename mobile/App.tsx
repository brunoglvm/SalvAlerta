import { StyleSheet, Text, View } from 'react-native';
import Map, {Callout, Marker} from "react-native-maps";

const coordinate = {
  latitude: -12.969717954906338,
  longitude: -38.51277131734317,
}
//,
export default function App() {
  return (
    <View style={styles.container}>
      <Map
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
      >
        <Marker coordinate={coordinate}>
          <Callout>
            <View>
              <Text style={styles.title}>Hub Salvador</Text>
              <Text style={styles.address}>Avenida da França</Text>
            </View>
          </Callout>
        </Marker>
      </Map>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  callout:{
    padding: 12,
  },
  title:{
    fontWeight: "bold",
    fontSize: 18,
  },
  address:{
    fontSize: 14,
  }
});
