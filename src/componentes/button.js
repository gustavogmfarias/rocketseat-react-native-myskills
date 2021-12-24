import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button({ onPress }) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.2}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                Add
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#A370F7',
        padding: 10,
        marginTop: 20,
        borderRadius: 7,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
})