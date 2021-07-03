import { createStore } from 'vuex';

const getProductById = (state, prodId) => {
  const index = state.cart.items.findIndex(
    cartItem => cartItem.productId === prodId
  );

  const item = index === -1 ? null : state.cart.items[index];

  return { index, item };
};

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99
        },
        {
          id: 'p2',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99
        }
      ],
      cart: { items: [], total: 0, qty: 0 }
    };
  },
  //aka events, call with 'dispatch'
  actions: {
    login(context) {
      context.commit('setLoggedIn', true);
    },

    logout(context) {
      context.commit('setLoggedIn', false);
    },

    addProductToCart(context, productData) {
      const { index } = getProductById(context.state, productData.id);

      if (index >= 0) {
        context.commit('increaseItemQuantity', index);
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        };
        context.commit('addItemToCart', newItem);
      }
      context.commit('incrementCartQuantity');
      context.commit('increaseCartTotalPrice', productData.price);
    },

    removeProductFromCart(context, prodId) {
      const { index, item } = getProductById(context.state, prodId);
      context.commit('removeItemFromCart', index);
      context.commit('decreaseCartQuantity', item.qty);
      context.commit('decreaseCartTotalPrice', item.price * item.qty);
    }
  },
  //aka setters, call with 'commit'
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    increaseItemQuantity(state, itemIndex) {
      state.cart.items[itemIndex].qty++;
    },
    addItemToCart(state, newItem) {
      state.cart.items.push(newItem);
    },
    removeItemFromCart(state, itemIndex) {
      state.cart.items.splice(itemIndex, 1);
    },
    incrementCartQuantity(state) {
      state.cart.qty++;
    },
    decreaseCartQuantity(state, qty) {
      state.cart.qty -= qty;
    },
    increaseCartTotalPrice(state, price) {
      state.cart.total += price;
    },
    decreaseCartTotalPrice(state, price) {
      state.cart.total -= price;
    }
  },
  getters: {
    products(state) {
      return state.products;
    },
    cart(state) {
      return state.cart;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
