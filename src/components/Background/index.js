import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export default styled(LinearGradient).attrs({
  colors: ['#333', '#ccc'],
})`
  flex: 1;
`;
