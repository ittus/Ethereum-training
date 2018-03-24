import React, {PropTypes} from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';

export default (props) => {
  return (<Container>
    <Header></Header>
      {props.children}
  </Container>);
}
