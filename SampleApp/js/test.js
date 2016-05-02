function createFolder() {
    var test = SampleComponent.Example();
    test.createAppFolder("TestApp").then(function (retVal) {
        if (retVal == "success") {
            //window.location.href = "somePage.html";
        }
    });
}

