import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { Button } from '../components/Button';
import { BufferView } from './decorators'

storiesOf("Button", module)
    .addDecorator(BufferView)
    .add("primary", () => (
        <Button
            onPress = {action("tapped-default")}
        >
            Primary Button
        </Button>
    ))
    .add("secondary", ()=>(
        <Button
        onPress = {action("tapped-outline")}
        outline
        >
            Secondary Button
        </Button>
    ))