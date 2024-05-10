import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './styles'
export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas basedas nos produtos que você escolheu.
      </Text>
      <StatusBar style="auto" />
    </View>

  );
}


