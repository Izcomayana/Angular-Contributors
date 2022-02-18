<template>
  <div class="container">
    <div class="contributor-container">
          <div class="about-contributors" v-for="repo in repos" :key="repo.id">
            <div class="img-container">
              <img :src="repo.avatar_url" alt="contributor-img">
            </div>
            <div class="other-infos">
              <p> <span class="info-headings">Name:</span>  {{ repo.login }}</p>
              <p> <span class="info-headings">Contributions:</span>   {{ repo.contributions }}</p>
              <p> <span class="info-headings">Followers:</span> {{ repos.followers }}</p>
              <p> <span class="info-headings">Public Repos:</span> {{ repos.public_repos }}</p>
              <p> <span class="info-headings">Public Gists:</span> {{ repos.public_gists }}</p>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    layout: 'slug',
    async asyncData () {
      const { data } = await axios.get('https://api.github.com/repos/angular/angular/contributors')
      return {
        repos: data
      }
    },
  }
</script>

<style scoped>
  .contributor-container {
    /* border: 2px solid green; */
    width: 75%;
    margin: 0 auto;
    /* margin-top: 5rem; */
    padding: 2rem 0;
    text-align: center;
  }

  .about-contributors {
    /* border: 2px solid red; */
    width: 50%;
    margin: 0 auto;
    /* display: flex;
    justify-content: space-between; */
    
  }

  .img-container {
    /* border: 2px solid yellow; */
    width: 75%;
    margin: 2rem auto;
  }

  .img-container img {
    width: 100%;
  }

  .other-infos {
    /* border: 2px solid rgb(0, 255, 221); */
    width: 99%;
    text-align: center;
  }

  .other-infos p {
    font-size: 1.5rem;
  }

  .info-headings {
    font-size: 1.75rem;
    font-weight: 600;
    color: rgb(201, 201, 201);
  }

  @media (max-width: 768px) {
    .about-contributors {
      width: 100%;
    }

    .other-infos p {
      font-size: 1.25rem;
    }

    .info-headings {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 400px) {
    .other-infos p {
      font-size: 1rem;
    }

    .info-headings {
      font-size: 1.25rem;
    }
  }
</style>