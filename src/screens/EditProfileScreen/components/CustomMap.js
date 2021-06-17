import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import Geocoder from 'react-native-geocoder';
import markerImage from '../../../assets/images/marker.png';

export const CustomMap = ({ latitude, longitude }) => {
    const [markers, setMarkers] = React.useState(null);
    const [mainMarker, setMainMarker] = React.useState(null);


    // const link = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}`;
    // fetch(link)
    // .then(response => response.json())
    // .then(responseJson => {
    //     const addressComponent = console.log(responseJson, 'results[0].address_components', []);
    //     const getAreaName = zone => console.log(
    //         addressComponent,
    //         `[${_.findIndex(addressComponent, obj => _.includes(obj.types, zone))}].long_name`
    //     );

    //     const region = ' ' + getAreaName('administrative_area_level_1');
    //     const country = ' ' + getAreaName('country');
    //     const region2 = getAreaName('administrative_area_level_2');

    //     const location = region2 ?
    //         [region2, region, country].toString() :
    //         region.concat(',' + country);

    //     console.log(location)
    // })
    // .catch(console.error)

    return (
        <>
            <MapView
                style={styles.map}
                // key={}
                initialRegion={{
                    // latitude: Number(latitude),
                    latitude: 24.764475646705765,
                    latitudeDelta: 0.1,
                    // longitude: Number(longitude),
                    longitude: 46.712924391031265,
                    longitudeDelta: 0.1,
                }}
                // onPress={(e) => setMarkers(e.nativeEvent.coordinate) }
                onLongPress={(e) => {
                    setMarkers(e.nativeEvent.coordinate);
                    console.log(markers)
                }}
                onPress={() => {
                    setMarkers(null)
                }}
            >
                <Marker
                    // coordinate={{ latitude, longitude }}
                    coordinate={{ latitude: 24.764475646705765, longitude: 46.712924391031265 }}
                    title={'title'}
                    description={'description'}
                />
                {markers &&
                    <Marker
                        coordinate={markers}
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
            <View style={{ width: '100%', height: 1, backgroundColor: '#f2f2f2', elevation: 1 }} />
            <View style={{ width: '100%', height: 1, backgroundColor: '#cfcfcf', marginTop: 10 }} />
            <Text style={{ fontSize: 8 }}>dsdsd</Text>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        borderWidth: 1,
        width: '100%',
        height: '70%'
    },
})