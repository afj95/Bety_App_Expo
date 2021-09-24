import React from 'react'
import { View } from 'react-native';
import { MainHeader } from "../../components/UI/MainHeader";
// Components
import { EditProfileBody } from './components';
// import { MyModal } from './components/MyModal';

export const EditProfileScreen = (props) => {
    // const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View style={{ height: '100%', backgroundColor: '#fff' }}>
            <MainHeader
                navigation={props.navigation}
                text={'editProfile'}
                showGoBackButton={true}
            />
            <EditProfileBody
                lang={props.route.params.lang}
                user={props.route.params.user}
            />

            {/* Testing modal with animation fade and slide */}
            {/* <TouchableOpacity
                    style={{ padding: 20, backgroundColor: 'red', position: 'absolute', top: 100 }}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <MyText>show modal</MyText>
                </TouchableOpacity>
            <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}

        </View>
    );
};