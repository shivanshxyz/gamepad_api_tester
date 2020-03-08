var haveEvents = 'GamepadEvent' in window;
var haveWebkitEvents = 'WebKitGamepadEvent' in window;
var controllers = {};
var rAF = window.mozRequestAnimationFrame || 
        window.webkitRequestAnimationFrame ||
        window.requestAnimationFrame;

