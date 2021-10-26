module.exports.validateAilment = (dataObj) => {
    const {
      body: { ailmentName },
    } = dataObj;
    if (!ailmentName) {
      return { status: false, body: 'Please enter name of ailment' };
    }
     
    return { status: true, body: 'valid' };
  };
  