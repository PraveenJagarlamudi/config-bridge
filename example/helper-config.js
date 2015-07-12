/**
 * Created by Praveen on 12/7/15.
 */

exports.Env={
    'ENV1':{
        'baseUrl':'http://angular-ui.github.io/ng-grid/',
        'p1':'DEV_p1','p2':'DEV_p2','p3':'DEV_p3','p4':'DEV_p4','p5':'DEV_p5',
        'p6':'DEV_p6','p7':'DEV_p7','p8':'DEV_p8','p9':'DEV_p9','p10':'DEV_p10'
    },
    'ENV2':{
        'baseUrl':'http://angular-ui.github.io/ng-grid/',
        'p1':'QA_p1','p2':'QA_p2','p3':'QA_p3','p4':'QA_p4','p5':'QA_p5',
        'p6':'QA_p6','p7':'QA_p7','p8':'QA_p8','p9':'QA_p9','p10':'QA_p10'
    },
    'ENV3':{
        'baseUrl':'http://angular-ui.github.io/ng-grid/',
        'p1':'LOCAL_p1','p2':'LOCAL_p2','p3':'LOCAL_p3','p4':'LOCAL_p4','p5':'LOCAL_p5',
        'p6':'LOCAL_p6','p7':'LOCAL_p7','p8':'LOCAL_p8','p9':'LOCAL_p9','p10':'LOCAL_p10'
    }
};

exports.CAPABILITIES={
    'chrome':{
        browserName:'chrome'
    },
    'emu':{
        browserName: '',
        'appium-version': '1.3',
        platformName: 'iOS',
        platformVersion: '8.1',
        deviceName: 'iPhone Simulator',
        isMob:true
    }
};