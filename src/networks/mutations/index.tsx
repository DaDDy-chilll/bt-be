import auth from './auth';
import user from './user';
const mutations = {
    auth,
    user,
}

export default mutations;

export type MutationType = typeof mutations;
