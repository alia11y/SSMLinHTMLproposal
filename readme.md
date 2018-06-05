# Proposal Including SSML in HTML via WAI-ARIA

Currently, there is no standards-based mechanism for incorporating SSML into HTML to provide pronunciation or presentational hinting to assistive technologies which render text using text to speech synthesis (such as screen readers and read aloud tools). This issue has been previously shared with the WAI-ARIA group at TPAC 2016 [1]. 

The need for accurate pronunciation or presentation of spoken content is important in educational content, and critical in educational assessment. Across assessment vendors, a variety of approaches have been used to solve this problem, ranging from improper use of the WAI-ARIA standard, to creation of custom attributes or data-attributes. There is no consistent approach. Further, some of these approaches are problematic for braille users when hinted text intended for TTS spoken presentation is also rendered on the refreshable braille display. 

We propose for your consideration a new WAI-ARIA attribute tentatively named `aria-SSML` which utilizes JSON to encapsulate SSML functions, attributes, and values in a manner that allows for easy consumption by Assistive Technologies. 

## `aria-SSML`

We have been experimenting with different approaches over the past several years and settled on the JSON approach, tested using a data attribute, `data-ssml`.  The `data-ssml` attribute can be applied to HTML elements containing textual content. The attribute value is a JSON structure which contains the SSML function (e.g., “say-as”) and any required property-value pairs needed to fully specify the function.  While we could propose simply standardizing on a data-attribute, we believe the importance of seeking AT support argues for moving this forward as an ARIA attribute.  

### Examples

#### `say-as`
```javascript
The angle <span aria-ssml='{"say-as" : {"interpret-as":"characters"}}'>CAB</span> is 30 degrees.
````
#### `phoneme`
```javascript
The words <span aria-ssml='{"phoneme": {"ph":"ˈkɔɹdəˌneɪt/"}}'>coordinate</span> and 
<span aria-ssml='{"phoneme": {"ph":"ˈkɔɹdənɪt"}}'>coordinate</span> have different meanings.
````  
#### `break`
````javascript
The point <span aria-ssml='{"break":{"time":"250ms"}}'></span>
<span aria-ssml='{"say-as" : {"interpret-as":"characters"}}'>x,y</span> is on the coordinate plane.
````
#### `sub`
````javascript
1 <span aria-ssml='{"sub": {"alias":"pico meter"}}'>pm</span> is equal to one trillionth of a meter.
````
#### `emphasis`
````javascript
You <strong><span aria-ssml='{"emphasis": {"level":"strong"}}'>must</span></strong> answer 
all questions in order to continue.
````
Note in this last example, the `aria-ssml` attribute could have been placed on the `strong` element.



## SSML Tool

SSMLTool is a demonstrator for examining data-SSML support using the W3C Web Speech Synthesis API.  The tool demonstrates the basic process of consuming JSON encoded SSML contained as the attribute value of `data-ssml`. 

This code is made available "as is" for demonstration purposes, and not intended as a specific proposed method of implementing SSML support in HTML.

A live version is available at [http://www.ets-research.org/ia11ylab/ssmltool/]

*Note* that you will need to have an SSML aware synthesizer available on Windows, or be running on MacOS where we map common SSML features to their equivalents in the MacOS TTS.

Tested on Windows with Chrome and FireFox using Ivona TTS, and Windows 10 Edge with Microsoft TTS.  Also on MacOS with Chrome and Safari using the native Mac OS TTS engine, with a custom mapping of SSML to the native Apple TTS commands.


Questions? Please write Mark Hakkinen (mhakkinen@ets.org) Or Irfan Ali (iali@ets.org)


[1] https://github.com/mhakkinen/SSML-issues/blob/master/overview.md
