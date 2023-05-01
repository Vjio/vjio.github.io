function saveData(){
    localStorage.setItem("numPoints", numPoints);
    localStorage.setItem("buildingLevel", JSON.stringify(buildingLevel));
    localStorage.setItem("fighterLevel", JSON.stringify(fighterLevel));
    localStorage.setItem("upgradeBool", JSON.stringify(upgradeBool));
}

function loadGame(){ //a fost..... dificil sa scriu asta
    numPoints = parseFloat(localStorage.getItem("numPoints")) || 0; // stochez numarul de puncte aici
    buildingLevel = JSON.parse(localStorage.getItem("buildingLevel")) || Array(10).fill(0); // sunt un geniu si am transformat datele butoanelor in array-uri, astfel codul poate fi scris in loopuri ca sa-mi bat capul o singura data cu butoanele
    fighterLevel = JSON.parse(localStorage.getItem("fighterLevel")) || Array(10).fill(0);
    upgradeBool = JSON.parse(localStorage.getItem("upgradeBool")) || Array(10).fill(false);
    document.getElementById("points").innerHTML = convert(numPoints);
    for (let i = 1; i <= 2; i++){
        document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
        document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]*(Math.pow(1.15,buildingLevel[i])));
        buildingTime[i] = i;
        updateBuildingInterval(i);
    }
    hideElements();
    displayUpgrade();
    displayProgressBar();
    setInterval(saveData,5000);
}
