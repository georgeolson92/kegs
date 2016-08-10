System.register(['angular2/core', './edit-keg.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, edit_keg_component_1;
    var KegComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (edit_keg_component_1_1) {
                edit_keg_component_1 = edit_keg_component_1_1;
            }],
        execute: function() {
            KegComponent = (function () {
                function KegComponent() {
                    this.beingEdited = false;
                }
                KegComponent.prototype.tapKeg = function () {
                    this.keg.tap();
                };
                KegComponent.prototype.pourPint = function () {
                    this.keg.pints--;
                };
                KegComponent.prototype.editKeg = function () {
                    this.beingEdited = (!this.beingEdited);
                };
                KegComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-display',
                        inputs: ['keg'],
                        directives: [edit_keg_component_1.EditKegComponent],
                        template: "\n  <div [class.low]=\"keg.pints < 10\">\n    <h2>{{ keg.name }}</h2>\n      <h4>{{ keg.brand }}</h4>\n      <h4>Price: &#36;{{ keg.price }}</h4>\n      <h4>ABV: {{ keg.alcohol }}&#37;</h4>\n      <h4>Pints Left: {{ keg.pints }}</h4>\n    <button (click)=\"editKeg()\">Edit</button>\n    <edit-keg *ngIf=\"beingEdited\" [keg]=\"keg\"></edit-keg>\n    <button (click)=\"tapKeg()\">Tap It!</button>\n    <button (click)=\"pourPint()\">Pour pint</button>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegComponent);
                return KegComponent;
            }());
            exports_1("KegComponent", KegComponent);
        }
    }
});
//# sourceMappingURL=keg.component.js.map