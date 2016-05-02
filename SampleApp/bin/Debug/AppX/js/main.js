var objComp = SampleComponent.Example();
function init() {
        objComp.createAppFolder("NewFolder");
}

function readFile() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("passWord").value;

    if (userName != "" && password != "") {
        objComp.readFile().then(function (retVal) {
            if (userName == retVal.split(",")[0] && password == retVal.split(",")[1]) {
                window.location.href = "work.html";
            }
            else {
                var msg = new Windows.UI.Popups.MessageDialog("Incorrect username/password!","Invalid");
                msg.showAsync();
            }
        });
    }
    else {
        var msg = new Windows.UI.Popups.MessageDialog("Fields cannot be empty!", "Invalid");
        msg.showAsync();
    }
}

function createFile() {
    var fileName = document.getElementById("fileName").value;
    var _createFile = SampleComponent.Example();
    _createFile.createFile(fileName);
}

function writeIntoFile() {
    var content = document.getElementById("contentWrite").value;
    var _content = SampleComponent.Example();
    _content.writeFile(content);
}

function createSubFolder() {
    var subFolderName = document.getElementById("subFolderName").value;
    var test = SampleComponent.Example();
    test.createAppFolder("NewFolder").then(function (retVal) {
        if (retVal == "success") {
            test.createAppFolder("\\NewFolder\\"+subFolderName);
        }
    });
}