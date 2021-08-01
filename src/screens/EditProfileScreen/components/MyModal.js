import React from 'react'
import {
    View,
    Modal,
    TouchableOpacity
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MyText from '../../../components/UI/MyText';
import * as Animatable from 'react-native-animatable';

export const MyModal = (params) => {
    const { modalVisible, setModalVisible } = params;
    return (
        <View>
            <Modal
                transparent={true}
                animationType={'fade'}
                visible={modalVisible}
                style={{ flex: 1 }}
            >
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', alignItems: 'flex-end', height: '100%', justifyContent: 'flex-end' }}>
                <Animatable.View animation='fadeInUp' style={{ width: '100%', height: 150, backgroundColor: 'blue' }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={{ padding: 20}}>
                        <MyText>close</MyText>
                    </TouchableOpacity>
                </Animatable.View>
            </View>

            </Modal>
        </View>
    )
}
