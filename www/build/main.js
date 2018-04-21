webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPageIngresarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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




/**
 * Generated class for the ModalPageIngresarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPageIngresarPage = (function () {
    function ModalPageIngresarPage(navCtrl, navParams, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toast = toast;
        this.user = {};
    }
    ModalPageIngresarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPageIngresarPage');
    };
    ;
    ModalPageIngresarPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.toast.create({
                            message: "Algo falló al iniciar sesión, verifique sus datos e intente de nuevo.",
                            duration: 3000,
                            position: "middle"
                        }).present();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModalPageIngresarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-page-ingresar',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\modal-page-ingresar\modal-page-ingresar.html"*/'<!--\n  Generated template for the ModalPageIngresarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="secondary">\n        <ion-title>Neurocirugía HCJIM</ion-title>\n      </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n             <h1>Iniciar sesión</h1>\n        </ion-list-header>\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text" [(ngModel)]="user.email"  ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input type="password" [(ngModel)]="user.password" ></ion-input>\n        </ion-item>\n      </ion-list>\n\n        <ion-row no-padding>\n            <ion-col text-right>\n                <button ion-button item-end (click)="login(user)" block  >Entrar</button>\n               \n            </ion-col>\n          </ion-row>\n           \n       \n\n\n\n     \n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\modal-page-ingresar\modal-page-ingresar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ModalPageIngresarPage);
    return ModalPageIngresarPage;
}());

