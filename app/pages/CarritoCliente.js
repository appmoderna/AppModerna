import { StyleSheet, Text, View, Image, FlatList, ScrollView } from "react-native";
import StyledText from "../theme/StyledText";
import { Card, Title, Paragraph, List } from 'react-native-paper';
import { traerproductos } from "./ProductoItem";
import { ListItem, Avatar, Button, Icon } from "@rneui/base";
import theme from "../theme/theme";
import { useState } from "react";

{/* <ListItem bottomDivider>
        <Avatar
          source={{ uri: producto.avatar_url }}
        // containerStyle={{borderWidth:1}}
        />
        <ListItem.Content>
          <ListItem.Title>
            {producto.producto}
          </ListItem.Title>
          <ListItem.Subtitle>
            {producto.cantidadProducto} {producto.cantidadConfirmada} {producto.precio}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem> */}


//   <View style={styles.itemProducto}>

//   <View> 
//     <Image source={{uri:'https://modernaalimentos.com.ec/wp-content/uploads/2022/01/moderna-alimentos-productos-comercializados-bizcochox.jpg'}} 
//   style={{ width: 40, height: 40 }}
//   />
//   </View>
//   <View>
//   <Text>
//   {producto.producto}
//   {producto.cantidadProducto} {producto.cantidadConfirmada} {producto.precio}
//   </Text>

//   </View>
//   <View>
//   <Button title='a'/>
//   <Button title='a'/>
//   </View>  
// </View>

export default function Carrito() {
  const [valor, setValor] = useState();

  const ListaProductos = ({ producto }) => {
    return <ListItem bottomDivider containerStyle={{ marginBottom: 2, borderRadius: 10, borderWidth: 1, borderBottomWidth: 1, borderColor: 'black', paddingVertical: 10, paddingHorizontal: 15 }} >
      <Avatar
        source={{ uri: producto.avatar_url }}
      // containerStyle={{borderWidth:1}}
      />
      <ListItem.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ListItem.Title>
          {producto.producto}
        </ListItem.Title>
        <ListItem.Subtitle style={{ justifyContent: 'center', alignItems: 'center' }}>
          {producto.cantidadProducto} P.U: ${producto.precio} P.T: ${producto.preciototal}
          {/* setValor({producto.preciototal}) */}
        </ListItem.Subtitle>
      </ListItem.Content>

      <ListItem.Content right style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          type="clear"
          icon={{
            name: 'trash',
            type: 'font-awesome',
            size: 25,
            color: 'red',
          }} />
        <Button
          type="clear"
          icon={{
            name: 'pencil',
            type: 'entypo',
            size: 25,
            color: 'orange',
          }} />
      </ListItem.Content>
    </ListItem>

  }

  return <View style={styles.container}>
    <View style={styles.cajaCabecera}>
      <Image source={require('../../assets/moderna/Logotipo-original.png')}
        style={{ width: 310, height: 100 }} />
      <StyledText heading >RESUMEN DE PEDIDO</StyledText>
    </View>
    <View style={styles.cajaCuerpo}>

{/* ______________________________________________________________________________________________ */}
      <Text style={{color:theme.colors.modernaRed,fontWeight:'bold',fontSize:25}}>$ 13.52</Text>
      <View style={styles.cajaTitulo}>
        <Text style={{color:'#ffff'}}>Resumen: </Text>
      </View>
      <View style={styles.cajaFinal}>
        <Text>Subtotal: {valor} </Text>
        <Text>IVA </Text>
        <Text>Total </Text>
      </View>

      <View style={styles.cajaTitulo}>
        <Text style={{color:'#ffff'}}>Lista Productos: </Text>
      </View>

{/* ______________________________________________________________________________________________ */}
      

      <FlatList
        data={traerproductos()}
        renderItem={({ item }) => {
          return <ListaProductos producto={item} />
        }}
        keyExtractor={(item) => { return item.producto }}
        style={{ height: 110 }}
      />


      {/* <ListItem containerStyle={{ marginBottom: 2, borderRadius: 10, borderWidth: 1, borderBottomWidth: 1, borderColor: 'black', paddingVertical: 10, paddingHorizontal: 15 }} >
          <ListItem.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ListItem.Title>
              Subtotal
            </ListItem.Title>
            <ListItem.Title>
              IVA
            </ListItem.Title>
            <ListItem.Title>
              Total
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ListItem.Title>
              {valor}
            </ListItem.Title>
            <ListItem.Title>
              b
            </ListItem.Title>
            <ListItem.Title>
              b
            </ListItem.Title>
          </ListItem.Content>

        </ListItem> */}
      <View style={styles.cajaBotones}>
        <Button title=' Cancelar Pedido '
          buttonStyle={{
            borderRadius: 5,
            marginHorizontal: 10,
            backgroundColor: theme.colors.modernaRed
          }}
          size="lg" />

        <Button title='Guardar'
          buttonStyle={{
            width: 180,
            borderRadius: 5,
            marginHorizontal: 10,
            backgroundColor: theme.colors.modernaYellow
          }}
          size="lg" />
      </View>

    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  cajaCabecera: {
    flex: 2,
    // backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 25
  },
  cajaCuerpo: {
    flex: 6,
    // backgroundColor: 'red',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  itemProducto: {
    borderWidth: 1,
    flexDirection: 'row'
  },
  cajaBotones: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 25
  },
  cajaFinal: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'cyan',
    marginBottom:10,
    position: 'relative'
  },
  cajaTitulo: {
    backgroundColor: theme.colors.modernaYellow,
    height: 25,
    justifyContent:'center',
    paddingLeft:10,
  }
});