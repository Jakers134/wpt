// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.quadraticCurveTo.nonfinite
// Description:quadraticCurveTo() with Infinity/NaN is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("quadraticCurveTo() with Infinity/NaN is ignored");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.moveTo(0, 0);
ctx.lineTo(100, 0);
ctx.quadraticCurveTo(Infinity, 50, 0, 50);
ctx.quadraticCurveTo(-Infinity, 50, 0, 50);
ctx.quadraticCurveTo(NaN, 50, 0, 50);
ctx.quadraticCurveTo(0, Infinity, 0, 50);
ctx.quadraticCurveTo(0, -Infinity, 0, 50);
ctx.quadraticCurveTo(0, NaN, 0, 50);
ctx.quadraticCurveTo(0, 50, Infinity, 50);
ctx.quadraticCurveTo(0, 50, -Infinity, 50);
ctx.quadraticCurveTo(0, 50, NaN, 50);
ctx.quadraticCurveTo(0, 50, 0, Infinity);
ctx.quadraticCurveTo(0, 50, 0, -Infinity);
ctx.quadraticCurveTo(0, 50, 0, NaN);
ctx.quadraticCurveTo(Infinity, Infinity, 0, 50);
ctx.quadraticCurveTo(Infinity, Infinity, Infinity, 50);
ctx.quadraticCurveTo(Infinity, Infinity, Infinity, Infinity);
ctx.quadraticCurveTo(Infinity, Infinity, 0, Infinity);
ctx.quadraticCurveTo(Infinity, 50, Infinity, 50);
ctx.quadraticCurveTo(Infinity, 50, Infinity, Infinity);
ctx.quadraticCurveTo(Infinity, 50, 0, Infinity);
ctx.quadraticCurveTo(0, Infinity, Infinity, 50);
ctx.quadraticCurveTo(0, Infinity, Infinity, Infinity);
ctx.quadraticCurveTo(0, Infinity, 0, Infinity);
ctx.quadraticCurveTo(0, 50, Infinity, Infinity);
ctx.lineTo(100, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 90,45, 0,255,0,255, "90,45", "0,255,0,255");
t.done();

});
done();