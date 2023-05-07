

function updateProgress (){
    if (!tutorialBool[4]){
        for (let i = 1; i < 4; i++){
            document.getElementById("tutorial-panel-"+i).style.display = "none";
        }
        if(numPoints == 0 && !tutorialBool[1]){
            tutorialBool[1] = true;
            document.getElementById("tutorial-panel-1").style.display = "block";
        } else if (numPoints == 7 &&!tutorialBool[3]){
            tutorialBool[3] = true;
        } else if (buildingLevel[1] == 1 && !tutorialBool[4]){
            tutorialBool[4] = true;
        }
    }
}

