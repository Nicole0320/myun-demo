(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pusher_pusher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pusher/pusher.component */ "./src/app/pusher/pusher.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawer/drawer.component */ "./src/app/drawer/drawer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'push', component: _pusher_pusher_component__WEBPACK_IMPORTED_MODULE_3__["PusherComponent"] },
    { path: 'player', component: _player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"] },
    { path: 'drawer', component: _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__["DrawerComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-window {\n    border: 2px solid rosybrown;\n    margin-bottom: 40px;\n}\n\n.small-window {\n    border: 2px solid silver;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <router-outlet></router-outlet> -->\n<button (click)=\"switch()\">Switch</button>\n<br>\n<ng-container *ngFor=\"let item of componentArr; first as isFirst\">\n    <div [ngClass]=\"{'big-window': isFirst, 'small-window': !isFirst}\">\n        <ng-container *ngComponentOutlet=\"item\"></ng-container>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pusher_pusher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pusher/pusher.component */ "./src/app/pusher/pusher.component.ts");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player-list/player-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myun-sdk-demo';
        this.componentArr = [_pusher_pusher_component__WEBPACK_IMPORTED_MODULE_1__["PusherComponent"], _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_2__["PlayerListComponent"]];
    }
    AppComponent.prototype.switch = function () {
        this.componentArr = this.componentArr.reverse();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pusher_pusher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pusher/pusher.component */ "./src/app/pusher/pusher.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawer/drawer.component */ "./src/app/drawer/drawer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player-list/player-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pusher_pusher_component__WEBPACK_IMPORTED_MODULE_3__["PusherComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"],
                _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_5__["DrawerComponent"],
                _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_7__["PlayerListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [
                _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_7__["PlayerListComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/drawer/drawer.component.css":
/*!*********************************************!*\
  !*** ./src/app/drawer/drawer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".write, .read {\n    height: 400px;\n    width: 600px;\n    border: 1px solid brown;\n}\n\nbutton {\n    padding: 4px 8px;\n}"

/***/ }),

/***/ "./src/app/drawer/drawer.component.html":
/*!**********************************************!*\
  !*** ./src/app/drawer/drawer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>write: 当前第{{page}}页</p>\n<div class=\"menu\"></div>\n<div class=\"write\"></div>\n<button (click)=\"prevPage()\">上一页</button>\n<button (click)=\"nextPage()\">下一页</button>\n<br>\n<p>read:</p>\n<div class=\"read\"></div>\n<p>当前：{{modeText}} <button (click)=\"switchMode()\">切换</button></p>"

/***/ }),

/***/ "./src/app/drawer/drawer.component.ts":
/*!********************************************!*\
  !*** ./src/app/drawer/drawer.component.ts ***!
  \********************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;

var board = window.muduBoard;
var ModeMap = (_a = {},
    _a[board.R_MODE_LISTEN] = {
        text: 'listen'
    },
    _a[board.R_MODE_TIME] = {
        text: 'replay'
    },
    _a);
var DrawerComponent = /** @class */ (function () {
    function DrawerComponent(el) {
        this.el = el;
        this.page = 1;
        this.mode = board.R_MODE_LISTEN;
        this.modeText = ModeMap[this.mode].text;
        this.wToken = 'af524cae-e376-4b46-bebd-f3d9ed97bd9f';
        this.rToken = '72fd0cb9-14cb-4714-8069-59ae5e771068';
        this.id = '7d5z1o0n';
    }
    DrawerComponent.prototype.ngOnInit = function () { };
    DrawerComponent.prototype.createDrawer = function () {
        var writerDom = this.el.nativeElement.querySelector('.write');
        var menuDom = this.el.nativeElement.querySelector('.menu');
        this.writer = board.createRWBoard({
            dom: writerDom,
            menuDom: menuDom,
            token: this.wToken,
            id: this.id,
            initPage: this.page
        });
    };
    DrawerComponent.prototype.createReadBoard = function (mode) {
        var readDom = this.el.nativeElement.querySelector('.read');
        this.reader = board.createRBoard({
            dom: readDom,
            mode: mode,
            token: this.rToken,
            id: this.id,
            initPage: this.page
        });
    };
    DrawerComponent.prototype.createListenBoard = function () {
        this.mode = board.R_MODE_LISTEN;
        this.createReadBoard(this.mode);
        this.reader.listen();
        this.reader.setDelay(2000);
    };
    DrawerComponent.prototype.createReplayBoard = function () {
        this.mode = board.R_MODE_TIME;
        this.createReadBoard(this.mode);
        this.reader.setNowTime(new Date().getTime() - 5000);
    };
    // tslint:disable-next-line: use-life-cycle-interface
    DrawerComponent.prototype.ngAfterViewInit = function () {
        this.createDrawer();
        this.createListenBoard();
    };
    DrawerComponent.prototype.nextPage = function () {
        this.page++;
        this.writer.setCurrentPage(this.page);
    };
    DrawerComponent.prototype.prevPage = function () {
        if (this.page <= 1) {
            alert('This is first page now');
            return;
        }
        this.page--;
        this.writer.setCurrentPage(this.page);
    };
    DrawerComponent.prototype.switchMode = function () {
        this.reader.destroy();
        if (this.mode === board.R_MODE_LISTEN) {
            this.mode = board.R_MODE_TIME;
            this.createReplayBoard();
        }
        else {
            this.mode = board.R_MODE_LISTEN;
            this.createListenBoard();
        }
        this.modeText = ModeMap[this.mode].text;
    };
    DrawerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawer',
            template: __webpack_require__(/*! ./drawer.component.html */ "./src/app/drawer/drawer.component.html"),
            styles: [__webpack_require__(/*! ./drawer.component.css */ "./src/app/drawer/drawer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DrawerComponent);
    return DrawerComponent;
}());



/***/ }),

/***/ "./src/app/player-list/player-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/player-list/player-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul, li {\n    list-style: none;\n}\n\nul.player-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.player-list li{\n    border: 1px solid peachpuff;\n    display: flex;\n    margin: 8px;\n}"

/***/ }),

