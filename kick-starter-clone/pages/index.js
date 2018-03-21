import factory from '../ethereum/factory';
import React, {PropTypes} from 'react';

export default class CampaignIndex extends React.Component {
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call()
    console.log(campaigns)
  }

  render() {
    return (<div>MyComponent</div>);
  }
}

CampaignIndex.propTypes = {
};
