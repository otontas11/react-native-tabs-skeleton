import styled from 'styled-components';
//import {space, layout, size, color, compose, flexbox} from 'styled-system';
import Box from './box';

//daha önceden türettiğimiz box compoenentini
const BoxCenter = styled(Box)({});
//const BoxCenter = styled(Box)(compose(space, size, layout, color, flexbox));

//default değer verme
BoxCenter.defaultProps = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export default BoxCenter;
