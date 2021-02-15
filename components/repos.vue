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

    <div class="repo" v-for="i in 10" :key="i">
      <div class="repo-main-data">
        <div class="repo-data">
          <a href="#" class="repo-name">chaka</a>
          <p class="repo-description">
            Simple application with electronjs and vuejs
          </p>
        </div>
        <button class="star-button">
          <img src="icons/star.svg" alt="star icon" />
          <span>Star</span>
        </button>

        <!-- <img src="icons/activity.svg" height="30" width="40" alt="" /> -->
      </div>
      <div class="repo-meta">
        <div class="repo-language">
          <span style="background: red" class="repo-language-color"></span>
          <span class="repo-language-text">Typescript</span>
        </div>
        <div class="repo-stars">
          <img src="icons/star.svg" alt="star icon" />
          <span>100</span>
        </div>
        <div class="updated">
          <span>Updated on Jan 13</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Type from './dropdowns/type'
import Language from './dropdowns/language'

export default {
  components: { Type, Language },
}
</script>

<style scoped>
.btn-wrapper {
  display: flex;
  margin-top: 2px;
}
.new-btn {
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
  margin-bottom: 20px;
}
.repo-data > :not(:last-child) {
  display: block;
  margin-bottom: 20px;
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