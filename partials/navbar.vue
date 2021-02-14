<template>
  <header>
    <nav class="main-nav">
      <div class="container">
        <div class="nav-content">
          <i class="fas fa-bars hide-desktop menu-bar"></i>
          <div class="nav-items">
            <a class="nav-link" href="#">
              <img class="git-logo" src="icons/gh-icon.svg" alt="Github logo" />
            </a>

            <label class="header-search-wrapper form-control d-flex hide-mobile"
              ><input
                class="nav-input-field form-control"
                type="text"
                placeholder="Search or jump to..."
              />
              <img
                src="https://github.githubassets.com/images/search-key-slash.svg"
                class="mr-2 input-slash"
                alt=""
              />
            </label>

            <ul class="nav-links hide-mobile">
              <li class="nav-link">
                <a href="#">Pull requests</a>
              </li>
              <li class="nav-link">
                <a href="#">Issues</a>
              </li>
              <li class="nav-link">
                <a href="#">Marketplace</a>
              </li>
              <li class="nav-link">
                <a href="#">Explore</a>
              </li>
            </ul>
          </div>

          <div class="nav-items">
            <div class="noti-wrapper">
              <div class="dot"></div>
              <img class="bell-svg" src="/icons/bell.svg" alt="bell icon" />
            </div>
            <button class="hide-mobile">
              <img src="icons/plus.svg" alt="plus icon" />
              <img src="icons/caret-down.svg" alt="dropdown icon" />
            </button>
            <button class="hide-mobile">
              <div class="nav-user-logo-wrapper">
                <img id="navAvatar" src="" alt="profile-logo" class="" />
              </div>

              <img src="icons/caret-down.svg" alt="dropdown icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="nav-spacer hide-mobile"></div>
  </header>
</template>
<style scoped>
.noti-wrapper {
  display: flex;
  margin-top: 4px;
}
.dot {
  height: 10px;
  width: 10px;
  position: relative;
  bottom: 5px;
  right: -16px;
  border-radius: 50%;
  background-image: linear-gradient(#54a3ff, #006eed);
}
.menu-bar {
  color: #ffffff;
  font-size: 22px;
  font-weight: 900;
}
.header-search-wrapper {
  display: flex;
  justify-content: space-between !important;
  align-items: center !important;
  position: relative;
  padding: 0;
  width: 100%;
  min-height: 28px;
  max-width: 100%;
  font-weight: 400;
  vertical-align: middle;
  background-color: transparent;
  border: 1px solid var(--gh-mid-gray);
  box-shadow: none;
}

label input {
  display: table-cell;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  background: none;
  border: 0;
  box-shadow: none;
  width: 240px;
}

input::placeholder {
  color: #ffffff !important;
}
.nav-input-field:focus {
  background: #fff;
}

.input-slash {
  margin-right: 8px !important;
  border-style: none;
}
.git-logo {
  height: 32px;
  width: 32px;
}
.main-nav {
  height: 60px;
  background: var(--gh-deep-gray);
}
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.nav-items > * {
  margin-right: var(--nav-spacing);
}

.nav-items {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-link {
  margin-right: var(--nav-spacing);
  font-weight: 500;
  white-space: nowrap;
}

.nav-link a {
  color: #ffffff;
  text-decoration: none;
}

.nav-user-logo-wrapper {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
}
.nav-spacer {
  height: 40px;
}
.bell-svg {
  height: 16px;
  width: 16px;
}
</style>

