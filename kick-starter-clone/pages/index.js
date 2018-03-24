import factory from '../ethereum/factory';
import React, {PropTypes} from 'react';
import { Card } from 'semantic-ui-react';

export default class CampaignIndex extends React.Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call()
    return {
      campaigns
    }
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      }
    });
    return <Card.Group items={items} />
  }

  render() {
    return (<div>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      { this.renderCampaigns() }
    </div>);
  }
}

CampaignIndex.propTypes = {
};
