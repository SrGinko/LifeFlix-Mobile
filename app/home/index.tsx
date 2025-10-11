import { Card } from '@/components/Card';
import { ContentContainer } from '@/components/ContentContainer';
import { Colors, Fonts, TextType } from '@/constants/theme';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}> LifeFlix </Text>
      </View>
      <View style={styles.content}>
        <ContentContainer title='Canais'>
          <Card title='Cartoon Network' id='cartoon' url='https://redecanaistv.sh/player3/ch.php?canal=' image='https://static.wikia.nocookie.net/tvpediabrasil/images/2/28/Cartoonnet.jpg/revision/latest?cb=20180801233705&path-prefix=pt-br'/>
          <Card title='A&E' id='aie' url='https://redecanaistv.sh/player3/ch.php?canal=' image='https://yt3.googleusercontent.com/8kJOjxBvuSB3wDZvB8ncO_HuGp2uSUrF8nHV-_x0ZN_aOyjygOFWleWSxmRfuvHQAH8fhpY4THk=s900-c-k-c0x00ffffff-no-rj'/>
          <Card title='adult swim' id='adultswim' url='https://redecanaistv.sh/player3/ch.php?canal=' image='https://variety.com/wp-content/uploads/2014/02/adult-swim1.jpg'/>
          <Card title='AMC' id='amc' url='https://redecanaistv.sh/player3/ch.php?canal=' image='https://cdn6.aptoide.com/imgs/1/1/a/11a5a8d4ea892d8bcbab71bcbc06c324_icon.png'/>
          <Card title='Animal Planet' id='animalplanet' url='https://redecanaistv.sh/player3/ch.php?canal=' image='https://image.roku.com/developer_channels/prod/ca376798a367c72387af6cb38a24ebd0a25680ba73b0f6739822aa5be6f40c64.png'/>
        </ContentContainer>
        <ContentContainer title='Canais'>
          <Card title='Cartoon Network' id='cartoon' url='https://redecanaistv.sh/player3/ch.php?canal=' image='https://static.wikia.nocookie.net/tvpediabrasil/images/2/28/Cartoonnet.jpg/revision/latest?cb=20180801233705&path-prefix=pt-br'/>
          <Card title='A&E' id='aie' url='https://redecanaistv.sh/player3/ch.php?canal=' image='https://yt3.googleusercontent.com/8kJOjxBvuSB3wDZvB8ncO_HuGp2uSUrF8nHV-_x0ZN_aOyjygOFWleWSxmRfuvHQAH8fhpY4THk=s900-c-k-c0x00ffffff-no-rj'/>
          <Card title='adult swim' id='adultswim' url='https://redecanaistv.sh/player3/ch.php?canal=' image='https://variety.com/wp-content/uploads/2014/02/adult-swim1.jpg'/>
          <Card title='AMC' id='amc' url='https://redecanaistv.sh/player3/ch.php?canal=' image='https://cdn6.aptoide.com/imgs/1/1/a/11a5a8d4ea892d8bcbab71bcbc06c324_icon.png'/>
          <Card title='Animal Planet' id='animalplanet' url='https://redecanaistv.sh/player3/ch.php?canal=' image='https://image.roku.com/developer_channels/prod/ca376798a367c72387af6cb38a24ebd0a25680ba73b0f6739822aa5be6f40c64.png'/>
        </ContentContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 0,
    paddingTop: 35,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#171717',
    alignItems: 'center'
  },
  titulo:{
    fontSize: TextType.title.fontSize,
    color: TextType.title.color,
    fontFamily: Fonts.sans,
    fontWeight: 'bold'
  },
  content:{
    flexDirection: 'column',
    padding: 10,
    flexGrow:1
  }
});
