/**
 * Runs project watch
 * Оно отдельным файлом заради того что бы из корня проекта можно было запускать через 
 * > haxe subroutine.hxml
 */
class Subroutine {
	static public function main():Void {
		Sys.putEnv('DEBUG', 'subroutine:*');
		Sys.putEnv('PORT', '8000');
		Sys.putEnv('EHHH_ROOT', Sys.getCwd());
		Sys.command("npm", ['start']);
	}
}
