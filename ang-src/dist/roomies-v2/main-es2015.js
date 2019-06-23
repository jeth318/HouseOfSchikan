(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-header></app-header>\n  <app-member></app-member>\n  <app-schedule></app-schedule>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: 1.2rem; margin: 0;\">C/O: Schikan</p>\n<div class=\"header\">{{headerText}}</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/member/member.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/member/member.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\n    <div class=\"ui one columns grid right stackable\">\n      <div class=\"column\" *ngIf=\"members\">\n          <button type=\"button\" class=\"ui button primary settingsBtn\"(click)=\"toggleSettings()\">\n            <i class=\"settings icon settingsBtn-icon\"></i>\n            {{settingsText}}\n          </button>\n      </div>\n    </div>\n  </div>\n<div class=\"ui container member-area\" *ngIf=\"showMembersArea==true\">\n    <div class=\"ui two columns grid centered stackable\">\n      <div class=\"column\">\n          <div class=\"ui segments\">\n              <div class=\"ui segment no-padding\">\n          <table class=\"ui striped table unstackable member-table no-border\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Förnamn</th>\n                  <th>Efternamn</th>\n                  <th>Välj</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let member of members; let i = index;\">\n                  <td>{{i+1}}</td>\n                  <td>{{member.firstName}}</td>\n                  <td>{{member.lastName}}</td>\n                  <td>\n                    <input class=\"ui radio\" type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"case\" (click)=\"selectedMember(member._id)\">\n                  </td>\n                </tr>\n              </tbody>\n                <tfoot class=\"full-width\">\n                <tr>\n                  <th></th>\n                  <th colspan=\"4\">\n                    <div class=\"ui right floated small primary labeled icon button\" (click)=\"initializeNew()\">\n                      <i class=\"laptop icon\"></i> Lägg till ny roomie\n                    </div>\n                  </th>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"column\" *ngIf=\"modalVisible==true\">\n          <div class=\"ui segments\">\n              <div class=\"ui segment\">\n                <h3 class=\"ui green header\" *ngIf=\"addMember==true\" >Lägg till roomie</h3>\n                <h3 class=\"ui green header\" *ngIf=\"addMember==false\" >Uppdatera roomie</h3>\n\n              </div>\n              <div class=\"ui segment padded left aligned\">\n                <form class=\"ui form\">\n                  <div class=\"field required\">\n                    <label for=\"name\">Förnamn</label>\n                    <input\n\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"forname\"\n                      [(ngModel)]=\"memberModel.firstName\"\n                      name=\"firstname\"\n                    >\n                  </div>\n                  <div class=\"field required\">\n                    <label for=\"id\">Efternamn</label>\n                    <input type=\"text\" class=\"form-control\" id=\"lastname\" [(ngModel)]=\"memberModel.lastName\" name=\"lastname\">\n                  </div>\n                  <!-- <div class=\"field required\">\n                    <label for=\"id\">Om gängmedlemmen</label>\n                    <textarea rows=\"2\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n                  </div>    -->\n                  <div *ngIf=\"addMember==false\">\n                    <button type=\"submit\" [ngClass]=\"isLoading==true ? 'ui button primary disabled' : 'ui button primary'\" (click)=\"updateMember()\">Uppdatera</button>\n                    <button type=\"submit\" [ngClass]=\"isLoading==true ? 'ui button red disabled' : 'ui button red'\" (click)=\"deleteMember()\">Ta bort</button>\n                    <span *ngIf=\"isLoading==true\" class=\"flash flash-loading\" >Laddar...</span>\n                    <span *ngIf=\"successMessage\" class=\"ui header green flash flash-success\">{{successMessage}}</span>\n\n                  </div>\n                  <div *ngIf=\"addMember==true\">\n                    <button\n                      type=\"button\"\n                      class=\"ui button primary\"\n                      [ngClass]=\"isLoading==true? 'disabled' : ''\"\n                      (click)=\"addNew()\">Spara\n                    </button>\n                    <button\n                      type=\"button\"\n                      class=\"ui button warning\"\n                      [ngClass]=\"isLoading==true? 'disabled' : ''\"\n                      (click)=\"cancel()\">Avbryt\n                    </button>\n                    <span *ngIf=\"isLoading==true\" class=\"flash flash-loading\" >Laddar...</span>\n                    <span *ngIf=\"successMessage\" class=\"ui header green flash flash-success\">{{successMessage}}</span>\n                    <span *ngIf=\"errorMessage\" class=\"ui header red flash flash-fail\">{{errorMessage}}</span >\n                  </div>\n                </form>\n              </div>\n            </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/schedule/schedule.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/schedule/schedule.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!members || !tasks\">\n<img class=\"loading-img\" src=\"/assets/images/spinner-loading.gif\" />\n</div>\n<div *ngIf=\"members && tasks\">\n\n      <div class=\"ui centered grid table-wrapper table-wrapper-inner\">\n        <table class=\"\">\n            <thead class=\"thead-hej\">\n                <tr>\n                  <th class=\"month\">{{year}}</th>\n                  <th *ngFor=\"let member of members; let i = index; let even = even;\" attr.data-memberid=\"{{member._id}}\" class=\"member-mobile\">{{getInitials(i)}}</th>\n                  <th *ngFor=\"let member of members; let i = index; let even = even;\" attr.data-memberid=\"{{member._id}}\" class=\"member\">{{member.firstName}}</th>\n                </tr>\n              </thead>\n          <tbody *ngFor=\"let month of months; let monthIndex = index; let even = even;\">\n            <tr class=\"month-mobile\">\n              <td colSpan=\"{{getMembersLength()}}\" class=\"month-mobile\">{{month}}</td>\n            </tr>\n            <tr class=\"{{currentMonth(monthIndex)? 'current' : ''}}\">\n              <td class=\"month\">{{month}}</td>\n              <td class=\"icon\" *ngFor=\"let member of members; let memberIndex = index; let even = even;\">\n                <img class=\"icon-img\" *ngFor=\"let task of renderTaskList(memberIndex, monthIndex)\" src=\"assets/images/{{task.name}}.png\" />\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/whiteboard/whiteboard.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/whiteboard/whiteboard.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  whiteboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: 'KraftNine';\n    src: url('/assets/fonts/KraftNine.ttf') format('truetype');\n}\n\nhtml {\n    background-color: darkslategrey;\n}\n\n/* ----- BODY ------*/\n\nbody {\n    font-family: 'Indie Flower', cursive;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-top: 40px;\n}\n\n.ui-container {\n  margin: 0 !important;\n}\n\nbody ::-webkit-scrollbar-track {\n    background: transparent;\n}\n\nbody ::-webkit-scrollbar {\n    display: none;\n}\n\n.member-area {\n    padding-top: 0;\n    margin-top: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDSSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnS3JhZnROaW5lJztcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9LcmFmdE5pbmUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5odG1sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xufVxuXG4vKiAtLS0tLSBCT0RZIC0tLS0tLSovXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ0luZGllIEZsb3dlcicsIGN1cnNpdmU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4udWktY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmJvZHkgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5tZW1iZXItYXJlYSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'roomies-v2';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/member.service */ "./src/app/services/member.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_member_member_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/member/member.component */ "./src/app/components/member/member.component.ts");
/* harmony import */ var _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/schedule/schedule.component */ "./src/app/components/schedule/schedule.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/whiteboard/whiteboard.component */ "./src/app/components/whiteboard/whiteboard.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _components_member_member_component__WEBPACK_IMPORTED_MODULE_9__["MemberComponent"],
            _components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleComponent"],
            _components_whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_12__["WhiteboardComponent"],
        ],
        imports: [
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        ],
        providers: [
            _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"],
            _services_member_service__WEBPACK_IMPORTED_MODULE_7__["MemberService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.header {\n    font-family: 'KraftNine', sans-serif; \n    text-align: left;\n    padding: 1rem 1rem 3rem;\n    font-size: 4rem;\n    color: purple;\n}\n\n@media screen and (max-width: 525px) {\n\n    .header {\n        font-size: 3rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6ICdLcmFmdE5pbmUnLCBzYW5zLXNlcmlmOyBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAzcmVtO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBjb2xvcjogcHVycGxlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjVweCkge1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.headerText = "Roomies!";
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/member/member.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/member/member.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".member-area{\n    margin-top: 0;\n    padding-top: 0;\n    font-size: 1.5rem;\n}\n.member-area form{\n    \n}\n.column{\n    padding-top: 0 !important;\n    transition: all linear 0.5s;\n}\n.no-border {\n  border: none;\n}\n.no-padding {\n    padding: 0;\n}\n.flash {\n    font-family: 'Indie Flower', cursive;\n}\nh3 {\n    font-size: 1.5rem !important;\n    font-family: 'Indie Flower', cursive !important;\n}\ntable td {\n    padding: 0.4rem;\n    text-align: left;\n}\ninput {\n    padding: 6px !important;\n    font-family: 'Indie Flower', cursive !important;    \n}\n.modal-invisible {\n    display: none;\n}\n.modal-invisible {\n    display: all;\n}\n.title {\n    background-color: #F9FAFB;\n}\n.settingsBtn {\n    position: absolute !important;\n    top: -60px !important;\n    right: 5px !important;\n\n    font-size: 0.8rem;\n  \n}\n.settingsBtn-icon {\n    opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW1iZXIvbWVtYmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBOztBQUVBO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0FBQy9CO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsK0NBQStDO0FBQ25EO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsK0NBQStDO0FBQ25EO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIscUJBQXFCOztJQUVyQixpQkFBaUI7O0FBRXJCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbWJlci9tZW1iZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXItYXJlYXtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLm1lbWJlci1hcmVhIGZvcm17XG4gICAgXG59XG5cbi5jb2x1bW57XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuNXM7XG59XG5cbi5uby1ib3JkZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uZmxhc2gge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuaW5wdXQge1xuICAgIHBhZGRpbmc6IDZweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZSAhaW1wb3J0YW50OyAgICBcbn1cblxuLm1vZGFsLWludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5tb2RhbC1pbnZpc2libGUge1xuICAgIGRpc3BsYXk6IGFsbDtcbn1cblxuLnRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGQUZCO1xufVxuXG4uc2V0dGluZ3NCdG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogLTYwcHggIWltcG9ydGFudDtcbiAgICByaWdodDogNXB4ICFpbXBvcnRhbnQ7XG5cbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgXG59XG5cbi5zZXR0aW5nc0J0bi1pY29uIHtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/member/member.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/member/member.component.ts ***!
  \*******************************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/member.service */ "./src/app/services/member.service.ts");



let MemberComponent = class MemberComponent {
    constructor(_memberService) {
        this._memberService = _memberService;
        this.lastName = '';
        this.firstName = '';
        this.addMember = true;
        this.isLoading = false;
        this.description = '';
        this.isDataReady = false;
        this.memberModel = {};
        this.modalVisible = false;
        this.settingsText = 'Inställningar';
        this.showMembersArea = false;
    }
    ngOnInit() {
        this.getAllMembers();
    }
    toggleSettings() {
        this.showMembersArea = !this.showMembersArea;
        if (this.showMembersArea) {
            this.settingsText = 'Göm inställningar';
        }
        else {
            this.settingsText = 'Inställningar';
        }
    }
    getAllMembers() {
        this._memberService.getAllMembers().subscribe((data) => {
            data.success ? this.members = data.members : null;
        });
    }
    selectedMember(id) {
        this.modalVisible = true;
        this.addMember = false;
        this.members.forEach((memb, i) => {
            if (memb._id === id) {
                this.memberModel = this.members[i];
                return;
            }
        });
    }
    updateMember() {
        this.isLoading = true;
        this._memberService.updateMemberName(this.memberModel).subscribe((data) => { }, (error) => { }, () => {
            this.getAllMembers();
            this.isLoading = false;
            this.memberModel = {};
            this.modalVisible = false;
        });
    }
    deleteMember() {
        this.isLoading = true;
        var txt;
        var r = confirm(`Säker på att du vill ta bort ${this.memberModel.firstName}?`);
        if (r == true) {
            txt = "You pressed OK!";
            this._memberService.deleteMember(this.memberModel._id).subscribe((data) => { }, (error) => { }, () => {
                this.getAllMembers();
                this.isLoading = false;
                this.memberModel = {};
                this.addMember = true;
                this.modalVisible = false;
            });
        }
        else {
            txt = "You pressed Cancel!";
        }
    }
    initializeNew() {
        this.addMember = true;
        this.modalVisible = true;
        this.getAllMembers();
        this.memberModel = {};
    }
    cancel() {
        this.memberModel = {};
        this.modalVisible = false;
    }
    addNew() {
        this.isLoading = true;
        this.memberModel.priority = this.members.length + 1;
        this._memberService.createMember(this.memberModel).subscribe((data) => { }, (error) => { }, () => {
            this.getAllMembers();
            this.isLoading = false;
            this.memberModel = {};
            this.modalVisible = false;
        });
    }
};
MemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member',
        template: __webpack_require__(/*! raw-loader!./member.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/member/member.component.html"),
        styles: [__webpack_require__(/*! ./member.component.css */ "./src/app/components/member/member.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]])
], MemberComponent);



