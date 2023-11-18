sap.ui.define(function() {
	"use strict";

	var Formatter = {

		status :  function (sStatus) {
				if (sStatus === "authorized") {
					return "Success";
				} else if (sStatus === "pending") {
					return "Warning";
				} else if (sStatus === "Discontinued"){
					return "Error";
				} else {
					return "None";
				}
		}
	};

	return Formatter;

},  /* bExport= */ true);
