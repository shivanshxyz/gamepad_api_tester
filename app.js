var haveEvents = 'GamepadEvent' in window;
var haveWebkitEvents = 'WebKitGamepadEvent' in window;
var controllers = {};
var rAF = window.mozRequestAnimationFrame || 
        window.webkitRequestAnimationFrame ||
        window.requestAnimationFrame;

function connecthandler(e) {
    addgamepad(e.gamepad);
}

function addgamepad(gamepad){
    controllers[gamepad.index] = gamepad; var d = document.createElement("div");
    d.setAttribute("id", "controller" + gamepad.index);
    var t = document.createElement("h1");
    t.appendChild(document.createTextNode("gamepad: " + gamepad.id));
    d.appendChild(t);
    var b = document.createElement("div");
    b.className = "buttons";
}