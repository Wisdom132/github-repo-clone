<template>
  <div>
    <section class="left-menu">
      <div class="profile">
        <div class="profile-image-container">
          <img
            id="userAvatar"
            src="https://avatars.githubusercontent.com/u/42722372?s=460&u=72f32cb96ee50cfe90119efc6b358b35c4b66df7&v=4"
            alt="avatar"
          />
        </div>
        <div class="names-username">
          <p id="name" class="profile-name">Wisdom Ekpot</p>
          <p id="username" class="profile-username">Wisdom132</p>
        </div>
      </div>
      <p id="bio" class="bio">Stick with me and you'll be fat🤓</p>
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
export default {}
</script>

<style scoped>
#userAvatar {
  max-width: 100%;
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
}
.profile-name {
  font-weight: 600;
  font-size: 1.7rem;
  color: var(--gh-deep-gray);
  padding: 5px 20px;
}
.profile-username {
  font-weight: 300;
  font-size: 1.5rem;
  color: var(--gh-mid-gray);
  padding: 5px 20px;
}
.bio {
  color: var(--gh-deep-gray);
  margin-top: 10px;
  line-height: 1.5;
}
</style>