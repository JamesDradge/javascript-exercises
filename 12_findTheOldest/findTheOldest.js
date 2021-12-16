const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth); 
        const currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        if (currentAge > oldestAge) {
            return currentPerson;
        } else {
            return oldest;
        }
    });
};

function getAge(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]