//# sourceMappingURL=modal-page-ingresar.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notes_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = (function () {
    function ModalPage(navCtrl, navParams, viewCtrl, notesService, toastCtrl, alertCtrl, actionSheetCtrl, platform, camera, afStorage, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.notesService = notesService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.camera = camera;
        this.afStorage = afStorage;
        this.iab = iab;
        this.note = {
            id: null,
            cama: null,
            nombre: null,
            edad: null,
            registro: null,
            dx: null,
            procedimiento: null,
            fechacx: null,
            material: null,
            cruce: null,
            consentimiento: null,
            craneotomo: null,
            ekg: null,
            labs: null,
            rxtorax: null,
            valanest: null,
            ayuno: null,
            labsexp: null,
            suspanticoag: null,
            observaciones: null,
            elaborado: null,
            pendiente: null
        };
        this.id = null;
        this.show = true;
        this.cargado = false;
        this.cargadoekg = false;
        this.cargadorx = false;
        this.preview = false;
        this.previewekg = false;
        this.previewrx = false;
        this.someTextUrl = '';
        this.someTextUrlekg = '';
        this.someTextUrlrx = '';
        this.iaboptions = {
            location: 'no',
            zoom: 'yes'
        };
        this.id = navParams.get('id');
        if (this.id != 0) {
            notesService.getNote(this.id)
                .valueChanges().subscribe(function (note) {
                _this.note = note;
            });
            this.cargado = true;
            this.cargadoekg = true;
            this.cargadorx = true;
        }
        ;
        this.getSomeText();
    }
    ;
    ModalPage.prototype.getSomeText = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('pacientes/' + this.id + '/').child('tac').getDownloadURL()
            .then(function (response) {
            _this.someTextUrl = response;
            _this.preview = true;
        })
            .catch(function (error) { return console.log('error', error); });
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('pacientes/' + this.id + '/').child('ekg').getDownloadURL()
            .then(function (response) {
            _this.someTextUrlekg = response;
            _this.previewekg = true;
        })
            .catch(function (error) { return console.log('error', error); });
        __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref('pacientes/' + this.id + '/').child('rx').getDownloadURL()
            .then(function (response) {
            _this.someTextUrlrx = response;
            _this.previewrx = true;
        })
            .catch(function (error) { return console.log('error', error); });
    };
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.capturartac = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var pictures = _this.afStorage.storage.ref('pacientes/' + _this.id + '/tac/');
            pictures.putString(base64Image, 'data_url');
            var toast = _this.toastCtrl.create({
                message: 'Estudio guardado',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        }, function (err) {
            // Handle error
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: 'No se pudo tomar la foto',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    };
    ModalPage.prototype.capturarekg = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var pictures = _this.afStorage.storage.ref('pacientes/' + _this.id + '/ekg/');
            pictures.putString(base64Image, 'data_url');
            var toast = _this.toastCtrl.create({
                message: 'EKG guardado',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        }, function (err) {
            // Handle error
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: 'No se pudo tomar la foto',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    };
    ModalPage.prototype.capturarrx = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var pictures = _this.afStorage.storage.ref('pacientes/' + _this.id + '/rx/');
            pictures.putString(base64Image, 'data_url');
            var toast = _this.toastCtrl.create({
                message: 'Rx guardada',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        }, function (err) {
            // Handle error
            console.log(err);
            var toast = _this.toastCtrl.create({
                message: 'No se pudo tomar la foto',
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    };
    ModalPage.prototype.descargartac = function () {
        var target = "_self";
        this.iab.create(this.someTextUrl, target, this.iaboptions);
    };
    ModalPage.prototype.descargarekg = function () {
        var target = "_self";
        this.iab.create(this.someTextUrlekg, target, this.iaboptions);
    };
    ModalPage.prototype.descargarrx = function () {
        var target = "_self";
        this.iab.create(this.someTextUrlrx, target, this.iaboptions);
    };
    ModalPage.prototype.opcionespac = function () {
        var _this = this;
        if (this.id != 0) {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Opciones',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Guardar',
                        icon: !this.platform.is('ios') ? 'md-add-circle' : null,
                        handler: function () {
                            console.log('Share clicked');
                            if (_this.id != 0) {
                                _this.notesService.editarpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Paciente modificado',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            else {
                                _this.note.id = Date.now();
                                _this.notesService.crearpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Paciente agregado',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            _this.viewCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Borrar paciente',
                        role: 'destructive',
                        icon: !this.platform.is('ios') ? 'trash' : null,
                        handler: function () {
                            console.log('Delete clicked');
                            var alert = _this.alertCtrl.create({
                                title: 'Atención',
                                subTitle: 'Se borrará el paciente de manera permanente',
                                buttons: [
                                    {
                                        text: 'Aceptar',
                                        handler: function () {
                                            _this.show = false;
                                            _this.notesService.borrarpac(_this.note);
                                            _this.viewCtrl.dismiss();
                                            var toast = _this.toastCtrl.create({
                                                message: 'Paciente borrado',
                                                duration: 2000,
                                                position: 'top'
                                            });
                                            toast.present();
                                        }
                                    },
                                    {
                                        text: 'Cancelar',
                                        handler: function () {
                                            _this.viewCtrl.dismiss();
                                        }
                                    },
                                ]
                            });
                            alert.present();
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: function () {
                            console.log('Cancel clicked');
                            _this.viewCtrl.dismiss();
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Opciones',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Guardar',
                        icon: !this.platform.is('ios') ? 'md-add-circle' : null,
                        handler: function () {
                            console.log('Share clicked');
                            if (_this.id != 0) {
                                _this.notesService.editarpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Paciente modificado',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            else {
                                _this.note.id = Date.now();
                                _this.notesService.crearpac(_this.note);
                                var toast = _this.toastCtrl.create({
                                    message: 'Paciente agregado',
                                    duration: 2000,
                                    position: 'top'
                                });
                                toast.present();
                            }
                            _this.viewCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: function () {
                            console.log('Cancel clicked');
                            _this.viewCtrl.dismiss();
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\modal\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Paciente</ion-title>\n    <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding *ngIf="show">\n\n<ion-list>\n  <ion-item>\n      <ion-label floating>Cama</ion-label>\n      <ion-input type="text" [(ngModel)]="note.cama"  ></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="note.nombre" ></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Edad</ion-label>\n      <ion-input type="text" [(ngModel)]="note.edad"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Registro</ion-label>\n      <ion-input type="text" [(ngModel)]="note.registro"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Dx</ion-label>\n      <ion-input type="text" [(ngModel)]="note.dx"></ion-input>\n      \n  </ion-item>\n  <ion-item>\n        <button ion-button  (click)="capturartac()"  icon-left *ngIf="cargado"><ion-icon name="md-camera"  ></ion-icon> Capturar estudio</button>\n        <br>\n        <button ion-button  (click)="descargartac()" icon-left *ngIf="preview" ><ion-icon name="md-eye"></ion-icon> Ver Detalles </button>\n  </ion-item>\n  <ion-item *ngIf="preview">\n      <label>Vista Previa:</label>\n      <br>\n        <img src= {{someTextUrl}} />\n    \n    </ion-item>\n  <ion-item>\n      <ion-label floating>Procedimiento</ion-label>\n      <ion-input type="text" [(ngModel)]="note.procedimiento"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n      <ion-label floating>Fecha de cirugía</ion-label>\n      <ion-input [(ngModel)]="note.fechacx"> </ion-input>\n    </ion-item>\n    <ion-item>\n            <ion-label floating>Fecha de realización de EKG</ion-label>\n            <ion-input  [(ngModel)]="note.ekg"></ion-input>\n            \n        </ion-item>\n        <ion-item>\n                <button ion-button icon-only (click)="capturarekg()"  icon-left *ngIf="cargadoekg"><ion-icon name="md-camera"  ></ion-icon> Capturar EKG</button>\n                <br>\n                <button ion-button icon-only (click)="descargarekg()"  icon-left *ngIf="previewekg"><ion-icon name="md-eye"  ></ion-icon> Ver Detalles</button>\n        \n        </ion-item>\n        <ion-item *ngIf="previewekg" >\n                <label>Vista Previa:</label>\n                <br>\n                <img src= {{someTextUrlekg}} />\n            \n            </ion-item>\n            <ion-item>\n                    <ion-label floating >Fecha de realización de la Rx</ion-label>\n                    <ion-input  [(ngModel)]="note.rxtorax"></ion-input>\n                    \n                </ion-item>\n                <ion-item>\n                        <button ion-button icon-only (click)="capturarrx()"  icon-left *ngIf="cargadorx"><ion-icon name="md-camera"  ></ion-icon> Capturar Rx</button>\n                        <br>\n                        <button ion-button icon-only (click)="descargarrx()"  icon-left *ngIf="previewrx"><ion-icon name="md-eye" ></ion-icon> Ver Detalles</button>\n                </ion-item>\n                <ion-item *ngIf="previewrx">\n                        <label>Vista Previa:</label>\n                        <br>\n                        <img src= {{someTextUrlrx}} />\n                    \n                    </ion-item>\n\n<ion-item>\n    <ion-label>Material</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.material"></ion-checkbox>\n</ion-item>\n<ion-item>\n    <ion-label>Cruce</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.cruce"></ion-checkbox>\n</ion-item>\n<ion-item>\n    <ion-label>Consentimiento</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.consent"></ion-checkbox>\n</ion-item>\n<ion-item>\n    <ion-label>Craneotomo</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.craneotomo"></ion-checkbox>\n</ion-item>\n\n<ion-item>\n    <ion-label >Labs</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.labs"></ion-checkbox>\n</ion-item>\n\n\n<ion-item>\n    <ion-label >Ayuno</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.ayuno"></ion-checkbox>\n</ion-item>\n<ion-item>\n    <ion-label >Labs en expediente</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.labsexp"></ion-checkbox>\n</ion-item>\n<ion-item>\n    <ion-label>Suspender anticoagulante</ion-label>\n    <ion-checkbox color="dark" [(ngModel)]="note.anticoag"></ion-checkbox>\n</ion-item>\n<ion-item>\n        <ion-label >Valoración por anestesio</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="note.anest"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label >Completo</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="note.pendiente"></ion-checkbox>\n    </ion-item>\n\n<ion-item>\n    <ion-label floating>Modificado por:</ion-label>\n    <ion-input type="text" [(ngModel)]="note.elaborado"></ion-input>\n</ion-item>\n\n\n</ion-list>\n<ion-row padding>\n        <ion-col >\n                <ion-label stacked>Observaciones</ion-label>\n                <ion-textarea [(ngModel)]="note.observaciones" id="txtnotes" rows="12" ></ion-textarea>\n            \n           \n        </ion-col>\n        \n    \n    </ion-row>\n\n\n\n<ion-row no-padding>\n    <ion-col text-right>\n        <button ion-button item-end (click)="opcionespac()" block  >Opciones</button>\n       \n    </ion-col>\n    \n\n</ion-row>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_notes_service__["a" /* NotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesService = (function () {
    function NotesService(afDB, afStorage) {
        this.afDB = afDB;
        this.afStorage = afStorage;
        this.notes = [];
    }
    NotesService.prototype.getNotes = function () {
        return this.afDB.list("notas/");
        //return this.notes
    };
    ;
    NotesService.prototype.getNote = function (id) {
        //return this.notes.filter( function (e, i) { return e.id == id}) [0]|| {
        //    id: null, cama: null, nombre: null, edad: null, registro: null, dx: null,
        //procedimiento: null, fechacx: null, material: null, cruce: null, consentimiento: null,
        //craneotomo: null, ekg: null, labs: null, rxtorax: null, valanest: null,
        //ayuno: null, labsexp: null, suspanticoag: null, observaciones: null,
        //elaborado: null, modificaciones:[{num: null,fecha:null}]
        return this.afDB.object("notas/" + id);
    };
    ;
    NotesService.prototype.crearpac = function (note) {
        this.afDB.database.ref("notas/" + note.id).set(note);
        //this.notes.push(note);
    };
    ;
    NotesService.prototype.editarpac = function (note) {
        // for (let i ; i< this.notes.length; i++){
        // if (this.notes[i] == note){
        //    this.notes[i] = note } }
        this.afDB.database.ref("notas/" + note.id).set(note);
    };
    NotesService.prototype.borrarpac = function (note) {
        //for (let i = 0 ; i< this.notes.length; i++){
        //  if (this.notes[i] == note){
        //    this.notes.splice(i,1);}}
        this.afDB.database.ref("notas/" + note.id).remove();
        this.afStorage.ref('pacientes/' + note.id + '/tac/').delete();
        this.afStorage.ref('pacientes/' + note.id + '/ekg/').delete();
        this.afStorage.ref('pacientes/' + note.id + '/rx/').delete();
    };
    NotesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], NotesService);
    return NotesService;
}());

//# sourceMappingURL=notes.service.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal-page-ingresar/modal-page-ingresar.module": [
		622,
		1
	],
	"../pages/modal/modal.module": [
		623,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_page_ingresar_modal_page_ingresar__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__modal_modal__["a" /* ModalPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__modal_page_ingresar_modal_page_ingresar__["a" /* ModalPageIngresarPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Checklist" tabIcon="md-checkbox-outline"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Prevaloración" tabIcon="ios-list-box"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Directorio" tabIcon="ios-call"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      Neurocirugía HCJIM\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Prevaloración</h1>\n    \n        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd0qVsU2BQdNp_5DwdhuXoc7LetgNTuzFyOfzNbLbPRQCRFfA/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = (function () {
    function ContactPage(navCtrl, callNumber) {
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.adscritos = [
            {
                nombre: "Dr Héctor",
                telefono: "3331561837",
                rud: "981787"
            },
            {
                nombre: "Dr Guerrero",
                telefono: "3314106193",
                rud: "2013231"
            },
            {
                nombre: "Dr Andrade",
                telefono: "3310417254",
                rud: "2015035"
            },
            {
                nombre: "Dr Ubaldo",
                telefono: "3331297430",
                rud: "980379"
            },
            {
                nombre: "Dr Santana",
                telefono: "3334595538",
                rud: "2002062"
            },
            {
                nombre: "Dr Gaspar",
                telefono: "3313107936",
                rud: ""
            },
            {
                nombre: "Dr Neri",
                telefono: "3331377149",
                rud: ""
            },
            {
                nombre: "Dr García",
                telefono: "3314430921",
                rud: "2011030"
            },
            {
                nombre: "Dr Domínguez",
                telefono: "3331285222",
                rud: ""
            },
            {
                nombre: "Dr Ramiro",
                telefono: "3331379996",
                rud: ""
            }
        ];
        this.proveedores = [
            {
                id: 0,
                nombre: "Roger",
                empresa: "Complementos",
                telefono: "3310433374"
            },
            {
                id: 1,
                nombre: "Edgar",
                empresa: "Complementos",
                telefono: "3339546743"
            },
            {
                id: 2,
                nombre: "Pablo Paganoni",
                empresa: "Johnson",
                telefono: "3314176868"
            },
            {
                id: 3,
                nombre: "Carlos Valtierra",
                empresa: "Suplementos",
                telefono: "3314615355"
            },
            {
                id: 4,
                nombre: "Leidi Alvarado",
                empresa: "TSI",
                telefono: "3335703110"
            },
            {
                id: 5,
                nombre: "Rodrigo",
                empresa: "Lovimedic",
                telefono: "3318060800"
            },
            {
                id: 6,
                nombre: "Priscila",
                empresa: "Avicena",
                telefono: "3312189689"
            },
            {
                id: 7,
                nombre: "Neurosol",
                empresa: "",
                telefono: "3315856793"
            }
        ];
        this.otros = [
            {
                id: 0,
                nombre: "Dr González Jaime",
                empresa: "Monitoreo",
                telefono: "3331710533"
            },
            {
                id: 1,
                nombre: "Dr Glicerio",
                empresa: "Orl ISSSTE",
                telefono: "3331480448"
            }
        ];
        this.ocultar1 = false;
        this.ocultar2 = false;
        this.ocultar3 = false;
    }
    ContactPage.prototype.showadscritos = function () {
        this.ocultar1 = !this.ocultar1;
    };
    ContactPage.prototype.showproveedores = function () {
        this.ocultar2 = !this.ocultar2;
    };
    ContactPage.prototype.showotros = function () {
        this.ocultar3 = !this.ocultar3;
    };
    ContactPage.prototype.callprov = function (id) {
        this.telprov = this.proveedores[id].telefono;
        this.callNumber.callNumber(String(this.telprov), true);
        console.log(this.telprov);
    };
    ContactPage.prototype.callotros = function (id) {
        this.telotros = this.otros[id].telefono;
        this.callNumber.callNumber(String(this.telotros), true);
        console.log(this.telotros);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      Neurocirugía HCJIM\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>Directorio</h1>\n\n    <ion-list>\n        <ion-item>\n          Información de adscritos\n          <button ion-button item-end icon-left (click)="showadscritos ()" >\n            \n            Mostrar\n          </button>\n        </ion-item>\n        <ion-item>\n            Información de proveedores\n            <button ion-button item-end icon-left (click)="showproveedores ()" >\n              \n              Mostrar\n            </button>\n          </ion-item>\n          <ion-item>\n            Otros\n            <button ion-button item-end icon-left (click)="showotros ()" >\n              \n              Mostrar\n            </button>\n          </ion-item>\n\n\n\n\n      </ion-list>\n  \n\n\n    <ion-card *ngIf="ocultar1">\n        <ion-card-header>\n          Adscritos\n        </ion-card-header>\n      \n        <ion-list>\n          <ion-item *ngFor="let item of adscritos" >\n            <ion-icon name="md-contacts" item-start></ion-icon>\n            \n            <h2> {{item.nombre}} </h2>  \n            <h3>Tel:{{item.telefono}} </h3>\n            <h4>RUD: {{item.rud}} </h4>\n          </ion-item>\n      \n        </ion-list>\n      </ion-card>\n\n      <ion-card *ngIf="ocultar2">\n          <ion-card-header>\n            Proveedores\n          </ion-card-header>\n        \n          <ion-list>\n            <ion-item *ngFor="let item of proveedores" >\n              <ion-icon name="md-call" item-start></ion-icon>\n              <button ion-button item-end (click)="callprov(item.id)" >Llamar</button>\n              <h2 > {{item.nombre}} </h2> \n              <h3> {{item.empresa}} </h3> \n              <h4>{{item.telefono}} </h4>\n            </ion-item>\n        \n          </ion-list>\n        </ion-card>\n\n        <ion-card *ngIf="ocultar3">\n          <ion-card-header>\n            Otros\n          </ion-card-header>\n        \n          <ion-list>\n            <ion-item *ngFor="let item of otros" >\n              <ion-icon name="md-call" item-start></ion-icon>\n              <button ion-button item-end (click)="callotros(item.id)" >Llamar</button>\n              <h2 > {{item.nombre}} </h2> \n              <h3> {{item.empresa}} </h3> \n              <h4>{{item.telefono}} </h4>\n            </ion-item>\n        \n          </ion-list>\n        </ion-card>\n\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notes_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, viewCtrl, modalCtrl, platform, noteService, alertCtrl, afAuth, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.noteService = noteService;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.toast = toast;
        this.notes = [];
        this.noteService.getNotes().valueChanges()
            .subscribe(function (notas) {
            _this.notes = notas;
        });
        ;
    }
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data.email && data.uid) {
                _this.toast.create({
                    message: "Inicio se sesión exitoso!",
                    duration: 3000
                }).present();
            }
        });
    };
    HomePage.prototype.verpaciente = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], { id: id });
        modal.present();
    };
    ;
    HomePage.prototype.nuevopac = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], { id: 0 });
        modal.present();
    };
    HomePage.prototype.acomodar = function () {
        this.notes.sort(function (a, b) {
            return a.cama - b.cama;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Neurocirugía HCJIM</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>Pacientes pre-quirúrgicos <br>(hospitalizados)</h1>\n    \n  \n  <ion-card *ngFor = "let note of notes ">\n      \n        <ion-card-content>\n                <ion-item>\n                        \n                        <ion-icon name="md-checkbox" item-end *ngIf="note.pendiente"></ion-icon>\n                        <h1> Cama: {{note.cama}} </h1>\n                        <h2> {{note.nombre}} </h2>\n                        <h3> {{note.registro}} </h3>\n                        <p> Fecha probable de Cx: </p>\n                        <p>{{note.fechacx}} </p>\n                    </ion-item>\n                    \n                   \n\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col >\n                <button ion-button item-end (click)= \'verpaciente(note.id)\' block >Ver checklist</button>\n                \n            </ion-col>\n        </ion-row>\n\n        \n      \n  </ion-card>\n  <ion-fab right bottom>\n\n      <button ion-fab color="secondary"><ion-icon name="md-arrow-round-up"></ion-icon></button>\n\n      <ion-fab-list side="top" >\n          \n          <button ion-fab color="secondary" (click)= "nuevopac()" ><ion-icon name="md-person-add"></ion-icon></button>\n          <button ion-fab color="primary" (click)= "acomodar()" ><ion-icon name="md-refresh"></ion-icon></button>\n      </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__services_notes_service__["a" /* NotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(376);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modal_modal__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modal_page_ingresar_modal_page_ingresar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_storage__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_notes_service__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var firebaseConfig = {
    apiKey: "AIzaSyDWA4wmWdgaJt9sWRv_I5xy_3OM4l-G1Ow",
    authDomain: "nxcxjim.firebaseapp.com",
    databaseURL: "https://nxcxjim.firebaseio.com",
    storageBucket: "nxcxjim.appspot.com",
    messagingSenderId: "873366827067"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_page_ingresar_modal_page_ingresar__["a" /* ModalPageIngresarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modal-page-ingresar/modal-page-ingresar.module#ModalPageIngresarPageModule', name: 'ModalPageIngresarPage', segment: 'modal-page-ingresar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_storage__["b" /* AngularFireStorageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_page_ingresar_modal_page_ingresar__["a" /* ModalPageIngresarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_page_ingresar_modal_page_ingresar__["a" /* ModalPageIngresarPage */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__services_notes_service__["a" /* NotesService */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modal_page_ingresar_modal_page_ingresar__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_modal_page_ingresar_modal_page_ingresar__["a" /* ModalPageIngresarPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Ionic3\ionic\Neurocx\NxCxJIM\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map