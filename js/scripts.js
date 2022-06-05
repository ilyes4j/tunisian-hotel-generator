let result = document.getElementById("result");

const qualificatif = ["Majestic", "Royal", "Golden", "Imperial", "Exclusive"]
const type = ["Appart'Hôtel", "Plaza", "Palace", "Hôtel", "Park", "Aqua Park", "Green Park", "Garden", "Dar", "Maison", "Résidence", "Club", "Suite", "Palais"]
const brand = ["Dar El Bhar", "Lella", "Zahra", "Sherazad", "Sultan", "Baya", "Yasmin", "Oasis", "Azur", "Marhabe", "Salem", "Hannibal", "Ulysse", "Hasdrubal"]
const theme = ["Family", "Family Only", "Adult Only", "Oriental", "Continental", "Business", "International", "Occidental", "Prestige", "Orient", "Séjour", "Sélection", "Ultra"]
const options = ["Spa", "Beach", "Palm Beach", "Thalasso", "Golf", "Marina", "Resort", "Bungalows"]
const ville = ["Carthage", "Hammamet", "Yasmine Hammamet", "Tunis", "Djerba", "Sousse", "Mahdia"]

result.innerHTML =
    chooseRandomOptional(qualificatif, " ")
    + chooseRamdom(type, " ")
    + chooseRandomOptional(brand, " ")
    + chooseRamdom(theme, " ")
    + selectManyOptionsFromArray()
    + chooseRandomOptional(ville, ", ");

function chooseRamdom(array, sep) {
    return sep + array[Math.floor(Math.random() * array.length)];
}

function chooseRandomOptional(array, sep) {

    if (Math.floor(Math.random() * 3) !== 0) {
        return "";
    }

    return chooseRamdom(array, sep);
}

function selectManyEltsFromArray(inputArray, minOccurences, maxOccurences) {

    const max = Math.min(maxOccurences, inputArray.length) + 1;

    let selectedOptionCount = Math.max(Math.floor(Math.random() * max), minOccurences);

    let selectedOptions = [];

    for (let i = 0; i < selectedOptionCount; i++) {
        let eltIndex = Math.floor(Math.random() * inputArray.length);
        let elt = inputArray.splice(eltIndex, 1)[0];
        selectedOptions.push(elt);
    }

    return selectedOptions;
}

function selectManyOptionsFromArray() {

    if (Math.floor(Math.random() * 3) === 0) {
        return " All inclusive";
    }

    let ret = selectManyEltsFromArray(options, 0, 2).join(" & ");

    if (ret !== "") {
        ret = " " + ret;
    }

    return ret;
}