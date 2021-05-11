import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { goBack } from "../../navigation/RootNavigation";
import { Header } from "../../components/UI/Header";

const { width, height } = Dimensions.get("screen");

export const EditProfileScreen = ({ navigation }) => {
    return (
        <View>
            <Header navigation={navigation} text={'Edit Profile'} showGoBackButton={true} />
            {/* 
                name, email, password, language
            */}
            
        </View>
    )
}