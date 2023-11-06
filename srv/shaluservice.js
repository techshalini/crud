module.exports = cds.service.impl(async function(){
    const {
        businesspartner
    } = this.entities;

    this.after('UPDATE','businesspartner',(req)=>{
        req.error('error');
        if(req.Phone_Number.length !=10 ){
            console.log("hello error hai dost");
        }else{
            console.log("success")
        }
     
        
    });
})