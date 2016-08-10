System.register(['angular2/core', './keg.model', './keg-list.component', './new-keg.component'], function(exports_1, context_1) {
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
    var core_1, keg_model_1, keg_list_component_1, new_keg_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_model_1_1) {
                keg_model_1 = keg_model_1_1;
            },
            function (keg_list_component_1_1) {
                keg_list_component_1 = keg_list_component_1_1;
            },
            function (new_keg_component_1_1) {
                new_keg_component_1 = new_keg_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    var newKeg = new keg_model_1.Keg("Farmhouse Ale", "Commons", 15, 8);
                    var newKeg2 = new keg_model_1.Keg("Pale Ale", "Deschutes", 8, 6);
                    var newKeg3 = new keg_model_1.Keg("Pilsner", "Bear Republic", 9, 5);
                    newKeg3.tap();
                    this.kegs = [newKeg, newKeg2, newKeg3];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [keg_list_component_1.KegListComponent, new_keg_component_1.NewKegComponent],
                        template: "\n  <keg-list [kegList]=\"kegs\"></keg-list>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map