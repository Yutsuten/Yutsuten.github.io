'use strict';

// Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle,
    Graphics = PIXI.Graphics

// Renderer and Auto-scaling options
var renderer = autoDetectRenderer(1920, 1080, {antialias: true});
renderer.autoResize = true;
document.body.appendChild(renderer.view);
var scale = scaleToWindow(renderer.view);
window.addEventListener("resize", function(event) {
  scale = scaleToWindow(renderer.view);
});
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
var stage = new Container();
