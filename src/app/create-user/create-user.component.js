"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var user_1 = require("../user");
var CreateUserComponent = (function () {
    function CreateUserComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.user = new user_1.User();
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.user.name) {
            this.usersService.create(this.user).then(function () { return _this.router.navigate(['/users']); });
        }
        else {
            this.router.navigate(['/users']);
        }
    };
    CreateUserComponent.prototype.gotoUsers = function () {
        this.router.navigate(['/users']);
    };
    CreateUserComponent = __decorate([
        core_1.Component({
            selector: 'app-create-user',
            templateUrl: './create-user.component.html',
            styleUrls: ['./create-user.component.css']
        })
    ], CreateUserComponent);
    return CreateUserComponent;
}());
exports.CreateUserComponent = CreateUserComponent;
