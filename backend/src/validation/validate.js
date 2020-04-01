const { celebrate, Segments, Joi } = require('celebrate');

const validOngs = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
});

const validProfile = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required().length(8)
    }).unknown()
});

const validIncidentDelete = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
});

const validPagenation = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number()
    })
});

const validSession = celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8)
    })
});

const validIncident = celebrate({

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
})

module.exports = {
    validOngs,
    validProfile,
    validIncidentDelete,
    validPagenation,
    validSession,
    validIncident
}
    
