formSubmit = function(indexNum){
    var submissionData = {};
    submissionData.index = indexNum
    submissionData.projectName = metaForm.elements["projectName"].value;   
    submissionData.date = metaForm.elements["date"].value;   
    submissionData.meta = metaForm.elements["meta"].value;   
    submissionData.videoURL = metaForm.elements["videoURL"].value; 
    submissionData.descShort = metaForm.elements["descShort"].value; 
    submissionData.descMedium = metaForm.elements["descMedium"].value; 
    submissionData.descLong = metaForm.elements["descLong"].value; 
    
    
    for (var i = 1; i < 11; i++){
        var thisFileName = "fileName0" + i;
        var thisFileDesc = "fileDesc0" + i;
        
        if (metaForm.elements[thisFileName].value == ""){
            break;
            
        } else if (i == 10){
            submissionData[thisFileName] = metaForm.elements[thisFileName].value;
            submissionData[thisFileDesc] = metaForm.elements[thisFileDesc].value;  
        }else{
            submissionData[thisFileName] = metaForm.elements[thisFileName].value;
            submissionData[thisFileDesc] = metaForm.elements[thisFileDesc].value;
        };
    };
    
    return submissionData;
    
}