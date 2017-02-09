import { babel as _babel } from "./babel-loader"
import { json as _json } from "./json-loader"
import { file as _file } from "./file-loader"

export default ( paths, file, json) => {
	const babel = _babel(paths)
	let arr = [ babel ]
  if(file) arr.push(_file)
	if(json) arr.push(_json)
	return 	arr
}