/***/ "./src/app/player-list/player-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/player-list/player-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>player list</p>\n<ul class=\"player-list\">\n  <li *ngFor=\"let user of userService.users\">\n    <app-player [userId]=\"user.id\"></app-player>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/player-list/player-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/player-list/player-list.component.ts ***!
  \******************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(userService) {
        this.userService = userService;
    }
    PlayerListComponent.prototype.ngOnInit = function () {
    };
    PlayerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-list',
            template: __webpack_require__(/*! ./player-list.component.html */ "./src/app/player-list/player-list.component.html"),
            styles: [__webpack_require__(/*! ./player-list.component.css */ "./src/app/player-list/player-list.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], PlayerListComponent);
    return PlayerListComponent;
}());



/***/ }),

/***/ "./src/app/player/player.component.css":
/*!*********************************************!*\
  !*** ./src/app/player/player.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"player-wrapper\">\n  <p class=\"title\">{{userId}}</p>\n  <div class=\"player\"></div>\n  <button (click)=\"play()\">Play</button>\n  <button (click)=\"stop()\">Stop</button>\n  <button (click)=\"retset()\">Reset</button>\n</div>\n"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pull_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pull.service */ "./src/app/pull.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(pullService, el) {
        this.pullService = pullService;
        this.el = el;
    }
    PlayerComponent.prototype.ngOnInit = function () { };
    // tslint:disable-next-line: use-life-cycle-interface
    PlayerComponent.prototype.ngAfterViewInit = function () {
        this.pullService.init(this.el.nativeElement.querySelector('.player'), this.userId);
    };
    PlayerComponent.prototype.play = function () {
        this.pullService.play(this.userId);
    };
    PlayerComponent.prototype.stop = function () {
        this.pullService.stop(this.userId);
    };
    PlayerComponent.prototype.retset = function () {
        this.pullService.reset(this.el.nativeElement.querySelector('.player'), this.userId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PlayerComponent.prototype, "userId", void 0);
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [_pull_service__WEBPACK_IMPORTED_MODULE_1__["PullService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/pull.service.ts":
/*!*********************************!*\
  !*** ./src/app/pull.service.ts ***!
  \*********************************/
/*! exports provided: PullService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PullService", function() { return PullService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PullService = /** @class */ (function () {
    function PullService(userService) {
        this.userService = userService;
        this.mrtcUrl = 'mrtc://mrtc.myun.tv/live/rl7mmgml';
        this.config = {
            height: '300px',
            width: '400px',
            autoReconnect: true,
            autoplay: true,
            volumn: 0.5
        };
        this.pullers = new Map();
    }
    PullService.prototype.log = function (message, type) {
        if (type === void 0) { type = ''; }
        if (type === 'error') {
            console.error('[Pull Service]', message);
            return;
        }
        console.log("[Pull Service]: " + type + " ", message);
    };
    PullService.prototype.addListener = function (id) {
        var _this = this;
        this.pullers.get(id).on('error', function (err) {
            if ('server stream not exist' === err.message || err.message === 'stream been closed') {
                _this.userService.addEmptyId(id);
            }
            else {
                _this.log(err.message, 'error');
            }
        });
        this.pullers.get(id).on('stream_ready', function (media) {
            console.log('拉流成功', media);
            _this.userService.deleteEmpltyId(id);
        });
    };
    PullService.prototype.init = function (element, id) {
        var url = id ? this.mrtcUrl + "_" + id : this.mrtcUrl;
        var puller = new Mrtc.Player(url, element, this.config);
        this.pullers.set(id, puller);
        this.addListener(id);
    };
    PullService.prototype.play = function (id) {
        this.pullers.get(id).startPlay();
    };
    PullService.prototype.stop = function (id) {
        this.pullers.get(id).stopPlay();
    };
    // 重置
    PullService.prototype.reset = function (element, id) {
        this.init(element, id);
    };
    PullService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], PullService);
    return PullService;
}());



/***/ }),

