import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    buttonSkill: {
        color: '#1F1E25',
        padding: 5,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10,
    },
    textSkill: {

        color: '#fff',
        backgroundColor: '#1F1E25',
        padding: 10,
        fontSize: 22,
        fontWeight: 'bold',

    }
})