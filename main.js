$("button").click((e)=>{
   
    // {
   
    //     Name: String,
    //     phone: String,
    //     email: String,
    //     national_id: String,
    //     model: String,
    //     imei: String,
    //     serial: String,
    //     receipt: String,
    //     warranty: Boolean,
    //     lipaMdogoMdogo:Boolean,
    //     accessories:accessoriesSchema,
    //     physical_condition: String,
    //     Issues:issuesSchema,
    //     retail_centre: String,
    //     repair_centre: String,
    //     waybill_to_repair: String,
    //     waybill_to_retail: String,
    //     status:[statusSchema]    
            
    //  }

  let dataSchema = {}
  let issueSchema = {}
        issueSchema["display"]={}
        issueSchema["power"]={}
        issueSchema["network"]={}
        issueSchema["speaker"]={}
        issueSchema["software"]={}
        issueSchema["physicalDamage"]={}




   let textInputs = document.querySelectorAll("input[type=text")


    let display = document.querySelectorAll(".display")
    let power = document.querySelectorAll(".power")
    let network = document.querySelectorAll(".network")
    let speaker = document.querySelectorAll(".speaker")
    let software = document.querySelectorAll(".software")
    let physicalDamage = document.querySelectorAll(".physicalDamage")
    let lmm = document.querySelector("#lipaMdogoMdogo")
    dataSchema[lmm.name]=lmm.value
    textInputs.forEach(data=>dataSchema[data.name]=data.value)

    display.forEach(data=>issueSchema["display"][data.name] = data.checked)
    power.forEach(data=>issueSchema["power"][data.name]= data.checked)
    network.forEach(data=>issueSchema["network"][data.name]= data.checked)
    speaker.forEach(data=>issueSchema["speaker"][data.name]= data.checked)
    software.forEach(data=>issueSchema["software"][data.name]= data.checked)
    physicalDamage.forEach(data=>issueSchema["physicalDamage"][data.name]= data.checked)

    dataSchema["Issues"]=issueSchema

    console.log(dataSchema)
    fetch("http://localhost:5000/retail/requests/",
            {
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(dataSchema),
                method: "POST"
            }).then(response=>response.json()).then(data=>console.log(data));




    
})