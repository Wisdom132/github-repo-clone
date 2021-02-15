export default function ({
  $axios
}) {
  $axios.onRequest(config => {

    config.headers['Authorization'] = `bearer ce9fa0aeb61aa2d8614dcdc084f72984e439b26a`

  })

}
