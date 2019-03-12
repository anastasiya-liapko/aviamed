export default {
    specializations: [ 
        {
            id: 1,
            name: 'Диетология'
        },
        {
            id: 2,
            name: 'Ксенонотерапия'
        },
        {
            id: 3,
            name: 'Маммология'
        },
        {
            id: 4,
            name: 'Колопроктология'
        },
        {
            id: 5,
            name: 'Эпидемиология'
        },
        {
            id: 6,
            name: 'Травматология и ортопедия'
        }
    ],
    services: [ 
        {
            id: 1,
            specialization_id: 1,
            name: '1'
        },
        {
            id: 2,
            specialization_id: 1,
            name: '2'
        },
        {
            id: 3,
            specialization_id: 2,
            name: '3'
        },
        {
            id: 4,
            specialization_id: 2,
            name: '4'
        },
    ],
    doctors: [ 
        {
            id: 1,
            // specialization_id: 1,
            service_id: 1,
            name: 'Фокина Светлана Николаевна'
        },
        {
            id: 2,
            // specialization_id: 1,
            service_id: 1,
            name: 'Шабунина Ирина Юрьевна'
        },
        {
            id: 3,
            // specialization_id: 2,
            service_id: 2,
            name: 'Ухабина Ирина Юрьевна'
        },
        {
            id: 4,
            // specialization_id: 2,
            service_id: 3,
            name: 'Сирота Александр Евгеньевич'
        },

    ]
};

