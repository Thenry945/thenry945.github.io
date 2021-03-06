"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var technologies_service_1 = require("./services/technologies.service");
var AppTechnologies = (function () {
    function AppTechnologies(_technologyService) {
        this._technologyService = _technologyService;
    }
    AppTechnologies.prototype.ngOnInit = function () {
        var _this = this;
        this._technologyService.getTechnologies().subscribe(function (techStack) { return _this.techStack = techStack.sort(function (a, b) { return b.Proficiency - a.Proficiency; }); });
    };
    return AppTechnologies;
}());
AppTechnologies = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'templates/technologies.html',
        providers: [technologies_service_1.TechnologiesService]
    }),
    __metadata("design:paramtypes", [technologies_service_1.TechnologiesService])
], AppTechnologies);
exports.AppTechnologies = AppTechnologies;
//# sourceMappingURL=technologies.component.js.map