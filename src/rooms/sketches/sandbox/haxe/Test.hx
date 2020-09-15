import js.Browser;

class Test {
    public function new (){

    }
    public function call() {
        var button = Browser.document.createButtonElement();
        button.textContent = "Click me!";
        button.onclick = function(event) {
            Browser.alert("Haxe is great");
        }
        Browser.document.body.appendChild(button);
    }
}