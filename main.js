let numPoints = 0;
let numPointsPerClick = 1;
let buildingLevel = Array.from({length: 12}, () => 0);
let fighterLevel = Array.from({length: 12}, () => 0);
let upgradeBool = Array.from({length: 12}, () => false);
let buildingCost = Array.from({lenght: 12}, () => 0);
let buildingIncome = Array.from({lenght: 12}, () => 0);
let buildingTime = Array.from({lenght: 12}, () => 0);
let buildingMult = Array.from({lenght: 12}, () => 0);
let index;

loadGame(); 

// values 
    const upgradeBuilding = Array.from({length: 12}, () => NaN);
    const upgradeFighter = Array.from({length: 12}, () => NaN);
    const building_tooltip = Array.from({length: 12}, () => NaN);
    const fighter_tooltip = Array.from({length: 12}, () => NaN);
    const button = document.getElementById("image-button");
    const pointsPerClick = document.getElementById('points-per-click');
    const points = document.getElementById('points');
    for (let i = 1; i <= 11; i++){
        upgradeBuilding[i] = document.getElementById('building' + i);
        upgradeFighter[i] = document.getElementById('fighter' + i);
        building_tooltip[i] = document.getElementById('building' + i +'-tooltip');
        fighter_tooltip[i] = document.getElementById('fighter' + i + '-tooltip'); 
    }
// functions

    function display() {
        for(let i=1;i<=11;i++) {
            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
        }
    }
    //number converter function
        function convert(numPoints) {
            var nr=numPoints;
            var k=0;
            const suffix=["","K","M","B","t","q","Q","s","S","o","n","d","U","D","T","Qt","Qd","Sd","St","O","N","v","c"];
            while(nr>=1000) {
                nr/=1000;
                k++;
            }
            nr=Math.floor(nr*100)/100;
            nr+=suffix[k];
            return nr;
        }

    //hide elements

        function hideElements(){
            document.getElementById("upgrade1").style.display = "";
            document.getElementById("upgrade2").style.display = "";
        }

//audio

    var audio = new Audio("clickSound.mp3");    

//button and points

    button.addEventListener('click', () => {
        audio.play();
        numPoints += numPointsPerClick;
        points.innerHTML = convert(numPoints);
    });

    button.addEventListener("mousedown", function() {
        button.classList.add("pressed");
    });
      
    button.addEventListener("mouseup", function() {
        button.classList.remove("pressed");
    });    

//fighters
    
    //fighter 1
        upgradeFighter[1].addEventListener('click', () => {
            if(numPoints >= 20*Math.pow(1.15,fighterLevel[1])){
                numPoints -= 20*Math.pow(1.15,fighterLevel[1]);
                fighterLevel[1]++;
                numPointsPerClick += 1;
                points.innerHTML = convert(numPoints);
            }
        });

        upgradeFighter[1].onmouseover = function(){
            fighter_tooltip[1].style.display = "block";
        }

        upgradeFighter[1].onmouseout = function(){
            fighter_tooltip[1].style.display = "none";
        }

    //fighter 2

