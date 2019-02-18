import Vue from 'vue';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue'; 

//Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app');
new Vue({
  //render: (h) => h(App),
  components:{'helloworld':HelloWorld},
  el:'#app'
})
//.$mount('#app-vue');
