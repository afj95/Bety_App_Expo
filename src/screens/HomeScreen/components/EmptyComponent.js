import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

export const EmptyComponent = ({ user }) => (
    <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
      <Text>{user?.username}</Text>
      {/* <Text>{token}</Text> */}
      <Image source={require('../../../assets/images/9073-empty-store-box.gif')}
        style={{ width: '95%', borderWidth: 0, resizeMode: 'contain' }} />
    </View>
)