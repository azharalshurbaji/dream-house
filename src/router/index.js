// Composables
import { getAuth , onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "Products" */ '@/views/ProductsView.vue'),
      },
      {
        path: '/product-detailes/:id',
        name: 'productDetailes',
        component: () => import(/* webpackChunkName: "ProductDetailes" */ '@/views/ProductDetailesView.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/CartView.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "SignUp" */ '@/views/SignUpView.vue'),
      },
      {
        path: '/user-profile',
        name: 'UserProfile',
        component: () => import(/* webpackChunkName: "UserProfile" */ '@/views/UserProfileView.vue'),
        props: (route) => ({ userData: route.params.userData })
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
      },
    ],
  },
    // & SideBar Section
  {
    path: '/',
    component: () => import('@/layouts/sideBar/SideBar.vue'),
    children: [
      {
        path: '/data-table',
        name: 'DataTable',
        component: () => import(/* webpackChunkName: "DataTable" */ '@/views/DataTableView.vue'),
        meta: {
          requiresAuth: true,
        },
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/dream-house' : '/'),
  routes,

  scrollBehavior(to ,from ,savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    if(to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // always Scroll to Top
    return { top: 0 } 
  }
})

const getCurrentUser = () => {
  return new Promise( (resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

    //~ Guard To Redirect
router.beforeEach(async(to ,from ,next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    // if(getAuth().currentUser)
      if(await getCurrentUser())
      {
      next();
    } else {
      alert("you dont have access!");
      next("/login")
    }
  }
  else {
    next()
  }

  // const authenticatedUser = firebase.auth().currentUser;
  // const requiresAuth = to.matched.some( record => record.meta.requiresAuth);

  // if(requiresAuth && ! authenticatedUser) next('login')
  // else next()
})

// router.beforeEach( function (to ,from ,next) {
//   // console.log(to.meta.guard)

//   const store = user() 
//   // console.log(store);

//   if(to.meta.guard === 'auth' && !store.isLoggedIn) {
//     next('/login' , '/cart' ,'/oneproduct')
//   } 
//   else if(to.meta.guard === 'public' && store.isLoggedIn) {
//     next('/profile')
//   }
//   else {
//     next()
//   }
// })

export default router
