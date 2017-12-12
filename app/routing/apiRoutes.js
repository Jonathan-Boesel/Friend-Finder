var friends = require("../data/friends.js")

function apiRoutes(app, path) {
	app.get("/api/friends", function(req, res) {
		res.json(friends)
		// res.sendFile(path.join(__dirname, "../data/friends.js"));
	});
	app.post("/api/friends", function(req, res) {
		// Convert ajax post .scores to integers
		for (var z = 0; z < req.body.scores.length; z++) {
			req.body.scores[z] = +req.body.scores[z]
		}
		console.log(req.body.scores)
		friends.push(req.body);
		console.log("New Data " + JSON.stringify(req.body));
		console.log(friends)
		var scoresArr = []
		// Create scores arr standalone
		for (var i = 0; i < friends.length; i++) {
			scoresArr.push(friends[i].scores)
		}
		console.log(scoresArr)
		var differenceArr = []
		for (var f = 0; f < scoresArr.length - 1; f++) {
			var tmpDifference = []
			for (var j = 0; j < scoresArr[f].length; j++) {
				var difference = Math.abs(scoresArr[f][j] - (scoresArr[scoresArr.length - 1][j]));
				tmpDifference.push(difference)
				// if (f === 0) {
				// 	console.log(scoresArr[f][j])
				// }
			}
			differenceArr.push(tmpDifference)
		}
		console.log(differenceArr)
		var sumArr = []
		for (var q = 0; q < differenceArr.length; q++) {
			var sum = differenceArr[q].reduce(add, 0);

			function add(a, b) {
				return a + b;
			}

			sumArr.push(sum)

			// var add = function(a, b) {
			// 	return a + b;
			// }
			// var tmpSum = differenceArr[q].reduce
			// console.log(tmpSum)
		}
		console.log(sumArr)
		var index = 0;
		var value = sumArr[0];
		for (var i = 1; i < sumArr.length; i++) {
			if (sumArr[i] < value) {
				value = sumArr[i];
				index = i;
			}
		}
		console.log(index)
		var data = friends[index]

		res.send(data)
		// res.status(200).send(data)
		// res.json(data)


	});
}

console.log(friends)

module.exports = apiRoutes;
