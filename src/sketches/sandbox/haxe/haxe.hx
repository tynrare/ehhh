
class HelloWorld {
    static public function main() {
        trace("Hello World");
    }
}

#if js
    js.Lib.alert("Hello");
#elseif sys
    Sys.println("Hello");
#end
