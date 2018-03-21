import factory from '../ethereum/factory';
import React, {PropTypes} from 'react';

export default class CampaignIndex extends React.Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call()
    return {
      campaigns
    }
  }

  render() {
    return (<div>{ this.props.campaigns[0] }</div>);
  }
}

CampaignIndex.propTypes = {
};
