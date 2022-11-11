import React, { useState } from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
// import { BLACK, DARK_GRAY, LIGHT_GRAY, RED } from '../assets/colors';

import { hitSlop1020, OS_IOS, WINDOW_WIDTH } from "../utils/style";

const TextInputWithLabels: React.FC<{
    setRef?: (ref: any) => void;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    styleContainer?: object;
    styleInputContainer?: object;
    styleInput?: object;
    label?: string;
    messageError?: string;
    borderColor?: 'black' | 'gray';
    secureTextEntry?: boolean;
    onSearch?: () => void;
    width?: number;
    height?: number;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
    showCrossDeleteValue?: boolean;
    multiline?: boolean;
    keyboardType?: 'default' | 'number-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'decimal-pad';
    props?: object;
    autoFocus?: boolean;
}> = ({
    setRef,
    label,
    messageError,
    value,
    onChange,
    placeholder,
    styleContainer,
    styleInputContainer,
    styleInput,
    borderColor = 'gray',
    secureTextEntry,
    onSearch,
    width = WINDOW_WIDTH - 32,
    height = 96,
    autoCapitalize = 'words',
    multiline = false,
    showCrossDeleteValue = false,
    keyboardType = 'default',
    autoFocus,
    ...props 
     }) => {

        const [showText, setShowText] = useState(secureTextEntry);

        const getColorBorder = (): string => {
            if (messageError) {
                return '#FC542F';
            }
            return borderColor === 'black' ? '#202020' : '#F0F1EC';
        }

        const getWidthInputField = () => {
            let defaultWidth = width;
            if (onSearch) {
                defaultWidth = defaultWidth - 40;
            }
            if ((showCrossDeleteValue || secureTextEntry) && value !== '') {
                defaultWidth = defaultWidth - 40;
            }
            return defaultWidth;
        }
        const handleNavigation = () =>{
            navigation.navigate('SearchScreen')
        }

        return (
            <View style={{ width: width, minHeight: height, ...styleContainer }}>
                {label && <Text style={styles.fontLabel}>{label}</Text>}
                <View
                    style={[
                        styles.inputWrapper,
                        { width },
                        {
                            borderColor: getColorBorder(),
                            ...styleInputContainer,
                        },
                        !multiline && { paddingTop: 8, marginBottom: 0 },
                        !OS_IOS && { paddingBottom: 0, paddingTop: 0, marginBottom: 0 },
                    ]}
                >
                    {onSearch &&
                        <TouchableOpacity onPress={() => { onSearch ; handleNavigation();}}>
                            <Image
                                style={[styles.image, { marginLeft: 16, marginBottom: -4 }]}
                                source={require('../assets/icons/search-icon.png')}
                            />
                        </TouchableOpacity>
                    }
                    <KeyboardAvoidingView
                        behavior={OS_IOS ? "padding" : "height"}
                        style={styles.container}
                        enabled
                    >
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <TextInput
                                style={[
                                    styles.input,
                                    multiline && { lineHeight: 24 },
                                    { width: getWidthInputField() },
                                    { ...styleInput },
                                ]}
                                placeholderTextColor={'#9D9D9D'}
                                ref={(r) => setRef && setRef(r)}
                                value={value}
                                onChangeText={onChange}
                                placeholder={placeholder && placeholder}
                                numberOfLines={1}
                                secureTextEntry={showText}
                                autoCapitalize={autoCapitalize}
                                multiline={multiline}
                                keyboardType={keyboardType}
                                autoFocus={autoFocus}
                                {...props}
                            />
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                    {secureTextEntry && value !== '' &&
                        <TouchableOpacity
                            hitSlop={hitSlop1020}
                            onPress={() => setShowText(!showText)}
                        >
                            <Image
                                style={[styles.image, { marginRight: 16 }]}
                                source={require('../assets/icons/eye-icon.png')}
                            />
                        </TouchableOpacity>
                    }
                    {!secureTextEntry && showCrossDeleteValue && value !== '' &&
                        <TouchableOpacity
                            hitSlop={hitSlop1020}
                            onPress={() => onChange('')}
                        >
                            <Image
                                style={[styles.image, { marginRight: 16, marginBottom: -4 }]}
                                source={require('../assets/icons/cross-icon.png')}
                            />
                        </TouchableOpacity>
                    }
                </View>
                {messageError && <Text style={styles.fontError}>{messageError}</Text>}
            </View>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 24,
        height: 24,
    },
    input: {
        paddingHorizontal: 8,
        fontSize: 16,
        color: '#202020',
        lineHeight: 22,
        fontWeight: '400'
    },
    inputWrapper: {
        minHeight: 48,
        borderRadius: 8,
        paddingTop: 4,
        paddingBottom: 12,
        borderWidth: 2,
        borderColor: '#202020',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fontLabel: {
        textAlign: 'left',
        marginBottom: 4,
        fontSize: 14,
        lineHeight: 20,
        color: '#051F4E',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    fontError: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'right',
        marginTop: 4,
        color: '#FC542F',
        fontWeight: '700'
    },
});

export default TextInputWithLabels;
