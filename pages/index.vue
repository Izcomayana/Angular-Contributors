<template>
  <div class="home-page">
    <div class="orgs-members">
      <div class="members-container">
        <div class="search-and-sort">
          <input type="search" class="search-input" placeholder="Find a contributor">
          <div class="custom-select" style="width:200px;">
            <select>
              <option>Sort By:</option>
              <option>name</option>
              <option>Contributions</option>
            </select>
          </div>
        </div>
        <div class="members" >
          <table>
            <tr>
              <th>Contributor Login</th>
              <th>Amount Of Contributions</th>
              <th>Followers</th>
              <th>Public Repos</th>
              <th>Public Gists</th>
            </tr>
            <tr v-for="repo in repos" :key="repo.id">
              <td> <nuxt-link class="login" to="/people">{{ repo.login }}</nuxt-link> </td>
              <td>{{ repo.contributions }}</td>
              <td>{{ users.followers }}</td>
              <td>{{ users.public_repos }}</td>
              <td>{{ users.public_gists }}</td>
            </tr>
          </table>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    // data() {
    //   return {
    //     currentPage: 1,
    //     repos: []
    //   }
    // },
    // async fetch () {
    //   const repos = await fetch(`https://api.github.com/repos/angular/angular/contributors?tag=nuxt&state=rising&page=${this.currentPage}`)
    //   .then((res) => res.json())

    //   this.repos = this.repos.concat(repos)
    // },
    async asyncData({ query, error }) {
      let pageRes = await axios.get('https://api.github.com/repos/angular/angular/contributors')
      let countRes = await axios.get('https://api.github.com/users/gkalpak')
      return {
        repos: pageRes.data,
        users: countRes.data
      }
    }
    // async asyncData () {
    //   const { data } = await axios.get('https://api.github.com/repos/angular/angular/contributors')
    //   return {
    //     repos: data
    //   }
    // },
    // data () {
    //   return {
    //     logins: repo.login
    //   }
    // },
    // computed: {
    //   names () {
    //     return this.logins.filter(name => {
    //       return name % 2
    //     })
    //   }
    // }
  }
</script>

<style>
  .home-page {
    /* border: 2px solid red; */
    color: white;
    margin-top: 1rem;
  }

  .orgs-members {
    /* border: 2px solid green; */
    width: 75%;
    margin: 0 auto;
  }

  .members-container {
    /* border: 2px solid yellow; */
    
  }

  .search-and-sort {
    /* border: 2px solid rgb(247, 0, 255); */
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .search-input {
    /* border: 2px solid rgb(0, 255, 255); */
    border: 0.1px solid rgb(75, 75, 75);
    border-radius: 10px;
    width: 40%;
    padding: 0.5rem;
    background: transparent;
    color: rgb(230, 230, 230);
  }

  /* .sort-and-drop {
  } */

  .custom-select {
    /* border: 2px solid rgb(255, 0, 242); */
    width: 40%;
    border-radius: 10px;
    cursor: pointer;
  }

  .custom-select select {
    border: 0.1px solid rgb(75, 75, 75);
    padding: 0.5rem;
    border-radius: 10px;
    width: 100%;
    background: transparent;
    color: rgb(230, 230, 230);
    cursor: pointer;
  }

  option {
    background-color: #0d1117;
    padding: 5rem;
    border: 0.1px solid rgb(75, 75, 75);
    font-size: 1rem;
    cursor: pointer;
  }

  .members {
    border: 2px solid blue;
    border: 0.1px solid rgb(75, 75, 75);
    margin-top: 1.5rem;
    padding: 1rem;
    color: white;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 3px solid rgb(75, 75, 75);
  }

  th, td {
    text-align: center;
    padding: 16px;
  }

  th {
    font-size: 1.25rem;
    font-weight: 600;
  }

  td {
    color: rgb(230, 230, 230);
  }

  .login {
    color: rgb(230, 230, 230);
    transition: 500ms ease;
  }

  .login:hover {
    color: rgb(155, 155, 155);
    transition: 500ms ease;
  }

  tr:nth-child(even) {
    background-color: rgb(49, 49, 49);
    border: 2px solid rgb(75, 75, 75);
  }

  /* img {
    width: 10%;
  } */

  /* p {
    font-size: 2rem;
  } */

  @media (max-width: 768px) {
    .members-container {
      width: 100%;
      text-align: center;
    }

    .search-and-sort {
      width: 99%;
    }

    .search-input {
      width: 35%;
    }
  }

  @media (max-width: 600px) {
    .orgs-members {
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    .search-input {
      width: 50%;
    }

    .members {
      font-size: 0.8rem;
    }
  }
</style>