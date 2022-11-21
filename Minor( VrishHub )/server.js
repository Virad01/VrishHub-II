const express= require("express");
const app= express();
app.get("/",function(request,response){
    console.log(request);
    response.sendFile(path.resolve(__dirname,'C:\Users\virad\Desktop\Minor data\Vrishub(git)\VrishHub\Minor( VrishHub )\Login Page\firebase.json'));
});

app.listen(5500,function()
{
    console.log("server started on the port 3000")


});