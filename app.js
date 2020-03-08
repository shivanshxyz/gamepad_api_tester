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

    for (var i=0; i<gamepad.buttons.length; i++) {
        var e = document.createElement("span");
        e.className = "button";
        e.innerHTML = i;
        b.appendChild(e);
      }

    d.appendChild(b);
    var a = document.createElement("div");
    a.className = "axes";

    for (i=0; i<gamepad.axes.length; i++) {
        e = document.createElement("meter");
        e.className = "axis";
        e.setAttribute("min", "-1");
        e.setAttribute("max", "1");
        e.setAttribute("value", "0");
        e.innerHTML = i;
        a.appendChild(e);
      }

}