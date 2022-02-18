// import Vuex from 'vuex';
// import axios from 'axios';

// const createStore = () => {
//   return new Vuex.Store({
//     actions: {
//       nuxtServerInit(vuexContext, content) {
//         return axios.get('https://api.github.com/orgs/angular/repos.json')
//         .then(res => {
//           const reposArray = []
//           for (const key in res.data) {
//             reposArray.push(res.data[key])
//           }

//           vuexContext.commit('setRepos', reposArray)
//         })
//         .catch(e => context.error(e));
//       }
//     }
//   })
// }

// export default createStore;