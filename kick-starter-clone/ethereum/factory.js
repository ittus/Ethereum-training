import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3b190cFF228EC9ed649b1f87dB5216c9ed0aC7cE'
);

export default instance;
