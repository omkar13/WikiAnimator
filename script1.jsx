//tried using json2.js but faced some issues. Hence using eval function to parse json.
//"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;u>r;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;u>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,i),o&&f.push(quote(n)+(gap?": ":":")+o));else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i),o&&f.push(quote(n)+(gap?": ":":")+o));return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

/*
var testJSON = '{"a":123,"b":"4 5 6"}';

var obj = JSON.parse (testJSON , function(key,value){
return value;	
	});
*/

//var myFile = new File("~/Desktop/export.json");
//var myFile = File("export.json");
var myFile = File.openDialog("Choose a text file");
var name;
var country;
var state;
var language;
var area;
var population;
var introduction;


$.writeln($.fileName)
//$.writeln(myFile.open("r" ))
//console.log($.fileName)

if(myFile.open("r")){
		myFile.encoding = "UTF-8";
		var myJson = myFile.read();
		$.writeln(myJson)
		
		try{

//var myObject = JSON.parse(myJson , function(key,value){
//return value;	
//	});
//var strJSON = '{"result":true,"count":1}';
var objJSON = eval("(function(){return " + myJson + ";})()");
//alert(objJSON.query.allpages[0].pageid);
//alert(objJSON.b);
//pid1 = objJSON.query.allpages[0].pageid;
//pid2 = objJSON.query.allpages[1].pageid;
//pid3 = objJSON.query.allpages[2].pageid;
		
name = objJSON.name;		
country = objJSON.country;
state = objJSON.state;		
language = objJSON.language;
area = objJSON.area;		
population = objJSON.population;
paragraph = objJSON.paragraph;	

		}
		catch(e){
			$.writeln(e.message);
		}
		
		myFile.close();
		}
//$.writeln(myObject.a) ;

//now we have the parsed json data. We will set the animation text layers input.

var p = app.project;
$.writeln(p.numItems);

var theComposition = app.project.item(1);

$.writeln(theComposition.layers[1].name);
$.writeln(theComposition.layers[2].name);
$.writeln(theComposition.layers[3].name);
$.writeln(theComposition.layers[4].name);

//theComposition.layers[18].property("Source Text").setValue("IIT");
theComposition.layers[1].property("Source Text").setValue(name);
theComposition.layers[2].property("Source Text").setValue("country: "  + country);
theComposition.layers[3].property("Source Text").setValue("state: "  + state);
theComposition.layers[4].property("Source Text").setValue("language: " + language);
theComposition.layers[5].property("Source Text").setValue("area: "+area);
theComposition.layers[6].property("Source Text").setValue("population: "+ population);
theComposition.layers[7].property("Source Text").setValue("information: " + paragraph);


/*
var textlayer1 = theComposition.layers.addText(pid1);
textlayer1.inPoint = 1;
textlayer1.outPoint = 2;

var textlayer2 = theComposition.layers.addText(pid2);
textlayer2.inPoint = 3;
textlayer2.outPoint = 4;

var textlayer3 = theComposition.layers.addText(pid3);
textlayer3.inPoint = 5;
textlayer3.outPoint = 6;
*/


//var textLayer = theComposition.layers.addBoxText("source code");


//var theTextLayer = theComposition.layers[1];
//theTextLayer.property("Source Text").setValue("This text is from code");