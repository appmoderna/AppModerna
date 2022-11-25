import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import StyledText from '../theme/StyledText'
import theme from '../theme/theme'


//Entre las props, la variable searchRef dene ser una referencia (hook useRef)
//si no se manda un placeHolder, se pondrá por defecto Buscar
//si no se manda un label, no se mostrara nada en la parte superior derecha
//onSubmit se ejecuta cuando se toca el botón o cuando se manda el texto del input
export default function StyledInput({ label, placeHolder, textRef, style, icon }) {
    return (
        <View style={style}>
            {label &&
                <View style={styles.label}><StyledText small color={theme.colors.inputcolor}>{label}</StyledText></View>
            }
            <TextInput style={styles.input} placeholder={placeHolder ? placeHolder : 'Escribe aquí'}
                onChangeText={(e) => {
                    if (textRef) {
                        textRef.current = e ? e : ''
                    }
                }}
            />
            {icon &&
                <View style={styles.icon}>
                    {icon}
                </View>
            }

        </View>

    )
}

const styles = StyleSheet.create({
    nobackground: {
        backgroundColor: 'transparent',
    },
    input: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderColor: theme.colors.inputcolor,
        width:300,
        marginBottom: 20
        
    },
    icon: {
        position: 'absolute',
        right: 4,
        marginTop: 9
    },
    label: {
        zIndex: 100,
        position: 'absolute',
        backgroundColor: 'white',
        top: -9,
        left: 10,
    }
})
