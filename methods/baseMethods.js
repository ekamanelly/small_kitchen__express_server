const BaseMethods = {
  createData: async function (model, data) {
    try {
      let query = await model.create(data);
      if (query) {
        return { status: true, body: query };
      }
    } catch (error) {
      console.log(error);
      return { status: false, body: error.message };
    }
  },
  findDataById: async function (model, id, populateData) {
    try {
      let query;
      if (populateData === undefined) {
        query = await model.findById(id);
      } else {
        query = await model.findById(id).populate({
          path: populateData.path,
          model: populateData.model,
          select: populateData.select,
        });
      }

      if (query) {
        return { status: true, body: query };
      } else {
        return { status: false, body: null };
      }
    } catch (error) {
      // console.log(error);
      return { status: false, body: error.message };
    }
  },
  findOneData: async function (model, params, populateData, populateDataTwo) {
    try {
      let query;
      if (populateData && populateDataTwo) {
        query = await model
          .findOne(params)
          .populate({
            path: populateData.path,
            model: populateData.model,
            select: populateData.select,
          })
          .populate({
            path: populateDataTwo.path,
            model: populateDataTwo.model,
            select: populateDataTwo.select,
          });
      } else if (populateData) {
        query = await model.findOne(params).populate({
          path: populateData.path,
          model: populateData.model,
          select: populateData.select,
        });
      } else {
        query = await model.findOne(params);
      }
      // let query = await model.findOne(params);

      if (query) {
        return { status: true, body: query };
      } else {
        return { status: false, body: null };
      }
    } catch (error) {
      return { status: false, body: error.message };
    }
  },

  findManyData: async function (model, params, populateData) {
    try {
      let query;
      if (populateData === undefined) {
        query = await model.find(params);
      } else {
        query = await model.find(params).populate({
          path: populateData.path,
          model: populateData.model,
          select: populateData.select,
        });
      }
      // let query = await model.find(params);

      if (query) {
        return { status: true, body: query };
      } else {
        return { status: false, body: null };
      }
    } catch (error) {
      return { status: false, body: error.message };
    }
  },
  updateDataByParam: async function (model, body) {
    try {
      const { _id } = body;
      let query = await model.updateOne({ _id }, body);

      if (query.n > 0) {
        return { status: true, body: query };
      } else {
        return { status: false, body: null };
      }
    } catch (error) {
      return { status: false, body: error.message };
    }
  },

  findDataWithTwoPopulate: async function (
    model,
    params,
    firstPopulate,
    secondPopulate
  ) {
    try {
      let query = await model
        .find(params)
        .populate({
          path: firstPopulate.path,
          model: firstPopulate.model,
          select: firstPopulate.select,
        })
        .populate({
          path: secondPopulate.path,
          model: secondPopulate.model,
          select: secondPopulate.select,
        });

      if (query.length > 0) {
        return { status: true, body: query };
      } else {
        return { status: false, body: null };
      }
    } catch (error) {
      return { status: false, body: error.message };
    }
  },
};
module.exports = BaseMethods;
