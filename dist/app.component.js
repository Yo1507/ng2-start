"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello!';
        this.tasks = [
            { id: 1, name: "Default task", description: "Task set up by default" },
            { id: 2, name: "Do things", description: "You have to do things" },
            { id: 3, name: "Come on", description: "Move your ass" },
            { id: 4, name: "Gosh", description: "What are you doing?" },
            { id: 5, name: "Go home", description: "You are drunk" }
        ];
    }
    AppComponent.prototype.selectTask = function (task) {
        this.activeTask = task;
        console.log(this.activeTask);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <header>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"navbar-header\"> \n                <a href=\"/\" class=\"navbar-brand\">My Angular2 App</a>\n            </div>\n        </nav>\n    </header>\n\n    <main>\n    \n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <div *ngIf=\"tasks\">\n                <ul class=\"list-group tasks-list\">\n                    <li class=\"list-group-item\" *ngFor=\"let task of tasks\" (click)=\"selectTask(task)\"\n                    [class.active]=\"task === activeTask\">\n                        {{ task.name }}\n                    </li>\n                </ul> \n            </div>\n        </div>\n    \n        <div class=\"col-sm-8\">\n            <div class=\"jumbotron\" *ngIf=\"activeTask\">\n                <h2>{{ activeTask.name }} <small>{{ activeTask.description }}</small></h2>\n            </div>\n            <div class=\"jumbotron gocrazy\" *ngIf=\"!activeTask\">\n                <span class=\"glyphicon glyphicon-hand-left\"></span>\n                <h2>Choose a task</h2>\n            </div>\n        </div>  \n    </div>\n    </main>\n\n\n    <footer class=\"text-center\">Copyright &copy; Yo 2017</footer>\n    ",
        styles: ["\n        .tasks-list li {\n            cursor: pointer;\n        } \n        .jumbotron .glyphicon{\n            font-size: 80px;\n        }\n        .gocrazy {\n            background: #cc0000;\n            color: #FFF;\n        }\n\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map