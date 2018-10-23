window.addEventListener("load", function(){
 
    
    
    
    //document.getElementById("prosodyBTN").readOnly = "false";
    document.getElementById("prosodyBTN").onclick = function() {
        var textarea = document.getElementById("AuthoredText");
        if ('selectionStart' in textarea) {
                // check whether some text is selected in the textarea
            if (textarea.selectionStart != textarea.selectionEnd) {
                var newText = textarea.value.substring (0, textarea.selectionStart) + 
                    "<span data-ssml='{\"prosody\" : {\"rate\":\"x-fast\"}}'>" + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + "</span>" +
                    textarea.value.substring (textarea.selectionEnd);
                textarea.value = newText;
            }
        }
        else {  // Internet Explorer before version 9
                // create a range from the current selection
            var textRange = document.selection.createRange ();
                // check whether the selection is within the textarea
            var rangeParent = textRange.parentElement ();
            if (rangeParent === textarea) {
                textRange.text = "<span data-ssml='{\"prosody\" : {\"rate\":\"x-fast\"}}'>" + textRange.text + "</span>";
            }
        }
    };

    document.getElementById("prosodySlow").onclick = function() {
        var textarea = document.getElementById("AuthoredText");
        if ('selectionStart' in textarea) {
                // check whether some text is selected in the textarea
            if (textarea.selectionStart != textarea.selectionEnd) {
                var newText = textarea.value.substring (0, textarea.selectionStart) + 
                    "<span data-ssml='{\"prosody\" : {\"rate\":\"slow\"}}'>" + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + "</span>" +
                    textarea.value.substring (textarea.selectionEnd);
                textarea.value = newText;
            }
        }
        else {  // Internet Explorer before version 9
                // create a range from the current selection
            var textRange = document.selection.createRange ();
                // check whether the selection is within the textarea
            var rangeParent = textRange.parentElement ();
            if (rangeParent === textarea) {
                textRange.text = "<span data-ssml='{\"prosody\" : {\"rate\":\"slow\"}}'>" + textRange.text + "</span>";
            }
        }
    };


    document.getElementById("sayCardinal").onclick = function() {
        var textarea = document.getElementById("AuthoredText");
        if ('selectionStart' in textarea) {
                // check whether some text is selected in the textarea
            if (textarea.selectionStart != textarea.selectionEnd) {
                var newText = textarea.value.substring (0, textarea.selectionStart) + 
                    "<span data-ssml='{\"say-as\": {\"interpret-as\":\"characters\"}}'>" + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + "</span>" +
                    textarea.value.substring (textarea.selectionEnd);
                textarea.value = newText;
            }
        }
        else {  // Internet Explorer before version 9
                // create a range from the current selection
            var textRange = document.selection.createRange ();
                // check whether the selection is within the textarea
            var rangeParent = textRange.parentElement ();
            if (rangeParent === textarea) {
                textRange.text = "<span data-ssml='{\"say-as\": {\"interpret-as\":\"characters\"}}'>" + textRange.text + "</span>";
            }
        }
    };

    
    document.getElementById("sayChar").onclick = function() {
        var textarea = document.getElementById("AuthoredText");
        if ('selectionStart' in textarea) {
                // check whether some text is selected in the textarea
            if (textarea.selectionStart != textarea.selectionEnd) {
                var newText = textarea.value.substring (0, textarea.selectionStart) + 
                    "<span data-ssml='{\"say-as\": {\"interpret-as\":\"characters\"}}'>" + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + "</span>" +
                    textarea.value.substring (textarea.selectionEnd);
                textarea.value = newText;
            }
        }
        else {  // Internet Explorer before version 9
                // create a range from the current selection
            var textRange = document.selection.createRange ();
                // check whether the selection is within the textarea
            var rangeParent = textRange.parentElement ();
            if (rangeParent === textarea) {
                textRange.text = "<span data-ssml='{\"say-as\": {\"interpret-as\":\"characters\"}}'>" + textRange.text + "</span>";
            }
        }
    };
    document.getElementById("strongVoice").onclick = function() {
        var textarea = document.getElementById("AuthoredText");
        if ('selectionStart' in textarea) {
                // check whether some text is selected in the textarea
            if (textarea.selectionStart != textarea.selectionEnd) {
                var newText = textarea.value.substring (0, textarea.selectionStart) + 
                    "<span data-ssml='{\"emphasis\" : {\"level\":\"strong\"}}'>" + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + "</span>" +
                    textarea.value.substring (textarea.selectionEnd);
                textarea.value =  newText ;
            }
        }
        else {  // Internet Explorer before version 9
                // create a range from the current selection
            var textRange = document.selection.createRange ();
                // check whether the selection is within the textarea
            var rangeParent = textRange.parentElement ();
            if (rangeParent === textarea) {
                textRange.text = "<span data-ssml='{\"emphasis\" : {\"level\":\"strong\"}}'>" + textRange.text + "</span>";
            }
        }
    };
    document.getElementById("breakMedium").onclick = function() {
        var textarea = document.getElementById("AuthoredText");
        if ('selectionStart' in textarea) {
                // check whether some text is selected in the textarea
            if (textarea.selectionStart != textarea.selectionEnd) {
                var newText = textarea.value.substring (0, textarea.selectionStart) + 
                    "<span data-ssml='{\"break\": {\"strength\":\"medium\"}}'>" + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + "</span>" +
                    textarea.value.substring (textarea.selectionEnd);
                textarea.value =  newText ;
            }
        }
        else {  // Internet Explorer before version 9
                // create a range from the current selection
            var textRange = document.selection.createRange ();
                // check whether the selection is within the textarea
            var rangeParent = textRange.parentElement ();
            if (rangeParent === textarea) {
                textRange.text = "<span data-ssml='{\"break\": {\"strength\":\"medium\"}}'>" + textRange.text + "</span>";
            }
        }
    };
    document.getElementById("subAlias").onclick = function() {
        var textarea = document.getElementById("AuthoredText");
        if ('selectionStart' in textarea) {
                // check whether some text is selected in the textarea
            if (textarea.selectionStart != textarea.selectionEnd) {
                var newText = textarea.value.substring (0, textarea.selectionStart) + 
                    "<span data-ssml='{\"sub\": {\"alias\":\"Speech Synthesis Markup Language\"}}'>" + textarea.value.substring  (textarea.selectionStart, textarea.selectionEnd) + "</span>" +
                    textarea.value.substring (textarea.selectionEnd);
                textarea.value =  newText ;
            }
        }
        else {  // Internet Explorer before version 9
                // create a range from the current selection
            var textRange = document.selection.createRange ();
                // check whether the selection is within the textarea
            var rangeParent = textRange.parentElement ();
            if (rangeParent === textarea) {
                textRange.text = "<span data-ssml='{\"sub\": {\"alias\":\"Speech Synthesis Markup Language\"}}'>" + textRange.text + "</span>";
            }
        }
    };
    
});

