/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 * @Company Versapay
 * @Description this is a test suitelet script for DEMO
 */
define([],
    
    () => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            log.debug('TEST', 'TEST');
        }

        return {onRequest}

    });
