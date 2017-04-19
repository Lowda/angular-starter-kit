const DEBUG = process.env.NODE_ENV !== 'production';
const TEST = process.env.NODE_ENV === 'test';
const WATCH = process.env.NODE_WATCH === 'true';

module.exports = { DEBUG, TEST, WATCH }
