import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    '^@src/(.*)': '<rootDir>/src/$1',
    '^@modules/(.*)': '<rootDir>/src/modules/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1'
  }
}
export default config
