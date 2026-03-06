import geoip from 'geoip-lite';
import './i18n_BuYowHj0.mjs';

const ENGLISH_SPEAKING_COUNTRIES = [
  "US",
  "GB",
  "CA",
  "AU",
  "NZ",
  "IE",
  "ZA",
  "JM",
  "BZ",
  "BS",
  "BB",
  "AG",
  "DM",
  "GD",
  "KN",
  "LC",
  "VC",
  "TT",
  "GY"
];
const SPANISH_SPEAKING_COUNTRIES = [
  "HN",
  "ES",
  "MX",
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "SV",
  "GT",
  "NI",
  "PA",
  "PY",
  "PE",
  "PR",
  "UY",
  "VE"
];
function detectCountry(ip) {
  try {
    const geo = geoip.lookup(ip);
    return geo?.country || null;
  } catch (error) {
    console.error("Error detecting country:", error);
    return null;
  }
}
function getDefaultLocaleByCountry(countryCode) {
  if (!countryCode) return "es";
  if (ENGLISH_SPEAKING_COUNTRIES.includes(countryCode)) {
    return "en";
  }
  if (SPANISH_SPEAKING_COUNTRIES.includes(countryCode)) {
    return "es";
  }
  return "es";
}
function detectLocale(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : request.headers.get("cf-connecting-ip") || "127.0.0.1";
  const countryCode = detectCountry(ip);
  const locale = getDefaultLocaleByCountry(countryCode);
  return { locale, ip, country: countryCode };
}

export { detectLocale as d };
