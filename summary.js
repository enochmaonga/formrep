class Summary{
    constructor(data){
        this.data = data;
    }


    get customerDetails() {
   
                return     `<div>
                            <h5>Customer Details</h5>
                                <dl>
                                    <dt>Name </dt>
                                    <dd>${this.data.Name}</dd>
                                    <dt>Phone </dt>
                                    <dd>${this.data.phone}</dd>
                                    <dt>Email</dt>
                                    <dd>${this.data.email}</dd>
                                    <dt>National Identity</dt>
                                    <dd>${this.data.national_id}</dd>
                                    <dt>Alternative phone</dt>
                                    <dd>${this.data["customer-altPhone"]}</dd>
                                </dl>
                            </div>`
        }

    get deviceDetails(){
                return `<div>
                        <h5>Device Details</h5>
                            <dl>
                                <dt>Brand</dt>
                                <dd>${this.data.brand}</dd>
                                <dt>Model</dt>
                                <dd>${this.data.model}</dd>
                                <dt>Serial</dt>
                                <dd>${this.data.serial}</dd>
                                <dt>Receipt</dt>
                                <dd>${this.data.receipt}</dd>
                                <dt>Accessories</dt>
                                <dd>
                                    <dl>
                                        <dt>Battery</dt>
                                        <dd>${this.data.accessories.battery?"yes":"no"}</dd>
                                        <dt>Charger</dt>
                                        <dd>${this.data.accessories.charger?"yes":"no"}</dd>
                                    </dl>
                                </dd>
                                <dt>Lipa Mdogo Mdogo</dt>
                                <dd>${this.data.lipaMdogoMdogo?"yes":"no"}</dd>
                                <dt>Warranty</dt>
                                <dd>${this.data.warranty?"yes":"no"}</dd>
                                <dt>Repair History</dt>
                                <dd>${this.data.repairHistory?"yes":"no"}</dd>
                            </dl>
                    </div>`
        }
    
    get standByUnit(){

            return `<div>
                        <h5>Stand by unit</h5>
                        <dl>
                            <dt>Standby unit issued</dt>
                            <dd>${this.data.standByUnit.standByUnit?"yes":"no"}</dd>
                            <dt>Standby unit Details</dt>
                            <dd>
                                <dl>
                                    <dt>Brand</dt>
                                    <dd>${this.data.standByUnit.standByUnit?this.data.standByUnit.standByUnitBrand:"None"}</dd>
                                    <dt>Model</dt>
                                    <dd>${this.data.standByUnit.standByUnit?this.data.standByUnit.standByUnitModel:"None"}</dd>
                                    <dt>Serial</dt>
                                    <dd>${this.data.standByUnit.standByUnit?this.data.standByUnit.standByUnitSerial:"None"}</dd>
                                </dl>
                            </dd>
                        </dl>
                    </div>`
        }
    
    get deviceFaults(){
        return `<div>
                    <h5>Device Faults</h5>

                    <dl>
                        <dt>Display</dt>
                        <dd>
                            <dl>
                                <dt>Cracked</dt>
                                <dd>${this.data.Issues.display.cracked?"yes":"no"}</dd>
                            </dl>
                            <dl>
                                <dt>Not Powering Up</dt>
                                <dd>${this.data.Issues.display.notWorking?"yes":"no"}</dd>
                            </dl>
                            <dl>
                                <dt>No touch</dt>
                                <dd>${this.data.Issues.display.notTouch?"yes":"no"}</dd>
                            </dl>
                        </dd>
                        <dt>Power</dt>
                        <dd>
                            <dl>
                                <dt>Not powering up</dt>
                                <dd>${this.data.Issues.power.notPoweringUp?"yes":"no"}</dd>
                                <dt>Short Battery life</dt>
                                <dd>${this.data.Issues.power.shortBatteryLife?"yes":"no"}</dd>
                                <dt>Not charging</dt>
                                <dd>${this.data.Issues.power.notCharging?"yes":"no"}</dd>
                            </dl>
                        </dd>
                        <dt>Speaker</dt>
                        <dd>
                            <dl>
                                <dt>No sound</dt>
                                <dd>${this.data.Issues.speaker.noSound?"yes":"no"}</dd>
                                <dt>Distorted sound</dt>
                                <dd>${this.data.Issues.speaker.distortedSound?"yes":"no"}</dd>
                                <dt>Not ringing</dt>
                                <dd>${this.data.Issues.speaker.notRinging?"yes":"no"}</dd>
                            </dl>
                        </dd>
                        <dt>Network</dt>
                        <dd>
                            <dl>
                                <dt>No Mobile Network</dt>
                                <dd>${this.data.Issues.network.noMobileNetwork?"yes":"no"}</dd>
                                <dt>No Wifi</dt>
                                <dd>${this.data.Issues.network.noWifi?"yes":"no"}</dd>
                                <dt>Dropping Calls</dt>
                                <dd>${this.data.Issues.network.droppedCalls?"yes":"no"}</dd>
                                <dt>Unable to make calls</dt>
                                <dd>${this.data.Issues.network.noMobileNetwork?"yes":"no"}</dd>
                            </dl>
                        </dd>
                        <dt>Physical Damage</dt>
                        <dd>
                            <dl>
                                <dt>Faulty Keys</td>
                                <dd>${this.data.Issues.physicalDamage.faultyKeys?"yes":"no"}</dd>
                                <dt>Cracked Body</dt>
                                <dd>${this.data.Issues.physicalDamage.crackedBody?"yes":"no"}</dd>
                            </dl>
                        </dd>
                        <dt>Software</dt>
                        <dd>
                            <dl>
                                <dt>Slow</dt>
                                <dd>${this.data.Issues.software.slow?"yes":"no"}</dd>
                                <dt>Crashing</dt>
                                <dd>${this.data.Issues.software.crashing?"yes":"no"}</dd>
                                <dt>Hanging</dt>
                                <dd>${this.data.Issues.software.hanging?"yes":"no"}</dd>
                            </dl>
                        </dd>
                    </dl>
                </div>`
        }
    
    get retailCenter(){
        return `<div>
                    <h5>Retail Centre</h5>
                    <dl>
                        <dt>Retail Centre</dt>
                        <dd>${this.data.retail_center}</dd>
                    </dl>
                </div>`
        }
    
    get repairCenter(){
        return `<div>
                    <h5>Repair Centre</h5>
                    <dl>
                        <dt>Repair Centre</dt>
                        <dd>${this.data.repair_center}</dd>
                    </dl>
                </div>`
        }
    
   get summaryDetails(){
       return "<h3>Summary</h3>"+this.customerDetails+this.deviceDetails+this.standByUnit+this.deviceFaults+this.retailCenter+this.repairCenter
        }

}




