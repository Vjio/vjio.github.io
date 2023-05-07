function saveData(){
    localStorage.setItem("numPoints", numPoints);
    localStorage.setItem("buildingLevel", JSON.stringify(buildingLevel));
    localStorage.setItem("buildingCost", JSON.stringify(buildingCost));
    localStorage.setItem("buildingIncome", JSON.stringify(buildingIncome));
    localStorage.setItem("fighterLevel", JSON.stringify(fighterLevel));
    localStorage.setItem("upgradeBool", JSON.stringify(upgradeBool));
    localStorage.setItem("numberOfStocks", JSON.stringify(nrStocks));
}

function loadGame(){ //a fost..... dificil sa scriu asta
    numPoints = parseFloat(localStorage.getItem("numPoints")) || 0; // stochez numarul de puncte aici
    buildingLevel = JSON.parse(localStorage.getItem("buildingLevel")) || Array(12).fill(0); // sunt un geniu si am transformat datele butoanelor in array-uri, astfel codul poate fi scris in loopuri ca sa-mi bat capul o singura data cu butoanele
    buildingCost = JSON.parse(localStorage.getItem("buildingCost")) || Array(12).fill(0);
    buildingIncome = JSON.parse(localStorage.getItem("buildingIncome")) || Array(12).fill(0);
    fighterLevel = JSON.parse(localStorage.getItem("fighterLevel")) || Array(12).fill(0);
    upgradeBool = JSON.parse(localStorage.getItem("upgradeBool")) || Array(12).fill(false);
    nrStocks = JSON.parse(localStorage.getItem("numberOfStocks")) || Array(12).fill(0);
    document.getElementById("points").innerHTML = convert(numPoints);
    for (let i = 1; i <= 11; i++) {
        document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
        document.getElementById("progress-bar-" + i).addEventListener("animationiteration", () =>{animationUpdate (i)});
        document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
    }
    hideElements();
    displayUpgrade();
    displayProgressBar();
    setInterval(saveData,5000);
}
