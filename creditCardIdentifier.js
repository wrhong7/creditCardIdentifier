function ccNumberIdentifier(ccNumber) {
	if ((ccNumber.substring(0,2) === "34") 
		|| (ccNumber.substring(0,2) === "37")) { console.log("Amex") }

	if (ccNumber.substring(0,2) === "62") { console.log("Union Pay") }

	if ((ccNumber.substring(0,3) >= "300" && ccNumber[0,3] <= "305")
		|| ccNumber.substring(0,3) === "201" 
		|| ccNumber.substring(0,3)=== "214" 
		|| ccNumber.substring(0,3)=== "309" 
		|| ccNumber.substring(0,2)== "36" 
		|| ccNumber.substring(0,2) === "38" 
		|| ccNumber.substring(0,2)=== "39" ) { console.log ("Diners Club") }

	if (ccNumber.substring(0,2)=== "60" 
		|| ccNumber.substring(0,2) === "62" 
		|| ccNumber.substring(0,2) === "64" 
		|| ccNumber.substring(0,2) === "65") { console.log ("Discover") }

	if (ccNumber.substring(0,2) === "35" ) { console.log("JCB") }

	if ((ccNumber.substring(0,4) >= "2221" && ccNumber[0,4] <= "2720")
		|| (ccNumber.substring(0,2) >= "50" && ccNumber[0,2] <= "58")
		|| ccNumber === "6") { console.log("MC") }

	if (ccNumber[0] === "4") { console.log("Visa") }
}