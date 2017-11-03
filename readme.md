# SSML Tool

SSMLTool is a demonstrator for examining SSML support using the W3C Web Speech Synthesis API. Currently, there is no standards-based mechanism for incorporating SSML into HTML to provide pronunciation or presentational hinting to assistive technologies which render text using text to speech synthesis (such as screen readers and read aloud tools). Across assessment vendors, a variety of approaches have been used to solve this problem, ranging from misuse of the WAI-ARIA standard, to creation of custom and data-attributes. We propose a data-attribute model that utilizes JSON to encapsulate SSML functions, attributes, and values in manner that allows for easy consumption by assistive technologies. This document describes the data-attribute model and provides examples. In addition, a reference implementation, in JavaScript is described.

* data-SSML: The SSML in HTML Data Attribute

The data-ssml attribute can be applied to HTML elements containing textual content. The attribute value is a JSON structure which contains the SSML function (e.g., “say-as”) and any required property-value pairs needed to fully specify the function.

This code is made available "as is" for demonstration purposes, and not intended as a specific proposed method of implementing SSML support in HTML.

A live version is available at [http://www.ets-research.org/ia11ylab/ssmltool/]

*Note* that you will need to have an SSML aware syntehsizer available on Windows, or be running on MacOS.

Tested on Windows with Chrome and FireFox using Ivona TTS, and Windows 10 Edge with Microsoft TTS.  Also on MacOS with Chrome and Safari.

Questions? Please write Mark Hakkinen (mhakkinen@ets.org) Or Irfan Ali (iali@ets.org)