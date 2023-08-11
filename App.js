import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Placar from './Placar';
import Imagens from './Imagens';
import { LinearGradient } from 'expo-linear-gradient';
import Tempo from './Tempo';
import Jogador from './Jogador';
import Mesa from './Mesa';

export default function App() {
  return (
    <View style={styles.container}>

<LinearGradient 
       colors={['aqua', 'blue']}
       start={{x:0, y:0}}
       end={{x: 1, y: 1}}
       style={styles.box}
>
      
      <Placar>
      </Placar>
      <Tempo>

      </Tempo>
      <Jogador></Jogador><Mesa/>
      <StatusBar style="auto" />
      </LinearGradient>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingHorizontal: 30,
  },

  box:{
    flex:1,
    width: '1',
    height: 300,

  },

  
});
