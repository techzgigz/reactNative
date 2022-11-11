import {Dimensions, Platform, StyleSheet} from "react-native";

const Window = Dimensions.get('window');

export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Window;

export const OS_IOS = Platform.OS === 'ios';

// block scrolling if display is long
export const enabledScrollView = (): boolean => {
    return ((WINDOW_WIDTH / WINDOW_HEIGHT) > 0.45);
}


export const hitSlop1010 = {
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
};

export const hitSlop1020 = {
    top: 10,
    left: 20,
    bottom: 10,
    right: 20,
};

export const hitSlop2020 = {
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
};

export const hitSlop3030 = {
    top: 30,
    left: 30,
    bottom: 30,
    right: 30,
};

export const iconSmall = {
    height: 16,
    width: 16,
};

export const iconMedium = {
    height: 24,
    width: 24,
};

export const icon = {
    height: 32,
    width: 32,
};

export const iconBig = {
    height: 36,
    width: 36,
};

export const wrappers = StyleSheet.create({
    rowAlignedWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    centeredWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    allSpaceWrapper: {
        justifyContent: 'space-between',
    },
    rowCenteredWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowStretchedWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowStretchedHorizontalWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
