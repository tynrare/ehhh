/**
 * Installs project deps
 */
class Install {
	static public function main():Void {
		Sys.command("haxelib", ["install", "all", "--always"]);
		Sys.command("npm", ["install"]);
	}
}
