const core = require("@actions/core");

try {
	const node = {
		name: `node`,
		currentVersion: `18.19.0-alpine`,
		updatedVersion: `18.20.4-alpine`,
		filePrefix: `node`,
	};
	const flyway = {
		name: `flyway/fyway`,
		currentVersion: `10.0.0`,
		updatedVersion: `10.1.0`,
		filePrefix: `flyway_flyway`,
	};
	const output = [node, flyway];
	console.log(JSON.stringify(output));
	core.setOutput(`dependencies`, output);
} catch (error) {
	core.setFailed(error.message);
}
