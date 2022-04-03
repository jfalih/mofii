import React from 'react'
import { View, TouchableOpacity, Text, } from 'react-native'
import Icon from 'react-native-remix-icon'

type HeaderProps = {
    appName: string,
    useSidebar: boolean,
}

const Header: React.FC<HeaderProps> = ({
    appName,
    useSidebar
}) => {
    return(
        <View style={{
            height:50,
            paddingHorizontal:20,
            width:'100%',
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row'
        }}>
            <View style={{
                flexDirection:'row',
                alignItems:'center'
            }}>
                {useSidebar &&
                    <TouchableOpacity>
                        <Icon name="menu-line" width={40} height={40}/>
                    </TouchableOpacity>
                }
                <Text style={{
                    fontSize:20,
                    marginLeft:10,
                    color:'#000',
                    fontWeight:'bold'
                }}>{appName}</Text>
            </View>
            <TouchableOpacity style={{
                width:40,
                height:40,
                borderRadius:20,
                backgroundColor:'#eee'
            }}>
            </TouchableOpacity>
        </View>
    )
}

export default Header