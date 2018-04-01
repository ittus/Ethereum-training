import React, {PropTypes} from 'react';
import { Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3';

export default class RequestRow extends React.Component {
  render() {
    const { Row, Cell } = Table;
    const { id, request } = this.props;
    return (
      <Row>
        <Cell>
          {id}
        </Cell>
        <Cell>
          {request.description}
        </Cell>
        <Cell>
          {web3.utils.fromWei(request.value, 'ether')}
        </Cell>
        <Cell>
          {request.recipient}
        </Cell>
        <Cell>
          {request.approvalCount}/{this.props.approversCount}
        </Cell>
        <Cell>
          Approve
        </Cell>
        <Cell>
          Finalize
        </Cell>
      </Row>
    );
  }
}

RequestRow.propTypes = {
};
