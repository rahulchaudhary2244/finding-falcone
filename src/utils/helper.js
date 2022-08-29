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
 *This uses Array.filter() and performs filtering of planets and only returns those planets which are (not being selected for any of the destination + if a planet selected in current destination)
 * @param {Array.<DestinationItem>} destinations This will be reuired to perform filtering of planets based on destination.selectedPlanet
 * @param {Array.<PlanetItem} planets This will be required to get filtered array of planets name
 * @param {string} key This will be required for checking if a planet is selected in current destination
 * @param {string} value This will be required for checking if a planet is selected in current destination
 * @returns {Array.<string>} Array of planet names available for selection
 */
const getPlanetsAvailableForSelection = (destinations, planets, key, value) => {
    const names = destinations
        .filter((item) => item[key] !== value && !!item.selectedPlanet)
        .map((item) => item.selectedPlanet);
    return planets.filter(({ name }) => !!!names.includes(name));
};

/**
 *Uses Array.reduce() function and Returns sum of all occurance of key present in an array
 * @param {Array} array Array should have key as a number
 * @param {string} key key will be reduced to returned value
 * @returns {number} sum
 */
const getTotalByKey = (array, key) =>
    array.reduce((previous, current) => previous + current[key], 0);

/**
 *Accepts array of vehicles and returns map() of it based on these conditions, increase total_no by 1 for old selected vehicle and decrease total_no by 1 for new selected vehicle
 * @param {Array.<VehileItem} vehicles vehicles should have total_no as key in its array elements
 * @param {string} oldVehicleName if any vehicle was selected than increase its total_no by 1 to make it available for other destinations to use
 * @param {string} newVehicleName decrease total_no by 1 for this vehicle name
 * @returns {Array.VehileItem} map of vehicles with updated total_no
 */
const getVehiclesWithUpdatedTotalNoCount = (
    vehicles,
    oldVehicleName,
    newVehicleName
) =>
    vehicles.map((vehicle) => {
        //decreasing count by 1 for current selected vehicle
        if (vehicle.name === newVehicleName)
            return {
                ...vehicle,
                total_no: vehicle.total_no - 1,
            };

        //increasing count by 1 for old vehicle if exist
        if (vehicle.name === oldVehicleName)
            return {
                ...vehicle,
                total_no: vehicle.total_no + 1,
            };
        return vehicle;
    });

/**
 *Accepts DestinationItem Array, destination name and Vehicle object, it updates the vehicle details (selectedVehicle and timeTaken) for given destination name. It uses map() & returns Array of DestinationItem with updated value
 * @param {Array.<DestinationItem} destinations Array.map() will be applied on it
 * @param {string} destinationName This will be required to update vehicle details to specific destination
 * @param {VehileItem} vehicle This will provide vehicle name & speed
 * @returns {Array.<DestinationItem>} Returns updated values of destinationArray
 */
const getDestinationsWithNewVehicle = (
    destinations,
    destinationName,
    vehicle
) =>
    destinations.map((destination) => {
        if (destination.name === destinationName)
            return {
                ...destination,
                selectedVehicle: vehicle.name,
                timeTaken: destination.planetDistance / vehicle.speed,
            };
        return destination;
    });

/**
 *Returns true or false based on passed arguements
 * @param {number} planetDistance distance of planet
 * @param {number} max_distance maximum distance a vehicle can travel
 * @param {number} available_count vehicle availability count
 * @returns {boolean} true or false
 */
const isVehicleDisabledForSelection = (
    planetDistance,
    max_distance,
    available_count
) => planetDistance > max_distance || available_count === 0;

export {
    getTotalByKey,
    getVehiclesWithUpdatedTotalNoCount,
    getDestinationsWithNewVehicle,
    getPlanetsAvailableForSelection,
    isVehicleDisabledForSelection,
};
