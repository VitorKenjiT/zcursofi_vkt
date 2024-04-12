sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zcursovktapp1.controller.View1", {
            onInit: function () {

            },

            onCreate: function() {
                var that = this;
                var usuario = this.getView().byId("idusuario").getValue();
                var nome = this.getView().byId("idnome").getValue();
                var projetosegw = this.getView().byId("idprojetosegw").getValue();
                var email = this.getView().byId("idemail").getValue();

                if(!usuario){
                    sap.m.MessageBox.error(this.getView().getModel("i18n").getResourceBundle().getText("lblMsgErroUser"));
                    return;
                }

                var oDados = {
                    Usuario: usuario,
                    Nome: nome,
                    ProjetoSegw: projetosegw,
                    Email: email
                }

                this.getView().getModel().create('/AlunosFiori_VITORKTSet', oDados, {
                    success: function (oData, oResponse) {
                        sap.m.MessageBox.success(that.getView().getModel("i18n").getResourceBundle().getText("lblMsgCreateOk"));
                        that.getView().byId("idusuario").setValue("");
                        that.getView().byId("idNome").setValue("");
                        that.getView().byId("idProjSegw").setValue("");
                        that.getView().byId("idEmail").setValue("");
                    },
                    error: function (oError){
                        sap.m.MessageBox.error(that.getView().getModel("i18n").getResourceBundle().getText("lblMsgCreateError"));
                    }
                })
            }
        });
    });
