function createFolder() {
    var test = SampleComponent.Example();
    test.createAppFolder("TestApp").then(function (retVal) {
        console.log(retVal);
    });
}

