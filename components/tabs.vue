<template>
  <div class="tabs-nav-wrapper hide-mobile">
    <div class="container">
      <nav class="tabs-nav">
        <div class="left-menu hide-mobile"></div>
        <div class="main-tabs">
          <button class="main-tab-item">
            <img src="icons/overview.svg" alt="overview icon" />
            <span>Overview</span>
          </button>
          <button class="main-tab-item main-tab-item-active">
            <span>
              <img
                src="icons/activity.svg"
                class="repo-svg"
                alt="repositories_icon"
              />
              <b>Repositories</b>
              <span class="repos">{{
                Number(this.user.owned_private_repos + this.user.public_repos)
              }}</span>
            </span>
          </button>
          <button class="main-tab-item">
            <img src="icons/projects.svg" alt="projects icon" />
            <span>Projects</span>
          </button>
          <button class="main-tab-item">
            <img src="icons/packages.svg" alt="packages icon" />
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
  },
  computed: {
    ...mapState(['user', 'loading']),
  },
}
</script>

<style  scoped>
.repo-svg {
  position: relative;
  top: 5px;
}
.repos {
  background-color: var(--gh-light-gray);
  padding: 3px 6px;
  /* min-width: 20px; */
  border-radius: 2em;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  font-weight: 500;
}
.tabs-nav-wrapper {
  position: sticky;
  top: 0;
  z-index: 1;
  border-bottom: 1px solid var(--gh-light-gray);
  background: #fff;
}
.tabs-nav {
  display: flex;
  height: 60px;
}
.main-tabs {
  display: flex;
}
.main-tab-item {
  padding: 10px 20px;
  border-bottom: 2px solid transparent;
  color: var(--gh-mid-gray);
  font-size: 0.9rem;
  display: flex;
  align-items: flex-end;
}
.main-tab-item > img {
  margin-right: 10px;
}
.main-tab-item-active {
  border-bottom-color: var(--gh-orange);
  color: var(--gh-deep-gray);
  font-weight: 600;
}
</style>