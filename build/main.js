webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartPage = (function () {
    function CartPage(_navCtrl, _navParams, _storage, _viewCtrl) {
        var _this = this;
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this._storage = _storage;
        this._viewCtrl = _viewCtrl;
        this.cartItem = [];
        this.showEmptyartMessage = false;
        this.total = 0.0;
        this._storage.ready()
            .then(function () { return _this._storage.get('cart'); })
            .then(function (data) {
            _this.cartItem = data;
            if (_this.cartItem == null)
                return _this.showEmptyartMessage = true;
            console.log(_this.cartItem);
            if (_this.cartItem.length > 0) {
                _this.cartItem.forEach(function (item, index) {
                    _this.total = _this.total + (item.product.price * item.qty);
                });
            }
            else {
                _this.showEmptyartMessage = true;
            }
        });
    }
    CartPage.prototype.removeFromCart = function (item, i) {
        var _this = this;
        var price = item.product.price;
        var qty = item.product.qty;
        this.cartItem.splice(i, 1);
        this._storage.set('cart', this.cartItem)
            .then(function () {
            _this.total = _this.total - (price * qty);
        });
        if (this.cartItem.length == 0) {
            this.showEmptyartMessage = true;
        }
    };
    CartPage.prototype.closeModal = function () {
        this._viewCtrl.dismiss();
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        this._storage.get("userLoginInfo")
            .then(function (data) {
            if (data != null) {
                _this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */]);
            }
            else {
                _this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
            }
        });
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/cart/cart.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item-divider padfing-top color="light">\n        Your Cart Description\n    </ion-item-divider>\n    <ion-item-divider [hidden]="!showEmptyartMessage" color="danger">\n        There are no Products in your cart!\n    </ion-item-divider>\n    <ion-item *ngFor="let item of cartItem; let i = index">\n      <ion-thumbnail item-left>\n        <img src="http://wooshoes.azurewebsites.net/{{item.product.featured_src}}" alt="" style="height:60px !important;width:60px !important;">\n      </ion-thumbnail>\n      <h2>{{ item.product.title }}</h2>\n      <p>{{ item.qty }} * {{ item.product.price }}</p>\n      <button ion-button clear item-right color="danger" (click)="removeFromCart(item, i)">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>\n\n        </ion-col>\n        <ion-col col-4>\n          <b>Total</b>\n        </ion-col>\n        <ion-col col-3>\n\n        </ion-col>\n        <ion-col col-3 text-right>\n          <b>{{ total }}</b>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="dark" outline block (click)="closeModal()">Back</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="danger" block outline (click)="checkout()">Checkout</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/cart/cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(_navCtrl, _alertCtrl, _http, _toastCtrl, _storage, _navParams) {
        this._navCtrl = _navCtrl;
        this._alertCtrl = _alertCtrl;
        this._http = _http;
        this._toastCtrl = _toastCtrl;
        this._storage = _storage;
        this._navParams = _navParams;
        this.username = "";
        this.password = "";
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this._http.get("http://wooshoes.azurewebsites.net/api/auth/generate_auth_cookie/?insecure=cool&username=" + this.username + "&password=" + this.password)
            .subscribe(function (res) {
            console.log(res.json());
            var response = res.json();
            if (response.error) {
                _this._toastCtrl.create({
                    message: response.error,
                    duration: 5000
                }).present();
                return;
            }
            _this._storage.set("userLoginInfo", response)
                .then(function (data) {
                _this._alertCtrl.create({
                    title: "Login Successful",
                    message: "You have been logged in successfully.",
                    buttons: [{
                            text: "OK",
                            handler: function () {
                                if (_this._navParams.get("next")) {
                                    _this._navCtrl.push(_this._navParams.get('next'));
                                }
                                else {
                                    _this._navCtrl.pop();
                                }
                            }
                        }]
                }).present();
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <img src="../../assets/images/logo.png" style="width:70%; margin:auto;">\n  </ion-card>\n  <ion-list>\n      <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type="text" [(ngModel)]="username"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n  </ion-list>\n  <button ion-button block color="danger"  (click)="login()">Login</button>\n  <button ion-button clear block color="dark"  (click)="login()">No Account! Sign Up Here.</button>\n</ion-content>\n'/*ion-inline-end:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details_product_details__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var END_POINT = "http://wooshoes.azurewebsites.net";
var HomePage = (function () {
    function HomePage(_navCtrl, _toastCtrl) {
        var _this = this;
        this._navCtrl = _navCtrl;
        this._toastCtrl = _toastCtrl;
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__({
            url: END_POINT,
            consumerKey: "ck_1543cce67a491ba996bdfd813634cb569a666448",
            consumerSecret: "cs_3234b5a879bec26ac111cb48a8b866424ef8d8bc"
        });
        this.page = 2;
        this.loadMoreProducts(null);
        this.WooCommerce.getAsync("products").then(function (data) {
            _this.moreProducts = JSON.parse(data.body).products;
        }, function (err) {
            console.log(err);
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setInterval(function () {
            if (_this.productSlides.getActiveIndex() === _this.productSlides.length() - 1) {
                _this.productSlides.slideTo(0);
            }
            _this.productSlides.slideNext();
        }, 3000);
    };
    HomePage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        if (event == null) {
            this.page = 2;
            this.moreProducts = [];
        }
        else {
            this.page++;
        }
        this.WooCommerce.getAsync("products?page=" + this.page).then(function (data) {
            _this.products = _this.moreProducts.concat(JSON.parse(data.body).products);
            if (event != null) {
                event.complete();
            }
            if (JSON.parse(data.body).products.length < 10) {
                event.enable(false);
                _this._toastCtrl.create({
                    message: "No more Products!",
                    duration: 3000
                }).present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.openProductPage = function (product) {
        this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_details_product_details__["a" /* ProductDetailsPage */], { product: product });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('productSlides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
], HomePage.prototype, "productSlides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/home/home.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Home</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-card no-padding>\n		<ion-slides autoplay="3000" pager="true">\n			<ion-slide *ngFor="let number of [1,2,3,4]">\n				<img src="./assets/images/{{number}}.jpg" alt="">\n			</ion-slide>\n		</ion-slides>\n	</ion-card>\n	<img style="margin-top:10px;" src="./assets/images/banner2.jpg" alt="">\n	<ion-grid>\n		<ion-row>\n			<ion-slides #productSlides>\n				<ion-slide *ngFor="let product of products">\n					<ion-card no-padding>\n						<img src="http://wooshoes.azurewebsites.net/{{product.featured_src}}">\n						<h2 ion-text padding center> {{ product.title }}</h2>\n						<p ion-text padding text-left [innerHTML]="product.description"></p>\n					</ion-card>\n				</ion-slide>\n			</ion-slides>\n		</ion-row>\n	</ion-grid>\n	<ion-list>\n		<ion-item *ngFor="let product of moreProducts" (click)="openProductPage(product)">\n			<ion-thumbnail item-left>\n				<img src="http://wooshoes.azurewebsites.net/{{product.featured_src}}">\n			</ion-thumbnail>\n			<h2> {{ product.title }}</h2>\n			<p ion-text text-wrap>\n				<span [innerHTML]="product.description.substr(0, 50) + \'...\'"></span>\n				<span [innerHTML]="product.price_html"></span>\n			</p>\n			<button ion-button icon-only clear item-right>\n				<ion-icon name="arrow-forward"></ion-icon>\n			</button>\n		</ion-item>\n	</ion-list>\n	<ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_cart__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var END_POINT = "http://wooshoes.azurewebsites.net";
var ProductDetailsPage = (function () {
    function ProductDetailsPage(_navCtrl, _navParams, _storage, _toastCtrl, _modalCtrl) {
        var _this = this;
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this._storage = _storage;
        this._toastCtrl = _toastCtrl;
        this._modalCtrl = _modalCtrl;
        this.reviews = [];
        this.product = this._navParams.get('product');
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_4_woocommerce_api__({
            url: END_POINT,
            consumerKey: "ck_1543cce67a491ba996bdfd813634cb569a666448",
            consumerSecret: "cs_3234b5a879bec26ac111cb48a8b866424ef8d8bc"
        });
        this.WooCommerce.getAsync("products/" + this.product.id + "/reviews").then(function (data) {
            _this.reviews = JSON.parse(data.body).product_reviews;
            console.log(_this.reviews);
        }, function (err) {
            console.log(err);
        });
    }
    ProductDetailsPage.prototype.addToCart = function (product) {
        var _this = this;
        this._storage.get("cart").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                data.push({
                    "product": product,
                    "qty": 1,
                    "amount": parseFloat(product.price)
                });
            }
            else {
                var added = 0;
                for (var i = 0; i < data.length; i++) {
                    if (product.id == data[i].product.id) {
                        var qty = data[i].qty;
                        console.log("Product is already in the cart");
                        data[i].qty = qty + 1;
                        data[i].amount = parseFloat(data[i].amount) + parseFloat(data[i].product.price);
                        added = 1;
                    }
                }
                if (added == 0) {
                    data.push({
                        "product": product,
                        "qty": 1,
                        "amount": parseFloat(product.price)
                    });
                }
            }
            _this._storage.set("cart", data).then(function () {
                console.log("Cart Updated");
                console.log(data);
                _this._toastCtrl.create({
                    message: "Cart Updated",
                    duration: 3000
                }).present();
            });
        });
    };
    ProductDetailsPage.prototype.openCart = function () {
        var modal = this._modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__cart_cart__["a" /* CartPage */]);
        modal.present();
    };
    return ProductDetailsPage;
}());
ProductDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-product-details',template:/*ion-inline-start:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/product-details/product-details.html"*/'<ion-header>\n\n	<ion-navbar>\n		<ion-title> {{ product.title }} </ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-fab right top edge (click)="openCart()">\n		<button ion-fab color="danger" >\n			<ion-icon name="cart"></ion-icon>\n		</button>\n	</ion-fab>\n	<ion-card no-padding>\n		<ion-slides autoplay="3000">\n			<ion-slide *ngFor="let image of product.images">\n				<img src="http://wooshoes.azurewebsites.net/{{image.src}}" alt="">\n			</ion-slide>\n		</ion-slides>\n		<ion-card-content>\n			<ion-card-title>\n				{{ product.title }} &nbsp;\n				<ion-chip *ngFor="let cat of product.categories" style="margin-left:.5rem;">\n					<ion-label color="danger">\n						{{ cat }}\n					</ion-label>\n				</ion-chip>\n			</ion-card-title>\n			<p [innerHTML]="product.description"></p>\n			<button ion-button icon-left block outline color="danger" (click)="addToCart(product)">\n				<ion-icon name="basket"></ion-icon>\n				Add  to Card\n			</button>\n		</ion-card-content>\n	</ion-card>\n	<ion-card *ngIf="product.attributes.length > 0">\n		<ion-card-content>\n			<ion-card-title>\n				Specifications\n			</ion-card-title>\n			<ion-grid>\n				<ion-row *ngFor="let att of product.attributes">\n					<ion-col col-4>{{ att.name }}</ion-col>\n					<ion-col col-8>\n						<span *ngFor="let option of att.options">{{ option }}</span>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-card-content>\n	</ion-card>\n	<ion-card *ngIf="reviews.length > 0">\n		<ion-card-content>\n			<ion-card-title>\n				Reviews\n			</ion-card-title>\n			<ion-grid>\n				<ion-row *ngFor="let review of reviews">\n					<ion-col col-4>\n						<p>\n							{{ review.reviewer_name }}\n						</p>\n						<span *ngIf="review.rating >= 1">\n							<ion-icon color="energized" small name="star"></ion-icon>\n						</span>\n						<span *ngIf="review.rating >= 2">\n							<ion-icon color="energized" small name="star"></ion-icon>\n						</span>\n						<span *ngIf="review.rating >= 3">\n							<ion-icon color="energized" small name="star"></ion-icon>\n						</span>\n						<span *ngIf="review.rating >= 4">\n							<ion-icon color="energized" small name="star"></ion-icon>\n						</span>\n						<span *ngIf="review.rating >= 5">\n							<ion-icon color="energized" small name="star"></ion-icon>\n						</span>\n					</ion-col>\n					<ion-col col-8>\n						{{ review.review }}\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-card-content>\n	</ion-card>\n</ion-content>'/*ion-inline-end:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/product-details/product-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */]])
], ProductDetailsPage);

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 196:
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
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 237:
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
webpackEmptyAsyncContext.id = 237;

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_cart__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_by_category_products_by_category__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var END_POINT = "http://wooshoes.azurewebsites.net";
var MenuPage = (function () {
    function MenuPage(_navCtrl, _navParams, _modalCtrl, _storage) {
        var _this = this;
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this._modalCtrl = _modalCtrl;
        this._storage = _storage;
        this.homePage = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.categories = [];
        this.user = {};
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_8_woocommerce_api__({
            // -AZURE
            url: END_POINT,
            consumerKey: "ck_1543cce67a491ba996bdfd813634cb569a666448",
            consumerSecret: "cs_3234b5a879bec26ac111cb48a8b866424ef8d8bc"
            //-LOCAL
            // url: "http://localhost/woocommerce",
            // consumerKey: "ck_21db839fc315a9088df58078ae192114a6941267",
            // consumerSecret: "cs_16b932b654e0632c537164e064bb1f296efa5ead"
        });
        this.WooCommerce.getAsync("products/categories").then(function (data) {
            // this.moreProducts = JSON.parse(data.body).products;
            var tem = JSON.parse(data.body).product_categories;
            for (var i = 0; i < tem.length; i++) {
                if (tem[i].parent == 0) {
                    if (tem[i].slug == 'accessories') {
                        tem[i].icon = 'images';
                    }
                    if (tem[i].slug == 'hoodies') {
                        tem[i].icon = 'musical-notes';
                    }
                    if (tem[i].slug == 'tshirts') {
                        tem[i].icon = 'shirt';
                    }
                    _this.categories.push(tem[i]);
                }
            }
        }, function (err) {
            console.log(err);
        });
    }
    MenuPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this._storage.ready().then(function () {
            _this._storage.get("userLoginInfo")
                .then(function (userLoginInfo) {
                if (userLoginInfo != null) {
                    console.log("User logged in ...");
                    _this.user = userLoginInfo.user;
                    console.log(_this.user);
                    _this.loggedIn = true;
                }
                else {
                    console.log("User not Found!");
                    _this.user = {};
                    _this.loggedIn = false;
                }
            });
        });
    };
    MenuPage.prototype.openCategoryPage = function (category) {
        this.childNavCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__products_by_category_products_by_category__["a" /* ProductsByCategoryPage */], { category: category });
    };
    MenuPage.prototype.openPage = function (pageName) {
        var _this = this;
        if (pageName == 'signup') {
            this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
        }
        if (pageName == 'login') {
            this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        }
        if (pageName == 'logout') {
            this._storage.remove('userLoginInfo')
                .then(function () {
                _this.user = {};
                _this.loggedIn = false;
            });
        }
        if (pageName == 'cart') {
            var modal = this._modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__cart_cart__["a" /* CartPage */]);
            modal.present();
        }
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */])
], MenuPage.prototype, "childNavCtrl", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="md-page-menu-custom">\n    <ion-card>\n      <img src="./assets/images/rock.png" alt="">\n      <div class="card-title">WooIonic</div>\n      <div class="card-subtitle">Keep Shopping!</div>\n    </ion-card>\n    <ion-list>\n      <ion-item *ngFor="let category of categories" (click)="openCategoryPage(category)" menuClose>\n        <ion-icon [name]="category.icon" item-left large></ion-icon>\n        <h2> {{ category.name }} </h2>\n        <p> {{ category.description }} </p>\n      </ion-item>\n\n      <ion-item *ngIf="!loggedIn" (click)="openPage(\'signup\')" menuClose>\n        <ion-icon name="md-clipboard" item-left large></ion-icon>\n        <h2>Sing up</h2>\n        <p>For a new Account</p>\n      </ion-item>\n      <ion-item *ngIf="!loggedIn" (click)="openPage(\'login\')" menuClose>\n        <ion-icon name="log-in" item-left large></ion-icon>\n        <h2>Login</h2>\n        <p>Using email and password</p>\n      </ion-item>\n\n      <ion-item-divider *ngIf="loggedIn" color="light">Account</ion-item-divider>\n\n      <ion-item *ngIf="loggedIn" menuClose>\n        <ion-icon name="contact" item-left large></ion-icon>\n        <h2>{{ (user.firstname == \'\' ? user.username : user.firstname) || "" }}</h2>\n        <p>Welcome</p>\n      </ion-item>\n      <ion-item *ngIf="loggedIn" (click)="openPage(\'cart\')" menuClose>\n        <ion-icon name="cart" item-left large></ion-icon>\n        <h2>Your cart</h2>\n        <p>Check items in your cart!</p>\n      </ion-item>\n      <ion-item *ngIf="loggedIn" (click)="openPage(\'logout\')" menuClose>\n        <ion-icon name="log-out" item-left large></ion-icon>\n        <h2>Logout</h2>\n        <p>of your Account.</p>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav #content [root]="homePage"></ion-nav>\n'/*ion-inline-end:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var END_POINT = "http://wooshoes.azurewebsites.net";
var CheckoutPage = (function () {
    function CheckoutPage(_navCtrl, _navParams, _storage, _alertCtrl, _payPal) {
        var _this = this;
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this._storage = _storage;
        this._alertCtrl = _alertCtrl;
        this._payPal = _payPal;
        this.newOrder = {};
        this.newOrder.billing_address = {};
        this.newOrder.shipping_address = {};
        this.billing_shipping_same = false;
        this.paymentMethods = [
            { method_id: "bacs", method_title: "Direct Bank Transfer" },
            { method_id: "cheque", method_title: "Cheque Payment" },
            { method_id: "cod", method_title: "Cash on Delivery" },
            { method_id: "paypal", method_title: "PayPal" }
        ];
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_3_woocommerce_api__({
            url: END_POINT,
            consumerKey: "ck_1543cce67a491ba996bdfd813634cb569a666448",
            consumerSecret: "cs_3234b5a879bec26ac111cb48a8b866424ef8d8bc"
        });
        this._storage.get("userLoginInfo").then(function (userLoginInfo) {
            _this.userInfo = userLoginInfo.user;
            var email = userLoginInfo.user.email;
            _this.WooCommerce.getAsync("customers/email/" + email).then(function (data) {
                _this.newOrder = JSON.parse(data.body).customer;
            });
        });
    }
    CheckoutPage.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
        if (this.billing_shipping_same) {
            this.newOrder.shipping_address = this.newOrder.billing_address;
        }
    };
    CheckoutPage.prototype.placeOrder = function () {
        var _this = this;
        var orderItems = [];
        var data = {};
        var paymentData = {};
        this.paymentMethods.forEach(function (element, index) {
            if (element.method_id == _this.paymentMethod) {
                paymentData = element;
            }
        });
        data = {
            payment_details: {
                method_id: paymentData.method_id,
                method_title: paymentData.method_title,
                paid: true
            },
            billing_address: this.newOrder.billing_address,
            shipping_address: this.newOrder.shipping_address,
            customer_id: this.userInfo.id || '',
            line_items: orderItems
        };
        if (paymentData.method_id == "paypal") {
            this._payPal.init({
                PayPalEnvironmentProduction: "YOUR_PRODUCTION_CLIENT_ID",
                PayPalEnvironmentSandbox: "AY03jhU5KEvgyAsmv5gER7_1aBbTOtQnBApjgnQIT06PTha544rbLfjn63YTmDRv4ie2tM9i5AtvQ_rA"
            }).then(function () {
                // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                _this._payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                    _this._storage.get("cart").then(function (cart) {
                        var total = 0.00;
                        cart.forEach(function (element, index) {
                            orderItems.push({ product_id: element.product.id, quantity: element.qty });
                            total = total + (element.product.price * element.qty);
                        });
                        var payment = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["c" /* PayPalPayment */](total.toString(), 'USD', 'Description', 'sale');
                        _this._payPal.renderSinglePaymentUI(payment).then(function (response) {
                            // Successfully paid
                            alert(JSON.stringify(response));
                            data.line_items = orderItems;
                            //console.log(data);
                            var orderData = {};
                            orderData.order = data;
                            _this.WooCommerce.postAsync('orders', orderData).then(function (data) {
                                alert("Order placed successfully!");
                                var response = (JSON.parse(data.body).order);
                                _this._alertCtrl.create({
                                    title: "Order Placed Successfully",
                                    message: "Your order has been placed successfully. Your order number is " + response.order_number,
                                    buttons: [{
                                            text: "OK",
                                            handler: function () {
                                                _this._navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                                            }
                                        }]
                                }).present();
                            });
                        });
                    }, function () {
                        // Error or render dialog closed without being successful
                    });
                }, function () {
                    // Error in configuration
                });
            }, function () {
                // Error in initialization, maybe PayPal isn't supported or something else
            });
        }
        else {
            this._storage.get("cart").then(function (cart) {
                cart.forEach(function (element, index) {
                    orderItems.push({
                        product_id: element.product.id,
                        quantity: element.qty
                    });
                });
                data.line_items = orderItems;
                var orderData = {};
                orderData.order = data;
                _this.WooCommerce.postAsync("orders", orderData).then(function (data) {
                    var response = (JSON.parse(data.body).order);
                    _this._alertCtrl.create({
                        title: "Order Placed Successfully",
                        message: "Your order has been placed successfully. Your order number is " + response.order_number,
                        buttons: [{
                                text: "OK",
                                handler: function () {
                                    _this._navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                                }
                            }]
                    }).present();
                });
            });
        }
    };
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout',template:/*ion-inline-start:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/checkout/checkout.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-divider color="danger">Personal Details</ion-item-divider>\n    <ion-item>\n      <ion-label>First Name</ion-label>\n      <ion-input type="text" [(ngModel)]="newOrder.billing_address.first_name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Last Name</ion-label>\n      <ion-input type="text" [(ngModel)]="newOrder.billing_address.last_name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input readonly type="email" [(ngModel)]="newOrder.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input readonly type="text" [(ngModel)]="newOrder.username"></ion-input>\n    </ion-item>\n\n    <ion-item-divider color="danger">Billing Details</ion-item-divider>\n\n    <ion-item>\n      <ion-label>Address Line 1</ion-label>\n      <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.billing_address.address_1"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Address Line 2</ion-label>\n      <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.billing_address.address_2"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Country</ion-label>\n      <ion-select [(ngModel)]="newOrder.billing_address.country">\n        <ion-option value="India" selected="true">India</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>State</ion-label>\n      <ion-select [(ngModel)]="newOrder.billing_address.state">\n        <ion-option value="New Delhi">New Delhi</ion-option>\n        <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n        <ion-option value="Maharashtra">Maharashtra</ion-option>\n        <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n        <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>City</ion-label>\n      <ion-input type="text" [(ngModel)]="newOrder.billing_address.city"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Postal Code</ion-label>\n      <ion-input type="number" clearInput [(ngModel)]="newOrder.billing_address.postcode"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Phone</ion-label>\n      <ion-input type="tel" clearInput [(ngModel)]="newOrder.billing_address.phone"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Same Shipping Details</ion-label>\n      <ion-checkbox (ionChange)="setBillingToShipping()"></ion-checkbox>\n    </ion-item>\n\n    <ion-item-divider color="danger" *ngIf="!billing_shipping_same">Shipping Details</ion-item-divider>\n\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>First Name</ion-label>\n      <ion-input type="text" [(ngModel)]="newOrder.shipping_address.first_name"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>Last Name</ion-label>\n      <ion-input type="text" [(ngModel)]="newOrder.shipping_address.last_name"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>Address Line 1</ion-label>\n      <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.shipping_address.address_1"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>Address Line 2</ion-label>\n      <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.shipping_address.address_2"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>Country</ion-label>\n      <ion-select [(ngModel)]="newOrder.shipping_address.country">\n        <ion-option value="India" selected="true">India</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>State</ion-label>\n      <ion-select [(ngModel)]="newOrder.shipping_address.state">\n        <ion-option value="New Delhi">New Delhi</ion-option>\n        <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n        <ion-option value="Maharashtra">Maharashtra</ion-option>\n        <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n        <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>City</ion-label>\n      <ion-input type="text" [(ngModel)]="newOrder.shipping_address.city"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>Postal Code</ion-label>\n      <ion-input type="number" clearInput [(ngModel)]="newOrder.shipping_address.postcode"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>Phone</ion-label>\n      <ion-input type="tel" clearInput [(ngModel)]="newOrder.shipping_address.phone"></ion-input>\n    </ion-item>\n\n    <ion-item-divider color="danger">Payment Details</ion-item-divider>\n\n    <ion-item>\n      <ion-label>Payment Method</ion-label>\n      <ion-select [(ngModel)]="paymentMethod">\n        <ion-option *ngFor="let p of paymentMethods" value="{{p.method_id}}">{{ p.method_title }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <button ion-button block color="danger" (click)="placeOrder()">Place Order</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/checkout/checkout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_paypal__["a" /* PayPal */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsByCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var END_POINT = "http://wooshoes.azurewebsites.net";

