module.exports.validateAsset = (assetObj) => {
  const {
    assetName,
    assetAbbreviation,
    p2pCommission,
    withdrawCommission,
    affiliateBuyRate,
    affiliateSellRate,
    voremBuyRate,
    voremSellRate,
  } = assetObj;

  if (!assetName) {
    throw new Error(`asset Name must  be provided .`);
  }
  if (assetName.length < 2) {
    throw new Error(`asset must be at least 2 characters long.`);
  }
  if (!assetAbbreviation) {
    throw new Error(`asset Abbreviation must be provided.`);
  }
  if (assetAbbreviation.length < 2) {
    throw new Error(`asset be at least 2 characters long.`);
  }
  if (!affiliateBuyRate) {
    throw new Error(`Affiliate Buy Rate name must be provided.`);
  }
  if (!affiliateSellRate) {
    throw new Error(`Affiliate Sell Rate must be provided.`);
  }
  if (!withdrawCommission) {
    throw new Error(`withdraw Commission name must be provided.`);
  }
  if (!p2pCommission) {
    throw new Error(`p2p Commission number must be provided.`);
  }
  if (!voremSellRate) {
    throw new Error(`vorem sell Rate code must be provided.`);
  }
  if (!voremBuyRate) {
    throw new Error(`vorem Buy Rate code must be provided.`);
  }
};

module.exports.validateUser = (userObj) => {
  const {
    body: {
      firstName,
      lastName,
      phone,
      email,
      username,
      country,
      countryCode,
      password,
    },
  } = userObj;
  if (!username) {
    return { isUserValid: false, body: `User Name must  be provided .` };
  }
  if (username.length < 2) {
    return {
      isUserValid: false,
      body: `username must be at least 2 characters long.`,
    };
  }
  if (!password) {
    return { isUserValid: false, body: `Password must  be provided .` };
  }
  if (password.length < 8) {
    return {
      isUserValid: false,
      body: `password must be at least 8 characters long.`,
    };
  }
  const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  if (!valid.test(email)) {
    return { isUserValid: false, body: "Invalid contact email address." };
  }
  // if (!firstName) {
  //   return { isUserValid: false, body: `first name must be provided.` };
  // }
  // if (!lastName) {
  //   return { isUserValid: false, body: `first name must be provided.` };
  // }
  // if (!phone) {
  //   return { isUserValid: false, body: `phone number must be provided.` };
  // }
  // if (!countryCode) {
  //   return { isUserValid: false, body: `country code must be provided.` };
  // }
  // if (!country) {
  //   return { isUserValid: false, body: `country must be provided.` };
  // }

  return { isUserValid: true, body: `User detail is valid.` };
};
