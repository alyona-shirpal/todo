const ErrorHandler = require ( '../errors/ErrorHandler');
const storage = require('../modules/Storage');
const { statusMessage, statusCodes } = require('../configs');

module.exports = {
    isTodoIdValid: (req, res, next) => {
            try {
                const { id } = req.params;

                const isValid = storage.has(+id)

                if(!isValid) {
                    throw new ErrorHandler(statusMessage.isNotValidId, statusCodes.isNotValid)
                }

                next();
            } catch (e) {
                next(e);
            }
        },
}