/***/ }),

/***/ "./src/app/components/schedule/schedule.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* ----- TABLE ------*/\ntable {\n    max-width: 700px;\n    padding: 0px !important;\n    width: 100%;\n    background: #fff;\n    box-shadow: none;\n    border-radius: .28571429rem;\n    border-spacing: 0;\n}\ntr.month-mobile {\n    background-color: lightgrey;\n    font-size: 1.7rem;\n    display:all;\n    text-align: center;\n}\nth {\n    font-size: 1.4rem;\n    font-weight: 300; \n    color:white;\n    background-color:rgba(0, 0, 0, 0.659);\n    border-right: 1px solid lightgrey;\n    height: 40px;\n}\nth.member {\n    display: all;\n    min-width: 80px;\n    font-size: 1.7rem;\n    border-top-left-radius: 5px;\n\n}\nth.member:last-child {\n    border-top-right-radius: 5px;\n    border-right: none;\n\n}\nth.member-mobile {\n    display: all;\n    width: 74px;\n    border-radius: 3px;\n}\nth.month {\n    width: 90px;\n    font-size: 2rem;\n    background-color: #7a2e85;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    color: white;\n    display: all;    \n}\n.loading-img {\n    height: 100px;\n    width: 100px;\n}\n.thead-table {\n    margin-bottom: 0;\n    border-spacing: 1px;\n    border-radius: 3px, 3px, 0px, 0px;\n}\n.task-table {\n    border-top: none;\n    border-bottom: 1px solid grey;\n    border-radius: 3px, 3px;\n}\n.table-wrapper {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n}\n.table-wrapper-inner {\n    max-height: 80vh;\n    -webkit-overflow-scrolling: touch;\n    overflow-y: scroll;\n}\ntr.current td{\n    background-color: lightgreen;\n}\ntd.month {\n    width: 90px;\n    text-align: center;\n    border-bottom: 1px solid darkgrey;\n    font-weight: 500;\n    background-color: lightgrey;\n    font-size: 1.3rem;\n    padding: 0;\n    display: all;\n}\ntd.month-mobile{\n    padding: 0.3rem;\n}\ntd.icon{\n    height: 75px;\n    text-align: center;\n    border-left: 1px solid rgba(34,36,38,.1);\n    border-bottom: 1px solid lightgrey;\n}\n/* td.köket {\n    background-image: url('../../../images/kitchen-spoons-set.png');\n}\ntd.damsuga {\n    background-image: url('../../../images/vacuum.png');\n}\ntd.tvätt {\n    background-image: url('../../../images/washing-machine.png');\n}\ntd.stora-badrummet {\n    background-image: url('../../../images/water-closet.png');\n}\ntd.lilla-badrummen {\n    background-image: url('../../../images/water-closet-small.png');\n} */\n.icon-img {\n    max-width:100%;\n    max-height:100%;\n    text-align: center;\n    padding: 10px;\n}\n/* ----- MEDIA QUERIES ------*/\n@media screen and (min-width: 525px) {\n    tr.month-mobile {\n        display: none;\n    }\n    th.member-mobile {\n        display: none;\n    }\n}\n@media screen and (max-width: 525px) {\n    td.month, th.month, th.member {\n        display: none;\n    }\n    td.icon {\n        height: 65px;\n    }\n    header {\n        font-size: 3rem;\n    }\n    .table-wrapper-inner {\n        max-height: 80vh;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQkFBc0I7QUFDdEI7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7SUFFaEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7O0FBRS9CO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxrQ0FBa0M7QUFDdEM7QUFFQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVIO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUVBLDhCQUE4QjtBQUU5QjtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiAtLS0tLSBUQUJMRSAtLS0tLS0qL1xudGFibGUge1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW07XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnRyLm1vbnRoLW1vYmlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGRpc3BsYXk6YWxsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGgge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IFxuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjY1OSk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxudGgubWVtYmVyIHtcbiAgICBkaXNwbGF5OiBhbGw7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcblxufVxudGgubWVtYmVyOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuXG59XG50aC5tZW1iZXItbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBhbGw7XG4gICAgd2lkdGg6IDc0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG50aC5tb250aCB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YTJlODU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGFsbDsgICAgXG59XG5cbi5sb2FkaW5nLWltZyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi50aGVhZC10YWJsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3JkZXItc3BhY2luZzogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCwgM3B4LCAwcHgsIDBweDtcbn1cblxuLnRhc2stdGFibGUge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4LCAzcHg7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtd3JhcHBlci1pbm5lciB7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG50ci5jdXJyZW50IHRke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbnRkLm1vbnRoIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtncmV5O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogYWxsO1xufVxuXG50ZC5tb250aC1tb2JpbGV7XG4gICAgcGFkZGluZzogMC4zcmVtO1xufVxuXG50ZC5pY29ue1xuICAgIGhlaWdodDogNzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDM0LDM2LDM4LC4xKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xufVxuXG4vKiB0ZC5rw7ZrZXQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vaW1hZ2VzL2tpdGNoZW4tc3Bvb25zLXNldC5wbmcnKTtcbn1cbnRkLmRhbXN1Z2Ege1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vaW1hZ2VzL3ZhY3V1bS5wbmcnKTtcbn1cbnRkLnR2w6R0dCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9pbWFnZXMvd2FzaGluZy1tYWNoaW5lLnBuZycpO1xufVxudGQuc3RvcmEtYmFkcnVtbWV0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2ltYWdlcy93YXRlci1jbG9zZXQucG5nJyk7XG59XG50ZC5saWxsYS1iYWRydW1tZW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vaW1hZ2VzL3dhdGVyLWNsb3NldC1zbWFsbC5wbmcnKTtcbn0gKi9cblxuLmljb24taW1nIHtcbiAgICBtYXgtd2lkdGg6MTAwJTtcbiAgICBtYXgtaGVpZ2h0OjEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIC0tLS0tIE1FRElBIFFVRVJJRVMgLS0tLS0tKi9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTI1cHgpIHtcbiAgICB0ci5tb250aC1tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICB0aC5tZW1iZXItbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyNXB4KSB7XG4gICAgdGQubW9udGgsIHRoLm1vbnRoLCB0aC5tZW1iZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICB0ZC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgIH1cbiAgICBoZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICAgIC50YWJsZS13cmFwcGVyLWlubmVyIHtcbiAgICAgICAgbWF4LWhlaWdodDogODB2aDtcbiAgICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/schedule/schedule.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/schedule/schedule.component.ts ***!
  \***********************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/member.service */ "./src/app/services/member.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/task.service */ "./src/app/services/task.service.ts");




