// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";
    var alertsToShow = [];
    var dialogVisible = false;
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());

            // Retrieve the button and register our event handler. 
            //var helloButton = document.getElementById("helloButton");
            //helloButton.addEventListener("click", ClickMe, false);

            //var createFolder = document.getElementById("createFolder");
            //createFolder.addEventListener("click", btn_CreateFolder, false);
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use thec:\users\procit\documents\visual studio 2013\projects\sampleapp\sampleapp\images\
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    
    


    function createFolder() {
        //var test = SampleComponent.Example();
        //var y = test.createAppFolder("TestAppFolder");
        //var x = y;
       
    }

    function ClickMe(eventInfo) {
        var userName = SampleComponent.Example.helloworld();
        var greetingString = "Hello, " + userName + "!";
        document.getElementById("greetingOutput").innerText = greetingString;
    }
   
    app.start();
})();
