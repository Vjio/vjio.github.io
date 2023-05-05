const canvas2 = document.getElementById("canvas2");
		const ctx2 = canvas2.getContext("2d");
		const stockPrice = document.getElementById("stock-price");
		const Balance = document.getElementById("points");
		
		//let money = 1000;
		let curentPrice = 150;
		let nrStocks = 0;

		//buy/sell
		const buyButton = document.getElementById("buy");
		const sellButton = document.getElementById("sell");

		document.getElementById("stock-market-button").addEventListener("click", () => {
			
			document.getElementById("stock-market-button").style.display = "none";
			document.getElementById("minigame2").style.display = "grid";

		buyButton.addEventListener("click", () => {
			if (numPoints > curentPrice){
				numPoints -= curentPrice;
				nrStocks++;
				document.getElementById("number-of-stocks").innerHTML = nrStocks;
				Balance.innerHTML = numPoints;
			}
		});

		sellButton.addEventListener("click", () => {
			if (nrStocks > 0){
				nrStocks--;
				numPoints += curentPrice;
				document.getElementById("number-of-stocks").innerHTML = nrStocks;
				Balance.innerHTML = numPoints;
			}
		});

		// Set the canvas size
		canvas2.width = 400;
		canvas2.height = 300;

		//creating the stocks
			// Define the stock market simulation parameters
				const numStocks = 30; // Number of stocks to simulate

			// initiating the stock
				let stockPrices = [];
				let stockTimes = [0];
				let newStockPrice;
				let volatility = 4; //less is more
				let luck = 0.5; // more is more

				stockPrices[0] = 150;

				for (let i = 1; i < numStocks; i++) {
					stockTimes.push(stockTimes[i-1] + Math.floor(Math.random() * 5)*10 + 15);
					if (Math.random() < luck){
						newStockPrice = (stockPrices[i-1] - (stockPrices[i-1] * Math.random()/volatility)) % 300;
				 	} else {
						newStockPrice = (stockPrices[i-1] + (stockPrices[i-1] * Math.random()/volatility)) % 300;
					}
					if (newStockPrice < 30)
						newStockPrice = 50;
					stockPrices.push(newStockPrice);
				}

		//drawing the graph
		const getStockPrice = () => {
			let lastStock = 0;
			while (stockTimes[lastStock+1] <= canvas2.width){
				lastStock++;
			}
			
				let X = stockTimes[lastStock+1] - stockTimes[lastStock];
			
			//console.log(y);
			if (stockPrices[lastStock+1] > stockPrices[lastStock]){
				let x = stockTimes[lastStock+1] - canvas2.width;
				let Y = stockPrices[lastStock+1] - stockPrices[lastStock];
				let y = (Y*(X-x))/X;
				curentPrice = Math.floor(300 - (stockPrices[lastStock] + y));
			} else { 
				let x = stockTimes[lastStock+1] - canvas2.width;
				let Y = stockPrices[lastStock+1] - stockPrices[lastStock];
				let y = (Y*x)/X;
				curentPrice = Math.floor(300 - (stockPrices[lastStock+1] - y));
			}
			stockPrice.innerHTML = curentPrice;
			//console.log(lastStock);
		};

		const draw = () => {
			ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

			ctx2.fillStyle = '#141517';
  			ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

			  ctx2.beginPath();
			for(let index = 0; index < numStocks; index++){
				if(index == 0){
					ctx2.strokeStyle = "yellow";
					ctx2.moveTo(stockTimes[index],stockPrices[index]);
				} else {
					ctx2.lineTo(stockTimes[index],stockPrices[index]);
				}
			};
			ctx2.stroke();
			for (let index = 0; index < numStocks; index++){
				stockTimes[index] -= 1;
			}

			//displaying scale on the graph

			ctx2.fillStyle = 'yellow';
			ctx2.font = "20px Arial";
			ctx2.fillText("BBCompany",10,50);
			ctx2.font = "10px Arial";
			ctx2.fillText("250",350,50);
			ctx2.fillText("200",350,100);
			ctx2.fillText("150",350,150);
			ctx2.fillText("100",350,200);
			ctx2.fillText("50",350,250);
			//setting a new price for the stock
			if (stockTimes[1] < 0){
				stockTimes.shift();
				stockPrices.shift();
				if (Math.random() < luck){
						newStockPrice = (stockPrices[numStocks-2] - (stockPrices[numStocks-2] * Math.random()/volatility) + 20) % 290;
				} else {
						newStockPrice = (stockPrices[numStocks-2] + (stockPrices[numStocks-2] * Math.random()/volatility) + 20) % 290;
				}
				if (newStockPrice < 30)
					newStockPrice = 50;
				stockTimes.push(stockTimes[numStocks-2] + Math.floor(Math.random() * 5)*10 + 10);
				stockPrices.push(newStockPrice);
			}
			getStockPrice();
		};
		
		setInterval(draw, 50);
		});