import React, { useCallback, useEffect } from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Appbar } from '../../components/Appbar';
import MyText from '../../components/UI/MyText';
import _ from 'underscore';
import Colors from '../../utils/Colors';
import { addMember, resetAddMemberStatus, resetSearchList, searchMember } from '../../reducers/home/homesActions';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { showMessage } from 'react-native-flash-message';
import { t } from '../../i18next';
import { EmptyList } from './components';

export const AddMemberScreen = (props) => {
    const dispatch = useDispatch();

    const searchMemberList = useSelector(state => state?.homesReducer?.searchMemberList);
    const searchMemberLoading = useSelector(state => state?.homesReducer?.searchMemberLoading);
    
    const addMemberStatus = useSelector(state => state?.homesReducer?.addMemberStatus);
    
    useEffect(() => {
        return () => {
            // Cleaning the search list & status when the user close the search screen.
            dispatch(resetSearchList());
            dispatch(resetAddMemberStatus());
        }
    }, [])

    useEffect(() => {
        switch(addMemberStatus) {
            case 200:
                showMessage({
                    message: t('addedMemberSuccessfully'),
                    titleStyle: { textAlign: 'left' },
                    type: 'success',
                    duration: 800
                })
            break;
            case 500:
                showMessage({
                    message: t('serverError'),
                    titleStyle: { textAlign: 'left' },
                    type: 'danger',
                    duration: 1500
                })
            break;
        }
    }, [addMemberStatus])

    const onChangeText = useCallback((value) => {
        const debounce = _.debounce(() => {
            dispatch(searchMember(value));
            return;
        }, 200)
        if(value == '') {
            dispatch(resetSearchList());
        } else {
            debounce();
        }
    }, [])

    const onUserPressed = (username) => {
        const { id } = props?.route?.params;

        dispatch(addMember(id, username))
    }

    const renderItem = useCallback(({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => onUserPressed(item.username)} key={index} style={styles.itemContainer}>
                <View style={styles.imageAdnNameContainer}>
                    <Image
                        style={styles.userImage}
                        source={{ uri: item.profileImage }}
                    />
                    <View>
                        <MyText>{item.firstName + ' ' + item.lastName}</MyText>
                        <MyText style={{ fontSize: 10 }}>{item.phoneNumber}</MyText>
                    </View>
                </View>
                <Ionicons name={'person-add-sharp'} size={22} color={'black'} style={{ alignSelf: 'center'}} />
            </TouchableOpacity>
        )
    }, [])

    return (
        <>
            <Appbar initBack >
                <Searchbar
                    style={styles.searchbar}
                    onChangeText={onChangeText}
                    keyboardType={'number-pad'}
                    placeholder={t('phone')}
                    placeholderTextColor={'#999999'}
                    theme={{
                        colors: {
                            primary: '#000000',
                            placeholder: '#000000'
                        }
                    }}
                />
            </Appbar>
            {searchMemberLoading ? 
                <ActivityIndicator size={'large'} color={'black'} style={{ marginTop: 20 }} />
            :
                <View style={styles.container}>
                    <FlatList
                        keyExtractor={(item, index) => '#' + index}
                        data={searchMemberList || []}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                        ListEmptyComponent={EmptyList}
                    />
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg2,
        marginTop: 2,
    },
    searchbar: {
        width: '80%',
        height: 50,
        alignSelf: 'center',
        elevation: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        marginLeft: 10,
        borderWidth: 0.5,
        borderColor: '#999'
    },
    itemContainer: {
        marginVertical: 5,
        width: '95%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        // shadow
        shadowColor: '#999999',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 2,
    },
    imageAdnNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        justifyContent: 'space-between'
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        margin: 5
    }
})