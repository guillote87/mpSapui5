sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend(
      "com.sap.destination.service.frontend.destination_service_frontend.controller.View1",
      {
        onInit: function () {
          var oModel = new JSONModel();
          var url = "/getUsers";
          jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function (result) {
              console.log(result)
              oModel.setData(result);
            },
            error: function (e) {
              // log error in browser
              console.log(e.message);
            },
          });
          this.getView().setModel(oModel, "users");
        },
      }
    );
  }
);
