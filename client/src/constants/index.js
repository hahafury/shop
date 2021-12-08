// eslint-disable-next-line import/no-anonymous-default-export
export default {
    COLORS: {
        'pink': '#ff99ff',
        'white': 'white',
        'midnight': '#181f27',
        'blue': '#266382',
        'graphite': '#4d4c48',
        'starlight': '#faf5f1',
        'pacific-blue': '#28434e',
        'interstellar-glow': '#fbd5e4'
    },
    LOGO_COLOR_BLACK: 'black',
    LOGO_COLOR_WHITE: 'white',
    COMPONENT_TYPE_INPUT: 'input',
    TOKEN: 'TOKEN',
    MIN_PASSWORD_LENGTH: 6,
    MIN_LOGIN_LENGTH: 3,
    BASE_URL: `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`,
    FILTER: {
        COLORS: {
            'Apple': ['pink', 'midnight', 'blue', 'graphite', 'starlight', 'pacific-blue'],
            'OnePlus': ['interstellar-glow']
        },
        MODELS: {
            'Apple': ['Iphone 11', 'Iphone 13', 'Iphone 13 Mini', 'iPhone 12 Pro Max'],
            'OnePlus': ['8']
        },
        MEMORY: {
            'Apple': ['512', '256', '128'],
            'OnePlus': ['128']
        },
        SCREEN_DIAGONAL: {
            'Apple': ["6.1'", "6.7'"],
            'OnePlus': ["6.55'"]
        }
    },
    ROLE_ADMIN: 'ADMIN',
    ROLE_USER: 'USER',
    ORDER_STATUS_CONFIRMED: 'confirmed',
    ORDER_STATUS_COMPLETED: 'completed',
    ORDER_STATUS_DECLINED: 'declined',
    ORDER_STATUS_NEW: 'new',
}