import React, { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native'

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string;
    onClose: () => void; 
}

export function DuoMatch({discord, onClose, ...rest}: Props) {

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                    <MaterialIcons name="close" size={20} color={THEME.COLORS.CAPTION_500} />
                </TouchableOpacity>
                <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />
                <Heading title="Let´s play!" subtitle="Agorar é só começar a jogar!" style={{alignItems: 'center', marginTop: 24}} />
                <Text style={styles.label}>
                    Adicione no Discord
                </Text>
                <TouchableOpacity style={styles.discordButton} disabled>
                    <Text style={styles.discord}>
                        {discord}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
    
  );
}