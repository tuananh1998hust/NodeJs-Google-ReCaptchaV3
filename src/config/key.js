// Key :
const Key = {
  siteKeyCaptcha:
    process.env.SITE_KEY_CAPTCHA || '6Ldj38MUAAAAAK_PV7rhxH_y6mW-DQKSdrUU1aq6',
  secretKeyCaptcha:
    process.env.SECRET_KEY_CAPTCHA ||
    '6Ldj38MUAAAAAEoULQ-MwqonY0d1YelXhH52pX3q',
  port: process.env.PORT || 5000,
};

export default Key;
