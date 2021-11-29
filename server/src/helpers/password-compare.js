const bcrypt = require('bcrypt');
const PermissionError = require('../errors/permission-error');

module.exports = async (receivedPassword, comparisonPassword) => {
    const passwordCompare = await bcrypt.compare(receivedPassword, comparisonPassword);

    if (!passwordCompare) {
        throw new PermissionError('Wrong password');
    };
};