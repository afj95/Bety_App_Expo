import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
// import Geocoder from 'react-native-geocoder';
import markerImage from '../../../assets/images/marker.png';
import { googleMapKey } from '../../../config/keys';

export const CustomMap = ({ userLocation }) => {
    const [marker, setMarker] = React.useState(null);
    const [result, setResult] = React.useState('');
    const [initialRegion, setInitialRegion] = React.useState(null);
    let _mapRef = React.useRef(null);

    React.useEffect(() => {
        const link =
            `https://maps.googleapis.com/maps/api/geocode/json?` +
            `key=${googleMapKey}` +
            `&latlng=${userLocation.latitude},${userLocation.longitude}`
        fetch(link)
        .then(response => response.json())
        .then(responseJson => {
            setResult(responseJson.results[0].address_components[1].long_name)
        })
        .catch(error => console.log(error))
        setInitialRegion({
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
    }, [])

    const _getLocationClickedData = (e) => {
        // setMarker(e.nativeEvent.coordinate)
        // Getting street name
        const coordinate = e.nativeEvent.coordinate;
        setMarker(coordinate)
        console.log(marker)
        if(coordinate) {
            var link =
                `https://maps.googleapis.com/maps/api/geocode/json?` +
                `key=${googleMapKey}` +
                `&latlng=${coordinate.latitude},${coordinate.longitude}`;

            fetch(link)
            .then(response => response.json())
            .then(responseJson => {
                // This is the response coming from json with all the data about the latlng
                // console.log(responseJson.results[0].address_components[1]);
                setResult(responseJson.results[0].address_components[1].long_name)
            })
        } else {
            console.log('coordinate is null => ' + coordinate);
        }
    }
    return (
        <>
            <MapView
                ref={_mapRef}
                style={styles.map}
                key={googleMapKey}
                provider={'google'}
                initialRegion={initialRegion}
                showsUserLocation={true}
                onLongPress={_getLocationClickedData}
                onPress={() => setMarker(null)}>
                
                {/* Testing 500 location on map */}
                {/* The map got slower */}

                {/* {manyLocations.map((location, index) => {
                    return (
                        <Marker
                            key={index}
                            coordinate={location}
                            title={'title'}
                            // description={location}
                            // tracksViewChanges={false}
                            style={{ borderWidth: 1, width: 42, height: 42 }}>
                            <Image
                                source={markerImage}
                                style={{ width: 40, height: 40 }}
                                resizeMode={'contain'}
                            />
                        </Marker>
                    )
                })} */}
                {marker &&
                    <Marker
                        coordinate={marker}
                        title={'title'}
                        description={'description'}
                        style={{ borderWidth: 1, width: 42, height: 42 }}>
                        <Image
                            source={markerImage}
                            style={{ width: 40, height: 40 }}
                            resizeMode={'contain'}
                        />
                    </Marker>
                }
            </MapView>
            {/* Get userLocation icon */}
            <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                <TouchableOpacity onPress={() => {
                    _mapRef.current.animateToRegion({
                        // latitude: 24.763308516050024, longitude: 46.7145571955744,
                        latitude: userLocation.latitude, longitude: userLocation.longitude,
                        latitudeDelta: 0.0155, longitudeDelta: 0.0155,
                        }, 1500)
                }}>
                    <MaterialIcons name={'my-location'} size={40} />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 10, position: 'absolute', bottom: 20 }}>{result}</Text>
        </>
    );
};
const styles = StyleSheet.create({
    map: {
        borderWidth: 1,
        width: '100%',
        height: '100%'
    },
})