var ProductsByCategoryPage = (function () {
    function ProductsByCategoryPage(_navCtrl, _toastCtrl, _navParams) {
        var _this = this;
        this._navCtrl = _navCtrl;
        this._toastCtrl = _toastCtrl;
        this._navParams = _navParams;
        this.page = 1;
        this.category = this._navParams.get('category');
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            // -AZURE
            url: END_POINT,
            consumerKey: "ck_1543cce67a491ba996bdfd813634cb569a666448",
            consumerSecret: "cs_3234b5a879bec26ac111cb48a8b866424ef8d8bc"
        });
        this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug).then(function (data) {
            _this.products = JSON.parse(data.body).products;
        }, function (err) {
            console.log(err);
        });
    }
    ProductsByCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsByCategoryPage');
    };
    ProductsByCategoryPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.page++;
        this.WooCommerce.getAsync("products?filter=" + this.category.slug + "&page=" + this.page).then(function (data) {
            var tmp = (JSON.parse(data.body).products);
            _this.products = _this.products.concat(JSON.parse(data.body).products);
            event.complete();
            if (JSON.parse(data.body).products.length < 10) {
                event.enable(false);
                _this._toastCtrl.create({
                    message: "No more Products!",
                    duration: 3000
                }).present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductsByCategoryPage.prototype.openProductPage = function (product) {
        this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { product: product });
    };
    return ProductsByCategoryPage;
}());
ProductsByCategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-products-by-category',template:/*ion-inline-start:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/products-by-category/products-by-category.html"*/'<ion-header>\n\n	<ion-navbar>\n		<ion-title>Products by Category</ion-title>\n		<ion-buttons left>\n			<button color="danger" ion-button icon menuToggle>\n				<ion-icon name="menu"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-list>\n		<ion-item *ngFor="let product of products" (click)="openProductPage(product)">\n			<ion-thumbnail item-left>\n				<img src="http://wooshoes.azurewebsites.net/{{product.featured_src}}">\n			</ion-thumbnail>\n			<h2> {{ product.title }}</h2>\n			<p ion-text text-wrap>\n				<span [innerHTML]="product.description.substr(0, 50) + \'...\'"></span>\n				<span [innerHTML]="product.price_html"></span>\n			</p>\n			<button ion-button icon-only clear item-right>\n				<ion-icon name="arrow-forward"></ion-icon>\n			</button>\n		</ion-item>\n	</ion-list>\n	<ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/products-by-category/products-by-category.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ProductsByCategoryPage);

