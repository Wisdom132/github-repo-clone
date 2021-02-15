export default class github {
    /**
     * @constructor
     */
    constructor(api) {
        this.http = api
    }

    userData() {
        return this.http.get(`/user`)
    }

    userRepos() {
        return this.http.get(`/user/repos?per_page=20&sort=assending`)
    }
}
