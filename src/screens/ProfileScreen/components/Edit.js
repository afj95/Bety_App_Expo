import React, { useRef } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import { Feather } from '@expo/vector-icons';
import Loader from '../../../components/Loaders/Loader';

const { width, height } = Dimensions.get("window");

export const Edit = (params) => {

    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <>
            <TouchableOpacity onPress={onOpen}>
                <Feather name={'edit'} size={20} />
            </TouchableOpacity>
            <Portal>
                <Modalize ref={modalizeRef} snapPoint={height - 100} >
                    <View style={{ height: height - 100, borderWidth: 1, width, borderColor: 'red'}}>
                        
                    </View>
                </Modalize>
            </Portal>
        </>
    )
}

const styles = StyleSheet.create({
    
})