//buildings

        for (let i = 1; i <= 11; i++) {
            upgradeBuilding[i].addEventListener('click', () =>{
                switch(i) {
                    case(1):
                        if(numPoints >= buildingCost[i]) {
                            numPoints -= buildingCost[i];
                            buildingLevel[i]++;
                            buildingCost[i]*=1.12;
                            if(buildingLevel[i]-1 == 0)
                                buildingIncome[i]=2;
                            else 
                                buildingIncome[i] = buildingIncome[i] + 1 * buildingMult[i];
                            if (((buildingLevel[i] % 25 == 0 && buildingLevel[i] <= 75) || (buildingLevel[i] % 100 == 0)) && buildingTime[i] > 1)
                                buildingTime[i] /= 2;
                            points.innerHTML = convert(numPoints);
                            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
                            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
                            document.dispatchEvent(new Event('buildingChanged'));
                        }
                        break;
                    case(2):
                        if(numPoints >= buildingCost[i]) {
                            numPoints -= buildingCost[i];
                            buildingLevel[i]++;
                            buildingCost[i]*=1.12;
                            if(buildingLevel[i]-1 == 0)
                                buildingIncome[i]=73;
                            else 
                                buildingIncome[i] = buildingIncome[i] + 7 * buildingMult[i];
                            if ((buildingLevel[i] % 25 == 0 && buildingLevel[i] <= 75) || (buildingLevel[i] % 100 == 0) && buildingTime[i] > 1)
                                buildingTime[i] /= 2;
                            points.innerHTML = convert(numPoints);
                            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
                            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
                            document.dispatchEvent(new Event('buildingChanged'));
                        }
                        break;
                    case(3):
                        if(numPoints >= buildingCost[i]) {
                            numPoints -= buildingCost[i];
                            buildingLevel[i]++;
                            buildingCost[i]*=1.127;
                            if(buildingLevel[i]-1 == 0)
                                buildingIncome[i]=100;
                            else 
                                buildingIncome[i] = buildingIncome[i] + 31 * buildingMult[i];
                            if ((buildingLevel[i] % 25 == 0 && buildingLevel[i] <= 75) || (buildingLevel[i] % 100 == 0) && buildingTime[i] > 1)
                                buildingTime[i] /= 2;
                            points.innerHTML = convert(numPoints);
                            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
                            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
                            document.dispatchEvent(new Event('buildingChanged'));
                        }
                        break;
                    case(4):
                        if(numPoints >= buildingCost[i]) {
                            numPoints -= buildingCost[i];
                            buildingLevel[i]++;
                            buildingCost[i]*=1.119;
                            if(buildingLevel[i]-1 == 0)
                                buildingIncome[i]=267;
                            else 
                                buildingIncome[i] = buildingIncome[i] + 247 * buildingMult[i];
                            if ((buildingLevel[i] % 25 == 0 && buildingLevel[i] <= 75) || (buildingLevel[i] % 100 == 0) && buildingTime[i] > 1)
                                buildingTime[i] /= 2;
                            points.innerHTML = convert(numPoints);
                            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
                            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
                            document.dispatchEvent(new Event('buildingChanged'));
                        }
                        break;
                    case(5):
                        if(numPoints >= buildingCost[i]) {
                            numPoints -= buildingCost[i];
                            buildingLevel[i]++;
                            buildingCost[i]*=1.12;
                            if(buildingLevel[i]-1 == 0)
                                buildingIncome[i]=512;
                            else 
                                buildingIncome[i] = buildingIncome[i] + 512 * buildingMult[i];
                            if ((buildingLevel[i] % 25 == 0 && buildingLevel[i] <= 75) || (buildingLevel[i] % 100 == 0) && buildingTime[i] > 1)
                                buildingTime[i] /= 2;
                            points.innerHTML = convert(numPoints);
                            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
                            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
                            document.dispatchEvent(new Event('buildingChanged'));
                        }
                        break;
                    case(6):
                        if(numPoints >= buildingCost[i]) {
                            numPoints -= buildingCost[i];
                            buildingLevel[i]++;
                            buildingCost[i]*=1.115;
                            if(buildingLevel[i]-1 == 0)
                                buildingIncome[i]=1065;
                            else 
                                buildingIncome[i] = buildingIncome[i] + 1200 * buildingMult[i];
                            if ((buildingLevel[i] % 25 == 0 && buildingLevel[i] <= 75) || (buildingLevel[i] % 100 == 0) && buildingTime[i] > 1)
                                buildingTime[i] /= 2;
                            points.innerHTML = convert(numPoints);
                            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
                            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
                            document.dispatchEvent(new Event('buildingChanged'));
                        }
                        break;
                    case(7):
                        if(numPoints >= buildingCost[i]) {
                            numPoints -= buildingCost[i];
                            buildingLevel[i]++;
                            buildingCost[i]*=1.121;
                            if(buildingLevel[i]-1 == 0)
                                buildingIncome[i]=2043;
                            else 
                                buildingIncome[i] = buildingIncome[i] + 3781 * buildingMult[i];
                            if ((buildingLevel[i] % 25 == 0 && buildingLevel[i] <= 75) || (buildingLevel[i] % 100 == 0) && buildingTime[i] > 1)
                                buildingTime[i] /= 2;
                            points.innerHTML = convert(numPoints);
                            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
                            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
                            document.dispatchEvent(new Event('buildingChanged'));
                        }
                        break;
                    case(8):
                        if(numPoints >= buildingCost[i]) {
                            numPoints -= buildingCost[i];
                            buildingLevel[i]++;
                            buildingCost[i]*=1.12;
                            if(buildingLevel[i]-1 == 0)
                                buildingIncome[i]=5347;
                            else 
                                buildingIncome[i] = buildingIncome[i] + 8678 * buildingMult[i];
                            if ((buildingLevel[i] % 25 == 0 && buildingLevel[i] <= 75) || (buildingLevel[i] % 100 == 0) && buildingTime[i] > 1)
                                buildingTime[i] /= 2;
                            points.innerHTML = convert(numPoints);
                            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
                            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
                            document.dispatchEvent(new Event('buildingChanged'));
                        }
                        break;
                    case(9):
                        if(numPoints >= buildingCost[i]) {
                            numPoints -= buildingCost[i];
                            buildingLevel[i]++;
                            buildingCost[i]*=1.121;
                            if(buildingLevel[i]-1 == 0)
                                buildingIncome[i]=10876;
                            else 
                                buildingIncome[i] = buildingIncome[i] + 21178 * buildingMult[i];
                            if ((buildingLevel[i] % 25 == 0 && buildingLevel[i] <= 75) || (buildingLevel[i] % 100 == 0) && buildingTime[i] > 1)
                                buildingTime[i] /= 2;
                            points.innerHTML = convert(numPoints);
                            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
                            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
                            document.dispatchEvent(new Event('buildingChanged'));
                        }
                        break;
                    case(10):
                        if(numPoints >= buildingCost[i]) {
                            numPoints -= buildingCost[i];
                            buildingLevel[i]++;
                            buildingCost[i]*=1.123;
                            if(buildingLevel[i]-1 == 0)
                                buildingIncome[i]=25256;
                            else 
                                buildingIncome[i] = buildingIncome[i] + 70896 * buildingMult[i];
                            if ((buildingLevel[i] % 25 == 0 && buildingLevel[i] <= 75) || (buildingLevel[i] % 100 == 0) && buildingTime[i] > 1)
                                buildingTime[i] /= 2;
                            points.innerHTML = convert(numPoints);
                            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
                            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
                            document.dispatchEvent(new Event('buildingChanged'));
                        }
                        break;
                    case(11):
                        if(numPoints >= buildingCost[i]) {
                            numPoints -= buildingCost[i];
                            buildingLevel[i]++;
                            buildingCost[i]*=1.121;
                            if(buildingLevel[i]-1 == 0)
                                buildingIncome[i]=67895;
                            else 
                                buildingIncome[i] = buildingIncome[i] + 150765 * buildingMult[i];
                            if ((buildingLevel[i] % 25 == 0 && buildingLevel[i] <= 75) || (buildingLevel[i] % 100 == 0) && buildingTime[i] > 1)
                                buildingTime[i] /= 2;
                            points.innerHTML = convert(numPoints);
                            document.getElementById("building" + i + "-level").innerHTML = buildingLevel[i];
                            document.getElementById("building" + i + "-cost").innerHTML = convert(buildingCost[i]);
                            document.dispatchEvent(new Event('buildingChanged'));
                        }
                        break;
                }
            })

            upgradeBuilding[i].onmouseover = function(){
                building_tooltip[i].style.display = "block";
            }

            upgradeBuilding[i].onmouseout = function(){
                building_tooltip[i].style.display = "none";
            }
            
        }

    //progress bar function
    function animationUpdate (index) {
        numPoints += buildingIncome[index];
        points.innerHTML = convert(numPoints);
    }

    function displayProgressBar(){
        for (let i = 1; i <= 11; i++){
            if (buildingLevel[i] >= 1){
                document.getElementById("progress-bar-" + i).style.animation = 'glow';
                document.getElementById("progress-bar-" + i).style.animationIterationCount = 'infinite';
                document.getElementById("progress-bar-" + i).style.animationPlayState = 'running';
                document.getElementById("progress-bar-" + i).style.animationDuration = buildingTime[i] + "s";
            } else {
                document.getElementById("progress-bar-" + i).style.animation = 'none';
            }
        }
    }


