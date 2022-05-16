const path = require("path");

module.exports = {
	mode: "development",
	// the entry point for the app
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "main.js",
	},
	// determines the dev development server
	target: "web",
	devServer: {
		port: "3000",
		static: ["./public"],
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts"],
	},
	module: {
		// rules for the compiler
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
};