/***/ "./src/app/push.service.ts":
/*!*********************************!*\
  !*** ./src/app/push.service.ts ***!
  \*********************************/
/*! exports provided: PushService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushService", function() { return PushService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PushService = /** @class */ (function () {
    function PushService(userService) {
        this.userService = userService;
        this.mrtcUrl = 'mrtc://mrtc.myun.tv/live/rl7mmgml';
        this.config = {
            type: 'camera',
            bitrate: 500
        };
        this.publishLoading = false;
    }
    PushService.prototype.log = function (message, type) {
        if (type === void 0) { type = ''; }
        if (type === 'error') {
            console.error('[Pull Service]', message);
            return;
        }
        console.log("[Pull Service]: " + type + " ", message);
    };
    PushService.prototype.addListener = function () {
        var _this = this;
        this.pusher.on('error', function (err) {
            _this.stop();
            _this.log(err, 'error');
            if (err.message === 'server stream alread exist') {
                alert('请重试publish');
            }
        });
        this.pusher.on('published', function () {
            _this.publishLoading = false;
            console.log('推流成功');
        });
    };
    PushService.prototype.init = function (element) {
        this.overlayElement = element;
        console.log('init: ', Mrtc);
        this.pusher = new Mrtc.Broadcaster(element, this.config);
        this.addListener();
    };
    PushService.prototype.publish = function (id) {
        if (id === void 0) { id = this.userService.usablePushId; }
        if (!this.pusher) {
            this.log('push init failed', 'error');
            return;
        }
        if (this.publishLoading) {
            return;
        }
        var url = id ? this.mrtcUrl + "_" + id : this.mrtcUrl;
        var publishStatus = this.getStatus();
        if (publishStatus.videoBitrate + publishStatus.audioBitrate > 0) {
            this.stop();
        }
        this.publishLoading = true;
        this.pusher.startPublish(url);
    };
    PushService.prototype.stop = function () {
        this.pusher.stopPublish();
        this.publishLoading = false;
    };
    PushService.prototype.closeVideo = function (close) {
        this.pusher.setVideoMute(close);
        this.log("video is " + (close ? 'off' : 'on') + ".");
    };
    PushService.prototype.mute = function (mute) {
        this.pusher.setMute(mute);
        this.log("volumn is " + (mute ? 'off' : 'on') + ".");
    };
    PushService.prototype.getStatus = function () {
        return this.pusher.getPublishStats();
    };
    PushService.prototype.reset = function (element) {
        if (element === void 0) { element = this.overlayElement; }
        this.init(element);
    };
    PushService.prototype.switchToScreen = function (screen) {
        if (screen) {
            this.pusher.switchToScreen();
        }
        else {
            this.pusher.switchToCamera();
        }
    };
    PushService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], PushService);
    return PushService;
}());



