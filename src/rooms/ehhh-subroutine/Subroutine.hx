/**
 * Runs project watch
 * Оно отдельным файлом заради того что бы из корня проекта можно было запускать через 
 * > haxe subroutine.hxml
 */
class Subroutine {
	static public function main():Void {
		Sys.command("npm", ["run", "watch"]);
	}
}