//reset
    const resetButton = document.getElementById("resetButton");

    resetButton.addEventListener('click', () =>{
        localStorage.clear();
        loadGame();
    })

//shop
    //upgrades

        // upgrade functions
            function displayUpgrade(){ // daca vreti sa adaugati butoane puneti conditiile aici pebtru cand sa apara
                if (buildingLevel[1] >= 1 && upgradeBool[1] == false){
                    document.getElementById("upgrade1").style.display = "block";
                }
                if (buildingLevel[1] >= 2 && upgradeBool[2] == false){
                    document.getElementById("upgrade2").style.display = "block";
                    //document.getElementById("progress-bar-1").style.animationDurations = Math.pow(2,buildingLevel[1]/25) + 's';
                }
            }

        // event listeners

        document.addEventListener('buildingChanged', displayUpgrade);

        document.addEventListener('buildingChanged', displayProgressBar);

        document.getElementById("upgrade1").addEventListener('click', () => { // pentru buton adaugi aici conditiile de cumparare si in rest urmezi modelul
            //add functionality
            upgradeBool[1] = true;
            document.getElementById("upgrade1").style.display = "";
        })

        document.getElementById("upgrade2").addEventListener('click', () => {
            //add functionality
            upgradeBool[2] = true;
            document.getElementById("upgrade2").style.display = "";
        })

// dragging for the shop
    const ele = document.getElementById('shop-grid-column');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';

      pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
    
    //Alert when user tries to reload/leave the page
    window.addEventListener("beforeunload", function (event) {
		event.preventDefault();
		event.returnValue = "";
	});
    
