/**
 *
 * @param {Array.<DestinationItem>} destinations
 * @param {Array.<PlanetItem} planets
 * @param {string} key
 * @param {string} value
 * @returns {Array.<PlanetItem>}
 */
const getPlanetsAvailableForSelection = (destinations, planets, key, value) => {
    const names = destinations
        .filter((item) => item[key] !== value && !!item.selectedPlanet)
        .map((item) => item.selectedPlanet);
    return planets.filter(({ name }) => !!!names.includes(name));
};

/**
 *
 * @param {Array} array
 * @param {string} key
 * @returns {number}
 */
const getTotalByKey = (array, key) =>
    array.reduce((previous, current) => previous + current[key], 0);

/**
 *
 * @param {Array.<VehileItem} vehicles
 * @param {string} oldVehicleName
 * @param {string} newVehicleName
 * @returns {Array.VehileItem}
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
 *
 * @param {Array.<DestinationItem} destinations
 * @param {string} destinationName
 * @param {VehileItem} vehicle
 * @returns {Array.<DestinationItem>}
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

export {
    getTotalByKey,
    getVehiclesWithUpdatedTotalNoCount,
    getDestinationsWithNewVehicle,
    getPlanetsAvailableForSelection,
};
