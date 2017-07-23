/* SSML Test Tool - Supporting Javascript
	Author Mark Hakkinen (mhakkinen@ets.org)
	Last modifed May 4, 2016
*/
var synth = window.speechSynthesis;

var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');

// Adding Stop button function
var stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', function(e) {
			synth.cancel();
		
		});
// Stop function ends
var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function displayXML(s)
{
  var wst;
  wst=s;
  while (wst.indexOf("<")>=0) wst=wst.replace("<","&lt;");
  while (wst.indexOf(">")>=0) wst=wst.replace(">","&gt;");
  return wst;
}



function produceSpeech(){
	
  var workstring=inputTxt.value;
  var prefix;
  var wrapper;
	var json2ssml = document.getElementById('chkJSONAttr').checked;
  var bWrap=document.getElementById('chkWrapSSML').checked;
  var bPrefix=document.getElementById('chkXMLprefix').checked; 
  var bDataAttr=document.getElementById('chkDataAttr').checked;
 
 
if (bDataAttr) {
  var s2Parse;
  s2Parse=workstring;
  var el=document.getElementById('pstruct');
  el.innerHTML=s2Parse;
  var spans=el.getElementsByTagName("span");

  /*************************************************/
  while (el.getElementsByTagName('span').length>0)
   {
  	var es=spans[0];
 
  	var ssmltag=es.getAttribute('data-ssml');
  	var ssmlvalue=es.getAttribute('data-ssmlval');
  	var inText=es.innerHTML;
  	var isMac=navigator.platform;
    /********** Mac Specific ************/
  	if (isMac.indexOf("Mac")>=0)
  		{
			
	  		var preText="";
  			var postText="";
  			var ssmlnode=document.createElement('span');
  			switch (ssmltag) {
  				case 'sub':
					
						
  					inText=ssmlvalue;
  					break;
  				case 'say-as':
      				switch (ssmlvalue) {
      					case 'characters':
      						preText="[[char LTRL]]";
      						postText="[[char NORM]]";
      						break;
      					case 'ordinal':
      						preText="[[nmbr NORM]]";
      						postText="[[nmbr NORM]]";
      						break;
      					case 'cardinal':
      						preText="[[nmbr NORM]]";
      						postText="[[nmbr NORM]]";
      						break;
								case 'date':
								  preText="[[Day][/][Month][/][Year]]";
									postText="[[Day][/][Month][/][Year]]";
									break;
								case 'time':
								  preText="[[hour][:][minute]([:][second]]";
									postText="[[hour][:][minute]([:][second]]";
									break;	
      					}
	  				break;
  				case 'break':
  					switch (ssmlvalue) {
      					case 'weak':
      						preText="[[slnc 250]]";
      						postText="[[slnc 0]]";
      						break;
      					case 'medium':
      						preText="[[slnc 500]]";
      						postText="[[slnc 0]]";
      						break;
      					case 'strong':
      						preText="[[slnc 1000]]";
      						postText="[[slnc 0]]";
      						break;
      					}
 					break;
  				case 'emphasis':
  					switch (ssmlvalue) {
      					case 'strong':
      						preText="[[emph +]]";
      						postText="[[rset 0]]";
      						break;
      					case 'moderate':
      						preText="[[emph +; emph +]]";
      						postText="[[rset 0]]";
      						break;
      					case 'reduced':
      						preText="[[emph -]]";
      						postText="[[rset 0]]";
      						break;
      					}
      				break;
   				case 'prosody':
  					switch (ssmlvalue) {   
   						case 'fast':
      						preText="[[rate 300]]";
      						postText="[[rset 0]]";
      						break;
      					case 'slow':
      						preText="[[rate 75]]";
      						postText="[[rset 0]]";
      						break;
      					}
    				break;

						case 'ref':
						 inText=ssmlvalue;
  					break;
						case 'src':
						 inText=ssmlvalue;
  					break;
						 

						
						 
  			}
  
  
      var ssmlcontent=document.createTextNode(preText + inText + postText);
      var parentDiv=es.parentNode;
      parentDiv.replaceChild(ssmlcontent, es);
  
    }
    else
    {
      var ssmlnode=document.createElement(ssmltag);
      var ssmlcontent=document.createTextNode(inText);
      ssmlnode.appendChild(ssmlcontent);
      switch (ssmltag) {
        case 'sub':
            ssmlnode.setAttribute('alias',ssmlvalue);
            break;
        case 'say-as':
            ssmlnode.setAttribute('interpret-as',ssmlvalue);
            break;
        case 'break':
            ssmlnode.setAttribute('strength',ssmlvalue);
            break;
        case 'emphasis':
            ssmlnode.setAttribute('level',ssmlvalue);
            break;
        case 'phoneme':
            ssmlnode.setAttribute('alphabet',ssmlvalue);
            break;
        case 'prosody':
            ssmlnode.setAttribute('rate',ssmlvalue);
            break;
        } 
      var parentDiv=es.parentNode;
      parentDiv.replaceChild(ssmlnode, es);
    }
 
  }
 workstring=parentDiv.innerHTML; 
 } 

  var msSpeakTag='<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" ' + 
  'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '+
  'xsi:schemaLocation="http://www.w3.org/2001/10/synthesis '+
  'http://www.w3.org/TR/speech-synthesis/synthesis.xsd" xml:lang="en-US">';

	if (bWrap) {workstring=msSpeakTag+workstring+"</speak>";};

// Function to convert json HTML to SSML
		
 if (chkJSONAttr) {

 var ssml2Parse;
 ssml2Parse = workstring;
 var elssml = document.getElementById('pstruct');
 elssml.innerHTML=ssml2Parse;
 var elems = elssml.getElementsByTagName('span');
 
	 while (elems[0]) {
		var elem = elems[0];
		//{"prosody" : {"rate":"fast"}, "say-as" :{"format": "characters"},"emphasis" :{"level":"strong"}  }
		var ssml = JSON.parse(elem.dataset.ssml);
	
		var innerMost = null; // to clear the previous value from the dom 
		var rssml = []; // creating the array of ssml
		for (var t in ssml) {
			rssml.push(t);
		}
		//['parameter1','parameter2','parameter3']
		// staring looping in the reverse order from last child 
		for (var i = rssml.length - 1; i >= 0; i--) {
			var tagName = rssml[i];

			var child = document.createElement(tagName); 
			// ssml[tagName] :: {"property":"attribute"}
			for (var a in ssml[tagName]) {
				child.setAttribute(a, ssml[tagName][a]);
			}
			if (innerMost == null) {
				child.innerText = elem.innerText;
			} else {
				child.appendChild(innerMost);
			}
			innerMost = child;
		}
		elem.parentNode.replaceChild(child, elem);
		
		
	} 
 
 };



	if (bPrefix) {workstring="<?xml version='1.0'?>"+workstring;};
//  if (bPrefix) {workstring=workstring;};
 

var utterThis = new SpeechSynthesisUtterance(workstring);
if (chkJSONAttr) {
	var utterThis = new SpeechSynthesisUtterance(document.getElementById('pstruct').innerHTML);
}
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
	
	  utterThis.rate=1;
	  
    }
  }

  synth.speak(utterThis);
  document.getElementById('result').innerHTML=displayXML(workstring);
  document.getElementById('pstruct').innerHTML=displayXML(document.getElementById('pstruct').innerHTML);

  
}
 
function getBrowserInfo()
{
	var ua = navigator.userAgent, tem,
	M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if(/trident/i.test(M[1]))
	{
		tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE '+(tem[1] || '');
	}
	if(M[1]=== 'Chrome')
	{
		tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
		if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	}
	M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if((tem= ua.match(/version\/(\d+)/i))!= null) 
		M.splice(1, 1, tem[1]);
	return M.join(' ');
}