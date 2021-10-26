module.exports.validateAppointment = (userObj) => {
  const {
    body: { ailmentId, patientId, doctorId },
  } = userObj;
  if (!ailmentId) {
    return [true, `ailmentId must  be provided.`];
  }
  if (!patientId) {
    return [true, `patientId must be provided.`];
  }
  if (!doctorId) {
    return [true, `doctorId must  be provided.`];
  }

  return [false, `appointment detail is valid.`];
};
