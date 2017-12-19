function generateBornDateFromAge(age){
    return 2017 - age;
}

function generateUserDescription(name, surName, age){

    const fullName = `${name} ${surName}`;
    const bornDate = generateBornDateFromAge(age);

    return `${fullName} is ${age} old and was born in ${bornDate}`;

}

console.log( generateUserDescription("Diogo", "Paza", "34"));

