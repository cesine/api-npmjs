'use strict';

const registry = require('./registry');
const packagesModels = require('../models/packagesModel');

function fetchPackageInfo(opts, callback) {
  const registryInstance = registry.getRegistry();
  registryInstance.packages.get(opts.package, (err, data) => {
    if (err) {
      return callback(err);
    }
    if (data[0].error !== undefined) {
      const error = new Error(data[0].error);
      return callback(error);
    }
    // Massage data
    const formattedData = packagesModels.formatData(data[0]);
    return callback(null, formattedData);
  });
}

function fetchPackageDepended(opts, callback) {
  const registryInstance = registry.getRegistry();
  registryInstance.packages.depended(opts.package, (err, data) => {
    if (err) {
      return callback(err);
    }
    if (data[0].error !== undefined) {
      const error = new Error(data[0].error);
      return callback(error);
    }
    return callback(null, data);
  });
}

function fetchPackageStarred(opts, callback) {
  const registryInstance = registry.getRegistry();
  registryInstance.packages.starred(opts.package, (err, data) => {
    if (err) {
      return callback(err);
    }
    if (data[0].error !== undefined) {
      const error = new Error(data[0].error);
      return callback(error);
    }
    return callback(null, data);
  });
}

function fetchPackageKeyword(opts, callback) {
  const registryInstance = registry.getRegistry();
  registryInstance.packages.keyword(opts.package, (err, data) => {
    if (err) {
      return callback(err);
    }
    if (data[0].error !== undefined) {
      const error = new Error(data[0].error);
      return callback(error);
    }
    return callback(null, data);
  });
}

module.exports = {
  fetchPackageInfo,
  fetchPackageDepended,
  fetchPackageStarred,
  fetchPackageKeyword
};
