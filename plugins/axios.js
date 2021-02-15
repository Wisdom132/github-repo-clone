export default function ({
  $axios
}) {
  $axios.onRequest(config => {

    config.headers['Authorization'] = `bearer ${process.env.GH_KEY}`

  })

}
