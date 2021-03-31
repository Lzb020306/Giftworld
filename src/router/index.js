import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import Ranking from '@/page/Ranking'
import chart from '@/page/WorldChartShow'
import bonus from '@/page/bonus'
import envelopes from '@/page/envelopes'
import Warehouse from '@/page/Warehouse'
import Illustrated from '@/page/Illustrated'
import my from '@/page/my'
import mystuff from '@/page/mystuff'
import verification from '@/page/verification'
import land from '@/page/land'
import proportion from '@/page/proportion'
import gift from '@/page/gift'
import SalesOrder from '@/page/SalesOrder'
import sell from '@/page/sell'
import purchase from '@/page/purchase'
import PurchaseOrder from '@/page/PurchaseOrder'
import OrderDetails from '@/page/OrderDetails'
import history from '@/page/history'
import income from '@/page/income'
import record from '@/page/record'
import invitation from '@/page/invitation'
import wallet from '@/page/wallet'
import personalinformation from '@/page/personalinformation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/Ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart
    },
    {
      path: '/bonus',
      name: 'bonus',
      component: bonus
    },
    {
      path: '/envelopes',
      name: 'envelopes',
      component: envelopes
    }, {
      path: '/Warehouse',
      name: 'Warehouse',
      component: Warehouse
    }, {
      path: '/Illustrated',
      name: 'Illustrated',
      component: Illustrated
    }, {
      path: '/my',
      name: 'my',
      component: my
    }, {
      path: '/mystuff',
      name: 'mystuff',
      component: mystuff
    }, {
      path: '/verification',
      name: 'verification',
      component: verification
    }, {
      path: '/land',
      name: 'land',
      component: land
    },
    {
      path: '/proportion',
      name: 'proportion',
      component: proportion
    },
    {
      path: '/gift',
      name: 'gift',
      component: gift
    }, {
      path: '/SalesOrder',
      name: 'SalesOrder',
      component: SalesOrder
    }, {
      path: '/sell',
      name: 'sell',
      component: sell
    }, {
      path: '/purchase',
      name: 'purchase',
      component: purchase
    }, {
      path: '/PurchaseOrder',
      name: 'PurchaseOrder',
      component: PurchaseOrder
    }, {
      path: '/OrderDetails',
      name: 'OrderDetails',
      component: OrderDetails
    }, {
      path: '/history',
      name: 'history',
      component: history
    }
    , {
      path: '/income',
      name: 'income',
      component: income
    }
    , {
      path: '/record',
      name: 'record',
      component: record
    }
    , {
      path: '/invitation',
      name: 'invitation',
      component: invitation
    }
    , {
      path: '/wallet',
      name: 'wallet',
      component: wallet
    }
    , {
      path: '/personalinformation',
      name: 'personalinformation',
      component: personalinformation
    }
  ]
})

