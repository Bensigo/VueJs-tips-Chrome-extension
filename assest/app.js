
new Vue({
    el:"#app",
    data:structs.data,
    methods:{
          handleTipBtn:function(){
                console.log('btn click')
                structs.btnClick()
                
            }
        
    }   
    
})