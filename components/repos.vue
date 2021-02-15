<template>
  <section id="repoList" class="repo-list">
    <div class="repo-search-container">
      <label
        ><input
          class="repo-search-input"
          type="text"
          placeholder="Find a repository..."
      /></label>

      <div class="btn-wrapper">
        <Type />
        <Language />
        <button class="new-btn"><i class="fas fa-book"></i> New</button>
      </div>
    </div>

    <div class="repo" v-for="(item, i) in repos" :key="i">
      <div class="repo-main-data">
        <div class="repo-data">
          <a href="#" class="repo-name"
            >{{ item.name }}
            <span v-if="item.private" class="private">Private</span>
          </a>
          <p class="repo-description">
            {{ item.description }}
          </p>
        </div>
        <button class="star-button">
          <img src="icons/star.svg" alt="star icon" />
          <span>Star</span>
        </button>
      </div>
      <img src="icons/activity.svg" alt="" />

      <div class="repo-meta">
        <div class="repo-language">
          <span style="background: red" class="repo-language-color"></span>
          <span class="repo-language-text">{{ item.language }}</span>
        </div>
        <div class="repo-stars">
          <img src="icons/star.svg" alt="star icon" />
          <span>{{ item.stargazers_count }}</span>
        </div>
        <div class="updated">
          <span
            >Updated on
            {{ $moment(item.updated_at, 'YYYYMMDD').fromNow() }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Type from './dropdowns/type'
import Language from './dropdowns/language'
import { mapState } from 'vuex'

export default {
  components: { Type, Language },
  data() {
    return {}
  },
  methods: {
    async getRepos() {
      await this.$store.dispatch('getUserRepos')
    },
  },
  async created() {
    await this.getRepos()
  },
  computed: {
    ...mapState(['repos', 'loading']),
  },
}
</script>

<style scoped>
.private {
  border: 1px solid var(--gh-light-gray);
  margin-left: 8px;
  padding: 3px 6px;
  color: var(--gh-mid-gray);
  border-radius: 2em;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  font-weight: 500;
}
.repo-meta {
  font-size: 12px;
}
.btn-wrapper {
  display: flex;
  margin-top: 2px;
}
.new-btn {
  white-space: nowrap;
  margin-right: 14px;
  font-size: 14px;
  background-color: #2ea44f;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 6px;
  color: var(--default-light);
  border: 1px solid var(--gh-light-gray);
}
label {
  width: 60%;
  margin-right: 14px;
}
@media screen and (max-width: 900px) {
  .repo-search-container {
    display: block !important;
  }
  .repo-search-container label {
    margin-bottom: 19px;
  }
}

.repo-search-container {
  display: flex;
  padding: 15px 0px;
  width: 100%;
  border-bottom: 1px solid var(--gh-light-gray);
}
.repo-search-input {
  width: 100%;
  border-radius: 5px;
  border: 1.2px solid var(--gh-light-gray);
  padding: 8px 16px;
}

.repo {
  padding: 25px 0px;
  border-bottom: 1px solid var(--gh-light-gray);
}
.repo-main-data {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
}
.repo-data > :not(:last-child) {
  display: block;
  /* margin-bottom: 20px; */
}

.repo-name {
  color: var(--gh-blue);
  font-weight: 600;
  word-break: break-all !important;
  font-size: 20px;
  text-decoration: none;
}
.repo-name:hover {
  text-decoration: underline;
  opacity: 1;
}

.repo-description {
  color: var(--gh-mid-gray);
  font-size: 15px;
  margin-top: 10px;
}

.repo-meta {
  color: var(--gh-mid-gray);
  display: flex;
  align-items: center;
}
.repo-meta > * {
  display: flex;
  align-items: center;
}
.repo-meta > :not(:last-child) {
  margin-right: 20px;
}
.repo-meta > * > * {
  margin-right: 4px;
}
.repo-language-color {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid var(--gh-light-gray);
  border-radius: 50%;
}

.star-button {
  padding: 5px;
  flex: 0 0 75px;
  background: var(--gh-off-white);
  color: var(--gh-deep-gray);
  border-radius: 4px;
  border: 1.8px solid var(--gh-light-gray);
}
.star-button img {
  vertical-align: bottom;
}
</style>