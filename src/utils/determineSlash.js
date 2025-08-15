const determineSlash = process.platform === "win32" ? "\\" : "/";

export default determineSlash;