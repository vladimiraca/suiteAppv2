/**
 * @NApiVersion 2.1
 * @NScriptType ScheduledScript
 */
define([],
    
    () => {

        /**
         * Defines the Scheduled script trigger point.
         * @param {Object} scriptContext
         * @param {string} scriptContext.type - Script execution context. Use values from the scriptContext.InvocationType enum.
         * @since 2015.2
         */
        const execute = (scriptContext) => {
            switch(scriptContext.type) {
                case scriptContext.InvocationType.ON_DEMAND:
                    break;
                case scriptContext.InvocationType.SCHEDULED:
                    break;
                case scriptContext.InvocationType.ABORTED:
                    break;
            }
        }

        return {execute}

    });
