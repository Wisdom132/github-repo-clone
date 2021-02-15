<template>
  <div>
    <div class="" v-if="loading">loading</div>
    <section class="left-menu" v-else>
      <div class="profile">
        <div class="profile-image-container">
          <img
            id="userAvatar"
            src="https://avatars.githubusercontent.com/u/42722372?s=460&u=72f32cb96ee50cfe90119efc6b358b35c4b66df7&v=4"
            alt="avatar"
          />
        </div>
        <div class="names-username">
          <p id="name" class="profile-name">{{ user.name }}</p>
          <p id="username" class="profile-username">{{ user.login }}</p>
        </div>
      </div>
      <p id="bio" class="bio">{{ user.bio }}</p>
      <button class="edit-profile-btn">Edit profile</button>

      <div class="user-stat">
        <a href="#" class="followers">
          <i class="fas fa-users"></i>
          <span class="text-bold text-gray-dark">{{ user.followers }}</span>
          Followers </a
        >.
        <a href="#" class="followers">
          <span class="text-bold text-gray-dark">{{ user.following }}</span>
          Following </a
        >.

        <a href="#" class="followers">
          <i class="far fa-star"></i>
          <span class="text-bold text-gray-dark">{{ user.public_repos }}</span>
        </a>
      </div>

      <div class="social hide-mobile">
        <div>
          <i class="fas fa-warehouse"></i>
          <span class="company">{{ user.company }}</span>
        </div>
        <div>
          <i class="fas fa-map-marker-alt"></i>
          <span class="location">uyo,nigeria</span>
        </div>
        <div><i class="fab fa-twitter"></i> {{ user.twitter_username }}</div>
      </div>

      <hr class="hr" />
      <div class="highlight hide-mobile">
        <h2>Highlights</h2>
        <ul>
          <li>Arctic Code Vault Contributor</li>
        </ul>
      </div>
    </section>
    <div class="tabs-nav-wrapper hide-desktop">
      <nav class="tabs-nav">
        <div class="main-tabs">
          <button class="main-tab-item">
            <span>Overview</span>
          </button>
          <button class="main-tab-item main-tab-item-active">
            <span>Repositories</span>
          </button>
          <button class="main-tab-item">
            <span>Projects</span>
          </button>
          <button class="main-tab-item">
            <span>Packages</span>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    async getUser() {
      await this.$store.dispatch('getUserData')
    },
  },
  async created() {
    await this.getUser()
    console.log(this.user)
  },
  computed: {
    ...mapState(['user', 'loading']),
  },
}
</script>

<style scoped>
.hr {
  opacity: 0.4;
}
.highlight {
  margin: 8px 0;
}
.highlight h2 {
  font-weight: 600;
  font-size: 16px !important;
  margin-bottom: 8px !important;
}
.highlight ul li {
  font-size: 14px;
}
.location {
  margin-left: 6px;
}
.company {
  font-weight: 600;
  color: black;
}
.social {
  color: #586069 !important;
  font-size: 14px;
  margin-bottom: 19px;
}

.social div {
  margin-bottom: 10px;
}
.social div i {
  margin-right: 10px;
}
.user-stat {
  margin-bottom: 19px;
}
.followers {
  white-space: nowrap !important;
  text-decoration: none !important;
  color: #586069 !important;
  font-size: 14px;
}

.followers span {
  font-weight: 600 !important;
  color: black;
}
.edit-profile-btn {
  padding: 7px 16px;
  font-weight: 500 !important;
  border: 1px solid;
  border-radius: 6px;

  margin: 16px 0 !important;
  background-color: #fafbfc;
  display: block;
  width: 100%;
  text-align: center;
  color: var(--color-btn-text);
  background-color: #fafbfc;
  border-color: rgba(27, 31, 35, 0.15);
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
}
#userAvatar {
  max-width: 100%;
  height: auto;
}
.main-tabs {
  display: flex;
}
.main-tab-item {
  padding: 10px 20px;
  border-bottom: 2px solid transparent;
  color: var(--gh-mid-gray);
  font-size: 1.01rem;
  display: flex;
  align-items: center;
}
.main-tab-item > img {
  margin-right: 10px;
}
.main-tab-item-active {
  border-bottom-color: var(--gh-orange);
  color: var(--gh-deep-gray);
  font-weight: 600;
}

.main-content {
  position: relative;
  padding-top: 10px;
}
@media screen and (min-width: 768px) {
  .profile {
    display: block !important;
  }

  .profile-name {
    padding-left: 0;
  }

  .profile-username {
    padding-left: 0;
  }
  .profile-image-container {
    width: 200px;
    height: 200px;
    position: relative;
    top: -40px;
    left: 0px;
    z-index: 3;
  }
}

.profile {
  display: flex;
}

.profile-image-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rebeccapurple;
  overflow: hidden;
  margin-top: 10px;
  float: right;
}
.profile-name {
  font-weight: 600;
  font-size: 26px;
  line-height: 1.25;
  color: var(--gh-deep-gray);
  padding: 5px 20px;
}
.profile-username {
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;

  color: var(--gh-mid-gray);
  padding: 5px 20px;
}
.bio {
  color: var(--gh-deep-gray);
  margin-top: 10px;
  line-height: 1.5;
}
</style>