/***/ }),

/***/ "./src/app/pusher/pusher.component.css":
/*!*********************************************!*\
  !*** ./src/app/pusher/pusher.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pusher {\n    height: 300px;\n    width: 400px;\n}\n\n.push-status {\n    float: right;\n}"

/***/ }),

/***/ "./src/app/pusher/pusher.component.html":
/*!**********************************************!*\
  !*** ./src/app/pusher/pusher.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"publish()\">Publish</button>\n<button (click)=\"stop()\">Stop</button>\n<button (click)=\"toggleVideo()\">Toggle Video</button>\n<button (click)=\"toggleMute()\">Toggle Mute</button>\n<button (click)=\"swichScreen()\">share screen</button>\n<div class=\"pusher\"></div>\n<div class=\"push-status\">{{status}}</div>"

/***/ }),

/***/ "./src/app/pusher/pusher.component.ts":
/*!********************************************!*\
  !*** ./src/app/pusher/pusher.component.ts ***!
  \********************************************/
/*! exports provided: PusherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherComponent", function() { return PusherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _push_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../push.service */ "./src/app/push.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PusherComponent = /** @class */ (function () {
    function PusherComponent(pushService, el) {
        this.pushService = pushService;
        this.el = el;
        this.videoClosed = false;
        this.mute = false;
        this.screen = false;
    }
    PusherComponent.prototype.ngOnInit = function () {
    };
    // tslint:disable-next-line: use-life-cycle-interface
    PusherComponent.prototype.ngAfterViewInit = function () {
        this.pushService.init(this.el.nativeElement.querySelector('.pusher'));
    };
    PusherComponent.prototype.publish = function () {
        this.pushService.publish();
        this.timmer = this.logPushStatus();
    };
    PusherComponent.prototype.stop = function () {
        this.pushService.stop();
        clearInterval(this.timmer);
    };
    PusherComponent.prototype.toggleVideo = function () {
        this.videoClosed = !this.videoClosed;
        this.pushService.closeVideo(this.videoClosed);
    };
    PusherComponent.prototype.toggleMute = function () {
        this.mute = !this.mute;
        this.pushService.mute(this.mute);
    };
    PusherComponent.prototype.logPushStatus = function () {
        var _this = this;
        var clock = window.setInterval(function () {
            _this.status = JSON.stringify(_this.pushService.getStatus());
        }, 3000);
        return clock;
    };
    PusherComponent.prototype.swichScreen = function () {
        this.screen = !this.screen;
        this.pushService.switchToScreen(this.screen);
    };
    PusherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pusher',
            template: __webpack_require__(/*! ./pusher.component.html */ "./src/app/pusher/pusher.component.html"),
            styles: [__webpack_require__(/*! ./pusher.component.css */ "./src/app/pusher/pusher.component.css")]
        }),
        __metadata("design:paramtypes", [_push_service__WEBPACK_IMPORTED_MODULE_1__["PushService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PusherComponent);
    return PusherComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.emptyId = new Set();
        this.users = [];
        for (var index = 0; index < 16; index++) {
            var user = {
                id: index,
                push: false
            };
            this.users.push(user);
        }
    }
    UserService.prototype.addEmptyId = function (id) {
        this.emptyId.add(id);
        this.updateUsablePushId();
    };
    UserService.prototype.deleteEmpltyId = function (id) {
        this.emptyId.delete(id);
        this.updateUsablePushId();
    };
    UserService.prototype.updateUsablePushId = function () {
        var values = Array.from(this.emptyId);
        if (values.length > 0) {
            this.usablePushId = values[0];
        }
        else {
            this.usablePushId = 0;
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/difan/Documents/work/myun-sdk-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map