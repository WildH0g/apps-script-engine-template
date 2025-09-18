import getDefaultMocks from '../../mocks/default-mocks.js';

/**
 * A registry of different mock strategies.
 * Each strategy is a function that returns an object of mock functions.
 */
const mockStrategies = {
  default: getDefaultMocks,
  // Add other mock strategies here as needed (e.g., empty, errorSimulation)
};

export default mockStrategies;
