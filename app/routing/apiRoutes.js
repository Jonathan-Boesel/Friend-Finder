function apiRoutes(app, path) {
	app.get("/api/friends", function(req, res) {
		res.sendFile(path.join(__dirname, "../data/friends.js"))
	})
	app.post("/api/friends", function(req, res) {

	})
}

module.exports = apiRoutes