let ScheduleComponent = class ScheduleComponent {
    constructor(_memberService, _taskService) {
        this._memberService = _memberService;
        this._taskService = _taskService;
        this.isDataReady = false;
        this.year = new Date().getFullYear().toString();
        this.month = new Date().getMonth().toString();
        this.months = [
            'Januari',
            'Februari',
            'Mars',
            'Aprli',
            'Maj',
            'Juni',
            'Juli',
            'Augusti',
            'September',
            'Oktober',
            'November',
            'December',
        ];
    }
    ngOnInit() {
        this.getAllMembers();
        this.getAllTasks();
    }
    getAllTasks() {
        this._taskService.getAllTasks()
            .subscribe((data) => {
            data.success ? this.tasks = data.tasks : null;
        });
    }
    getAllMembers() {
        this._memberService.getAllMembers()
            .subscribe((data) => {
            data.success ? this.members = data.members : null;
        });
    }
    getMembersLength() {
        return this.members.length;
    }
    shortMonth(index) {
        return this.months[index].slice(0, 3);
    }
    currentMonth(index) {
        return Number(this.month) === index ? true : false;
    }
    getInitials(index) {
        return this.members[index].firstName.slice(0, 1) +
            '.' + this.members[index].lastName.slice(0, 1);
    }
    generateTaskList() {
        console.log('Ricke');
        let taskReturn = [];
        const membCount = this.members.length;
        const taskCount = this.tasks.length;
        this.tasks.forEach((task, i) => {
            if (taskReturn[i % membCount] === undefined)
                taskReturn[i % membCount] = task;
            else if (Array.isArray(taskReturn[i % membCount]))
                taskReturn[i % membCount].push(this.tasks[i % taskCount]);
            else
                taskReturn[i % membCount] = [taskReturn[i % membCount], this.tasks[i % taskCount]];
        });
        console.log(taskReturn);
        this.taskList = taskReturn;
    }
    renderTaskList(memberIndex, monthIndex) {
        !this.taskList && this.generateTaskList();
        if (!Array.isArray(this.taskList[(memberIndex + monthIndex) % this.taskList.length]))
            return [this.taskList[(memberIndex + monthIndex) % this.taskList.length]];
        else
            return this.taskList[(memberIndex + monthIndex) % this.taskList.length];
    }
};
ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schedule',
        template: __webpack_require__(/*! raw-loader!./schedule.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/schedule/schedule.component.html"),
        styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/components/schedule/schedule.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"], _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]])
], ScheduleComponent);



/***/ }),

