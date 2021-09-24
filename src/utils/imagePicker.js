import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from "expo-image-manipulator";

import { Linking, Alert } from 'react-native';

class imagePicker {

    setImage = () => { };

    // .. inital event
    init = async (setImage, type) => {
        this.setImage = setImage;

        if (type === "camera") {
            this.openCamera();
            return;
        }

        this.pickImage();
    }

    openCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status === 'granted') {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
            });

            if (!result.cancelled) {
                this.resizeImage(result.uri);
            }
        } else {
            Alert.alert('title alert', 'title body', [{
                text: 'cancel'
            }, {
                text: 'ok',
                onPress: () => {
                    Linking.openSettings();
                }
            }], {
                cancelable: false
            });
        }
    }

    // .. open gallery to pick image
    pickImage = async () => {

        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
            });

            if (!result.cancelled) {
                this.resizeImage(result.uri, {
                    height: result.height,
                    width: result.width
                });
            }
        } else {
            Alert.alert('alert title', 'alert body', [{
                text: 'cancel'
            }, {
                text: 'ok',
                onPress: () => {
                    Linking.openSettings();
                }
            }], {
                cancelable: false
            });
        }
    }

    calculateAspectRatioFit = (srcWidth = 1024, srcHeight = 1024, maxWidth = 1024, maxHeight = 1024) => {

        const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

        return { width: parseInt(srcWidth * ratio), height: parseInt(srcHeight * ratio) };
    }

    // .. resize image after pick image
    resizeImage = async (uri, size, callback) => {

        const { width, height } = this.calculateAspectRatioFit(size?.width, size?.height);

        const imageAfterResize = await ImageManipulator.manipulateAsync(
            uri,
            [
                {
                    resize: {
                        width,
                        height
                    }
                }
            ],
            { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
        );

        if (callback) {
            callback(imageAfterResize);
        } else {
            this.setImage(imageAfterResize);
        }
    }
}

export default new imagePicker();