"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function isMusic(obj) {
    return (obj &&
        Array.isArray(obj.Chords) &&
        obj.Chords.every(function (chord) {
            return typeof chord.Name === "string" &&
                Array.isArray(chord.Path) &&
                chord.Path.length === 6 &&
                chord.Path.every(function (val) { return typeof val === "number"; });
        }) &&
        Array.isArray(obj.Song) &&
        obj.Song.every(function (song) {
            return (typeof song.Play === "string" ||
                (Array.isArray(song.Play) && song.Play.length === 6)) &&
                typeof song.Interval === "number";
        }));
}
function play(object) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, song, chordPath, _b, _c, chord;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!isMusic(object)) return [3 /*break*/, 5];
                    _i = 0, _a = object.Song;
                    _d.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    song = _a[_i];
                    chordPath = void 0;
                    if (!Array.isArray(song.Play)) {
                        for (_b = 0, _c = object.Chords; _b < _c.length; _b++) {
                            chord = _c[_b];
                            if (chord.Name === song.Play) {
                                chordPath = chord.Path;
                                break;
                            }
                        }
                        if (chordPath) {
                            console.log("Currently playing ".concat(song.Play, " (").concat(chordPath, ")"));
                        }
                        else {
                            console.log("Chord for ".concat(song.Play, " not found"));
                        }
                    }
                    else {
                        console.log("Now playing custom combination (".concat(song.Play, ")"));
                    }
                    return [4 /*yield*/, sleep(song.Interval)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 6];
                case 5:
                    console.log("Your object's structure is not correct!");
                    _d.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
// Define the sleep function
function sleep(timer) {
    return new Promise(function (resolve) {
        setTimeout(resolve, timer);
    });
}
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
