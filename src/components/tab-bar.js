import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '../components/button';
import {Search, Bookmark, RotateCw} from '../components/icons';
import FavoriteView from '../views/Favorite';
import Box from './box';

function TabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ? (
          <Box p={15} mt={-15} bg="white" borderRadius="full">
            <Button
              key={label}
              pt={6}
              bg="red"
              size={56}
              flexDirection="column"
              borderRadius="full"
              onPress={onPress}>
              <Search stroke="white" />

              <Box mt={6} size={3} bg={isFocused ? 'red' : ''} />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            flex={1}
            onPress={onPress}>
            {label === 'History' ? (
              <RotateCw color="gray" />
            ) : (
              <Bookmark color="gray" />
            )}
            {isFocused ? (
              <Box mt={6} size={3} bg="red" />
            ) : (
              <Box mt={6} size={3} />
            )}
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
