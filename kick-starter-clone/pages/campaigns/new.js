import React, {PropTypes} from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

export default class CampaignNew extends React.Component {
  state = {
    minimumContribution: '',
    errMessage: '',
    loading: false
  };

  onSubmit = async  (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
      errMessage: ''
    });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        })
      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errMessage: err.message })
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <Layout>
          <h3>Create a Campaign</h3>
          <Form onSubmit={this.onSubmit} error={!!this.state.errMessage}>
            <Form.Field>
              <label>Minimum contribution</label>
              <Input
                label="wei"
                labelPosition="right"
                value={this.state.minimumContribution}
                onChange={event => this.setState({ minimumContribution: event.target.value })}/>
            </Form.Field>
            <Message error content={this.state.errMessage} header="Oops!"></Message>
            <Button primary loading={this.state.loading}>Create!</Button>
          </Form>
      </Layout>
    );
  }
}

CampaignNew.propTypes = {
};
