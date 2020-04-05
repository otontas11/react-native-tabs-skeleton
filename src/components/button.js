import styled from 'styled-components';

import {TouchableOpacity} from 'react-native';
import {
  compose,
  flexbox,
  space,
  size,
  color,
  layout,
  border,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(flexbox, space, color, size, layout, border),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};
export default Button;
