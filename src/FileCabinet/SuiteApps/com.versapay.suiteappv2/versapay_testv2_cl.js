/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope Public
 * @Company Versapay
 * @Description this is a test client script for DEMO
 */
define(['N/ui/dialog'],

function(dialog) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(scriptContext) {
        dialog.alert({
            title: 'This is a title',
            message: 'This is a message'
        });
    }

    return {
        pageInit: pageInit
    };
    
});
