
let elementSchema;
let dataSchema = {}


const loadSummary=()=>{
    let issueSchema = {}
                issueSchema["display"]={}
                issueSchema["power"]={}
                issueSchema["network"]={}
                issueSchema["speaker"]={}
                issueSchema["software"]={}
                issueSchema["physicalDamage"]={}
    let accessoriesSchema ={}
    let standByUnitSchema ={}





        let textInputs = document.querySelectorAll("input[type=text")
        let allSelect = document.querySelectorAll("select")

            let display = document.querySelectorAll(".display")
            let power = document.querySelectorAll(".power")
            let network = document.querySelectorAll(".network")
            let speaker = document.querySelectorAll(".speaker")
            let software = document.querySelectorAll(".software")
            let physicalDamage = document.querySelectorAll(".physicalDamage")
            let lmm = document.querySelector("#lipaMdogoMdogo")
            let warranty = document.querySelector("#warranty")
            let repairHistory = document.querySelector("#repairHistory")
            let battery = document.querySelector("#battery")
            let charger= document.querySelector("#charger")
            let standByUnit= document.querySelector("#standByUnit")
            let standByUnitBrand= document.querySelector("#standByUnitBrand")
            let standByUnitModel= document.querySelector("#standByUnitModel")
            let standByUnitSerial= document.querySelector("#standByUnitSerial")

            standByUnitSchema[standByUnit.name]=standByUnit.checked
            standByUnitSchema[standByUnitBrand.name]=standByUnitBrand.value
            standByUnitSchema[standByUnitModel.name]=standByUnitModel.value
            standByUnitSchema[standByUnitSerial.name]=standByUnitSerial.value

            accessoriesSchema[charger.name]=charger.checked
            accessoriesSchema[battery.name]=battery.checked
            dataSchema["accessories"] = accessoriesSchema
            dataSchema[lmm.name]=lmm.checked
            dataSchema[warranty.name]=warranty.checked
            dataSchema[repairHistory.name]=repairHistory.checked
            textInputs.forEach(data=>dataSchema[data.name]=data.value)
            allSelect.forEach(data=>dataSchema[data.name]=data.value)

            display.forEach(data=>issueSchema["display"][data.name] = data.checked)
            power.forEach(data=>issueSchema["power"][data.name]= data.checked)
            network.forEach(data=>issueSchema["network"][data.name]= data.checked)
            speaker.forEach(data=>issueSchema["speaker"][data.name]= data.checked)
            software.forEach(data=>issueSchema["software"][data.name]= data.checked)
            physicalDamage.forEach(data=>issueSchema["physicalDamage"][data.name]= data.checked)

            dataSchema["Issues"]=issueSchema
            dataSchema["standByUnit"]= standByUnitSchema

            elementSchema = dataSchema
            main_page[formnumber].innerHTML=new Summary(dataSchema).summaryDetails
}
        

navigation.children[2].addEventListener('click',(e)=>{

    
        navigation.children[0].style.display="none"
        navigation.children[1].style.display="none"
        navigation.children[2].style.display="none"
        console.log(dataSchema)
        
            fetch("http://localhost:5000/retail/requests/",
                    {
                        headers: {"Content-type": "application/json"},
                        body: JSON.stringify(dataSchema),
                        method: "POST"
                    }).then(response=>response.json()).then(data=>console.log(data));

 
   
    
    
    
    
    
    
    
    
    
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

  




    
})