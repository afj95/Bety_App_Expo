import React from 'react';
import { View, FlatList } from 'react-native';
import { stuffs } from '../../../fakeData';
import { StuffItem } from './StuffItem';

export const Body = () => {
    const [value, onChangeText] = React.useState('');
    return (
        <FlatList
            data={stuffs}
            keyExtractor={(item, index) => '#' + index}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <>
                    <StuffItem key={index} value={value} stuff={item} index={index} />
                </>
            )}
        />
    )
}