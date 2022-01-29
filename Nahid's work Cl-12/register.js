$(function(){
    var $nahid = $("#registration");
    if($nahid.length){
        $nahid.validate({
            rules:{
                username:{
                    required:true
                },
                address:{
                    required:true
                },
                email:{
                    required:true
                },
                password:{
                    required:true
                }
            },
            messages:{
                username:{
                    required:'Username is mandatory!'
                },
                address:{
                    required:'Address is mandatory!'
                },
                email:{
                    required:'Email is mandatory!'
                },
                password:{
                    required:'Password is mandatory!'
                }
            }
        })
    }
})