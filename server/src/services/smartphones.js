const AlreadyExistError = require('../errors/already-exist-error');
const smartphonesRepository = require('../repositories/smartphones');

module.exports.create = async (smartphoneData) => {
    const isExistParams = Object.assign({}, smartphoneData);
    delete isExistParams['images'];
    console.log(smartphoneData)
    const foundSmartphone = await smartphonesRepository.get(isExistParams) 
    if (!foundSmartphone) {
        await smartphonesRepository.create(smartphoneData);
    } else {
        throw new AlreadyExistError('Smartphone already exists');
    }
};