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
    'AngularJS_Production_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490972d6c7e88c2177c708_angularjs_prod_gcp.json',
    'AngularJS_Production_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490972a3be0138c6d37c42_angularjs_prod_aws.json',
		'AngularJS_Production_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/644909729e63b8bee78b072e_angularjs_prod_azure.json',
    'AngularJS_Staging_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/644909724e907d99379d6be3_angularjs_stag_gcp.json',
    'AngularJS_Staging_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa967776ed9e53d7f_6.json',
		'AngularJS_Staging_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490972f04e2500e20ea1bb_angularjs_stag_azure.json',
    'AngularJS_Ephemeral Environment_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa96777321fe53d92_18.json',
    'AngularJS_Ephemeral Environment_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490972fa9e892327ac5a19_angularjs_eph_aws.json',
		'AngularJS_Ephemeral Environment_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa967770e40e53d8f_21.json',
    'NodeJS_Production_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa96777c726e53d97_23.json',
    'NodeJS_Production_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa967777843e53d98_25.json',
		'NodeJS_Production_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa967778558e53d7e_7.json',
    'NodeJS_Staging_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa967778113e53d96_22.json',
    'NodeJS_Staging_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa967775024e53d9a_26.json',
		'NodeJS_Staging_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490a66598f878cfc8300b3_nodejs_stag_azure.json',
    'NodeJS_Ephemeral Environment_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490a6735d6ffaf5152359f_nodejs_eph_gcp.json',
    'NodeJS_Ephemeral Environment_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490a669607dd2720e6f830_nodejs_eph_aws.json',
		'NodeJS_Ephemeral Environment_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa967777683e53d8a_8.json',
    'Spring Boot..Kafka_Production_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490b4e649dfb369a0b19a4_spring-kafka_prod_gcp.json',
    'Spring Boot..Kafka_Production_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490b4e172d4d405844da81_spring-kafka_prod_aws.json',
		'Spring Boot..Kafka_Production_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/6449076162de5e13ac860c73_spring-dns_prod_azure.json',
    'Spring Boot..Kafka_Staging_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490b4ec5a8a1676ac138c2_spring-kafka_stag_gcp.json',
    'Spring Boot..Kafka_Staging_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490b4e8eb56d6c768556eb_srping-kafka_stag_aws.json',
		'Spring Boot..Kafka_Staging_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa9677765c4e53d78_9.json',
    'Spring Boot..Kafka_Ephemeral Environment_GCP': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa96777c10ee53d95_24.json',
    'Spring Boot..Kafka_Ephemeral Environment_AWS': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64462c9aa96777199ce53d99_27.json',
		'Spring Boot..Kafka_Ephemeral Environment_Azure': 'https://uploads-ssl.webflow.com/64462c9aa967776f20e53b43/64490b4e9607dd243de7079d_spring-kafka_eph_azure.json',
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
