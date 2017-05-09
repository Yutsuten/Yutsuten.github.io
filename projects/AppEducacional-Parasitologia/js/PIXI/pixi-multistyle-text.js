(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MultiStyleText = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require("./pixi-multistyle-text").default;
},{"./pixi-multistyle-text":2}],2:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var MultiStyleText = (function (_super) {
        __extends(MultiStyleText, _super);
        function MultiStyleText(text, styles) {
            var _this = _super.call(this, text) || this;
            _this.styles = styles;
            return _this;
        }
        Object.defineProperty(MultiStyleText.prototype, "styles", {
            set: function (styles) {
                this.textStyles = {};
                this.textStyles["default"] = this.assign({}, MultiStyleText.DEFAULT_TAG_STYLE);
                for (var style in styles) {
                    if (style === "default") {
                        this.assign(this.textStyles["default"], styles[style]);
                    }
                    else {
                        this.textStyles[style] = this.assign({}, styles[style]);
                    }
                }
                this._style = new PIXI.TextStyle(this.textStyles["default"]);
                this.dirty = true;
            },
            enumerable: true,
            configurable: true
        });
        MultiStyleText.prototype.setTagStyle = function (tag, style) {
            if (tag in this.textStyles) {
                this.assign(this.textStyles[tag], style);
            }
            else {
                this.textStyles[tag] = this.assign({}, style);
            }
            this._style = new PIXI.TextStyle(this.textStyles["default"]);
            this.dirty = true;
        };
        MultiStyleText.prototype.deleteTagStyle = function (tag) {
            if (tag === "default") {
                this.textStyles["default"] = this.assign({}, MultiStyleText.DEFAULT_TAG_STYLE);
            }
            else {
                delete this.textStyles[tag];
            }
            this._style = new PIXI.TextStyle(this.textStyles["default"]);
            this.dirty = true;
        };
        MultiStyleText.prototype._getTextDataPerLine = function (lines) {
            var outputTextData = [];
            var tags = Object.keys(this.textStyles).join("|");
            var re = new RegExp("</?(" + tags + ")>", "g");
            var styleStack = [this.assign({}, this.textStyles["default"])];
            for (var i = 0; i < lines.length; i++) {
                var lineTextData = [];
                var matches = [];
                var matchArray = void 0;
                while (matchArray = re.exec(lines[i])) {
                    matches.push(matchArray);
                }
                if (matches.length === 0) {
                    lineTextData.push(this.createTextData(lines[i], styleStack[styleStack.length - 1]));
                }
                else {
                    var currentSearchIdx = 0;
                    for (var j = 0; j < matches.length; j++) {
                        if (matches[j].index > currentSearchIdx) {
                            lineTextData.push(this.createTextData(lines[i].substring(currentSearchIdx, matches[j].index), styleStack[styleStack.length - 1]));
                        }
                        if (matches[j][0][1] === "/") {
                            if (styleStack.length > 1) {
                                styleStack.pop();
                            }
                        }
                        else {
                            styleStack.push(this.assign({}, styleStack[styleStack.length - 1], this.textStyles[matches[j][1]]));
                        }
                        currentSearchIdx = matches[j].index + matches[j][0].length;
                    }
                    if (currentSearchIdx < lines[i].length) {
                        lineTextData.push(this.createTextData(lines[i].substring(currentSearchIdx), styleStack[styleStack.length - 1]));
                    }
                }
                outputTextData.push(lineTextData);
            }
            return outputTextData;
        };
        MultiStyleText.prototype.createTextData = function (text, style) {
            return {
                text: text,
                style: style,
                width: 0,
                height: 0,
                fontProperties: undefined
            };
        };
        MultiStyleText.prototype.getDropShadowPadding = function () {
            var _this = this;
            var maxDistance = 0;
            var maxBlur = 0;
            Object.keys(this.textStyles).forEach(function (styleKey) {
                var _a = _this.textStyles[styleKey], dropShadowDistance = _a.dropShadowDistance, dropShadowBlur = _a.dropShadowBlur;
                maxDistance = Math.max(maxDistance, dropShadowDistance || 0);
                maxBlur = Math.max(maxBlur, dropShadowBlur || 0);
            });
            return maxDistance + maxBlur;
        };
        MultiStyleText.prototype.updateText = function () {
            var _this = this;
            if (!this.dirty) {
                return;
            }
            this.texture.baseTexture.resolution = this.resolution;
            var textStyles = this.textStyles;
            var outputText = this.text;
            if (this._style.wordWrap) {
                outputText = this.wordWrap(this.text);
            }
            var lines = outputText.split(/(?:\r\n|\r|\n)/);
            var outputTextData = this._getTextDataPerLine(lines);
            var lineWidths = [];
            var lineHeights = [];
            var maxLineWidth = 0;
            for (var i = 0; i < lines.length; i++) {
                var lineWidth = 0;
                var lineHeight = 0;
                for (var j = 0; j < outputTextData[i].length; j++) {
                    if (outputTextData[i][j].text.length == 0) {
                        continue;
                    }
                    var sty = outputTextData[i][j].style;
                    this.context.font = PIXI.Text.getFontStyle(sty);
                    outputTextData[i][j].width = this.context.measureText(outputTextData[i][j].text).width + (outputTextData[i][j].text.length - 1) * sty.letterSpacing;
                    lineWidth += outputTextData[i][j].width;
                    if (j > 0) {
                        lineWidth += sty.letterSpacing / 2;
                    }
                    if (j < outputTextData[i].length - 1) {
                        lineWidth += sty.letterSpacing / 2;
                    }
                    outputTextData[i][j].fontProperties = PIXI.Text.calculateFontProperties(this.context.font);
                    outputTextData[i][j].height =
                        outputTextData[i][j].fontProperties.fontSize + outputTextData[i][j].style.strokeThickness;
                    lineHeight = Math.max(lineHeight, outputTextData[i][j].height);
                }
                lineWidths[i] = lineWidth;
                lineHeights[i] = lineHeight;
                maxLineWidth = Math.max(maxLineWidth, lineWidth);
            }
            var stylesArray = Object.keys(textStyles).map(function (key) { return textStyles[key]; });
            var maxStrokeThickness = stylesArray.reduce(function (prev, curr) { return Math.max(prev, curr.strokeThickness || 0); }, 0);
            var dropShadowPadding = this.getDropShadowPadding();
            var maxLineHeight = lineHeights.reduce(function (prev, curr) { return Math.max(prev, curr); }, 0);
            var width = maxLineWidth + maxStrokeThickness + 2 * dropShadowPadding;
            var height = (maxLineHeight * lines.length) + 2 * dropShadowPadding;
            this.canvas.width = (width + this.context.lineWidth) * this.resolution;
            this.canvas.height = height * this.resolution;
            this.context.scale(this.resolution, this.resolution);
            this.context.textBaseline = "alphabetic";
            this.context.lineJoin = "round";
            var basePositionY = dropShadowPadding;
            var drawingData = [];
            for (var i = 0; i < outputTextData.length; i++) {
                var line = outputTextData[i];
                var linePositionX = void 0;
                switch (this._style.align) {
                    case "left":
                        linePositionX = dropShadowPadding;
                        break;
                    case "center":
                        linePositionX = dropShadowPadding + (maxLineWidth - lineWidths[i]) / 2;
                        break;
                    case "right":
                        linePositionX = dropShadowPadding + maxLineWidth - lineWidths[i];
                        break;
                }
                for (var j = 0; j < line.length; j++) {
                    var _a = line[j], style = _a.style, text = _a.text, fontProperties = _a.fontProperties;
                    linePositionX += maxStrokeThickness / 2;
                    var linePositionY = maxStrokeThickness / 2 + basePositionY + fontProperties.ascent;
                    if (style.valign === "bottom") {
                        linePositionY += lineHeights[i] - line[j].height - (maxStrokeThickness - style.strokeThickness) / 2;
                    }
                    else if (style.valign === "middle") {
                        linePositionY += (lineHeights[i] - line[j].height) / 2 - (maxStrokeThickness - style.strokeThickness) / 2;
                    }
                    if (style.letterSpacing === 0) {
                        drawingData.push({
                            text: text,
                            style: style,
                            x: linePositionX,
                            y: linePositionY
                        });
                        linePositionX += line[j].width;
                    }
                    else {
                        this.context.font = PIXI.Text.getFontStyle(line[j].style);
                        for (var k = 0; k < text.length; k++) {
                            if (k > 0 || j > 0) {
                                linePositionX += style.letterSpacing / 2;
                            }
                            drawingData.push({
                                text: text.charAt(k),
                                style: style,
                                x: linePositionX,
                                y: linePositionY
                            });
                            linePositionX += this.context.measureText(text.charAt(k)).width;
                            if (k < text.length - 1 || j < line.length - 1) {
                                linePositionX += style.letterSpacing / 2;
                            }
                        }
                    }
                    linePositionX -= maxStrokeThickness / 2;
                }
                basePositionY += lineHeights[i];
            }
            this.context.save();
            drawingData.forEach(function (_a) {
                var style = _a.style, text = _a.text, x = _a.x, y = _a.y;
                if (!style.dropShadow) {
                    return;
                }
                _this.context.font = PIXI.Text.getFontStyle(style);
                var dropFillStyle = style.dropShadowColor;
                if (typeof dropFillStyle === "number") {
                    dropFillStyle = PIXI.utils.hex2string(dropFillStyle);
                }
                _this.context.shadowColor = dropFillStyle;
                _this.context.shadowBlur = style.dropShadowBlur;
                _this.context.shadowOffsetX = Math.cos(style.dropShadowAngle) * style.dropShadowDistance * _this.resolution;
                _this.context.shadowOffsetY = Math.sin(style.dropShadowAngle) * style.dropShadowDistance * _this.resolution;
                _this.context.fillText(text, x, y);
            });
            this.context.restore();
            drawingData.forEach(function (_a) {
                var style = _a.style, text = _a.text, x = _a.x, y = _a.y;
                _this.context.font = PIXI.Text.getFontStyle(style);
                var strokeStyle = style.stroke;
                if (typeof strokeStyle === "number") {
                    strokeStyle = PIXI.utils.hex2string(strokeStyle);
                }
                _this.context.strokeStyle = strokeStyle;
                _this.context.lineWidth = style.strokeThickness;
                var fillStyle = style.fill;
                if (typeof fillStyle === "number") {
                    fillStyle = PIXI.utils.hex2string(fillStyle);
                }
                else if (Array.isArray(fillStyle)) {
                    for (var i = 0; i < fillStyle.length; i++) {
                        var fill = fillStyle[i];
                        if (typeof fill === "number") {
                            fillStyle[i] = PIXI.utils.hex2string(fill);
                        }
                    }
                }
                _this.context.fillStyle = _this._generateFillStyle(new PIXI.TextStyle(style), [text]);
                if (style.stroke && style.strokeThickness) {
                    _this.context.strokeText(text, x, y);
                }
                if (style.fill) {
                    _this.context.fillText(text, x, y);
                }
            });
            this.updateTexture();
        };
        MultiStyleText.prototype.wordWrap = function (text) {
            var result = '';
            var tags = Object.keys(this.textStyles).join("|");
            var re = new RegExp("(</?(" + tags + ")>)", "g");
            var lines = text.split("\n");
            var wordWrapWidth = this._style.wordWrapWidth;
            var styleStack = [this.assign({}, this.textStyles["default"])];
            this.context.font = PIXI.Text.getFontStyle(this.textStyles["default"]);
            for (var i = 0; i < lines.length; i++) {
                var spaceLeft = wordWrapWidth;
                var words = lines[i].split(" ");
                for (var j = 0; j < words.length; j++) {
                    var parts = words[j].split(re);
                    for (var k = 0; k < parts.length; k++) {
                        if (re.test(parts[k])) {
                            result += parts[k];
                            if (parts[k][1] === "/") {
                                k++;
                                styleStack.pop();
                            }
                            else {
                                k++;
                                styleStack.push(this.assign({}, styleStack[styleStack.length - 1], this.textStyles[parts[k]]));
                            }
                            this.context.font = PIXI.Text.getFontStyle(styleStack[styleStack.length - 1]);
                            continue;
                        }
                        var partWidth = this.context.measureText(parts[k]).width;
                        if (this._style.breakWords && partWidth > wordWrapWidth) {
                            var characters = parts[k].split('');
                            if (j > 0 && k === 0) {
                                result += " ";
                                spaceLeft -= this.context.measureText(" ").width;
                            }
                            for (var c = 0; c < characters.length; c++) {
                                var characterWidth = this.context.measureText(characters[c]).width;
                                if (characterWidth > spaceLeft) {
                                    result += "\n" + characters[c];
                                    spaceLeft = wordWrapWidth - characterWidth;
                                }
                                else {
                                    if (j > 0 && k === 0 && c === 0) {
                                        result += " ";
                                    }
                                    result += characters[c];
                                    spaceLeft -= characterWidth;
                                }
                            }
                        }
                        else {
                            var paddedPartWidth = partWidth + (k === 0 ? this.context.measureText(" ").width : 0);
                            if (j === 0 || paddedPartWidth > spaceLeft) {
                                if (j > 0) {
                                    result += "\n";
                                }
                                result += parts[k];
                                spaceLeft = wordWrapWidth - partWidth;
                            }
                            else {
                                spaceLeft -= paddedPartWidth;
                                if (k === 0) {
                                    result += " ";
                                }
                                result += parts[k];
                            }
                        }
                    }
                }
                if (i < lines.length - 1) {
                    result += '\n';
                }
            }
            return result;
        };
        MultiStyleText.prototype.updateTexture = function () {
            var texture = this._texture;
            var dropShadowPadding = this.getDropShadowPadding();
            texture.baseTexture.hasLoaded = true;
            texture.baseTexture.resolution = this.resolution;
            texture.baseTexture.realWidth = this.canvas.width;
            texture.baseTexture.realHeight = this.canvas.height;
            texture.baseTexture.width = this.canvas.width / this.resolution;
            texture.baseTexture.height = this.canvas.height / this.resolution;
            texture.trim.width = texture.frame.width = this.canvas.width / this.resolution;
            texture.trim.height = texture.frame.height = this.canvas.height / this.resolution;
            texture.trim.x = -this._style.padding - dropShadowPadding;
            texture.trim.y = -this._style.padding - dropShadowPadding;
            texture.orig.width = texture.frame.width - (this._style.padding + dropShadowPadding) * 2;
            texture.orig.height = texture.frame.height - (this._style.padding + dropShadowPadding) * 2;
            this._onTextureUpdate();
            texture.baseTexture.emit('update', texture.baseTexture);
            this.dirty = false;
        };
        MultiStyleText.prototype.assign = function (destination) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
                var source = sources_1[_a];
                for (var key in source) {
                    destination[key] = source[key];
                }
            }
            return destination;
        };
        return MultiStyleText;
    }(PIXI.Text));
    MultiStyleText.DEFAULT_TAG_STYLE = {
        align: "left",
        breakWords: false,
        dropShadow: false,
        dropShadowAngle: Math.PI / 6,
        dropShadowBlur: 0,
        dropShadowColor: "#000000",
        dropShadowDistance: 5,
        fill: "black",
        fillGradientType: PIXI.TEXT_GRADIENT.LINEAR_VERTICAL,
        fontFamily: "Arial",
        fontSize: 26,
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 0,
        lineJoin: "miter",
        miterLimit: 10,
        padding: 0,
        stroke: "black",
        strokeThickness: 0,
        textBaseline: "alphabetic",
        wordWrap: false,
        wordWrapWidth: 100
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MultiStyleText;
});

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInBpeGktbXVsdGlzdHlsZS10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUNFQSxZQUFZLENBQUM7SUErQmI7UUFBNEMsa0NBQVM7UUE4QnBELHdCQUFZLElBQVksRUFBRSxNQUFvQjtZQUE5QyxZQUNDLGtCQUFNLElBQUksQ0FBQyxTQUdYO1lBREEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O1FBQ3RCLENBQUM7UUFFRCxzQkFBVyxrQ0FBTTtpQkFBakIsVUFBa0IsTUFBb0I7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUVyQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUUvRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUMxQixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3pELENBQUM7Z0JBQ0YsQ0FBQztnQkFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FB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QUNyQixJQUFJLEVBQUUsT0FBTztRQUNiLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtRQUNwRCxVQUFVLEVBQUUsT0FBTztRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLFVBQVUsRUFBRSxDQUFDO1FBQ2IsUUFBUSxFQUFFLE9BQU87UUFDakIsVUFBVSxFQUFFLEVBQUU7UUFDZCxPQUFPLEVBQUUsQ0FBQztRQUNWLE1BQU0sRUFBRSxPQUFPO1FBQ2YsZUFBZSxFQUFFLENBQUM7UUFDbEIsWUFBWSxFQUFFLFlBQVk7UUFDMUIsUUFBUSxFQUFFLEtBQUs7UUFDZixhQUFhLEVBQUUsR0FBRztLQUNsQixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcGl4aS1tdWx0aXN0eWxlLXRleHRcIikuZGVmYXVsdDsiLCIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInBpeGkuanNcIiAvPlxuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFeHRlbmRlZFRleHRTdHlsZSBleHRlbmRzIFBJWEkuVGV4dFN0eWxlT3B0aW9ucyB7XG5cdHZhbGlnbj86IFwidG9wXCIgfCBcIm1pZGRsZVwiIHwgXCJib3R0b21cIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXh0U3R5bGVTZXQge1xuXHRba2V5OiBzdHJpbmddOiBFeHRlbmRlZFRleHRTdHlsZTtcbn1cblxuaW50ZXJmYWNlIEZvbnRQcm9wZXJ0aWVzIHtcblx0YXNjZW50OiBudW1iZXI7XG5cdGRlc2NlbnQ6IG51bWJlcjtcblx0Zm9udFNpemU6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFRleHREYXRhIHtcblx0dGV4dDogc3RyaW5nO1xuXHRzdHlsZTogRXh0ZW5kZWRUZXh0U3R5bGU7XG5cdHdpZHRoOiBudW1iZXI7XG5cdGhlaWdodDogbnVtYmVyO1xuXHRmb250UHJvcGVydGllczogRm9udFByb3BlcnRpZXM7XG59XG5cbmludGVyZmFjZSBUZXh0RHJhd2luZ0RhdGEge1xuXHR0ZXh0OiBzdHJpbmc7XG5cdHN0eWxlOiBFeHRlbmRlZFRleHRTdHlsZTtcblx0eDogbnVtYmVyO1xuXHR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpU3R5bGVUZXh0IGV4dGVuZHMgUElYSS5UZXh0IHtcblx0cHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9UQUdfU1RZTEU6IEV4dGVuZGVkVGV4dFN0eWxlID0ge1xuXHRcdGFsaWduOiBcImxlZnRcIixcblx0XHRicmVha1dvcmRzOiBmYWxzZSxcblx0XHRkcm9wU2hhZG93OiBmYWxzZSxcblx0XHRkcm9wU2hhZG93QW5nbGU6IE1hdGguUEkgLyA2LFxuXHRcdGRyb3BTaGFkb3dCbHVyOiAwLFxuXHRcdGRyb3BTaGFkb3dDb2xvcjogXCIjMDAwMDAwXCIsXG5cdFx0ZHJvcFNoYWRvd0Rpc3RhbmNlOiA1LFxuXHRcdGZpbGw6IFwiYmxhY2tcIixcblx0XHRmaWxsR3JhZGllbnRUeXBlOiBQSVhJLlRFWFRfR1JBRElFTlQuTElORUFSX1ZFUlRJQ0FMLFxuXHRcdGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcblx0XHRmb250U2l6ZTogMjYsXG5cdFx0Zm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuXHRcdGZvbnRWYXJpYW50OiBcIm5vcm1hbFwiLFxuXHRcdGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG5cdFx0bGV0dGVyU3BhY2luZzogMCxcblx0XHRsaW5lSGVpZ2h0OiAwLFxuXHRcdGxpbmVKb2luOiBcIm1pdGVyXCIsXG5cdFx0bWl0ZXJMaW1pdDogMTAsXG5cdFx0cGFkZGluZzogMCxcblx0XHRzdHJva2U6IFwiYmxhY2tcIixcblx0XHRzdHJva2VUaGlja25lc3M6IDAsXG5cdFx0dGV4dEJhc2VsaW5lOiBcImFscGhhYmV0aWNcIixcblx0XHR3b3JkV3JhcDogZmFsc2UsXG5cdFx0d29yZFdyYXBXaWR0aDogMTAwXG5cdH07XG5cblx0cHJpdmF0ZSB0ZXh0U3R5bGVzOiBUZXh0U3R5bGVTZXQ7XG5cblx0Y29uc3RydWN0b3IodGV4dDogc3RyaW5nLCBzdHlsZXM6IFRleHRTdHlsZVNldCkge1xuXHRcdHN1cGVyKHRleHQpO1xuXG5cdFx0dGhpcy5zdHlsZXMgPSBzdHlsZXM7XG5cdH1cblxuXHRwdWJsaWMgc2V0IHN0eWxlcyhzdHlsZXM6IFRleHRTdHlsZVNldCkge1xuXHRcdHRoaXMudGV4dFN0eWxlcyA9IHt9O1xuXG5cdFx0dGhpcy50ZXh0U3R5bGVzW1wiZGVmYXVsdFwiXSA9IHRoaXMuYXNzaWduKHt9LCBNdWx0aVN0eWxlVGV4dC5ERUZBVUxUX1RBR19TVFlMRSk7XG5cblx0XHRmb3IgKGxldCBzdHlsZSBpbiBzdHlsZXMpIHtcblx0XHRcdGlmIChzdHlsZSA9PT0gXCJkZWZhdWx0XCIpIHtcblx0XHRcdFx0dGhpcy5hc3NpZ24odGhpcy50ZXh0U3R5bGVzW1wiZGVmYXVsdFwiXSwgc3R5bGVzW3N0eWxlXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRleHRTdHlsZXNbc3R5bGVdID0gdGhpcy5hc3NpZ24oe30sIHN0eWxlc1tzdHlsZV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX3N0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHRoaXMudGV4dFN0eWxlc1tcImRlZmF1bHRcIl0pO1xuXHRcdHRoaXMuZGlydHkgPSB0cnVlO1xuXHR9XG5cblx0cHVibGljIHNldFRhZ1N0eWxlKHRhZzogc3RyaW5nLCBzdHlsZTogRXh0ZW5kZWRUZXh0U3R5bGUpOiB2b2lkIHtcblx0XHRpZiAodGFnIGluIHRoaXMudGV4dFN0eWxlcykge1xuXHRcdFx0dGhpcy5hc3NpZ24odGhpcy50ZXh0U3R5bGVzW3RhZ10sIHN0eWxlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50ZXh0U3R5bGVzW3RhZ10gPSB0aGlzLmFzc2lnbih7fSwgc3R5bGUpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3N0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHRoaXMudGV4dFN0eWxlc1tcImRlZmF1bHRcIl0pO1xuXHRcdHRoaXMuZGlydHkgPSB0cnVlO1xuXHR9XG5cblx0cHVibGljIGRlbGV0ZVRhZ1N0eWxlKHRhZzogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRhZyA9PT0gXCJkZWZhdWx0XCIpIHtcblx0XHRcdHRoaXMudGV4dFN0eWxlc1tcImRlZmF1bHRcIl0gPSB0aGlzLmFzc2lnbih7fSwgTXVsdGlTdHlsZVRleHQuREVGQVVMVF9UQUdfU1RZTEUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZWxldGUgdGhpcy50ZXh0U3R5bGVzW3RhZ107XG5cdFx0fVxuXG5cdFx0dGhpcy5fc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUodGhpcy50ZXh0U3R5bGVzW1wiZGVmYXVsdFwiXSk7XG5cdFx0dGhpcy5kaXJ0eSA9IHRydWU7XG5cdH1cblxuXHRwcml2YXRlIF9nZXRUZXh0RGF0YVBlckxpbmUgKGxpbmVzOiBzdHJpbmdbXSkge1xuXHRcdGxldCBvdXRwdXRUZXh0RGF0YTogVGV4dERhdGFbXVtdID0gW107XG5cdFx0bGV0IHRhZ3MgPSBPYmplY3Qua2V5cyh0aGlzLnRleHRTdHlsZXMpLmpvaW4oXCJ8XCIpO1xuXHRcdGxldCByZSA9IG5ldyBSZWdFeHAoYDxcXC8/KCR7dGFnc30pPmAsIFwiZ1wiKTtcblxuXHRcdGxldCBzdHlsZVN0YWNrID0gW3RoaXMuYXNzaWduKHt9LCB0aGlzLnRleHRTdHlsZXNbXCJkZWZhdWx0XCJdKV07XG5cblx0XHQvLyBkZXRlcm1pbmUgdGhlIGdyb3VwIG9mIHdvcmQgZm9yIGVhY2ggbGluZVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBsaW5lVGV4dERhdGE6IFRleHREYXRhW10gPSBbXTtcblxuXHRcdFx0Ly8gZmluZCB0YWdzIGluc2lkZSB0aGUgc3RyaW5nXG5cdFx0XHRsZXQgbWF0Y2hlczogUmVnRXhwRXhlY0FycmF5W10gPSBbXTtcblx0XHRcdGxldCBtYXRjaEFycmF5OiBSZWdFeHBFeGVjQXJyYXk7XG5cblx0XHRcdHdoaWxlIChtYXRjaEFycmF5ID0gcmUuZXhlYyhsaW5lc1tpXSkpIHtcblx0XHRcdFx0bWF0Y2hlcy5wdXNoKG1hdGNoQXJyYXkpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBtYXRjaCwgd2Ugc3RpbGwgbmVlZCB0byBhZGQgdGhlIGxpbmUgd2l0aCB0aGUgZGVmYXVsdCBzdHlsZVxuXHRcdFx0aWYgKG1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGxpbmVUZXh0RGF0YS5wdXNoKHRoaXMuY3JlYXRlVGV4dERhdGEobGluZXNbaV0sIHN0eWxlU3RhY2tbc3R5bGVTdGFjay5sZW5ndGggLSAxXSkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vIFdlIGdvdCBhIG1hdGNoISBhZGQgdGhlIHRleHQgd2l0aCB0aGUgbmVlZGVkIHN0eWxlXG5cdFx0XHRcdGxldCBjdXJyZW50U2VhcmNoSWR4ID0gMDtcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBtYXRjaGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0Ly8gaWYgaW5kZXggPiAwLCBpdCBtZWFucyB3ZSBoYXZlIGNoYXJhY3RlcnMgYmVmb3JlIHRoZSBtYXRjaCxcblx0XHRcdFx0XHQvLyBzbyB3ZSBuZWVkIHRvIGFkZCBpdCB3aXRoIHRoZSBkZWZhdWx0IHN0eWxlXG5cdFx0XHRcdFx0aWYgKG1hdGNoZXNbal0uaW5kZXggPiBjdXJyZW50U2VhcmNoSWR4KSB7XG5cdFx0XHRcdFx0XHRsaW5lVGV4dERhdGEucHVzaCh0aGlzLmNyZWF0ZVRleHREYXRhKFxuXHRcdFx0XHRcdFx0XHRsaW5lc1tpXS5zdWJzdHJpbmcoY3VycmVudFNlYXJjaElkeCwgbWF0Y2hlc1tqXS5pbmRleCksXG5cdFx0XHRcdFx0XHRcdHN0eWxlU3RhY2tbc3R5bGVTdGFjay5sZW5ndGggLSAxXVxuXHRcdFx0XHRcdFx0KSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKG1hdGNoZXNbal1bMF1bMV0gPT09IFwiL1wiKSB7IC8vIHJlc2V0IHRoZSBzdHlsZSBpZiBlbmQgb2YgdGFnXG5cdFx0XHRcdFx0XHRpZiAoc3R5bGVTdGFjay5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHN0eWxlU3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHsgLy8gc2V0IHRoZSBjdXJyZW50IHN0eWxlXG5cdFx0XHRcdFx0XHRzdHlsZVN0YWNrLnB1c2godGhpcy5hc3NpZ24oe30sIHN0eWxlU3RhY2tbc3R5bGVTdGFjay5sZW5ndGggLSAxXSwgdGhpcy50ZXh0U3R5bGVzW21hdGNoZXNbal1bMV1dKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBjdXJyZW50IHNlYXJjaCBpbmRleFxuXHRcdFx0XHRcdGN1cnJlbnRTZWFyY2hJZHggPSBtYXRjaGVzW2pdLmluZGV4ICsgbWF0Y2hlc1tqXVswXS5sZW5ndGg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpcyB0aGVyZSBhbnkgY2hhcmFjdGVyIGxlZnQ/XG5cdFx0XHRcdGlmIChjdXJyZW50U2VhcmNoSWR4IDwgbGluZXNbaV0ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0bGluZVRleHREYXRhLnB1c2godGhpcy5jcmVhdGVUZXh0RGF0YShcblx0XHRcdFx0XHRcdGxpbmVzW2ldLnN1YnN0cmluZyhjdXJyZW50U2VhcmNoSWR4KSxcblx0XHRcdFx0XHRcdHN0eWxlU3RhY2tbc3R5bGVTdGFjay5sZW5ndGggLSAxXVxuXHRcdFx0XHRcdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG91dHB1dFRleHREYXRhLnB1c2gobGluZVRleHREYXRhKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0VGV4dERhdGE7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVRleHREYXRhKHRleHQ6IHN0cmluZywgc3R5bGU6IEV4dGVuZGVkVGV4dFN0eWxlKTogVGV4dERhdGEge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0LFxuXHRcdFx0c3R5bGUsXG5cdFx0XHR3aWR0aDogMCxcblx0XHRcdGhlaWdodDogMCxcblx0XHRcdGZvbnRQcm9wZXJ0aWVzOiB1bmRlZmluZWRcblx0XHR9O1xuXHR9XG5cblx0cHJpdmF0ZSBnZXREcm9wU2hhZG93UGFkZGluZygpOiBudW1iZXIge1xuXHRcdGxldCBtYXhEaXN0YW5jZSA9IDA7XG5cdFx0bGV0IG1heEJsdXIgPSAwO1xuXG5cdFx0IE9iamVjdC5rZXlzKHRoaXMudGV4dFN0eWxlcykuZm9yRWFjaCgoc3R5bGVLZXkpID0+IHtcblx0XHRcdGxldCB7IGRyb3BTaGFkb3dEaXN0YW5jZSwgZHJvcFNoYWRvd0JsdXIgfSA9IHRoaXMudGV4dFN0eWxlc1tzdHlsZUtleV07XG5cdFx0XHRtYXhEaXN0YW5jZSA9IE1hdGgubWF4KG1heERpc3RhbmNlLCBkcm9wU2hhZG93RGlzdGFuY2UgfHwgMCk7XG5cdFx0XHRtYXhCbHVyID0gTWF0aC5tYXgobWF4Qmx1ciwgZHJvcFNoYWRvd0JsdXIgfHwgMCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbWF4RGlzdGFuY2UgKyBtYXhCbHVyO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZVRleHQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmRpcnR5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy50ZXh0dXJlLmJhc2VUZXh0dXJlLnJlc29sdXRpb24gPSB0aGlzLnJlc29sdXRpb247XG5cdFx0bGV0IHRleHRTdHlsZXMgPSB0aGlzLnRleHRTdHlsZXM7XG5cdFx0bGV0IG91dHB1dFRleHQgPSB0aGlzLnRleHQ7XG5cblx0XHRpZih0aGlzLl9zdHlsZS53b3JkV3JhcCkge1xuXHRcdFx0b3V0cHV0VGV4dCA9IHRoaXMud29yZFdyYXAodGhpcy50ZXh0KTtcblx0XHR9XG5cblx0XHQvLyBzcGxpdCB0ZXh0IGludG8gbGluZXNcblx0XHRsZXQgbGluZXMgPSBvdXRwdXRUZXh0LnNwbGl0KC8oPzpcXHJcXG58XFxyfFxcbikvKTtcblxuXHRcdC8vIGdldCB0aGUgdGV4dCBkYXRhIHdpdGggc3BlY2lmaWMgc3R5bGVzXG5cdFx0bGV0IG91dHB1dFRleHREYXRhID0gdGhpcy5fZ2V0VGV4dERhdGFQZXJMaW5lKGxpbmVzKTtcblxuXHRcdC8vIGNhbGN1bGF0ZSB0ZXh0IHdpZHRoIGFuZCBoZWlnaHRcblx0XHRsZXQgbGluZVdpZHRoczogbnVtYmVyW10gPSBbXTtcblx0XHRsZXQgbGluZUhlaWdodHM6IG51bWJlcltdID0gW107XG5cdFx0bGV0IG1heExpbmVXaWR0aCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbGluZVdpZHRoID0gMDtcblx0XHRcdGxldCBsaW5lSGVpZ2h0ID0gMDtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgb3V0cHV0VGV4dERhdGFbaV0ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKG91dHB1dFRleHREYXRhW2ldW2pdLnRleHQubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBzdHkgPSBvdXRwdXRUZXh0RGF0YVtpXVtqXS5zdHlsZTtcblxuXHRcdFx0XHR0aGlzLmNvbnRleHQuZm9udCA9IFBJWEkuVGV4dC5nZXRGb250U3R5bGUoc3R5KTtcblxuXHRcdFx0XHQvLyBzYXZlIHRoZSB3aWR0aFxuXHRcdFx0XHRvdXRwdXRUZXh0RGF0YVtpXVtqXS53aWR0aCA9IHRoaXMuY29udGV4dC5tZWFzdXJlVGV4dChvdXRwdXRUZXh0RGF0YVtpXVtqXS50ZXh0KS53aWR0aCArIChvdXRwdXRUZXh0RGF0YVtpXVtqXS50ZXh0Lmxlbmd0aCAtIDEpICogc3R5LmxldHRlclNwYWNpbmc7XG5cdFx0XHRcdGxpbmVXaWR0aCArPSBvdXRwdXRUZXh0RGF0YVtpXVtqXS53aWR0aDtcblxuXHRcdFx0XHRpZiAoaiA+IDApIHtcblx0XHRcdFx0XHRsaW5lV2lkdGggKz0gc3R5LmxldHRlclNwYWNpbmcgLyAyOyAvLyBzcGFjaW5nIGJlZm9yZSBmaXJzdCBjaGFyYWN0ZXJcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChqIDwgb3V0cHV0VGV4dERhdGFbaV0ubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdGxpbmVXaWR0aCArPSBzdHkubGV0dGVyU3BhY2luZyAvIDI7IC8vIHNwYWNpbmcgYWZ0ZXIgbGFzdCBjaGFyYWN0ZXJcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHNhdmUgdGhlIGZvbnQgcHJvcGVydGllc1xuXHRcdFx0XHRvdXRwdXRUZXh0RGF0YVtpXVtqXS5mb250UHJvcGVydGllcyA9IFBJWEkuVGV4dC5jYWxjdWxhdGVGb250UHJvcGVydGllcyh0aGlzLmNvbnRleHQuZm9udCk7XG5cblx0XHRcdFx0Ly8gc2F2ZSB0aGUgaGVpZ2h0XG5cdFx0XHRcdG91dHB1dFRleHREYXRhW2ldW2pdLmhlaWdodCA9XG5cdFx0XHRcdFx0XHRvdXRwdXRUZXh0RGF0YVtpXVtqXS5mb250UHJvcGVydGllcy5mb250U2l6ZSArIG91dHB1dFRleHREYXRhW2ldW2pdLnN0eWxlLnN0cm9rZVRoaWNrbmVzcztcblx0XHRcdFx0bGluZUhlaWdodCA9IE1hdGgubWF4KGxpbmVIZWlnaHQsIG91dHB1dFRleHREYXRhW2ldW2pdLmhlaWdodCk7XG5cdFx0XHR9XG5cblx0XHRcdGxpbmVXaWR0aHNbaV0gPSBsaW5lV2lkdGg7XG5cdFx0XHRsaW5lSGVpZ2h0c1tpXSA9IGxpbmVIZWlnaHQ7XG5cdFx0XHRtYXhMaW5lV2lkdGggPSBNYXRoLm1heChtYXhMaW5lV2lkdGgsIGxpbmVXaWR0aCk7XG5cdFx0fVxuXG5cdFx0Ly8gdHJhbnNmb3JtIHN0eWxlcyBpbiBhcnJheVxuXHRcdGxldCBzdHlsZXNBcnJheSA9IE9iamVjdC5rZXlzKHRleHRTdHlsZXMpLm1hcCgoa2V5KSA9PiB0ZXh0U3R5bGVzW2tleV0pO1xuXG5cdFx0bGV0IG1heFN0cm9rZVRoaWNrbmVzcyA9IHN0eWxlc0FycmF5LnJlZHVjZSgocHJldiwgY3VycikgPT4gTWF0aC5tYXgocHJldiwgY3Vyci5zdHJva2VUaGlja25lc3MgfHwgMCksIDApO1xuXG5cdFx0bGV0IGRyb3BTaGFkb3dQYWRkaW5nID0gdGhpcy5nZXREcm9wU2hhZG93UGFkZGluZygpO1xuXG5cdFx0bGV0IG1heExpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0cy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IE1hdGgubWF4KHByZXYsIGN1cnIpLCAwKTtcblxuXHRcdC8vIGRlZmluZSB0aGUgcmlnaHQgd2lkdGggYW5kIGhlaWdodFxuXHRcdGxldCB3aWR0aCA9IG1heExpbmVXaWR0aCArIG1heFN0cm9rZVRoaWNrbmVzcyArIDIgKiBkcm9wU2hhZG93UGFkZGluZztcblx0XHRsZXQgaGVpZ2h0ID0gKG1heExpbmVIZWlnaHQgKiBsaW5lcy5sZW5ndGgpICsgMiAqIGRyb3BTaGFkb3dQYWRkaW5nO1xuXG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSAod2lkdGggKyB0aGlzLmNvbnRleHQubGluZVdpZHRoKSAqIHRoaXMucmVzb2x1dGlvbjtcblx0XHR0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiB0aGlzLnJlc29sdXRpb247XG5cblx0XHR0aGlzLmNvbnRleHQuc2NhbGUodGhpcy5yZXNvbHV0aW9uLCB0aGlzLnJlc29sdXRpb24pO1xuXG5cdFx0dGhpcy5jb250ZXh0LnRleHRCYXNlbGluZSA9IFwiYWxwaGFiZXRpY1wiO1xuXHRcdHRoaXMuY29udGV4dC5saW5lSm9pbiA9IFwicm91bmRcIjtcblxuXHRcdGxldCBiYXNlUG9zaXRpb25ZID0gZHJvcFNoYWRvd1BhZGRpbmc7XG5cblx0XHRsZXQgZHJhd2luZ0RhdGE6IFRleHREcmF3aW5nRGF0YVtdID0gW107XG5cblx0XHQvLyBDb21wdXRlIHRoZSBkcmF3aW5nIGRhdGFcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG91dHB1dFRleHREYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbGluZSA9IG91dHB1dFRleHREYXRhW2ldO1xuXHRcdFx0bGV0IGxpbmVQb3NpdGlvblg6IG51bWJlcjtcblxuXHRcdFx0c3dpdGNoICh0aGlzLl9zdHlsZS5hbGlnbikge1xuXHRcdFx0XHRjYXNlIFwibGVmdFwiOlxuXHRcdFx0XHRcdGxpbmVQb3NpdGlvblggPSBkcm9wU2hhZG93UGFkZGluZztcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFwiY2VudGVyXCI6XG5cdFx0XHRcdFx0bGluZVBvc2l0aW9uWCA9IGRyb3BTaGFkb3dQYWRkaW5nICsgKG1heExpbmVXaWR0aCAtIGxpbmVXaWR0aHNbaV0pIC8gMjtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdFx0XHRsaW5lUG9zaXRpb25YID0gZHJvcFNoYWRvd1BhZGRpbmcgKyBtYXhMaW5lV2lkdGggLSBsaW5lV2lkdGhzW2ldO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxpbmUubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0bGV0IHsgc3R5bGUsIHRleHQsIGZvbnRQcm9wZXJ0aWVzIH0gPSBsaW5lW2pdO1xuXG5cdFx0XHRcdGxpbmVQb3NpdGlvblggKz0gbWF4U3Ryb2tlVGhpY2tuZXNzIC8gMjtcblxuXHRcdFx0XHRsZXQgbGluZVBvc2l0aW9uWSA9IG1heFN0cm9rZVRoaWNrbmVzcyAvIDIgKyBiYXNlUG9zaXRpb25ZICsgZm9udFByb3BlcnRpZXMuYXNjZW50O1xuXG5cdFx0XHRcdGlmIChzdHlsZS52YWxpZ24gPT09IFwiYm90dG9tXCIpIHtcblx0XHRcdFx0XHRsaW5lUG9zaXRpb25ZICs9IGxpbmVIZWlnaHRzW2ldIC0gbGluZVtqXS5oZWlnaHQgLSAobWF4U3Ryb2tlVGhpY2tuZXNzIC0gc3R5bGUuc3Ryb2tlVGhpY2tuZXNzKSAvIDI7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3R5bGUudmFsaWduID09PSBcIm1pZGRsZVwiKSB7XG5cdFx0XHRcdFx0bGluZVBvc2l0aW9uWSArPSAobGluZUhlaWdodHNbaV0gLSBsaW5lW2pdLmhlaWdodCkgLyAyIC0gKG1heFN0cm9rZVRoaWNrbmVzcyAtIHN0eWxlLnN0cm9rZVRoaWNrbmVzcykgLyAyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHN0eWxlLmxldHRlclNwYWNpbmcgPT09IDApIHtcblx0XHRcdFx0XHRkcmF3aW5nRGF0YS5wdXNoKHtcblx0XHRcdFx0XHRcdHRleHQsXG5cdFx0XHRcdFx0XHRzdHlsZSxcblx0XHRcdFx0XHRcdHg6IGxpbmVQb3NpdGlvblgsXG5cdFx0XHRcdFx0XHR5OiBsaW5lUG9zaXRpb25ZXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRsaW5lUG9zaXRpb25YICs9IGxpbmVbal0ud2lkdGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jb250ZXh0LmZvbnQgPSBQSVhJLlRleHQuZ2V0Rm9udFN0eWxlKGxpbmVbal0uc3R5bGUpO1xuXG5cdFx0XHRcdFx0Zm9yIChsZXQgayA9IDA7IGsgPCB0ZXh0Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRpZiAoayA+IDAgfHwgaiA+IDApIHtcblx0XHRcdFx0XHRcdFx0bGluZVBvc2l0aW9uWCArPSBzdHlsZS5sZXR0ZXJTcGFjaW5nIC8gMjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZHJhd2luZ0RhdGEucHVzaCh7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IHRleHQuY2hhckF0KGspLFxuXHRcdFx0XHRcdFx0XHRzdHlsZSxcblx0XHRcdFx0XHRcdFx0eDogbGluZVBvc2l0aW9uWCxcblx0XHRcdFx0XHRcdFx0eTogbGluZVBvc2l0aW9uWVxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdGxpbmVQb3NpdGlvblggKz0gdGhpcy5jb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQuY2hhckF0KGspKS53aWR0aDtcblxuXHRcdFx0XHRcdFx0aWYgKGsgPCB0ZXh0Lmxlbmd0aCAtIDEgfHwgaiA8IGxpbmUubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRsaW5lUG9zaXRpb25YICs9IHN0eWxlLmxldHRlclNwYWNpbmcgLyAyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxpbmVQb3NpdGlvblggLT0gbWF4U3Ryb2tlVGhpY2tuZXNzIC8gMjtcblx0XHRcdH1cblxuXHRcdFx0YmFzZVBvc2l0aW9uWSArPSBsaW5lSGVpZ2h0c1tpXTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnRleHQuc2F2ZSgpO1xuXG5cdFx0Ly8gRmlyc3QgcGFzczogZHJhdyB0aGUgc2hhZG93cyBvbmx5XG5cdFx0ZHJhd2luZ0RhdGEuZm9yRWFjaCgoeyBzdHlsZSwgdGV4dCwgeCwgeSB9KSA9PiB7XG5cdFx0XHRpZiAoIXN0eWxlLmRyb3BTaGFkb3cpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBUaGlzIHRleHQgZG9lc24ndCBoYXZlIGEgc2hhZG93XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY29udGV4dC5mb250ID0gUElYSS5UZXh0LmdldEZvbnRTdHlsZShzdHlsZSk7XG5cblx0XHRcdGxldCBkcm9wRmlsbFN0eWxlID0gc3R5bGUuZHJvcFNoYWRvd0NvbG9yO1xuXHRcdFx0aWYgKHR5cGVvZiBkcm9wRmlsbFN0eWxlID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdGRyb3BGaWxsU3R5bGUgPSBQSVhJLnV0aWxzLmhleDJzdHJpbmcoZHJvcEZpbGxTdHlsZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNvbnRleHQuc2hhZG93Q29sb3IgPSBkcm9wRmlsbFN0eWxlO1xuXHRcdFx0dGhpcy5jb250ZXh0LnNoYWRvd0JsdXIgPSBzdHlsZS5kcm9wU2hhZG93Qmx1cjtcblx0XHRcdHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRYID0gTWF0aC5jb3Moc3R5bGUuZHJvcFNoYWRvd0FuZ2xlKSAqIHN0eWxlLmRyb3BTaGFkb3dEaXN0YW5jZSAqIHRoaXMucmVzb2x1dGlvbjtcblx0XHRcdHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRZID0gTWF0aC5zaW4oc3R5bGUuZHJvcFNoYWRvd0FuZ2xlKSAqIHN0eWxlLmRyb3BTaGFkb3dEaXN0YW5jZSAqIHRoaXMucmVzb2x1dGlvbjtcblxuXHRcdFx0dGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcblxuXHRcdC8vIFNlY29uZCBwYXNzOiBkcmF3IHN0cm9rZXMgYW5kIGZpbGxzXG5cdFx0ZHJhd2luZ0RhdGEuZm9yRWFjaCgoeyBzdHlsZSwgdGV4dCwgeCwgeSB9KSA9PiB7XG5cdFx0XHR0aGlzLmNvbnRleHQuZm9udCA9IFBJWEkuVGV4dC5nZXRGb250U3R5bGUoc3R5bGUpO1xuXG5cdFx0XHRsZXQgc3Ryb2tlU3R5bGUgPSBzdHlsZS5zdHJva2U7XG5cdFx0XHRpZiAodHlwZW9mIHN0cm9rZVN0eWxlID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdHN0cm9rZVN0eWxlID0gUElYSS51dGlscy5oZXgyc3RyaW5nKHN0cm9rZVN0eWxlKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG5cdFx0XHR0aGlzLmNvbnRleHQubGluZVdpZHRoID0gc3R5bGUuc3Ryb2tlVGhpY2tuZXNzO1xuXG5cdFx0XHQvLyBzZXQgY2FudmFzIHRleHQgc3R5bGVzXG5cdFx0XHRsZXQgZmlsbFN0eWxlID0gc3R5bGUuZmlsbDtcblx0XHRcdGlmICh0eXBlb2YgZmlsbFN0eWxlID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdGZpbGxTdHlsZSA9IFBJWEkudXRpbHMuaGV4MnN0cmluZyhmaWxsU3R5bGUpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpbGxTdHlsZSkpIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWxsU3R5bGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgZmlsbCA9IGZpbGxTdHlsZVtpXTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGZpbGwgPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0XHRcdGZpbGxTdHlsZVtpXSA9IFBJWEkudXRpbHMuaGV4MnN0cmluZyhmaWxsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLl9nZW5lcmF0ZUZpbGxTdHlsZShuZXcgUElYSS5UZXh0U3R5bGUoc3R5bGUpLCBbdGV4dF0pIGFzIHN0cmluZyB8IENhbnZhc0dyYWRpZW50O1xuXHRcdFx0Ly8gVHlwZWNhc3QgcmVxdWlyZWQgZm9yIHByb3BlciB0eXBlY2hlY2tpbmdcblxuXHRcdFx0aWYgKHN0eWxlLnN0cm9rZSAmJiBzdHlsZS5zdHJva2VUaGlja25lc3MpIHtcblx0XHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZVRleHQodGV4dCwgeCwgeSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdHlsZS5maWxsKSB7XG5cdFx0XHRcdHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMudXBkYXRlVGV4dHVyZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHdvcmRXcmFwKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0Ly8gR3JlZWR5IHdyYXBwaW5nIGFsZ29yaXRobSB0aGF0IHdpbGwgd3JhcCB3b3JkcyBhcyB0aGUgbGluZSBncm93cyBsb25nZXIgdGhhbiBpdHMgaG9yaXpvbnRhbCBib3VuZHMuXG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGxldCB0YWdzID0gT2JqZWN0LmtleXModGhpcy50ZXh0U3R5bGVzKS5qb2luKFwifFwiKTtcblx0XHRsZXQgcmUgPSBuZXcgUmVnRXhwKGAoPFxcLz8oJHt0YWdzfSk+KWAsIFwiZ1wiKTtcblxuXHRcdGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcblx0XHRjb25zdCB3b3JkV3JhcFdpZHRoID0gdGhpcy5fc3R5bGUud29yZFdyYXBXaWR0aDtcblx0XHRsZXQgc3R5bGVTdGFjayA9IFt0aGlzLmFzc2lnbih7fSwgdGhpcy50ZXh0U3R5bGVzW1wiZGVmYXVsdFwiXSldO1xuXHRcdHRoaXMuY29udGV4dC5mb250ID0gUElYSS5UZXh0LmdldEZvbnRTdHlsZSh0aGlzLnRleHRTdHlsZXNbXCJkZWZhdWx0XCJdKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBzcGFjZUxlZnQgPSB3b3JkV3JhcFdpZHRoO1xuXHRcdFx0Y29uc3Qgd29yZHMgPSBsaW5lc1tpXS5zcGxpdChcIiBcIik7XG5cblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgd29yZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0Y29uc3QgcGFydHMgPSB3b3Jkc1tqXS5zcGxpdChyZSk7XG5cblx0XHRcdFx0Zm9yIChsZXQgayA9IDA7IGsgPCBwYXJ0cy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdGlmIChyZS50ZXN0KHBhcnRzW2tdKSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IHBhcnRzW2tdO1xuXHRcdFx0XHRcdFx0aWYgKHBhcnRzW2tdWzFdID09PSBcIi9cIikge1xuXHRcdFx0XHRcdFx0XHRrKys7XG5cdFx0XHRcdFx0XHRcdHN0eWxlU3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRrKys7XG5cdFx0XHRcdFx0XHRcdHN0eWxlU3RhY2sucHVzaCh0aGlzLmFzc2lnbih7fSwgc3R5bGVTdGFja1tzdHlsZVN0YWNrLmxlbmd0aCAtIDFdLCB0aGlzLnRleHRTdHlsZXNbcGFydHNba11dKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRleHQuZm9udCA9IFBJWEkuVGV4dC5nZXRGb250U3R5bGUoc3R5bGVTdGFja1tzdHlsZVN0YWNrLmxlbmd0aCAtIDFdKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHBhcnRXaWR0aCA9IHRoaXMuY29udGV4dC5tZWFzdXJlVGV4dChwYXJ0c1trXSkud2lkdGg7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5fc3R5bGUuYnJlYWtXb3JkcyAmJiBwYXJ0V2lkdGggPiB3b3JkV3JhcFdpZHRoKSB7XG5cdFx0XHRcdFx0XHQvLyBQYXJ0IHNob3VsZCBiZSBzcGxpdCBpbiB0aGUgbWlkZGxlXG5cdFx0XHRcdFx0XHRjb25zdCBjaGFyYWN0ZXJzID0gcGFydHNba10uc3BsaXQoJycpO1xuXG5cdFx0XHRcdFx0XHRpZiAoaiA+IDAgJiYgayA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQgKz0gXCIgXCI7XG5cdFx0XHRcdFx0XHRcdHNwYWNlTGVmdCAtPSB0aGlzLmNvbnRleHQubWVhc3VyZVRleHQoXCIgXCIpLndpZHRoO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBjID0gMDsgYyA8IGNoYXJhY3RlcnMubGVuZ3RoOyBjKyspIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgY2hhcmFjdGVyV2lkdGggPSB0aGlzLmNvbnRleHQubWVhc3VyZVRleHQoY2hhcmFjdGVyc1tjXSkud2lkdGg7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGNoYXJhY3RlcldpZHRoID4gc3BhY2VMZWZ0KSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0ICs9IGBcXG4ke2NoYXJhY3RlcnNbY119YDtcblx0XHRcdFx0XHRcdFx0XHRzcGFjZUxlZnQgPSB3b3JkV3JhcFdpZHRoIC0gY2hhcmFjdGVyV2lkdGg7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGogPiAwICYmIGsgPT09IDAgJiYgYyA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0ICs9IFwiIFwiO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdCArPSBjaGFyYWN0ZXJzW2NdO1xuXHRcdFx0XHRcdFx0XHRcdHNwYWNlTGVmdCAtPSBjaGFyYWN0ZXJXaWR0aDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zdCBwYWRkZWRQYXJ0V2lkdGggPVxuXHRcdFx0XHRcdFx0XHRwYXJ0V2lkdGggKyAoayA9PT0gMCA/IHRoaXMuY29udGV4dC5tZWFzdXJlVGV4dChcIiBcIikud2lkdGggOiAwKTtcblxuXHRcdFx0XHRcdFx0aWYgKGogPT09IDAgfHwgcGFkZGVkUGFydFdpZHRoID4gc3BhY2VMZWZ0KSB7XG5cdFx0XHRcdFx0XHRcdC8vIFNraXAgcHJpbnRpbmcgdGhlIG5ld2xpbmUgaWYgaXQncyB0aGUgZmlyc3Qgd29yZCBvZiB0aGUgbGluZSB0aGF0IGlzXG5cdFx0XHRcdFx0XHRcdC8vIGdyZWF0ZXIgdGhhbiB0aGUgd29yZCB3cmFwIHdpZHRoLlxuXHRcdFx0XHRcdFx0XHRpZiAoaiA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQgKz0gXCJcXG5cIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXN1bHQgKz0gcGFydHNba107XG5cdFx0XHRcdFx0XHRcdHNwYWNlTGVmdCA9IHdvcmRXcmFwV2lkdGggLSBwYXJ0V2lkdGg7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzcGFjZUxlZnQgLT0gcGFkZGVkUGFydFdpZHRoO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0ICs9IFwiIFwiO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0cmVzdWx0ICs9IHBhcnRzW2tdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaSA8IGxpbmVzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0cmVzdWx0ICs9ICdcXG4nO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdXBkYXRlVGV4dHVyZSgpIHtcblx0XHRjb25zdCB0ZXh0dXJlID0gdGhpcy5fdGV4dHVyZTtcblxuXHRcdGxldCBkcm9wU2hhZG93UGFkZGluZyA9IHRoaXMuZ2V0RHJvcFNoYWRvd1BhZGRpbmcoKTtcblxuXHRcdHRleHR1cmUuYmFzZVRleHR1cmUuaGFzTG9hZGVkID0gdHJ1ZTtcblx0XHR0ZXh0dXJlLmJhc2VUZXh0dXJlLnJlc29sdXRpb24gPSB0aGlzLnJlc29sdXRpb247XG5cblx0XHR0ZXh0dXJlLmJhc2VUZXh0dXJlLnJlYWxXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuXHRcdHRleHR1cmUuYmFzZVRleHR1cmUucmVhbEhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcblx0XHR0ZXh0dXJlLmJhc2VUZXh0dXJlLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLnJlc29sdXRpb247XG5cdFx0dGV4dHVyZS5iYXNlVGV4dHVyZS5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyB0aGlzLnJlc29sdXRpb247XG5cdFx0dGV4dHVyZS50cmltLndpZHRoID0gdGV4dHVyZS5mcmFtZS53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5yZXNvbHV0aW9uO1xuXHRcdHRleHR1cmUudHJpbS5oZWlnaHQgPSB0ZXh0dXJlLmZyYW1lLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodCAvIHRoaXMucmVzb2x1dGlvbjtcblxuXHRcdHRleHR1cmUudHJpbS54ID0gLXRoaXMuX3N0eWxlLnBhZGRpbmcgLSBkcm9wU2hhZG93UGFkZGluZztcblx0XHR0ZXh0dXJlLnRyaW0ueSA9IC10aGlzLl9zdHlsZS5wYWRkaW5nIC0gZHJvcFNoYWRvd1BhZGRpbmc7XG5cblx0XHR0ZXh0dXJlLm9yaWcud2lkdGggPSB0ZXh0dXJlLmZyYW1lLndpZHRoIC0gKHRoaXMuX3N0eWxlLnBhZGRpbmcgKyBkcm9wU2hhZG93UGFkZGluZykgKiAyO1xuXHRcdHRleHR1cmUub3JpZy5oZWlnaHQgPSB0ZXh0dXJlLmZyYW1lLmhlaWdodCAtICh0aGlzLl9zdHlsZS5wYWRkaW5nICsgZHJvcFNoYWRvd1BhZGRpbmcpICogMjtcblxuXHRcdC8vIGNhbGwgc3ByaXRlIG9uVGV4dHVyZVVwZGF0ZSB0byB1cGRhdGUgc2NhbGUgaWYgX3dpZHRoIG9yIF9oZWlnaHQgd2VyZSBzZXRcblx0XHR0aGlzLl9vblRleHR1cmVVcGRhdGUoKTtcblxuXHRcdHRleHR1cmUuYmFzZVRleHR1cmUuZW1pdCgndXBkYXRlJywgdGV4dHVyZS5iYXNlVGV4dHVyZSk7XG5cblx0XHR0aGlzLmRpcnR5ID0gZmFsc2U7XG5cdH1cblxuXHQvLyBMYXp5IGZpbGwgZm9yIE9iamVjdC5hc3NpZ25cblx0cHJpdmF0ZSBhc3NpZ24oZGVzdGluYXRpb246IGFueSwgLi4uc291cmNlczogYW55W10pOiBhbnkge1xuXHRcdGZvciAobGV0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG5cdFx0XHRmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG5cdFx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBzb3VyY2Vba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZGVzdGluYXRpb247XG5cdH1cbn1cbiJdfQ==
