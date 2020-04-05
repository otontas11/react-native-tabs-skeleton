import {View} from 'react-native';
import styled from 'styled-components';
import {
  space,
  layout,
  size,
  color,
  compose,
  flexbox,
  border,
} from 'styled-system';

//const Box = styled(View)(space, size, layout, color, flexbox);

const Box = styled(View)(compose(space, size, layout, color, flexbox, border));

export default Box;
