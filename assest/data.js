
var structs = {

    initialTip:'',
    initialCode:'',
    counter:0,
   data:{
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
                code:"Vue({<br> el:'#app',<br> data:{}<br>})"
            },
            {
                tip:'VueJs uses an MVVM pattern where:',
                code:'data= Model <br> template=view <br> Vue instance=ViewModel'
            },
            {
                tip:'To create a component with Vue you do',
                code:"Vue.component('component-name',{})"
            },
            {
                tip:'Looping through a list or an  array you use the v-for directive',
                code:" v-for='item in items' v-bind:key='item' "
            },
            {
                tip:'To interpolate your data in you view/template use <b> {{}}</b>',
                code:'{{data}}'
            },
            {
                tip:'Running flow control in your template in vue is very easy ethier you use <b>v-if</b> which remove the element from the DOM or <b>v-seen</b> set the <b>display</b> to <b>none</b>',
                code:' E.g <br>  v-if="true">Now you can see me <br>  v-seen="false">Am hiding now'
            },
            {
                tip:'Creating a plugin in Vue is very easy all you need to do create an object that have an install method and pass vue as a parameter and also a simple custom directive',
                code:"//using ES6 <br> const MathPlugin={<br> install(Vue){<br> Vue.directive('sqrt',(el,binding)=>{<br>el.innerHTML = Math.sqrt(binding.value)<br>})}}<br> //to use it you have to install it <br> Vue.use(MathPlugIn)"
            },
            {
                tip:'Vue is almost similar to React with the way it handle handle comopnent data which is <b>one way</b> from the parent to the child',
                code:"Vue.component({<br> props:['properName']<br>})"
            },
            {
                tip:"Pass data from the child to the parent component we use an event handler which take two parameter <b>event</b> and <b>value</b> the  show below",
                code:"this.$emit('event', value); //which is pass down to the parent"
            }

        ],
        Tip:{tip: this.initialTip ,code: this.initialCode},
        twitter:"@larry_sigo",
        tipsLeft:5
    },
    getRandomNumber:function (){
                 var tipsCount =this.data.tips.length;
                 var randomNumber = Math.floor((Math.random()*(tipsCount-1))+ 1);
                 console.log(randomNumber)
                 return randomNumber 
                 
             },
    getRandomTip:function(){
                var rand = this.getRandomNumber()
                var genTip = this.data.tips[rand]
                console.log(genTip)
                 this.data.Tip.tip = genTip.tip;
                 this.data.Tip.code = genTip.code;
                return;
            } ,
    btnClick:function (){
        
            if (this.counter === 5){
                this.data.tipsLeft = 0;
                 document.querySelector('.tip-button').classList.add('disabled')
            }else{
                 this.counter++
                this.data.tipsLeft--;
                this.getRandomTip()
                console.log(this.counter);
            }

    }
    
  
}


structs.getRandomTip();  