// Definition of Data Structures used
/**
 * @typedef {Object} PlanetItem - Data related to planet
 *
 * @property {string} name
 * @property {number} distance
 */

/**
 * @typedef {Object} VehileItem - Data related to vehicle
 *
 * @property {string} name
 * @property {number} total_no
 * @property {number} max_distance
 * @property {number} speed
 */

/**
 * @typedef {Object} DestinationItem - Data for destination to find falcone
 *
 * @property {number} key
 * @property {string} label
 * @property {string} name
 * @property {string} selectedPlanet
 * @property {number} planetDistance
 * @property {string} selectedVehicle
 * @property {number} timeTaken
 */

/**
 * @typedef {Object} FooterItem - Data to display footer values
 *
 * @property {number} id
 * @property {string} key
 * @property {string} link
 * @property {string} text
 * @property {string} colour
 */

/**
 * @typedef {Object} Config - Data for configuration
 *
 * @property {string} endpoint
 */

/**
 * @typedef {Object} HeadersList - Data for required header for API requests
 *
 * @property {string} Accept
 * @property {string} 'Content-Type'
 */
