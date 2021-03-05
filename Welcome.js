import React from 'react';
import { Text } from 'react-native';

export function Welcome(props) {
    return <Text>Hello, {props.name}</Text>;
}