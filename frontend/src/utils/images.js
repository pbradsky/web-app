

const getImages = async (storage, uid) => {
    const errors = [];
    let proofOfInsurance, driversLicenseBack, driversLicenseFront;
    const proofOfInsuranceRef = storage.child(`images/${uid}/proof_of_insurance`);
    const driversLicenseBackRef = storage.child(`images/${uid}/drivers_license_back`);
    const driversLicenseFrontRef = storage.child(`images/${uid}/drivers_license_front`);

    const promise0 = new Promise((resolve, reject) => {
      proofOfInsuranceRef.getDownloadURL().then(proofOfInsuranceURL => {
        proofOfInsurance = proofOfInsuranceURL;
        resolve(proofOfInsuranceURL);
      }).catch(err => reject(err));
    }).catch(err => {
      switch (err.code) {
        case 'storage/object-not-found':
          errors.push('Proof of Insurance not found');
          break;
        default:
          errors.push('Error retrieving Proof of Insurance');
      }
      console.log(err);
    });

    const promise1 = new Promise((resolve, reject) => {
      driversLicenseBackRef.getDownloadURL().then(driversLicenseBackURL => {
        driversLicenseBack = driversLicenseBackURL;
        resolve(driversLicenseBackURL);
      }).catch(err => reject(err));
    }).catch(err => {
      switch (err.code) {
        case 'storage/object-not-found':
          errors.push('Driver\'s License (back) not found');
          break;
        default:
          errors.push('Error retrieving Driver\'s License (back)');
      }
      console.log(err);
    });

    const promise2 = new Promise((resolve, reject) => {
      driversLicenseFrontRef.getDownloadURL().then(driversLicenseFrontURL => {
        driversLicenseFront = driversLicenseFrontURL;
        resolve(driversLicenseFrontURL);
      }).catch(err => reject(err));
    }).catch(err => {
      switch (err.code) {
        case 'storage/object-not-found':
          errors.push('Driver\'s License (front) not found');
          break;
        default:
          errors.push('Error retrieving Driver\'s License (front)');
      }
      console.log(err);
    });

    await Promise.all([promise0, promise1, promise2]);
    return {
        proofOfInsurance: proofOfInsurance, 
        driversLicenseBack: driversLicenseBack, 
        driversLicenseFront: driversLicenseFront, 
        errors: errors
    };
  }

  export {getImages}; 	