/***/ "./src/app/components/whiteboard/whiteboard.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/whiteboard/whiteboard.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2hpdGVib2FyZC93aGl0ZWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/whiteboard/whiteboard.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/whiteboard/whiteboard.component.ts ***!
  \***************************************************************/
/*! exports provided: WhiteboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteboardComponent", function() { return WhiteboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WhiteboardComponent = class WhiteboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
WhiteboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-whiteboard',
        template: __webpack_require__(/*! raw-loader!./whiteboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/whiteboard/whiteboard.component.html"),
        styles: [__webpack_require__(/*! ./whiteboard.component.css */ "./src/app/components/whiteboard/whiteboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WhiteboardComponent);



/***/ }),

/***/ "./src/app/globals/globals.ts":
/*!************************************!*\
  !*** ./src/app/globals/globals.ts ***!
  \************************************/
/*! exports provided: localhostUrl, messageActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localhostUrl", function() { return localhostUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageActive", function() { return messageActive; });
// Globala Variabler
// OBS! om localhost, sätt localhostUrl = "http://localhost:8080/", annars "";
let localhostUrl = 'http://localhost:8080/';
const messageActive = false;


/***/ }),

/***/ "./src/app/services/member.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/member.service.ts ***!
  \********************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals/globals */ "./src/app/globals/globals.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let MemberService = class MemberService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _globals_globals__WEBPACK_IMPORTED_MODULE_3__["localhostUrl"] + 'api/members/';
    }
    createMember(memberToCreate) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        let body = {
            memberToCreate
        };
        return this.http.post(this.baseUrl + 'create', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()));
    }
    getAllMembers() {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        return this.http.get(this.baseUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()));
    }
    getMemberById(id) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        return this.http.get(this.baseUrl + id, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()));
    }
    updateMemberName(memberToUpdate) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        let body = {
            memberToUpdate,
        };
        return this.http.put(this.baseUrl + 'update/name', body, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()));
    }
    deleteMember(memberToDeleteId) {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        let body = {
            memberToDeleteId
        };
        return this.http.delete(this.baseUrl + 'delete', { body, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()));
    }
};
MemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], MemberService);



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals/globals */ "./src/app/globals/globals.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _globals_globals__WEBPACK_IMPORTED_MODULE_3__["localhostUrl"] + 'api/tasks/';
    }
    getAllTasks() {
        let headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        return this.http.get(this.baseUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.json()));
    }
};
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], TaskService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeth11/private-dev/roomies-v2/ang-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map