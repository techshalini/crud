const cds= require('@sap/cds');
const {businesspartner} = cds.entities('shalu');
const mysrv =function(srv){
    // for reading only
    srv.on("READ","readbusinesspartner", async(req,res)=>{
        var result = [];
        result = await cds.tx(req).run(SELECT.from(businesspartner));
        return result;
    });

//  for updating 
  srv.on("UPDATE","updatebusinesspartner", async(req,res)=>{
     
    let returnData= await cds.transaction(req).run([
        UPDATE(businesspartner).set({
             Email_Address:req.data.Email_Address,
             Company_Name:req.data.Company_Name,
             BP_Role:req.data.BP_Role,
             Phone_Number:req.data.Phone_Number,
             Fax_Number:req.data.Fax_Number,
             Node_Key:req.data.Node_Key


        }).where({Node_Key: req.data.ID}),
        
    ]).then((resolve,reject)=>{
        if(typeof(resolve) !== undefined){
            return req.data;
        }else{
            req.error('error occured');
        }
    }).catch(err => {
        req.error('error',err);
    });
    return returnData;
  });


//   srv.on("UPDATE","businesspartnerall", async(req,res)=>{
     
//     let returnData= await cds.transaction(req).run([
//         UPDATE(businesspartner).set({
//              Email_Address:req.data.Email_Address,
//              Company_Name:req.data.Company_Name

//         }).where({Node_Key: req.data.ID}),
        
//     ]).then((resolve,reject)=>{
//         if(typeof(resolve) !== undefined){
//             return req.data;
//         }else{
//             req.error('error occured');
//         }
//     }).catch(err => {
//         req.error('error',err);
//     });
//     return returnData;
//   });

//   for deleting
    srv.on("DELETE","deletebusinesspartner", async(req,res)=>{
        let returnData = await cds.transaction(req).run([
            DELETE.from(businesspartner).where(req.data)
        ]).then((resolve,reject)=>{
            if(typeof(resolve) !==undefined){
                return req.data;
            }
            else{
                req.error('error occured');
            }
        }).catch(err =>{
            req.error('error',err)
        });
        return returnData;
    });

    // for creating
    srv.on("CREATE","insertbusinesspartner",async(req,res)=>{
        let returnData = await cds.transaction(req).run([
           INSERT.into(businesspartner).entries([req.data]) 
        ]).then((resolve,reject)=>{
            if(typeof(resolve) !== undefined){
                return req.data;
            }
            else{
                req.error('error aagya');
            }

        }).catch(err =>{
            req.error('error',err)
        });
        return returnData;
    })




        
}




module.exports= mysrv;