export default function ({
  $axios
}) {
  $axios.onRequest(config => {

    config.headers['Authorization'] = `bearer e847f382d18e95638f225285e562049cc4d43773`

  })

}
