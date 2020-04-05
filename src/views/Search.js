import React from 'react';
import {Button, Text} from 'react-native';
import Box from '../components/box';
import BoxCenter from '../components/box-center';

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box size={20} bg="blue" mt={120} />
    </BoxCenter>
  );
}

export default SearchView;
