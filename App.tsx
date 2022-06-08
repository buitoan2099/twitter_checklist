
import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RootLine from './src/navigation/root';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootLine />
      </SafeAreaView>
    </PaperProvider>
  );
};
export default App;
