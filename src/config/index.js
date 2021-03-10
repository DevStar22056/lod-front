const config = require(`./${process.env.VUE_APP_ENVIRONMENT}`)
  .default;
console.log(process.env.VUE_APP_ENVIRONMENT);
export default config;
