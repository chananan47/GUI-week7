import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

function App(){
  return(
   <View style={styles.container}>
      <Text style={styles.text}>
       Hello world 
      </Text>
      <Image style={{width:200,height:200}}
              source={{uri:'https://sites.google.com/site/funnycatmeawww/_/rsrc/1422326075261/home/6997052-funny-cat.jpg'}}
      >
      </Image>
    </View>
  )
  } 
  const styles=StyleSheet.create({
    container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
  },
    text:{
     fontSize:20,
     color:'red',
     backgroundColor :'blue',
     pandding:20,
  }
})
export default App; 