const getTotalByKey = (array, key) =>
    array.reduce((previous, current) => previous + current[key], 0);

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
};
