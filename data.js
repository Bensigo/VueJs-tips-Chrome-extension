var Data = {

    title:'VueJS Tips',
    tips:[
        {
            tip:'Starting a VueJs app with the Vue-cli',
             code:'vue init  webpack projectName'
         },
         {
             tip:'Starting a PWA web app with vue-cli',
             code:'vue init  pwa projectName'

         },
         {
             tip:'To make an instance of Vue when creating your app with a data model',
             code:"Vue({\n\t el:'#app',\n\t data:{}})"
         },
         {
             tip:'VueJs uses an MVVM pattern where:',
             code:'data= Model \n template=view \n Vue instance=ViewModel'
         },
         {
             tip:'To create a component with Vue you do',
             code:"Vue.component('component-name',{})"
         },
         {
             tip:'Looping through a list or an  array you use the for directive',
             code:"<li v-for='item in items' v-bind:key='item'>{{item}}</li>"
         },
         {
             tip:'To interpolate your data in you view/template use <b> {{}}</b>',
             code:'<h1><{{data}}/h1>'
         },
         {
             tip:'Running flow control in your template in vue is very easy ethier you use <b>v-if</b> which remove the element from the DOM or <b>v-seen</b> set the <b>display</b> to <b>none</b>',
             code:' E.g\n <p v-if="true">Now you can see me</p>\n <p> v-seen="false">Am hiding now</p>'
         },
         {
             tip:'Creating a plugin in Vue is very easy all you need to do create an object that have an install method and pass vue as a parameter and also a simple custom directive',
             code:"using ES6 //\n const MathPlugin={\n install(Vue){\n Vue.directive('sqrt',(el,binding)=>{\n\t el.innerHTML = Math.sqrt(binding.value)\n})}}\n //to use it you have to install it \n\t Vue.use(MathPlugIn)"
         },
         {
             tip:'Vue is almost similar to React with the way it handle handle comopnent data which is <b>one way</b> from the parent to the child',
             code:"Vue.component({\n props:['properName']\n})"
         },
         {
            tip:"Pass data from the child to the parent component we use an event handler which take two parameter <b>event</b> and <b>value</b> the  show below",
            code:"this.$emit('event', value); //which is passed down to the parrend"
         }

    ],
    twitter:"@larry_sigo"
  
}
    


