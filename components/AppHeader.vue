<template>
  <div class="appHeader-container">
    <div class="container">
      <p class="angular-container">
        <img src="~/assets/images/angularjs-icon.png" class="angular-icon" alt="AngularJs-Icon"> 
        Angular
      </p>
      <div class="appHeader-ul">
        <ul>
          <li> <nuxt-link class="nuxt-link active" to="/">Home</nuxt-link> </li>
          <li> <nuxt-link class="nuxt-link" to="/">Repositories</nuxt-link> </li>
          <li> <nuxt-link class="nuxt-link" to="/">Packages</nuxt-link> </li>
          <li> <nuxt-link class="nuxt-link" to="/people">People</nuxt-link> </li>
          <li> <nuxt-link class="nuxt-link" to="/">Projects</nuxt-link> </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .appHeader-container {
    /* border: 2px solid green; */
    border-bottom: 0.1px solid rgb(75, 75, 75);
    background: #0d1117;
  }

  .container {
    /* border: 2px solid red; */
    width: 75%;
    margin: 0 auto;
  }

  .angular-container {
    /* border: 2px solid yellow; */
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  .angular-icon {
    width: 3%;
    margin-bottom: 0;
  }

  ul {
    /* border: 2px solid rgb(0, 128, 128); */
    display: flex;
    margin-left: 2rem;
    padding-bottom: 1rem;
  }

  li {
    list-style-type: none;
  }

  .nuxt-link {
    color: white;
    padding: 0 1.3rem;
  }

  .nuxt-link:hover {
    border-bottom: 1.6px solid rgb(126, 126, 126);
    padding-bottom: 0.9rem;
    transition: 400ms ease-in-out;
  }

  .nuxt-link:active {
    border-bottom: 1px solid rgb(253, 107, 107);
  }

  @media (max-width: 768px) {
    .appHeader-container {
      text-align: center;
    }

    ul {
      margin-left: 0;
      justify-content: space-between;
    }

    .nuxt-link {
      padding: 0 0.5rem;
    }
  }

  @media (max-width: 600px) {
    .container {
      width: 99.1%;
    }
  }

  @media (max-width: 450px) {
    ul {
      font-size: 0.55rem;
    }
  }

  @media (max-width: 300px) {
    ul {
      font-size: 0.47rem;
    }
  }
</style>