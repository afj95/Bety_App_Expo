import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { stuffs } from '../../../fakeData';
import { StuffItem } from './StuffItem';

export const Body = () => {
    const [value, onChangeText] = React.useState('');
    const [isStuffs, setIsStuffs] = React.useState(true);

    return (
        <>
        {/* <View style={{
            backgroundColor: 'white',
            height: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableOpacity style={{
                borderBottomWidth: isStuffs ? 1 : 0 ,
                // borderRadius: 8,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={() => setIsStuffs(!isStuffs)}>
                <Text>stuffs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                borderBottomWidth: isStuffs ? 0 : 1 ,
                // borderRadius: 8,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={() => setIsStuffs(!isStuffs)}>
                <Text>members</Text>
            </TouchableOpacity>

        </View> */}
        {isStuffs ?
        <FlatList
            data={stuffs}
            keyExtractor={(item, index) => '#' + index}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => <StuffItem key={index} value={value} stuff={item} index={index} />}
        />
        : <View></View>
        }
        </>
    )
}