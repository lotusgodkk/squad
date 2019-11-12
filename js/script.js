(function () {
    /* A sample JSON structure of products */
    const productList = [{
        "title": "Brown eggs",
        "type": "dairy",
        "description": "Raw organic brown eggs in a basket",
        "sku": 0,
        "height": 600,
        "width": 400,
        "price": 28.1,
        "rating": 4
    }, {
        "title": "Sweet fresh stawberry",
        "type": "fruit",
        "description": "Sweet fresh stawberry on the wooden table",
        "sku": 1,
        "height": 450,
        "width": 299,
        "price": 29.45,
        "rating": 4
    }, {
        "title": "Asparagus",
        "type": "vegetable",
        "description": "Asparagus with ham on the wooden table",
        "sku": 2,
        "height": 450,
        "width": 299,
        "price": 18.95,
        "rating": 3
    }, {
        "title": "Green smoothie",
        "type": "dairy",
        "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
        "sku": 3,
        "height": 600,
        "width": 399,
        "price": 17.68,
        "rating": 4
    }, {
        "title": "Raw legums",
        "type": "vegetable",
        "description": "Raw legums on the wooden table",
        "sku": 4,
        "height": 450,
        "width": 299,
        "price": 17.11,
        "rating": 2
    }, {
        "title": "Baking cake",
        "type": "dairy",
        "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
        "sku": 5,
        "height": 450,
        "width": 675,
        "price": 11.14,
        "rating": 4
    }, {
        "title": "Pesto with basil",
        "type": "vegetable",
        "description": "Italian traditional pesto with basil, chesse and oil",
        "sku": 6,
        "height": 450,
        "width": 299,
        "price": 18.19,
        "rating": 2
    }, {
        "title": "Hazelnut in black ceramic bowl",
        "type": "vegetable",
        "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
        "sku": 7,
        "height": 450,
        "width": 301,
        "price": 27.35,
        "rating": 0
    }, {
        "title": "Fresh stawberry",
        "type": "fruit",
        "description": "Sweet fresh stawberry on the wooden table",
        "sku": 8,
        "height": 600,
        "width": 399,
        "price": 28.59,
        "rating": 4
    }, {
        "title": "Lemon and salt",
        "type": "fruit",
        "description": "Rosemary, lemon and salt on the table",
        "sku": 9,
        "height": 450,
        "width": 299,
        "price": 15.79,
        "rating": 5
    }, {
        "title": "Homemade bread",
        "type": "bakery",
        "description": "Homemade bread",
        "sku": 10,
        "height": 450,
        "width": 301,
        "price": 17.48,
        "rating": 3
    }, {
        "title": "Legums",
        "type": "vegetable",
        "description": "Cooked legums on the wooden table",
        "sku": 11,
        "height": 600,
        "width": 399,
        "price": 14.77,
        "rating": 0
    }, {
        "title": "Fresh tomato",
        "type": "vegetable",
        "description": "Fresh tomato juice with basil",
        "sku": 12,
        "height": 600,
        "width": 903,
        "price": 16.3,
        "rating": 2
    }, {
        "title": "Healthy breakfast",
        "type": "fruit",
        "description": "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
        "sku": 13,
        "height": 450,
        "width": 350,
        "price": 13.02,
        "rating": 2
    }, {
        "title": "Green beans",
        "type": "vegetable",
        "description": "Raw organic green beans ready to eat",
        "sku": 14,
        "height": 450,
        "width": 300,
        "price": 28.79,
        "rating": 1
    }, {
        "title": "Baked stuffed portabello mushrooms",
        "type": "bakery",
        "description": "Homemade baked stuffed portabello mushrooms with spinach and cheese",
        "sku": 15,
        "height": 600,
        "width": 400,
        "price": 20.31,
        "rating": 1
    }, {
        "title": "Strawberry jelly",
        "type": "fruit",
        "description": "Homemade organic strawberry jelly in a jar",
        "sku": 16,
        "height": 400,
        "width": 600,
        "price": 14.18,
        "rating": 1
    }, {
        "title": "Pears juice",
        "type": "fruit",
        "description": "Fresh pears juice on the wooden table",
        "sku": 17,
        "height": 600,
        "width": 398,
        "price": 19.49,
        "rating": 4
    }, {
        "title": "Fresh pears",
        "type": "fruit",
        "description": "Sweet fresh pears on the wooden table",
        "sku": 18,
        "height": 600,
        "width": 398,
        "price": 15.12,
        "rating": 5
    }, {
        "title": "Caprese salad",
        "type": "vegetable",
        "description": "Homemade healthy caprese salad with tomato mozzarella and basil",
        "sku": 19,
        "height": 400,
        "width": 600,
        "price": 16.76,
        "rating": 5
    }, {
        "title": "Oranges",
        "type": "fruit",
        "description": "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
        "sku": 20,
        "height": 450,
        "width": 274,
        "price": 21.48,
        "rating": 4
    }, {
        "title": "Vegan food",
        "type": "vegetable",
        "description": "Concept of vegan food",
        "sku": 21,
        "height": 450,
        "width": 299,
        "price": 29.66,
        "rating": 4
    }, {
        "title": "Breakfast with muesli",
        "type": "dairy",
        "description": "Concept of healthy breakfast with muesli",
        "sku": 22,
        "height": 450,
        "width": 299,
        "price": 22.7,
        "rating": 2
    }, {
        "title": "Honey",
        "type": "bakery",
        "description": "Honey and honeycell on the table",
        "sku": 23,
        "height": 450,
        "width": 299,
        "price": 17.01,
        "rating": 2
    }, {
        "title": "Breakfast with cottage",
        "type": "fruit",
        "description": "Healthy breakfast with cottage cheese and strawberry",
        "sku": 24,
        "height": 600,
        "width": 398,
        "price": 14.05,
        "rating": 1
    }, {
        "title": "Strawberry smoothie",
        "type": "fruit",
        "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
        "sku": 25,
        "height": 600,
        "width": 400,
        "price": 28.86,
        "rating": 2
    }, {
        "title": "Strawberry and mint",
        "type": "fruit",
        "description": "Homemade muesli with strawberry and mint",
        "sku": 26,
        "height": 450,
        "width": 299,
        "price": 26.21,
        "rating": 4
    }, {
        "title": "Ricotta",
        "type": "dairy",
        "description": "Ricotta with berry and mint",
        "sku": 27,
        "height": 600,
        "width": 398,
        "price": 27.81,
        "rating": 5
    }, {
        "title": "Cuban sandwiche",
        "type": "bakery",
        "description": "Homemade traditional cuban sandwiches with ham pork and cheese",
        "sku": 28,
        "height": 450,
        "width": 300,
        "price": 18.5,
        "rating": 4
    }, {
        "title": "Granola",
        "type": "dairy",
        "description": "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
        "sku": 29,
        "height": 450,
        "width": 300,
        "price": 29.97,
        "rating": 3
    }, {
        "title": "Smoothie with chia seeds",
        "type": "fruit",
        "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
        "sku": 30,
        "height": 600,
        "width": 900,
        "price": 25.26,
        "rating": 5
    }, {
        "title": "Yogurt",
        "type": "dairy",
        "description": "Homemade yogurt with raspberry and mint",
        "sku": 31,
        "height": 450,
        "width": 299,
        "price": 27.61,
        "rating": 4
    }, {
        "title": "Sandwich with salad",
        "type": "vegetable",
        "description": "Vegan sandwich with salad, tomato and radish",
        "sku": 32,
        "height": 600,
        "width": 398,
        "price": 22.48,
        "rating": 5
    }, {
        "title": "Cherry",
        "type": "fruit",
        "description": "Cherry with sugar on old table",
        "sku": 33,
        "height": 600,
        "width": 400,
        "price": 14.35,
        "rating": 5
    }, {
        "title": "Raw asparagus",
        "type": "vegetable",
        "description": "Raw fresh asparagus salad with cheese and dressing",
        "sku": 34,
        "height": 600,
        "width": 400,
        "price": 22.97,
        "rating": 4
    }, {
        "title": "Corn",
        "type": "vegetable",
        "description": "Grilled corn on the cob with salt and butter",
        "sku": 35,
        "height": 450,
        "width": 300,
        "price": 13.55,
        "rating": 2
    }, {
        "title": "Vegan",
        "type": "vegan",
        "description": "Concept of healthy vegan eating",
        "sku": 36,
        "height": 600,
        "width": 398,
        "price": 28.96,
        "rating": 5
    }, {
        "title": "Fresh blueberries",
        "type": "fruit",
        "description": "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
        "sku": 37,
        "height": 450,
        "width": 321,
        "price": 21.01,
        "rating": 4
    }, {
        "title": "Smashed avocado",
        "type": "fruit",
        "description": "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
        "sku": 38,
        "height": 450,
        "width": 450,
        "price": 25.88,
        "rating": 0
    }, {
        "title": "Italian ciabatta",
        "type": "bakery",
        "description": "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
        "sku": 39,
        "height": 450,
        "width": 565,
        "price": 15.18,
        "rating": 1
    }, {
        "title": "Rustic breakfast",
        "type": "dairy",
        "description": "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
        "sku": 40,
        "height": 450,
        "width": 307,
        "price": 21.32,
        "rating": 0
    }, {
        "title": "Sliced lemons",
        "type": "fruit",
        "description": "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.",
        "sku": 41,
        "height": 600,
        "width": 900,
        "price": 27.14,
        "rating": 2
    }, {
        "title": "Plums",
        "type": "fruit",
        "description": "Yellow and red sweet plums",
        "sku": 42,
        "height": 450,
        "width": 299,
        "price": 19.18,
        "rating": 1
    }, {
        "title": "French fries",
        "type": "bakery",
        "description": "Homemade oven baked french fries with ketchup",
        "sku": 43,
        "height": 600,
        "width": 400,
        "price": 18.32,
        "rating": 3
    }, {
        "title": "Strawberries",
        "type": "fruit",
        "description": "Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000",
        "sku": 44,
        "height": 450,
        "width": 352,
        "price": 15.13,
        "rating": 3
    }, {
        "title": "Ground beef meat burger",
        "type": "meat",
        "description": "Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background",
        "sku": 45,
        "height": 450,
        "width": 675,
        "price": 11.73,
        "rating": 5
    }, {
        "title": "Tomatoes",
        "type": "fruit",
        "description": "Organic tomatoes made with love",
        "sku": 46,
        "height": 450,
        "width": 675,
        "price": 26.03,
        "rating": 4
    }, {
        "title": "Basil",
        "type": "vegetable",
        "description": "Concept of vegan food with basil",
        "sku": 47,
        "height": 450,
        "width": 678,
        "price": 15.19,
        "rating": 4
    }, {
        "title": "Fruits bouquet",
        "type": "fruit",
        "description": "Abstract citrus fruits bouquet on blue background",
        "sku": 48,
        "height": 600,
        "width": 401,
        "price": 18.18,
        "rating": 1
    }, {
        "title": "Peaches on branch",
        "type": "fruit",
        "description": "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
        "sku": 49,
        "height": 600,
        "width": 400,
        "price": 25.62,
        "rating": 3
    }];

    /* This renders the products by iterating on the above productList */
    function renderProducts() {
        let html = productList.map(i =>
            `<section class="card">
                  <a class="product-img" data-sku="${i.sku}"><img class="product-img" data-sku="${i.sku}" title="${i.title}" alt="${i.description}" src="static/${Math.floor(Math.random() * 9)}.png" /></a>
                  <h3 class="product-description">${i.title}</h3>
                  <div class="product-price">$ ${i.price}</div>
                  <a class="product-cta" data-sku="${i.sku}">Add to Cart</a>
              </section>`).join("");
        document.getElementById("content-details").innerHTML = html;
        eventHandler();
    }

    /* A common event handler for all the Events */
    function eventHandler() {
        document.addEventListener('click', function (e) {
            if (e.target && e.target.classList.contains("product-cta")) {
                e.target.innerText = "Adding..."
                let sku = +e.target.getAttribute("data-sku");

                /* Code below is just for visual indication for adding products*/
                setTimeout(function () {
                    cart.addItems(sku);
                    e.target.innerText = "Add to Cart";
                }, 500);
            } else if (e.target && e.target.classList.contains("product-img")) {
                let sku = +e.target.getAttribute("data-sku");
                modal.show({
                    body: renderProductModal(sku)
                });
            } else if (e.target && e.target.classList.contains("view-cart")) {
                modal.show({
                    body: renderCart(),
                    beforeShow: function () {
                        document.getElementById("modal").classList.add("right")
                    }
                });
                return false;
            } else if (e.target && e.target.classList.contains("remove-product")) {
                let sku = e.target.getAttribute("data-sku");
                cart.removeItems(sku);
                document.getElementsByClassName("view-cart")[0].click();
            }
        });
    }

    // This renders the content of Product Modal
    function renderProductModal(sku) {
        let product = getItemByProperty(productList, "sku", sku);
        return ` <div class="product">
          <div class="product-media">
              <img src="static/0.png" />
          </div>
          <div class="product-details">
              <div class="product-head"><i class="fa fa-star text-red"></i><i class="fa fa-star text-red"></i><i class="fa fa-star text-red"></i>
                  <i class="fa fa-star text-red"></i>
                  <i class="fa fa-star-o"></i>
                  <div><small class="text-gray">${product.rating} reviews</small></div>
              </div>
              <div class="product-body">
                  <h1 class="product-title">${product.title}</h1>
                  <div class="product-stats">
                      <span class="product-price">$ ${product.price}</span>
                      <span class="product-quantity text-gray">${product.price * 10}ml</span>
                  </div>
                  <button class="button product-cta" data-sku="${product.sku}">Add To Cart</button>
                  <p class="text-gray product-description">${product.description}</p>
              </div>
          </div>
      </div>
      <div class="more"><a>More Details</a></div>`;
    }
    // This renders the content of the cart sidebar/flyout
    function renderCart() {
        let items = cart.getItems();
        let total = items.length ? items.reduce((a, {
            price
        }) => a + price, 0) : 0;
        return ` <div class="cart">
          <div class="cart-header">
              <h2> <i class="fa fa-shopping-cart"></i> My Cart</h2>
          </div>
          <div class="cart-body">
          ${items.length ? items.map(i => `
              <div class="cart-product">
                  <img src="static/0.png" />
                  <h4>${i.title}</h4>
                  <span>$ ${i.price}</span>
                  <a data-sku="${i.sku}" class="remove-product">X</a>
              </div>`
        ).join("") : "<div class='placeholder'>Your cart is empty</div>"}
          </div>
          <div class="cart-footer">
              <div class="cart-summary"><div>Total:</div> <span id="total">$ ${total}</span></div>
              <button class="checkout" ${items.length ? "" : "disabled"} id="checkout">Checkout</button>
          </div>
          </div>`;
    }
    // Cart handler
    function myCart(options) {
        let items = [];
        return function () {
            let scope = {};
            scope.addItems = function (sku) {
                let item = getItemByProperty(productList, "sku", sku);
                if (item) {
                    items.push(item);
                    this.updateCounter();
                } else {
                    alert("Something went wrong. Please try again in a while");
                    
                }
            }
            scope.removeItems = function (sku) {
                let index = getItemIndex(items, "sku", sku);
                console.log(index);
                if (index>-1) {
                    items.splice(index, 1);
                    this.updateCounter();
                } else {
                    alert("Something went wrong. Please try again in a while");
                }
            }
            scope.getItems = function () {
                return items;
            }
            scope.updateCounter = function () {
                let selector = document.getElementById(options.counterElement);
                if (selector) {
                    selector.innerText = this.getItems().length;
                } else {
                    alert("Something went wrong. Please try again in a while");
                    
                }
            }
            return scope;
        }
    }
    // utility function
    function getItemByProperty(obj, prop, val) {
        return obj.filter(item => {
            return item[prop] === +val;
        })[0]
    }
    // utility function
    function getItemIndex(obj, prop, val) {
        return obj.indexOf(getItemByProperty(obj, prop, val));
    }
    // Modal Handler
    function modalHandler() {
        //DOM Selectors
        let $modal = document.getElementById("modal");
        let $modalBody = document.getElementById("modal-body");
        let $modalClose = document.getElementById("modal-close");

        function hideModal() {
            $modalBody.innerHTML = null;
            $modal.classList.add("hide");
        }
        $modalClose.addEventListener("click", function () {
            hideModal();
        });
        return function () {
            let _modal = {};
            _modal.show = function (options) {
                $modal.classList.remove("right");
                if (options.beforeShow) {
                    options.beforeShow();
                }
                $modalBody.innerHTML = options.body;
                $modal.classList.remove("hide");
            }
            _modal.hide = function () {
                hideModal();
            }
            return _modal;
        }
    }

    // Initialize the application with necessary function execution
    renderProducts();
    let modal = modalHandler()();
    let cart = myCart({
        counterElement: "counter"
    })();
})();
