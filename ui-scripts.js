const appSelect = document.getElementById('app-select');
const envSelect = document.getElementById('env-select');
const providerSelect = document.getElementById('provider-select');

  // Define the unique text-strings for every combination of select fields
const textStrings = {
    Python_Production_GCP: 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716c041bb767ead462aa_python_prod_gcpspotlight-ewa-26May23.json',
    Python_Production_AWS: 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716c041bb767ead4629e_python_prod_awsspotlight-ewa-26May23.json',
Python_Production_Azure: 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716d55379a10a0d30868_python_prod_azurespotlight-ewa-26May23.json',
    Python_Staging_GCP: 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716e6a9d1c73f49ffa4b_python_staging_gcpspotlight-ewa-26May23.json',
    Python_Staging_AWS: 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716e50825663928c3e60_python_staging_awsspotlight-ewa-26May23.json',
	Python_Staging_Azure: 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716e6201b89f5f322f8f_python_staging_azurespotlight-ewa-26May23.json',
    'Python_Ephemeral Environment_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716cdeace073b83be538_python_eph_gcpspotlight-ewa-26May23.json',
    'Python_Ephemeral Environment_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716b66f54a74b26d332d_python_eph_awsspotlight-ewa-26May23.json',
	'Python_Ephemeral Environment_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716c85072710b1b7bfe3_python_eph_azurespotlight-ewa-26May23.json',
    'Spring Boot..DNS_Production_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707171de20455aa63b9ef5_springboot_prod_gcpspotlight-ewa-26May23.json',
    'Spring Boot..DNS_Production_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490761a0b4f7c1226eb55f_spring-dns_prod_aws.json',
	'Spring Boot..DNS_Production_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707171862cc20af32f9872_springboot_prod_azurespotlight-ewa-26May23.json',
    'Spring Boot..DNS_Staging_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707171041bb767ead4665d_springboot_staging_gcpspotlight-ewa-26May23.json',
    'Spring Boot..DNS_Staging_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707171de20455aa63b9f46_springboot_staging_awsspotlight-ewa-26May23.json',
	'Spring Boot..DNS_Staging_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707171c22911c855724af4_springboot_staging_azurespotlight-ewa-26May23.json',
    'Spring Boot..DNS_Ephemeral Environment_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/647071716201b89f5f323151_springboot_eph_gcpspotlight-ewa-26May23.json',
    'Spring Boot..DNS_Ephemeral Environment_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707171eb26aa9e17b3a9c8_springboot_eph_azurespotlight-ewa-26May23.json',
	'Spring Boot..DNS_Ephemeral Environment_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490760f38e2c351ec28cfe_spring-dns_eph_azure.json',
    'ReactJS_Production_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716e862cc20af32f9715_reactjs_prod_gcpspotlight-ewa-26May23.json',
    'ReactJS_Production_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716ed45e8664ecd0fd2a_reactjs_prod_awsspotlight-ewa-26May23.json',
	'ReactJS_Production_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716ed3b6b46a2196efc4_reactjs_prod_azurespotlight-ewa-26May23.json',
    'ReactJS_Staging_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716eb9d9e13ff8f3be91_reactjs_staging_gcpspotlight-ewa-26May23.json',
    'ReactJS_Staging_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716ea8708e16d1c056df_reactjs_staging_awsspotlight-ewa-26May23.json',
	'ReactJS_Staging_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716e8fe92eec9c97c9cf_reactjs_staging_azurespotlight-ewa-26May23.json',
    'ReactJS_Ephemeral Environment_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716e3f6ba1683110b321_reactjs_eph_gcpspotlight-ewa-26May23.json',
    'ReactJS_Ephemeral Environment_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716ed3b6b46a2196ef90_reactjs_eph_awsspotlight-ewa-26May23.json',
	'ReactJS_Ephemeral Environment_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716e85072710b1b7c223_reactjs_eph_azurespotlight-ewa-26May23.json',
    'AngularJS_Production_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716ab2dcd33f8b6083b3_angularjs_prod_gcpspotlight-ewa-26May23.json',
    'AngularJS_Production_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716adeace073b83be37d_angularjs_prod_awsspotlight-ewa-26May23.json',
	'AngularJS_Production_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716a9be7214cf9ae0b5f_angularjs_prod_azurespotlight-ewa-26May23.json',
    'AngularJS_Staging_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/647071697d120de0b9e0bc9c_angularjs_staging_gcpspotlight-ewa-26May23.json',
    'AngularJS_Staging_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707169de20455aa63b997b_angularjs_staging_awsspotlight-ewa-26May23.json',
	'AngularJS_Staging_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490972f04e2500e20ea1bb_angularjs_stag_azure.json',
    'AngularJS_Ephemeral Environment_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716a6b25b30b3bb5f9da_angularjs_eph_gcpspotlight-ewa-26May23.json',
    'AngularJS_Ephemeral Environment_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707169a558edee240692c2_angularjs_eph_awsspotlight-ewa-26May23.json',
	'AngularJS_Ephemeral Environment_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707169de20455aa63b98b7_angularjs_eph_azurespotlight-ewa-26May23.json',
    'NodeJS_Production_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716ba93d52282e93c77c_nodejs_prod_gcpspotlight-ewa-26May23.json',
    'NodeJS_Production_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716be005606711e5a157_nodejs_prod_awsspotlight-ewa-26May23.json',
	'NodeJS_Production_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716ba558edee24069609_nodejs_prod_azurespotlight-ewa-26May23.json',
    'NodeJS_Staging_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716b6bdce5668c7b9c90_nodejs_staging_gcpspotlight-ewa-26May23.json',
    'NodeJS_Staging_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716b2718a7b0ddfbbb30_nodejs_staging_awsspotlight-ewa-26May23.json',
	'NodeJS_Staging_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716ba61024d9b3f7b801_nodejs_staging_azurespotlight-ewa-26May23.json',
    'NodeJS_Ephemeral Environment_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716ab2dcd33f8b6083c6_nodejs_eph_gcpspotlight-ewa-26May23.json',
    'NodeJS_Ephemeral Environment_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707169c22911c855724435_nodejs_eph_awsspotlight-ewa-26May23.json',
	'NodeJS_Ephemeral Environment_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470716a6a9d1c73f49ff6b1_nodejs_eph_azurespotlight-ewa-26May23.json',
    'Spring Boot..Kafka_Production_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/647071778fe92eec9c97d13a_springboot-kafka_prod_gcpspotlight-ewa-26May23.json',
    'Spring Boot..Kafka_Production_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707175a82b00b269bfc9ab_springboot-kafka_prod_awsspotlight-ewa-26May23.json',
	'Spring Boot..Kafka_Production_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707175937a5e96dec6a47c_springboot-kafka_prod_azurespotlight-ewa-26May23.json',
    'Spring Boot..Kafka_Staging_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470717826e5e315462f2d42_springboot-kafka_staging_gcpspotlight-ewa-26May23.json',
    'Spring Boot..Kafka_Staging_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707177862cc20af32f9cc9_springboot-kafka_staging_awsspotlight-ewa-26May23.json',
	'Spring Boot..Kafka_Staging_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6470717894e750c347b2d15a_springboot-kafka_staging_azurespotlight-ewa-26May23.json',
    'Spring Boot..Kafka_Ephemeral Environment_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707171de20455aa63b9f50_springboot-kafka_eph_gcpspotlight-ewa-26May23.json',
    'Spring Boot..Kafka_Ephemeral Environment_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/647071719be7214cf9ae1ba5_springboot-kafka_eph_awsspotlight-ewa-26May23.json',
	'Spring Boot..Kafka_Ephemeral Environment_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64707171a1ed9ddfeb36d300_springboot-kafka_eph_azurespotlight-ewa-26May23.json',
  };

function reloadLottiePlayer() {
  const selectedApp = appSelect.value;
  const selectedEnv = envSelect.value;
  const selectedProvider = providerSelect.value;

  const textString = `${selectedApp}_${selectedEnv}_${selectedProvider}`;
  const src = textStrings[textString];

  const lottiePlayer = document.getElementById("lottie-player-src");
  const lottiePlayerHeight = lottiePlayer.clientHeight;

  lottiePlayer.remove();
  document.getElementById('lottie-player-wrapper').innerHTML = `<lottie-player id="lottie-player-src" src="${src}" background="transparent" speed="1" style="width: 100%; height: 100%; min-height: ${lottiePlayerHeight}px;" autoplay=""></lottie-player>`;
}
appSelect.addEventListener('change', reloadLottiePlayer);
envSelect.addEventListener('change', reloadLottiePlayer);
providerSelect.addEventListener('change', reloadLottiePlayer);
