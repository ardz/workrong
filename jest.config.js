module.exports = {
    preset: "jest-playwright-preset",
    testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|tests).+(ts|js)"],
    transform: {
        "^.+\\.(ts)$": "ts-jest",
    }
};