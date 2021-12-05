// eslint-disable-next-line import/no-anonymous-default-export
export default {
    COLORS: {
        'pink': '#ff99ff',
        'white': 'white',
        'midnight': '#181f27'
    },

    LOGO_COLOR_BLACK: 'black',
    LOGO_COLOR_WHITE: 'white',

    COMPONENT_TYPE_INPUT: 'input',

    TOKEN: 'TOKEN',

    MIN_PASSWORD_LENGTH: 6,
    MIN_LOGIN_LENGTH: 3,

    BASE_URL: `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`
}