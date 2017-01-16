export default (path, exclude = []) => {
	const package_json = require(path)
	const vendor = Object.keys(package_json.dependencies).filter(key => !exclude.includes(key))
	return vendor
}