//# sourceMappingURL=products-by-category.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var END_POINT = "http://wooshoes.azurewebsites.net";
var SignupPage = (function () {
    function SignupPage(_navCtrl, _toastCtrl, _alertCtrl, _navParams) {
        this._navCtrl = _navCtrl;
        this._toastCtrl = _toastCtrl;
        this._alertCtrl = _alertCtrl;
        this._navParams = _navParams;
        this.newUser = {};
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_2_woocommerce_api__({
            url: END_POINT,
            consumerKey: "ck_1543cce67a491ba996bdfd813634cb569a666448",
            consumerSecret: "cs_3234b5a879bec26ac111cb48a8b866424ef8d8bc"
        });
        this.newUser.billing_address = {};
        this.newUser.shipping_address = {};
        this.billing_shipping_same = false;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
    };
    SignupPage.prototype.checkEmail = function () {
        var _this = this;
        var validEmail = false;
        var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(this.newUser.email)) {
            // look email valid
            this.WooCommerce.getAsync('customers/email/' + this.newUser.email)
                .then(function (data) {
                var res = JSON.parse(data.body);
                if (res.errors) {
                    validEmail = true;
                    _this._toastCtrl.create({
                        message: "Congratulations. Email is good to go.",
                        duration: 3000,
                        cssClass: 'cs-success'
                    }).present();
                }
                else {
                    validEmail = false;
                    _this._toastCtrl.create({
                        message: "Email already registered. Please Check.",
                        showCloseButton: true
                    }).present();
                }
            });
        }
        else {
            validEmail = false;
            this._toastCtrl.create({
                message: "Invalid Email, Please Check.",
                showCloseButton: true
            }).present();
        }
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var customerData = {
            customer: {}
        };
        customerData.customer = {
            "email": this.newUser.email,
            "first_name": this.newUser.first_name,
            "last_name": this.newUser.last_name,
            "username": this.newUser.username,
            "password": this.newUser.password,
            "billing_address": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": "",
                "address_1": this.newUser.billing_address.address_1,
                "address_2": this.newUser.billing_address.address_2,
                "city": this.newUser.billing_address.city,
                "state": this.newUser.billing_address.state,
                "postcode": this.newUser.billing_address.postcode,
                "country": this.newUser.billing_address.country,
                "email": this.newUser.email,
                "phone": this.newUser.billing_address.phone
            },
            "shipping_address": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": "",
                "address_1": this.newUser.shipping_address.address_1,
                "address_2": this.newUser.shipping_address.address_2,
                "city": this.newUser.shipping_address.city,
                "state": this.newUser.shipping_address.state,
                "postcode": this.newUser.shipping_address.postcode,
                "country": this.newUser.shipping_address.country,
                "email": this.newUser.email,
                "phone": this.newUser.shipping_address.phone
            }
        };
        if (this.billing_shipping_same) {
            this.newUser.shipping_address = this.newUser.billing_address;
        }
        this.WooCommerce.postAsync('customers', customerData)
            .then(function (data) {
            var response = JSON.parse(data.body);
            if (response.customer) {
                _this._alertCtrl.create({
                    title: "Account Create",
                    message: "Your account has been created successfully! Please Loginto proceed.",
                    buttons: [{
                            text: "Login",
                            handler: function () {
                                //TODO:
                            }
                        }]
                }).present();
            }
            else {
                _this._toastCtrl.create({
                    message: response.errors[0].message,
                    showCloseButton: true,
                    cssClass: "cs-danger"
                });
            }
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Customer Sign up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-divider color="light" padding-top>\n      Personal Detail\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>First Name</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.first_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Last Name</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.last_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="newUser.email" (blur)="checkEmail()"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="newUser.password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Confirm Password</ion-label>\n      <ion-input type="password" [(ngModel)]="newUser.confirm_password"></ion-input>\n    </ion-item>\n\n    <ion-item-divider color="light">Billing Details</ion-item-divider>\n\n    <ion-item>\n      <ion-label>Address line 1</ion-label>\n      <ion-textarea type="text" maxlength="30" [(ngModel)]="newUser.billing_address.address_1">\n      </ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Address line 2</ion-label>\n      <ion-textarea type="text" maxlength="30" [(ngModel)]="newUser.billing_address.address_2">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Country</ion-label>\n      <ion-select [(ngModel)]="newUser.billing_address.country">\n        <ion-option value="india" selected="true">India</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>State</ion-label>\n      <ion-select [(ngModel)]="newUser.billing_address.state">\n        <ion-option value="india" selected="true">New Dheli</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>City</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.billing_address.city">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Postal Code</ion-label>\n      <ion-input type="number" clearInput [(ngModel)]="newUser.billing_address.postcode">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Phone</ion-label>\n      <ion-input type="tel" clearInput [(ngModel)]="newUser.billing_address.phone">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Same Shipping Details</ion-label>\n      <ion-checkbox (ionChange)="setBillingToShipping()"></ion-checkbox>\n    </ion-item>\n\n    <ion-item-divider *ngIf="!billing_shipping_same" color="light">Shipping Details</ion-item-divider>\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>Address line 1</ion-label>\n      <ion-textarea type="text" maxlength="30" [(ngModel)]="newUser.shipping_address.address_1">\n      </ion-textarea>\n    </ion-item>\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>Address line 2</ion-label>\n      <ion-textarea type="text" maxlength="30" [(ngModel)]="newUser.shipping_address.address_2">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>Country</ion-label>\n      <ion-select [(ngModel)]="newUser.shipping_address.country">\n        <ion-option value="india" selected="true">India</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>State</ion-label>\n      <ion-select [(ngModel)]="newUser.shipping_address.state">\n        <ion-option value="india" selected="true">New Dheli</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>City</ion-label>\n      <ion-input type="text" [(ngModel)]="newUser.shipping_address.city">\n      </ion-input>\n    </ion-item>\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>Postal Code</ion-label>\n      <ion-input type="number" clearInput [(ngModel)]="newUser.shipping_address.postcode">\n      </ion-input>\n    </ion-item>\n    <ion-item *ngIf="!billing_shipping_same">\n      <ion-label>Phone</ion-label>\n      <ion-input type="tel" clearInput [(ngModel)]="newUser.shipping_address.phone">\n      </ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="danger" no-padding>\n    <button ion-button block color="danger" (click)="signup()">Sign Up</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/giogio/Documents/woo-ionic-mobile/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(374);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_products_by_category_products_by_category__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_product_details_product_details__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_checkout_checkout__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_paypal__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_onesignal__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_product_details_product_details__["a" /* ProductDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_checkout_checkout__["a" /* CheckoutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_products_by_category_products_by_category__["a" /* ProductsByCategoryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_product_details_product_details__["a" /* ProductDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_checkout_checkout__["a" /* CheckoutPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_paypal__["a" /* PayPal */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_onesignal__["a" /* OneSignal */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(281);
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
    function MyApp(_platform, _statusBar, _splashScreen, _oneSignal) {
        this._platform = _platform;
        this._statusBar = _statusBar;
        this._splashScreen = _splashScreen;
        this._oneSignal = _oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this._platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this._statusBar.styleDefault();
            _this._splashScreen.hide();
            _this._oneSignal.startInit('a532915c-5d37-4df8-a4ed-1e8e621c72f4', '648119072575');
            _this._oneSignal.inFocusDisplaying(_this._oneSignal.OSInFocusDisplayOption.InAppAlert);
            _this._oneSignal.handleNotificationReceived().subscribe(function () {
                // do something when notification is received
            });
            _this._oneSignal.handleNotificationOpened().subscribe(function () {
                // do something when a notification is opened
            });
            _this._oneSignal.endInit();
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/giogio/Documents/woo-ionic-mobile/src/app/app.html"*/'\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/giogio/Documents/woo-ionic-mobile/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[355]);
//# sourceMappingURL=main.js.map