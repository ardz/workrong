module.exports = {
    preset: "jest-playwright-preset",
    testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|specs).+(ts|js)"],
    transform: {
        "^.+\\.(ts)$": "ts-jest",
    }
};