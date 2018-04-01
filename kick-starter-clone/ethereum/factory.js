import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xafC75cf55180aeAf28407a30914919785496Df29'
);

export default instance;
