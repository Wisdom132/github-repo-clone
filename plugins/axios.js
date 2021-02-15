export default function ({
  $axios
}) {
  $axios.onRequest(config => {

    config.headers['Authorization'] = `bearer 1c4870f87ca4e8a49691f9d4cfc7b5cbe30a71da`

  })

}
