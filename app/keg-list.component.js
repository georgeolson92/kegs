System.register(['angular2/core', './keg.component', './tapped.pipe', './new-keg.component'], function(exports_1, context_1) {
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
    var core_1, keg_component_1, tapped_pipe_1, new_keg_component_1;
    var KegListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (keg_component_1_1) {
                keg_component_1 = keg_component_1_1;
            },
            function (tapped_pipe_1_1) {
                tapped_pipe_1 = tapped_pipe_1_1;
            },
            function (new_keg_component_1_1) {
                new_keg_component_1 = new_keg_component_1_1;
            }],
        execute: function() {
            KegListComponent = (function () {
                function KegListComponent() {
                    this.filterUntapped = false;
                    this.filterTapped = true;
                }
                KegListComponent.prototype.addKeg = function (keg) {
                    this.kegList.push(keg);
                };
                KegListComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-list',
                        inputs: ['kegList'],
                        directives: [keg_component_1.KegComponent, new_keg_component_1.NewKegComponent],
                        pipes: [tapped_pipe_1.TappedPipe],
                        template: "\n  <h1>Current Tap List</h1>\n    <keg-display *ngFor=\"#currentKeg of kegList | tapped:filterTapped\" [keg]=\"currentKeg\">\n    </keg-display>\n  <h1>Untapped Beer</h1>\n    <keg-display *ngFor=\"#currentKeg of kegList | tapped:filterUntapped\" [keg]=\"currentKeg\">\n    </keg-display>\n    <new-keg  (onSubmitNewKeg)=\"addKeg($event)\"></new-keg>\n    <edit-keg *ngIf=\"selectedTask\" [task]=\"selectedTask\"></edit-keg>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegListComponent);
                return KegListComponent;
            }());
            exports_1("KegListComponent", KegListComponent);
        }
    }
});
//# sourceMappingURL=keg-list.component.js.map