import { METHODS, request } from '../axiosInstances';

export default {
  getUserNfts: () => request(METHODS.GET, '/user/getNfts', {}),
};
