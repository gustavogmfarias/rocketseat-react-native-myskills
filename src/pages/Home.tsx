import React, { useState, useEffect } from 'react';
import {
    View, ScrollView, FlatList, Text, StyleSheet, SafeAreaView, TextInput, Platform, StatusBar
} from 'react-native';

import { Button } from '../componentes/button';
import { SkillCard } from '../componentes/skillcard';

interface SkillData {
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill,
        }
        setMySkills(oldState => [...oldState, data]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        console.log(currentHour);
        if (currentHour < 12) {
            setGretting('Good Morning');
        } else if (currentHour >= 12 && currentHour <= 18) {
            setGretting('Good Afternoon')
        } else {
            setGretting('Good Night');
        }

    }, []);

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>
                Welcome, Gustavo
            </Text>

            <Text style={styles.greetings}>
                {gretting}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginVertical: 30 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard skill={item.name} />
                )
                }
            />

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS == 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,

    },

    greetings: {
        color: '#ffffff',
    }
})