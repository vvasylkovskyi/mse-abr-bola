/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ decodeB64ToUint8Array)
/* harmony export */ });
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_0__);


var atob = function atob(s) {
  return (global_window__WEBPACK_IMPORTED_MODULE_0___default().atob) ? global_window__WEBPACK_IMPORTED_MODULE_0___default().atob(s) : Buffer.from(s, 'base64').toString('binary');
};

function decodeB64ToUint8Array(b64Text) {
  var decodedString = atob(b64Text);
  var array = new Uint8Array(decodedString.length);

  for (var i = 0; i < decodedString.length; i++) {
    array[i] = decodedString.charCodeAt(i);
  }

  return array;
}

/***/ }),

/***/ "./node_modules/@videojs/vhs-utils/es/media-groups.js":
/*!************************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/media-groups.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forEachMediaGroup: () => (/* binding */ forEachMediaGroup)
/* harmony export */ });
/**
 * Loops through all supported media groups in master and calls the provided
 * callback for each group
 *
 * @param {Object} master
 *        The parsed master manifest object
 * @param {string[]} groups
 *        The media groups to call the callback for
 * @param {Function} callback
 *        Callback to call for each media group
 */
var forEachMediaGroup = function forEachMediaGroup(master, groups, callback) {
  groups.forEach(function (mediaType) {
    for (var groupKey in master.mediaGroups[mediaType]) {
      for (var labelKey in master.mediaGroups[mediaType][groupKey]) {
        var mediaProperties = master.mediaGroups[mediaType][groupKey][labelKey];
        callback(mediaProperties, mediaType, groupKey, labelKey);
      }
    }
  });
};

/***/ }),

/***/ "./node_modules/@videojs/vhs-utils/es/resolve-url.js":
/*!***********************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/es/resolve-url.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-toolkit */ "./node_modules/url-toolkit/src/url-toolkit.js");
/* harmony import */ var url_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_LOCATION = 'http://example.com';

var resolveUrl = function resolveUrl(baseUrl, relativeUrl) {
  // return early if we don't need to resolve
  if (/^[a-z]+:/i.test(relativeUrl)) {
    return relativeUrl;
  } // if baseUrl is a data URI, ignore it and resolve everything relative to window.location


  if (/^data:/.test(baseUrl)) {
    baseUrl = (global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && (global_window__WEBPACK_IMPORTED_MODULE_1___default().location).href || '';
  } // IE11 supports URL but not the URL constructor
  // feature detect the behavior we want


  var nativeURL = typeof (global_window__WEBPACK_IMPORTED_MODULE_1___default().URL) === 'function';
  var protocolLess = /^\/\//.test(baseUrl); // remove location if window.location isn't available (i.e. we're in node)
  // and if baseUrl isn't an absolute url

  var removeLocation = !(global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && !/\/\//i.test(baseUrl); // if the base URL is relative then combine with the current location

  if (nativeURL) {
    baseUrl = new (global_window__WEBPACK_IMPORTED_MODULE_1___default().URL)(baseUrl, (global_window__WEBPACK_IMPORTED_MODULE_1___default().location) || DEFAULT_LOCATION);
  } else if (!/\/\//i.test(baseUrl)) {
    baseUrl = url_toolkit__WEBPACK_IMPORTED_MODULE_0___default().buildAbsoluteURL((global_window__WEBPACK_IMPORTED_MODULE_1___default().location) && (global_window__WEBPACK_IMPORTED_MODULE_1___default().location).href || '', baseUrl);
  }

  if (nativeURL) {
    var newUrl = new URL(relativeUrl, baseUrl); // if we're a protocol-less url, remove the protocol
    // and if we're location-less, remove the location
    // otherwise, return the url unmodified

    if (removeLocation) {
      return newUrl.href.slice(DEFAULT_LOCATION.length);
    } else if (protocolLess) {
      return newUrl.href.slice(newUrl.protocol.length);
    }

    return newUrl.href;
  }

  return url_toolkit__WEBPACK_IMPORTED_MODULE_0___default().buildAbsoluteURL(baseUrl, relativeUrl);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveUrl);

/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/conventions.js":
/*!********************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/conventions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Ponyfill for `Array.prototype.find` which is only available in ES6 runtimes.
 *
 * Works with anything that has a `length` property and index access properties, including NodeList.
 *
 * @template {unknown} T
 * @param {Array<T> | ({length:number, [number]: T})} list
 * @param {function (item: T, index: number, list:Array<T> | ({length:number, [number]: T})):boolean} predicate
 * @param {Partial<Pick<ArrayConstructor['prototype'], 'find'>>?} ac `Array.prototype` by default,
 * 				allows injecting a custom implementation in tests
 * @returns {T | undefined}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find
 */
function find(list, predicate, ac) {
	if (ac === undefined) {
		ac = Array.prototype;
	}
	if (list && typeof ac.find === 'function') {
		return ac.find.call(list, predicate);
	}
	for (var i = 0; i < list.length; i++) {
		if (Object.prototype.hasOwnProperty.call(list, i)) {
			var item = list[i];
			if (predicate.call(undefined, item, i, list)) {
				return item;
			}
		}
	}
}

/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * @template T
 * @param {T} object the object to freeze
 * @param {Pick<ObjectConstructor, 'freeze'> = Object} oc `Object` by default,
 * 				allows to inject custom object constructor for tests
 * @returns {Readonly<T>}
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
function freeze(object, oc) {
	if (oc === undefined) {
		oc = Object
	}
	return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object
}

/**
 * Since we can not rely on `Object.assign` we provide a simplified version
 * that is sufficient for our needs.
 *
 * @param {Object} target
 * @param {Object | null | undefined} source
 *
 * @returns {Object} target
 * @throws TypeError if target is not an object
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign
 */
function assign(target, source) {
	if (target === null || typeof target !== 'object') {
		throw new TypeError('target is not an object')
	}
	for (var key in source) {
		if (Object.prototype.hasOwnProperty.call(source, key)) {
			target[key] = source[key]
		}
	}
	return target
}

/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02 MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype WHATWG HTML Spec
 * @see DOMParser.prototype.parseFromString
 */
var MIME_TYPE = freeze({
	/**
	 * `text/html`, the only mime type that triggers treating an XML document as HTML.
	 *
	 * @see DOMParser.SupportedType.isHTML
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
	 */
	HTML: 'text/html',

	/**
	 * Helper method to check a mime type if it indicates an HTML document
	 *
	 * @param {string} [value]
	 * @returns {boolean}
	 *
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
	isHTML: function (value) {
		return value === MIME_TYPE.HTML
	},

	/**
	 * `application/xml`, the standard mime type for XML documents.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
	 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_APPLICATION: 'application/xml',

	/**
	 * `text/html`, an alias for `application/xml`.
	 *
	 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
	 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_TEXT: 'text/xml',

	/**
	 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
	 * but is parsed as an XML document.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
	 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
	 */
	XML_XHTML_APPLICATION: 'application/xhtml+xml',

	/**
	 * `image/svg+xml`,
	 *
	 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
	 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
	 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
	 */
	XML_SVG_IMAGE: 'image/svg+xml',
})

/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */
var NAMESPACE = freeze({
	/**
	 * The XHTML namespace.
	 *
	 * @see http://www.w3.org/1999/xhtml
	 */
	HTML: 'http://www.w3.org/1999/xhtml',

	/**
	 * Checks if `uri` equals `NAMESPACE.HTML`.
	 *
	 * @param {string} [uri]
	 *
	 * @see NAMESPACE.HTML
	 */
	isHTML: function (uri) {
		return uri === NAMESPACE.HTML
	},

	/**
	 * The SVG namespace.
	 *
	 * @see http://www.w3.org/2000/svg
	 */
	SVG: 'http://www.w3.org/2000/svg',

	/**
	 * The `xml:` namespace.
	 *
	 * @see http://www.w3.org/XML/1998/namespace
	 */
	XML: 'http://www.w3.org/XML/1998/namespace',

	/**
	 * The `xmlns:` namespace
	 *
	 * @see https://www.w3.org/2000/xmlns/
	 */
	XMLNS: 'http://www.w3.org/2000/xmlns/',
})

exports.assign = assign;
exports.find = find;
exports.freeze = freeze;
exports.MIME_TYPE = MIME_TYPE;
exports.NAMESPACE = NAMESPACE;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom-parser.js":
/*!*******************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom-parser.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");
var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
var entities = __webpack_require__(/*! ./entities */ "./node_modules/@xmldom/xmldom/lib/entities.js");
var sax = __webpack_require__(/*! ./sax */ "./node_modules/@xmldom/xmldom/lib/sax.js");

var DOMImplementation = dom.DOMImplementation;

var NAMESPACE = conventions.NAMESPACE;

var ParseError = sax.ParseError;
var XMLReader = sax.XMLReader;

/**
 * Normalizes line ending according to https://www.w3.org/TR/xml11/#sec-line-ends:
 *
 * > XML parsed entities are often stored in computer files which,
 * > for editing convenience, are organized into lines.
 * > These lines are typically separated by some combination
 * > of the characters CARRIAGE RETURN (#xD) and LINE FEED (#xA).
 * >
 * > To simplify the tasks of applications, the XML processor must behave
 * > as if it normalized all line breaks in external parsed entities (including the document entity)
 * > on input, before parsing, by translating all of the following to a single #xA character:
 * >
 * > 1. the two-character sequence #xD #xA
 * > 2. the two-character sequence #xD #x85
 * > 3. the single character #x85
 * > 4. the single character #x2028
 * > 5. any #xD character that is not immediately followed by #xA or #x85.
 *
 * @param {string} input
 * @returns {string}
 */
function normalizeLineEndings(input) {
	return input
		.replace(/\r[\n\u0085]/g, '\n')
		.replace(/[\r\u0085\u2028]/g, '\n')
}

/**
 * @typedef Locator
 * @property {number} [columnNumber]
 * @property {number} [lineNumber]
 */

/**
 * @typedef DOMParserOptions
 * @property {DOMHandler} [domBuilder]
 * @property {Function} [errorHandler]
 * @property {(string) => string} [normalizeLineEndings] used to replace line endings before parsing
 * 						defaults to `normalizeLineEndings`
 * @property {Locator} [locator]
 * @property {Record<string, string>} [xmlns]
 *
 * @see normalizeLineEndings
 */

/**
 * The DOMParser interface provides the ability to parse XML or HTML source code
 * from a string into a DOM `Document`.
 *
 * _xmldom is different from the spec in that it allows an `options` parameter,
 * to override the default behavior._
 *
 * @param {DOMParserOptions} [options]
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization
 */
function DOMParser(options){
	this.options = options ||{locator:{}};
}

DOMParser.prototype.parseFromString = function(source,mimeType){
	var options = this.options;
	var sax =  new XMLReader();
	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
	var errorHandler = options.errorHandler;
	var locator = options.locator;
	var defaultNSMap = options.xmlns||{};
	var isHTML = /\/x?html?$/.test(mimeType);//mimeType.toLowerCase().indexOf('html') > -1;
  	var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
	if(locator){
		domBuilder.setDocumentLocator(locator)
	}

	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
	sax.domBuilder = options.domBuilder || domBuilder;
	if(isHTML){
		defaultNSMap[''] = NAMESPACE.HTML;
	}
	defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
	var normalize = options.normalizeLineEndings || normalizeLineEndings;
	if (source && typeof source === 'string') {
		sax.parse(
			normalize(source),
			defaultNSMap,
			entityMap
		)
	} else {
		sax.errorHandler.error('invalid doc source')
	}
	return domBuilder.doc;
}
function buildErrorHandler(errorImpl,domBuilder,locator){
	if(!errorImpl){
		if(domBuilder instanceof DOMHandler){
			return domBuilder;
		}
		errorImpl = domBuilder ;
	}
	var errorHandler = {}
	var isCallback = errorImpl instanceof Function;
	locator = locator||{}
	function build(key){
		var fn = errorImpl[key];
		if(!fn && isCallback){
			fn = errorImpl.length == 2?function(msg){errorImpl(key,msg)}:errorImpl;
		}
		errorHandler[key] = fn && function(msg){
			fn('[xmldom '+key+']\t'+msg+_locator(locator));
		}||function(){};
	}
	build('warning');
	build('error');
	build('fatalError');
	return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler
 *
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
    this.cdata = false;
}
function position(locator,node){
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */
DOMHandler.prototype = {
	startDocument : function() {
    	this.doc = new DOMImplementation().createDocument(null, null, null);
    	if (this.locator) {
        	this.doc.documentURI = this.locator.systemId;
    	}
	},
	startElement:function(namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
	    var el = doc.createElementNS(namespaceURI, qName||localName);
	    var len = attrs.length;
	    appendElement(this, el);
	    this.currentElement = el;

		this.locator && position(this.locator,el)
	    for (var i = 0 ; i < len; i++) {
	        var namespaceURI = attrs.getURI(i);
	        var value = attrs.getValue(i);
	        var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator &&position(attrs.getLocator(i),attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr)
	    }
	},
	endElement:function(namespaceURI, localName, qName) {
		var current = this.currentElement
		var tagName = current.tagName;
		this.currentElement = current.parentNode;
	},
	startPrefixMapping:function(prefix, uri) {
	},
	endPrefixMapping:function(prefix) {
	},
	processingInstruction:function(target, data) {
	    var ins = this.doc.createProcessingInstruction(target, data);
	    this.locator && position(this.locator,ins)
	    appendElement(this, ins);
	},
	ignorableWhitespace:function(ch, start, length) {
	},
	characters:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
		//console.log(chars)
		if(chars){
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if(this.currentElement){
				this.currentElement.appendChild(charNode);
			}else if(/^\s*$/.test(chars)){
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator,charNode)
		}
	},
	skippedEntity:function(name) {
	},
	endDocument:function() {
		this.doc.normalize();
	},
	setDocumentLocator:function (locator) {
	    if(this.locator = locator){// && !('lineNumber' in locator)){
	    	locator.lineNumber = 0;
	    }
	},
	//LexicalHandler
	comment:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
	    var comm = this.doc.createComment(chars);
	    this.locator && position(this.locator,comm)
	    appendElement(this, comm);
	},

	startCDATA:function() {
	    //used in characters() methods
	    this.cdata = true;
	},
	endCDATA:function() {
	    this.cdata = false;
	},

	startDTD:function(name, publicId, systemId) {
		var impl = this.doc.implementation;
	    if (impl && impl.createDocumentType) {
	        var dt = impl.createDocumentType(name, publicId, systemId);
	        this.locator && position(this.locator,dt)
	        appendElement(this, dt);
					this.doc.doctype = dt;
	    }
	},
	/**
	 * @see org.xml.sax.ErrorHandler
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning:function(error) {
		console.warn('[xmldom warning]\t'+error,_locator(this.locator));
	},
	error:function(error) {
		console.error('[xmldom error]\t'+error,_locator(this.locator));
	},
	fatalError:function(error) {
		throw new ParseError(error, this.locator);
	}
}
function _locator(l){
	if(l){
		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
	}
}
function _toString(chars,start,length){
	if(typeof chars == 'string'){
		return chars.substr(start,length)
	}else{//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if(chars.length >= start+length || start){
			return new java.lang.String(chars,start,length)+'';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
	DOMHandler.prototype[key] = function(){return null}
})

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement (hander,node) {
    if (!hander.currentElement) {
        hander.doc.appendChild(node);
    } else {
        hander.currentElement.appendChild(node);
    }
}//appendChild and setAttributeNS are preformance key

exports.__DOMHandler = DOMHandler;
exports.normalizeLineEndings = normalizeLineEndings;
exports.DOMParser = DOMParser;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/dom.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/dom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var conventions = __webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js");

var find = conventions.find;
var NAMESPACE = conventions.NAMESPACE;

/**
 * A prerequisite for `[].filter`, to drop elements that are empty
 * @param {string} input
 * @returns {boolean}
 */
function notEmptyString (input) {
	return input !== ''
}
/**
 * @see https://infra.spec.whatwg.org/#split-on-ascii-whitespace
 * @see https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * @param {string} input
 * @returns {string[]} (can be empty)
 */
function splitOnASCIIWhitespace(input) {
	// U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
	return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : []
}

/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * @param {string} element
 * @returns {Record<string, boolean | undefined>}
 */
function orderedSetReducer (current, element) {
	if (!current.hasOwnProperty(element)) {
		current[element] = true;
	}
	return current;
}

/**
 * @see https://infra.spec.whatwg.org/#ordered-set
 * @param {string} input
 * @returns {string[]}
 */
function toOrderedSet(input) {
	if (!input) return [];
	var list = splitOnASCIIWhitespace(input);
	return Object.keys(list.reduce(orderedSetReducer, {}))
}

/**
 * Uses `list.indexOf` to implement something like `Array.prototype.includes`,
 * which we can not rely on being available.
 *
 * @param {any[]} list
 * @returns {function(any): boolean}
 */
function arrayIncludes (list) {
	return function(element) {
		return list && list.indexOf(element) !== -1;
	}
}

function copy(src,dest){
	for(var p in src){
		if (Object.prototype.hasOwnProperty.call(src, p)) {
			dest[p] = src[p];
		}
	}
}

/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class,Super){
	var pt = Class.prototype;
	if(!(pt instanceof Super)){
		function t(){};
		t.prototype = Super.prototype;
		t = new t();
		copy(pt,t);
		Class.prototype = pt = t;
	}
	if(pt.constructor != Class){
		if(typeof Class != 'function'){
			console.error("unknown Class:"+Class)
		}
		pt.constructor = Class
	}
}

// Node Types
var NodeType = {}
var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

// ExceptionCode
var ExceptionCode = {}
var ExceptionMessage = {};
var INDEX_SIZE_ERR              = ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
var DOMSTRING_SIZE_ERR          = ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
var WRONG_DOCUMENT_ERR          = ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
var INVALID_CHARACTER_ERR       = ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
var NO_DATA_ALLOWED_ERR         = ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
var NOT_SUPPORTED_ERR           = ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
//level2
var INVALID_STATE_ERR        	= ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
var SYNTAX_ERR               	= ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
var INVALID_MODIFICATION_ERR 	= ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
var NAMESPACE_ERR            	= ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
var INVALID_ACCESS_ERR       	= ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);

/**
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */
function DOMException(code, message) {
	if(message instanceof Error){
		var error = message;
	}else{
		error = this;
		Error.call(this, ExceptionMessage[code]);
		this.message = ExceptionMessage[code];
		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	error.code = code;
	if(message) this.message = this.message + ": " + message;
	return error;
};
DOMException.prototype = Error.prototype;
copy(ExceptionCode,DOMException)

/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {
};
NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
	 * @standard level1
	 */
	length:0,
	/**
	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
	 * @standard level1
	 * @param index  unsigned long
	 *   Index into the collection.
	 * @return Node
	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
	 */
	item: function(index) {
		return index >= 0 && index < this.length ? this[index] : null;
	},
	toString:function(isHTML,nodeFilter){
		for(var buf = [], i = 0;i<this.length;i++){
			serializeToString(this[i],buf,isHTML,nodeFilter);
		}
		return buf.join('');
	},
	/**
	 * @private
	 * @param {function (Node):boolean} predicate
	 * @returns {Node[]}
	 */
	filter: function (predicate) {
		return Array.prototype.filter.call(this, predicate);
	},
	/**
	 * @private
	 * @param {Node} item
	 * @returns {number}
	 */
	indexOf: function (item) {
		return Array.prototype.indexOf.call(this, item);
	},
};

function LiveNodeList(node,refresh){
	this._node = node;
	this._refresh = refresh
	_updateLiveList(this);
}
function _updateLiveList(list){
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if (list._inc !== inc) {
		var ls = list._refresh(list._node);
		__set__(list,'length',ls.length);
		if (!list.$$length || ls.length < list.$$length) {
			for (var i = ls.length; i in list; i++) {
				if (Object.prototype.hasOwnProperty.call(list, i)) {
					delete list[i];
				}
			}
		}
		copy(ls,list);
		list._inc = inc;
	}
}
LiveNodeList.prototype.item = function(i){
	_updateLiveList(this);
	return this[i] || null;
}

_extends(LiveNodeList,NodeList);

/**
 * Objects implementing the NamedNodeMap interface are used
 * to represent collections of nodes that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities
 */
function NamedNodeMap() {
};

function _findNodeIndex(list,node){
	var i = list.length;
	while(i--){
		if(list[i] === node){return i}
	}
}

function _addNamedNode(el,list,newAttr,oldAttr){
	if(oldAttr){
		list[_findNodeIndex(list,oldAttr)] = newAttr;
	}else{
		list[list.length++] = newAttr;
	}
	if(el){
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if(doc){
			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
			_onAddAttribute(doc,el,newAttr);
		}
	}
}
function _removeNamedNode(el,list,attr){
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list,attr);
	if(i>=0){
		var lastIndex = list.length-1
		while(i<lastIndex){
			list[i] = list[++i]
		}
		list.length = lastIndex;
		if(el){
			var doc = el.ownerDocument;
			if(doc){
				_onRemoveAttribute(doc,el,attr);
				attr.ownerElement = null;
			}
		}
	}else{
		throw new DOMException(NOT_FOUND_ERR,new Error(el.tagName+'@'+attr))
	}
}
NamedNodeMap.prototype = {
	length:0,
	item:NodeList.prototype.item,
	getNamedItem: function(key) {
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
		//console.log()
		var i = this.length;
		while(i--){
			var attr = this[i];
			//console.log(attr.nodeName,key)
			if(attr.nodeName == key){
				return attr;
			}
		}
	},
	setNamedItem: function(attr) {
		var el = attr.ownerElement;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItem(attr.nodeName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},
	/* returns Node */
	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
		var el = attr.ownerElement, oldAttr;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},

	/* returns Node */
	removeNamedItem: function(key) {
		var attr = this.getNamedItem(key);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;


	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR

	//for level2
	removeNamedItemNS:function(namespaceURI,localName){
		var attr = this.getNamedItemNS(namespaceURI,localName);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
	},
	getNamedItemNS: function(namespaceURI, localName) {
		var i = this.length;
		while(i--){
			var node = this[i];
			if(node.localName == localName && node.namespaceURI == namespaceURI){
				return node;
			}
		}
		return null;
	}
};

/**
 * The DOMImplementation interface represents an object providing methods
 * which are not dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * __The individual methods describe the differences compared to the specs.__
 *
 * @constructor
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 */
function DOMImplementation() {
}

DOMImplementation.prototype = {
	/**
	 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
	 * The different implementations fairly diverged in what kind of features were reported.
	 * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
	 *
	 * @deprecated It is deprecated and modern browsers return true in all cases.
	 *
	 * @param {string} feature
	 * @param {string} [version]
	 * @returns {boolean} always true
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
	 */
	hasFeature: function(feature, version) {
			return true;
	},
	/**
	 * Creates an XML Document object of the specified type with its document element.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
	 * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string|null} namespaceURI
	 * @param {string} qualifiedName
	 * @param {DocumentType=null} doctype
	 * @returns {Document}
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocument: function(namespaceURI,  qualifiedName, doctype){
		var doc = new Document();
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype || null;
		if (doctype){
			doc.appendChild(doctype);
		}
		if (qualifiedName){
			var root = doc.createElementNS(namespaceURI, qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	/**
	 * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
	 *
	 * __This behavior is slightly different from the in the specs__:
	 * - this implementation is not validating names or qualified names
	 *   (when parsing XML strings, the SAX parser takes care of that)
	 *
	 * @param {string} qualifiedName
	 * @param {string} [publicId]
	 * @param {string} [systemId]
	 * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
	 * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
	 *
	 * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
	 * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
	 * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
	 */
	createDocumentType: function(qualifiedName, publicId, systemId){
		var node = new DocumentType();
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId || '';
		node.systemId = systemId || '';

		return node;
	}
};


/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {
};

Node.prototype = {
	firstChild : null,
	lastChild : null,
	previousSibling : null,
	nextSibling : null,
	attributes : null,
	parentNode : null,
	childNodes : null,
	ownerDocument : null,
	nodeValue : null,
	namespaceURI : null,
	prefix : null,
	localName : null,
	// Modified in DOM Level 2:
	insertBefore:function(newChild, refChild){//raises
		return _insertBefore(this,newChild,refChild);
	},
	replaceChild:function(newChild, oldChild){//raises
		_insertBefore(this, newChild,oldChild, assertPreReplacementValidityInDocument);
		if(oldChild){
			this.removeChild(oldChild);
		}
	},
	removeChild:function(oldChild){
		return _removeChild(this,oldChild);
	},
	appendChild:function(newChild){
		return this.insertBefore(newChild,null);
	},
	hasChildNodes:function(){
		return this.firstChild != null;
	},
	cloneNode:function(deep){
		return cloneNode(this.ownerDocument||this,this,deep);
	},
	// Modified in DOM Level 2:
	normalize:function(){
		var child = this.firstChild;
		while(child){
			var next = child.nextSibling;
			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
				this.removeChild(next);
				child.appendData(next.data);
			}else{
				child.normalize();
				child = next;
			}
		}
	},
  	// Introduced in DOM Level 2:
	isSupported:function(feature, version){
		return this.ownerDocument.implementation.hasFeature(feature,version);
	},
    // Introduced in DOM Level 2:
    hasAttributes:function(){
    	return this.attributes.length>0;
    },
	/**
	 * Look up the prefix associated to the given namespace URI, starting from this node.
	 * **The default namespace declarations are ignored by this method.**
	 * See Namespace Prefix Lookup for details on the algorithm used by this method.
	 *
	 * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
	 *
	 * @param {string | null} namespaceURI
	 * @returns {string | null}
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
	 * @see https://github.com/xmldom/xmldom/issues/322
	 */
    lookupPrefix:function(namespaceURI){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			for(var n in map){
						if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
							return n;
						}
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI:function(prefix){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			if(Object.prototype.hasOwnProperty.call(map, prefix)){
    				return map[prefix] ;
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace:function(namespaceURI){
    	var prefix = this.lookupPrefix(namespaceURI);
    	return prefix == null;
    }
};


function _xmlEncoder(c){
	return c == '<' && '&lt;' ||
         c == '>' && '&gt;' ||
         c == '&' && '&amp;' ||
         c == '"' && '&quot;' ||
         '&#'+c.charCodeAt()+';'
}


copy(NodeType,Node);
copy(NodeType,Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node,callback){
	if(callback(node)){
		return true;
	}
	if(node = node.firstChild){
		do{
			if(_visitNode(node,callback)){return true}
        }while(node=node.nextSibling)
    }
}



function Document(){
	this.ownerDocument = this;
}

function _onAddAttribute(doc,el,newAttr){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value
	}
}

function _onRemoveAttribute(doc,el,newAttr,remove){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns === NAMESPACE.XMLNS){
		//update namespace
		delete el._nsMap[newAttr.prefix?newAttr.localName:'']
	}
}

/**
 * Updates `el.childNodes`, updating the indexed items and it's `length`.
 * Passing `newChild` means it will be appended.
 * Otherwise it's assumed that an item has been removed,
 * and `el.firstNode` and it's `.nextSibling` are used
 * to walk the current list of child nodes.
 *
 * @param {Document} doc
 * @param {Node} el
 * @param {Node} [newChild]
 * @private
 */
function _onUpdateChild (doc, el, newChild) {
	if(doc && doc._inc){
		doc._inc++;
		//update childNodes
		var cs = el.childNodes;
		if (newChild) {
			cs[cs.length++] = newChild;
		} else {
			var child = el.firstChild;
			var i = 0;
			while (child) {
				cs[i++] = child;
				child = child.nextSibling;
			}
			cs.length = i;
			delete cs[cs.length];
		}
	}
}

/**
 * Removes the connections between `parentNode` and `child`
 * and any existing `child.previousSibling` or `child.nextSibling`.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 *
 * @param {Node} parentNode
 * @param {Node} child
 * @returns {Node} the child that was removed.
 * @private
 */
function _removeChild (parentNode, child) {
	var previous = child.previousSibling;
	var next = child.nextSibling;
	if (previous) {
		previous.nextSibling = next;
	} else {
		parentNode.firstChild = next;
	}
	if (next) {
		next.previousSibling = previous;
	} else {
		parentNode.lastChild = previous;
	}
	child.parentNode = null;
	child.previousSibling = null;
	child.nextSibling = null;
	_onUpdateChild(parentNode.ownerDocument, parentNode);
	return child;
}

/**
 * Returns `true` if `node` can be a parent for insertion.
 * @param {Node} node
 * @returns {boolean}
 */
function hasValidParentNodeType(node) {
	return (
		node &&
		(node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE)
	);
}

/**
 * Returns `true` if `node` can be inserted according to it's `nodeType`.
 * @param {Node} node
 * @returns {boolean}
 */
function hasInsertableNodeType(node) {
	return (
		node &&
		(isElementNode(node) ||
			isTextNode(node) ||
			isDocTypeNode(node) ||
			node.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
			node.nodeType === Node.COMMENT_NODE ||
			node.nodeType === Node.PROCESSING_INSTRUCTION_NODE)
	);
}

/**
 * Returns true if `node` is a DOCTYPE node
 * @param {Node} node
 * @returns {boolean}
 */
function isDocTypeNode(node) {
	return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
}

/**
 * Returns true if the node is an element
 * @param {Node} node
 * @returns {boolean}
 */
function isElementNode(node) {
	return node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Returns true if `node` is a text node
 * @param {Node} node
 * @returns {boolean}
 */
function isTextNode(node) {
	return node && node.nodeType === Node.TEXT_NODE;
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Document} doc The document node
 * @param {Node} child the node that would become the nextSibling if the element would be inserted
 * @returns {boolean} `true` if an element can be inserted before child
 * @private
 * https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function isElementInsertionPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];
	if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Node} doc The document node
 * @param {Node} child the node that would become the nextSibling if the element would be inserted
 * @returns {boolean} `true` if an element can be inserted before child
 * @private
 * https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function isElementReplacementPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];

	function hasElementChildThatIsNotChild(node) {
		return isElementNode(node) && node !== child;
	}

	if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * @private
 * Steps 1-5 of the checks before inserting and before replacing a child are the same.
 *
 * @param {Node} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node=} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidity1to5(parent, node, child) {
	// 1. If `parent` is not a Document, DocumentFragment, or Element node, then throw a "HierarchyRequestError" DOMException.
	if (!hasValidParentNodeType(parent)) {
		throw new DOMException(HIERARCHY_REQUEST_ERR, 'Unexpected parent node type ' + parent.nodeType);
	}
	// 2. If `node` is a host-including inclusive ancestor of `parent`, then throw a "HierarchyRequestError" DOMException.
	// not implemented!
	// 3. If `child` is non-null and its parent is not `parent`, then throw a "NotFoundError" DOMException.
	if (child && child.parentNode !== parent) {
		throw new DOMException(NOT_FOUND_ERR, 'child not in parent');
	}
	if (
		// 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
		!hasInsertableNodeType(node) ||
		// 5. If either `node` is a Text node and `parent` is a document,
		// the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
		// || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
		// or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
		(isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE)
	) {
		throw new DOMException(
			HIERARCHY_REQUEST_ERR,
			'Unexpected node type ' + node.nodeType + ' for parent node type ' + parent.nodeType
		);
	}
}

/**
 * @private
 * Step 6 of the checks before inserting and before replacing a child are different.
 *
 * @param {Document} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node | undefined} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If node has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child,
		// `child` is a doctype, or `child` is non-null and a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child, `child` is a doctype,
		// or `child` is non-null and a doctype is following `child`.
		if (!isElementInsertionPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		// `parent` has a doctype child,
		if (find(parentChildNodes, isDocTypeNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// `child` is non-null and an element is preceding `child`,
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
		// or `child` is null and `parent` has an element child.
		if (!child && parentElementChild) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can not be appended since element is present');
		}
	}
}

/**
 * @private
 * Step 6 of the checks before inserting and before replacing a child are different.
 *
 * @param {Document} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node | undefined} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreReplacementValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If `node` has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child that is not `child` or a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child that is not `child` or a doctype is following `child`.
		if (!isElementReplacementPossible(parent, child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		function hasDoctypeChildThatIsNotChild(node) {
			return isDocTypeNode(node) && node !== child;
		}

		// `parent` has a doctype child that is not `child`,
		if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// or an element is preceding `child`.
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
	}
}

/**
 * @private
 * @param {Node} parent the parent node to insert `node` into
 * @param {Node} node the node to insert
 * @param {Node=} child the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws DOMException for several node combinations that would create a DOM that is not well-formed.
 * @throws DOMException if `child` is provided but is not a child of `parent`.
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function _insertBefore(parent, node, child, _inDocumentAssertion) {
	// To ensure pre-insertion validity of a node into a parent before a child, run these steps:
	assertPreInsertionValidity1to5(parent, node, child);

	// If parent is a document, and any of the statements below, switched on the interface node implements,
	// are true, then throw a "HierarchyRequestError" DOMException.
	if (parent.nodeType === Node.DOCUMENT_NODE) {
		(_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
	}

	var cp = node.parentNode;
	if(cp){
		cp.removeChild(node);//remove and update
	}
	if(node.nodeType === DOCUMENT_FRAGMENT_NODE){
		var newFirst = node.firstChild;
		if (newFirst == null) {
			return node;
		}
		var newLast = node.lastChild;
	}else{
		newFirst = newLast = node;
	}
	var pre = child ? child.previousSibling : parent.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = child;


	if(pre){
		pre.nextSibling = newFirst;
	}else{
		parent.firstChild = newFirst;
	}
	if(child == null){
		parent.lastChild = newLast;
	}else{
		child.previousSibling = newLast;
	}
	do{
		newFirst.parentNode = parent;
	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
	_onUpdateChild(parent.ownerDocument||parent, parent);
	//console.log(parent.lastChild.nextSibling == null)
	if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
		node.firstChild = node.lastChild = null;
	}
	return node;
}

/**
 * Appends `newChild` to `parentNode`.
 * If `newChild` is already connected to a `parentNode` it is first removed from it.
 *
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 * @param {Node} parentNode
 * @param {Node} newChild
 * @returns {Node}
 * @private
 */
function _appendSingleChild (parentNode, newChild) {
	if (newChild.parentNode) {
		newChild.parentNode.removeChild(newChild);
	}
	newChild.parentNode = parentNode;
	newChild.previousSibling = parentNode.lastChild;
	newChild.nextSibling = null;
	if (newChild.previousSibling) {
		newChild.previousSibling.nextSibling = newChild;
	} else {
		parentNode.firstChild = newChild;
	}
	parentNode.lastChild = newChild;
	_onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
	return newChild;
}

Document.prototype = {
	//implementation : null,
	nodeName :  '#document',
	nodeType :  DOCUMENT_NODE,
	/**
	 * The DocumentType node of the document.
	 *
	 * @readonly
	 * @type DocumentType
	 */
	doctype :  null,
	documentElement :  null,
	_inc : 1,

	insertBefore :  function(newChild, refChild){//raises
		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
			var child = newChild.firstChild;
			while(child){
				var next = child.nextSibling;
				this.insertBefore(child,refChild);
				child = next;
			}
			return newChild;
		}
		_insertBefore(this, newChild, refChild);
		newChild.ownerDocument = this;
		if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
			this.documentElement = newChild;
		}

		return newChild;
	},
	removeChild :  function(oldChild){
		if(this.documentElement == oldChild){
			this.documentElement = null;
		}
		return _removeChild(this,oldChild);
	},
	replaceChild: function (newChild, oldChild) {
		//raises
		_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
		newChild.ownerDocument = this;
		if (oldChild) {
			this.removeChild(oldChild);
		}
		if (isElementNode(newChild)) {
			this.documentElement = newChild;
		}
	},
	// Introduced in DOM Level 2:
	importNode : function(importedNode,deep){
		return importNode(this,importedNode,deep);
	},
	// Introduced in DOM Level 2:
	getElementById :	function(id){
		var rtv = null;
		_visitNode(this.documentElement,function(node){
			if(node.nodeType == ELEMENT_NODE){
				if(node.getAttribute('id') == id){
					rtv = node;
					return true;
				}
			}
		})
		return rtv;
	},

	/**
	 * The `getElementsByClassName` method of `Document` interface returns an array-like object
	 * of all child elements which have **all** of the given class name(s).
	 *
	 * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
	 *
	 *
	 * Warning: This is a live LiveNodeList.
	 * Changes in the DOM will reflect in the array as the changes occur.
	 * If an element selected by this array no longer qualifies for the selector,
	 * it will automatically be removed. Be aware of this for iteration purposes.
	 *
	 * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
	 */
	getElementsByClassName: function(classNames) {
		var classNamesSet = toOrderedSet(classNames)
		return new LiveNodeList(this, function(base) {
			var ls = [];
			if (classNamesSet.length > 0) {
				_visitNode(base.documentElement, function(node) {
					if(node !== base && node.nodeType === ELEMENT_NODE) {
						var nodeClassNames = node.getAttribute('class')
						// can be null if the attribute does not exist
						if (nodeClassNames) {
							// before splitting and iterating just compare them for the most common case
							var matches = classNames === nodeClassNames;
							if (!matches) {
								var nodeClassNamesSet = toOrderedSet(nodeClassNames)
								matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet))
							}
							if(matches) {
								ls.push(node);
							}
						}
					}
				});
			}
			return ls;
		});
	},

	//document factory method:
	createElement :	function(tagName){
		var node = new Element();
		node.ownerDocument = this;
		node.nodeName = tagName;
		node.tagName = tagName;
		node.localName = tagName;
		node.childNodes = new NodeList();
		var attrs	= node.attributes = new NamedNodeMap();
		attrs._ownerElement = node;
		return node;
	},
	createDocumentFragment :	function(){
		var node = new DocumentFragment();
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	createTextNode :	function(data){
		var node = new Text();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createComment :	function(data){
		var node = new Comment();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createCDATASection :	function(data){
		var node = new CDATASection();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createProcessingInstruction :	function(target,data){
		var node = new ProcessingInstruction();
		node.ownerDocument = this;
		node.tagName = node.nodeName = node.target = target;
		node.nodeValue = node.data = data;
		return node;
	},
	createAttribute :	function(name){
		var node = new Attr();
		node.ownerDocument	= this;
		node.name = name;
		node.nodeName	= name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	createEntityReference :	function(name){
		var node = new EntityReference();
		node.ownerDocument	= this;
		node.nodeName	= name;
		return node;
	},
	// Introduced in DOM Level 2:
	createElementNS :	function(namespaceURI,qualifiedName){
		var node = new Element();
		var pl = qualifiedName.split(':');
		var attrs	= node.attributes = new NamedNodeMap();
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = namespaceURI;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	createAttributeNS :	function(namespaceURI,qualifiedName){
		var node = new Attr();
		var pl = qualifiedName.split(':');
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.namespaceURI = namespaceURI;
		node.specified = true;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		return node;
	}
};
_extends(Document,Node);


function Element() {
	this._nsMap = {};
};
Element.prototype = {
	nodeType : ELEMENT_NODE,
	hasAttribute : function(name){
		return this.getAttributeNode(name)!=null;
	},
	getAttribute : function(name){
		var attr = this.getAttributeNode(name);
		return attr && attr.value || '';
	},
	getAttributeNode : function(name){
		return this.attributes.getNamedItem(name);
	},
	setAttribute : function(name, value){
		var attr = this.ownerDocument.createAttribute(name);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	removeAttribute : function(name){
		var attr = this.getAttributeNode(name)
		attr && this.removeAttributeNode(attr);
	},

	//four real opeartion method
	appendChild:function(newChild){
		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
			return this.insertBefore(newChild,null);
		}else{
			return _appendSingleChild(this,newChild);
		}
	},
	setAttributeNode : function(newAttr){
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS : function(newAttr){
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode : function(oldAttr){
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS : function(namespaceURI, localName){
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},

	hasAttributeNS : function(namespaceURI, localName){
		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
	},
	getAttributeNS : function(namespaceURI, localName){
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr && attr.value || '';
	},
	setAttributeNS : function(namespaceURI, qualifiedName, value){
		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	getAttributeNodeNS : function(namespaceURI, localName){
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},

	getElementsByTagName : function(tagName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
					ls.push(node);
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS : function(namespaceURI, localName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)){
					ls.push(node);
				}
			});
			return ls;

		});
	}
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


_extends(Element,Node);
function Attr() {
};
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr,Node);


function CharacterData() {
};
CharacterData.prototype = {
	data : '',
	substringData : function(offset, count) {
		return this.data.substring(offset, offset+count);
	},
	appendData: function(text) {
		text = this.data+text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function(offset,text) {
		this.replaceData(offset,0,text);

	},
	appendChild:function(newChild){
		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])
	},
	deleteData: function(offset, count) {
		this.replaceData(offset,count,"");
	},
	replaceData: function(offset, count, text) {
		var start = this.data.substring(0,offset);
		var end = this.data.substring(offset+count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	}
}
_extends(CharacterData,Node);
function Text() {
};
Text.prototype = {
	nodeName : "#text",
	nodeType : TEXT_NODE,
	splitText : function(offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if(this.parentNode){
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	}
}
_extends(Text,CharacterData);
function Comment() {
};
Comment.prototype = {
	nodeName : "#comment",
	nodeType : COMMENT_NODE
}
_extends(Comment,CharacterData);

function CDATASection() {
};
CDATASection.prototype = {
	nodeName : "#cdata-section",
	nodeType : CDATA_SECTION_NODE
}
_extends(CDATASection,CharacterData);


function DocumentType() {
};
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType,Node);

function Notation() {
};
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation,Node);

function Entity() {
};
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity,Node);

function EntityReference() {
};
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference,Node);

function DocumentFragment() {
};
DocumentFragment.prototype.nodeName =	"#document-fragment";
DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment,Node);


function ProcessingInstruction() {
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction,Node);
function XMLSerializer(){}
XMLSerializer.prototype.serializeToString = function(node,isHtml,nodeFilter){
	return nodeSerializeToString.call(node,isHtml,nodeFilter);
}
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml,nodeFilter){
	var buf = [];
	var refNode = this.nodeType == 9 && this.documentElement || this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;

	if(uri && prefix == null){
		//console.log(prefix)
		var prefix = refNode.lookupPrefix(uri);
		if(prefix == null){
			//isHTML = true;
			var visibleNamespaces=[
			{namespace:uri,prefix:null}
			//{namespace:uri,prefix:''}
			]
		}
	}
	serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);
	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
	return buf.join('');
}

function needNamespaceDefine(node, isHTML, visibleNamespaces) {
	var prefix = node.prefix || '';
	var uri = node.namespaceURI;
	// According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
	// and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
	// > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
	// in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
	// and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
	// > [...] Furthermore, the attribute value [...] must not be an empty string.
	// so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
	if (!uri) {
		return false;
	}
	if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
		return false;
	}

	var i = visibleNamespaces.length
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		if (ns.prefix === prefix) {
			return ns.namespace !== uri;
		}
	}
	return true;
}
/**
 * Well-formed constraint: No < in Attribute Values
 * > The replacement text of any entity referred to directly or indirectly
 * > in an attribute value must not contain a <.
 * @see https://www.w3.org/TR/xml11/#CleanAttrVals
 * @see https://www.w3.org/TR/xml11/#NT-AttValue
 *
 * Literal whitespace other than space that appear in attribute values
 * are serialized as their entity references, so they will be preserved.
 * (In contrast to whitespace literals in the input which are normalized to spaces)
 * @see https://www.w3.org/TR/xml11/#AVNormalize
 * @see https://w3c.github.io/DOM-Parsing/#serializing-an-element-s-attributes
 */
function addSerializedAttribute(buf, qualifiedName, value) {
	buf.push(' ', qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"')
}

function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){
	if (!visibleNamespaces) {
		visibleNamespaces = [];
	}

	if(nodeFilter){
		node = nodeFilter(node);
		if(node){
			if(typeof node == 'string'){
				buf.push(node);
				return;
			}
		}else{
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}

	switch(node.nodeType){
	case ELEMENT_NODE:
		var attrs = node.attributes;
		var len = attrs.length;
		var child = node.firstChild;
		var nodeName = node.tagName;

		isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML

		var prefixedNodeName = nodeName
		if (!isHTML && !node.prefix && node.namespaceURI) {
			var defaultNS
			// lookup current default ns from `xmlns` attribute
			for (var ai = 0; ai < attrs.length; ai++) {
				if (attrs.item(ai).name === 'xmlns') {
					defaultNS = attrs.item(ai).value
					break
				}
			}
			if (!defaultNS) {
				// lookup current default ns in visibleNamespaces
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
						defaultNS = namespace.namespace
						break
					}
				}
			}
			if (defaultNS !== node.namespaceURI) {
				for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
					var namespace = visibleNamespaces[nsi]
					if (namespace.namespace === node.namespaceURI) {
						if (namespace.prefix) {
							prefixedNodeName = namespace.prefix + ':' + nodeName
						}
						break
					}
				}
			}
		}

		buf.push('<', prefixedNodeName);

		for(var i=0;i<len;i++){
			// add namespaces for attributes
			var attr = attrs.item(i);
			if (attr.prefix == 'xmlns') {
				visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
			}else if(attr.nodeName == 'xmlns'){
				visibleNamespaces.push({ prefix: '', namespace: attr.value });
			}
		}

		for(var i=0;i<len;i++){
			var attr = attrs.item(i);
			if (needNamespaceDefine(attr,isHTML, visibleNamespaces)) {
				var prefix = attr.prefix||'';
				var uri = attr.namespaceURI;
				addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
				visibleNamespaces.push({ prefix: prefix, namespace:uri });
			}
			serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces);
		}

		// add namespace for current node
		if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
			var prefix = node.prefix||'';
			var uri = node.namespaceURI;
			addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
			visibleNamespaces.push({ prefix: prefix, namespace:uri });
		}

		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
			buf.push('>');
			//if is cdata child node
			if(isHTML && /^script$/i.test(nodeName)){
				while(child){
					if(child.data){
						buf.push(child.data);
					}else{
						serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					}
					child = child.nextSibling;
				}
			}else
			{
				while(child){
					serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
					child = child.nextSibling;
				}
			}
			buf.push('</',prefixedNodeName,'>');
		}else{
			buf.push('/>');
		}
		// remove added visible namespaces
		//visibleNamespaces.length = startVisibleNamespaces;
		return;
	case DOCUMENT_NODE:
	case DOCUMENT_FRAGMENT_NODE:
		var child = node.firstChild;
		while(child){
			serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
			child = child.nextSibling;
		}
		return;
	case ATTRIBUTE_NODE:
		return addSerializedAttribute(buf, node.name, node.value);
	case TEXT_NODE:
		/**
		 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
		 * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
		 * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
		 * `&amp;` and `&lt;` respectively.
		 * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
		 * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
		 * when that string is not marking the end of a CDATA section.
		 *
		 * In the content of elements, character data is any string of characters
		 * which does not contain the start-delimiter of any markup
		 * and does not include the CDATA-section-close delimiter, `]]>`.
		 *
		 * @see https://www.w3.org/TR/xml/#NT-CharData
		 * @see https://w3c.github.io/DOM-Parsing/#xml-serializing-a-text-node
		 */
		return buf.push(node.data
			.replace(/[<&>]/g,_xmlEncoder)
		);
	case CDATA_SECTION_NODE:
		return buf.push( '<![CDATA[',node.data,']]>');
	case COMMENT_NODE:
		return buf.push( "<!--",node.data,"-->");
	case DOCUMENT_TYPE_NODE:
		var pubid = node.publicId;
		var sysid = node.systemId;
		buf.push('<!DOCTYPE ',node.name);
		if(pubid){
			buf.push(' PUBLIC ', pubid);
			if (sysid && sysid!='.') {
				buf.push(' ', sysid);
			}
			buf.push('>');
		}else if(sysid && sysid!='.'){
			buf.push(' SYSTEM ', sysid, '>');
		}else{
			var sub = node.internalSubset;
			if(sub){
				buf.push(" [",sub,"]");
			}
			buf.push(">");
		}
		return;
	case PROCESSING_INSTRUCTION_NODE:
		return buf.push( "<?",node.target," ",node.data,"?>");
	case ENTITY_REFERENCE_NODE:
		return buf.push( '&',node.nodeName,';');
	//case ENTITY_NODE:
	//case NOTATION_NODE:
	default:
		buf.push('??',node.nodeName);
	}
}
function importNode(doc,node,deep){
	var node2;
	switch (node.nodeType) {
	case ELEMENT_NODE:
		node2 = node.cloneNode(false);
		node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
	case DOCUMENT_FRAGMENT_NODE:
		break;
	case ATTRIBUTE_NODE:
		deep = true;
		break;
	//case ENTITY_REFERENCE_NODE:
	//case PROCESSING_INSTRUCTION_NODE:
	////case TEXT_NODE:
	//case CDATA_SECTION_NODE:
	//case COMMENT_NODE:
	//	deep = false;
	//	break;
	//case DOCUMENT_NODE:
	//case DOCUMENT_TYPE_NODE:
	//cannot be imported.
	//case ENTITY_NODE:
	//case NOTATION_NODE：
	//can not hit in level3
	//default:throw e;
	}
	if(!node2){
		node2 = node.cloneNode(false);//false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(importNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function cloneNode(doc,node,deep){
	var node2 = new node.constructor();
	for (var n in node) {
		if (Object.prototype.hasOwnProperty.call(node, n)) {
			var v = node[n];
			if (typeof v != "object") {
				if (v != node2[n]) {
					node2[n] = v;
				}
			}
		}
	}
	if(node.childNodes){
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
	case ELEMENT_NODE:
		var attrs	= node.attributes;
		var attrs2	= node2.attributes = new NamedNodeMap();
		var len = attrs.length
		attrs2._ownerElement = node2;
		for(var i=0;i<len;i++){
			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
		}
		break;;
	case ATTRIBUTE_NODE:
		deep = true;
	}
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(cloneNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object,key,value){
	object[key] = value
}
//do dynamic
try{
	if(Object.defineProperty){
		Object.defineProperty(LiveNodeList.prototype,'length',{
			get:function(){
				_updateLiveList(this);
				return this.$$length;
			}
		});

		Object.defineProperty(Node.prototype,'textContent',{
			get:function(){
				return getTextContent(this);
			},

			set:function(data){
				switch(this.nodeType){
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					while(this.firstChild){
						this.removeChild(this.firstChild);
					}
					if(data || String(data)){
						this.appendChild(this.ownerDocument.createTextNode(data));
					}
					break;

				default:
					this.data = data;
					this.value = data;
					this.nodeValue = data;
				}
			}
		})

		function getTextContent(node){
			switch(node.nodeType){
			case ELEMENT_NODE:
			case DOCUMENT_FRAGMENT_NODE:
				var buf = [];
				node = node.firstChild;
				while(node){
					if(node.nodeType!==7 && node.nodeType !==8){
						buf.push(getTextContent(node));
					}
					node = node.nextSibling;
				}
				return buf.join('');
			default:
				return node.nodeValue;
			}
		}

		__set__ = function(object,key,value){
			//console.log(value)
			object['$$'+key] = value
		}
	}
}catch(e){//ie8
}

//if(typeof require == 'function'){
	exports.DocumentType = DocumentType;
	exports.DOMException = DOMException;
	exports.DOMImplementation = DOMImplementation;
	exports.Element = Element;
	exports.Node = Node;
	exports.NodeList = NodeList;
	exports.XMLSerializer = XMLSerializer;
//}


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/entities.js":
/*!*****************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/entities.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var freeze = (__webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").freeze);

/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML Wikipedia
 */
exports.XML_ENTITIES = freeze({
	amp: '&',
	apos: "'",
	gt: '>',
	lt: '<',
	quot: '"',
});

/**
 * A map of all entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see XML_ENTITIES
 * @see DOMParser.parseFromString
 * @see DOMImplementation.prototype.createHTMLDocument
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5) Spec
 * @see https://html.spec.whatwg.org/entities.json JSON
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML Wikpedia (XHTML)
 */
exports.HTML_ENTITIES = freeze({
	Aacute: '\u00C1',
	aacute: '\u00E1',
	Abreve: '\u0102',
	abreve: '\u0103',
	ac: '\u223E',
	acd: '\u223F',
	acE: '\u223E\u0333',
	Acirc: '\u00C2',
	acirc: '\u00E2',
	acute: '\u00B4',
	Acy: '\u0410',
	acy: '\u0430',
	AElig: '\u00C6',
	aelig: '\u00E6',
	af: '\u2061',
	Afr: '\uD835\uDD04',
	afr: '\uD835\uDD1E',
	Agrave: '\u00C0',
	agrave: '\u00E0',
	alefsym: '\u2135',
	aleph: '\u2135',
	Alpha: '\u0391',
	alpha: '\u03B1',
	Amacr: '\u0100',
	amacr: '\u0101',
	amalg: '\u2A3F',
	AMP: '\u0026',
	amp: '\u0026',
	And: '\u2A53',
	and: '\u2227',
	andand: '\u2A55',
	andd: '\u2A5C',
	andslope: '\u2A58',
	andv: '\u2A5A',
	ang: '\u2220',
	ange: '\u29A4',
	angle: '\u2220',
	angmsd: '\u2221',
	angmsdaa: '\u29A8',
	angmsdab: '\u29A9',
	angmsdac: '\u29AA',
	angmsdad: '\u29AB',
	angmsdae: '\u29AC',
	angmsdaf: '\u29AD',
	angmsdag: '\u29AE',
	angmsdah: '\u29AF',
	angrt: '\u221F',
	angrtvb: '\u22BE',
	angrtvbd: '\u299D',
	angsph: '\u2222',
	angst: '\u00C5',
	angzarr: '\u237C',
	Aogon: '\u0104',
	aogon: '\u0105',
	Aopf: '\uD835\uDD38',
	aopf: '\uD835\uDD52',
	ap: '\u2248',
	apacir: '\u2A6F',
	apE: '\u2A70',
	ape: '\u224A',
	apid: '\u224B',
	apos: '\u0027',
	ApplyFunction: '\u2061',
	approx: '\u2248',
	approxeq: '\u224A',
	Aring: '\u00C5',
	aring: '\u00E5',
	Ascr: '\uD835\uDC9C',
	ascr: '\uD835\uDCB6',
	Assign: '\u2254',
	ast: '\u002A',
	asymp: '\u2248',
	asympeq: '\u224D',
	Atilde: '\u00C3',
	atilde: '\u00E3',
	Auml: '\u00C4',
	auml: '\u00E4',
	awconint: '\u2233',
	awint: '\u2A11',
	backcong: '\u224C',
	backepsilon: '\u03F6',
	backprime: '\u2035',
	backsim: '\u223D',
	backsimeq: '\u22CD',
	Backslash: '\u2216',
	Barv: '\u2AE7',
	barvee: '\u22BD',
	Barwed: '\u2306',
	barwed: '\u2305',
	barwedge: '\u2305',
	bbrk: '\u23B5',
	bbrktbrk: '\u23B6',
	bcong: '\u224C',
	Bcy: '\u0411',
	bcy: '\u0431',
	bdquo: '\u201E',
	becaus: '\u2235',
	Because: '\u2235',
	because: '\u2235',
	bemptyv: '\u29B0',
	bepsi: '\u03F6',
	bernou: '\u212C',
	Bernoullis: '\u212C',
	Beta: '\u0392',
	beta: '\u03B2',
	beth: '\u2136',
	between: '\u226C',
	Bfr: '\uD835\uDD05',
	bfr: '\uD835\uDD1F',
	bigcap: '\u22C2',
	bigcirc: '\u25EF',
	bigcup: '\u22C3',
	bigodot: '\u2A00',
	bigoplus: '\u2A01',
	bigotimes: '\u2A02',
	bigsqcup: '\u2A06',
	bigstar: '\u2605',
	bigtriangledown: '\u25BD',
	bigtriangleup: '\u25B3',
	biguplus: '\u2A04',
	bigvee: '\u22C1',
	bigwedge: '\u22C0',
	bkarow: '\u290D',
	blacklozenge: '\u29EB',
	blacksquare: '\u25AA',
	blacktriangle: '\u25B4',
	blacktriangledown: '\u25BE',
	blacktriangleleft: '\u25C2',
	blacktriangleright: '\u25B8',
	blank: '\u2423',
	blk12: '\u2592',
	blk14: '\u2591',
	blk34: '\u2593',
	block: '\u2588',
	bne: '\u003D\u20E5',
	bnequiv: '\u2261\u20E5',
	bNot: '\u2AED',
	bnot: '\u2310',
	Bopf: '\uD835\uDD39',
	bopf: '\uD835\uDD53',
	bot: '\u22A5',
	bottom: '\u22A5',
	bowtie: '\u22C8',
	boxbox: '\u29C9',
	boxDL: '\u2557',
	boxDl: '\u2556',
	boxdL: '\u2555',
	boxdl: '\u2510',
	boxDR: '\u2554',
	boxDr: '\u2553',
	boxdR: '\u2552',
	boxdr: '\u250C',
	boxH: '\u2550',
	boxh: '\u2500',
	boxHD: '\u2566',
	boxHd: '\u2564',
	boxhD: '\u2565',
	boxhd: '\u252C',
	boxHU: '\u2569',
	boxHu: '\u2567',
	boxhU: '\u2568',
	boxhu: '\u2534',
	boxminus: '\u229F',
	boxplus: '\u229E',
	boxtimes: '\u22A0',
	boxUL: '\u255D',
	boxUl: '\u255C',
	boxuL: '\u255B',
	boxul: '\u2518',
	boxUR: '\u255A',
	boxUr: '\u2559',
	boxuR: '\u2558',
	boxur: '\u2514',
	boxV: '\u2551',
	boxv: '\u2502',
	boxVH: '\u256C',
	boxVh: '\u256B',
	boxvH: '\u256A',
	boxvh: '\u253C',
	boxVL: '\u2563',
	boxVl: '\u2562',
	boxvL: '\u2561',
	boxvl: '\u2524',
	boxVR: '\u2560',
	boxVr: '\u255F',
	boxvR: '\u255E',
	boxvr: '\u251C',
	bprime: '\u2035',
	Breve: '\u02D8',
	breve: '\u02D8',
	brvbar: '\u00A6',
	Bscr: '\u212C',
	bscr: '\uD835\uDCB7',
	bsemi: '\u204F',
	bsim: '\u223D',
	bsime: '\u22CD',
	bsol: '\u005C',
	bsolb: '\u29C5',
	bsolhsub: '\u27C8',
	bull: '\u2022',
	bullet: '\u2022',
	bump: '\u224E',
	bumpE: '\u2AAE',
	bumpe: '\u224F',
	Bumpeq: '\u224E',
	bumpeq: '\u224F',
	Cacute: '\u0106',
	cacute: '\u0107',
	Cap: '\u22D2',
	cap: '\u2229',
	capand: '\u2A44',
	capbrcup: '\u2A49',
	capcap: '\u2A4B',
	capcup: '\u2A47',
	capdot: '\u2A40',
	CapitalDifferentialD: '\u2145',
	caps: '\u2229\uFE00',
	caret: '\u2041',
	caron: '\u02C7',
	Cayleys: '\u212D',
	ccaps: '\u2A4D',
	Ccaron: '\u010C',
	ccaron: '\u010D',
	Ccedil: '\u00C7',
	ccedil: '\u00E7',
	Ccirc: '\u0108',
	ccirc: '\u0109',
	Cconint: '\u2230',
	ccups: '\u2A4C',
	ccupssm: '\u2A50',
	Cdot: '\u010A',
	cdot: '\u010B',
	cedil: '\u00B8',
	Cedilla: '\u00B8',
	cemptyv: '\u29B2',
	cent: '\u00A2',
	CenterDot: '\u00B7',
	centerdot: '\u00B7',
	Cfr: '\u212D',
	cfr: '\uD835\uDD20',
	CHcy: '\u0427',
	chcy: '\u0447',
	check: '\u2713',
	checkmark: '\u2713',
	Chi: '\u03A7',
	chi: '\u03C7',
	cir: '\u25CB',
	circ: '\u02C6',
	circeq: '\u2257',
	circlearrowleft: '\u21BA',
	circlearrowright: '\u21BB',
	circledast: '\u229B',
	circledcirc: '\u229A',
	circleddash: '\u229D',
	CircleDot: '\u2299',
	circledR: '\u00AE',
	circledS: '\u24C8',
	CircleMinus: '\u2296',
	CirclePlus: '\u2295',
	CircleTimes: '\u2297',
	cirE: '\u29C3',
	cire: '\u2257',
	cirfnint: '\u2A10',
	cirmid: '\u2AEF',
	cirscir: '\u29C2',
	ClockwiseContourIntegral: '\u2232',
	CloseCurlyDoubleQuote: '\u201D',
	CloseCurlyQuote: '\u2019',
	clubs: '\u2663',
	clubsuit: '\u2663',
	Colon: '\u2237',
	colon: '\u003A',
	Colone: '\u2A74',
	colone: '\u2254',
	coloneq: '\u2254',
	comma: '\u002C',
	commat: '\u0040',
	comp: '\u2201',
	compfn: '\u2218',
	complement: '\u2201',
	complexes: '\u2102',
	cong: '\u2245',
	congdot: '\u2A6D',
	Congruent: '\u2261',
	Conint: '\u222F',
	conint: '\u222E',
	ContourIntegral: '\u222E',
	Copf: '\u2102',
	copf: '\uD835\uDD54',
	coprod: '\u2210',
	Coproduct: '\u2210',
	COPY: '\u00A9',
	copy: '\u00A9',
	copysr: '\u2117',
	CounterClockwiseContourIntegral: '\u2233',
	crarr: '\u21B5',
	Cross: '\u2A2F',
	cross: '\u2717',
	Cscr: '\uD835\uDC9E',
	cscr: '\uD835\uDCB8',
	csub: '\u2ACF',
	csube: '\u2AD1',
	csup: '\u2AD0',
	csupe: '\u2AD2',
	ctdot: '\u22EF',
	cudarrl: '\u2938',
	cudarrr: '\u2935',
	cuepr: '\u22DE',
	cuesc: '\u22DF',
	cularr: '\u21B6',
	cularrp: '\u293D',
	Cup: '\u22D3',
	cup: '\u222A',
	cupbrcap: '\u2A48',
	CupCap: '\u224D',
	cupcap: '\u2A46',
	cupcup: '\u2A4A',
	cupdot: '\u228D',
	cupor: '\u2A45',
	cups: '\u222A\uFE00',
	curarr: '\u21B7',
	curarrm: '\u293C',
	curlyeqprec: '\u22DE',
	curlyeqsucc: '\u22DF',
	curlyvee: '\u22CE',
	curlywedge: '\u22CF',
	curren: '\u00A4',
	curvearrowleft: '\u21B6',
	curvearrowright: '\u21B7',
	cuvee: '\u22CE',
	cuwed: '\u22CF',
	cwconint: '\u2232',
	cwint: '\u2231',
	cylcty: '\u232D',
	Dagger: '\u2021',
	dagger: '\u2020',
	daleth: '\u2138',
	Darr: '\u21A1',
	dArr: '\u21D3',
	darr: '\u2193',
	dash: '\u2010',
	Dashv: '\u2AE4',
	dashv: '\u22A3',
	dbkarow: '\u290F',
	dblac: '\u02DD',
	Dcaron: '\u010E',
	dcaron: '\u010F',
	Dcy: '\u0414',
	dcy: '\u0434',
	DD: '\u2145',
	dd: '\u2146',
	ddagger: '\u2021',
	ddarr: '\u21CA',
	DDotrahd: '\u2911',
	ddotseq: '\u2A77',
	deg: '\u00B0',
	Del: '\u2207',
	Delta: '\u0394',
	delta: '\u03B4',
	demptyv: '\u29B1',
	dfisht: '\u297F',
	Dfr: '\uD835\uDD07',
	dfr: '\uD835\uDD21',
	dHar: '\u2965',
	dharl: '\u21C3',
	dharr: '\u21C2',
	DiacriticalAcute: '\u00B4',
	DiacriticalDot: '\u02D9',
	DiacriticalDoubleAcute: '\u02DD',
	DiacriticalGrave: '\u0060',
	DiacriticalTilde: '\u02DC',
	diam: '\u22C4',
	Diamond: '\u22C4',
	diamond: '\u22C4',
	diamondsuit: '\u2666',
	diams: '\u2666',
	die: '\u00A8',
	DifferentialD: '\u2146',
	digamma: '\u03DD',
	disin: '\u22F2',
	div: '\u00F7',
	divide: '\u00F7',
	divideontimes: '\u22C7',
	divonx: '\u22C7',
	DJcy: '\u0402',
	djcy: '\u0452',
	dlcorn: '\u231E',
	dlcrop: '\u230D',
	dollar: '\u0024',
	Dopf: '\uD835\uDD3B',
	dopf: '\uD835\uDD55',
	Dot: '\u00A8',
	dot: '\u02D9',
	DotDot: '\u20DC',
	doteq: '\u2250',
	doteqdot: '\u2251',
	DotEqual: '\u2250',
	dotminus: '\u2238',
	dotplus: '\u2214',
	dotsquare: '\u22A1',
	doublebarwedge: '\u2306',
	DoubleContourIntegral: '\u222F',
	DoubleDot: '\u00A8',
	DoubleDownArrow: '\u21D3',
	DoubleLeftArrow: '\u21D0',
	DoubleLeftRightArrow: '\u21D4',
	DoubleLeftTee: '\u2AE4',
	DoubleLongLeftArrow: '\u27F8',
	DoubleLongLeftRightArrow: '\u27FA',
	DoubleLongRightArrow: '\u27F9',
	DoubleRightArrow: '\u21D2',
	DoubleRightTee: '\u22A8',
	DoubleUpArrow: '\u21D1',
	DoubleUpDownArrow: '\u21D5',
	DoubleVerticalBar: '\u2225',
	DownArrow: '\u2193',
	Downarrow: '\u21D3',
	downarrow: '\u2193',
	DownArrowBar: '\u2913',
	DownArrowUpArrow: '\u21F5',
	DownBreve: '\u0311',
	downdownarrows: '\u21CA',
	downharpoonleft: '\u21C3',
	downharpoonright: '\u21C2',
	DownLeftRightVector: '\u2950',
	DownLeftTeeVector: '\u295E',
	DownLeftVector: '\u21BD',
	DownLeftVectorBar: '\u2956',
	DownRightTeeVector: '\u295F',
	DownRightVector: '\u21C1',
	DownRightVectorBar: '\u2957',
	DownTee: '\u22A4',
	DownTeeArrow: '\u21A7',
	drbkarow: '\u2910',
	drcorn: '\u231F',
	drcrop: '\u230C',
	Dscr: '\uD835\uDC9F',
	dscr: '\uD835\uDCB9',
	DScy: '\u0405',
	dscy: '\u0455',
	dsol: '\u29F6',
	Dstrok: '\u0110',
	dstrok: '\u0111',
	dtdot: '\u22F1',
	dtri: '\u25BF',
	dtrif: '\u25BE',
	duarr: '\u21F5',
	duhar: '\u296F',
	dwangle: '\u29A6',
	DZcy: '\u040F',
	dzcy: '\u045F',
	dzigrarr: '\u27FF',
	Eacute: '\u00C9',
	eacute: '\u00E9',
	easter: '\u2A6E',
	Ecaron: '\u011A',
	ecaron: '\u011B',
	ecir: '\u2256',
	Ecirc: '\u00CA',
	ecirc: '\u00EA',
	ecolon: '\u2255',
	Ecy: '\u042D',
	ecy: '\u044D',
	eDDot: '\u2A77',
	Edot: '\u0116',
	eDot: '\u2251',
	edot: '\u0117',
	ee: '\u2147',
	efDot: '\u2252',
	Efr: '\uD835\uDD08',
	efr: '\uD835\uDD22',
	eg: '\u2A9A',
	Egrave: '\u00C8',
	egrave: '\u00E8',
	egs: '\u2A96',
	egsdot: '\u2A98',
	el: '\u2A99',
	Element: '\u2208',
	elinters: '\u23E7',
	ell: '\u2113',
	els: '\u2A95',
	elsdot: '\u2A97',
	Emacr: '\u0112',
	emacr: '\u0113',
	empty: '\u2205',
	emptyset: '\u2205',
	EmptySmallSquare: '\u25FB',
	emptyv: '\u2205',
	EmptyVerySmallSquare: '\u25AB',
	emsp: '\u2003',
	emsp13: '\u2004',
	emsp14: '\u2005',
	ENG: '\u014A',
	eng: '\u014B',
	ensp: '\u2002',
	Eogon: '\u0118',
	eogon: '\u0119',
	Eopf: '\uD835\uDD3C',
	eopf: '\uD835\uDD56',
	epar: '\u22D5',
	eparsl: '\u29E3',
	eplus: '\u2A71',
	epsi: '\u03B5',
	Epsilon: '\u0395',
	epsilon: '\u03B5',
	epsiv: '\u03F5',
	eqcirc: '\u2256',
	eqcolon: '\u2255',
	eqsim: '\u2242',
	eqslantgtr: '\u2A96',
	eqslantless: '\u2A95',
	Equal: '\u2A75',
	equals: '\u003D',
	EqualTilde: '\u2242',
	equest: '\u225F',
	Equilibrium: '\u21CC',
	equiv: '\u2261',
	equivDD: '\u2A78',
	eqvparsl: '\u29E5',
	erarr: '\u2971',
	erDot: '\u2253',
	Escr: '\u2130',
	escr: '\u212F',
	esdot: '\u2250',
	Esim: '\u2A73',
	esim: '\u2242',
	Eta: '\u0397',
	eta: '\u03B7',
	ETH: '\u00D0',
	eth: '\u00F0',
	Euml: '\u00CB',
	euml: '\u00EB',
	euro: '\u20AC',
	excl: '\u0021',
	exist: '\u2203',
	Exists: '\u2203',
	expectation: '\u2130',
	ExponentialE: '\u2147',
	exponentiale: '\u2147',
	fallingdotseq: '\u2252',
	Fcy: '\u0424',
	fcy: '\u0444',
	female: '\u2640',
	ffilig: '\uFB03',
	fflig: '\uFB00',
	ffllig: '\uFB04',
	Ffr: '\uD835\uDD09',
	ffr: '\uD835\uDD23',
	filig: '\uFB01',
	FilledSmallSquare: '\u25FC',
	FilledVerySmallSquare: '\u25AA',
	fjlig: '\u0066\u006A',
	flat: '\u266D',
	fllig: '\uFB02',
	fltns: '\u25B1',
	fnof: '\u0192',
	Fopf: '\uD835\uDD3D',
	fopf: '\uD835\uDD57',
	ForAll: '\u2200',
	forall: '\u2200',
	fork: '\u22D4',
	forkv: '\u2AD9',
	Fouriertrf: '\u2131',
	fpartint: '\u2A0D',
	frac12: '\u00BD',
	frac13: '\u2153',
	frac14: '\u00BC',
	frac15: '\u2155',
	frac16: '\u2159',
	frac18: '\u215B',
	frac23: '\u2154',
	frac25: '\u2156',
	frac34: '\u00BE',
	frac35: '\u2157',
	frac38: '\u215C',
	frac45: '\u2158',
	frac56: '\u215A',
	frac58: '\u215D',
	frac78: '\u215E',
	frasl: '\u2044',
	frown: '\u2322',
	Fscr: '\u2131',
	fscr: '\uD835\uDCBB',
	gacute: '\u01F5',
	Gamma: '\u0393',
	gamma: '\u03B3',
	Gammad: '\u03DC',
	gammad: '\u03DD',
	gap: '\u2A86',
	Gbreve: '\u011E',
	gbreve: '\u011F',
	Gcedil: '\u0122',
	Gcirc: '\u011C',
	gcirc: '\u011D',
	Gcy: '\u0413',
	gcy: '\u0433',
	Gdot: '\u0120',
	gdot: '\u0121',
	gE: '\u2267',
	ge: '\u2265',
	gEl: '\u2A8C',
	gel: '\u22DB',
	geq: '\u2265',
	geqq: '\u2267',
	geqslant: '\u2A7E',
	ges: '\u2A7E',
	gescc: '\u2AA9',
	gesdot: '\u2A80',
	gesdoto: '\u2A82',
	gesdotol: '\u2A84',
	gesl: '\u22DB\uFE00',
	gesles: '\u2A94',
	Gfr: '\uD835\uDD0A',
	gfr: '\uD835\uDD24',
	Gg: '\u22D9',
	gg: '\u226B',
	ggg: '\u22D9',
	gimel: '\u2137',
	GJcy: '\u0403',
	gjcy: '\u0453',
	gl: '\u2277',
	gla: '\u2AA5',
	glE: '\u2A92',
	glj: '\u2AA4',
	gnap: '\u2A8A',
	gnapprox: '\u2A8A',
	gnE: '\u2269',
	gne: '\u2A88',
	gneq: '\u2A88',
	gneqq: '\u2269',
	gnsim: '\u22E7',
	Gopf: '\uD835\uDD3E',
	gopf: '\uD835\uDD58',
	grave: '\u0060',
	GreaterEqual: '\u2265',
	GreaterEqualLess: '\u22DB',
	GreaterFullEqual: '\u2267',
	GreaterGreater: '\u2AA2',
	GreaterLess: '\u2277',
	GreaterSlantEqual: '\u2A7E',
	GreaterTilde: '\u2273',
	Gscr: '\uD835\uDCA2',
	gscr: '\u210A',
	gsim: '\u2273',
	gsime: '\u2A8E',
	gsiml: '\u2A90',
	Gt: '\u226B',
	GT: '\u003E',
	gt: '\u003E',
	gtcc: '\u2AA7',
	gtcir: '\u2A7A',
	gtdot: '\u22D7',
	gtlPar: '\u2995',
	gtquest: '\u2A7C',
	gtrapprox: '\u2A86',
	gtrarr: '\u2978',
	gtrdot: '\u22D7',
	gtreqless: '\u22DB',
	gtreqqless: '\u2A8C',
	gtrless: '\u2277',
	gtrsim: '\u2273',
	gvertneqq: '\u2269\uFE00',
	gvnE: '\u2269\uFE00',
	Hacek: '\u02C7',
	hairsp: '\u200A',
	half: '\u00BD',
	hamilt: '\u210B',
	HARDcy: '\u042A',
	hardcy: '\u044A',
	hArr: '\u21D4',
	harr: '\u2194',
	harrcir: '\u2948',
	harrw: '\u21AD',
	Hat: '\u005E',
	hbar: '\u210F',
	Hcirc: '\u0124',
	hcirc: '\u0125',
	hearts: '\u2665',
	heartsuit: '\u2665',
	hellip: '\u2026',
	hercon: '\u22B9',
	Hfr: '\u210C',
	hfr: '\uD835\uDD25',
	HilbertSpace: '\u210B',
	hksearow: '\u2925',
	hkswarow: '\u2926',
	hoarr: '\u21FF',
	homtht: '\u223B',
	hookleftarrow: '\u21A9',
	hookrightarrow: '\u21AA',
	Hopf: '\u210D',
	hopf: '\uD835\uDD59',
	horbar: '\u2015',
	HorizontalLine: '\u2500',
	Hscr: '\u210B',
	hscr: '\uD835\uDCBD',
	hslash: '\u210F',
	Hstrok: '\u0126',
	hstrok: '\u0127',
	HumpDownHump: '\u224E',
	HumpEqual: '\u224F',
	hybull: '\u2043',
	hyphen: '\u2010',
	Iacute: '\u00CD',
	iacute: '\u00ED',
	ic: '\u2063',
	Icirc: '\u00CE',
	icirc: '\u00EE',
	Icy: '\u0418',
	icy: '\u0438',
	Idot: '\u0130',
	IEcy: '\u0415',
	iecy: '\u0435',
	iexcl: '\u00A1',
	iff: '\u21D4',
	Ifr: '\u2111',
	ifr: '\uD835\uDD26',
	Igrave: '\u00CC',
	igrave: '\u00EC',
	ii: '\u2148',
	iiiint: '\u2A0C',
	iiint: '\u222D',
	iinfin: '\u29DC',
	iiota: '\u2129',
	IJlig: '\u0132',
	ijlig: '\u0133',
	Im: '\u2111',
	Imacr: '\u012A',
	imacr: '\u012B',
	image: '\u2111',
	ImaginaryI: '\u2148',
	imagline: '\u2110',
	imagpart: '\u2111',
	imath: '\u0131',
	imof: '\u22B7',
	imped: '\u01B5',
	Implies: '\u21D2',
	in: '\u2208',
	incare: '\u2105',
	infin: '\u221E',
	infintie: '\u29DD',
	inodot: '\u0131',
	Int: '\u222C',
	int: '\u222B',
	intcal: '\u22BA',
	integers: '\u2124',
	Integral: '\u222B',
	intercal: '\u22BA',
	Intersection: '\u22C2',
	intlarhk: '\u2A17',
	intprod: '\u2A3C',
	InvisibleComma: '\u2063',
	InvisibleTimes: '\u2062',
	IOcy: '\u0401',
	iocy: '\u0451',
	Iogon: '\u012E',
	iogon: '\u012F',
	Iopf: '\uD835\uDD40',
	iopf: '\uD835\uDD5A',
	Iota: '\u0399',
	iota: '\u03B9',
	iprod: '\u2A3C',
	iquest: '\u00BF',
	Iscr: '\u2110',
	iscr: '\uD835\uDCBE',
	isin: '\u2208',
	isindot: '\u22F5',
	isinE: '\u22F9',
	isins: '\u22F4',
	isinsv: '\u22F3',
	isinv: '\u2208',
	it: '\u2062',
	Itilde: '\u0128',
	itilde: '\u0129',
	Iukcy: '\u0406',
	iukcy: '\u0456',
	Iuml: '\u00CF',
	iuml: '\u00EF',
	Jcirc: '\u0134',
	jcirc: '\u0135',
	Jcy: '\u0419',
	jcy: '\u0439',
	Jfr: '\uD835\uDD0D',
	jfr: '\uD835\uDD27',
	jmath: '\u0237',
	Jopf: '\uD835\uDD41',
	jopf: '\uD835\uDD5B',
	Jscr: '\uD835\uDCA5',
	jscr: '\uD835\uDCBF',
	Jsercy: '\u0408',
	jsercy: '\u0458',
	Jukcy: '\u0404',
	jukcy: '\u0454',
	Kappa: '\u039A',
	kappa: '\u03BA',
	kappav: '\u03F0',
	Kcedil: '\u0136',
	kcedil: '\u0137',
	Kcy: '\u041A',
	kcy: '\u043A',
	Kfr: '\uD835\uDD0E',
	kfr: '\uD835\uDD28',
	kgreen: '\u0138',
	KHcy: '\u0425',
	khcy: '\u0445',
	KJcy: '\u040C',
	kjcy: '\u045C',
	Kopf: '\uD835\uDD42',
	kopf: '\uD835\uDD5C',
	Kscr: '\uD835\uDCA6',
	kscr: '\uD835\uDCC0',
	lAarr: '\u21DA',
	Lacute: '\u0139',
	lacute: '\u013A',
	laemptyv: '\u29B4',
	lagran: '\u2112',
	Lambda: '\u039B',
	lambda: '\u03BB',
	Lang: '\u27EA',
	lang: '\u27E8',
	langd: '\u2991',
	langle: '\u27E8',
	lap: '\u2A85',
	Laplacetrf: '\u2112',
	laquo: '\u00AB',
	Larr: '\u219E',
	lArr: '\u21D0',
	larr: '\u2190',
	larrb: '\u21E4',
	larrbfs: '\u291F',
	larrfs: '\u291D',
	larrhk: '\u21A9',
	larrlp: '\u21AB',
	larrpl: '\u2939',
	larrsim: '\u2973',
	larrtl: '\u21A2',
	lat: '\u2AAB',
	lAtail: '\u291B',
	latail: '\u2919',
	late: '\u2AAD',
	lates: '\u2AAD\uFE00',
	lBarr: '\u290E',
	lbarr: '\u290C',
	lbbrk: '\u2772',
	lbrace: '\u007B',
	lbrack: '\u005B',
	lbrke: '\u298B',
	lbrksld: '\u298F',
	lbrkslu: '\u298D',
	Lcaron: '\u013D',
	lcaron: '\u013E',
	Lcedil: '\u013B',
	lcedil: '\u013C',
	lceil: '\u2308',
	lcub: '\u007B',
	Lcy: '\u041B',
	lcy: '\u043B',
	ldca: '\u2936',
	ldquo: '\u201C',
	ldquor: '\u201E',
	ldrdhar: '\u2967',
	ldrushar: '\u294B',
	ldsh: '\u21B2',
	lE: '\u2266',
	le: '\u2264',
	LeftAngleBracket: '\u27E8',
	LeftArrow: '\u2190',
	Leftarrow: '\u21D0',
	leftarrow: '\u2190',
	LeftArrowBar: '\u21E4',
	LeftArrowRightArrow: '\u21C6',
	leftarrowtail: '\u21A2',
	LeftCeiling: '\u2308',
	LeftDoubleBracket: '\u27E6',
	LeftDownTeeVector: '\u2961',
	LeftDownVector: '\u21C3',
	LeftDownVectorBar: '\u2959',
	LeftFloor: '\u230A',
	leftharpoondown: '\u21BD',
	leftharpoonup: '\u21BC',
	leftleftarrows: '\u21C7',
	LeftRightArrow: '\u2194',
	Leftrightarrow: '\u21D4',
	leftrightarrow: '\u2194',
	leftrightarrows: '\u21C6',
	leftrightharpoons: '\u21CB',
	leftrightsquigarrow: '\u21AD',
	LeftRightVector: '\u294E',
	LeftTee: '\u22A3',
	LeftTeeArrow: '\u21A4',
	LeftTeeVector: '\u295A',
	leftthreetimes: '\u22CB',
	LeftTriangle: '\u22B2',
	LeftTriangleBar: '\u29CF',
	LeftTriangleEqual: '\u22B4',
	LeftUpDownVector: '\u2951',
	LeftUpTeeVector: '\u2960',
	LeftUpVector: '\u21BF',
	LeftUpVectorBar: '\u2958',
	LeftVector: '\u21BC',
	LeftVectorBar: '\u2952',
	lEg: '\u2A8B',
	leg: '\u22DA',
	leq: '\u2264',
	leqq: '\u2266',
	leqslant: '\u2A7D',
	les: '\u2A7D',
	lescc: '\u2AA8',
	lesdot: '\u2A7F',
	lesdoto: '\u2A81',
	lesdotor: '\u2A83',
	lesg: '\u22DA\uFE00',
	lesges: '\u2A93',
	lessapprox: '\u2A85',
	lessdot: '\u22D6',
	lesseqgtr: '\u22DA',
	lesseqqgtr: '\u2A8B',
	LessEqualGreater: '\u22DA',
	LessFullEqual: '\u2266',
	LessGreater: '\u2276',
	lessgtr: '\u2276',
	LessLess: '\u2AA1',
	lesssim: '\u2272',
	LessSlantEqual: '\u2A7D',
	LessTilde: '\u2272',
	lfisht: '\u297C',
	lfloor: '\u230A',
	Lfr: '\uD835\uDD0F',
	lfr: '\uD835\uDD29',
	lg: '\u2276',
	lgE: '\u2A91',
	lHar: '\u2962',
	lhard: '\u21BD',
	lharu: '\u21BC',
	lharul: '\u296A',
	lhblk: '\u2584',
	LJcy: '\u0409',
	ljcy: '\u0459',
	Ll: '\u22D8',
	ll: '\u226A',
	llarr: '\u21C7',
	llcorner: '\u231E',
	Lleftarrow: '\u21DA',
	llhard: '\u296B',
	lltri: '\u25FA',
	Lmidot: '\u013F',
	lmidot: '\u0140',
	lmoust: '\u23B0',
	lmoustache: '\u23B0',
	lnap: '\u2A89',
	lnapprox: '\u2A89',
	lnE: '\u2268',
	lne: '\u2A87',
	lneq: '\u2A87',
	lneqq: '\u2268',
	lnsim: '\u22E6',
	loang: '\u27EC',
	loarr: '\u21FD',
	lobrk: '\u27E6',
	LongLeftArrow: '\u27F5',
	Longleftarrow: '\u27F8',
	longleftarrow: '\u27F5',
	LongLeftRightArrow: '\u27F7',
	Longleftrightarrow: '\u27FA',
	longleftrightarrow: '\u27F7',
	longmapsto: '\u27FC',
	LongRightArrow: '\u27F6',
	Longrightarrow: '\u27F9',
	longrightarrow: '\u27F6',
	looparrowleft: '\u21AB',
	looparrowright: '\u21AC',
	lopar: '\u2985',
	Lopf: '\uD835\uDD43',
	lopf: '\uD835\uDD5D',
	loplus: '\u2A2D',
	lotimes: '\u2A34',
	lowast: '\u2217',
	lowbar: '\u005F',
	LowerLeftArrow: '\u2199',
	LowerRightArrow: '\u2198',
	loz: '\u25CA',
	lozenge: '\u25CA',
	lozf: '\u29EB',
	lpar: '\u0028',
	lparlt: '\u2993',
	lrarr: '\u21C6',
	lrcorner: '\u231F',
	lrhar: '\u21CB',
	lrhard: '\u296D',
	lrm: '\u200E',
	lrtri: '\u22BF',
	lsaquo: '\u2039',
	Lscr: '\u2112',
	lscr: '\uD835\uDCC1',
	Lsh: '\u21B0',
	lsh: '\u21B0',
	lsim: '\u2272',
	lsime: '\u2A8D',
	lsimg: '\u2A8F',
	lsqb: '\u005B',
	lsquo: '\u2018',
	lsquor: '\u201A',
	Lstrok: '\u0141',
	lstrok: '\u0142',
	Lt: '\u226A',
	LT: '\u003C',
	lt: '\u003C',
	ltcc: '\u2AA6',
	ltcir: '\u2A79',
	ltdot: '\u22D6',
	lthree: '\u22CB',
	ltimes: '\u22C9',
	ltlarr: '\u2976',
	ltquest: '\u2A7B',
	ltri: '\u25C3',
	ltrie: '\u22B4',
	ltrif: '\u25C2',
	ltrPar: '\u2996',
	lurdshar: '\u294A',
	luruhar: '\u2966',
	lvertneqq: '\u2268\uFE00',
	lvnE: '\u2268\uFE00',
	macr: '\u00AF',
	male: '\u2642',
	malt: '\u2720',
	maltese: '\u2720',
	Map: '\u2905',
	map: '\u21A6',
	mapsto: '\u21A6',
	mapstodown: '\u21A7',
	mapstoleft: '\u21A4',
	mapstoup: '\u21A5',
	marker: '\u25AE',
	mcomma: '\u2A29',
	Mcy: '\u041C',
	mcy: '\u043C',
	mdash: '\u2014',
	mDDot: '\u223A',
	measuredangle: '\u2221',
	MediumSpace: '\u205F',
	Mellintrf: '\u2133',
	Mfr: '\uD835\uDD10',
	mfr: '\uD835\uDD2A',
	mho: '\u2127',
	micro: '\u00B5',
	mid: '\u2223',
	midast: '\u002A',
	midcir: '\u2AF0',
	middot: '\u00B7',
	minus: '\u2212',
	minusb: '\u229F',
	minusd: '\u2238',
	minusdu: '\u2A2A',
	MinusPlus: '\u2213',
	mlcp: '\u2ADB',
	mldr: '\u2026',
	mnplus: '\u2213',
	models: '\u22A7',
	Mopf: '\uD835\uDD44',
	mopf: '\uD835\uDD5E',
	mp: '\u2213',
	Mscr: '\u2133',
	mscr: '\uD835\uDCC2',
	mstpos: '\u223E',
	Mu: '\u039C',
	mu: '\u03BC',
	multimap: '\u22B8',
	mumap: '\u22B8',
	nabla: '\u2207',
	Nacute: '\u0143',
	nacute: '\u0144',
	nang: '\u2220\u20D2',
	nap: '\u2249',
	napE: '\u2A70\u0338',
	napid: '\u224B\u0338',
	napos: '\u0149',
	napprox: '\u2249',
	natur: '\u266E',
	natural: '\u266E',
	naturals: '\u2115',
	nbsp: '\u00A0',
	nbump: '\u224E\u0338',
	nbumpe: '\u224F\u0338',
	ncap: '\u2A43',
	Ncaron: '\u0147',
	ncaron: '\u0148',
	Ncedil: '\u0145',
	ncedil: '\u0146',
	ncong: '\u2247',
	ncongdot: '\u2A6D\u0338',
	ncup: '\u2A42',
	Ncy: '\u041D',
	ncy: '\u043D',
	ndash: '\u2013',
	ne: '\u2260',
	nearhk: '\u2924',
	neArr: '\u21D7',
	nearr: '\u2197',
	nearrow: '\u2197',
	nedot: '\u2250\u0338',
	NegativeMediumSpace: '\u200B',
	NegativeThickSpace: '\u200B',
	NegativeThinSpace: '\u200B',
	NegativeVeryThinSpace: '\u200B',
	nequiv: '\u2262',
	nesear: '\u2928',
	nesim: '\u2242\u0338',
	NestedGreaterGreater: '\u226B',
	NestedLessLess: '\u226A',
	NewLine: '\u000A',
	nexist: '\u2204',
	nexists: '\u2204',
	Nfr: '\uD835\uDD11',
	nfr: '\uD835\uDD2B',
	ngE: '\u2267\u0338',
	nge: '\u2271',
	ngeq: '\u2271',
	ngeqq: '\u2267\u0338',
	ngeqslant: '\u2A7E\u0338',
	nges: '\u2A7E\u0338',
	nGg: '\u22D9\u0338',
	ngsim: '\u2275',
	nGt: '\u226B\u20D2',
	ngt: '\u226F',
	ngtr: '\u226F',
	nGtv: '\u226B\u0338',
	nhArr: '\u21CE',
	nharr: '\u21AE',
	nhpar: '\u2AF2',
	ni: '\u220B',
	nis: '\u22FC',
	nisd: '\u22FA',
	niv: '\u220B',
	NJcy: '\u040A',
	njcy: '\u045A',
	nlArr: '\u21CD',
	nlarr: '\u219A',
	nldr: '\u2025',
	nlE: '\u2266\u0338',
	nle: '\u2270',
	nLeftarrow: '\u21CD',
	nleftarrow: '\u219A',
	nLeftrightarrow: '\u21CE',
	nleftrightarrow: '\u21AE',
	nleq: '\u2270',
	nleqq: '\u2266\u0338',
	nleqslant: '\u2A7D\u0338',
	nles: '\u2A7D\u0338',
	nless: '\u226E',
	nLl: '\u22D8\u0338',
	nlsim: '\u2274',
	nLt: '\u226A\u20D2',
	nlt: '\u226E',
	nltri: '\u22EA',
	nltrie: '\u22EC',
	nLtv: '\u226A\u0338',
	nmid: '\u2224',
	NoBreak: '\u2060',
	NonBreakingSpace: '\u00A0',
	Nopf: '\u2115',
	nopf: '\uD835\uDD5F',
	Not: '\u2AEC',
	not: '\u00AC',
	NotCongruent: '\u2262',
	NotCupCap: '\u226D',
	NotDoubleVerticalBar: '\u2226',
	NotElement: '\u2209',
	NotEqual: '\u2260',
	NotEqualTilde: '\u2242\u0338',
	NotExists: '\u2204',
	NotGreater: '\u226F',
	NotGreaterEqual: '\u2271',
	NotGreaterFullEqual: '\u2267\u0338',
	NotGreaterGreater: '\u226B\u0338',
	NotGreaterLess: '\u2279',
	NotGreaterSlantEqual: '\u2A7E\u0338',
	NotGreaterTilde: '\u2275',
	NotHumpDownHump: '\u224E\u0338',
	NotHumpEqual: '\u224F\u0338',
	notin: '\u2209',
	notindot: '\u22F5\u0338',
	notinE: '\u22F9\u0338',
	notinva: '\u2209',
	notinvb: '\u22F7',
	notinvc: '\u22F6',
	NotLeftTriangle: '\u22EA',
	NotLeftTriangleBar: '\u29CF\u0338',
	NotLeftTriangleEqual: '\u22EC',
	NotLess: '\u226E',
	NotLessEqual: '\u2270',
	NotLessGreater: '\u2278',
	NotLessLess: '\u226A\u0338',
	NotLessSlantEqual: '\u2A7D\u0338',
	NotLessTilde: '\u2274',
	NotNestedGreaterGreater: '\u2AA2\u0338',
	NotNestedLessLess: '\u2AA1\u0338',
	notni: '\u220C',
	notniva: '\u220C',
	notnivb: '\u22FE',
	notnivc: '\u22FD',
	NotPrecedes: '\u2280',
	NotPrecedesEqual: '\u2AAF\u0338',
	NotPrecedesSlantEqual: '\u22E0',
	NotReverseElement: '\u220C',
	NotRightTriangle: '\u22EB',
	NotRightTriangleBar: '\u29D0\u0338',
	NotRightTriangleEqual: '\u22ED',
	NotSquareSubset: '\u228F\u0338',
	NotSquareSubsetEqual: '\u22E2',
	NotSquareSuperset: '\u2290\u0338',
	NotSquareSupersetEqual: '\u22E3',
	NotSubset: '\u2282\u20D2',
	NotSubsetEqual: '\u2288',
	NotSucceeds: '\u2281',
	NotSucceedsEqual: '\u2AB0\u0338',
	NotSucceedsSlantEqual: '\u22E1',
	NotSucceedsTilde: '\u227F\u0338',
	NotSuperset: '\u2283\u20D2',
	NotSupersetEqual: '\u2289',
	NotTilde: '\u2241',
	NotTildeEqual: '\u2244',
	NotTildeFullEqual: '\u2247',
	NotTildeTilde: '\u2249',
	NotVerticalBar: '\u2224',
	npar: '\u2226',
	nparallel: '\u2226',
	nparsl: '\u2AFD\u20E5',
	npart: '\u2202\u0338',
	npolint: '\u2A14',
	npr: '\u2280',
	nprcue: '\u22E0',
	npre: '\u2AAF\u0338',
	nprec: '\u2280',
	npreceq: '\u2AAF\u0338',
	nrArr: '\u21CF',
	nrarr: '\u219B',
	nrarrc: '\u2933\u0338',
	nrarrw: '\u219D\u0338',
	nRightarrow: '\u21CF',
	nrightarrow: '\u219B',
	nrtri: '\u22EB',
	nrtrie: '\u22ED',
	nsc: '\u2281',
	nsccue: '\u22E1',
	nsce: '\u2AB0\u0338',
	Nscr: '\uD835\uDCA9',
	nscr: '\uD835\uDCC3',
	nshortmid: '\u2224',
	nshortparallel: '\u2226',
	nsim: '\u2241',
	nsime: '\u2244',
	nsimeq: '\u2244',
	nsmid: '\u2224',
	nspar: '\u2226',
	nsqsube: '\u22E2',
	nsqsupe: '\u22E3',
	nsub: '\u2284',
	nsubE: '\u2AC5\u0338',
	nsube: '\u2288',
	nsubset: '\u2282\u20D2',
	nsubseteq: '\u2288',
	nsubseteqq: '\u2AC5\u0338',
	nsucc: '\u2281',
	nsucceq: '\u2AB0\u0338',
	nsup: '\u2285',
	nsupE: '\u2AC6\u0338',
	nsupe: '\u2289',
	nsupset: '\u2283\u20D2',
	nsupseteq: '\u2289',
	nsupseteqq: '\u2AC6\u0338',
	ntgl: '\u2279',
	Ntilde: '\u00D1',
	ntilde: '\u00F1',
	ntlg: '\u2278',
	ntriangleleft: '\u22EA',
	ntrianglelefteq: '\u22EC',
	ntriangleright: '\u22EB',
	ntrianglerighteq: '\u22ED',
	Nu: '\u039D',
	nu: '\u03BD',
	num: '\u0023',
	numero: '\u2116',
	numsp: '\u2007',
	nvap: '\u224D\u20D2',
	nVDash: '\u22AF',
	nVdash: '\u22AE',
	nvDash: '\u22AD',
	nvdash: '\u22AC',
	nvge: '\u2265\u20D2',
	nvgt: '\u003E\u20D2',
	nvHarr: '\u2904',
	nvinfin: '\u29DE',
	nvlArr: '\u2902',
	nvle: '\u2264\u20D2',
	nvlt: '\u003C\u20D2',
	nvltrie: '\u22B4\u20D2',
	nvrArr: '\u2903',
	nvrtrie: '\u22B5\u20D2',
	nvsim: '\u223C\u20D2',
	nwarhk: '\u2923',
	nwArr: '\u21D6',
	nwarr: '\u2196',
	nwarrow: '\u2196',
	nwnear: '\u2927',
	Oacute: '\u00D3',
	oacute: '\u00F3',
	oast: '\u229B',
	ocir: '\u229A',
	Ocirc: '\u00D4',
	ocirc: '\u00F4',
	Ocy: '\u041E',
	ocy: '\u043E',
	odash: '\u229D',
	Odblac: '\u0150',
	odblac: '\u0151',
	odiv: '\u2A38',
	odot: '\u2299',
	odsold: '\u29BC',
	OElig: '\u0152',
	oelig: '\u0153',
	ofcir: '\u29BF',
	Ofr: '\uD835\uDD12',
	ofr: '\uD835\uDD2C',
	ogon: '\u02DB',
	Ograve: '\u00D2',
	ograve: '\u00F2',
	ogt: '\u29C1',
	ohbar: '\u29B5',
	ohm: '\u03A9',
	oint: '\u222E',
	olarr: '\u21BA',
	olcir: '\u29BE',
	olcross: '\u29BB',
	oline: '\u203E',
	olt: '\u29C0',
	Omacr: '\u014C',
	omacr: '\u014D',
	Omega: '\u03A9',
	omega: '\u03C9',
	Omicron: '\u039F',
	omicron: '\u03BF',
	omid: '\u29B6',
	ominus: '\u2296',
	Oopf: '\uD835\uDD46',
	oopf: '\uD835\uDD60',
	opar: '\u29B7',
	OpenCurlyDoubleQuote: '\u201C',
	OpenCurlyQuote: '\u2018',
	operp: '\u29B9',
	oplus: '\u2295',
	Or: '\u2A54',
	or: '\u2228',
	orarr: '\u21BB',
	ord: '\u2A5D',
	order: '\u2134',
	orderof: '\u2134',
	ordf: '\u00AA',
	ordm: '\u00BA',
	origof: '\u22B6',
	oror: '\u2A56',
	orslope: '\u2A57',
	orv: '\u2A5B',
	oS: '\u24C8',
	Oscr: '\uD835\uDCAA',
	oscr: '\u2134',
	Oslash: '\u00D8',
	oslash: '\u00F8',
	osol: '\u2298',
	Otilde: '\u00D5',
	otilde: '\u00F5',
	Otimes: '\u2A37',
	otimes: '\u2297',
	otimesas: '\u2A36',
	Ouml: '\u00D6',
	ouml: '\u00F6',
	ovbar: '\u233D',
	OverBar: '\u203E',
	OverBrace: '\u23DE',
	OverBracket: '\u23B4',
	OverParenthesis: '\u23DC',
	par: '\u2225',
	para: '\u00B6',
	parallel: '\u2225',
	parsim: '\u2AF3',
	parsl: '\u2AFD',
	part: '\u2202',
	PartialD: '\u2202',
	Pcy: '\u041F',
	pcy: '\u043F',
	percnt: '\u0025',
	period: '\u002E',
	permil: '\u2030',
	perp: '\u22A5',
	pertenk: '\u2031',
	Pfr: '\uD835\uDD13',
	pfr: '\uD835\uDD2D',
	Phi: '\u03A6',
	phi: '\u03C6',
	phiv: '\u03D5',
	phmmat: '\u2133',
	phone: '\u260E',
	Pi: '\u03A0',
	pi: '\u03C0',
	pitchfork: '\u22D4',
	piv: '\u03D6',
	planck: '\u210F',
	planckh: '\u210E',
	plankv: '\u210F',
	plus: '\u002B',
	plusacir: '\u2A23',
	plusb: '\u229E',
	pluscir: '\u2A22',
	plusdo: '\u2214',
	plusdu: '\u2A25',
	pluse: '\u2A72',
	PlusMinus: '\u00B1',
	plusmn: '\u00B1',
	plussim: '\u2A26',
	plustwo: '\u2A27',
	pm: '\u00B1',
	Poincareplane: '\u210C',
	pointint: '\u2A15',
	Popf: '\u2119',
	popf: '\uD835\uDD61',
	pound: '\u00A3',
	Pr: '\u2ABB',
	pr: '\u227A',
	prap: '\u2AB7',
	prcue: '\u227C',
	prE: '\u2AB3',
	pre: '\u2AAF',
	prec: '\u227A',
	precapprox: '\u2AB7',
	preccurlyeq: '\u227C',
	Precedes: '\u227A',
	PrecedesEqual: '\u2AAF',
	PrecedesSlantEqual: '\u227C',
	PrecedesTilde: '\u227E',
	preceq: '\u2AAF',
	precnapprox: '\u2AB9',
	precneqq: '\u2AB5',
	precnsim: '\u22E8',
	precsim: '\u227E',
	Prime: '\u2033',
	prime: '\u2032',
	primes: '\u2119',
	prnap: '\u2AB9',
	prnE: '\u2AB5',
	prnsim: '\u22E8',
	prod: '\u220F',
	Product: '\u220F',
	profalar: '\u232E',
	profline: '\u2312',
	profsurf: '\u2313',
	prop: '\u221D',
	Proportion: '\u2237',
	Proportional: '\u221D',
	propto: '\u221D',
	prsim: '\u227E',
	prurel: '\u22B0',
	Pscr: '\uD835\uDCAB',
	pscr: '\uD835\uDCC5',
	Psi: '\u03A8',
	psi: '\u03C8',
	puncsp: '\u2008',
	Qfr: '\uD835\uDD14',
	qfr: '\uD835\uDD2E',
	qint: '\u2A0C',
	Qopf: '\u211A',
	qopf: '\uD835\uDD62',
	qprime: '\u2057',
	Qscr: '\uD835\uDCAC',
	qscr: '\uD835\uDCC6',
	quaternions: '\u210D',
	quatint: '\u2A16',
	quest: '\u003F',
	questeq: '\u225F',
	QUOT: '\u0022',
	quot: '\u0022',
	rAarr: '\u21DB',
	race: '\u223D\u0331',
	Racute: '\u0154',
	racute: '\u0155',
	radic: '\u221A',
	raemptyv: '\u29B3',
	Rang: '\u27EB',
	rang: '\u27E9',
	rangd: '\u2992',
	range: '\u29A5',
	rangle: '\u27E9',
	raquo: '\u00BB',
	Rarr: '\u21A0',
	rArr: '\u21D2',
	rarr: '\u2192',
	rarrap: '\u2975',
	rarrb: '\u21E5',
	rarrbfs: '\u2920',
	rarrc: '\u2933',
	rarrfs: '\u291E',
	rarrhk: '\u21AA',
	rarrlp: '\u21AC',
	rarrpl: '\u2945',
	rarrsim: '\u2974',
	Rarrtl: '\u2916',
	rarrtl: '\u21A3',
	rarrw: '\u219D',
	rAtail: '\u291C',
	ratail: '\u291A',
	ratio: '\u2236',
	rationals: '\u211A',
	RBarr: '\u2910',
	rBarr: '\u290F',
	rbarr: '\u290D',
	rbbrk: '\u2773',
	rbrace: '\u007D',
	rbrack: '\u005D',
	rbrke: '\u298C',
	rbrksld: '\u298E',
	rbrkslu: '\u2990',
	Rcaron: '\u0158',
	rcaron: '\u0159',
	Rcedil: '\u0156',
	rcedil: '\u0157',
	rceil: '\u2309',
	rcub: '\u007D',
	Rcy: '\u0420',
	rcy: '\u0440',
	rdca: '\u2937',
	rdldhar: '\u2969',
	rdquo: '\u201D',
	rdquor: '\u201D',
	rdsh: '\u21B3',
	Re: '\u211C',
	real: '\u211C',
	realine: '\u211B',
	realpart: '\u211C',
	reals: '\u211D',
	rect: '\u25AD',
	REG: '\u00AE',
	reg: '\u00AE',
	ReverseElement: '\u220B',
	ReverseEquilibrium: '\u21CB',
	ReverseUpEquilibrium: '\u296F',
	rfisht: '\u297D',
	rfloor: '\u230B',
	Rfr: '\u211C',
	rfr: '\uD835\uDD2F',
	rHar: '\u2964',
	rhard: '\u21C1',
	rharu: '\u21C0',
	rharul: '\u296C',
	Rho: '\u03A1',
	rho: '\u03C1',
	rhov: '\u03F1',
	RightAngleBracket: '\u27E9',
	RightArrow: '\u2192',
	Rightarrow: '\u21D2',
	rightarrow: '\u2192',
	RightArrowBar: '\u21E5',
	RightArrowLeftArrow: '\u21C4',
	rightarrowtail: '\u21A3',
	RightCeiling: '\u2309',
	RightDoubleBracket: '\u27E7',
	RightDownTeeVector: '\u295D',
	RightDownVector: '\u21C2',
	RightDownVectorBar: '\u2955',
	RightFloor: '\u230B',
	rightharpoondown: '\u21C1',
	rightharpoonup: '\u21C0',
	rightleftarrows: '\u21C4',
	rightleftharpoons: '\u21CC',
	rightrightarrows: '\u21C9',
	rightsquigarrow: '\u219D',
	RightTee: '\u22A2',
	RightTeeArrow: '\u21A6',
	RightTeeVector: '\u295B',
	rightthreetimes: '\u22CC',
	RightTriangle: '\u22B3',
	RightTriangleBar: '\u29D0',
	RightTriangleEqual: '\u22B5',
	RightUpDownVector: '\u294F',
	RightUpTeeVector: '\u295C',
	RightUpVector: '\u21BE',
	RightUpVectorBar: '\u2954',
	RightVector: '\u21C0',
	RightVectorBar: '\u2953',
	ring: '\u02DA',
	risingdotseq: '\u2253',
	rlarr: '\u21C4',
	rlhar: '\u21CC',
	rlm: '\u200F',
	rmoust: '\u23B1',
	rmoustache: '\u23B1',
	rnmid: '\u2AEE',
	roang: '\u27ED',
	roarr: '\u21FE',
	robrk: '\u27E7',
	ropar: '\u2986',
	Ropf: '\u211D',
	ropf: '\uD835\uDD63',
	roplus: '\u2A2E',
	rotimes: '\u2A35',
	RoundImplies: '\u2970',
	rpar: '\u0029',
	rpargt: '\u2994',
	rppolint: '\u2A12',
	rrarr: '\u21C9',
	Rrightarrow: '\u21DB',
	rsaquo: '\u203A',
	Rscr: '\u211B',
	rscr: '\uD835\uDCC7',
	Rsh: '\u21B1',
	rsh: '\u21B1',
	rsqb: '\u005D',
	rsquo: '\u2019',
	rsquor: '\u2019',
	rthree: '\u22CC',
	rtimes: '\u22CA',
	rtri: '\u25B9',
	rtrie: '\u22B5',
	rtrif: '\u25B8',
	rtriltri: '\u29CE',
	RuleDelayed: '\u29F4',
	ruluhar: '\u2968',
	rx: '\u211E',
	Sacute: '\u015A',
	sacute: '\u015B',
	sbquo: '\u201A',
	Sc: '\u2ABC',
	sc: '\u227B',
	scap: '\u2AB8',
	Scaron: '\u0160',
	scaron: '\u0161',
	sccue: '\u227D',
	scE: '\u2AB4',
	sce: '\u2AB0',
	Scedil: '\u015E',
	scedil: '\u015F',
	Scirc: '\u015C',
	scirc: '\u015D',
	scnap: '\u2ABA',
	scnE: '\u2AB6',
	scnsim: '\u22E9',
	scpolint: '\u2A13',
	scsim: '\u227F',
	Scy: '\u0421',
	scy: '\u0441',
	sdot: '\u22C5',
	sdotb: '\u22A1',
	sdote: '\u2A66',
	searhk: '\u2925',
	seArr: '\u21D8',
	searr: '\u2198',
	searrow: '\u2198',
	sect: '\u00A7',
	semi: '\u003B',
	seswar: '\u2929',
	setminus: '\u2216',
	setmn: '\u2216',
	sext: '\u2736',
	Sfr: '\uD835\uDD16',
	sfr: '\uD835\uDD30',
	sfrown: '\u2322',
	sharp: '\u266F',
	SHCHcy: '\u0429',
	shchcy: '\u0449',
	SHcy: '\u0428',
	shcy: '\u0448',
	ShortDownArrow: '\u2193',
	ShortLeftArrow: '\u2190',
	shortmid: '\u2223',
	shortparallel: '\u2225',
	ShortRightArrow: '\u2192',
	ShortUpArrow: '\u2191',
	shy: '\u00AD',
	Sigma: '\u03A3',
	sigma: '\u03C3',
	sigmaf: '\u03C2',
	sigmav: '\u03C2',
	sim: '\u223C',
	simdot: '\u2A6A',
	sime: '\u2243',
	simeq: '\u2243',
	simg: '\u2A9E',
	simgE: '\u2AA0',
	siml: '\u2A9D',
	simlE: '\u2A9F',
	simne: '\u2246',
	simplus: '\u2A24',
	simrarr: '\u2972',
	slarr: '\u2190',
	SmallCircle: '\u2218',
	smallsetminus: '\u2216',
	smashp: '\u2A33',
	smeparsl: '\u29E4',
	smid: '\u2223',
	smile: '\u2323',
	smt: '\u2AAA',
	smte: '\u2AAC',
	smtes: '\u2AAC\uFE00',
	SOFTcy: '\u042C',
	softcy: '\u044C',
	sol: '\u002F',
	solb: '\u29C4',
	solbar: '\u233F',
	Sopf: '\uD835\uDD4A',
	sopf: '\uD835\uDD64',
	spades: '\u2660',
	spadesuit: '\u2660',
	spar: '\u2225',
	sqcap: '\u2293',
	sqcaps: '\u2293\uFE00',
	sqcup: '\u2294',
	sqcups: '\u2294\uFE00',
	Sqrt: '\u221A',
	sqsub: '\u228F',
	sqsube: '\u2291',
	sqsubset: '\u228F',
	sqsubseteq: '\u2291',
	sqsup: '\u2290',
	sqsupe: '\u2292',
	sqsupset: '\u2290',
	sqsupseteq: '\u2292',
	squ: '\u25A1',
	Square: '\u25A1',
	square: '\u25A1',
	SquareIntersection: '\u2293',
	SquareSubset: '\u228F',
	SquareSubsetEqual: '\u2291',
	SquareSuperset: '\u2290',
	SquareSupersetEqual: '\u2292',
	SquareUnion: '\u2294',
	squarf: '\u25AA',
	squf: '\u25AA',
	srarr: '\u2192',
	Sscr: '\uD835\uDCAE',
	sscr: '\uD835\uDCC8',
	ssetmn: '\u2216',
	ssmile: '\u2323',
	sstarf: '\u22C6',
	Star: '\u22C6',
	star: '\u2606',
	starf: '\u2605',
	straightepsilon: '\u03F5',
	straightphi: '\u03D5',
	strns: '\u00AF',
	Sub: '\u22D0',
	sub: '\u2282',
	subdot: '\u2ABD',
	subE: '\u2AC5',
	sube: '\u2286',
	subedot: '\u2AC3',
	submult: '\u2AC1',
	subnE: '\u2ACB',
	subne: '\u228A',
	subplus: '\u2ABF',
	subrarr: '\u2979',
	Subset: '\u22D0',
	subset: '\u2282',
	subseteq: '\u2286',
	subseteqq: '\u2AC5',
	SubsetEqual: '\u2286',
	subsetneq: '\u228A',
	subsetneqq: '\u2ACB',
	subsim: '\u2AC7',
	subsub: '\u2AD5',
	subsup: '\u2AD3',
	succ: '\u227B',
	succapprox: '\u2AB8',
	succcurlyeq: '\u227D',
	Succeeds: '\u227B',
	SucceedsEqual: '\u2AB0',
	SucceedsSlantEqual: '\u227D',
	SucceedsTilde: '\u227F',
	succeq: '\u2AB0',
	succnapprox: '\u2ABA',
	succneqq: '\u2AB6',
	succnsim: '\u22E9',
	succsim: '\u227F',
	SuchThat: '\u220B',
	Sum: '\u2211',
	sum: '\u2211',
	sung: '\u266A',
	Sup: '\u22D1',
	sup: '\u2283',
	sup1: '\u00B9',
	sup2: '\u00B2',
	sup3: '\u00B3',
	supdot: '\u2ABE',
	supdsub: '\u2AD8',
	supE: '\u2AC6',
	supe: '\u2287',
	supedot: '\u2AC4',
	Superset: '\u2283',
	SupersetEqual: '\u2287',
	suphsol: '\u27C9',
	suphsub: '\u2AD7',
	suplarr: '\u297B',
	supmult: '\u2AC2',
	supnE: '\u2ACC',
	supne: '\u228B',
	supplus: '\u2AC0',
	Supset: '\u22D1',
	supset: '\u2283',
	supseteq: '\u2287',
	supseteqq: '\u2AC6',
	supsetneq: '\u228B',
	supsetneqq: '\u2ACC',
	supsim: '\u2AC8',
	supsub: '\u2AD4',
	supsup: '\u2AD6',
	swarhk: '\u2926',
	swArr: '\u21D9',
	swarr: '\u2199',
	swarrow: '\u2199',
	swnwar: '\u292A',
	szlig: '\u00DF',
	Tab: '\u0009',
	target: '\u2316',
	Tau: '\u03A4',
	tau: '\u03C4',
	tbrk: '\u23B4',
	Tcaron: '\u0164',
	tcaron: '\u0165',
	Tcedil: '\u0162',
	tcedil: '\u0163',
	Tcy: '\u0422',
	tcy: '\u0442',
	tdot: '\u20DB',
	telrec: '\u2315',
	Tfr: '\uD835\uDD17',
	tfr: '\uD835\uDD31',
	there4: '\u2234',
	Therefore: '\u2234',
	therefore: '\u2234',
	Theta: '\u0398',
	theta: '\u03B8',
	thetasym: '\u03D1',
	thetav: '\u03D1',
	thickapprox: '\u2248',
	thicksim: '\u223C',
	ThickSpace: '\u205F\u200A',
	thinsp: '\u2009',
	ThinSpace: '\u2009',
	thkap: '\u2248',
	thksim: '\u223C',
	THORN: '\u00DE',
	thorn: '\u00FE',
	Tilde: '\u223C',
	tilde: '\u02DC',
	TildeEqual: '\u2243',
	TildeFullEqual: '\u2245',
	TildeTilde: '\u2248',
	times: '\u00D7',
	timesb: '\u22A0',
	timesbar: '\u2A31',
	timesd: '\u2A30',
	tint: '\u222D',
	toea: '\u2928',
	top: '\u22A4',
	topbot: '\u2336',
	topcir: '\u2AF1',
	Topf: '\uD835\uDD4B',
	topf: '\uD835\uDD65',
	topfork: '\u2ADA',
	tosa: '\u2929',
	tprime: '\u2034',
	TRADE: '\u2122',
	trade: '\u2122',
	triangle: '\u25B5',
	triangledown: '\u25BF',
	triangleleft: '\u25C3',
	trianglelefteq: '\u22B4',
	triangleq: '\u225C',
	triangleright: '\u25B9',
	trianglerighteq: '\u22B5',
	tridot: '\u25EC',
	trie: '\u225C',
	triminus: '\u2A3A',
	TripleDot: '\u20DB',
	triplus: '\u2A39',
	trisb: '\u29CD',
	tritime: '\u2A3B',
	trpezium: '\u23E2',
	Tscr: '\uD835\uDCAF',
	tscr: '\uD835\uDCC9',
	TScy: '\u0426',
	tscy: '\u0446',
	TSHcy: '\u040B',
	tshcy: '\u045B',
	Tstrok: '\u0166',
	tstrok: '\u0167',
	twixt: '\u226C',
	twoheadleftarrow: '\u219E',
	twoheadrightarrow: '\u21A0',
	Uacute: '\u00DA',
	uacute: '\u00FA',
	Uarr: '\u219F',
	uArr: '\u21D1',
	uarr: '\u2191',
	Uarrocir: '\u2949',
	Ubrcy: '\u040E',
	ubrcy: '\u045E',
	Ubreve: '\u016C',
	ubreve: '\u016D',
	Ucirc: '\u00DB',
	ucirc: '\u00FB',
	Ucy: '\u0423',
	ucy: '\u0443',
	udarr: '\u21C5',
	Udblac: '\u0170',
	udblac: '\u0171',
	udhar: '\u296E',
	ufisht: '\u297E',
	Ufr: '\uD835\uDD18',
	ufr: '\uD835\uDD32',
	Ugrave: '\u00D9',
	ugrave: '\u00F9',
	uHar: '\u2963',
	uharl: '\u21BF',
	uharr: '\u21BE',
	uhblk: '\u2580',
	ulcorn: '\u231C',
	ulcorner: '\u231C',
	ulcrop: '\u230F',
	ultri: '\u25F8',
	Umacr: '\u016A',
	umacr: '\u016B',
	uml: '\u00A8',
	UnderBar: '\u005F',
	UnderBrace: '\u23DF',
	UnderBracket: '\u23B5',
	UnderParenthesis: '\u23DD',
	Union: '\u22C3',
	UnionPlus: '\u228E',
	Uogon: '\u0172',
	uogon: '\u0173',
	Uopf: '\uD835\uDD4C',
	uopf: '\uD835\uDD66',
	UpArrow: '\u2191',
	Uparrow: '\u21D1',
	uparrow: '\u2191',
	UpArrowBar: '\u2912',
	UpArrowDownArrow: '\u21C5',
	UpDownArrow: '\u2195',
	Updownarrow: '\u21D5',
	updownarrow: '\u2195',
	UpEquilibrium: '\u296E',
	upharpoonleft: '\u21BF',
	upharpoonright: '\u21BE',
	uplus: '\u228E',
	UpperLeftArrow: '\u2196',
	UpperRightArrow: '\u2197',
	Upsi: '\u03D2',
	upsi: '\u03C5',
	upsih: '\u03D2',
	Upsilon: '\u03A5',
	upsilon: '\u03C5',
	UpTee: '\u22A5',
	UpTeeArrow: '\u21A5',
	upuparrows: '\u21C8',
	urcorn: '\u231D',
	urcorner: '\u231D',
	urcrop: '\u230E',
	Uring: '\u016E',
	uring: '\u016F',
	urtri: '\u25F9',
	Uscr: '\uD835\uDCB0',
	uscr: '\uD835\uDCCA',
	utdot: '\u22F0',
	Utilde: '\u0168',
	utilde: '\u0169',
	utri: '\u25B5',
	utrif: '\u25B4',
	uuarr: '\u21C8',
	Uuml: '\u00DC',
	uuml: '\u00FC',
	uwangle: '\u29A7',
	vangrt: '\u299C',
	varepsilon: '\u03F5',
	varkappa: '\u03F0',
	varnothing: '\u2205',
	varphi: '\u03D5',
	varpi: '\u03D6',
	varpropto: '\u221D',
	vArr: '\u21D5',
	varr: '\u2195',
	varrho: '\u03F1',
	varsigma: '\u03C2',
	varsubsetneq: '\u228A\uFE00',
	varsubsetneqq: '\u2ACB\uFE00',
	varsupsetneq: '\u228B\uFE00',
	varsupsetneqq: '\u2ACC\uFE00',
	vartheta: '\u03D1',
	vartriangleleft: '\u22B2',
	vartriangleright: '\u22B3',
	Vbar: '\u2AEB',
	vBar: '\u2AE8',
	vBarv: '\u2AE9',
	Vcy: '\u0412',
	vcy: '\u0432',
	VDash: '\u22AB',
	Vdash: '\u22A9',
	vDash: '\u22A8',
	vdash: '\u22A2',
	Vdashl: '\u2AE6',
	Vee: '\u22C1',
	vee: '\u2228',
	veebar: '\u22BB',
	veeeq: '\u225A',
	vellip: '\u22EE',
	Verbar: '\u2016',
	verbar: '\u007C',
	Vert: '\u2016',
	vert: '\u007C',
	VerticalBar: '\u2223',
	VerticalLine: '\u007C',
	VerticalSeparator: '\u2758',
	VerticalTilde: '\u2240',
	VeryThinSpace: '\u200A',
	Vfr: '\uD835\uDD19',
	vfr: '\uD835\uDD33',
	vltri: '\u22B2',
	vnsub: '\u2282\u20D2',
	vnsup: '\u2283\u20D2',
	Vopf: '\uD835\uDD4D',
	vopf: '\uD835\uDD67',
	vprop: '\u221D',
	vrtri: '\u22B3',
	Vscr: '\uD835\uDCB1',
	vscr: '\uD835\uDCCB',
	vsubnE: '\u2ACB\uFE00',
	vsubne: '\u228A\uFE00',
	vsupnE: '\u2ACC\uFE00',
	vsupne: '\u228B\uFE00',
	Vvdash: '\u22AA',
	vzigzag: '\u299A',
	Wcirc: '\u0174',
	wcirc: '\u0175',
	wedbar: '\u2A5F',
	Wedge: '\u22C0',
	wedge: '\u2227',
	wedgeq: '\u2259',
	weierp: '\u2118',
	Wfr: '\uD835\uDD1A',
	wfr: '\uD835\uDD34',
	Wopf: '\uD835\uDD4E',
	wopf: '\uD835\uDD68',
	wp: '\u2118',
	wr: '\u2240',
	wreath: '\u2240',
	Wscr: '\uD835\uDCB2',
	wscr: '\uD835\uDCCC',
	xcap: '\u22C2',
	xcirc: '\u25EF',
	xcup: '\u22C3',
	xdtri: '\u25BD',
	Xfr: '\uD835\uDD1B',
	xfr: '\uD835\uDD35',
	xhArr: '\u27FA',
	xharr: '\u27F7',
	Xi: '\u039E',
	xi: '\u03BE',
	xlArr: '\u27F8',
	xlarr: '\u27F5',
	xmap: '\u27FC',
	xnis: '\u22FB',
	xodot: '\u2A00',
	Xopf: '\uD835\uDD4F',
	xopf: '\uD835\uDD69',
	xoplus: '\u2A01',
	xotime: '\u2A02',
	xrArr: '\u27F9',
	xrarr: '\u27F6',
	Xscr: '\uD835\uDCB3',
	xscr: '\uD835\uDCCD',
	xsqcup: '\u2A06',
	xuplus: '\u2A04',
	xutri: '\u25B3',
	xvee: '\u22C1',
	xwedge: '\u22C0',
	Yacute: '\u00DD',
	yacute: '\u00FD',
	YAcy: '\u042F',
	yacy: '\u044F',
	Ycirc: '\u0176',
	ycirc: '\u0177',
	Ycy: '\u042B',
	ycy: '\u044B',
	yen: '\u00A5',
	Yfr: '\uD835\uDD1C',
	yfr: '\uD835\uDD36',
	YIcy: '\u0407',
	yicy: '\u0457',
	Yopf: '\uD835\uDD50',
	yopf: '\uD835\uDD6A',
	Yscr: '\uD835\uDCB4',
	yscr: '\uD835\uDCCE',
	YUcy: '\u042E',
	yucy: '\u044E',
	Yuml: '\u0178',
	yuml: '\u00FF',
	Zacute: '\u0179',
	zacute: '\u017A',
	Zcaron: '\u017D',
	zcaron: '\u017E',
	Zcy: '\u0417',
	zcy: '\u0437',
	Zdot: '\u017B',
	zdot: '\u017C',
	zeetrf: '\u2128',
	ZeroWidthSpace: '\u200B',
	Zeta: '\u0396',
	zeta: '\u03B6',
	Zfr: '\u2128',
	zfr: '\uD835\uDD37',
	ZHcy: '\u0416',
	zhcy: '\u0436',
	zigrarr: '\u21DD',
	Zopf: '\u2124',
	zopf: '\uD835\uDD6B',
	Zscr: '\uD835\uDCB5',
	zscr: '\uD835\uDCCF',
	zwj: '\u200D',
	zwnj: '\u200C',
});

/**
 * @deprecated use `HTML_ENTITIES` instead
 * @see HTML_ENTITIES
 */
exports.entityMap = exports.HTML_ENTITIES;


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var dom = __webpack_require__(/*! ./dom */ "./node_modules/@xmldom/xmldom/lib/dom.js")
exports.DOMImplementation = dom.DOMImplementation
exports.XMLSerializer = dom.XMLSerializer
exports.DOMParser = __webpack_require__(/*! ./dom-parser */ "./node_modules/@xmldom/xmldom/lib/dom-parser.js").DOMParser


/***/ }),

/***/ "./node_modules/@xmldom/xmldom/lib/sax.js":
/*!************************************************!*\
  !*** ./node_modules/@xmldom/xmldom/lib/sax.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var NAMESPACE = (__webpack_require__(/*! ./conventions */ "./node_modules/@xmldom/xmldom/lib/conventions.js").NAMESPACE);

//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]///\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0;//tag name offerring
var S_ATTR = 1;//attr name offerring
var S_ATTR_SPACE=2;//attr name end and space offer
var S_EQ = 3;//=space?
var S_ATTR_NOQUOT_VALUE = 4;//attr value(no quot value only)
var S_ATTR_END = 5;//attr value end and no space(quot end)
var S_TAG_SPACE = 6;//(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7;//closed el<el />

/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @param {string} message
 * @param {any?} locator Optional, can provide details about the location in the source
 * @constructor
 */
function ParseError(message, locator) {
	this.message = message
	this.locator = locator
	if(Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
}
ParseError.prototype = new Error();
ParseError.prototype.name = ParseError.name

function XMLReader(){

}

XMLReader.prototype = {
	parse:function(source,defaultNSMap,entityMap){
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap ,defaultNSMap = {})
		parse(source,defaultNSMap,entityMap,
				domBuilder,this.errorHandler);
		domBuilder.endDocument();
	}
}
function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10)
				, surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}
	function entityReplacer(a){
		var k = a.slice(1,-1);
		if (Object.hasOwnProperty.call(entityMap, k)) {
			return entityMap[k];
		}else if(k.charAt(0) === '#'){
			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
		}else{
			errorHandler.error('entity not found:'+a);
			return a;
		}
	}
	function appendText(end){//has some bugs
		if(end>start){
			var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
			locator&&position(start);
			domBuilder.characters(xt,0,end-start);
			start = end
		}
	}
	function position(p,m){
		while(p>=lineEnd && (m = linePattern.exec(source))){
			lineStart = m.index;
			lineEnd = lineStart + m[0].length;
			locator.lineNumber++;
			//console.log('line++:',locator,startPos,endPos)
		}
		locator.columnNumber = p-lineStart+1;
	}
	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /.*(?:\r\n?|\n)|.*$/g
	var locator = domBuilder.locator;

	var parseStack = [{currentNSMap:defaultNSMapCopy}]
	var closeMap = {};
	var start = 0;
	while(true){
		try{
			var tagStart = source.indexOf('<',start);
			if(tagStart<0){
				if(!source.substr(start).match(/^\s*$/)){
					var doc = domBuilder.doc;
	    			var text = doc.createTextNode(source.substr(start));
	    			doc.appendChild(text);
	    			domBuilder.currentElement = text;
				}
				return;
			}
			if(tagStart>start){
				appendText(tagStart);
			}
			switch(source.charAt(tagStart+1)){
			case '/':
				var end = source.indexOf('>',tagStart+3);
				var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, '');
				var config = parseStack.pop();
				if(end<0){

	        		tagName = source.substring(tagStart+2).replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' is not complete:'+config.tagName);
	        		end = tagStart+1+tagName.length;
	        	}else if(tagName.match(/\s</)){
	        		tagName = tagName.replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' maybe not complete');
	        		end = tagStart+1+tagName.length;
				}
				var localNSMap = config.localNSMap;
				var endMatch = config.tagName == tagName;
				var endIgnoreCaseMach = endMatch || config.tagName&&config.tagName.toLowerCase() == tagName.toLowerCase()
		        if(endIgnoreCaseMach){
		        	domBuilder.endElement(config.uri,config.localName,tagName);
					if(localNSMap){
						for (var prefix in localNSMap) {
							if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
								domBuilder.endPrefixMapping(prefix);
							}
						}
					}
					if(!endMatch){
		            	errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName ); // No known test case
					}
		        }else{
		        	parseStack.push(config)
		        }

				end++;
				break;
				// end elment
			case '?':// <?...?>
				locator&&position(tagStart);
				end = parseInstruction(source,tagStart,domBuilder);
				break;
			case '!':// <!doctype,<![CDATA,<!--
				locator&&position(tagStart);
				end = parseDCC(source,tagStart,domBuilder,errorHandler);
				break;
			default:
				locator&&position(tagStart);
				var el = new ElementAttributes();
				var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
				//elStartEnd
				var end = parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);
				var len = el.length;


				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
					el.closed = true;
					if(!entityMap.nbsp){
						errorHandler.warning('unclosed xml attribute');
					}
				}
				if(locator && len){
					var locator2 = copyLocator(locator,{});
					//try{//attribute position fixed
					for(var i = 0;i<len;i++){
						var a = el[i];
						position(a.offset);
						a.locator = copyLocator(locator,{});
					}
					domBuilder.locator = locator2
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
					domBuilder.locator = locator;
				}else{
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
				}

				if (NAMESPACE.isHTML(el.uri) && !el.closed) {
					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)
				} else {
					end++;
				}
			}
		}catch(e){
			if (e instanceof ParseError) {
				throw e;
			}
			errorHandler.error('element parse error: '+e)
			end = -1;
		}
		if(end>start){
			start = end;
		}else{
			//TODO: 这里有可能sax回退，有位置错误风险
			appendText(Math.max(tagStart,start)+1);
		}
	}
}
function copyLocator(f,t){
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){

	/**
	 * @param {string} qname
	 * @param {string} value
	 * @param {number} startIndex
	 */
	function addAttribute(qname, value, startIndex) {
		if (el.attributeNames.hasOwnProperty(qname)) {
			errorHandler.fatalError('Attribute ' + qname + ' redefined')
		}
		el.addValue(
			qname,
			// @see https://www.w3.org/TR/xml/#AVNormalize
			// since the xmldom sax parser does not "interpret" DTD the following is not implemented:
			// - recursive replacement of (DTD) entity references
			// - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
			value.replace(/[\t\n\r]/g, ' ').replace(/&#?\w+;/g, entityReplacer),
			startIndex
		)
	}
	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG;//status
	while(true){
		var c = source.charAt(p);
		switch(c){
		case '=':
			if(s === S_ATTR){//attrName
				attrName = source.slice(start,p);
				s = S_EQ;
			}else if(s === S_ATTR_SPACE){
				s = S_EQ;
			}else{
				//fatalError: equal must after attrName or space after attrName
				throw new Error('attribute equal must after attrName'); // No known test case
			}
			break;
		case '\'':
		case '"':
			if(s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
				){//equal
				if(s === S_ATTR){
					errorHandler.warning('attribute value must after "="')
					attrName = source.slice(start,p)
				}
				start = p+1;
				p = source.indexOf(c,start)
				if(p>0){
					value = source.slice(start, p);
					addAttribute(attrName, value, start-1);
					s = S_ATTR_END;
				}else{
					//fatalError: no end quot match
					throw new Error('attribute value no end \''+c+'\' match');
				}
			}else if(s == S_ATTR_NOQUOT_VALUE){
				value = source.slice(start, p);
				addAttribute(attrName, value, start);
				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
				start = p+1;
				s = S_ATTR_END
			}else{
				//fatalError: no equal before
				throw new Error('attribute value must after "="'); // No known test case
			}
			break;
		case '/':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				s =S_TAG_CLOSE;
				el.closed = true;
			case S_ATTR_NOQUOT_VALUE:
			case S_ATTR:
				break;
				case S_ATTR_SPACE:
					el.closed = true;
				break;
			//case S_EQ:
			default:
				throw new Error("attribute invalid close char('/')") // No known test case
			}
			break;
		case ''://end document
			errorHandler.error('unexpected end of input');
			if(s == S_TAG){
				el.setTagName(source.slice(start,p));
			}
			return p;
		case '>':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				break;//normal
			case S_ATTR_NOQUOT_VALUE://Compatible state
			case S_ATTR:
				value = source.slice(start,p);
				if(value.slice(-1) === '/'){
					el.closed  = true;
					value = value.slice(0,-1)
				}
			case S_ATTR_SPACE:
				if(s === S_ATTR_SPACE){
					value = attrName;
				}
				if(s == S_ATTR_NOQUOT_VALUE){
					errorHandler.warning('attribute "'+value+'" missed quot(")!');
					addAttribute(attrName, value, start)
				}else{
					if(!NAMESPACE.isHTML(currentNSMap['']) || !value.match(/^(?:disabled|checked|selected)$/i)){
						errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!')
					}
					addAttribute(value, value, start)
				}
				break;
			case S_EQ:
				throw new Error('attribute value missed!!');
			}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
			return p;
		/*xml space '\x20' | #x9 | #xD | #xA; */
		case '\u0080':
			c = ' ';
		default:
			if(c<= ' '){//space
				switch(s){
				case S_TAG:
					el.setTagName(source.slice(start,p));//tagName
					s = S_TAG_SPACE;
					break;
				case S_ATTR:
					attrName = source.slice(start,p)
					s = S_ATTR_SPACE;
					break;
				case S_ATTR_NOQUOT_VALUE:
					var value = source.slice(start, p);
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					addAttribute(attrName, value, start)
				case S_ATTR_END:
					s = S_TAG_SPACE;
					break;
				//case S_TAG_SPACE:
				//case S_EQ:
				//case S_ATTR_SPACE:
				//	void();break;
				//case S_TAG_CLOSE:
					//ignore warning
				}
			}else{//not space
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
				switch(s){
				//case S_TAG:void();break;
				//case S_ATTR:void();break;
				//case S_ATTR_NOQUOT_VALUE:void();break;
				case S_ATTR_SPACE:
					var tagName =  el.tagName;
					if (!NAMESPACE.isHTML(currentNSMap['']) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
						errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!')
					}
					addAttribute(attrName, attrName, start);
					start = p;
					s = S_ATTR;
					break;
				case S_ATTR_END:
					errorHandler.warning('attribute space is required"'+attrName+'"!!')
				case S_TAG_SPACE:
					s = S_ATTR;
					start = p;
					break;
				case S_EQ:
					s = S_ATTR_NOQUOT_VALUE;
					start = p;
					break;
				case S_TAG_CLOSE:
					throw new Error("elements closed character '/' and '>' must be connected to");
				}
			}
		}//end outer switch
		//console.log('p++',p)
		p++;
	}
}
/**
 * @return true if has new namespace define
 */
function appendElement(el,domBuilder,currentNSMap){
	var tagName = el.tagName;
	var localNSMap = null;
	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
	var i = el.length;
	while(i--){
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if(nsp>0){
			var prefix = a.prefix = qName.slice(0,nsp);
			var localName = qName.slice(nsp+1);
			var nsPrefix = prefix === 'xmlns' && localName
		}else{
			localName = qName;
			prefix = null
			nsPrefix = qName === 'xmlns' && ''
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName ;
		//prefix == null for no ns prefix attribute
		if(nsPrefix !== false){//hack!!
			if(localNSMap == null){
				localNSMap = {}
				//console.log(currentNSMap,0)
				_copy(currentNSMap,currentNSMap={})
				//console.log(currentNSMap,1)
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = NAMESPACE.XMLNS
			domBuilder.startPrefixMapping(nsPrefix, value)
		}
	}
	var i = el.length;
	while(i--){
		a = el[i];
		var prefix = a.prefix;
		if(prefix){//no prefix attribute has no namespace
			if(prefix === 'xml'){
				a.uri = NAMESPACE.XML;
			}if(prefix !== 'xmlns'){
				a.uri = currentNSMap[prefix || '']

				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if(nsp>0){
		prefix = el.prefix = tagName.slice(0,nsp);
		localName = el.localName = tagName.slice(nsp+1);
	}else{
		prefix = null;//important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = el.uri = currentNSMap[prefix || ''];
	domBuilder.startElement(ns,localName,tagName,el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if(el.closed){
		domBuilder.endElement(ns,localName,tagName);
		if(localNSMap){
			for (prefix in localNSMap) {
				if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
					domBuilder.endPrefixMapping(prefix);
				}
			}
		}
	}else{
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}
function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
	if(/^(?:script|textarea)$/i.test(tagName)){
		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
		var text = source.substring(elStartEnd+1,elEndStart);
		if(/[&<]/.test(text)){
			if(/^script$/i.test(tagName)){
				//if(!/\]\]>/.test(text)){
					//lexHandler.startCDATA();
					domBuilder.characters(text,0,text.length);
					//lexHandler.endCDATA();
					return elEndStart;
				//}
			}//}else{//text area
				text = text.replace(/&#?\w+;/g,entityReplacer);
				domBuilder.characters(text,0,text.length);
				return elEndStart;
			//}

		}
	}
	return elStartEnd+1;
}
function fixSelfClosed(source,elStartEnd,tagName,closeMap){
	//if(tagName in closeMap){
	var pos = closeMap[tagName];
	if(pos == null){
		//console.log(tagName)
		pos =  source.lastIndexOf('</'+tagName+'>')
		if(pos<elStartEnd){//忘记闭合
			pos = source.lastIndexOf('</'+tagName)
		}
		closeMap[tagName] =pos
	}
	return pos<elStartEnd;
	//}
}

function _copy (source, target) {
	for (var n in source) {
		if (Object.prototype.hasOwnProperty.call(source, n)) {
			target[n] = source[n];
		}
	}
}

function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
	var next= source.charAt(start+2)
	switch(next){
	case '-':
		if(source.charAt(start + 3) === '-'){
			var end = source.indexOf('-->',start+4);
			//append comment source.substring(4,end)//<!--
			if(end>start){
				domBuilder.comment(source,start+4,end-start-4);
				return end+3;
			}else{
				errorHandler.error("Unclosed comment");
				return -1;
			}
		}else{
			//error
			return -1;
		}
	default:
		if(source.substr(start+3,6) == 'CDATA['){
			var end = source.indexOf(']]>',start+9);
			domBuilder.startCDATA();
			domBuilder.characters(source,start+9,end-start-9);
			domBuilder.endCDATA()
			return end+3;
		}
		//<!DOCTYPE
		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId)
		var matchs = split(source,start);
		var len = matchs.length;
		if(len>1 && /!doctype/i.test(matchs[0][0])){
			var name = matchs[1][0];
			var pubid = false;
			var sysid = false;
			if(len>3){
				if(/^public$/i.test(matchs[2][0])){
					pubid = matchs[3][0];
					sysid = len>4 && matchs[4][0];
				}else if(/^system$/i.test(matchs[2][0])){
					sysid = matchs[3][0];
				}
			}
			var lastMatch = matchs[len-1]
			domBuilder.startDTD(name, pubid, sysid);
			domBuilder.endDTD();

			return lastMatch.index+lastMatch[0].length
		}
	}
	return -1;
}



function parseInstruction(source,start,domBuilder){
	var end = source.indexOf('?>',start);
	if(end){
		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
		if(match){
			var len = match[0].length;
			domBuilder.processingInstruction(match[1], match[2]) ;
			return end+2;
		}else{//error
			return -1;
		}
	}
	return -1;
}

function ElementAttributes(){
	this.attributeNames = {}
}
ElementAttributes.prototype = {
	setTagName:function(tagName){
		if(!tagNamePattern.test(tagName)){
			throw new Error('invalid tagName:'+tagName)
		}
		this.tagName = tagName
	},
	addValue:function(qName, value, offset) {
		if(!tagNamePattern.test(qName)){
			throw new Error('invalid attribute:'+qName)
		}
		this.attributeNames[qName] = this.length;
		this[this.length++] = {qName:qName,value:value,offset:offset}
	},
	length:0,
	getLocalName:function(i){return this[i].localName},
	getLocator:function(i){return this[i].locator},
	getQName:function(i){return this[i].qName},
	getURI:function(i){return this[i].uri},
	getValue:function(i){return this[i].value}
//	,getIndex:function(uri, localName)){
//		if(localName){
//
//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
}



function split(source,start){
	var match;
	var buf = [];
	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
	reg.lastIndex = start;
	reg.exec(source);//skip <
	while(match = reg.exec(source)){
		buf.push(match);
		if(match[1])return buf;
	}
}

exports.XMLReader = XMLReader;
exports.ParseError = ParseError;


/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof __webpack_require__.g !== "undefined") {
    win = __webpack_require__.g;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;


/***/ }),

/***/ "./node_modules/mpd-parser/dist/mpd-parser.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/mpd-parser/dist/mpd-parser.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   addSidxSegmentsToPlaylist: () => (/* binding */ addSidxSegmentsToPlaylist$1),
/* harmony export */   generateSidxKey: () => (/* binding */ generateSidxKey),
/* harmony export */   inheritAttributes: () => (/* binding */ inheritAttributes),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseUTCTiming: () => (/* binding */ parseUTCTiming),
/* harmony export */   stringToMpdXml: () => (/* binding */ stringToMpdXml),
/* harmony export */   toM3u8: () => (/* binding */ toM3u8),
/* harmony export */   toPlaylists: () => (/* binding */ toPlaylists)
/* harmony export */ });
/* harmony import */ var _videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @videojs/vhs-utils/es/resolve-url */ "./node_modules/@videojs/vhs-utils/es/resolve-url.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _videojs_vhs_utils_es_media_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/vhs-utils/es/media-groups */ "./node_modules/@videojs/vhs-utils/es/media-groups.js");
/* harmony import */ var _videojs_vhs_utils_es_decode_b64_to_uint8_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @videojs/vhs-utils/es/decode-b64-to-uint8-array */ "./node_modules/@videojs/vhs-utils/es/decode-b64-to-uint8-array.js");
/* harmony import */ var _xmldom_xmldom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @xmldom/xmldom */ "./node_modules/@xmldom/xmldom/lib/index.js");
/*! @name mpd-parser @version 1.2.2 @license Apache-2.0 */






var version = "1.2.2";

const isObject = obj => {
  return !!obj && typeof obj === 'object';
};

const merge = (...objects) => {
  return objects.reduce((result, source) => {
    if (typeof source !== 'object') {
      return result;
    }

    Object.keys(source).forEach(key => {
      if (Array.isArray(result[key]) && Array.isArray(source[key])) {
        result[key] = result[key].concat(source[key]);
      } else if (isObject(result[key]) && isObject(source[key])) {
        result[key] = merge(result[key], source[key]);
      } else {
        result[key] = source[key];
      }
    });
    return result;
  }, {});
};
const values = o => Object.keys(o).map(k => o[k]);

const range = (start, end) => {
  const result = [];

  for (let i = start; i < end; i++) {
    result.push(i);
  }

  return result;
};
const flatten = lists => lists.reduce((x, y) => x.concat(y), []);
const from = list => {
  if (!list.length) {
    return [];
  }

  const result = [];

  for (let i = 0; i < list.length; i++) {
    result.push(list[i]);
  }

  return result;
};
const findIndexes = (l, key) => l.reduce((a, e, i) => {
  if (e[key]) {
    a.push(i);
  }

  return a;
}, []);
/**
 * Returns a union of the included lists provided each element can be identified by a key.
 *
 * @param {Array} list - list of lists to get the union of
 * @param {Function} keyFunction - the function to use as a key for each element
 *
 * @return {Array} the union of the arrays
 */

const union = (lists, keyFunction) => {
  return values(lists.reduce((acc, list) => {
    list.forEach(el => {
      acc[keyFunction(el)] = el;
    });
    return acc;
  }, {}));
};

var errors = {
  INVALID_NUMBER_OF_PERIOD: 'INVALID_NUMBER_OF_PERIOD',
  INVALID_NUMBER_OF_CONTENT_STEERING: 'INVALID_NUMBER_OF_CONTENT_STEERING',
  DASH_EMPTY_MANIFEST: 'DASH_EMPTY_MANIFEST',
  DASH_INVALID_XML: 'DASH_INVALID_XML',
  NO_BASE_URL: 'NO_BASE_URL',
  MISSING_SEGMENT_INFORMATION: 'MISSING_SEGMENT_INFORMATION',
  SEGMENT_TIME_UNSPECIFIED: 'SEGMENT_TIME_UNSPECIFIED',
  UNSUPPORTED_UTC_TIMING_SCHEME: 'UNSUPPORTED_UTC_TIMING_SCHEME'
};

/**
 * @typedef {Object} SingleUri
 * @property {string} uri - relative location of segment
 * @property {string} resolvedUri - resolved location of segment
 * @property {Object} byterange - Object containing information on how to make byte range
 *   requests following byte-range-spec per RFC2616.
 * @property {String} byterange.length - length of range request
 * @property {String} byterange.offset - byte offset of range request
 *
 * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1
 */

/**
 * Converts a URLType node (5.3.9.2.3 Table 13) to a segment object
 * that conforms to how m3u8-parser is structured
 *
 * @see https://github.com/videojs/m3u8-parser
 *
 * @param {string} baseUrl - baseUrl provided by <BaseUrl> nodes
 * @param {string} source - source url for segment
 * @param {string} range - optional range used for range calls,
 *   follows  RFC 2616, Clause 14.35.1
 * @return {SingleUri} full segment information transformed into a format similar
 *   to m3u8-parser
 */

const urlTypeToSegment = ({
  baseUrl = '',
  source = '',
  range = '',
  indexRange = ''
}) => {
  const segment = {
    uri: source,
    resolvedUri: (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(baseUrl || '', source)
  };

  if (range || indexRange) {
    const rangeStr = range ? range : indexRange;
    const ranges = rangeStr.split('-'); // default to parsing this as a BigInt if possible

    let startRange = (global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt) ? global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(ranges[0]) : parseInt(ranges[0], 10);
    let endRange = (global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt) ? global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(ranges[1]) : parseInt(ranges[1], 10); // convert back to a number if less than MAX_SAFE_INTEGER

    if (startRange < Number.MAX_SAFE_INTEGER && typeof startRange === 'bigint') {
      startRange = Number(startRange);
    }

    if (endRange < Number.MAX_SAFE_INTEGER && typeof endRange === 'bigint') {
      endRange = Number(endRange);
    }

    let length;

    if (typeof endRange === 'bigint' || typeof startRange === 'bigint') {
      length = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(endRange) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(startRange) + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
    } else {
      length = endRange - startRange + 1;
    }

    if (typeof length === 'bigint' && length < Number.MAX_SAFE_INTEGER) {
      length = Number(length);
    } // byterange should be inclusive according to
    // RFC 2616, Clause 14.35.1


    segment.byterange = {
      length,
      offset: startRange
    };
  }

  return segment;
};
const byteRangeToString = byterange => {
  // `endRange` is one less than `offset + length` because the HTTP range
  // header uses inclusive ranges
  let endRange;

  if (typeof byterange.offset === 'bigint' || typeof byterange.length === 'bigint') {
    endRange = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(byterange.offset) + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(byterange.length) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
  } else {
    endRange = byterange.offset + byterange.length - 1;
  }

  return `${byterange.offset}-${endRange}`;
};

/**
 * parse the end number attribue that can be a string
 * number, or undefined.
 *
 * @param {string|number|undefined} endNumber
 *        The end number attribute.
 *
 * @return {number|null}
 *          The result of parsing the end number.
 */

const parseEndNumber = endNumber => {
  if (endNumber && typeof endNumber !== 'number') {
    endNumber = parseInt(endNumber, 10);
  }

  if (isNaN(endNumber)) {
    return null;
  }

  return endNumber;
};
/**
 * Functions for calculating the range of available segments in static and dynamic
 * manifests.
 */


const segmentRange = {
  /**
   * Returns the entire range of available segments for a static MPD
   *
   * @param {Object} attributes
   *        Inheritied MPD attributes
   * @return {{ start: number, end: number }}
   *         The start and end numbers for available segments
   */
  static(attributes) {
    const {
      duration,
      timescale = 1,
      sourceDuration,
      periodDuration
    } = attributes;
    const endNumber = parseEndNumber(attributes.endNumber);
    const segmentDuration = duration / timescale;

    if (typeof endNumber === 'number') {
      return {
        start: 0,
        end: endNumber
      };
    }

    if (typeof periodDuration === 'number') {
      return {
        start: 0,
        end: periodDuration / segmentDuration
      };
    }

    return {
      start: 0,
      end: sourceDuration / segmentDuration
    };
  },

  /**
   * Returns the current live window range of available segments for a dynamic MPD
   *
   * @param {Object} attributes
   *        Inheritied MPD attributes
   * @return {{ start: number, end: number }}
   *         The start and end numbers for available segments
   */
  dynamic(attributes) {
    const {
      NOW,
      clientOffset,
      availabilityStartTime,
      timescale = 1,
      duration,
      periodStart = 0,
      minimumUpdatePeriod = 0,
      timeShiftBufferDepth = Infinity
    } = attributes;
    const endNumber = parseEndNumber(attributes.endNumber); // clientOffset is passed in at the top level of mpd-parser and is an offset calculated
    // after retrieving UTC server time.

    const now = (NOW + clientOffset) / 1000; // WC stands for Wall Clock.
    // Convert the period start time to EPOCH.

    const periodStartWC = availabilityStartTime + periodStart; // Period end in EPOCH is manifest's retrieval time + time until next update.

    const periodEndWC = now + minimumUpdatePeriod;
    const periodDuration = periodEndWC - periodStartWC;
    const segmentCount = Math.ceil(periodDuration * timescale / duration);
    const availableStart = Math.floor((now - periodStartWC - timeShiftBufferDepth) * timescale / duration);
    const availableEnd = Math.floor((now - periodStartWC) * timescale / duration);
    return {
      start: Math.max(0, availableStart),
      end: typeof endNumber === 'number' ? endNumber : Math.min(segmentCount, availableEnd)
    };
  }

};
/**
 * Maps a range of numbers to objects with information needed to build the corresponding
 * segment list
 *
 * @name toSegmentsCallback
 * @function
 * @param {number} number
 *        Number of the segment
 * @param {number} index
 *        Index of the number in the range list
 * @return {{ number: Number, duration: Number, timeline: Number, time: Number }}
 *         Object with segment timing and duration info
 */

/**
 * Returns a callback for Array.prototype.map for mapping a range of numbers to
 * information needed to build the segment list.
 *
 * @param {Object} attributes
 *        Inherited MPD attributes
 * @return {toSegmentsCallback}
 *         Callback map function
 */

const toSegments = attributes => number => {
  const {
    duration,
    timescale = 1,
    periodStart,
    startNumber = 1
  } = attributes;
  return {
    number: startNumber + number,
    duration: duration / timescale,
    timeline: periodStart,
    time: number * duration
  };
};
/**
 * Returns a list of objects containing segment timing and duration info used for
 * building the list of segments. This uses the @duration attribute specified
 * in the MPD manifest to derive the range of segments.
 *
 * @param {Object} attributes
 *        Inherited MPD attributes
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */

const parseByDuration = attributes => {
  const {
    type,
    duration,
    timescale = 1,
    periodDuration,
    sourceDuration
  } = attributes;
  const {
    start,
    end
  } = segmentRange[type](attributes);
  const segments = range(start, end).map(toSegments(attributes));

  if (type === 'static') {
    const index = segments.length - 1; // section is either a period or the full source

    const sectionDuration = typeof periodDuration === 'number' ? periodDuration : sourceDuration; // final segment may be less than full segment duration

    segments[index].duration = sectionDuration - duration / timescale * index;
  }

  return segments;
};

/**
 * Translates SegmentBase into a set of segments.
 * (DASH SPEC Section 5.3.9.3.2) contains a set of <SegmentURL> nodes.  Each
 * node should be translated into segment.
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @return {Object.<Array>} list of segments
 */

const segmentsFromBase = attributes => {
  const {
    baseUrl,
    initialization = {},
    sourceDuration,
    indexRange = '',
    periodStart,
    presentationTime,
    number = 0,
    duration
  } = attributes; // base url is required for SegmentBase to work, per spec (Section 5.3.9.2.1)

  if (!baseUrl) {
    throw new Error(errors.NO_BASE_URL);
  }

  const initSegment = urlTypeToSegment({
    baseUrl,
    source: initialization.sourceURL,
    range: initialization.range
  });
  const segment = urlTypeToSegment({
    baseUrl,
    source: baseUrl,
    indexRange
  });
  segment.map = initSegment; // If there is a duration, use it, otherwise use the given duration of the source
  // (since SegmentBase is only for one total segment)

  if (duration) {
    const segmentTimeInfo = parseByDuration(attributes);

    if (segmentTimeInfo.length) {
      segment.duration = segmentTimeInfo[0].duration;
      segment.timeline = segmentTimeInfo[0].timeline;
    }
  } else if (sourceDuration) {
    segment.duration = sourceDuration;
    segment.timeline = periodStart;
  } // If presentation time is provided, these segments are being generated by SIDX
  // references, and should use the time provided. For the general case of SegmentBase,
  // there should only be one segment in the period, so its presentation time is the same
  // as its period start.


  segment.presentationTime = presentationTime || periodStart;
  segment.number = number;
  return [segment];
};
/**
 * Given a playlist, a sidx box, and a baseUrl, update the segment list of the playlist
 * according to the sidx information given.
 *
 * playlist.sidx has metadadata about the sidx where-as the sidx param
 * is the parsed sidx box itself.
 *
 * @param {Object} playlist the playlist to update the sidx information for
 * @param {Object} sidx the parsed sidx box
 * @return {Object} the playlist object with the updated sidx information
 */

const addSidxSegmentsToPlaylist$1 = (playlist, sidx, baseUrl) => {
  // Retain init segment information
  const initSegment = playlist.sidx.map ? playlist.sidx.map : null; // Retain source duration from initial main manifest parsing

  const sourceDuration = playlist.sidx.duration; // Retain source timeline

  const timeline = playlist.timeline || 0;
  const sidxByteRange = playlist.sidx.byterange;
  const sidxEnd = sidxByteRange.offset + sidxByteRange.length; // Retain timescale of the parsed sidx

  const timescale = sidx.timescale; // referenceType 1 refers to other sidx boxes

  const mediaReferences = sidx.references.filter(r => r.referenceType !== 1);
  const segments = [];
  const type = playlist.endList ? 'static' : 'dynamic';
  const periodStart = playlist.sidx.timeline;
  let presentationTime = periodStart;
  let number = playlist.mediaSequence || 0; // firstOffset is the offset from the end of the sidx box

  let startIndex; // eslint-disable-next-line

  if (typeof sidx.firstOffset === 'bigint') {
    startIndex = global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(sidxEnd) + sidx.firstOffset;
  } else {
    startIndex = sidxEnd + sidx.firstOffset;
  }

  for (let i = 0; i < mediaReferences.length; i++) {
    const reference = sidx.references[i]; // size of the referenced (sub)segment

    const size = reference.referencedSize; // duration of the referenced (sub)segment, in  the  timescale
    // this will be converted to seconds when generating segments

    const duration = reference.subsegmentDuration; // should be an inclusive range

    let endIndex; // eslint-disable-next-line

    if (typeof startIndex === 'bigint') {
      endIndex = startIndex + global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(size) - global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(1);
    } else {
      endIndex = startIndex + size - 1;
    }

    const indexRange = `${startIndex}-${endIndex}`;
    const attributes = {
      baseUrl,
      timescale,
      timeline,
      periodStart,
      presentationTime,
      number,
      duration,
      sourceDuration,
      indexRange,
      type
    };
    const segment = segmentsFromBase(attributes)[0];

    if (initSegment) {
      segment.map = initSegment;
    }

    segments.push(segment);

    if (typeof startIndex === 'bigint') {
      startIndex += global_window__WEBPACK_IMPORTED_MODULE_1___default().BigInt(size);
    } else {
      startIndex += size;
    }

    presentationTime += duration / timescale;
    number++;
  }

  playlist.segments = segments;
  return playlist;
};

const SUPPORTED_MEDIA_TYPES = ['AUDIO', 'SUBTITLES']; // allow one 60fps frame as leniency (arbitrarily chosen)

const TIME_FUDGE = 1 / 60;
/**
 * Given a list of timelineStarts, combines, dedupes, and sorts them.
 *
 * @param {TimelineStart[]} timelineStarts - list of timeline starts
 *
 * @return {TimelineStart[]} the combined and deduped timeline starts
 */

const getUniqueTimelineStarts = timelineStarts => {
  return union(timelineStarts, ({
    timeline
  }) => timeline).sort((a, b) => a.timeline > b.timeline ? 1 : -1);
};
/**
 * Finds the playlist with the matching NAME attribute.
 *
 * @param {Array} playlists - playlists to search through
 * @param {string} name - the NAME attribute to search for
 *
 * @return {Object|null} the matching playlist object, or null
 */

const findPlaylistWithName = (playlists, name) => {
  for (let i = 0; i < playlists.length; i++) {
    if (playlists[i].attributes.NAME === name) {
      return playlists[i];
    }
  }

  return null;
};
/**
 * Gets a flattened array of media group playlists.
 *
 * @param {Object} manifest - the main manifest object
 *
 * @return {Array} the media group playlists
 */

const getMediaGroupPlaylists = manifest => {
  let mediaGroupPlaylists = [];
  (0,_videojs_vhs_utils_es_media_groups__WEBPACK_IMPORTED_MODULE_2__.forEachMediaGroup)(manifest, SUPPORTED_MEDIA_TYPES, (properties, type, group, label) => {
    mediaGroupPlaylists = mediaGroupPlaylists.concat(properties.playlists || []);
  });
  return mediaGroupPlaylists;
};
/**
 * Updates the playlist's media sequence numbers.
 *
 * @param {Object} config - options object
 * @param {Object} config.playlist - the playlist to update
 * @param {number} config.mediaSequence - the mediaSequence number to start with
 */

const updateMediaSequenceForPlaylist = ({
  playlist,
  mediaSequence
}) => {
  playlist.mediaSequence = mediaSequence;
  playlist.segments.forEach((segment, index) => {
    segment.number = playlist.mediaSequence + index;
  });
};
/**
 * Updates the media and discontinuity sequence numbers of newPlaylists given oldPlaylists
 * and a complete list of timeline starts.
 *
 * If no matching playlist is found, only the discontinuity sequence number of the playlist
 * will be updated.
 *
 * Since early available timelines are not supported, at least one segment must be present.
 *
 * @param {Object} config - options object
 * @param {Object[]} oldPlaylists - the old playlists to use as a reference
 * @param {Object[]} newPlaylists - the new playlists to update
 * @param {Object} timelineStarts - all timelineStarts seen in the stream to this point
 */

const updateSequenceNumbers = ({
  oldPlaylists,
  newPlaylists,
  timelineStarts
}) => {
  newPlaylists.forEach(playlist => {
    playlist.discontinuitySequence = timelineStarts.findIndex(function ({
      timeline
    }) {
      return timeline === playlist.timeline;
    }); // Playlists NAMEs come from DASH Representation IDs, which are mandatory
    // (see ISO_23009-1-2012 5.3.5.2).
    //
    // If the same Representation existed in a prior Period, it will retain the same NAME.

    const oldPlaylist = findPlaylistWithName(oldPlaylists, playlist.attributes.NAME);

    if (!oldPlaylist) {
      // Since this is a new playlist, the media sequence values can start from 0 without
      // consequence.
      return;
    } // TODO better support for live SIDX
    //
    // As of this writing, mpd-parser does not support multiperiod SIDX (in live or VOD).
    // This is evident by a playlist only having a single SIDX reference. In a multiperiod
    // playlist there would need to be multiple SIDX references. In addition, live SIDX is
    // not supported when the SIDX properties change on refreshes.
    //
    // In the future, if support needs to be added, the merging logic here can be called
    // after SIDX references are resolved. For now, exit early to prevent exceptions being
    // thrown due to undefined references.


    if (playlist.sidx) {
      return;
    } // Since we don't yet support early available timelines, we don't need to support
    // playlists with no segments.


    const firstNewSegment = playlist.segments[0];
    const oldMatchingSegmentIndex = oldPlaylist.segments.findIndex(function (oldSegment) {
      return Math.abs(oldSegment.presentationTime - firstNewSegment.presentationTime) < TIME_FUDGE;
    }); // No matching segment from the old playlist means the entire playlist was refreshed.
    // In this case the media sequence should account for this update, and the new segments
    // should be marked as discontinuous from the prior content, since the last prior
    // timeline was removed.

    if (oldMatchingSegmentIndex === -1) {
      updateMediaSequenceForPlaylist({
        playlist,
        mediaSequence: oldPlaylist.mediaSequence + oldPlaylist.segments.length
      });
      playlist.segments[0].discontinuity = true;
      playlist.discontinuityStarts.unshift(0); // No matching segment does not necessarily mean there's missing content.
      //
      // If the new playlist's timeline is the same as the last seen segment's timeline,
      // then a discontinuity can be added to identify that there's potentially missing
      // content. If there's no missing content, the discontinuity should still be rather
      // harmless. It's possible that if segment durations are accurate enough, that the
      // existence of a gap can be determined using the presentation times and durations,
      // but if the segment timing info is off, it may introduce more problems than simply
      // adding the discontinuity.
      //
      // If the new playlist's timeline is different from the last seen segment's timeline,
      // then a discontinuity can be added to identify that this is the first seen segment
      // of a new timeline. However, the logic at the start of this function that
      // determined the disconinuity sequence by timeline index is now off by one (the
      // discontinuity of the newest timeline hasn't yet fallen off the manifest...since
      // we added it), so the disconinuity sequence must be decremented.
      //
      // A period may also have a duration of zero, so the case of no segments is handled
      // here even though we don't yet support early available periods.

      if (!oldPlaylist.segments.length && playlist.timeline > oldPlaylist.timeline || oldPlaylist.segments.length && playlist.timeline > oldPlaylist.segments[oldPlaylist.segments.length - 1].timeline) {
        playlist.discontinuitySequence--;
      }

      return;
    } // If the first segment matched with a prior segment on a discontinuity (it's matching
    // on the first segment of a period), then the discontinuitySequence shouldn't be the
    // timeline's matching one, but instead should be the one prior, and the first segment
    // of the new manifest should be marked with a discontinuity.
    //
    // The reason for this special case is that discontinuity sequence shows how many
    // discontinuities have fallen off of the playlist, and discontinuities are marked on
    // the first segment of a new "timeline." Because of this, while DASH will retain that
    // Period while the "timeline" exists, HLS keeps track of it via the discontinuity
    // sequence, and that first segment is an indicator, but can be removed before that
    // timeline is gone.


    const oldMatchingSegment = oldPlaylist.segments[oldMatchingSegmentIndex];

    if (oldMatchingSegment.discontinuity && !firstNewSegment.discontinuity) {
      firstNewSegment.discontinuity = true;
      playlist.discontinuityStarts.unshift(0);
      playlist.discontinuitySequence--;
    }

    updateMediaSequenceForPlaylist({
      playlist,
      mediaSequence: oldPlaylist.segments[oldMatchingSegmentIndex].number
    });
  });
};
/**
 * Given an old parsed manifest object and a new parsed manifest object, updates the
 * sequence and timing values within the new manifest to ensure that it lines up with the
 * old.
 *
 * @param {Array} oldManifest - the old main manifest object
 * @param {Array} newManifest - the new main manifest object
 *
 * @return {Object} the updated new manifest object
 */

const positionManifestOnTimeline = ({
  oldManifest,
  newManifest
}) => {
  // Starting from v4.1.2 of the IOP, section 4.4.3.3 states:
  //
  // "MPD@availabilityStartTime and Period@start shall not be changed over MPD updates."
  //
  // This was added from https://github.com/Dash-Industry-Forum/DASH-IF-IOP/issues/160
  //
  // Because of this change, and the difficulty of supporting periods with changing start
  // times, periods with changing start times are not supported. This makes the logic much
  // simpler, since periods with the same start time can be considerred the same period
  // across refreshes.
  //
  // To give an example as to the difficulty of handling periods where the start time may
  // change, if a single period manifest is refreshed with another manifest with a single
  // period, and both the start and end times are increased, then the only way to determine
  // if it's a new period or an old one that has changed is to look through the segments of
  // each playlist and determine the presentation time bounds to find a match. In addition,
  // if the period start changed to exceed the old period end, then there would be no
  // match, and it would not be possible to determine whether the refreshed period is a new
  // one or the old one.
  const oldPlaylists = oldManifest.playlists.concat(getMediaGroupPlaylists(oldManifest));
  const newPlaylists = newManifest.playlists.concat(getMediaGroupPlaylists(newManifest)); // Save all seen timelineStarts to the new manifest. Although this potentially means that
  // there's a "memory leak" in that it will never stop growing, in reality, only a couple
  // of properties are saved for each seen Period. Even long running live streams won't
  // generate too many Periods, unless the stream is watched for decades. In the future,
  // this can be optimized by mapping to discontinuity sequence numbers for each timeline,
  // but it may not become an issue, and the additional info can be useful for debugging.

  newManifest.timelineStarts = getUniqueTimelineStarts([oldManifest.timelineStarts, newManifest.timelineStarts]);
  updateSequenceNumbers({
    oldPlaylists,
    newPlaylists,
    timelineStarts: newManifest.timelineStarts
  });
  return newManifest;
};

const generateSidxKey = sidx => sidx && sidx.uri + '-' + byteRangeToString(sidx.byterange);

const mergeDiscontiguousPlaylists = playlists => {
  // Break out playlists into groups based on their baseUrl
  const playlistsByBaseUrl = playlists.reduce(function (acc, cur) {
    if (!acc[cur.attributes.baseUrl]) {
      acc[cur.attributes.baseUrl] = [];
    }

    acc[cur.attributes.baseUrl].push(cur);
    return acc;
  }, {});
  let allPlaylists = [];
  Object.values(playlistsByBaseUrl).forEach(playlistGroup => {
    const mergedPlaylists = values(playlistGroup.reduce((acc, playlist) => {
      // assuming playlist IDs are the same across periods
      // TODO: handle multiperiod where representation sets are not the same
      // across periods
      const name = playlist.attributes.id + (playlist.attributes.lang || '');

      if (!acc[name]) {
        // First Period
        acc[name] = playlist;
        acc[name].attributes.timelineStarts = [];
      } else {
        // Subsequent Periods
        if (playlist.segments) {
          // first segment of subsequent periods signal a discontinuity
          if (playlist.segments[0]) {
            playlist.segments[0].discontinuity = true;
          }

          acc[name].segments.push(...playlist.segments);
        } // bubble up contentProtection, this assumes all DRM content
        // has the same contentProtection


        if (playlist.attributes.contentProtection) {
          acc[name].attributes.contentProtection = playlist.attributes.contentProtection;
        }
      }

      acc[name].attributes.timelineStarts.push({
        // Although they represent the same number, it's important to have both to make it
        // compatible with HLS potentially having a similar attribute.
        start: playlist.attributes.periodStart,
        timeline: playlist.attributes.periodStart
      });
      return acc;
    }, {}));
    allPlaylists = allPlaylists.concat(mergedPlaylists);
  });
  return allPlaylists.map(playlist => {
    playlist.discontinuityStarts = findIndexes(playlist.segments || [], 'discontinuity');
    return playlist;
  });
};

const addSidxSegmentsToPlaylist = (playlist, sidxMapping) => {
  const sidxKey = generateSidxKey(playlist.sidx);
  const sidxMatch = sidxKey && sidxMapping[sidxKey] && sidxMapping[sidxKey].sidx;

  if (sidxMatch) {
    addSidxSegmentsToPlaylist$1(playlist, sidxMatch, playlist.sidx.resolvedUri);
  }

  return playlist;
};
const addSidxSegmentsToPlaylists = (playlists, sidxMapping = {}) => {
  if (!Object.keys(sidxMapping).length) {
    return playlists;
  }

  for (const i in playlists) {
    playlists[i] = addSidxSegmentsToPlaylist(playlists[i], sidxMapping);
  }

  return playlists;
};
const formatAudioPlaylist = ({
  attributes,
  segments,
  sidx,
  mediaSequence,
  discontinuitySequence,
  discontinuityStarts
}, isAudioOnly) => {
  const playlist = {
    attributes: {
      NAME: attributes.id,
      BANDWIDTH: attributes.bandwidth,
      CODECS: attributes.codecs,
      ['PROGRAM-ID']: 1
    },
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: attributes.baseUrl || '',
    targetDuration: attributes.duration,
    discontinuitySequence,
    discontinuityStarts,
    timelineStarts: attributes.timelineStarts,
    mediaSequence,
    segments
  };

  if (attributes.contentProtection) {
    playlist.contentProtection = attributes.contentProtection;
  }

  if (attributes.serviceLocation) {
    playlist.attributes.serviceLocation = attributes.serviceLocation;
  }

  if (sidx) {
    playlist.sidx = sidx;
  }

  if (isAudioOnly) {
    playlist.attributes.AUDIO = 'audio';
    playlist.attributes.SUBTITLES = 'subs';
  }

  return playlist;
};
const formatVttPlaylist = ({
  attributes,
  segments,
  mediaSequence,
  discontinuityStarts,
  discontinuitySequence
}) => {
  if (typeof segments === 'undefined') {
    // vtt tracks may use single file in BaseURL
    segments = [{
      uri: attributes.baseUrl,
      timeline: attributes.periodStart,
      resolvedUri: attributes.baseUrl || '',
      duration: attributes.sourceDuration,
      number: 0
    }]; // targetDuration should be the same duration as the only segment

    attributes.duration = attributes.sourceDuration;
  }

  const m3u8Attributes = {
    NAME: attributes.id,
    BANDWIDTH: attributes.bandwidth,
    ['PROGRAM-ID']: 1
  };

  if (attributes.codecs) {
    m3u8Attributes.CODECS = attributes.codecs;
  }

  const vttPlaylist = {
    attributes: m3u8Attributes,
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: attributes.baseUrl || '',
    targetDuration: attributes.duration,
    timelineStarts: attributes.timelineStarts,
    discontinuityStarts,
    discontinuitySequence,
    mediaSequence,
    segments
  };

  if (attributes.serviceLocation) {
    vttPlaylist.attributes.serviceLocation = attributes.serviceLocation;
  }

  return vttPlaylist;
};
const organizeAudioPlaylists = (playlists, sidxMapping = {}, isAudioOnly = false) => {
  let mainPlaylist;
  const formattedPlaylists = playlists.reduce((a, playlist) => {
    const role = playlist.attributes.role && playlist.attributes.role.value || '';
    const language = playlist.attributes.lang || '';
    let label = playlist.attributes.label || 'main';

    if (language && !playlist.attributes.label) {
      const roleLabel = role ? ` (${role})` : '';
      label = `${playlist.attributes.lang}${roleLabel}`;
    }

    if (!a[label]) {
      a[label] = {
        language,
        autoselect: true,
        default: role === 'main',
        playlists: [],
        uri: ''
      };
    }

    const formatted = addSidxSegmentsToPlaylist(formatAudioPlaylist(playlist, isAudioOnly), sidxMapping);
    a[label].playlists.push(formatted);

    if (typeof mainPlaylist === 'undefined' && role === 'main') {
      mainPlaylist = playlist;
      mainPlaylist.default = true;
    }

    return a;
  }, {}); // if no playlists have role "main", mark the first as main

  if (!mainPlaylist) {
    const firstLabel = Object.keys(formattedPlaylists)[0];
    formattedPlaylists[firstLabel].default = true;
  }

  return formattedPlaylists;
};
const organizeVttPlaylists = (playlists, sidxMapping = {}) => {
  return playlists.reduce((a, playlist) => {
    const label = playlist.attributes.label || playlist.attributes.lang || 'text';

    if (!a[label]) {
      a[label] = {
        language: label,
        default: false,
        autoselect: false,
        playlists: [],
        uri: ''
      };
    }

    a[label].playlists.push(addSidxSegmentsToPlaylist(formatVttPlaylist(playlist), sidxMapping));
    return a;
  }, {});
};

const organizeCaptionServices = captionServices => captionServices.reduce((svcObj, svc) => {
  if (!svc) {
    return svcObj;
  }

  svc.forEach(service => {
    const {
      channel,
      language
    } = service;
    svcObj[language] = {
      autoselect: false,
      default: false,
      instreamId: channel,
      language
    };

    if (service.hasOwnProperty('aspectRatio')) {
      svcObj[language].aspectRatio = service.aspectRatio;
    }

    if (service.hasOwnProperty('easyReader')) {
      svcObj[language].easyReader = service.easyReader;
    }

    if (service.hasOwnProperty('3D')) {
      svcObj[language]['3D'] = service['3D'];
    }
  });
  return svcObj;
}, {});

const formatVideoPlaylist = ({
  attributes,
  segments,
  sidx,
  discontinuityStarts
}) => {
  const playlist = {
    attributes: {
      NAME: attributes.id,
      AUDIO: 'audio',
      SUBTITLES: 'subs',
      RESOLUTION: {
        width: attributes.width,
        height: attributes.height
      },
      CODECS: attributes.codecs,
      BANDWIDTH: attributes.bandwidth,
      ['PROGRAM-ID']: 1
    },
    uri: '',
    endList: attributes.type === 'static',
    timeline: attributes.periodStart,
    resolvedUri: attributes.baseUrl || '',
    targetDuration: attributes.duration,
    discontinuityStarts,
    timelineStarts: attributes.timelineStarts,
    segments
  };

  if (attributes.frameRate) {
    playlist.attributes['FRAME-RATE'] = attributes.frameRate;
  }

  if (attributes.contentProtection) {
    playlist.contentProtection = attributes.contentProtection;
  }

  if (attributes.serviceLocation) {
    playlist.attributes.serviceLocation = attributes.serviceLocation;
  }

  if (sidx) {
    playlist.sidx = sidx;
  }

  return playlist;
};

const videoOnly = ({
  attributes
}) => attributes.mimeType === 'video/mp4' || attributes.mimeType === 'video/webm' || attributes.contentType === 'video';

const audioOnly = ({
  attributes
}) => attributes.mimeType === 'audio/mp4' || attributes.mimeType === 'audio/webm' || attributes.contentType === 'audio';

const vttOnly = ({
  attributes
}) => attributes.mimeType === 'text/vtt' || attributes.contentType === 'text';
/**
 * Contains start and timeline properties denoting a timeline start. For DASH, these will
 * be the same number.
 *
 * @typedef {Object} TimelineStart
 * @property {number} start - the start time of the timeline
 * @property {number} timeline - the timeline number
 */

/**
 * Adds appropriate media and discontinuity sequence values to the segments and playlists.
 *
 * Throughout mpd-parser, the `number` attribute is used in relation to `startNumber`, a
 * DASH specific attribute used in constructing segment URI's from templates. However, from
 * an HLS perspective, the `number` attribute on a segment would be its `mediaSequence`
 * value, which should start at the original media sequence value (or 0) and increment by 1
 * for each segment thereafter. Since DASH's `startNumber` values are independent per
 * period, it doesn't make sense to use it for `number`. Instead, assume everything starts
 * from a 0 mediaSequence value and increment from there.
 *
 * Note that VHS currently doesn't use the `number` property, but it can be helpful for
 * debugging and making sense of the manifest.
 *
 * For live playlists, to account for values increasing in manifests when periods are
 * removed on refreshes, merging logic should be used to update the numbers to their
 * appropriate values (to ensure they're sequential and increasing).
 *
 * @param {Object[]} playlists - the playlists to update
 * @param {TimelineStart[]} timelineStarts - the timeline starts for the manifest
 */


const addMediaSequenceValues = (playlists, timelineStarts) => {
  // increment all segments sequentially
  playlists.forEach(playlist => {
    playlist.mediaSequence = 0;
    playlist.discontinuitySequence = timelineStarts.findIndex(function ({
      timeline
    }) {
      return timeline === playlist.timeline;
    });

    if (!playlist.segments) {
      return;
    }

    playlist.segments.forEach((segment, index) => {
      segment.number = index;
    });
  });
};
/**
 * Given a media group object, flattens all playlists within the media group into a single
 * array.
 *
 * @param {Object} mediaGroupObject - the media group object
 *
 * @return {Object[]}
 *         The media group playlists
 */

const flattenMediaGroupPlaylists = mediaGroupObject => {
  if (!mediaGroupObject) {
    return [];
  }

  return Object.keys(mediaGroupObject).reduce((acc, label) => {
    const labelContents = mediaGroupObject[label];
    return acc.concat(labelContents.playlists);
  }, []);
};
const toM3u8 = ({
  dashPlaylists,
  locations,
  contentSteering,
  sidxMapping = {},
  previousManifest,
  eventStream
}) => {
  if (!dashPlaylists.length) {
    return {};
  } // grab all main manifest attributes


  const {
    sourceDuration: duration,
    type,
    suggestedPresentationDelay,
    minimumUpdatePeriod
  } = dashPlaylists[0].attributes;
  const videoPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(videoOnly)).map(formatVideoPlaylist);
  const audioPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(audioOnly));
  const vttPlaylists = mergeDiscontiguousPlaylists(dashPlaylists.filter(vttOnly));
  const captions = dashPlaylists.map(playlist => playlist.attributes.captionServices).filter(Boolean);
  const manifest = {
    allowCache: true,
    discontinuityStarts: [],
    segments: [],
    endList: true,
    mediaGroups: {
      AUDIO: {},
      VIDEO: {},
      ['CLOSED-CAPTIONS']: {},
      SUBTITLES: {}
    },
    uri: '',
    duration,
    playlists: addSidxSegmentsToPlaylists(videoPlaylists, sidxMapping)
  };

  if (minimumUpdatePeriod >= 0) {
    manifest.minimumUpdatePeriod = minimumUpdatePeriod * 1000;
  }

  if (locations) {
    manifest.locations = locations;
  }

  if (contentSteering) {
    manifest.contentSteering = contentSteering;
  }

  if (type === 'dynamic') {
    manifest.suggestedPresentationDelay = suggestedPresentationDelay;
  }

  if (eventStream && eventStream.length > 0) {
    manifest.eventStream = eventStream;
  }

  const isAudioOnly = manifest.playlists.length === 0;
  const organizedAudioGroup = audioPlaylists.length ? organizeAudioPlaylists(audioPlaylists, sidxMapping, isAudioOnly) : null;
  const organizedVttGroup = vttPlaylists.length ? organizeVttPlaylists(vttPlaylists, sidxMapping) : null;
  const formattedPlaylists = videoPlaylists.concat(flattenMediaGroupPlaylists(organizedAudioGroup), flattenMediaGroupPlaylists(organizedVttGroup));
  const playlistTimelineStarts = formattedPlaylists.map(({
    timelineStarts
  }) => timelineStarts);
  manifest.timelineStarts = getUniqueTimelineStarts(playlistTimelineStarts);
  addMediaSequenceValues(formattedPlaylists, manifest.timelineStarts);

  if (organizedAudioGroup) {
    manifest.mediaGroups.AUDIO.audio = organizedAudioGroup;
  }

  if (organizedVttGroup) {
    manifest.mediaGroups.SUBTITLES.subs = organizedVttGroup;
  }

  if (captions.length) {
    manifest.mediaGroups['CLOSED-CAPTIONS'].cc = organizeCaptionServices(captions);
  }

  if (previousManifest) {
    return positionManifestOnTimeline({
      oldManifest: previousManifest,
      newManifest: manifest
    });
  }

  return manifest;
};

/**
 * Calculates the R (repetition) value for a live stream (for the final segment
 * in a manifest where the r value is negative 1)
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {number} time
 *        current time (typically the total time up until the final segment)
 * @param {number} duration
 *        duration property for the given <S />
 *
 * @return {number}
 *        R value to reach the end of the given period
 */
const getLiveRValue = (attributes, time, duration) => {
  const {
    NOW,
    clientOffset,
    availabilityStartTime,
    timescale = 1,
    periodStart = 0,
    minimumUpdatePeriod = 0
  } = attributes;
  const now = (NOW + clientOffset) / 1000;
  const periodStartWC = availabilityStartTime + periodStart;
  const periodEndWC = now + minimumUpdatePeriod;
  const periodDuration = periodEndWC - periodStartWC;
  return Math.ceil((periodDuration * timescale - time) / duration);
};
/**
 * Uses information provided by SegmentTemplate.SegmentTimeline to determine segment
 * timing and duration
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */


const parseByTimeline = (attributes, segmentTimeline) => {
  const {
    type,
    minimumUpdatePeriod = 0,
    media = '',
    sourceDuration,
    timescale = 1,
    startNumber = 1,
    periodStart: timeline
  } = attributes;
  const segments = [];
  let time = -1;

  for (let sIndex = 0; sIndex < segmentTimeline.length; sIndex++) {
    const S = segmentTimeline[sIndex];
    const duration = S.d;
    const repeat = S.r || 0;
    const segmentTime = S.t || 0;

    if (time < 0) {
      // first segment
      time = segmentTime;
    }

    if (segmentTime && segmentTime > time) {
      // discontinuity
      // TODO: How to handle this type of discontinuity
      // timeline++ here would treat it like HLS discontuity and content would
      // get appended without gap
      // E.G.
      //  <S t="0" d="1" />
      //  <S d="1" />
      //  <S d="1" />
      //  <S t="5" d="1" />
      // would have $Time$ values of [0, 1, 2, 5]
      // should this be appened at time positions [0, 1, 2, 3],(#EXT-X-DISCONTINUITY)
      // or [0, 1, 2, gap, gap, 5]? (#EXT-X-GAP)
      // does the value of sourceDuration consider this when calculating arbitrary
      // negative @r repeat value?
      // E.G. Same elements as above with this added at the end
      //  <S d="1" r="-1" />
      //  with a sourceDuration of 10
      // Would the 2 gaps be included in the time duration calculations resulting in
      // 8 segments with $Time$ values of [0, 1, 2, 5, 6, 7, 8, 9] or 10 segments
      // with $Time$ values of [0, 1, 2, 5, 6, 7, 8, 9, 10, 11] ?
      time = segmentTime;
    }

    let count;

    if (repeat < 0) {
      const nextS = sIndex + 1;

      if (nextS === segmentTimeline.length) {
        // last segment
        if (type === 'dynamic' && minimumUpdatePeriod > 0 && media.indexOf('$Number$') > 0) {
          count = getLiveRValue(attributes, time, duration);
        } else {
          // TODO: This may be incorrect depending on conclusion of TODO above
          count = (sourceDuration * timescale - time) / duration;
        }
      } else {
        count = (segmentTimeline[nextS].t - time) / duration;
      }
    } else {
      count = repeat + 1;
    }

    const end = startNumber + segments.length + count;
    let number = startNumber + segments.length;

    while (number < end) {
      segments.push({
        number,
        duration: duration / timescale,
        time,
        timeline
      });
      time += duration;
      number++;
    }
  }

  return segments;
};

const identifierPattern = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g;
/**
 * Replaces template identifiers with corresponding values. To be used as the callback
 * for String.prototype.replace
 *
 * @name replaceCallback
 * @function
 * @param {string} match
 *        Entire match of identifier
 * @param {string} identifier
 *        Name of matched identifier
 * @param {string} format
 *        Format tag string. Its presence indicates that padding is expected
 * @param {string} width
 *        Desired length of the replaced value. Values less than this width shall be left
 *        zero padded
 * @return {string}
 *         Replacement for the matched identifier
 */

/**
 * Returns a function to be used as a callback for String.prototype.replace to replace
 * template identifiers
 *
 * @param {Obect} values
 *        Object containing values that shall be used to replace known identifiers
 * @param {number} values.RepresentationID
 *        Value of the Representation@id attribute
 * @param {number} values.Number
 *        Number of the corresponding segment
 * @param {number} values.Bandwidth
 *        Value of the Representation@bandwidth attribute.
 * @param {number} values.Time
 *        Timestamp value of the corresponding segment
 * @return {replaceCallback}
 *         Callback to be used with String.prototype.replace to replace identifiers
 */

const identifierReplacement = values => (match, identifier, format, width) => {
  if (match === '$$') {
    // escape sequence
    return '$';
  }

  if (typeof values[identifier] === 'undefined') {
    return match;
  }

  const value = '' + values[identifier];

  if (identifier === 'RepresentationID') {
    // Format tag shall not be present with RepresentationID
    return value;
  }

  if (!format) {
    width = 1;
  } else {
    width = parseInt(width, 10);
  }

  if (value.length >= width) {
    return value;
  }

  return `${new Array(width - value.length + 1).join('0')}${value}`;
};
/**
 * Constructs a segment url from a template string
 *
 * @param {string} url
 *        Template string to construct url from
 * @param {Obect} values
 *        Object containing values that shall be used to replace known identifiers
 * @param {number} values.RepresentationID
 *        Value of the Representation@id attribute
 * @param {number} values.Number
 *        Number of the corresponding segment
 * @param {number} values.Bandwidth
 *        Value of the Representation@bandwidth attribute.
 * @param {number} values.Time
 *        Timestamp value of the corresponding segment
 * @return {string}
 *         Segment url with identifiers replaced
 */

const constructTemplateUrl = (url, values) => url.replace(identifierPattern, identifierReplacement(values));
/**
 * Generates a list of objects containing timing and duration information about each
 * segment needed to generate segment uris and the complete segment object
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */

const parseTemplateInfo = (attributes, segmentTimeline) => {
  if (!attributes.duration && !segmentTimeline) {
    // if neither @duration or SegmentTimeline are present, then there shall be exactly
    // one media segment
    return [{
      number: attributes.startNumber || 1,
      duration: attributes.sourceDuration,
      time: 0,
      timeline: attributes.periodStart
    }];
  }

  if (attributes.duration) {
    return parseByDuration(attributes);
  }

  return parseByTimeline(attributes, segmentTimeline);
};
/**
 * Generates a list of segments using information provided by the SegmentTemplate element
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {Object[]}
 *         List of segment objects
 */

const segmentsFromTemplate = (attributes, segmentTimeline) => {
  const templateValues = {
    RepresentationID: attributes.id,
    Bandwidth: attributes.bandwidth || 0
  };
  const {
    initialization = {
      sourceURL: '',
      range: ''
    }
  } = attributes;
  const mapSegment = urlTypeToSegment({
    baseUrl: attributes.baseUrl,
    source: constructTemplateUrl(initialization.sourceURL, templateValues),
    range: initialization.range
  });
  const segments = parseTemplateInfo(attributes, segmentTimeline);
  return segments.map(segment => {
    templateValues.Number = segment.number;
    templateValues.Time = segment.time;
    const uri = constructTemplateUrl(attributes.media || '', templateValues); // See DASH spec section 5.3.9.2.2
    // - if timescale isn't present on any level, default to 1.

    const timescale = attributes.timescale || 1; // - if presentationTimeOffset isn't present on any level, default to 0

    const presentationTimeOffset = attributes.presentationTimeOffset || 0;
    const presentationTime = // Even if the @t attribute is not specified for the segment, segment.time is
    // calculated in mpd-parser prior to this, so it's assumed to be available.
    attributes.periodStart + (segment.time - presentationTimeOffset) / timescale;
    const map = {
      uri,
      timeline: segment.timeline,
      duration: segment.duration,
      resolvedUri: (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(attributes.baseUrl || '', uri),
      map: mapSegment,
      number: segment.number,
      presentationTime
    };
    return map;
  });
};

/**
 * Converts a <SegmentUrl> (of type URLType from the DASH spec 5.3.9.2 Table 14)
 * to an object that matches the output of a segment in videojs/mpd-parser
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @param {Object} segmentUrl
 *   <SegmentURL> node to translate into a segment object
 * @return {Object} translated segment object
 */

const SegmentURLToSegmentObject = (attributes, segmentUrl) => {
  const {
    baseUrl,
    initialization = {}
  } = attributes;
  const initSegment = urlTypeToSegment({
    baseUrl,
    source: initialization.sourceURL,
    range: initialization.range
  });
  const segment = urlTypeToSegment({
    baseUrl,
    source: segmentUrl.media,
    range: segmentUrl.mediaRange
  });
  segment.map = initSegment;
  return segment;
};
/**
 * Generates a list of segments using information provided by the SegmentList element
 * SegmentList (DASH SPEC Section 5.3.9.3.2) contains a set of <SegmentURL> nodes.  Each
 * node should be translated into segment.
 *
 * @param {Object} attributes
 *   Object containing all inherited attributes from parent elements with attribute
 *   names as keys
 * @param {Object[]|undefined} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *        the SegmentTimeline element
 * @return {Object.<Array>} list of segments
 */


const segmentsFromList = (attributes, segmentTimeline) => {
  const {
    duration,
    segmentUrls = [],
    periodStart
  } = attributes; // Per spec (5.3.9.2.1) no way to determine segment duration OR
  // if both SegmentTimeline and @duration are defined, it is outside of spec.

  if (!duration && !segmentTimeline || duration && segmentTimeline) {
    throw new Error(errors.SEGMENT_TIME_UNSPECIFIED);
  }

  const segmentUrlMap = segmentUrls.map(segmentUrlObject => SegmentURLToSegmentObject(attributes, segmentUrlObject));
  let segmentTimeInfo;

  if (duration) {
    segmentTimeInfo = parseByDuration(attributes);
  }

  if (segmentTimeline) {
    segmentTimeInfo = parseByTimeline(attributes, segmentTimeline);
  }

  const segments = segmentTimeInfo.map((segmentTime, index) => {
    if (segmentUrlMap[index]) {
      const segment = segmentUrlMap[index]; // See DASH spec section 5.3.9.2.2
      // - if timescale isn't present on any level, default to 1.

      const timescale = attributes.timescale || 1; // - if presentationTimeOffset isn't present on any level, default to 0

      const presentationTimeOffset = attributes.presentationTimeOffset || 0;
      segment.timeline = segmentTime.timeline;
      segment.duration = segmentTime.duration;
      segment.number = segmentTime.number;
      segment.presentationTime = periodStart + (segmentTime.time - presentationTimeOffset) / timescale;
      return segment;
    } // Since we're mapping we should get rid of any blank segments (in case
    // the given SegmentTimeline is handling for more elements than we have
    // SegmentURLs for).

  }).filter(segment => segment);
  return segments;
};

const generateSegments = ({
  attributes,
  segmentInfo
}) => {
  let segmentAttributes;
  let segmentsFn;

  if (segmentInfo.template) {
    segmentsFn = segmentsFromTemplate;
    segmentAttributes = merge(attributes, segmentInfo.template);
  } else if (segmentInfo.base) {
    segmentsFn = segmentsFromBase;
    segmentAttributes = merge(attributes, segmentInfo.base);
  } else if (segmentInfo.list) {
    segmentsFn = segmentsFromList;
    segmentAttributes = merge(attributes, segmentInfo.list);
  }

  const segmentsInfo = {
    attributes
  };

  if (!segmentsFn) {
    return segmentsInfo;
  }

  const segments = segmentsFn(segmentAttributes, segmentInfo.segmentTimeline); // The @duration attribute will be used to determin the playlist's targetDuration which
  // must be in seconds. Since we've generated the segment list, we no longer need
  // @duration to be in @timescale units, so we can convert it here.

  if (segmentAttributes.duration) {
    const {
      duration,
      timescale = 1
    } = segmentAttributes;
    segmentAttributes.duration = duration / timescale;
  } else if (segments.length) {
    // if there is no @duration attribute, use the largest segment duration as
    // as target duration
    segmentAttributes.duration = segments.reduce((max, segment) => {
      return Math.max(max, Math.ceil(segment.duration));
    }, 0);
  } else {
    segmentAttributes.duration = 0;
  }

  segmentsInfo.attributes = segmentAttributes;
  segmentsInfo.segments = segments; // This is a sidx box without actual segment information

  if (segmentInfo.base && segmentAttributes.indexRange) {
    segmentsInfo.sidx = segments[0];
    segmentsInfo.segments = [];
  }

  return segmentsInfo;
};
const toPlaylists = representations => representations.map(generateSegments);

const findChildren = (element, name) => from(element.childNodes).filter(({
  tagName
}) => tagName === name);
const getContent = element => element.textContent.trim();

/**
 * Converts the provided string that may contain a division operation to a number.
 *
 * @param {string} value - the provided string value
 *
 * @return {number} the parsed string value
 */
const parseDivisionValue = value => {
  return parseFloat(value.split('/').reduce((prev, current) => prev / current));
};

const parseDuration = str => {
  const SECONDS_IN_YEAR = 365 * 24 * 60 * 60;
  const SECONDS_IN_MONTH = 30 * 24 * 60 * 60;
  const SECONDS_IN_DAY = 24 * 60 * 60;
  const SECONDS_IN_HOUR = 60 * 60;
  const SECONDS_IN_MIN = 60; // P10Y10M10DT10H10M10.1S

  const durationRegex = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/;
  const match = durationRegex.exec(str);

  if (!match) {
    return 0;
  }

  const [year, month, day, hour, minute, second] = match.slice(1);
  return parseFloat(year || 0) * SECONDS_IN_YEAR + parseFloat(month || 0) * SECONDS_IN_MONTH + parseFloat(day || 0) * SECONDS_IN_DAY + parseFloat(hour || 0) * SECONDS_IN_HOUR + parseFloat(minute || 0) * SECONDS_IN_MIN + parseFloat(second || 0);
};
const parseDate = str => {
  // Date format without timezone according to ISO 8601
  // YYY-MM-DDThh:mm:ss.ssssss
  const dateRegex = /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/; // If the date string does not specifiy a timezone, we must specifiy UTC. This is
  // expressed by ending with 'Z'

  if (dateRegex.test(str)) {
    str += 'Z';
  }

  return Date.parse(str);
};

const parsers = {
  /**
   * Specifies the duration of the entire Media Presentation. Format is a duration string
   * as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  mediaPresentationDuration(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the Segment availability start time for all Segments referred to in this
   * MPD. For a dynamic manifest, it specifies the anchor for the earliest availability
   * time. Format is a date string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The date as seconds from unix epoch
   */
  availabilityStartTime(value) {
    return parseDate(value) / 1000;
  },

  /**
   * Specifies the smallest period between potential changes to the MPD. Format is a
   * duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  minimumUpdatePeriod(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the suggested presentation delay. Format is a
   * duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  suggestedPresentationDelay(value) {
    return parseDuration(value);
  },

  /**
   * specifices the type of mpd. Can be either "static" or "dynamic"
   *
   * @param {string} value
   *        value of attribute as a string
   *
   * @return {string}
   *         The type as a string
   */
  type(value) {
    return value;
  },

  /**
   * Specifies the duration of the smallest time shifting buffer for any Representation
   * in the MPD. Format is a duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  timeShiftBufferDepth(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the PeriodStart time of the Period relative to the availabilityStarttime.
   * Format is a duration string as specified in ISO 8601
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The duration in seconds
   */
  start(value) {
    return parseDuration(value);
  },

  /**
   * Specifies the width of the visual presentation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed width
   */
  width(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the height of the visual presentation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed height
   */
  height(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the bitrate of the representation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed bandwidth
   */
  bandwidth(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the frame rate of the representation
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed frame rate
   */
  frameRate(value) {
    return parseDivisionValue(value);
  },

  /**
   * Specifies the number of the first Media Segment in this Representation in the Period
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed number
   */
  startNumber(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the timescale in units per seconds
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed timescale
   */
  timescale(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the presentationTimeOffset.
   *
   * @param {string} value
   *        value of the attribute as a string
   *
   * @return {number}
   *         The parsed presentationTimeOffset
   */
  presentationTimeOffset(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the constant approximate Segment duration
   * NOTE: The <Period> element also contains an @duration attribute. This duration
   *       specifies the duration of the Period. This attribute is currently not
   *       supported by the rest of the parser, however we still check for it to prevent
   *       errors.
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed duration
   */
  duration(value) {
    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue)) {
      return parseDuration(value);
    }

    return parsedValue;
  },

  /**
   * Specifies the Segment duration, in units of the value of the @timescale.
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed duration
   */
  d(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the MPD start time, in @timescale units, the first Segment in the series
   * starts relative to the beginning of the Period
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed time
   */
  t(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the repeat count of the number of following contiguous Segments with the
   * same duration expressed by the value of @d
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {number}
   *         The parsed number
   */
  r(value) {
    return parseInt(value, 10);
  },

  /**
   * Specifies the presentationTime.
   *
   * @param {string} value
   *        value of the attribute as a string
   *
   * @return {number}
   *         The parsed presentationTime
   */
  presentationTime(value) {
    return parseInt(value, 10);
  },

  /**
   * Default parser for all other attributes. Acts as a no-op and just returns the value
   * as a string
   *
   * @param {string} value
   *        value of attribute as a string
   * @return {string}
   *         Unparsed value
   */
  DEFAULT(value) {
    return value;
  }

};
/**
 * Gets all the attributes and values of the provided node, parses attributes with known
 * types, and returns an object with attribute names mapped to values.
 *
 * @param {Node} el
 *        The node to parse attributes from
 * @return {Object}
 *         Object with all attributes of el parsed
 */

const parseAttributes = el => {
  if (!(el && el.attributes)) {
    return {};
  }

  return from(el.attributes).reduce((a, e) => {
    const parseFn = parsers[e.name] || parsers.DEFAULT;
    a[e.name] = parseFn(e.value);
    return a;
  }, {});
};

const keySystemsMap = {
  'urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b': 'org.w3.clearkey',
  'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed': 'com.widevine.alpha',
  'urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95': 'com.microsoft.playready',
  'urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb': 'com.adobe.primetime'
};
/**
 * Builds a list of urls that is the product of the reference urls and BaseURL values
 *
 * @param {Object[]} references
 *        List of objects containing the reference URL as well as its attributes
 * @param {Node[]} baseUrlElements
 *        List of BaseURL nodes from the mpd
 * @return {Object[]}
 *         List of objects with resolved urls and attributes
 */

const buildBaseUrls = (references, baseUrlElements) => {
  if (!baseUrlElements.length) {
    return references;
  }

  return flatten(references.map(function (reference) {
    return baseUrlElements.map(function (baseUrlElement) {
      const initialBaseUrl = getContent(baseUrlElement);
      const resolvedBaseUrl = (0,_videojs_vhs_utils_es_resolve_url__WEBPACK_IMPORTED_MODULE_0__["default"])(reference.baseUrl, initialBaseUrl);
      const finalBaseUrl = merge(parseAttributes(baseUrlElement), {
        baseUrl: resolvedBaseUrl
      }); // If the URL is resolved, we want to get the serviceLocation from the reference
      // assuming there is no serviceLocation on the initialBaseUrl

      if (resolvedBaseUrl !== initialBaseUrl && !finalBaseUrl.serviceLocation && reference.serviceLocation) {
        finalBaseUrl.serviceLocation = reference.serviceLocation;
      }

      return finalBaseUrl;
    });
  }));
};
/**
 * Contains all Segment information for its containing AdaptationSet
 *
 * @typedef {Object} SegmentInformation
 * @property {Object|undefined} template
 *           Contains the attributes for the SegmentTemplate node
 * @property {Object[]|undefined} segmentTimeline
 *           Contains a list of atrributes for each S node within the SegmentTimeline node
 * @property {Object|undefined} list
 *           Contains the attributes for the SegmentList node
 * @property {Object|undefined} base
 *           Contains the attributes for the SegmentBase node
 */

/**
 * Returns all available Segment information contained within the AdaptationSet node
 *
 * @param {Node} adaptationSet
 *        The AdaptationSet node to get Segment information from
 * @return {SegmentInformation}
 *         The Segment information contained within the provided AdaptationSet
 */

const getSegmentInformation = adaptationSet => {
  const segmentTemplate = findChildren(adaptationSet, 'SegmentTemplate')[0];
  const segmentList = findChildren(adaptationSet, 'SegmentList')[0];
  const segmentUrls = segmentList && findChildren(segmentList, 'SegmentURL').map(s => merge({
    tag: 'SegmentURL'
  }, parseAttributes(s)));
  const segmentBase = findChildren(adaptationSet, 'SegmentBase')[0];
  const segmentTimelineParentNode = segmentList || segmentTemplate;
  const segmentTimeline = segmentTimelineParentNode && findChildren(segmentTimelineParentNode, 'SegmentTimeline')[0];
  const segmentInitializationParentNode = segmentList || segmentBase || segmentTemplate;
  const segmentInitialization = segmentInitializationParentNode && findChildren(segmentInitializationParentNode, 'Initialization')[0]; // SegmentTemplate is handled slightly differently, since it can have both
  // @initialization and an <Initialization> node.  @initialization can be templated,
  // while the node can have a url and range specified.  If the <SegmentTemplate> has
  // both @initialization and an <Initialization> subelement we opt to override with
  // the node, as this interaction is not defined in the spec.

  const template = segmentTemplate && parseAttributes(segmentTemplate);

  if (template && segmentInitialization) {
    template.initialization = segmentInitialization && parseAttributes(segmentInitialization);
  } else if (template && template.initialization) {
    // If it is @initialization we convert it to an object since this is the format that
    // later functions will rely on for the initialization segment.  This is only valid
    // for <SegmentTemplate>
    template.initialization = {
      sourceURL: template.initialization
    };
  }

  const segmentInfo = {
    template,
    segmentTimeline: segmentTimeline && findChildren(segmentTimeline, 'S').map(s => parseAttributes(s)),
    list: segmentList && merge(parseAttributes(segmentList), {
      segmentUrls,
      initialization: parseAttributes(segmentInitialization)
    }),
    base: segmentBase && merge(parseAttributes(segmentBase), {
      initialization: parseAttributes(segmentInitialization)
    })
  };
  Object.keys(segmentInfo).forEach(key => {
    if (!segmentInfo[key]) {
      delete segmentInfo[key];
    }
  });
  return segmentInfo;
};
/**
 * Contains Segment information and attributes needed to construct a Playlist object
 * from a Representation
 *
 * @typedef {Object} RepresentationInformation
 * @property {SegmentInformation} segmentInfo
 *           Segment information for this Representation
 * @property {Object} attributes
 *           Inherited attributes for this Representation
 */

/**
 * Maps a Representation node to an object containing Segment information and attributes
 *
 * @name inheritBaseUrlsCallback
 * @function
 * @param {Node} representation
 *        Representation node from the mpd
 * @return {RepresentationInformation}
 *         Representation information needed to construct a Playlist object
 */

/**
 * Returns a callback for Array.prototype.map for mapping Representation nodes to
 * Segment information and attributes using inherited BaseURL nodes.
 *
 * @param {Object} adaptationSetAttributes
 *        Contains attributes inherited by the AdaptationSet
 * @param {Object[]} adaptationSetBaseUrls
 *        List of objects containing resolved base URLs and attributes
 *        inherited by the AdaptationSet
 * @param {SegmentInformation} adaptationSetSegmentInfo
 *        Contains Segment information for the AdaptationSet
 * @return {inheritBaseUrlsCallback}
 *         Callback map function
 */

const inheritBaseUrls = (adaptationSetAttributes, adaptationSetBaseUrls, adaptationSetSegmentInfo) => representation => {
  const repBaseUrlElements = findChildren(representation, 'BaseURL');
  const repBaseUrls = buildBaseUrls(adaptationSetBaseUrls, repBaseUrlElements);
  const attributes = merge(adaptationSetAttributes, parseAttributes(representation));
  const representationSegmentInfo = getSegmentInformation(representation);
  return repBaseUrls.map(baseUrl => {
    return {
      segmentInfo: merge(adaptationSetSegmentInfo, representationSegmentInfo),
      attributes: merge(attributes, baseUrl)
    };
  });
};
/**
 * Tranforms a series of content protection nodes to
 * an object containing pssh data by key system
 *
 * @param {Node[]} contentProtectionNodes
 *        Content protection nodes
 * @return {Object}
 *        Object containing pssh data by key system
 */

const generateKeySystemInformation = contentProtectionNodes => {
  return contentProtectionNodes.reduce((acc, node) => {
    const attributes = parseAttributes(node); // Although it could be argued that according to the UUID RFC spec the UUID string (a-f chars) should be generated
    // as a lowercase string it also mentions it should be treated as case-insensitive on input. Since the key system
    // UUIDs in the keySystemsMap are hardcoded as lowercase in the codebase there isn't any reason not to do
    // .toLowerCase() on the input UUID string from the manifest (at least I could not think of one).

    if (attributes.schemeIdUri) {
      attributes.schemeIdUri = attributes.schemeIdUri.toLowerCase();
    }

    const keySystem = keySystemsMap[attributes.schemeIdUri];

    if (keySystem) {
      acc[keySystem] = {
        attributes
      };
      const psshNode = findChildren(node, 'cenc:pssh')[0];

      if (psshNode) {
        const pssh = getContent(psshNode);
        acc[keySystem].pssh = pssh && (0,_videojs_vhs_utils_es_decode_b64_to_uint8_array__WEBPACK_IMPORTED_MODULE_3__["default"])(pssh);
      }
    }

    return acc;
  }, {});
}; // defined in ANSI_SCTE 214-1 2016


const parseCaptionServiceMetadata = service => {
  // 608 captions
  if (service.schemeIdUri === 'urn:scte:dash:cc:cea-608:2015') {
    const values = typeof service.value !== 'string' ? [] : service.value.split(';');
    return values.map(value => {
      let channel;
      let language; // default language to value

      language = value;

      if (/^CC\d=/.test(value)) {
        [channel, language] = value.split('=');
      } else if (/^CC\d$/.test(value)) {
        channel = value;
      }

      return {
        channel,
        language
      };
    });
  } else if (service.schemeIdUri === 'urn:scte:dash:cc:cea-708:2015') {
    const values = typeof service.value !== 'string' ? [] : service.value.split(';');
    return values.map(value => {
      const flags = {
        // service or channel number 1-63
        'channel': undefined,
        // language is a 3ALPHA per ISO 639.2/B
        // field is required
        'language': undefined,
        // BIT 1/0 or ?
        // default value is 1, meaning 16:9 aspect ratio, 0 is 4:3, ? is unknown
        'aspectRatio': 1,
        // BIT 1/0
        // easy reader flag indicated the text is tailed to the needs of beginning readers
        // default 0, or off
        'easyReader': 0,
        // BIT 1/0
        // If 3d metadata is present (CEA-708.1) then 1
        // default 0
        '3D': 0
      };

      if (/=/.test(value)) {
        const [channel, opts = ''] = value.split('=');
        flags.channel = channel;
        flags.language = value;
        opts.split(',').forEach(opt => {
          const [name, val] = opt.split(':');

          if (name === 'lang') {
            flags.language = val; // er for easyReadery
          } else if (name === 'er') {
            flags.easyReader = Number(val); // war for wide aspect ratio
          } else if (name === 'war') {
            flags.aspectRatio = Number(val);
          } else if (name === '3D') {
            flags['3D'] = Number(val);
          }
        });
      } else {
        flags.language = value;
      }

      if (flags.channel) {
        flags.channel = 'SERVICE' + flags.channel;
      }

      return flags;
    });
  }
};
/**
 * A map callback that will parse all event stream data for a collection of periods
 * DASH ISO_IEC_23009 5.10.2.2
 * https://dashif-documents.azurewebsites.net/Events/master/event.html#mpd-event-timing
 *
 * @param {PeriodInformation} period object containing necessary period information
 * @return a collection of parsed eventstream event objects
 */

const toEventStream = period => {
  // get and flatten all EventStreams tags and parse attributes and children
  return flatten(findChildren(period.node, 'EventStream').map(eventStream => {
    const eventStreamAttributes = parseAttributes(eventStream);
    const schemeIdUri = eventStreamAttributes.schemeIdUri; // find all Events per EventStream tag and map to return objects

    return findChildren(eventStream, 'Event').map(event => {
      const eventAttributes = parseAttributes(event);
      const presentationTime = eventAttributes.presentationTime || 0;
      const timescale = eventStreamAttributes.timescale || 1;
      const duration = eventAttributes.duration || 0;
      const start = presentationTime / timescale + period.attributes.start;
      return {
        schemeIdUri,
        value: eventStreamAttributes.value,
        id: eventAttributes.id,
        start,
        end: start + duration / timescale,
        messageData: getContent(event) || eventAttributes.messageData,
        contentEncoding: eventStreamAttributes.contentEncoding,
        presentationTimeOffset: eventStreamAttributes.presentationTimeOffset || 0
      };
    });
  }));
};
/**
 * Maps an AdaptationSet node to a list of Representation information objects
 *
 * @name toRepresentationsCallback
 * @function
 * @param {Node} adaptationSet
 *        AdaptationSet node from the mpd
 * @return {RepresentationInformation[]}
 *         List of objects containing Representaion information
 */

/**
 * Returns a callback for Array.prototype.map for mapping AdaptationSet nodes to a list of
 * Representation information objects
 *
 * @param {Object} periodAttributes
 *        Contains attributes inherited by the Period
 * @param {Object[]} periodBaseUrls
 *        Contains list of objects with resolved base urls and attributes
 *        inherited by the Period
 * @param {string[]} periodSegmentInfo
 *        Contains Segment Information at the period level
 * @return {toRepresentationsCallback}
 *         Callback map function
 */

const toRepresentations = (periodAttributes, periodBaseUrls, periodSegmentInfo) => adaptationSet => {
  const adaptationSetAttributes = parseAttributes(adaptationSet);
  const adaptationSetBaseUrls = buildBaseUrls(periodBaseUrls, findChildren(adaptationSet, 'BaseURL'));
  const role = findChildren(adaptationSet, 'Role')[0];
  const roleAttributes = {
    role: parseAttributes(role)
  };
  let attrs = merge(periodAttributes, adaptationSetAttributes, roleAttributes);
  const accessibility = findChildren(adaptationSet, 'Accessibility')[0];
  const captionServices = parseCaptionServiceMetadata(parseAttributes(accessibility));

  if (captionServices) {
    attrs = merge(attrs, {
      captionServices
    });
  }

  const label = findChildren(adaptationSet, 'Label')[0];

  if (label && label.childNodes.length) {
    const labelVal = label.childNodes[0].nodeValue.trim();
    attrs = merge(attrs, {
      label: labelVal
    });
  }

  const contentProtection = generateKeySystemInformation(findChildren(adaptationSet, 'ContentProtection'));

  if (Object.keys(contentProtection).length) {
    attrs = merge(attrs, {
      contentProtection
    });
  }

  const segmentInfo = getSegmentInformation(adaptationSet);
  const representations = findChildren(adaptationSet, 'Representation');
  const adaptationSetSegmentInfo = merge(periodSegmentInfo, segmentInfo);
  return flatten(representations.map(inheritBaseUrls(attrs, adaptationSetBaseUrls, adaptationSetSegmentInfo)));
};
/**
 * Contains all period information for mapping nodes onto adaptation sets.
 *
 * @typedef {Object} PeriodInformation
 * @property {Node} period.node
 *           Period node from the mpd
 * @property {Object} period.attributes
 *           Parsed period attributes from node plus any added
 */

/**
 * Maps a PeriodInformation object to a list of Representation information objects for all
 * AdaptationSet nodes contained within the Period.
 *
 * @name toAdaptationSetsCallback
 * @function
 * @param {PeriodInformation} period
 *        Period object containing necessary period information
 * @param {number} periodStart
 *        Start time of the Period within the mpd
 * @return {RepresentationInformation[]}
 *         List of objects containing Representaion information
 */

/**
 * Returns a callback for Array.prototype.map for mapping Period nodes to a list of
 * Representation information objects
 *
 * @param {Object} mpdAttributes
 *        Contains attributes inherited by the mpd
  * @param {Object[]} mpdBaseUrls
 *        Contains list of objects with resolved base urls and attributes
 *        inherited by the mpd
 * @return {toAdaptationSetsCallback}
 *         Callback map function
 */

const toAdaptationSets = (mpdAttributes, mpdBaseUrls) => (period, index) => {
  const periodBaseUrls = buildBaseUrls(mpdBaseUrls, findChildren(period.node, 'BaseURL'));
  const periodAttributes = merge(mpdAttributes, {
    periodStart: period.attributes.start
  });

  if (typeof period.attributes.duration === 'number') {
    periodAttributes.periodDuration = period.attributes.duration;
  }

  const adaptationSets = findChildren(period.node, 'AdaptationSet');
  const periodSegmentInfo = getSegmentInformation(period.node);
  return flatten(adaptationSets.map(toRepresentations(periodAttributes, periodBaseUrls, periodSegmentInfo)));
};
/**
 * Tranforms an array of content steering nodes into an object
 * containing CDN content steering information from the MPD manifest.
 *
 * For more information on the DASH spec for Content Steering parsing, see:
 * https://dashif.org/docs/DASH-IF-CTS-00XX-Content-Steering-Community-Review.pdf
 *
 * @param {Node[]} contentSteeringNodes
 *        Content steering nodes
 * @param {Function} eventHandler
 *        The event handler passed into the parser options to handle warnings
 * @return {Object}
 *        Object containing content steering data
 */

const generateContentSteeringInformation = (contentSteeringNodes, eventHandler) => {
  // If there are more than one ContentSteering tags, throw an error
  if (contentSteeringNodes.length > 1) {
    eventHandler({
      type: 'warn',
      message: 'The MPD manifest should contain no more than one ContentSteering tag'
    });
  } // Return a null value if there are no ContentSteering tags


  if (!contentSteeringNodes.length) {
    return null;
  }

  const infoFromContentSteeringTag = merge({
    serverURL: getContent(contentSteeringNodes[0])
  }, parseAttributes(contentSteeringNodes[0])); // Converts `queryBeforeStart` to a boolean, as well as setting the default value
  // to `false` if it doesn't exist

  infoFromContentSteeringTag.queryBeforeStart = infoFromContentSteeringTag.queryBeforeStart === 'true';
  return infoFromContentSteeringTag;
};
/**
 * Gets Period@start property for a given period.
 *
 * @param {Object} options
 *        Options object
 * @param {Object} options.attributes
 *        Period attributes
 * @param {Object} [options.priorPeriodAttributes]
 *        Prior period attributes (if prior period is available)
 * @param {string} options.mpdType
 *        The MPD@type these periods came from
 * @return {number|null}
 *         The period start, or null if it's an early available period or error
 */

const getPeriodStart = ({
  attributes,
  priorPeriodAttributes,
  mpdType
}) => {
  // Summary of period start time calculation from DASH spec section 5.3.2.1
  //
  // A period's start is the first period's start + time elapsed after playing all
  // prior periods to this one. Periods continue one after the other in time (without
  // gaps) until the end of the presentation.
  //
  // The value of Period@start should be:
  // 1. if Period@start is present: value of Period@start
  // 2. if previous period exists and it has @duration: previous Period@start +
  //    previous Period@duration
  // 3. if this is first period and MPD@type is 'static': 0
  // 4. in all other cases, consider the period an "early available period" (note: not
  //    currently supported)
  // (1)
  if (typeof attributes.start === 'number') {
    return attributes.start;
  } // (2)


  if (priorPeriodAttributes && typeof priorPeriodAttributes.start === 'number' && typeof priorPeriodAttributes.duration === 'number') {
    return priorPeriodAttributes.start + priorPeriodAttributes.duration;
  } // (3)


  if (!priorPeriodAttributes && mpdType === 'static') {
    return 0;
  } // (4)
  // There is currently no logic for calculating the Period@start value if there is
  // no Period@start or prior Period@start and Period@duration available. This is not made
  // explicit by the DASH interop guidelines or the DASH spec, however, since there's
  // nothing about any other resolution strategies, it's implied. Thus, this case should
  // be considered an early available period, or error, and null should suffice for both
  // of those cases.


  return null;
};
/**
 * Traverses the mpd xml tree to generate a list of Representation information objects
 * that have inherited attributes from parent nodes
 *
 * @param {Node} mpd
 *        The root node of the mpd
 * @param {Object} options
 *        Available options for inheritAttributes
 * @param {string} options.manifestUri
 *        The uri source of the mpd
 * @param {number} options.NOW
 *        Current time per DASH IOP.  Default is current time in ms since epoch
 * @param {number} options.clientOffset
 *        Client time difference from NOW (in milliseconds)
 * @return {RepresentationInformation[]}
 *         List of objects containing Representation information
 */

const inheritAttributes = (mpd, options = {}) => {
  const {
    manifestUri = '',
    NOW = Date.now(),
    clientOffset = 0,
    // TODO: For now, we are expecting an eventHandler callback function
    // to be passed into the mpd parser as an option.
    // In the future, we should enable stream parsing by using the Stream class from vhs-utils.
    // This will support new features including a standardized event handler.
    // See the m3u8 parser for examples of how stream parsing is currently used for HLS parsing.
    // https://github.com/videojs/vhs-utils/blob/88d6e10c631e57a5af02c5a62bc7376cd456b4f5/src/stream.js#L9
    eventHandler = function () {}
  } = options;
  const periodNodes = findChildren(mpd, 'Period');

  if (!periodNodes.length) {
    throw new Error(errors.INVALID_NUMBER_OF_PERIOD);
  }

  const locations = findChildren(mpd, 'Location');
  const mpdAttributes = parseAttributes(mpd);
  const mpdBaseUrls = buildBaseUrls([{
    baseUrl: manifestUri
  }], findChildren(mpd, 'BaseURL'));
  const contentSteeringNodes = findChildren(mpd, 'ContentSteering'); // See DASH spec section 5.3.1.2, Semantics of MPD element. Default type to 'static'.

  mpdAttributes.type = mpdAttributes.type || 'static';
  mpdAttributes.sourceDuration = mpdAttributes.mediaPresentationDuration || 0;
  mpdAttributes.NOW = NOW;
  mpdAttributes.clientOffset = clientOffset;

  if (locations.length) {
    mpdAttributes.locations = locations.map(getContent);
  }

  const periods = []; // Since toAdaptationSets acts on individual periods right now, the simplest approach to
  // adding properties that require looking at prior periods is to parse attributes and add
  // missing ones before toAdaptationSets is called. If more such properties are added, it
  // may be better to refactor toAdaptationSets.

  periodNodes.forEach((node, index) => {
    const attributes = parseAttributes(node); // Use the last modified prior period, as it may contain added information necessary
    // for this period.

    const priorPeriod = periods[index - 1];
    attributes.start = getPeriodStart({
      attributes,
      priorPeriodAttributes: priorPeriod ? priorPeriod.attributes : null,
      mpdType: mpdAttributes.type
    });
    periods.push({
      node,
      attributes
    });
  });
  return {
    locations: mpdAttributes.locations,
    contentSteeringInfo: generateContentSteeringInformation(contentSteeringNodes, eventHandler),
    // TODO: There are occurences where this `representationInfo` array contains undesired
    // duplicates. This generally occurs when there are multiple BaseURL nodes that are
    // direct children of the MPD node. When we attempt to resolve URLs from a combination of the
    // parent BaseURL and a child BaseURL, and the value does not resolve,
    // we end up returning the child BaseURL multiple times.
    // We need to determine a way to remove these duplicates in a safe way.
    // See: https://github.com/videojs/mpd-parser/pull/17#discussion_r162750527
    representationInfo: flatten(periods.map(toAdaptationSets(mpdAttributes, mpdBaseUrls))),
    eventStream: flatten(periods.map(toEventStream))
  };
};

const stringToMpdXml = manifestString => {
  if (manifestString === '') {
    throw new Error(errors.DASH_EMPTY_MANIFEST);
  }

  const parser = new _xmldom_xmldom__WEBPACK_IMPORTED_MODULE_4__.DOMParser();
  let xml;
  let mpd;

  try {
    xml = parser.parseFromString(manifestString, 'application/xml');
    mpd = xml && xml.documentElement.tagName === 'MPD' ? xml.documentElement : null;
  } catch (e) {// ie 11 throws on invalid xml
  }

  if (!mpd || mpd && mpd.getElementsByTagName('parsererror').length > 0) {
    throw new Error(errors.DASH_INVALID_XML);
  }

  return mpd;
};

/**
 * Parses the manifest for a UTCTiming node, returning the nodes attributes if found
 *
 * @param {string} mpd
 *        XML string of the MPD manifest
 * @return {Object|null}
 *         Attributes of UTCTiming node specified in the manifest. Null if none found
 */

const parseUTCTimingScheme = mpd => {
  const UTCTimingNode = findChildren(mpd, 'UTCTiming')[0];

  if (!UTCTimingNode) {
    return null;
  }

  const attributes = parseAttributes(UTCTimingNode);

  switch (attributes.schemeIdUri) {
    case 'urn:mpeg:dash:utc:http-head:2014':
    case 'urn:mpeg:dash:utc:http-head:2012':
      attributes.method = 'HEAD';
      break;

    case 'urn:mpeg:dash:utc:http-xsdate:2014':
    case 'urn:mpeg:dash:utc:http-iso:2014':
    case 'urn:mpeg:dash:utc:http-xsdate:2012':
    case 'urn:mpeg:dash:utc:http-iso:2012':
      attributes.method = 'GET';
      break;

    case 'urn:mpeg:dash:utc:direct:2014':
    case 'urn:mpeg:dash:utc:direct:2012':
      attributes.method = 'DIRECT';
      attributes.value = Date.parse(attributes.value);
      break;

    case 'urn:mpeg:dash:utc:http-ntp:2014':
    case 'urn:mpeg:dash:utc:ntp:2014':
    case 'urn:mpeg:dash:utc:sntp:2014':
    default:
      throw new Error(errors.UNSUPPORTED_UTC_TIMING_SCHEME);
  }

  return attributes;
};

const VERSION = version;
/*
 * Given a DASH manifest string and options, parses the DASH manifest into an object in the
 * form outputed by m3u8-parser and accepted by videojs/http-streaming.
 *
 * For live DASH manifests, if `previousManifest` is provided in options, then the newly
 * parsed DASH manifest will have its media sequence and discontinuity sequence values
 * updated to reflect its position relative to the prior manifest.
 *
 * @param {string} manifestString - the DASH manifest as a string
 * @param {options} [options] - any options
 *
 * @return {Object} the manifest object
 */

const parse = (manifestString, options = {}) => {
  const parsedManifestInfo = inheritAttributes(stringToMpdXml(manifestString), options);
  const playlists = toPlaylists(parsedManifestInfo.representationInfo);
  return toM3u8({
    dashPlaylists: playlists,
    locations: parsedManifestInfo.locations,
    contentSteering: parsedManifestInfo.contentSteeringInfo,
    sidxMapping: options.sidxMapping,
    previousManifest: options.previousManifest,
    eventStream: parsedManifestInfo.eventStream
  });
};
/**
 * Parses the manifest for a UTCTiming node, returning the nodes attributes if found
 *
 * @param {string} manifestString
 *        XML string of the MPD manifest
 * @return {Object|null}
 *         Attributes of UTCTiming node specified in the manifest. Null if none found
 */


const parseUTCTiming = manifestString => parseUTCTimingScheme(stringToMpdXml(manifestString));




/***/ }),

/***/ "./src/mpd-parser.ts":
/*!***************************!*\
  !*** ./src/mpd-parser.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getParsedManifest: () => (/* binding */ getParsedManifest)
/* harmony export */ });
/* harmony import */ var mpd_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mpd-parser */ "./node_modules/mpd-parser/dist/mpd-parser.es.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var getParsedManifest = function (manifestUri) { return __awaiter(void 0, void 0, void 0, function () {
    var manifestResponse, manifest, parsedManifest, bandwidths, variants;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(manifestUri)];
            case 1:
                manifestResponse = _a.sent();
                return [4 /*yield*/, manifestResponse.text()];
            case 2:
                manifest = _a.sent();
                parsedManifest = (0,mpd_parser__WEBPACK_IMPORTED_MODULE_0__.parse)(manifest);
                bandwidths = [];
                variants = parsedManifest.playlists.reduce(function (accumulator, playlist) {
                    var _a;
                    var bandwidth = playlist.attributes.BANDWIDTH;
                    bandwidths.push(bandwidth);
                    var initializationSegment = "./segments/".concat(playlist.segments[0].map.uri);
                    var segments = playlist.segments.map(function (segment) { return "./segments/".concat(segment.uri); });
                    return __assign(__assign({}, accumulator), (_a = {}, _a[bandwidth] = {
                        codecs: playlist.attributes.CODECS,
                        segments: __spreadArray([initializationSegment], segments, true),
                    }, _a));
                }, {});
                return [2 /*return*/, { variants: variants, bandwidths: bandwidths }];
        }
    });
}); };


/***/ }),

/***/ "./node_modules/url-toolkit/src/url-toolkit.js":
/*!*****************************************************!*\
  !*** ./node_modules/url-toolkit/src/url-toolkit.js ***!
  \*****************************************************/
/***/ (function(module) {

// see https://tools.ietf.org/html/rfc1808

(function (root) {
  var URL_REGEX =
    /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/;
  var FIRST_SEGMENT_REGEX = /^(?=([^\/?#]*))\1([^]*)$/;
  var SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g;
  var SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g;

  var URLToolkit = {
    // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
    // E.g
    // With opts.alwaysNormalize = false (default, spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
    // With opts.alwaysNormalize = true (not spec compliant)
    // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
    buildAbsoluteURL: function (baseURL, relativeURL, opts) {
      opts = opts || {};
      // remove any remaining space and CRLF
      baseURL = baseURL.trim();
      relativeURL = relativeURL.trim();
      if (!relativeURL) {
        // 2a) If the embedded URL is entirely empty, it inherits the
        // entire base URL (i.e., is set equal to the base URL)
        // and we are done.
        if (!opts.alwaysNormalize) {
          return baseURL;
        }
        var basePartsForNormalise = URLToolkit.parseURL(baseURL);
        if (!basePartsForNormalise) {
          throw new Error('Error trying to parse base URL.');
        }
        basePartsForNormalise.path = URLToolkit.normalizePath(
          basePartsForNormalise.path
        );
        return URLToolkit.buildURLFromParts(basePartsForNormalise);
      }
      var relativeParts = URLToolkit.parseURL(relativeURL);
      if (!relativeParts) {
        throw new Error('Error trying to parse relative URL.');
      }
      if (relativeParts.scheme) {
        // 2b) If the embedded URL starts with a scheme name, it is
        // interpreted as an absolute URL and we are done.
        if (!opts.alwaysNormalize) {
          return relativeURL;
        }
        relativeParts.path = URLToolkit.normalizePath(relativeParts.path);
        return URLToolkit.buildURLFromParts(relativeParts);
      }
      var baseParts = URLToolkit.parseURL(baseURL);
      if (!baseParts) {
        throw new Error('Error trying to parse base URL.');
      }
      if (!baseParts.netLoc && baseParts.path && baseParts.path[0] !== '/') {
        // If netLoc missing and path doesn't start with '/', assume everthing before the first '/' is the netLoc
        // This causes 'example.com/a' to be handled as '//example.com/a' instead of '/example.com/a'
        var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
        baseParts.netLoc = pathParts[1];
        baseParts.path = pathParts[2];
      }
      if (baseParts.netLoc && !baseParts.path) {
        baseParts.path = '/';
      }
      var builtParts = {
        // 2c) Otherwise, the embedded URL inherits the scheme of
        // the base URL.
        scheme: baseParts.scheme,
        netLoc: relativeParts.netLoc,
        path: null,
        params: relativeParts.params,
        query: relativeParts.query,
        fragment: relativeParts.fragment,
      };
      if (!relativeParts.netLoc) {
        // 3) If the embedded URL's <net_loc> is non-empty, we skip to
        // Step 7.  Otherwise, the embedded URL inherits the <net_loc>
        // (if any) of the base URL.
        builtParts.netLoc = baseParts.netLoc;
        // 4) If the embedded URL path is preceded by a slash "/", the
        // path is not relative and we skip to Step 7.
        if (relativeParts.path[0] !== '/') {
          if (!relativeParts.path) {
            // 5) If the embedded URL path is empty (and not preceded by a
            // slash), then the embedded URL inherits the base URL path
            builtParts.path = baseParts.path;
            // 5a) if the embedded URL's <params> is non-empty, we skip to
            // step 7; otherwise, it inherits the <params> of the base
            // URL (if any) and
            if (!relativeParts.params) {
              builtParts.params = baseParts.params;
              // 5b) if the embedded URL's <query> is non-empty, we skip to
              // step 7; otherwise, it inherits the <query> of the base
              // URL (if any) and we skip to step 7.
              if (!relativeParts.query) {
                builtParts.query = baseParts.query;
              }
            }
          } else {
            // 6) The last segment of the base URL's path (anything
            // following the rightmost slash "/", or the entire path if no
            // slash is present) is removed and the embedded URL's path is
            // appended in its place.
            var baseURLPath = baseParts.path;
            var newPath =
              baseURLPath.substring(0, baseURLPath.lastIndexOf('/') + 1) +
              relativeParts.path;
            builtParts.path = URLToolkit.normalizePath(newPath);
          }
        }
      }
      if (builtParts.path === null) {
        builtParts.path = opts.alwaysNormalize
          ? URLToolkit.normalizePath(relativeParts.path)
          : relativeParts.path;
      }
      return URLToolkit.buildURLFromParts(builtParts);
    },
    parseURL: function (url) {
      var parts = URL_REGEX.exec(url);
      if (!parts) {
        return null;
      }
      return {
        scheme: parts[1] || '',
        netLoc: parts[2] || '',
        path: parts[3] || '',
        params: parts[4] || '',
        query: parts[5] || '',
        fragment: parts[6] || '',
      };
    },
    normalizePath: function (path) {
      // The following operations are
      // then applied, in order, to the new path:
      // 6a) All occurrences of "./", where "." is a complete path
      // segment, are removed.
      // 6b) If the path ends with "." as a complete path segment,
      // that "." is removed.
      path = path.split('').reverse().join('').replace(SLASH_DOT_REGEX, '');
      // 6c) All occurrences of "<segment>/../", where <segment> is a
      // complete path segment not equal to "..", are removed.
      // Removal of these path segments is performed iteratively,
      // removing the leftmost matching pattern on each iteration,
      // until no matching pattern remains.
      // 6d) If the path ends with "<segment>/..", where <segment> is a
      // complete path segment not equal to "..", that
      // "<segment>/.." is removed.
      while (
        path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, '')).length
      ) {}
      return path.split('').reverse().join('');
    },
    buildURLFromParts: function (parts) {
      return (
        parts.scheme +
        parts.netLoc +
        parts.path +
        parts.params +
        parts.query +
        parts.fragment
      );
    },
  };

  if (true)
    module.exports = URLToolkit;
  else {}
})(this);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_mpd_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/mpd-parser */ "./src/mpd-parser.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var startPlayback = function () { return __awaiter(void 0, void 0, void 0, function () {
    function getMp4Data(mp4Uri) {
        return __awaiter(this, void 0, void 0, function () {
            var mp4Response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(mp4Uri)];
                    case 1:
                        mp4Response = _a.sent();
                        return [2 /*return*/, mp4Response.arrayBuffer()];
                }
            });
        });
    }
    function utilityBasedSelection(bufferLevel, bandwidths) {
        var highestUtility = -Infinity;
        var quality = 0;
        // Utility-based quality selection
        for (var i_1 = 0; i_1 < bandwidths.length; i_1++) {
            // Calculate utility for each variant
            var utility = (bandwidths[i_1] - bandwidths[0]) / bandwidths[0] +
                (bufferLevel - reservoir) / cushion;
            if (utility > highestUtility) {
                highestUtility = utility;
                quality = i_1;
            }
        }
        return quality;
    }
    function selectBOLAvariant(bufferLevel, variants) {
        var quality = 0;
        if (bufferLevel < reservoir) {
            quality = 0; // Lowest quality
        }
        else if (bufferLevel > reservoir + cushion) {
            quality = bandwidths.length - 1; // Highest quality
        }
        else {
            quality = utilityBasedSelection(bufferLevel, bandwidths);
        }
        return variants[bandwidths[quality]];
    }
    function calculateBufferInfo(buffered) {
        var ret = [];
        for (var i_2 = 0; i_2 < buffered.length; i_2++) {
            ret.push({ start: buffered.start(i_2), end: buffered.end(i_2) });
        }
        return ret;
    }
    function calculateBufferLevel(buffered) {
        var bufferInfo = calculateBufferInfo(buffered);
        var currentTime = video.currentTime;
        if (!bufferInfo.length) {
            return 0;
        }
        var bufferLevel = 0;
        var _a = bufferInfo[bufferInfo.length - 1], end = _a.end, start = _a.start;
        if (currentTime < end && currentTime >= start) {
            bufferLevel = end - currentTime;
        }
        return bufferLevel;
    }
    function checkBufferAndSelectVariant(buffered) {
        // Calculate the current buffer size
        var bufferLevel = calculateBufferLevel(buffered);
        // Select the optimal variant based on BOLA
        var optimalVariant = selectBOLAvariant(bufferLevel, variants);
        return optimalVariant;
    }
    function switchVariant(newVariant, sourceBuffer) {
        return __awaiter(this, void 0, void 0, function () {
            var initSegment, firstSegment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedVariant = newVariant;
                        initSegment = newVariant.segments[0];
                        if (!!sourceBuffer.updating) return [3 /*break*/, 2];
                        return [4 /*yield*/, getMp4Data(initSegment)];
                    case 1:
                        firstSegment = _a.sent();
                        sourceBuffer.appendBuffer(firstSegment);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    function getSegments(sourceBuffer) {
        return __awaiter(this, void 0, void 0, function () {
            var optimalVariant;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        optimalVariant = checkBufferAndSelectVariant(sourceBuffer.buffered);
                        if (!(i !== 0 && optimalVariant.segments[0] !== selectedVariant.segments[0])) return [3 /*break*/, 2];
                        return [4 /*yield*/, switchVariant(optimalVariant, sourceBuffer)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, optimalVariant.segments];
                }
            });
        });
    }
    function onSourceOpen() {
        return __awaiter(this, void 0, void 0, function () {
            var sourceBuffer, firstSegment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        URL.revokeObjectURL(video.src); // Revoke Object URL for garbage collection
                        sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
                        sourceBuffer.addEventListener("updateend", function () {
                            return __awaiter(this, void 0, void 0, function () {
                                var nextSegmentUri, nextSegment;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(!sourceBuffer.updating && i !== segments.length)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, getSegments(sourceBuffer)];
                                        case 1:
                                            segments = _a.sent();
                                            _a.label = 2;
                                        case 2:
                                            if (!(!sourceBuffer.updating && i !== segments.length)) return [3 /*break*/, 4];
                                            nextSegmentUri = segments[i];
                                            return [4 /*yield*/, getMp4Data(nextSegmentUri)];
                                        case 3:
                                            nextSegment = _a.sent();
                                            sourceBuffer.appendBuffer(nextSegment);
                                            i++;
                                            _a.label = 4;
                                        case 4:
                                            if (mediaSource.readyState === "open" &&
                                                !sourceBuffer.updating &&
                                                i === segments.length) {
                                                mediaSource.endOfStream();
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        return [4 /*yield*/, getMp4Data(mp4InitializationUri)];
                    case 1:
                        firstSegment = _a.sent();
                        sourceBuffer.appendBuffer(firstSegment);
                        return [2 /*return*/];
                }
            });
        });
    }
    var video, _a, variants, bandwidths, selectedVariant, initializationSegment, codecs, segments, mp4InitializationUri, mimeCodec, mediaSource, url, reservoir, cushion, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                video = document.createElement("video");
                video.style.width = "640px";
                video.setAttribute("controls", "");
                document.getElementsByTagName("body")[0].appendChild(video);
                return [4 /*yield*/, (0,_src_mpd_parser__WEBPACK_IMPORTED_MODULE_0__.getParsedManifest)("./segments/BigBuckBunny.mpd")];
            case 1:
                _a = _b.sent(), variants = _a.variants, bandwidths = _a.bandwidths;
                selectedVariant = variants[bandwidths[0]];
                initializationSegment = selectedVariant.segments[0];
                codecs = selectedVariant.codecs;
                segments = selectedVariant.segments;
                mp4InitializationUri = initializationSegment;
                mimeCodec = "video/mp4; codecs=\"".concat(codecs, "\"");
                if (!MediaSource.isTypeSupported(mimeCodec)) {
                    console.error("Unsupported media format");
                    return [2 /*return*/];
                }
                mediaSource = new MediaSource();
                url = window.URL.createObjectURL(mediaSource);
                video.src = url;
                reservoir = 3;
                cushion = 2;
                i = 0;
                mediaSource.addEventListener("sourceopen", onSourceOpen.bind(mediaSource));
                return [2 /*return*/];
        }
    });
}); };
startPlayback();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSw0Q0FBNEMsbUJBQW1CO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUFLO0FBQ1A7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksUUFBUTtBQUNwQixZQUFZLG1CQUFtQjtBQUMvQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FB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Q0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLE1BQU07QUFDakIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsa0JBQWtCO0FBQzdCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsa0JBQWtCO0FBQzdCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE1BQU07QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVEsZ0VBQWdFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFB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Q3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQ3Ju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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBLFlBQVksUUFBUTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7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O0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsa0VBQWlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmlkZW9qcy92aHMtdXRpbHMvZXMvZGVjb2RlLWI2NC10by11aW50OC1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZpZGVvanMvdmhzLXV0aWxzL2VzL21lZGlhLWdyb3Vwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZpZGVvanMvdmhzLXV0aWxzL2VzL3Jlc29sdmUtdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvY29udmVudGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9kb20tcGFyc2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AeG1sZG9tL3htbGRvbS9saWIvZW50aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL3NheC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2xvYmFsL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXBkLXBhcnNlci9kaXN0L21wZC1wYXJzZXIuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21wZC1wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC10b29sa2l0L3NyYy91cmwtdG9vbGtpdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxudmFyIGF0b2IgPSBmdW5jdGlvbiBhdG9iKHMpIHtcbiAgcmV0dXJuIHdpbmRvdy5hdG9iID8gd2luZG93LmF0b2IocykgOiBCdWZmZXIuZnJvbShzLCAnYmFzZTY0JykudG9TdHJpbmcoJ2JpbmFyeScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVjb2RlQjY0VG9VaW50OEFycmF5KGI2NFRleHQpIHtcbiAgdmFyIGRlY29kZWRTdHJpbmcgPSBhdG9iKGI2NFRleHQpO1xuICB2YXIgYXJyYXkgPSBuZXcgVWludDhBcnJheShkZWNvZGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWNvZGVkU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXlbaV0gPSBkZWNvZGVkU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59IiwiLyoqXG4gKiBMb29wcyB0aHJvdWdoIGFsbCBzdXBwb3J0ZWQgbWVkaWEgZ3JvdXBzIGluIG1hc3RlciBhbmQgY2FsbHMgdGhlIHByb3ZpZGVkXG4gKiBjYWxsYmFjayBmb3IgZWFjaCBncm91cFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXN0ZXJcbiAqICAgICAgICBUaGUgcGFyc2VkIG1hc3RlciBtYW5pZmVzdCBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nW119IGdyb3Vwc1xuICogICAgICAgIFRoZSBtZWRpYSBncm91cHMgdG8gY2FsbCB0aGUgY2FsbGJhY2sgZm9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogICAgICAgIENhbGxiYWNrIHRvIGNhbGwgZm9yIGVhY2ggbWVkaWEgZ3JvdXBcbiAqL1xuZXhwb3J0IHZhciBmb3JFYWNoTWVkaWFHcm91cCA9IGZ1bmN0aW9uIGZvckVhY2hNZWRpYUdyb3VwKG1hc3RlciwgZ3JvdXBzLCBjYWxsYmFjaykge1xuICBncm91cHMuZm9yRWFjaChmdW5jdGlvbiAobWVkaWFUeXBlKSB7XG4gICAgZm9yICh2YXIgZ3JvdXBLZXkgaW4gbWFzdGVyLm1lZGlhR3JvdXBzW21lZGlhVHlwZV0pIHtcbiAgICAgIGZvciAodmFyIGxhYmVsS2V5IGluIG1hc3Rlci5tZWRpYUdyb3Vwc1ttZWRpYVR5cGVdW2dyb3VwS2V5XSkge1xuICAgICAgICB2YXIgbWVkaWFQcm9wZXJ0aWVzID0gbWFzdGVyLm1lZGlhR3JvdXBzW21lZGlhVHlwZV1bZ3JvdXBLZXldW2xhYmVsS2V5XTtcbiAgICAgICAgY2FsbGJhY2sobWVkaWFQcm9wZXJ0aWVzLCBtZWRpYVR5cGUsIGdyb3VwS2V5LCBsYWJlbEtleSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07IiwiaW1wb3J0IFVSTFRvb2xraXQgZnJvbSAndXJsLXRvb2xraXQnO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcbnZhciBERUZBVUxUX0xPQ0FUSU9OID0gJ2h0dHA6Ly9leGFtcGxlLmNvbSc7XG5cbnZhciByZXNvbHZlVXJsID0gZnVuY3Rpb24gcmVzb2x2ZVVybChiYXNlVXJsLCByZWxhdGl2ZVVybCkge1xuICAvLyByZXR1cm4gZWFybHkgaWYgd2UgZG9uJ3QgbmVlZCB0byByZXNvbHZlXG4gIGlmICgvXlthLXpdKzovaS50ZXN0KHJlbGF0aXZlVXJsKSkge1xuICAgIHJldHVybiByZWxhdGl2ZVVybDtcbiAgfSAvLyBpZiBiYXNlVXJsIGlzIGEgZGF0YSBVUkksIGlnbm9yZSBpdCBhbmQgcmVzb2x2ZSBldmVyeXRoaW5nIHJlbGF0aXZlIHRvIHdpbmRvdy5sb2NhdGlvblxuXG5cbiAgaWYgKC9eZGF0YTovLnRlc3QoYmFzZVVybCkpIHtcbiAgICBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5ocmVmIHx8ICcnO1xuICB9IC8vIElFMTEgc3VwcG9ydHMgVVJMIGJ1dCBub3QgdGhlIFVSTCBjb25zdHJ1Y3RvclxuICAvLyBmZWF0dXJlIGRldGVjdCB0aGUgYmVoYXZpb3Igd2Ugd2FudFxuXG5cbiAgdmFyIG5hdGl2ZVVSTCA9IHR5cGVvZiB3aW5kb3cuVVJMID09PSAnZnVuY3Rpb24nO1xuICB2YXIgcHJvdG9jb2xMZXNzID0gL15cXC9cXC8vLnRlc3QoYmFzZVVybCk7IC8vIHJlbW92ZSBsb2NhdGlvbiBpZiB3aW5kb3cubG9jYXRpb24gaXNuJ3QgYXZhaWxhYmxlIChpLmUuIHdlJ3JlIGluIG5vZGUpXG4gIC8vIGFuZCBpZiBiYXNlVXJsIGlzbid0IGFuIGFic29sdXRlIHVybFxuXG4gIHZhciByZW1vdmVMb2NhdGlvbiA9ICF3aW5kb3cubG9jYXRpb24gJiYgIS9cXC9cXC8vaS50ZXN0KGJhc2VVcmwpOyAvLyBpZiB0aGUgYmFzZSBVUkwgaXMgcmVsYXRpdmUgdGhlbiBjb21iaW5lIHdpdGggdGhlIGN1cnJlbnQgbG9jYXRpb25cblxuICBpZiAobmF0aXZlVVJMKSB7XG4gICAgYmFzZVVybCA9IG5ldyB3aW5kb3cuVVJMKGJhc2VVcmwsIHdpbmRvdy5sb2NhdGlvbiB8fCBERUZBVUxUX0xPQ0FUSU9OKTtcbiAgfSBlbHNlIGlmICghL1xcL1xcLy9pLnRlc3QoYmFzZVVybCkpIHtcbiAgICBiYXNlVXJsID0gVVJMVG9vbGtpdC5idWlsZEFic29sdXRlVVJMKHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaHJlZiB8fCAnJywgYmFzZVVybCk7XG4gIH1cblxuICBpZiAobmF0aXZlVVJMKSB7XG4gICAgdmFyIG5ld1VybCA9IG5ldyBVUkwocmVsYXRpdmVVcmwsIGJhc2VVcmwpOyAvLyBpZiB3ZSdyZSBhIHByb3RvY29sLWxlc3MgdXJsLCByZW1vdmUgdGhlIHByb3RvY29sXG4gICAgLy8gYW5kIGlmIHdlJ3JlIGxvY2F0aW9uLWxlc3MsIHJlbW92ZSB0aGUgbG9jYXRpb25cbiAgICAvLyBvdGhlcndpc2UsIHJldHVybiB0aGUgdXJsIHVubW9kaWZpZWRcblxuICAgIGlmIChyZW1vdmVMb2NhdGlvbikge1xuICAgICAgcmV0dXJuIG5ld1VybC5ocmVmLnNsaWNlKERFRkFVTFRfTE9DQVRJT04ubGVuZ3RoKTtcbiAgICB9IGVsc2UgaWYgKHByb3RvY29sTGVzcykge1xuICAgICAgcmV0dXJuIG5ld1VybC5ocmVmLnNsaWNlKG5ld1VybC5wcm90b2NvbC5sZW5ndGgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdVcmwuaHJlZjtcbiAgfVxuXG4gIHJldHVybiBVUkxUb29sa2l0LmJ1aWxkQWJzb2x1dGVVUkwoYmFzZVVybCwgcmVsYXRpdmVVcmwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZVVybDsiLCIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBQb255ZmlsbCBmb3IgYEFycmF5LnByb3RvdHlwZS5maW5kYCB3aGljaCBpcyBvbmx5IGF2YWlsYWJsZSBpbiBFUzYgcnVudGltZXMuXG4gKlxuICogV29ya3Mgd2l0aCBhbnl0aGluZyB0aGF0IGhhcyBhIGBsZW5ndGhgIHByb3BlcnR5IGFuZCBpbmRleCBhY2Nlc3MgcHJvcGVydGllcywgaW5jbHVkaW5nIE5vZGVMaXN0LlxuICpcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gVFxuICogQHBhcmFtIHtBcnJheTxUPiB8ICh7bGVuZ3RoOm51bWJlciwgW251bWJlcl06IFR9KX0gbGlzdFxuICogQHBhcmFtIHtmdW5jdGlvbiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgbGlzdDpBcnJheTxUPiB8ICh7bGVuZ3RoOm51bWJlciwgW251bWJlcl06IFR9KSk6Ym9vbGVhbn0gcHJlZGljYXRlXG4gKiBAcGFyYW0ge1BhcnRpYWw8UGljazxBcnJheUNvbnN0cnVjdG9yWydwcm90b3R5cGUnXSwgJ2ZpbmQnPj4/fSBhYyBgQXJyYXkucHJvdG90eXBlYCBieSBkZWZhdWx0LFxuICogXHRcdFx0XHRhbGxvd3MgaW5qZWN0aW5nIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uIGluIHRlc3RzXG4gKiBAcmV0dXJucyB7VCB8IHVuZGVmaW5lZH1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZpbmRcbiAqIEBzZWUgaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvbXVsdGlwYWdlL2luZGV4ZWQtY29sbGVjdGlvbnMuaHRtbCNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAqL1xuZnVuY3Rpb24gZmluZChsaXN0LCBwcmVkaWNhdGUsIGFjKSB7XG5cdGlmIChhYyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0YWMgPSBBcnJheS5wcm90b3R5cGU7XG5cdH1cblx0aWYgKGxpc3QgJiYgdHlwZW9mIGFjLmZpbmQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gYWMuZmluZC5jYWxsKGxpc3QsIHByZWRpY2F0ZSk7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChsaXN0LCBpKSkge1xuXHRcdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdFx0aWYgKHByZWRpY2F0ZS5jYWxsKHVuZGVmaW5lZCwgaXRlbSwgaSwgbGlzdCkpIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogXCJTaGFsbG93IGZyZWV6ZXNcIiBhbiBvYmplY3QgdG8gcmVuZGVyIGl0IGltbXV0YWJsZS5cbiAqIFVzZXMgYE9iamVjdC5mcmVlemVgIGlmIGF2YWlsYWJsZSxcbiAqIG90aGVyd2lzZSB0aGUgaW1tdXRhYmlsaXR5IGlzIG9ubHkgaW4gdGhlIHR5cGUuXG4gKlxuICogSXMgdXNlZCB0byBjcmVhdGUgXCJlbnVtIGxpa2VcIiBvYmplY3RzLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1R9IG9iamVjdCB0aGUgb2JqZWN0IHRvIGZyZWV6ZVxuICogQHBhcmFtIHtQaWNrPE9iamVjdENvbnN0cnVjdG9yLCAnZnJlZXplJz4gPSBPYmplY3R9IG9jIGBPYmplY3RgIGJ5IGRlZmF1bHQsXG4gKiBcdFx0XHRcdGFsbG93cyB0byBpbmplY3QgY3VzdG9tIG9iamVjdCBjb25zdHJ1Y3RvciBmb3IgdGVzdHNcbiAqIEByZXR1cm5zIHtSZWFkb25seTxUPn1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9mcmVlemVcbiAqL1xuZnVuY3Rpb24gZnJlZXplKG9iamVjdCwgb2MpIHtcblx0aWYgKG9jID09PSB1bmRlZmluZWQpIHtcblx0XHRvYyA9IE9iamVjdFxuXHR9XG5cdHJldHVybiBvYyAmJiB0eXBlb2Ygb2MuZnJlZXplID09PSAnZnVuY3Rpb24nID8gb2MuZnJlZXplKG9iamVjdCkgOiBvYmplY3Rcbn1cblxuLyoqXG4gKiBTaW5jZSB3ZSBjYW4gbm90IHJlbHkgb24gYE9iamVjdC5hc3NpZ25gIHdlIHByb3ZpZGUgYSBzaW1wbGlmaWVkIHZlcnNpb25cbiAqIHRoYXQgaXMgc3VmZmljaWVudCBmb3Igb3VyIG5lZWRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gc291cmNlXG4gKlxuICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gKiBAdGhyb3dzIFR5cGVFcnJvciBpZiB0YXJnZXQgaXMgbm90IGFuIG9iamVjdFxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnblxuICogQHNlZSBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi9tdWx0aXBhZ2UvZnVuZGFtZW50YWwtb2JqZWN0cy5odG1sI3NlYy1vYmplY3QuYXNzaWduXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuXHRpZiAodGFyZ2V0ID09PSBudWxsIHx8IHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IGlzIG5vdCBhbiBvYmplY3QnKVxuXHR9XG5cdGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuXHRcdFx0dGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGFyZ2V0XG59XG5cbi8qKlxuICogQWxsIG1pbWUgdHlwZXMgdGhhdCBhcmUgYWxsb3dlZCBhcyBpbnB1dCB0byBgRE9NUGFyc2VyLnBhcnNlRnJvbVN0cmluZ2BcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01QYXJzZXIvcGFyc2VGcm9tU3RyaW5nI0FyZ3VtZW50MDIgTUROXG4gKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2R5bmFtaWMtbWFya3VwLWluc2VydGlvbi5odG1sI2RvbXBhcnNlcnN1cHBvcnRlZHR5cGUgV0hBVFdHIEhUTUwgU3BlY1xuICogQHNlZSBET01QYXJzZXIucHJvdG90eXBlLnBhcnNlRnJvbVN0cmluZ1xuICovXG52YXIgTUlNRV9UWVBFID0gZnJlZXplKHtcblx0LyoqXG5cdCAqIGB0ZXh0L2h0bWxgLCB0aGUgb25seSBtaW1lIHR5cGUgdGhhdCB0cmlnZ2VycyB0cmVhdGluZyBhbiBYTUwgZG9jdW1lbnQgYXMgSFRNTC5cblx0ICpcblx0ICogQHNlZSBET01QYXJzZXIuU3VwcG9ydGVkVHlwZS5pc0hUTUxcblx0ICogQHNlZSBodHRwczovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy90ZXh0L2h0bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IVE1MIFdpa2lwZWRpYVxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01QYXJzZXIvcGFyc2VGcm9tU3RyaW5nIE1ETlxuXHQgKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2R5bmFtaWMtbWFya3VwLWluc2VydGlvbi5odG1sI2RvbS1kb21wYXJzZXItcGFyc2Vmcm9tc3RyaW5nIFdIQVRXRyBIVE1MIFNwZWNcblx0ICovXG5cdEhUTUw6ICd0ZXh0L2h0bWwnLFxuXG5cdC8qKlxuXHQgKiBIZWxwZXIgbWV0aG9kIHRvIGNoZWNrIGEgbWltZSB0eXBlIGlmIGl0IGluZGljYXRlcyBhbiBIVE1MIGRvY3VtZW50XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL3RleHQvaHRtbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hUTUwgV2lraXBlZGlhXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTVBhcnNlci9wYXJzZUZyb21TdHJpbmcgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tLWRvbXBhcnNlci1wYXJzZWZyb21zdHJpbmcgXHQgKi9cblx0aXNIVE1MOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRyZXR1cm4gdmFsdWUgPT09IE1JTUVfVFlQRS5IVE1MXG5cdH0sXG5cblx0LyoqXG5cdCAqIGBhcHBsaWNhdGlvbi94bWxgLCB0aGUgc3RhbmRhcmQgbWltZSB0eXBlIGZvciBYTUwgZG9jdW1lbnRzLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL2FwcGxpY2F0aW9uL3htbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MzAzI3NlY3Rpb24tOS4xIFJGQyA3MzAzXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvWE1MX2FuZF9NSU1FIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX0FQUExJQ0FUSU9OOiAnYXBwbGljYXRpb24veG1sJyxcblxuXHQvKipcblx0ICogYHRleHQvaHRtbGAsIGFuIGFsaWFzIGZvciBgYXBwbGljYXRpb24veG1sYC5cblx0ICpcblx0ICogQHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzMwMyNzZWN0aW9uLTkuMiBSRkMgNzMwM1xuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL3RleHQveG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvWE1MX2FuZF9NSU1FIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX1RFWFQ6ICd0ZXh0L3htbCcsXG5cblx0LyoqXG5cdCAqIGBhcHBsaWNhdGlvbi94aHRtbCt4bWxgLCBpbmRpY2F0ZXMgYW4gWE1MIGRvY3VtZW50IHRoYXQgaGFzIHRoZSBkZWZhdWx0IEhUTUwgbmFtZXNwYWNlLFxuXHQgKiBidXQgaXMgcGFyc2VkIGFzIGFuIFhNTCBkb2N1bWVudC5cblx0ICpcblx0ICogQHNlZSBodHRwczovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy9hcHBsaWNhdGlvbi94aHRtbCt4bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1jcmVhdGVkb2N1bWVudCBXSEFUV0cgRE9NIFNwZWNcblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9YSFRNTCBXaWtpcGVkaWFcblx0ICovXG5cdFhNTF9YSFRNTF9BUFBMSUNBVElPTjogJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsXG5cblx0LyoqXG5cdCAqIGBpbWFnZS9zdmcreG1sYCxcblx0ICpcblx0ICogQHNlZSBodHRwczovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy9pbWFnZS9zdmcreG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRzExLyBXM0MgU1ZHIDEuMVxuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NjYWxhYmxlX1ZlY3Rvcl9HcmFwaGljcyBXaWtpcGVkaWFcblx0ICovXG5cdFhNTF9TVkdfSU1BR0U6ICdpbWFnZS9zdmcreG1sJyxcbn0pXG5cbi8qKlxuICogTmFtZXNwYWNlcyB0aGF0IGFyZSB1c2VkIGluIHRoaXMgY29kZSBiYXNlLlxuICpcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvUkVDLXhtbC1uYW1lc1xuICovXG52YXIgTkFNRVNQQUNFID0gZnJlZXplKHtcblx0LyoqXG5cdCAqIFRoZSBYSFRNTCBuYW1lc3BhY2UuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFxuXHQgKi9cblx0SFRNTDogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnLFxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgYHVyaWAgZXF1YWxzIGBOQU1FU1BBQ0UuSFRNTGAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdXJpXVxuXHQgKlxuXHQgKiBAc2VlIE5BTUVTUEFDRS5IVE1MXG5cdCAqL1xuXHRpc0hUTUw6IGZ1bmN0aW9uICh1cmkpIHtcblx0XHRyZXR1cm4gdXJpID09PSBOQU1FU1BBQ0UuSFRNTFxuXHR9LFxuXG5cdC8qKlxuXHQgKiBUaGUgU1ZHIG5hbWVzcGFjZS5cblx0ICpcblx0ICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xuXHQgKi9cblx0U1ZHOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuXG5cdC8qKlxuXHQgKiBUaGUgYHhtbDpgIG5hbWVzcGFjZS5cblx0ICpcblx0ICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2Vcblx0ICovXG5cdFhNTDogJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZScsXG5cblx0LyoqXG5cdCAqIFRoZSBgeG1sbnM6YCBuYW1lc3BhY2Vcblx0ICpcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvMjAwMC94bWxucy9cblx0ICovXG5cdFhNTE5TOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nLFxufSlcblxuZXhwb3J0cy5hc3NpZ24gPSBhc3NpZ247XG5leHBvcnRzLmZpbmQgPSBmaW5kO1xuZXhwb3J0cy5mcmVlemUgPSBmcmVlemU7XG5leHBvcnRzLk1JTUVfVFlQRSA9IE1JTUVfVFlQRTtcbmV4cG9ydHMuTkFNRVNQQUNFID0gTkFNRVNQQUNFO1xuIiwidmFyIGNvbnZlbnRpb25zID0gcmVxdWlyZShcIi4vY29udmVudGlvbnNcIik7XG52YXIgZG9tID0gcmVxdWlyZSgnLi9kb20nKVxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnLi9lbnRpdGllcycpO1xudmFyIHNheCA9IHJlcXVpcmUoJy4vc2F4Jyk7XG5cbnZhciBET01JbXBsZW1lbnRhdGlvbiA9IGRvbS5ET01JbXBsZW1lbnRhdGlvbjtcblxudmFyIE5BTUVTUEFDRSA9IGNvbnZlbnRpb25zLk5BTUVTUEFDRTtcblxudmFyIFBhcnNlRXJyb3IgPSBzYXguUGFyc2VFcnJvcjtcbnZhciBYTUxSZWFkZXIgPSBzYXguWE1MUmVhZGVyO1xuXG4vKipcbiAqIE5vcm1hbGl6ZXMgbGluZSBlbmRpbmcgYWNjb3JkaW5nIHRvIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwxMS8jc2VjLWxpbmUtZW5kczpcbiAqXG4gKiA+IFhNTCBwYXJzZWQgZW50aXRpZXMgYXJlIG9mdGVuIHN0b3JlZCBpbiBjb21wdXRlciBmaWxlcyB3aGljaCxcbiAqID4gZm9yIGVkaXRpbmcgY29udmVuaWVuY2UsIGFyZSBvcmdhbml6ZWQgaW50byBsaW5lcy5cbiAqID4gVGhlc2UgbGluZXMgYXJlIHR5cGljYWxseSBzZXBhcmF0ZWQgYnkgc29tZSBjb21iaW5hdGlvblxuICogPiBvZiB0aGUgY2hhcmFjdGVycyBDQVJSSUFHRSBSRVRVUk4gKCN4RCkgYW5kIExJTkUgRkVFRCAoI3hBKS5cbiAqID5cbiAqID4gVG8gc2ltcGxpZnkgdGhlIHRhc2tzIG9mIGFwcGxpY2F0aW9ucywgdGhlIFhNTCBwcm9jZXNzb3IgbXVzdCBiZWhhdmVcbiAqID4gYXMgaWYgaXQgbm9ybWFsaXplZCBhbGwgbGluZSBicmVha3MgaW4gZXh0ZXJuYWwgcGFyc2VkIGVudGl0aWVzIChpbmNsdWRpbmcgdGhlIGRvY3VtZW50IGVudGl0eSlcbiAqID4gb24gaW5wdXQsIGJlZm9yZSBwYXJzaW5nLCBieSB0cmFuc2xhdGluZyBhbGwgb2YgdGhlIGZvbGxvd2luZyB0byBhIHNpbmdsZSAjeEEgY2hhcmFjdGVyOlxuICogPlxuICogPiAxLiB0aGUgdHdvLWNoYXJhY3RlciBzZXF1ZW5jZSAjeEQgI3hBXG4gKiA+IDIuIHRoZSB0d28tY2hhcmFjdGVyIHNlcXVlbmNlICN4RCAjeDg1XG4gKiA+IDMuIHRoZSBzaW5nbGUgY2hhcmFjdGVyICN4ODVcbiAqID4gNC4gdGhlIHNpbmdsZSBjaGFyYWN0ZXIgI3gyMDI4XG4gKiA+IDUuIGFueSAjeEQgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5ICN4QSBvciAjeDg1LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplTGluZUVuZGluZ3MoaW5wdXQpIHtcblx0cmV0dXJuIGlucHV0XG5cdFx0LnJlcGxhY2UoL1xccltcXG5cXHUwMDg1XS9nLCAnXFxuJylcblx0XHQucmVwbGFjZSgvW1xcclxcdTAwODVcXHUyMDI4XS9nLCAnXFxuJylcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiBMb2NhdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2NvbHVtbk51bWJlcl1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbGluZU51bWJlcl1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIERPTVBhcnNlck9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7RE9NSGFuZGxlcn0gW2RvbUJ1aWxkZXJdXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBbZXJyb3JIYW5kbGVyXVxuICogQHByb3BlcnR5IHsoc3RyaW5nKSA9PiBzdHJpbmd9IFtub3JtYWxpemVMaW5lRW5kaW5nc10gdXNlZCB0byByZXBsYWNlIGxpbmUgZW5kaW5ncyBiZWZvcmUgcGFyc2luZ1xuICogXHRcdFx0XHRcdFx0ZGVmYXVsdHMgdG8gYG5vcm1hbGl6ZUxpbmVFbmRpbmdzYFxuICogQHByb3BlcnR5IHtMb2NhdG9yfSBbbG9jYXRvcl1cbiAqIEBwcm9wZXJ0eSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gW3htbG5zXVxuICpcbiAqIEBzZWUgbm9ybWFsaXplTGluZUVuZGluZ3NcbiAqL1xuXG4vKipcbiAqIFRoZSBET01QYXJzZXIgaW50ZXJmYWNlIHByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIHBhcnNlIFhNTCBvciBIVE1MIHNvdXJjZSBjb2RlXG4gKiBmcm9tIGEgc3RyaW5nIGludG8gYSBET00gYERvY3VtZW50YC5cbiAqXG4gKiBfeG1sZG9tIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBzcGVjIGluIHRoYXQgaXQgYWxsb3dzIGFuIGBvcHRpb25zYCBwYXJhbWV0ZXIsXG4gKiB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBiZWhhdmlvci5fXG4gKlxuICogQHBhcmFtIHtET01QYXJzZXJPcHRpb25zfSBbb3B0aW9uc11cbiAqIEBjb25zdHJ1Y3RvclxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTVBhcnNlclxuICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9keW5hbWljLW1hcmt1cC1pbnNlcnRpb24uaHRtbCNkb20tcGFyc2luZy1hbmQtc2VyaWFsaXphdGlvblxuICovXG5mdW5jdGlvbiBET01QYXJzZXIob3B0aW9ucyl7XG5cdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHx7bG9jYXRvcjp7fX07XG59XG5cbkRPTVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nID0gZnVuY3Rpb24oc291cmNlLG1pbWVUeXBlKXtcblx0dmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cdHZhciBzYXggPSAgbmV3IFhNTFJlYWRlcigpO1xuXHR2YXIgZG9tQnVpbGRlciA9IG9wdGlvbnMuZG9tQnVpbGRlciB8fCBuZXcgRE9NSGFuZGxlcigpOy8vY29udGVudEhhbmRsZXIgYW5kIExleGljYWxIYW5kbGVyXG5cdHZhciBlcnJvckhhbmRsZXIgPSBvcHRpb25zLmVycm9ySGFuZGxlcjtcblx0dmFyIGxvY2F0b3IgPSBvcHRpb25zLmxvY2F0b3I7XG5cdHZhciBkZWZhdWx0TlNNYXAgPSBvcHRpb25zLnhtbG5zfHx7fTtcblx0dmFyIGlzSFRNTCA9IC9cXC94P2h0bWw/JC8udGVzdChtaW1lVHlwZSk7Ly9taW1lVHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2h0bWwnKSA+IC0xO1xuICBcdHZhciBlbnRpdHlNYXAgPSBpc0hUTUwgPyBlbnRpdGllcy5IVE1MX0VOVElUSUVTIDogZW50aXRpZXMuWE1MX0VOVElUSUVTO1xuXHRpZihsb2NhdG9yKXtcblx0XHRkb21CdWlsZGVyLnNldERvY3VtZW50TG9jYXRvcihsb2NhdG9yKVxuXHR9XG5cblx0c2F4LmVycm9ySGFuZGxlciA9IGJ1aWxkRXJyb3JIYW5kbGVyKGVycm9ySGFuZGxlcixkb21CdWlsZGVyLGxvY2F0b3IpO1xuXHRzYXguZG9tQnVpbGRlciA9IG9wdGlvbnMuZG9tQnVpbGRlciB8fCBkb21CdWlsZGVyO1xuXHRpZihpc0hUTUwpe1xuXHRcdGRlZmF1bHROU01hcFsnJ10gPSBOQU1FU1BBQ0UuSFRNTDtcblx0fVxuXHRkZWZhdWx0TlNNYXAueG1sID0gZGVmYXVsdE5TTWFwLnhtbCB8fCBOQU1FU1BBQ0UuWE1MO1xuXHR2YXIgbm9ybWFsaXplID0gb3B0aW9ucy5ub3JtYWxpemVMaW5lRW5kaW5ncyB8fCBub3JtYWxpemVMaW5lRW5kaW5ncztcblx0aWYgKHNvdXJjZSAmJiB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJykge1xuXHRcdHNheC5wYXJzZShcblx0XHRcdG5vcm1hbGl6ZShzb3VyY2UpLFxuXHRcdFx0ZGVmYXVsdE5TTWFwLFxuXHRcdFx0ZW50aXR5TWFwXG5cdFx0KVxuXHR9IGVsc2Uge1xuXHRcdHNheC5lcnJvckhhbmRsZXIuZXJyb3IoJ2ludmFsaWQgZG9jIHNvdXJjZScpXG5cdH1cblx0cmV0dXJuIGRvbUJ1aWxkZXIuZG9jO1xufVxuZnVuY3Rpb24gYnVpbGRFcnJvckhhbmRsZXIoZXJyb3JJbXBsLGRvbUJ1aWxkZXIsbG9jYXRvcil7XG5cdGlmKCFlcnJvckltcGwpe1xuXHRcdGlmKGRvbUJ1aWxkZXIgaW5zdGFuY2VvZiBET01IYW5kbGVyKXtcblx0XHRcdHJldHVybiBkb21CdWlsZGVyO1xuXHRcdH1cblx0XHRlcnJvckltcGwgPSBkb21CdWlsZGVyIDtcblx0fVxuXHR2YXIgZXJyb3JIYW5kbGVyID0ge31cblx0dmFyIGlzQ2FsbGJhY2sgPSBlcnJvckltcGwgaW5zdGFuY2VvZiBGdW5jdGlvbjtcblx0bG9jYXRvciA9IGxvY2F0b3J8fHt9XG5cdGZ1bmN0aW9uIGJ1aWxkKGtleSl7XG5cdFx0dmFyIGZuID0gZXJyb3JJbXBsW2tleV07XG5cdFx0aWYoIWZuICYmIGlzQ2FsbGJhY2spe1xuXHRcdFx0Zm4gPSBlcnJvckltcGwubGVuZ3RoID09IDI/ZnVuY3Rpb24obXNnKXtlcnJvckltcGwoa2V5LG1zZyl9OmVycm9ySW1wbDtcblx0XHR9XG5cdFx0ZXJyb3JIYW5kbGVyW2tleV0gPSBmbiAmJiBmdW5jdGlvbihtc2cpe1xuXHRcdFx0Zm4oJ1t4bWxkb20gJytrZXkrJ11cXHQnK21zZytfbG9jYXRvcihsb2NhdG9yKSk7XG5cdFx0fXx8ZnVuY3Rpb24oKXt9O1xuXHR9XG5cdGJ1aWxkKCd3YXJuaW5nJyk7XG5cdGJ1aWxkKCdlcnJvcicpO1xuXHRidWlsZCgnZmF0YWxFcnJvcicpO1xuXHRyZXR1cm4gZXJyb3JIYW5kbGVyO1xufVxuXG4vL2NvbnNvbGUubG9nKCcjXFxuXFxuXFxuXFxuXFxuXFxuXFxuIyMjIycpXG4vKipcbiAqICtDb250ZW50SGFuZGxlcitFcnJvckhhbmRsZXJcbiAqICtMZXhpY2FsSGFuZGxlcitFbnRpdHlSZXNvbHZlcjJcbiAqIC1EZWNsSGFuZGxlci1EVERIYW5kbGVyXG4gKlxuICogRGVmYXVsdEhhbmRsZXI6RW50aXR5UmVzb2x2ZXIsIERUREhhbmRsZXIsIENvbnRlbnRIYW5kbGVyLCBFcnJvckhhbmRsZXJcbiAqIERlZmF1bHRIYW5kbGVyMjpEZWZhdWx0SGFuZGxlcixMZXhpY2FsSGFuZGxlciwgRGVjbEhhbmRsZXIsIEVudGl0eVJlc29sdmVyMlxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvaGVscGVycy9EZWZhdWx0SGFuZGxlci5odG1sXG4gKi9cbmZ1bmN0aW9uIERPTUhhbmRsZXIoKSB7XG4gICAgdGhpcy5jZGF0YSA9IGZhbHNlO1xufVxuZnVuY3Rpb24gcG9zaXRpb24obG9jYXRvcixub2RlKXtcblx0bm9kZS5saW5lTnVtYmVyID0gbG9jYXRvci5saW5lTnVtYmVyO1xuXHRub2RlLmNvbHVtbk51bWJlciA9IGxvY2F0b3IuY29sdW1uTnVtYmVyO1xufVxuLyoqXG4gKiBAc2VlIG9yZy54bWwuc2F4LkNvbnRlbnRIYW5kbGVyI3N0YXJ0RG9jdW1lbnRcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L0NvbnRlbnRIYW5kbGVyLmh0bWxcbiAqL1xuRE9NSGFuZGxlci5wcm90b3R5cGUgPSB7XG5cdHN0YXJ0RG9jdW1lbnQgOiBmdW5jdGlvbigpIHtcbiAgICBcdHRoaXMuZG9jID0gbmV3IERPTUltcGxlbWVudGF0aW9uKCkuY3JlYXRlRG9jdW1lbnQobnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgXHRpZiAodGhpcy5sb2NhdG9yKSB7XG4gICAgICAgIFx0dGhpcy5kb2MuZG9jdW1lbnRVUkkgPSB0aGlzLmxvY2F0b3Iuc3lzdGVtSWQ7XG4gICAgXHR9XG5cdH0sXG5cdHN0YXJ0RWxlbWVudDpmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSwgcU5hbWUsIGF0dHJzKSB7XG5cdFx0dmFyIGRvYyA9IHRoaXMuZG9jO1xuXHQgICAgdmFyIGVsID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHFOYW1lfHxsb2NhbE5hbWUpO1xuXHQgICAgdmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcblx0ICAgIGFwcGVuZEVsZW1lbnQodGhpcywgZWwpO1xuXHQgICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGVsO1xuXG5cdFx0dGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixlbClcblx0ICAgIGZvciAodmFyIGkgPSAwIDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgICAgdmFyIG5hbWVzcGFjZVVSSSA9IGF0dHJzLmdldFVSSShpKTtcblx0ICAgICAgICB2YXIgdmFsdWUgPSBhdHRycy5nZXRWYWx1ZShpKTtcblx0ICAgICAgICB2YXIgcU5hbWUgPSBhdHRycy5nZXRRTmFtZShpKTtcblx0XHRcdHZhciBhdHRyID0gZG9jLmNyZWF0ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcU5hbWUpO1xuXHRcdFx0dGhpcy5sb2NhdG9yICYmcG9zaXRpb24oYXR0cnMuZ2V0TG9jYXRvcihpKSxhdHRyKTtcblx0XHRcdGF0dHIudmFsdWUgPSBhdHRyLm5vZGVWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlTm9kZShhdHRyKVxuXHQgICAgfVxuXHR9LFxuXHRlbmRFbGVtZW50OmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lLCBxTmFtZSkge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50RWxlbWVudFxuXHRcdHZhciB0YWdOYW1lID0gY3VycmVudC50YWdOYW1lO1xuXHRcdHRoaXMuY3VycmVudEVsZW1lbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG5cdH0sXG5cdHN0YXJ0UHJlZml4TWFwcGluZzpmdW5jdGlvbihwcmVmaXgsIHVyaSkge1xuXHR9LFxuXHRlbmRQcmVmaXhNYXBwaW5nOmZ1bmN0aW9uKHByZWZpeCkge1xuXHR9LFxuXHRwcm9jZXNzaW5nSW5zdHJ1Y3Rpb246ZnVuY3Rpb24odGFyZ2V0LCBkYXRhKSB7XG5cdCAgICB2YXIgaW5zID0gdGhpcy5kb2MuY3JlYXRlUHJvY2Vzc2luZ0luc3RydWN0aW9uKHRhcmdldCwgZGF0YSk7XG5cdCAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLGlucylcblx0ICAgIGFwcGVuZEVsZW1lbnQodGhpcywgaW5zKTtcblx0fSxcblx0aWdub3JhYmxlV2hpdGVzcGFjZTpmdW5jdGlvbihjaCwgc3RhcnQsIGxlbmd0aCkge1xuXHR9LFxuXHRjaGFyYWN0ZXJzOmZ1bmN0aW9uKGNoYXJzLCBzdGFydCwgbGVuZ3RoKSB7XG5cdFx0Y2hhcnMgPSBfdG9TdHJpbmcuYXBwbHkodGhpcyxhcmd1bWVudHMpXG5cdFx0Ly9jb25zb2xlLmxvZyhjaGFycylcblx0XHRpZihjaGFycyl7XG5cdFx0XHRpZiAodGhpcy5jZGF0YSkge1xuXHRcdFx0XHR2YXIgY2hhck5vZGUgPSB0aGlzLmRvYy5jcmVhdGVDREFUQVNlY3Rpb24oY2hhcnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGNoYXJOb2RlID0gdGhpcy5kb2MuY3JlYXRlVGV4dE5vZGUoY2hhcnMpO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5jdXJyZW50RWxlbWVudCl7XG5cdFx0XHRcdHRoaXMuY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhck5vZGUpO1xuXHRcdFx0fWVsc2UgaWYoL15cXHMqJC8udGVzdChjaGFycykpe1xuXHRcdFx0XHR0aGlzLmRvYy5hcHBlbmRDaGlsZChjaGFyTm9kZSk7XG5cdFx0XHRcdC8vcHJvY2VzcyB4bWxcblx0XHRcdH1cblx0XHRcdHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsY2hhck5vZGUpXG5cdFx0fVxuXHR9LFxuXHRza2lwcGVkRW50aXR5OmZ1bmN0aW9uKG5hbWUpIHtcblx0fSxcblx0ZW5kRG9jdW1lbnQ6ZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5kb2Mubm9ybWFsaXplKCk7XG5cdH0sXG5cdHNldERvY3VtZW50TG9jYXRvcjpmdW5jdGlvbiAobG9jYXRvcikge1xuXHQgICAgaWYodGhpcy5sb2NhdG9yID0gbG9jYXRvcil7Ly8gJiYgISgnbGluZU51bWJlcicgaW4gbG9jYXRvcikpe1xuXHQgICAgXHRsb2NhdG9yLmxpbmVOdW1iZXIgPSAwO1xuXHQgICAgfVxuXHR9LFxuXHQvL0xleGljYWxIYW5kbGVyXG5cdGNvbW1lbnQ6ZnVuY3Rpb24oY2hhcnMsIHN0YXJ0LCBsZW5ndGgpIHtcblx0XHRjaGFycyA9IF90b1N0cmluZy5hcHBseSh0aGlzLGFyZ3VtZW50cylcblx0ICAgIHZhciBjb21tID0gdGhpcy5kb2MuY3JlYXRlQ29tbWVudChjaGFycyk7XG5cdCAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLGNvbW0pXG5cdCAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGNvbW0pO1xuXHR9LFxuXG5cdHN0YXJ0Q0RBVEE6ZnVuY3Rpb24oKSB7XG5cdCAgICAvL3VzZWQgaW4gY2hhcmFjdGVycygpIG1ldGhvZHNcblx0ICAgIHRoaXMuY2RhdGEgPSB0cnVlO1xuXHR9LFxuXHRlbmRDREFUQTpmdW5jdGlvbigpIHtcblx0ICAgIHRoaXMuY2RhdGEgPSBmYWxzZTtcblx0fSxcblxuXHRzdGFydERURDpmdW5jdGlvbihuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpIHtcblx0XHR2YXIgaW1wbCA9IHRoaXMuZG9jLmltcGxlbWVudGF0aW9uO1xuXHQgICAgaWYgKGltcGwgJiYgaW1wbC5jcmVhdGVEb2N1bWVudFR5cGUpIHtcblx0ICAgICAgICB2YXIgZHQgPSBpbXBsLmNyZWF0ZURvY3VtZW50VHlwZShuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpO1xuXHQgICAgICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsZHQpXG5cdCAgICAgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBkdCk7XG5cdFx0XHRcdFx0dGhpcy5kb2MuZG9jdHlwZSA9IGR0O1xuXHQgICAgfVxuXHR9LFxuXHQvKipcblx0ICogQHNlZSBvcmcueG1sLnNheC5FcnJvckhhbmRsZXJcblx0ICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvRXJyb3JIYW5kbGVyLmh0bWxcblx0ICovXG5cdHdhcm5pbmc6ZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRjb25zb2xlLndhcm4oJ1t4bWxkb20gd2FybmluZ11cXHQnK2Vycm9yLF9sb2NhdG9yKHRoaXMubG9jYXRvcikpO1xuXHR9LFxuXHRlcnJvcjpmdW5jdGlvbihlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1t4bWxkb20gZXJyb3JdXFx0JytlcnJvcixfbG9jYXRvcih0aGlzLmxvY2F0b3IpKTtcblx0fSxcblx0ZmF0YWxFcnJvcjpmdW5jdGlvbihlcnJvcikge1xuXHRcdHRocm93IG5ldyBQYXJzZUVycm9yKGVycm9yLCB0aGlzLmxvY2F0b3IpO1xuXHR9XG59XG5mdW5jdGlvbiBfbG9jYXRvcihsKXtcblx0aWYobCl7XG5cdFx0cmV0dXJuICdcXG5AJysobC5zeXN0ZW1JZCB8fCcnKSsnI1tsaW5lOicrbC5saW5lTnVtYmVyKycsY29sOicrbC5jb2x1bW5OdW1iZXIrJ10nXG5cdH1cbn1cbmZ1bmN0aW9uIF90b1N0cmluZyhjaGFycyxzdGFydCxsZW5ndGgpe1xuXHRpZih0eXBlb2YgY2hhcnMgPT0gJ3N0cmluZycpe1xuXHRcdHJldHVybiBjaGFycy5zdWJzdHIoc3RhcnQsbGVuZ3RoKVxuXHR9ZWxzZXsvL2phdmEgc2F4IGNvbm5lY3Qgd2lkdGggeG1sZG9tIG9uIHJoaW5vKHdoYXQgYWJvdXQ6IFwiPyAmJiAhKGNoYXJzIGluc3RhbmNlb2YgU3RyaW5nKVwiKVxuXHRcdGlmKGNoYXJzLmxlbmd0aCA+PSBzdGFydCtsZW5ndGggfHwgc3RhcnQpe1xuXHRcdFx0cmV0dXJuIG5ldyBqYXZhLmxhbmcuU3RyaW5nKGNoYXJzLHN0YXJ0LGxlbmd0aCkrJyc7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFycztcblx0fVxufVxuXG4vKlxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvZXh0L0xleGljYWxIYW5kbGVyLmh0bWxcbiAqIHVzZWQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LmV4dC5MZXhpY2FsSGFuZGxlcjpcbiAqICAjY29tbWVudChjaGFycywgc3RhcnQsIGxlbmd0aClcbiAqICAjc3RhcnRDREFUQSgpXG4gKiAgI2VuZENEQVRBKClcbiAqICAjc3RhcnREVEQobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKVxuICpcbiAqXG4gKiBJR05PUkVEIG1ldGhvZCBvZiBvcmcueG1sLnNheC5leHQuTGV4aWNhbEhhbmRsZXI6XG4gKiAgI2VuZERURCgpXG4gKiAgI3N0YXJ0RW50aXR5KG5hbWUpXG4gKiAgI2VuZEVudGl0eShuYW1lKVxuICpcbiAqXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9leHQvRGVjbEhhbmRsZXIuaHRtbFxuICogSUdOT1JFRCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguZXh0LkRlY2xIYW5kbGVyXG4gKiBcdCNhdHRyaWJ1dGVEZWNsKGVOYW1lLCBhTmFtZSwgdHlwZSwgbW9kZSwgdmFsdWUpXG4gKiAgI2VsZW1lbnREZWNsKG5hbWUsIG1vZGVsKVxuICogICNleHRlcm5hbEVudGl0eURlY2wobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKVxuICogICNpbnRlcm5hbEVudGl0eURlY2wobmFtZSwgdmFsdWUpXG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9leHQvRW50aXR5UmVzb2x2ZXIyLmh0bWxcbiAqIElHTk9SRUQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LkVudGl0eVJlc29sdmVyMlxuICogICNyZXNvbHZlRW50aXR5KFN0cmluZyBuYW1lLFN0cmluZyBwdWJsaWNJZCxTdHJpbmcgYmFzZVVSSSxTdHJpbmcgc3lzdGVtSWQpXG4gKiAgI3Jlc29sdmVFbnRpdHkocHVibGljSWQsIHN5c3RlbUlkKVxuICogICNnZXRFeHRlcm5hbFN1YnNldChuYW1lLCBiYXNlVVJJKVxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvRFRESGFuZGxlci5odG1sXG4gKiBJR05PUkVEIG1ldGhvZCBvZiBvcmcueG1sLnNheC5EVERIYW5kbGVyXG4gKiAgI25vdGF0aW9uRGVjbChuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpIHt9O1xuICogICN1bnBhcnNlZEVudGl0eURlY2wobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkLCBub3RhdGlvbk5hbWUpIHt9O1xuICovXG5cImVuZERURCxzdGFydEVudGl0eSxlbmRFbnRpdHksYXR0cmlidXRlRGVjbCxlbGVtZW50RGVjbCxleHRlcm5hbEVudGl0eURlY2wsaW50ZXJuYWxFbnRpdHlEZWNsLHJlc29sdmVFbnRpdHksZ2V0RXh0ZXJuYWxTdWJzZXQsbm90YXRpb25EZWNsLHVucGFyc2VkRW50aXR5RGVjbFwiLnJlcGxhY2UoL1xcdysvZyxmdW5jdGlvbihrZXkpe1xuXHRET01IYW5kbGVyLnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH1cbn0pXG5cbi8qIFByaXZhdGUgc3RhdGljIGhlbHBlcnMgdHJlYXRlZCBiZWxvdyBhcyBwcml2YXRlIGluc3RhbmNlIG1ldGhvZHMsIHNvIGRvbid0IG5lZWQgdG8gYWRkIHRoZXNlIHRvIHRoZSBwdWJsaWMgQVBJOyB3ZSBtaWdodCB1c2UgYSBSZWxhdG9yIHRvIGFsc28gZ2V0IHJpZCBvZiBub24tc3RhbmRhcmQgcHVibGljIHByb3BlcnRpZXMgKi9cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQgKGhhbmRlcixub2RlKSB7XG4gICAgaWYgKCFoYW5kZXIuY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgaGFuZGVyLmRvYy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kZXIuY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufS8vYXBwZW5kQ2hpbGQgYW5kIHNldEF0dHJpYnV0ZU5TIGFyZSBwcmVmb3JtYW5jZSBrZXlcblxuZXhwb3J0cy5fX0RPTUhhbmRsZXIgPSBET01IYW5kbGVyO1xuZXhwb3J0cy5ub3JtYWxpemVMaW5lRW5kaW5ncyA9IG5vcm1hbGl6ZUxpbmVFbmRpbmdzO1xuZXhwb3J0cy5ET01QYXJzZXIgPSBET01QYXJzZXI7XG4iLCJ2YXIgY29udmVudGlvbnMgPSByZXF1aXJlKFwiLi9jb252ZW50aW9uc1wiKTtcblxudmFyIGZpbmQgPSBjb252ZW50aW9ucy5maW5kO1xudmFyIE5BTUVTUEFDRSA9IGNvbnZlbnRpb25zLk5BTUVTUEFDRTtcblxuLyoqXG4gKiBBIHByZXJlcXVpc2l0ZSBmb3IgYFtdLmZpbHRlcmAsIHRvIGRyb3AgZWxlbWVudHMgdGhhdCBhcmUgZW1wdHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIG5vdEVtcHR5U3RyaW5nIChpbnB1dCkge1xuXHRyZXR1cm4gaW5wdXQgIT09ICcnXG59XG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI3NwbGl0LW9uLWFzY2lpLXdoaXRlc3BhY2VcbiAqIEBzZWUgaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2FzY2lpLXdoaXRlc3BhY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gKGNhbiBiZSBlbXB0eSlcbiAqL1xuZnVuY3Rpb24gc3BsaXRPbkFTQ0lJV2hpdGVzcGFjZShpbnB1dCkge1xuXHQvLyBVKzAwMDkgVEFCLCBVKzAwMEEgTEYsIFUrMDAwQyBGRiwgVSswMDBEIENSLCBVKzAwMjAgU1BBQ0Vcblx0cmV0dXJuIGlucHV0ID8gaW5wdXQuc3BsaXQoL1tcXHRcXG5cXGZcXHIgXSsvKS5maWx0ZXIobm90RW1wdHlTdHJpbmcpIDogW11cbn1cblxuLyoqXG4gKiBBZGRzIGVsZW1lbnQgYXMgYSBrZXkgdG8gY3VycmVudCBpZiBpdCBpcyBub3QgYWxyZWFkeSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYm9vbGVhbiB8IHVuZGVmaW5lZD59IGN1cnJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50XG4gKiBAcmV0dXJucyB7UmVjb3JkPHN0cmluZywgYm9vbGVhbiB8IHVuZGVmaW5lZD59XG4gKi9cbmZ1bmN0aW9uIG9yZGVyZWRTZXRSZWR1Y2VyIChjdXJyZW50LCBlbGVtZW50KSB7XG5cdGlmICghY3VycmVudC5oYXNPd25Qcm9wZXJ0eShlbGVtZW50KSkge1xuXHRcdGN1cnJlbnRbZWxlbWVudF0gPSB0cnVlO1xuXHR9XG5cdHJldHVybiBjdXJyZW50O1xufVxuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI29yZGVyZWQtc2V0XG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xuZnVuY3Rpb24gdG9PcmRlcmVkU2V0KGlucHV0KSB7XG5cdGlmICghaW5wdXQpIHJldHVybiBbXTtcblx0dmFyIGxpc3QgPSBzcGxpdE9uQVNDSUlXaGl0ZXNwYWNlKGlucHV0KTtcblx0cmV0dXJuIE9iamVjdC5rZXlzKGxpc3QucmVkdWNlKG9yZGVyZWRTZXRSZWR1Y2VyLCB7fSkpXG59XG5cbi8qKlxuICogVXNlcyBgbGlzdC5pbmRleE9mYCB0byBpbXBsZW1lbnQgc29tZXRoaW5nIGxpa2UgYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AsXG4gKiB3aGljaCB3ZSBjYW4gbm90IHJlbHkgb24gYmVpbmcgYXZhaWxhYmxlLlxuICpcbiAqIEBwYXJhbSB7YW55W119IGxpc3RcbiAqIEByZXR1cm5zIHtmdW5jdGlvbihhbnkpOiBib29sZWFufVxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzIChsaXN0KSB7XG5cdHJldHVybiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGxpc3QgJiYgbGlzdC5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcblx0fVxufVxuXG5mdW5jdGlvbiBjb3B5KHNyYyxkZXN0KXtcblx0Zm9yKHZhciBwIGluIHNyYyl7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzcmMsIHApKSB7XG5cdFx0XHRkZXN0W3BdID0gc3JjW3BdO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbl5cXHcrXFwucHJvdG90eXBlXFwuKFtfXFx3XSspXFxzKj1cXHMqKCg/Oi4qXFx7XFxzKj9bXFxyXFxuXVtcXHNcXFNdKj9efSl8XFxTLio/KD89WztcXHJcXG5dKSk7P1xuXlxcdytcXC5wcm90b3R5cGVcXC4oW19cXHddKylcXHMqPVxccyooXFxTLio/KD89WztcXHJcXG5dKSk7P1xuICovXG5mdW5jdGlvbiBfZXh0ZW5kcyhDbGFzcyxTdXBlcil7XG5cdHZhciBwdCA9IENsYXNzLnByb3RvdHlwZTtcblx0aWYoIShwdCBpbnN0YW5jZW9mIFN1cGVyKSl7XG5cdFx0ZnVuY3Rpb24gdCgpe307XG5cdFx0dC5wcm90b3R5cGUgPSBTdXBlci5wcm90b3R5cGU7XG5cdFx0dCA9IG5ldyB0KCk7XG5cdFx0Y29weShwdCx0KTtcblx0XHRDbGFzcy5wcm90b3R5cGUgPSBwdCA9IHQ7XG5cdH1cblx0aWYocHQuY29uc3RydWN0b3IgIT0gQ2xhc3Mpe1xuXHRcdGlmKHR5cGVvZiBDbGFzcyAhPSAnZnVuY3Rpb24nKXtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJ1bmtub3duIENsYXNzOlwiK0NsYXNzKVxuXHRcdH1cblx0XHRwdC5jb25zdHJ1Y3RvciA9IENsYXNzXG5cdH1cbn1cblxuLy8gTm9kZSBUeXBlc1xudmFyIE5vZGVUeXBlID0ge31cbnZhciBFTEVNRU5UX05PREUgICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5FTEVNRU5UX05PREUgICAgICAgICAgICAgICAgPSAxO1xudmFyIEFUVFJJQlVURV9OT0RFICAgICAgICAgICAgICA9IE5vZGVUeXBlLkFUVFJJQlVURV9OT0RFICAgICAgICAgICAgICA9IDI7XG52YXIgVEVYVF9OT0RFICAgICAgICAgICAgICAgICAgID0gTm9kZVR5cGUuVEVYVF9OT0RFICAgICAgICAgICAgICAgICAgID0gMztcbnZhciBDREFUQV9TRUNUSU9OX05PREUgICAgICAgICAgPSBOb2RlVHlwZS5DREFUQV9TRUNUSU9OX05PREUgICAgICAgICAgPSA0O1xudmFyIEVOVElUWV9SRUZFUkVOQ0VfTk9ERSAgICAgICA9IE5vZGVUeXBlLkVOVElUWV9SRUZFUkVOQ0VfTk9ERSAgICAgICA9IDU7XG52YXIgRU5USVRZX05PREUgICAgICAgICAgICAgICAgID0gTm9kZVR5cGUuRU5USVRZX05PREUgICAgICAgICAgICAgICAgID0gNjtcbnZhciBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREUgPSBOb2RlVHlwZS5QUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREUgPSA3O1xudmFyIENPTU1FTlRfTk9ERSAgICAgICAgICAgICAgICA9IE5vZGVUeXBlLkNPTU1FTlRfTk9ERSAgICAgICAgICAgICAgICA9IDg7XG52YXIgRE9DVU1FTlRfTk9ERSAgICAgICAgICAgICAgID0gTm9kZVR5cGUuRE9DVU1FTlRfTk9ERSAgICAgICAgICAgICAgID0gOTtcbnZhciBET0NVTUVOVF9UWVBFX05PREUgICAgICAgICAgPSBOb2RlVHlwZS5ET0NVTUVOVF9UWVBFX05PREUgICAgICAgICAgPSAxMDtcbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFICAgICAgPSBOb2RlVHlwZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICAgICAgPSAxMTtcbnZhciBOT1RBVElPTl9OT0RFICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5OT1RBVElPTl9OT0RFICAgICAgICAgICAgICAgPSAxMjtcblxuLy8gRXhjZXB0aW9uQ29kZVxudmFyIEV4Y2VwdGlvbkNvZGUgPSB7fVxudmFyIEV4Y2VwdGlvbk1lc3NhZ2UgPSB7fTtcbnZhciBJTkRFWF9TSVpFX0VSUiAgICAgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLklOREVYX1NJWkVfRVJSICAgICAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVsxXT1cIkluZGV4IHNpemUgZXJyb3JcIiksMSk7XG52YXIgRE9NU1RSSU5HX1NJWkVfRVJSICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5ET01TVFJJTkdfU0laRV9FUlIgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMl09XCJET01TdHJpbmcgc2l6ZSBlcnJvclwiKSwyKTtcbnZhciBISUVSQVJDSFlfUkVRVUVTVF9FUlIgICAgICAgPSBFeGNlcHRpb25Db2RlLkhJRVJBUkNIWV9SRVFVRVNUX0VSUiAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVszXT1cIkhpZXJhcmNoeSByZXF1ZXN0IGVycm9yXCIpLDMpO1xudmFyIFdST05HX0RPQ1VNRU5UX0VSUiAgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuV1JPTkdfRE9DVU1FTlRfRVJSICAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzRdPVwiV3JvbmcgZG9jdW1lbnRcIiksNCk7XG52YXIgSU5WQUxJRF9DSEFSQUNURVJfRVJSICAgICAgID0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX0NIQVJBQ1RFUl9FUlIgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbNV09XCJJbnZhbGlkIGNoYXJhY3RlclwiKSw1KTtcbnZhciBOT19EQVRBX0FMTE9XRURfRVJSICAgICAgICAgPSBFeGNlcHRpb25Db2RlLk5PX0RBVEFfQUxMT1dFRF9FUlIgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs2XT1cIk5vIGRhdGEgYWxsb3dlZFwiKSw2KTtcbnZhciBOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIgPSBFeGNlcHRpb25Db2RlLk5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUiA9ICgoRXhjZXB0aW9uTWVzc2FnZVs3XT1cIk5vIG1vZGlmaWNhdGlvbiBhbGxvd2VkXCIpLDcpO1xudmFyIE5PVF9GT1VORF9FUlIgICAgICAgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuTk9UX0ZPVU5EX0VSUiAgICAgICAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzhdPVwiTm90IGZvdW5kXCIpLDgpO1xudmFyIE5PVF9TVVBQT1JURURfRVJSICAgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuTk9UX1NVUFBPUlRFRF9FUlIgICAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzldPVwiTm90IHN1cHBvcnRlZFwiKSw5KTtcbnZhciBJTlVTRV9BVFRSSUJVVEVfRVJSICAgICAgICAgPSBFeGNlcHRpb25Db2RlLklOVVNFX0FUVFJJQlVURV9FUlIgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVsxMF09XCJBdHRyaWJ1dGUgaW4gdXNlXCIpLDEwKTtcbi8vbGV2ZWwyXG52YXIgSU5WQUxJRF9TVEFURV9FUlIgICAgICAgIFx0PSBFeGNlcHRpb25Db2RlLklOVkFMSURfU1RBVEVfRVJSICAgICAgICBcdD0gKChFeGNlcHRpb25NZXNzYWdlWzExXT1cIkludmFsaWQgc3RhdGVcIiksMTEpO1xudmFyIFNZTlRBWF9FUlIgICAgICAgICAgICAgICBcdD0gRXhjZXB0aW9uQ29kZS5TWU5UQVhfRVJSICAgICAgICAgICAgICAgXHQ9ICgoRXhjZXB0aW9uTWVzc2FnZVsxMl09XCJTeW50YXggZXJyb3JcIiksMTIpO1xudmFyIElOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUiBcdD0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX01PRElGSUNBVElPTl9FUlIgXHQ9ICgoRXhjZXB0aW9uTWVzc2FnZVsxM109XCJJbnZhbGlkIG1vZGlmaWNhdGlvblwiKSwxMyk7XG52YXIgTkFNRVNQQUNFX0VSUiAgICAgICAgICAgIFx0PSBFeGNlcHRpb25Db2RlLk5BTUVTUEFDRV9FUlIgICAgICAgICAgIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTRdPVwiSW52YWxpZCBuYW1lc3BhY2VcIiksMTQpO1xudmFyIElOVkFMSURfQUNDRVNTX0VSUiAgICAgICBcdD0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX0FDQ0VTU19FUlIgICAgICBcdD0gKChFeGNlcHRpb25NZXNzYWdlWzE1XT1cIkludmFsaWQgYWNjZXNzXCIpLDE1KTtcblxuLyoqXG4gKiBET00gTGV2ZWwgMlxuICogT2JqZWN0IERPTUV4Y2VwdGlvblxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAwL1JFQy1ET00tTGV2ZWwtMi1Db3JlLTIwMDAxMTEzL2VjbWEtc2NyaXB0LWJpbmRpbmcuaHRtbFxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMtRE9NLUxldmVsLTEvZWNtYS1zY3JpcHQtbGFuZ3VhZ2UtYmluZGluZy5odG1sXG4gKi9cbmZ1bmN0aW9uIERPTUV4Y2VwdGlvbihjb2RlLCBtZXNzYWdlKSB7XG5cdGlmKG1lc3NhZ2UgaW5zdGFuY2VvZiBFcnJvcil7XG5cdFx0dmFyIGVycm9yID0gbWVzc2FnZTtcblx0fWVsc2V7XG5cdFx0ZXJyb3IgPSB0aGlzO1xuXHRcdEVycm9yLmNhbGwodGhpcywgRXhjZXB0aW9uTWVzc2FnZVtjb2RlXSk7XG5cdFx0dGhpcy5tZXNzYWdlID0gRXhjZXB0aW9uTWVzc2FnZVtjb2RlXTtcblx0XHRpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRE9NRXhjZXB0aW9uKTtcblx0fVxuXHRlcnJvci5jb2RlID0gY29kZTtcblx0aWYobWVzc2FnZSkgdGhpcy5tZXNzYWdlID0gdGhpcy5tZXNzYWdlICsgXCI6IFwiICsgbWVzc2FnZTtcblx0cmV0dXJuIGVycm9yO1xufTtcbkRPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5jb3B5KEV4Y2VwdGlvbkNvZGUsRE9NRXhjZXB0aW9uKVxuXG4vKipcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMC9SRUMtRE9NLUxldmVsLTItQ29yZS0yMDAwMTExMy9jb3JlLmh0bWwjSUQtNTM2Mjk3MTc3XG4gKiBUaGUgTm9kZUxpc3QgaW50ZXJmYWNlIHByb3ZpZGVzIHRoZSBhYnN0cmFjdGlvbiBvZiBhbiBvcmRlcmVkIGNvbGxlY3Rpb24gb2Ygbm9kZXMsIHdpdGhvdXQgZGVmaW5pbmcgb3IgY29uc3RyYWluaW5nIGhvdyB0aGlzIGNvbGxlY3Rpb24gaXMgaW1wbGVtZW50ZWQuIE5vZGVMaXN0IG9iamVjdHMgaW4gdGhlIERPTSBhcmUgbGl2ZS5cbiAqIFRoZSBpdGVtcyBpbiB0aGUgTm9kZUxpc3QgYXJlIGFjY2Vzc2libGUgdmlhIGFuIGludGVncmFsIGluZGV4LCBzdGFydGluZyBmcm9tIDAuXG4gKi9cbmZ1bmN0aW9uIE5vZGVMaXN0KCkge1xufTtcbk5vZGVMaXN0LnByb3RvdHlwZSA9IHtcblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGxpc3QuIFRoZSByYW5nZSBvZiB2YWxpZCBjaGlsZCBub2RlIGluZGljZXMgaXMgMCB0byBsZW5ndGgtMSBpbmNsdXNpdmUuXG5cdCAqIEBzdGFuZGFyZCBsZXZlbDFcblx0ICovXG5cdGxlbmd0aDowLFxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgaW5kZXh0aCBpdGVtIGluIHRoZSBjb2xsZWN0aW9uLiBJZiBpbmRleCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgbGlzdCwgdGhpcyByZXR1cm5zIG51bGwuXG5cdCAqIEBzdGFuZGFyZCBsZXZlbDFcblx0ICogQHBhcmFtIGluZGV4ICB1bnNpZ25lZCBsb25nXG5cdCAqICAgSW5kZXggaW50byB0aGUgY29sbGVjdGlvbi5cblx0ICogQHJldHVybiBOb2RlXG5cdCAqIFx0VGhlIG5vZGUgYXQgdGhlIGluZGV4dGggcG9zaXRpb24gaW4gdGhlIE5vZGVMaXN0LCBvciBudWxsIGlmIHRoYXQgaXMgbm90IGEgdmFsaWQgaW5kZXguXG5cdCAqL1xuXHRpdGVtOiBmdW5jdGlvbihpbmRleCkge1xuXHRcdHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5sZW5ndGggPyB0aGlzW2luZGV4XSA6IG51bGw7XG5cdH0sXG5cdHRvU3RyaW5nOmZ1bmN0aW9uKGlzSFRNTCxub2RlRmlsdGVyKXtcblx0XHRmb3IodmFyIGJ1ZiA9IFtdLCBpID0gMDtpPHRoaXMubGVuZ3RoO2krKyl7XG5cdFx0XHRzZXJpYWxpemVUb1N0cmluZyh0aGlzW2ldLGJ1Zixpc0hUTUwsbm9kZUZpbHRlcik7XG5cdFx0fVxuXHRcdHJldHVybiBidWYuam9pbignJyk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uIChOb2RlKTpib29sZWFufSBwcmVkaWNhdGVcblx0ICogQHJldHVybnMge05vZGVbXX1cblx0ICovXG5cdGZpbHRlcjogZnVuY3Rpb24gKHByZWRpY2F0ZSkge1xuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwodGhpcywgcHJlZGljYXRlKTtcblx0fSxcblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7Tm9kZX0gaXRlbVxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0aW5kZXhPZjogZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLCBpdGVtKTtcblx0fSxcbn07XG5cbmZ1bmN0aW9uIExpdmVOb2RlTGlzdChub2RlLHJlZnJlc2gpe1xuXHR0aGlzLl9ub2RlID0gbm9kZTtcblx0dGhpcy5fcmVmcmVzaCA9IHJlZnJlc2hcblx0X3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xufVxuZnVuY3Rpb24gX3VwZGF0ZUxpdmVMaXN0KGxpc3Qpe1xuXHR2YXIgaW5jID0gbGlzdC5fbm9kZS5faW5jIHx8IGxpc3QuX25vZGUub3duZXJEb2N1bWVudC5faW5jO1xuXHRpZiAobGlzdC5faW5jICE9PSBpbmMpIHtcblx0XHR2YXIgbHMgPSBsaXN0Ll9yZWZyZXNoKGxpc3QuX25vZGUpO1xuXHRcdF9fc2V0X18obGlzdCwnbGVuZ3RoJyxscy5sZW5ndGgpO1xuXHRcdGlmICghbGlzdC4kJGxlbmd0aCB8fCBscy5sZW5ndGggPCBsaXN0LiQkbGVuZ3RoKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gbHMubGVuZ3RoOyBpIGluIGxpc3Q7IGkrKykge1xuXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxpc3QsIGkpKSB7XG5cdFx0XHRcdFx0ZGVsZXRlIGxpc3RbaV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29weShscyxsaXN0KTtcblx0XHRsaXN0Ll9pbmMgPSBpbmM7XG5cdH1cbn1cbkxpdmVOb2RlTGlzdC5wcm90b3R5cGUuaXRlbSA9IGZ1bmN0aW9uKGkpe1xuXHRfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG5cdHJldHVybiB0aGlzW2ldIHx8IG51bGw7XG59XG5cbl9leHRlbmRzKExpdmVOb2RlTGlzdCxOb2RlTGlzdCk7XG5cbi8qKlxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhlIE5hbWVkTm9kZU1hcCBpbnRlcmZhY2UgYXJlIHVzZWRcbiAqIHRvIHJlcHJlc2VudCBjb2xsZWN0aW9ucyBvZiBub2RlcyB0aGF0IGNhbiBiZSBhY2Nlc3NlZCBieSBuYW1lLlxuICogTm90ZSB0aGF0IE5hbWVkTm9kZU1hcCBkb2VzIG5vdCBpbmhlcml0IGZyb20gTm9kZUxpc3Q7XG4gKiBOYW1lZE5vZGVNYXBzIGFyZSBub3QgbWFpbnRhaW5lZCBpbiBhbnkgcGFydGljdWxhciBvcmRlci5cbiAqIE9iamVjdHMgY29udGFpbmVkIGluIGFuIG9iamVjdCBpbXBsZW1lbnRpbmcgTmFtZWROb2RlTWFwIG1heSBhbHNvIGJlIGFjY2Vzc2VkIGJ5IGFuIG9yZGluYWwgaW5kZXgsXG4gKiBidXQgdGhpcyBpcyBzaW1wbHkgdG8gYWxsb3cgY29udmVuaWVudCBlbnVtZXJhdGlvbiBvZiB0aGUgY29udGVudHMgb2YgYSBOYW1lZE5vZGVNYXAsXG4gKiBhbmQgZG9lcyBub3QgaW1wbHkgdGhhdCB0aGUgRE9NIHNwZWNpZmllcyBhbiBvcmRlciB0byB0aGVzZSBOb2Rlcy5cbiAqIE5hbWVkTm9kZU1hcCBvYmplY3RzIGluIHRoZSBET00gYXJlIGxpdmUuXG4gKiB1c2VkIGZvciBhdHRyaWJ1dGVzIG9yIERvY3VtZW50VHlwZSBlbnRpdGllc1xuICovXG5mdW5jdGlvbiBOYW1lZE5vZGVNYXAoKSB7XG59O1xuXG5mdW5jdGlvbiBfZmluZE5vZGVJbmRleChsaXN0LG5vZGUpe1xuXHR2YXIgaSA9IGxpc3QubGVuZ3RoO1xuXHR3aGlsZShpLS0pe1xuXHRcdGlmKGxpc3RbaV0gPT09IG5vZGUpe3JldHVybiBpfVxuXHR9XG59XG5cbmZ1bmN0aW9uIF9hZGROYW1lZE5vZGUoZWwsbGlzdCxuZXdBdHRyLG9sZEF0dHIpe1xuXHRpZihvbGRBdHRyKXtcblx0XHRsaXN0W19maW5kTm9kZUluZGV4KGxpc3Qsb2xkQXR0cildID0gbmV3QXR0cjtcblx0fWVsc2V7XG5cdFx0bGlzdFtsaXN0Lmxlbmd0aCsrXSA9IG5ld0F0dHI7XG5cdH1cblx0aWYoZWwpe1xuXHRcdG5ld0F0dHIub3duZXJFbGVtZW50ID0gZWw7XG5cdFx0dmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG5cdFx0aWYoZG9jKXtcblx0XHRcdG9sZEF0dHIgJiYgX29uUmVtb3ZlQXR0cmlidXRlKGRvYyxlbCxvbGRBdHRyKTtcblx0XHRcdF9vbkFkZEF0dHJpYnV0ZShkb2MsZWwsbmV3QXR0cik7XG5cdFx0fVxuXHR9XG59XG5mdW5jdGlvbiBfcmVtb3ZlTmFtZWROb2RlKGVsLGxpc3QsYXR0cil7XG5cdC8vY29uc29sZS5sb2coJ3JlbW92ZSBhdHRyOicrYXR0cilcblx0dmFyIGkgPSBfZmluZE5vZGVJbmRleChsaXN0LGF0dHIpO1xuXHRpZihpPj0wKXtcblx0XHR2YXIgbGFzdEluZGV4ID0gbGlzdC5sZW5ndGgtMVxuXHRcdHdoaWxlKGk8bGFzdEluZGV4KXtcblx0XHRcdGxpc3RbaV0gPSBsaXN0WysraV1cblx0XHR9XG5cdFx0bGlzdC5sZW5ndGggPSBsYXN0SW5kZXg7XG5cdFx0aWYoZWwpe1xuXHRcdFx0dmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG5cdFx0XHRpZihkb2Mpe1xuXHRcdFx0XHRfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLGVsLGF0dHIpO1xuXHRcdFx0XHRhdHRyLm93bmVyRWxlbWVudCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ZWxzZXtcblx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKE5PVF9GT1VORF9FUlIsbmV3IEVycm9yKGVsLnRhZ05hbWUrJ0AnK2F0dHIpKVxuXHR9XG59XG5OYW1lZE5vZGVNYXAucHJvdG90eXBlID0ge1xuXHRsZW5ndGg6MCxcblx0aXRlbTpOb2RlTGlzdC5wcm90b3R5cGUuaXRlbSxcblx0Z2V0TmFtZWRJdGVtOiBmdW5jdGlvbihrZXkpIHtcbi8vXHRcdGlmKGtleS5pbmRleE9mKCc6Jyk+MCB8fCBrZXkgPT0gJ3htbG5zJyl7XG4vL1x0XHRcdHJldHVybiBudWxsO1xuLy9cdFx0fVxuXHRcdC8vY29uc29sZS5sb2coKVxuXHRcdHZhciBpID0gdGhpcy5sZW5ndGg7XG5cdFx0d2hpbGUoaS0tKXtcblx0XHRcdHZhciBhdHRyID0gdGhpc1tpXTtcblx0XHRcdC8vY29uc29sZS5sb2coYXR0ci5ub2RlTmFtZSxrZXkpXG5cdFx0XHRpZihhdHRyLm5vZGVOYW1lID09IGtleSl7XG5cdFx0XHRcdHJldHVybiBhdHRyO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0c2V0TmFtZWRJdGVtOiBmdW5jdGlvbihhdHRyKSB7XG5cdFx0dmFyIGVsID0gYXR0ci5vd25lckVsZW1lbnQ7XG5cdFx0aWYoZWwgJiYgZWwhPXRoaXMuX293bmVyRWxlbWVudCl7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKElOVVNFX0FUVFJJQlVURV9FUlIpO1xuXHRcdH1cblx0XHR2YXIgb2xkQXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtKGF0dHIubm9kZU5hbWUpO1xuXHRcdF9hZGROYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LHRoaXMsYXR0cixvbGRBdHRyKTtcblx0XHRyZXR1cm4gb2xkQXR0cjtcblx0fSxcblx0LyogcmV0dXJucyBOb2RlICovXG5cdHNldE5hbWVkSXRlbU5TOiBmdW5jdGlvbihhdHRyKSB7Ly8gcmFpc2VzOiBXUk9OR19ET0NVTUVOVF9FUlIsTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSLElOVVNFX0FUVFJJQlVURV9FUlJcblx0XHR2YXIgZWwgPSBhdHRyLm93bmVyRWxlbWVudCwgb2xkQXR0cjtcblx0XHRpZihlbCAmJiBlbCE9dGhpcy5fb3duZXJFbGVtZW50KXtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSU5VU0VfQVRUUklCVVRFX0VSUik7XG5cdFx0fVxuXHRcdG9sZEF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbU5TKGF0dHIubmFtZXNwYWNlVVJJLGF0dHIubG9jYWxOYW1lKTtcblx0XHRfYWRkTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCx0aGlzLGF0dHIsb2xkQXR0cik7XG5cdFx0cmV0dXJuIG9sZEF0dHI7XG5cdH0sXG5cblx0LyogcmV0dXJucyBOb2RlICovXG5cdHJlbW92ZU5hbWVkSXRlbTogZnVuY3Rpb24oa2V5KSB7XG5cdFx0dmFyIGF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbShrZXkpO1xuXHRcdF9yZW1vdmVOYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LHRoaXMsYXR0cik7XG5cdFx0cmV0dXJuIGF0dHI7XG5cblxuXHR9LC8vIHJhaXNlczogTk9UX0ZPVU5EX0VSUixOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlJcblxuXHQvL2ZvciBsZXZlbDJcblx0cmVtb3ZlTmFtZWRJdGVtTlM6ZnVuY3Rpb24obmFtZXNwYWNlVVJJLGxvY2FsTmFtZSl7XG5cdFx0dmFyIGF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbU5TKG5hbWVzcGFjZVVSSSxsb2NhbE5hbWUpO1xuXHRcdF9yZW1vdmVOYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LHRoaXMsYXR0cik7XG5cdFx0cmV0dXJuIGF0dHI7XG5cdH0sXG5cdGdldE5hbWVkSXRlbU5TOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuXHRcdHZhciBpID0gdGhpcy5sZW5ndGg7XG5cdFx0d2hpbGUoaS0tKXtcblx0XHRcdHZhciBub2RlID0gdGhpc1tpXTtcblx0XHRcdGlmKG5vZGUubG9jYWxOYW1lID09IGxvY2FsTmFtZSAmJiBub2RlLm5hbWVzcGFjZVVSSSA9PSBuYW1lc3BhY2VVUkkpe1xuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG5cbi8qKlxuICogVGhlIERPTUltcGxlbWVudGF0aW9uIGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCBwcm92aWRpbmcgbWV0aG9kc1xuICogd2hpY2ggYXJlIG5vdCBkZXBlbmRlbnQgb24gYW55IHBhcnRpY3VsYXIgZG9jdW1lbnQuXG4gKiBTdWNoIGFuIG9iamVjdCBpcyByZXR1cm5lZCBieSB0aGUgYERvY3VtZW50LmltcGxlbWVudGF0aW9uYCBwcm9wZXJ0eS5cbiAqXG4gKiBfX1RoZSBpbmRpdmlkdWFsIG1ldGhvZHMgZGVzY3JpYmUgdGhlIGRpZmZlcmVuY2VzIGNvbXBhcmVkIHRvIHRoZSBzcGVjcy5fX1xuICpcbiAqIEBjb25zdHJ1Y3RvclxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUltcGxlbWVudGF0aW9uIE1ETlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvUkVDLURPTS1MZXZlbC0xL2xldmVsLW9uZS1jb3JlLmh0bWwjSUQtMTAyMTYxNDkwIERPTSBMZXZlbCAxIENvcmUgKEluaXRpYWwpXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMi1Db3JlL2NvcmUuaHRtbCNJRC0xMDIxNjE0OTAgRE9NIExldmVsIDIgQ29yZVxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtQ29yZS9jb3JlLmh0bWwjSUQtMTAyMTYxNDkwIERPTSBMZXZlbCAzIENvcmVcbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb21pbXBsZW1lbnRhdGlvbiBET00gTGl2aW5nIFN0YW5kYXJkXG4gKi9cbmZ1bmN0aW9uIERPTUltcGxlbWVudGF0aW9uKCkge1xufVxuXG5ET01JbXBsZW1lbnRhdGlvbi5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBUaGUgRE9NSW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgpIG1ldGhvZCByZXR1cm5zIGEgQm9vbGVhbiBmbGFnIGluZGljYXRpbmcgaWYgYSBnaXZlbiBmZWF0dXJlIGlzIHN1cHBvcnRlZC5cblx0ICogVGhlIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbnMgZmFpcmx5IGRpdmVyZ2VkIGluIHdoYXQga2luZCBvZiBmZWF0dXJlcyB3ZXJlIHJlcG9ydGVkLlxuXHQgKiBUaGUgbGF0ZXN0IHZlcnNpb24gb2YgdGhlIHNwZWMgc2V0dGxlZCB0byBmb3JjZSB0aGlzIG1ldGhvZCB0byBhbHdheXMgcmV0dXJuIHRydWUsIHdoZXJlIHRoZSBmdW5jdGlvbmFsaXR5IHdhcyBhY2N1cmF0ZSBhbmQgaW4gdXNlLlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZCBJdCBpcyBkZXByZWNhdGVkIGFuZCBtb2Rlcm4gYnJvd3NlcnMgcmV0dXJuIHRydWUgaW4gYWxsIGNhc2VzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmVhdHVyZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3ZlcnNpb25dXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBhbHdheXMgdHJ1ZVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01JbXBsZW1lbnRhdGlvbi9oYXNGZWF0dXJlIE1ETlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9SRUMtRE9NLUxldmVsLTEvbGV2ZWwtb25lLWNvcmUuaHRtbCNJRC01Q0VEOTRENyBET00gTGV2ZWwgMSBDb3JlXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24taGFzZmVhdHVyZSBET00gTGl2aW5nIFN0YW5kYXJkXG5cdCAqL1xuXHRoYXNGZWF0dXJlOiBmdW5jdGlvbihmZWF0dXJlLCB2ZXJzaW9uKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gWE1MIERvY3VtZW50IG9iamVjdCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgd2l0aCBpdHMgZG9jdW1lbnQgZWxlbWVudC5cblx0ICpcblx0ICogX19JdCBiZWhhdmVzIHNsaWdodGx5IGRpZmZlcmVudCBmcm9tIHRoZSBkZXNjcmlwdGlvbiBpbiB0aGUgbGl2aW5nIHN0YW5kYXJkX186XG5cdCAqIC0gVGhlcmUgaXMgbm8gaW50ZXJmYWNlL2NsYXNzIGBYTUxEb2N1bWVudGAsIGl0IHJldHVybnMgYSBgRG9jdW1lbnRgIGluc3RhbmNlLlxuXHQgKiAtIGBjb250ZW50VHlwZWAsIGBlbmNvZGluZ2AsIGBtb2RlYCwgYG9yaWdpbmAsIGB1cmxgIGZpZWxkcyBhcmUgY3VycmVudGx5IG5vdCBkZWNsYXJlZC5cblx0ICogLSB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCB2YWxpZGF0aW5nIG5hbWVzIG9yIHF1YWxpZmllZCBuYW1lc1xuXHQgKiAgICh3aGVuIHBhcnNpbmcgWE1MIHN0cmluZ3MsIHRoZSBTQVggcGFyc2VyIHRha2VzIGNhcmUgb2YgdGhhdClcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gbmFtZXNwYWNlVVJJXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBxdWFsaWZpZWROYW1lXG5cdCAqIEBwYXJhbSB7RG9jdW1lbnRUeXBlPW51bGx9IGRvY3R5cGVcblx0ICogQHJldHVybnMge0RvY3VtZW50fVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01JbXBsZW1lbnRhdGlvbi9jcmVhdGVEb2N1bWVudCBNRE5cblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItQ29yZS9jb3JlLmh0bWwjTGV2ZWwtMi1Db3JlLURPTS1jcmVhdGVEb2N1bWVudCBET00gTGV2ZWwgMiBDb3JlIChpbml0aWFsKVxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWNyZWF0ZWRvY3VtZW50ICBET00gTGV2ZWwgMiBDb3JlXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyN2YWxpZGF0ZS1hbmQtZXh0cmFjdCBET006IFZhbGlkYXRlIGFuZCBleHRyYWN0XG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtTmFtZVN0YXJ0Q2hhciBYTUwgU3BlYzogTmFtZXNcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLW5hbWVzLyNucy1xdWFsbmFtZXMgWE1MIE5hbWVzcGFjZXM6IFF1YWxpZmllZCBuYW1lc1xuXHQgKi9cblx0Y3JlYXRlRG9jdW1lbnQ6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgIHF1YWxpZmllZE5hbWUsIGRvY3R5cGUpe1xuXHRcdHZhciBkb2MgPSBuZXcgRG9jdW1lbnQoKTtcblx0XHRkb2MuaW1wbGVtZW50YXRpb24gPSB0aGlzO1xuXHRcdGRvYy5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG5cdFx0ZG9jLmRvY3R5cGUgPSBkb2N0eXBlIHx8IG51bGw7XG5cdFx0aWYgKGRvY3R5cGUpe1xuXHRcdFx0ZG9jLmFwcGVuZENoaWxkKGRvY3R5cGUpO1xuXHRcdH1cblx0XHRpZiAocXVhbGlmaWVkTmFtZSl7XG5cdFx0XHR2YXIgcm9vdCA9IGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKTtcblx0XHRcdGRvYy5hcHBlbmRDaGlsZChyb290KTtcblx0XHR9XG5cdFx0cmV0dXJuIGRvYztcblx0fSxcblx0LyoqXG5cdCAqIFJldHVybnMgYSBkb2N0eXBlLCB3aXRoIHRoZSBnaXZlbiBgcXVhbGlmaWVkTmFtZWAsIGBwdWJsaWNJZGAsIGFuZCBgc3lzdGVtSWRgLlxuXHQgKlxuXHQgKiBfX1RoaXMgYmVoYXZpb3IgaXMgc2xpZ2h0bHkgZGlmZmVyZW50IGZyb20gdGhlIGluIHRoZSBzcGVjc19fOlxuXHQgKiAtIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IHZhbGlkYXRpbmcgbmFtZXMgb3IgcXVhbGlmaWVkIG5hbWVzXG5cdCAqICAgKHdoZW4gcGFyc2luZyBYTUwgc3RyaW5ncywgdGhlIFNBWCBwYXJzZXIgdGFrZXMgY2FyZSBvZiB0aGF0KVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcXVhbGlmaWVkTmFtZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3B1YmxpY0lkXVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3N5c3RlbUlkXVxuXHQgKiBAcmV0dXJucyB7RG9jdW1lbnRUeXBlfSB3aGljaCBjYW4gZWl0aGVyIGJlIHVzZWQgd2l0aCBgRE9NSW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnRgIHVwb24gZG9jdW1lbnQgY3JlYXRpb25cblx0ICogXHRcdFx0XHQgIG9yIGNhbiBiZSBwdXQgaW50byB0aGUgZG9jdW1lbnQgdmlhIG1ldGhvZHMgbGlrZSBgTm9kZS5pbnNlcnRCZWZvcmUoKWAgb3IgYE5vZGUucmVwbGFjZUNoaWxkKClgXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUltcGxlbWVudGF0aW9uL2NyZWF0ZURvY3VtZW50VHlwZSBNRE5cblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItQ29yZS9jb3JlLmh0bWwjTGV2ZWwtMi1Db3JlLURPTS1jcmVhdGVEb2NUeXBlIERPTSBMZXZlbCAyIENvcmVcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1jcmVhdGVkb2N1bWVudHR5cGUgRE9NIExpdmluZyBTdGFuZGFyZFxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jdmFsaWRhdGUtYW5kLWV4dHJhY3QgRE9NOiBWYWxpZGF0ZSBhbmQgZXh0cmFjdFxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI05ULU5hbWVTdGFydENoYXIgWE1MIFNwZWM6IE5hbWVzXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC1uYW1lcy8jbnMtcXVhbG5hbWVzIFhNTCBOYW1lc3BhY2VzOiBRdWFsaWZpZWQgbmFtZXNcblx0ICovXG5cdGNyZWF0ZURvY3VtZW50VHlwZTogZnVuY3Rpb24ocXVhbGlmaWVkTmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBEb2N1bWVudFR5cGUoKTtcblx0XHRub2RlLm5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUucHVibGljSWQgPSBwdWJsaWNJZCB8fCAnJztcblx0XHRub2RlLnN5c3RlbUlkID0gc3lzdGVtSWQgfHwgJyc7XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxufTtcblxuXG4vKipcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMC9SRUMtRE9NLUxldmVsLTItQ29yZS0yMDAwMTExMy9jb3JlLmh0bWwjSUQtMTk1MDY0MTI0N1xuICovXG5cbmZ1bmN0aW9uIE5vZGUoKSB7XG59O1xuXG5Ob2RlLnByb3RvdHlwZSA9IHtcblx0Zmlyc3RDaGlsZCA6IG51bGwsXG5cdGxhc3RDaGlsZCA6IG51bGwsXG5cdHByZXZpb3VzU2libGluZyA6IG51bGwsXG5cdG5leHRTaWJsaW5nIDogbnVsbCxcblx0YXR0cmlidXRlcyA6IG51bGwsXG5cdHBhcmVudE5vZGUgOiBudWxsLFxuXHRjaGlsZE5vZGVzIDogbnVsbCxcblx0b3duZXJEb2N1bWVudCA6IG51bGwsXG5cdG5vZGVWYWx1ZSA6IG51bGwsXG5cdG5hbWVzcGFjZVVSSSA6IG51bGwsXG5cdHByZWZpeCA6IG51bGwsXG5cdGxvY2FsTmFtZSA6IG51bGwsXG5cdC8vIE1vZGlmaWVkIGluIERPTSBMZXZlbCAyOlxuXHRpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obmV3Q2hpbGQsIHJlZkNoaWxkKXsvL3JhaXNlc1xuXHRcdHJldHVybiBfaW5zZXJ0QmVmb3JlKHRoaXMsbmV3Q2hpbGQscmVmQ2hpbGQpO1xuXHR9LFxuXHRyZXBsYWNlQ2hpbGQ6ZnVuY3Rpb24obmV3Q2hpbGQsIG9sZENoaWxkKXsvL3JhaXNlc1xuXHRcdF9pbnNlcnRCZWZvcmUodGhpcywgbmV3Q2hpbGQsb2xkQ2hpbGQsIGFzc2VydFByZVJlcGxhY2VtZW50VmFsaWRpdHlJbkRvY3VtZW50KTtcblx0XHRpZihvbGRDaGlsZCl7XG5cdFx0XHR0aGlzLnJlbW92ZUNoaWxkKG9sZENoaWxkKTtcblx0XHR9XG5cdH0sXG5cdHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG9sZENoaWxkKXtcblx0XHRyZXR1cm4gX3JlbW92ZUNoaWxkKHRoaXMsb2xkQ2hpbGQpO1xuXHR9LFxuXHRhcHBlbmRDaGlsZDpmdW5jdGlvbihuZXdDaGlsZCl7XG5cdFx0cmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLG51bGwpO1xuXHR9LFxuXHRoYXNDaGlsZE5vZGVzOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMuZmlyc3RDaGlsZCAhPSBudWxsO1xuXHR9LFxuXHRjbG9uZU5vZGU6ZnVuY3Rpb24oZGVlcCl7XG5cdFx0cmV0dXJuIGNsb25lTm9kZSh0aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsdGhpcyxkZWVwKTtcblx0fSxcblx0Ly8gTW9kaWZpZWQgaW4gRE9NIExldmVsIDI6XG5cdG5vcm1hbGl6ZTpmdW5jdGlvbigpe1xuXHRcdHZhciBjaGlsZCA9IHRoaXMuZmlyc3RDaGlsZDtcblx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHR2YXIgbmV4dCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdFx0aWYobmV4dCAmJiBuZXh0Lm5vZGVUeXBlID09IFRFWFRfTk9ERSAmJiBjaGlsZC5ub2RlVHlwZSA9PSBURVhUX05PREUpe1xuXHRcdFx0XHR0aGlzLnJlbW92ZUNoaWxkKG5leHQpO1xuXHRcdFx0XHRjaGlsZC5hcHBlbmREYXRhKG5leHQuZGF0YSk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Y2hpbGQubm9ybWFsaXplKCk7XG5cdFx0XHRcdGNoaWxkID0gbmV4dDtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG4gIFx0Ly8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMjpcblx0aXNTdXBwb3J0ZWQ6ZnVuY3Rpb24oZmVhdHVyZSwgdmVyc2lvbil7XG5cdFx0cmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKGZlYXR1cmUsdmVyc2lvbik7XG5cdH0sXG4gICAgLy8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMjpcbiAgICBoYXNBdHRyaWJ1dGVzOmZ1bmN0aW9uKCl7XG4gICAgXHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aD4wO1xuICAgIH0sXG5cdC8qKlxuXHQgKiBMb29rIHVwIHRoZSBwcmVmaXggYXNzb2NpYXRlZCB0byB0aGUgZ2l2ZW4gbmFtZXNwYWNlIFVSSSwgc3RhcnRpbmcgZnJvbSB0aGlzIG5vZGUuXG5cdCAqICoqVGhlIGRlZmF1bHQgbmFtZXNwYWNlIGRlY2xhcmF0aW9ucyBhcmUgaWdub3JlZCBieSB0aGlzIG1ldGhvZC4qKlxuXHQgKiBTZWUgTmFtZXNwYWNlIFByZWZpeCBMb29rdXAgZm9yIGRldGFpbHMgb24gdGhlIGFsZ29yaXRobSB1c2VkIGJ5IHRoaXMgbWV0aG9kLlxuXHQgKlxuXHQgKiBfTm90ZTogVGhlIGltcGxlbWVudGF0aW9uIHNlZW1zIHRvIGJlIGluY29tcGxldGUgd2hlbiBjb21wYXJlZCB0byB0aGUgYWxnb3JpdGhtIGRlc2NyaWJlZCBpbiB0aGUgc3BlY3MuX1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IG5hbWVzcGFjZVVSSVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH1cblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtQ29yZS9jb3JlLmh0bWwjTm9kZTMtbG9va3VwTmFtZXNwYWNlUHJlZml4XG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUNvcmUvbmFtZXNwYWNlcy1hbGdvcml0aG1zLmh0bWwjbG9va3VwTmFtZXNwYWNlUHJlZml4QWxnb1xuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLW5vZGUtbG9va3VwcHJlZml4XG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3htbGRvbS94bWxkb20vaXNzdWVzLzMyMlxuXHQgKi9cbiAgICBsb29rdXBQcmVmaXg6ZnVuY3Rpb24obmFtZXNwYWNlVVJJKXtcbiAgICBcdHZhciBlbCA9IHRoaXM7XG4gICAgXHR3aGlsZShlbCl7XG4gICAgXHRcdHZhciBtYXAgPSBlbC5fbnNNYXA7XG4gICAgXHRcdC8vY29uc29sZS5kaXIobWFwKVxuICAgIFx0XHRpZihtYXApe1xuICAgIFx0XHRcdGZvcih2YXIgbiBpbiBtYXApe1xuXHRcdFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtYXAsIG4pICYmIG1hcFtuXSA9PT0gbmFtZXNwYWNlVVJJKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBuO1xuXHRcdFx0XHRcdFx0fVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0XHRlbCA9IGVsLm5vZGVUeXBlID09IEFUVFJJQlVURV9OT0RFP2VsLm93bmVyRG9jdW1lbnQgOiBlbC5wYXJlbnROb2RlO1xuICAgIFx0fVxuICAgIFx0cmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICAvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAzOlxuICAgIGxvb2t1cE5hbWVzcGFjZVVSSTpmdW5jdGlvbihwcmVmaXgpe1xuICAgIFx0dmFyIGVsID0gdGhpcztcbiAgICBcdHdoaWxlKGVsKXtcbiAgICBcdFx0dmFyIG1hcCA9IGVsLl9uc01hcDtcbiAgICBcdFx0Ly9jb25zb2xlLmRpcihtYXApXG4gICAgXHRcdGlmKG1hcCl7XG4gICAgXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1hcCwgcHJlZml4KSl7XG4gICAgXHRcdFx0XHRyZXR1cm4gbWFwW3ByZWZpeF0gO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0XHRlbCA9IGVsLm5vZGVUeXBlID09IEFUVFJJQlVURV9OT0RFP2VsLm93bmVyRG9jdW1lbnQgOiBlbC5wYXJlbnROb2RlO1xuICAgIFx0fVxuICAgIFx0cmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICAvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAzOlxuICAgIGlzRGVmYXVsdE5hbWVzcGFjZTpmdW5jdGlvbihuYW1lc3BhY2VVUkkpe1xuICAgIFx0dmFyIHByZWZpeCA9IHRoaXMubG9va3VwUHJlZml4KG5hbWVzcGFjZVVSSSk7XG4gICAgXHRyZXR1cm4gcHJlZml4ID09IG51bGw7XG4gICAgfVxufTtcblxuXG5mdW5jdGlvbiBfeG1sRW5jb2RlcihjKXtcblx0cmV0dXJuIGMgPT0gJzwnICYmICcmbHQ7JyB8fFxuICAgICAgICAgYyA9PSAnPicgJiYgJyZndDsnIHx8XG4gICAgICAgICBjID09ICcmJyAmJiAnJmFtcDsnIHx8XG4gICAgICAgICBjID09ICdcIicgJiYgJyZxdW90OycgfHxcbiAgICAgICAgICcmIycrYy5jaGFyQ29kZUF0KCkrJzsnXG59XG5cblxuY29weShOb2RlVHlwZSxOb2RlKTtcbmNvcHkoTm9kZVR5cGUsTm9kZS5wcm90b3R5cGUpO1xuXG4vKipcbiAqIEBwYXJhbSBjYWxsYmFjayByZXR1cm4gdHJ1ZSBmb3IgY29udGludWUsZmFsc2UgZm9yIGJyZWFrXG4gKiBAcmV0dXJuIGJvb2xlYW4gdHJ1ZTogYnJlYWsgdmlzaXQ7XG4gKi9cbmZ1bmN0aW9uIF92aXNpdE5vZGUobm9kZSxjYWxsYmFjayl7XG5cdGlmKGNhbGxiYWNrKG5vZGUpKXtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZihub2RlID0gbm9kZS5maXJzdENoaWxkKXtcblx0XHRkb3tcblx0XHRcdGlmKF92aXNpdE5vZGUobm9kZSxjYWxsYmFjaykpe3JldHVybiB0cnVlfVxuICAgICAgICB9d2hpbGUobm9kZT1ub2RlLm5leHRTaWJsaW5nKVxuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIERvY3VtZW50KCl7XG5cdHRoaXMub3duZXJEb2N1bWVudCA9IHRoaXM7XG59XG5cbmZ1bmN0aW9uIF9vbkFkZEF0dHJpYnV0ZShkb2MsZWwsbmV3QXR0cil7XG5cdGRvYyAmJiBkb2MuX2luYysrO1xuXHR2YXIgbnMgPSBuZXdBdHRyLm5hbWVzcGFjZVVSSSA7XG5cdGlmKG5zID09PSBOQU1FU1BBQ0UuWE1MTlMpe1xuXHRcdC8vdXBkYXRlIG5hbWVzcGFjZVxuXHRcdGVsLl9uc01hcFtuZXdBdHRyLnByZWZpeD9uZXdBdHRyLmxvY2FsTmFtZTonJ10gPSBuZXdBdHRyLnZhbHVlXG5cdH1cbn1cblxuZnVuY3Rpb24gX29uUmVtb3ZlQXR0cmlidXRlKGRvYyxlbCxuZXdBdHRyLHJlbW92ZSl7XG5cdGRvYyAmJiBkb2MuX2luYysrO1xuXHR2YXIgbnMgPSBuZXdBdHRyLm5hbWVzcGFjZVVSSSA7XG5cdGlmKG5zID09PSBOQU1FU1BBQ0UuWE1MTlMpe1xuXHRcdC8vdXBkYXRlIG5hbWVzcGFjZVxuXHRcdGRlbGV0ZSBlbC5fbnNNYXBbbmV3QXR0ci5wcmVmaXg/bmV3QXR0ci5sb2NhbE5hbWU6JyddXG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGVzIGBlbC5jaGlsZE5vZGVzYCwgdXBkYXRpbmcgdGhlIGluZGV4ZWQgaXRlbXMgYW5kIGl0J3MgYGxlbmd0aGAuXG4gKiBQYXNzaW5nIGBuZXdDaGlsZGAgbWVhbnMgaXQgd2lsbCBiZSBhcHBlbmRlZC5cbiAqIE90aGVyd2lzZSBpdCdzIGFzc3VtZWQgdGhhdCBhbiBpdGVtIGhhcyBiZWVuIHJlbW92ZWQsXG4gKiBhbmQgYGVsLmZpcnN0Tm9kZWAgYW5kIGl0J3MgYC5uZXh0U2libGluZ2AgYXJlIHVzZWRcbiAqIHRvIHdhbGsgdGhlIGN1cnJlbnQgbGlzdCBvZiBjaGlsZCBub2Rlcy5cbiAqXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBkb2NcbiAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAqIEBwYXJhbSB7Tm9kZX0gW25ld0NoaWxkXVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX29uVXBkYXRlQ2hpbGQgKGRvYywgZWwsIG5ld0NoaWxkKSB7XG5cdGlmKGRvYyAmJiBkb2MuX2luYyl7XG5cdFx0ZG9jLl9pbmMrKztcblx0XHQvL3VwZGF0ZSBjaGlsZE5vZGVzXG5cdFx0dmFyIGNzID0gZWwuY2hpbGROb2Rlcztcblx0XHRpZiAobmV3Q2hpbGQpIHtcblx0XHRcdGNzW2NzLmxlbmd0aCsrXSA9IG5ld0NoaWxkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgY2hpbGQgPSBlbC5maXJzdENoaWxkO1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0d2hpbGUgKGNoaWxkKSB7XG5cdFx0XHRcdGNzW2krK10gPSBjaGlsZDtcblx0XHRcdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHRcdH1cblx0XHRcdGNzLmxlbmd0aCA9IGk7XG5cdFx0XHRkZWxldGUgY3NbY3MubGVuZ3RoXTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBjb25uZWN0aW9ucyBiZXR3ZWVuIGBwYXJlbnROb2RlYCBhbmQgYGNoaWxkYFxuICogYW5kIGFueSBleGlzdGluZyBgY2hpbGQucHJldmlvdXNTaWJsaW5nYCBvciBgY2hpbGQubmV4dFNpYmxpbmdgLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3htbGRvbS94bWxkb20vaXNzdWVzLzEzNVxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20veG1sZG9tL3htbGRvbS9pc3N1ZXMvMTQ1XG4gKlxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnROb2RlXG4gKiBAcGFyYW0ge05vZGV9IGNoaWxkXG4gKiBAcmV0dXJucyB7Tm9kZX0gdGhlIGNoaWxkIHRoYXQgd2FzIHJlbW92ZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfcmVtb3ZlQ2hpbGQgKHBhcmVudE5vZGUsIGNoaWxkKSB7XG5cdHZhciBwcmV2aW91cyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcblx0dmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcblx0aWYgKHByZXZpb3VzKSB7XG5cdFx0cHJldmlvdXMubmV4dFNpYmxpbmcgPSBuZXh0O1xuXHR9IGVsc2Uge1xuXHRcdHBhcmVudE5vZGUuZmlyc3RDaGlsZCA9IG5leHQ7XG5cdH1cblx0aWYgKG5leHQpIHtcblx0XHRuZXh0LnByZXZpb3VzU2libGluZyA9IHByZXZpb3VzO1xuXHR9IGVsc2Uge1xuXHRcdHBhcmVudE5vZGUubGFzdENoaWxkID0gcHJldmlvdXM7XG5cdH1cblx0Y2hpbGQucGFyZW50Tm9kZSA9IG51bGw7XG5cdGNoaWxkLnByZXZpb3VzU2libGluZyA9IG51bGw7XG5cdGNoaWxkLm5leHRTaWJsaW5nID0gbnVsbDtcblx0X29uVXBkYXRlQ2hpbGQocGFyZW50Tm9kZS5vd25lckRvY3VtZW50LCBwYXJlbnROb2RlKTtcblx0cmV0dXJuIGNoaWxkO1xufVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGBub2RlYCBjYW4gYmUgYSBwYXJlbnQgZm9yIGluc2VydGlvbi5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGhhc1ZhbGlkUGFyZW50Tm9kZVR5cGUobm9kZSkge1xuXHRyZXR1cm4gKFxuXHRcdG5vZGUgJiZcblx0XHQobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFIHx8IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fCBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSlcblx0KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBgbm9kZWAgY2FuIGJlIGluc2VydGVkIGFjY29yZGluZyB0byBpdCdzIGBub2RlVHlwZWAuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBoYXNJbnNlcnRhYmxlTm9kZVR5cGUobm9kZSkge1xuXHRyZXR1cm4gKFxuXHRcdG5vZGUgJiZcblx0XHQoaXNFbGVtZW50Tm9kZShub2RlKSB8fFxuXHRcdFx0aXNUZXh0Tm9kZShub2RlKSB8fFxuXHRcdFx0aXNEb2NUeXBlTm9kZShub2RlKSB8fFxuXHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8XG5cdFx0XHRub2RlLm5vZGVUeXBlID09PSBOb2RlLkNPTU1FTlRfTk9ERSB8fFxuXHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5QUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREUpXG5cdCk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGBub2RlYCBpcyBhIERPQ1RZUEUgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNEb2NUeXBlTm9kZShub2RlKSB7XG5cdHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfVFlQRV9OT0RFO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbm9kZSBpcyBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0VsZW1lbnROb2RlKG5vZGUpIHtcblx0cmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREU7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgbm9kZWAgaXMgYSB0ZXh0IG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVGV4dE5vZGUobm9kZSkge1xuXHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBlbiBlbGVtZW50IG5vZGUgY2FuIGJlIGluc2VydGVkIGJlZm9yZSBgY2hpbGRgLCBvciBhdCB0aGUgZW5kIGlmIGNoaWxkIGlzIGZhbHN5LFxuICogYWNjb3JkaW5nIHRvIHRoZSBwcmVzZW5jZSBhbmQgcG9zaXRpb24gb2YgYSBkb2N0eXBlIG5vZGUgb24gdGhlIHNhbWUgbGV2ZWwuXG4gKlxuICogQHBhcmFtIHtEb2N1bWVudH0gZG9jIFRoZSBkb2N1bWVudCBub2RlXG4gKiBAcGFyYW0ge05vZGV9IGNoaWxkIHRoZSBub2RlIHRoYXQgd291bGQgYmVjb21lIHRoZSBuZXh0U2libGluZyBpZiB0aGUgZWxlbWVudCB3b3VsZCBiZSBpbnNlcnRlZFxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiBhbiBlbGVtZW50IGNhbiBiZSBpbnNlcnRlZCBiZWZvcmUgY2hpbGRcbiAqIEBwcml2YXRlXG4gKiBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1lbnN1cmUtcHJlLWluc2VydGlvbi12YWxpZGl0eVxuICovXG5mdW5jdGlvbiBpc0VsZW1lbnRJbnNlcnRpb25Qb3NzaWJsZShkb2MsIGNoaWxkKSB7XG5cdHZhciBwYXJlbnRDaGlsZE5vZGVzID0gZG9jLmNoaWxkTm9kZXMgfHwgW107XG5cdGlmIChmaW5kKHBhcmVudENoaWxkTm9kZXMsIGlzRWxlbWVudE5vZGUpIHx8IGlzRG9jVHlwZU5vZGUoY2hpbGQpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHZhciBkb2NUeXBlTm9kZSA9IGZpbmQocGFyZW50Q2hpbGROb2RlcywgaXNEb2NUeXBlTm9kZSk7XG5cdHJldHVybiAhKGNoaWxkICYmIGRvY1R5cGVOb2RlICYmIHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihkb2NUeXBlTm9kZSkgPiBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBlbiBlbGVtZW50IG5vZGUgY2FuIGJlIGluc2VydGVkIGJlZm9yZSBgY2hpbGRgLCBvciBhdCB0aGUgZW5kIGlmIGNoaWxkIGlzIGZhbHN5LFxuICogYWNjb3JkaW5nIHRvIHRoZSBwcmVzZW5jZSBhbmQgcG9zaXRpb24gb2YgYSBkb2N0eXBlIG5vZGUgb24gdGhlIHNhbWUgbGV2ZWwuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBkb2MgVGhlIGRvY3VtZW50IG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gY2hpbGQgdGhlIG5vZGUgdGhhdCB3b3VsZCBiZWNvbWUgdGhlIG5leHRTaWJsaW5nIGlmIHRoZSBlbGVtZW50IHdvdWxkIGJlIGluc2VydGVkXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIGFuIGVsZW1lbnQgY2FuIGJlIGluc2VydGVkIGJlZm9yZSBjaGlsZFxuICogQHByaXZhdGVcbiAqIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLWVuc3VyZS1wcmUtaW5zZXJ0aW9uLXZhbGlkaXR5XG4gKi9cbmZ1bmN0aW9uIGlzRWxlbWVudFJlcGxhY2VtZW50UG9zc2libGUoZG9jLCBjaGlsZCkge1xuXHR2YXIgcGFyZW50Q2hpbGROb2RlcyA9IGRvYy5jaGlsZE5vZGVzIHx8IFtdO1xuXG5cdGZ1bmN0aW9uIGhhc0VsZW1lbnRDaGlsZFRoYXRJc05vdENoaWxkKG5vZGUpIHtcblx0XHRyZXR1cm4gaXNFbGVtZW50Tm9kZShub2RlKSAmJiBub2RlICE9PSBjaGlsZDtcblx0fVxuXG5cdGlmIChmaW5kKHBhcmVudENoaWxkTm9kZXMsIGhhc0VsZW1lbnRDaGlsZFRoYXRJc05vdENoaWxkKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHR2YXIgZG9jVHlwZU5vZGUgPSBmaW5kKHBhcmVudENoaWxkTm9kZXMsIGlzRG9jVHlwZU5vZGUpO1xuXHRyZXR1cm4gIShjaGlsZCAmJiBkb2NUeXBlTm9kZSAmJiBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YoZG9jVHlwZU5vZGUpID4gcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKSk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIFN0ZXBzIDEtNSBvZiB0aGUgY2hlY2tzIGJlZm9yZSBpbnNlcnRpbmcgYW5kIGJlZm9yZSByZXBsYWNpbmcgYSBjaGlsZCBhcmUgdGhlIHNhbWUuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQgdGhlIHBhcmVudCBub2RlIHRvIGluc2VydCBgbm9kZWAgaW50b1xuICogQHBhcmFtIHtOb2RlfSBub2RlIHRoZSBub2RlIHRvIGluc2VydFxuICogQHBhcmFtIHtOb2RlPX0gY2hpbGQgdGhlIG5vZGUgdGhhdCBzaG91bGQgYmVjb21lIHRoZSBgbmV4dFNpYmxpbmdgIG9mIGBub2RlYFxuICogQHJldHVybnMge05vZGV9XG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBmb3Igc2V2ZXJhbCBub2RlIGNvbWJpbmF0aW9ucyB0aGF0IHdvdWxkIGNyZWF0ZSBhIERPTSB0aGF0IGlzIG5vdCB3ZWxsLWZvcm1lZC5cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGlmIGBjaGlsZGAgaXMgcHJvdmlkZWQgYnV0IGlzIG5vdCBhIGNoaWxkIG9mIGBwYXJlbnRgLlxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1lbnN1cmUtcHJlLWluc2VydGlvbi12YWxpZGl0eVxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1yZXBsYWNlXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByZUluc2VydGlvblZhbGlkaXR5MXRvNShwYXJlbnQsIG5vZGUsIGNoaWxkKSB7XG5cdC8vIDEuIElmIGBwYXJlbnRgIGlzIG5vdCBhIERvY3VtZW50LCBEb2N1bWVudEZyYWdtZW50LCBvciBFbGVtZW50IG5vZGUsIHRoZW4gdGhyb3cgYSBcIkhpZXJhcmNoeVJlcXVlc3RFcnJvclwiIERPTUV4Y2VwdGlvbi5cblx0aWYgKCFoYXNWYWxpZFBhcmVudE5vZGVUeXBlKHBhcmVudCkpIHtcblx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ1VuZXhwZWN0ZWQgcGFyZW50IG5vZGUgdHlwZSAnICsgcGFyZW50Lm5vZGVUeXBlKTtcblx0fVxuXHQvLyAyLiBJZiBgbm9kZWAgaXMgYSBob3N0LWluY2x1ZGluZyBpbmNsdXNpdmUgYW5jZXN0b3Igb2YgYHBhcmVudGAsIHRoZW4gdGhyb3cgYSBcIkhpZXJhcmNoeVJlcXVlc3RFcnJvclwiIERPTUV4Y2VwdGlvbi5cblx0Ly8gbm90IGltcGxlbWVudGVkIVxuXHQvLyAzLiBJZiBgY2hpbGRgIGlzIG5vbi1udWxsIGFuZCBpdHMgcGFyZW50IGlzIG5vdCBgcGFyZW50YCwgdGhlbiB0aHJvdyBhIFwiTm90Rm91bmRFcnJvclwiIERPTUV4Y2VwdGlvbi5cblx0aWYgKGNoaWxkICYmIGNoaWxkLnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xuXHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oTk9UX0ZPVU5EX0VSUiwgJ2NoaWxkIG5vdCBpbiBwYXJlbnQnKTtcblx0fVxuXHRpZiAoXG5cdFx0Ly8gNC4gSWYgYG5vZGVgIGlzIG5vdCBhIERvY3VtZW50RnJhZ21lbnQsIERvY3VtZW50VHlwZSwgRWxlbWVudCwgb3IgQ2hhcmFjdGVyRGF0YSBub2RlLCB0aGVuIHRocm93IGEgXCJIaWVyYXJjaHlSZXF1ZXN0RXJyb3JcIiBET01FeGNlcHRpb24uXG5cdFx0IWhhc0luc2VydGFibGVOb2RlVHlwZShub2RlKSB8fFxuXHRcdC8vIDUuIElmIGVpdGhlciBgbm9kZWAgaXMgYSBUZXh0IG5vZGUgYW5kIGBwYXJlbnRgIGlzIGEgZG9jdW1lbnQsXG5cdFx0Ly8gdGhlIHNheCBwYXJzZXIgY3VycmVudGx5IGFkZHMgdG9wIGxldmVsIHRleHQgbm9kZXMsIHRoaXMgd2lsbCBiZSBmaXhlZCBpbiAwLjkuMFxuXHRcdC8vIHx8IChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSAmJiBwYXJlbnQubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcblx0XHQvLyBvciBgbm9kZWAgaXMgYSBkb2N0eXBlIGFuZCBgcGFyZW50YCBpcyBub3QgYSBkb2N1bWVudCwgdGhlbiB0aHJvdyBhIFwiSGllcmFyY2h5UmVxdWVzdEVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXHRcdChpc0RvY1R5cGVOb2RlKG5vZGUpICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxuXHQpIHtcblx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuXHRcdFx0SElFUkFSQ0hZX1JFUVVFU1RfRVJSLFxuXHRcdFx0J1VuZXhwZWN0ZWQgbm9kZSB0eXBlICcgKyBub2RlLm5vZGVUeXBlICsgJyBmb3IgcGFyZW50IG5vZGUgdHlwZSAnICsgcGFyZW50Lm5vZGVUeXBlXG5cdFx0KTtcblx0fVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBTdGVwIDYgb2YgdGhlIGNoZWNrcyBiZWZvcmUgaW5zZXJ0aW5nIGFuZCBiZWZvcmUgcmVwbGFjaW5nIGEgY2hpbGQgYXJlIGRpZmZlcmVudC5cbiAqXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBwYXJlbnQgdGhlIHBhcmVudCBub2RlIHRvIGluc2VydCBgbm9kZWAgaW50b1xuICogQHBhcmFtIHtOb2RlfSBub2RlIHRoZSBub2RlIHRvIGluc2VydFxuICogQHBhcmFtIHtOb2RlIHwgdW5kZWZpbmVkfSBjaGlsZCB0aGUgbm9kZSB0aGF0IHNob3VsZCBiZWNvbWUgdGhlIGBuZXh0U2libGluZ2Agb2YgYG5vZGVgXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGZvciBzZXZlcmFsIG5vZGUgY29tYmluYXRpb25zIHRoYXQgd291bGQgY3JlYXRlIGEgRE9NIHRoYXQgaXMgbm90IHdlbGwtZm9ybWVkLlxuICogQHRocm93cyBET01FeGNlcHRpb24gaWYgYGNoaWxkYCBpcyBwcm92aWRlZCBidXQgaXMgbm90IGEgY2hpbGQgb2YgYHBhcmVudGAuXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLWVuc3VyZS1wcmUtaW5zZXJ0aW9uLXZhbGlkaXR5XG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLXJlcGxhY2VcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0UHJlSW5zZXJ0aW9uVmFsaWRpdHlJbkRvY3VtZW50KHBhcmVudCwgbm9kZSwgY2hpbGQpIHtcblx0dmFyIHBhcmVudENoaWxkTm9kZXMgPSBwYXJlbnQuY2hpbGROb2RlcyB8fCBbXTtcblx0dmFyIG5vZGVDaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzIHx8IFtdO1xuXG5cdC8vIERvY3VtZW50RnJhZ21lbnRcblx0aWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuXHRcdHZhciBub2RlQ2hpbGRFbGVtZW50cyA9IG5vZGVDaGlsZE5vZGVzLmZpbHRlcihpc0VsZW1lbnROb2RlKTtcblx0XHQvLyBJZiBub2RlIGhhcyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgY2hpbGQgb3IgaGFzIGEgVGV4dCBub2RlIGNoaWxkLlxuXHRcdGlmIChub2RlQ2hpbGRFbGVtZW50cy5sZW5ndGggPiAxIHx8IGZpbmQobm9kZUNoaWxkTm9kZXMsIGlzVGV4dE5vZGUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ01vcmUgdGhhbiBvbmUgZWxlbWVudCBvciB0ZXh0IGluIGZyYWdtZW50Jyk7XG5cdFx0fVxuXHRcdC8vIE90aGVyd2lzZSwgaWYgYG5vZGVgIGhhcyBvbmUgZWxlbWVudCBjaGlsZCBhbmQgZWl0aGVyIGBwYXJlbnRgIGhhcyBhbiBlbGVtZW50IGNoaWxkLFxuXHRcdC8vIGBjaGlsZGAgaXMgYSBkb2N0eXBlLCBvciBgY2hpbGRgIGlzIG5vbi1udWxsIGFuZCBhIGRvY3R5cGUgaXMgZm9sbG93aW5nIGBjaGlsZGAuXG5cdFx0aWYgKG5vZGVDaGlsZEVsZW1lbnRzLmxlbmd0aCA9PT0gMSAmJiAhaXNFbGVtZW50SW5zZXJ0aW9uUG9zc2libGUocGFyZW50LCBjaGlsZCkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnRWxlbWVudCBpbiBmcmFnbWVudCBjYW4gbm90IGJlIGluc2VydGVkIGJlZm9yZSBkb2N0eXBlJyk7XG5cdFx0fVxuXHR9XG5cdC8vIEVsZW1lbnRcblx0aWYgKGlzRWxlbWVudE5vZGUobm9kZSkpIHtcblx0XHQvLyBgcGFyZW50YCBoYXMgYW4gZWxlbWVudCBjaGlsZCwgYGNoaWxkYCBpcyBhIGRvY3R5cGUsXG5cdFx0Ly8gb3IgYGNoaWxkYCBpcyBub24tbnVsbCBhbmQgYSBkb2N0eXBlIGlzIGZvbGxvd2luZyBgY2hpbGRgLlxuXHRcdGlmICghaXNFbGVtZW50SW5zZXJ0aW9uUG9zc2libGUocGFyZW50LCBjaGlsZCkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnT25seSBvbmUgZWxlbWVudCBjYW4gYmUgYWRkZWQgYW5kIG9ubHkgYWZ0ZXIgZG9jdHlwZScpO1xuXHRcdH1cblx0fVxuXHQvLyBEb2N1bWVudFR5cGVcblx0aWYgKGlzRG9jVHlwZU5vZGUobm9kZSkpIHtcblx0XHQvLyBgcGFyZW50YCBoYXMgYSBkb2N0eXBlIGNoaWxkLFxuXHRcdGlmIChmaW5kKHBhcmVudENoaWxkTm9kZXMsIGlzRG9jVHlwZU5vZGUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ09ubHkgb25lIGRvY3R5cGUgaXMgYWxsb3dlZCcpO1xuXHRcdH1cblx0XHR2YXIgcGFyZW50RWxlbWVudENoaWxkID0gZmluZChwYXJlbnRDaGlsZE5vZGVzLCBpc0VsZW1lbnROb2RlKTtcblx0XHQvLyBgY2hpbGRgIGlzIG5vbi1udWxsIGFuZCBhbiBlbGVtZW50IGlzIHByZWNlZGluZyBgY2hpbGRgLFxuXHRcdGlmIChjaGlsZCAmJiBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YocGFyZW50RWxlbWVudENoaWxkKSA8IHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnRG9jdHlwZSBjYW4gb25seSBiZSBpbnNlcnRlZCBiZWZvcmUgYW4gZWxlbWVudCcpO1xuXHRcdH1cblx0XHQvLyBvciBgY2hpbGRgIGlzIG51bGwgYW5kIGBwYXJlbnRgIGhhcyBhbiBlbGVtZW50IGNoaWxkLlxuXHRcdGlmICghY2hpbGQgJiYgcGFyZW50RWxlbWVudENoaWxkKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ0RvY3R5cGUgY2FuIG5vdCBiZSBhcHBlbmRlZCBzaW5jZSBlbGVtZW50IGlzIHByZXNlbnQnKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogU3RlcCA2IG9mIHRoZSBjaGVja3MgYmVmb3JlIGluc2VydGluZyBhbmQgYmVmb3JlIHJlcGxhY2luZyBhIGNoaWxkIGFyZSBkaWZmZXJlbnQuXG4gKlxuICogQHBhcmFtIHtEb2N1bWVudH0gcGFyZW50IHRoZSBwYXJlbnQgbm9kZSB0byBpbnNlcnQgYG5vZGVgIGludG9cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSB0aGUgbm9kZSB0byBpbnNlcnRcbiAqIEBwYXJhbSB7Tm9kZSB8IHVuZGVmaW5lZH0gY2hpbGQgdGhlIG5vZGUgdGhhdCBzaG91bGQgYmVjb21lIHRoZSBgbmV4dFNpYmxpbmdgIG9mIGBub2RlYFxuICogQHJldHVybnMge05vZGV9XG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBmb3Igc2V2ZXJhbCBub2RlIGNvbWJpbmF0aW9ucyB0aGF0IHdvdWxkIGNyZWF0ZSBhIERPTSB0aGF0IGlzIG5vdCB3ZWxsLWZvcm1lZC5cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGlmIGBjaGlsZGAgaXMgcHJvdmlkZWQgYnV0IGlzIG5vdCBhIGNoaWxkIG9mIGBwYXJlbnRgLlxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1lbnN1cmUtcHJlLWluc2VydGlvbi12YWxpZGl0eVxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1yZXBsYWNlXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByZVJlcGxhY2VtZW50VmFsaWRpdHlJbkRvY3VtZW50KHBhcmVudCwgbm9kZSwgY2hpbGQpIHtcblx0dmFyIHBhcmVudENoaWxkTm9kZXMgPSBwYXJlbnQuY2hpbGROb2RlcyB8fCBbXTtcblx0dmFyIG5vZGVDaGlsZE5vZGVzID0gbm9kZS5jaGlsZE5vZGVzIHx8IFtdO1xuXG5cdC8vIERvY3VtZW50RnJhZ21lbnRcblx0aWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuXHRcdHZhciBub2RlQ2hpbGRFbGVtZW50cyA9IG5vZGVDaGlsZE5vZGVzLmZpbHRlcihpc0VsZW1lbnROb2RlKTtcblx0XHQvLyBJZiBgbm9kZWAgaGFzIG1vcmUgdGhhbiBvbmUgZWxlbWVudCBjaGlsZCBvciBoYXMgYSBUZXh0IG5vZGUgY2hpbGQuXG5cdFx0aWYgKG5vZGVDaGlsZEVsZW1lbnRzLmxlbmd0aCA+IDEgfHwgZmluZChub2RlQ2hpbGROb2RlcywgaXNUZXh0Tm9kZSkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnTW9yZSB0aGFuIG9uZSBlbGVtZW50IG9yIHRleHQgaW4gZnJhZ21lbnQnKTtcblx0XHR9XG5cdFx0Ly8gT3RoZXJ3aXNlLCBpZiBgbm9kZWAgaGFzIG9uZSBlbGVtZW50IGNoaWxkIGFuZCBlaXRoZXIgYHBhcmVudGAgaGFzIGFuIGVsZW1lbnQgY2hpbGQgdGhhdCBpcyBub3QgYGNoaWxkYCBvciBhIGRvY3R5cGUgaXMgZm9sbG93aW5nIGBjaGlsZGAuXG5cdFx0aWYgKG5vZGVDaGlsZEVsZW1lbnRzLmxlbmd0aCA9PT0gMSAmJiAhaXNFbGVtZW50UmVwbGFjZW1lbnRQb3NzaWJsZShwYXJlbnQsIGNoaWxkKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdFbGVtZW50IGluIGZyYWdtZW50IGNhbiBub3QgYmUgaW5zZXJ0ZWQgYmVmb3JlIGRvY3R5cGUnKTtcblx0XHR9XG5cdH1cblx0Ly8gRWxlbWVudFxuXHRpZiAoaXNFbGVtZW50Tm9kZShub2RlKSkge1xuXHRcdC8vIGBwYXJlbnRgIGhhcyBhbiBlbGVtZW50IGNoaWxkIHRoYXQgaXMgbm90IGBjaGlsZGAgb3IgYSBkb2N0eXBlIGlzIGZvbGxvd2luZyBgY2hpbGRgLlxuXHRcdGlmICghaXNFbGVtZW50UmVwbGFjZW1lbnRQb3NzaWJsZShwYXJlbnQsIGNoaWxkKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdPbmx5IG9uZSBlbGVtZW50IGNhbiBiZSBhZGRlZCBhbmQgb25seSBhZnRlciBkb2N0eXBlJyk7XG5cdFx0fVxuXHR9XG5cdC8vIERvY3VtZW50VHlwZVxuXHRpZiAoaXNEb2NUeXBlTm9kZShub2RlKSkge1xuXHRcdGZ1bmN0aW9uIGhhc0RvY3R5cGVDaGlsZFRoYXRJc05vdENoaWxkKG5vZGUpIHtcblx0XHRcdHJldHVybiBpc0RvY1R5cGVOb2RlKG5vZGUpICYmIG5vZGUgIT09IGNoaWxkO1xuXHRcdH1cblxuXHRcdC8vIGBwYXJlbnRgIGhhcyBhIGRvY3R5cGUgY2hpbGQgdGhhdCBpcyBub3QgYGNoaWxkYCxcblx0XHRpZiAoZmluZChwYXJlbnRDaGlsZE5vZGVzLCBoYXNEb2N0eXBlQ2hpbGRUaGF0SXNOb3RDaGlsZCkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnT25seSBvbmUgZG9jdHlwZSBpcyBhbGxvd2VkJyk7XG5cdFx0fVxuXHRcdHZhciBwYXJlbnRFbGVtZW50Q2hpbGQgPSBmaW5kKHBhcmVudENoaWxkTm9kZXMsIGlzRWxlbWVudE5vZGUpO1xuXHRcdC8vIG9yIGFuIGVsZW1lbnQgaXMgcHJlY2VkaW5nIGBjaGlsZGAuXG5cdFx0aWYgKGNoaWxkICYmIHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihwYXJlbnRFbGVtZW50Q2hpbGQpIDwgcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdEb2N0eXBlIGNhbiBvbmx5IGJlIGluc2VydGVkIGJlZm9yZSBhbiBlbGVtZW50Jyk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IHRoZSBwYXJlbnQgbm9kZSB0byBpbnNlcnQgYG5vZGVgIGludG9cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSB0aGUgbm9kZSB0byBpbnNlcnRcbiAqIEBwYXJhbSB7Tm9kZT19IGNoaWxkIHRoZSBub2RlIHRoYXQgc2hvdWxkIGJlY29tZSB0aGUgYG5leHRTaWJsaW5nYCBvZiBgbm9kZWBcbiAqIEByZXR1cm5zIHtOb2RlfVxuICogQHRocm93cyBET01FeGNlcHRpb24gZm9yIHNldmVyYWwgbm9kZSBjb21iaW5hdGlvbnMgdGhhdCB3b3VsZCBjcmVhdGUgYSBET00gdGhhdCBpcyBub3Qgd2VsbC1mb3JtZWQuXG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBpZiBgY2hpbGRgIGlzIHByb3ZpZGVkIGJ1dCBpcyBub3QgYSBjaGlsZCBvZiBgcGFyZW50YC5cbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtZW5zdXJlLXByZS1pbnNlcnRpb24tdmFsaWRpdHlcbiAqL1xuZnVuY3Rpb24gX2luc2VydEJlZm9yZShwYXJlbnQsIG5vZGUsIGNoaWxkLCBfaW5Eb2N1bWVudEFzc2VydGlvbikge1xuXHQvLyBUbyBlbnN1cmUgcHJlLWluc2VydGlvbiB2YWxpZGl0eSBvZiBhIG5vZGUgaW50byBhIHBhcmVudCBiZWZvcmUgYSBjaGlsZCwgcnVuIHRoZXNlIHN0ZXBzOlxuXHRhc3NlcnRQcmVJbnNlcnRpb25WYWxpZGl0eTF0bzUocGFyZW50LCBub2RlLCBjaGlsZCk7XG5cblx0Ly8gSWYgcGFyZW50IGlzIGEgZG9jdW1lbnQsIGFuZCBhbnkgb2YgdGhlIHN0YXRlbWVudHMgYmVsb3csIHN3aXRjaGVkIG9uIHRoZSBpbnRlcmZhY2Ugbm9kZSBpbXBsZW1lbnRzLFxuXHQvLyBhcmUgdHJ1ZSwgdGhlbiB0aHJvdyBhIFwiSGllcmFyY2h5UmVxdWVzdEVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXHRpZiAocGFyZW50Lm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpIHtcblx0XHQoX2luRG9jdW1lbnRBc3NlcnRpb24gfHwgYXNzZXJ0UHJlSW5zZXJ0aW9uVmFsaWRpdHlJbkRvY3VtZW50KShwYXJlbnQsIG5vZGUsIGNoaWxkKTtcblx0fVxuXG5cdHZhciBjcCA9IG5vZGUucGFyZW50Tm9kZTtcblx0aWYoY3Ape1xuXHRcdGNwLnJlbW92ZUNoaWxkKG5vZGUpOy8vcmVtb3ZlIGFuZCB1cGRhdGVcblx0fVxuXHRpZihub2RlLm5vZGVUeXBlID09PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKXtcblx0XHR2YXIgbmV3Rmlyc3QgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0aWYgKG5ld0ZpcnN0ID09IG51bGwpIHtcblx0XHRcdHJldHVybiBub2RlO1xuXHRcdH1cblx0XHR2YXIgbmV3TGFzdCA9IG5vZGUubGFzdENoaWxkO1xuXHR9ZWxzZXtcblx0XHRuZXdGaXJzdCA9IG5ld0xhc3QgPSBub2RlO1xuXHR9XG5cdHZhciBwcmUgPSBjaGlsZCA/IGNoaWxkLnByZXZpb3VzU2libGluZyA6IHBhcmVudC5sYXN0Q2hpbGQ7XG5cblx0bmV3Rmlyc3QucHJldmlvdXNTaWJsaW5nID0gcHJlO1xuXHRuZXdMYXN0Lm5leHRTaWJsaW5nID0gY2hpbGQ7XG5cblxuXHRpZihwcmUpe1xuXHRcdHByZS5uZXh0U2libGluZyA9IG5ld0ZpcnN0O1xuXHR9ZWxzZXtcblx0XHRwYXJlbnQuZmlyc3RDaGlsZCA9IG5ld0ZpcnN0O1xuXHR9XG5cdGlmKGNoaWxkID09IG51bGwpe1xuXHRcdHBhcmVudC5sYXN0Q2hpbGQgPSBuZXdMYXN0O1xuXHR9ZWxzZXtcblx0XHRjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdMYXN0O1xuXHR9XG5cdGRve1xuXHRcdG5ld0ZpcnN0LnBhcmVudE5vZGUgPSBwYXJlbnQ7XG5cdH13aGlsZShuZXdGaXJzdCAhPT0gbmV3TGFzdCAmJiAobmV3Rmlyc3Q9IG5ld0ZpcnN0Lm5leHRTaWJsaW5nKSlcblx0X29uVXBkYXRlQ2hpbGQocGFyZW50Lm93bmVyRG9jdW1lbnR8fHBhcmVudCwgcGFyZW50KTtcblx0Ly9jb25zb2xlLmxvZyhwYXJlbnQubGFzdENoaWxkLm5leHRTaWJsaW5nID09IG51bGwpXG5cdGlmIChub2RlLm5vZGVUeXBlID09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcblx0XHRub2RlLmZpcnN0Q2hpbGQgPSBub2RlLmxhc3RDaGlsZCA9IG51bGw7XG5cdH1cblx0cmV0dXJuIG5vZGU7XG59XG5cbi8qKlxuICogQXBwZW5kcyBgbmV3Q2hpbGRgIHRvIGBwYXJlbnROb2RlYC5cbiAqIElmIGBuZXdDaGlsZGAgaXMgYWxyZWFkeSBjb25uZWN0ZWQgdG8gYSBgcGFyZW50Tm9kZWAgaXQgaXMgZmlyc3QgcmVtb3ZlZCBmcm9tIGl0LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3htbGRvbS94bWxkb20vaXNzdWVzLzEzNVxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20veG1sZG9tL3htbGRvbS9pc3N1ZXMvMTQ1XG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudE5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gbmV3Q2hpbGRcbiAqIEByZXR1cm5zIHtOb2RlfVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX2FwcGVuZFNpbmdsZUNoaWxkIChwYXJlbnROb2RlLCBuZXdDaGlsZCkge1xuXHRpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSkge1xuXHRcdG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuXHR9XG5cdG5ld0NoaWxkLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuXHRuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBwYXJlbnROb2RlLmxhc3RDaGlsZDtcblx0bmV3Q2hpbGQubmV4dFNpYmxpbmcgPSBudWxsO1xuXHRpZiAobmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nKSB7XG5cdFx0bmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XG5cdH0gZWxzZSB7XG5cdFx0cGFyZW50Tm9kZS5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG5cdH1cblx0cGFyZW50Tm9kZS5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcblx0X29uVXBkYXRlQ2hpbGQocGFyZW50Tm9kZS5vd25lckRvY3VtZW50LCBwYXJlbnROb2RlLCBuZXdDaGlsZCk7XG5cdHJldHVybiBuZXdDaGlsZDtcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlID0ge1xuXHQvL2ltcGxlbWVudGF0aW9uIDogbnVsbCxcblx0bm9kZU5hbWUgOiAgJyNkb2N1bWVudCcsXG5cdG5vZGVUeXBlIDogIERPQ1VNRU5UX05PREUsXG5cdC8qKlxuXHQgKiBUaGUgRG9jdW1lbnRUeXBlIG5vZGUgb2YgdGhlIGRvY3VtZW50LlxuXHQgKlxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHR5cGUgRG9jdW1lbnRUeXBlXG5cdCAqL1xuXHRkb2N0eXBlIDogIG51bGwsXG5cdGRvY3VtZW50RWxlbWVudCA6ICBudWxsLFxuXHRfaW5jIDogMSxcblxuXHRpbnNlcnRCZWZvcmUgOiAgZnVuY3Rpb24obmV3Q2hpbGQsIHJlZkNoaWxkKXsvL3JhaXNlc1xuXHRcdGlmKG5ld0NoaWxkLm5vZGVUeXBlID09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe1xuXHRcdFx0dmFyIGNoaWxkID0gbmV3Q2hpbGQuZmlyc3RDaGlsZDtcblx0XHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdFx0dmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHRcdFx0dGhpcy5pbnNlcnRCZWZvcmUoY2hpbGQscmVmQ2hpbGQpO1xuXHRcdFx0XHRjaGlsZCA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3Q2hpbGQ7XG5cdFx0fVxuXHRcdF9pbnNlcnRCZWZvcmUodGhpcywgbmV3Q2hpbGQsIHJlZkNoaWxkKTtcblx0XHRuZXdDaGlsZC5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRpZiAodGhpcy5kb2N1bWVudEVsZW1lbnQgPT09IG51bGwgJiYgbmV3Q2hpbGQubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuXHRcdFx0dGhpcy5kb2N1bWVudEVsZW1lbnQgPSBuZXdDaGlsZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3Q2hpbGQ7XG5cdH0sXG5cdHJlbW92ZUNoaWxkIDogIGZ1bmN0aW9uKG9sZENoaWxkKXtcblx0XHRpZih0aGlzLmRvY3VtZW50RWxlbWVudCA9PSBvbGRDaGlsZCl7XG5cdFx0XHR0aGlzLmRvY3VtZW50RWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBfcmVtb3ZlQ2hpbGQodGhpcyxvbGRDaGlsZCk7XG5cdH0sXG5cdHJlcGxhY2VDaGlsZDogZnVuY3Rpb24gKG5ld0NoaWxkLCBvbGRDaGlsZCkge1xuXHRcdC8vcmFpc2VzXG5cdFx0X2luc2VydEJlZm9yZSh0aGlzLCBuZXdDaGlsZCwgb2xkQ2hpbGQsIGFzc2VydFByZVJlcGxhY2VtZW50VmFsaWRpdHlJbkRvY3VtZW50KTtcblx0XHRuZXdDaGlsZC5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRpZiAob2xkQ2hpbGQpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQob2xkQ2hpbGQpO1xuXHRcdH1cblx0XHRpZiAoaXNFbGVtZW50Tm9kZShuZXdDaGlsZCkpIHtcblx0XHRcdHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gbmV3Q2hpbGQ7XG5cdFx0fVxuXHR9LFxuXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRpbXBvcnROb2RlIDogZnVuY3Rpb24oaW1wb3J0ZWROb2RlLGRlZXApe1xuXHRcdHJldHVybiBpbXBvcnROb2RlKHRoaXMsaW1wb3J0ZWROb2RlLGRlZXApO1xuXHR9LFxuXHQvLyBJbnRyb2R1Y2VkIGluIERPTSBMZXZlbCAyOlxuXHRnZXRFbGVtZW50QnlJZCA6XHRmdW5jdGlvbihpZCl7XG5cdFx0dmFyIHJ0diA9IG51bGw7XG5cdFx0X3Zpc2l0Tm9kZSh0aGlzLmRvY3VtZW50RWxlbWVudCxmdW5jdGlvbihub2RlKXtcblx0XHRcdGlmKG5vZGUubm9kZVR5cGUgPT0gRUxFTUVOVF9OT0RFKXtcblx0XHRcdFx0aWYobm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gaWQpe1xuXHRcdFx0XHRcdHJ0diA9IG5vZGU7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiBydHY7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFRoZSBgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZWAgbWV0aG9kIG9mIGBEb2N1bWVudGAgaW50ZXJmYWNlIHJldHVybnMgYW4gYXJyYXktbGlrZSBvYmplY3Rcblx0ICogb2YgYWxsIGNoaWxkIGVsZW1lbnRzIHdoaWNoIGhhdmUgKiphbGwqKiBvZiB0aGUgZ2l2ZW4gY2xhc3MgbmFtZShzKS5cblx0ICpcblx0ICogUmV0dXJucyBhbiBlbXB0eSBsaXN0IGlmIGBjbGFzc2VOYW1lc2AgaXMgYW4gZW1wdHkgc3RyaW5nIG9yIG9ubHkgY29udGFpbnMgSFRNTCB3aGl0ZSBzcGFjZSBjaGFyYWN0ZXJzLlxuXHQgKlxuXHQgKlxuXHQgKiBXYXJuaW5nOiBUaGlzIGlzIGEgbGl2ZSBMaXZlTm9kZUxpc3QuXG5cdCAqIENoYW5nZXMgaW4gdGhlIERPTSB3aWxsIHJlZmxlY3QgaW4gdGhlIGFycmF5IGFzIHRoZSBjaGFuZ2VzIG9jY3VyLlxuXHQgKiBJZiBhbiBlbGVtZW50IHNlbGVjdGVkIGJ5IHRoaXMgYXJyYXkgbm8gbG9uZ2VyIHF1YWxpZmllcyBmb3IgdGhlIHNlbGVjdG9yLFxuXHQgKiBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgcmVtb3ZlZC4gQmUgYXdhcmUgb2YgdGhpcyBmb3IgaXRlcmF0aW9uIHB1cnBvc2VzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lcyBpcyBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGNsYXNzIG5hbWUocykgdG8gbWF0Y2g7IG11bHRpcGxlIGNsYXNzIG5hbWVzIGFyZSBzZXBhcmF0ZWQgYnkgKEFTQ0lJLSl3aGl0ZXNwYWNlXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L2dldEVsZW1lbnRzQnlDbGFzc05hbWVcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtZ2V0ZWxlbWVudHNieWNsYXNzbmFtZVxuXHQgKi9cblx0Z2V0RWxlbWVudHNCeUNsYXNzTmFtZTogZnVuY3Rpb24oY2xhc3NOYW1lcykge1xuXHRcdHZhciBjbGFzc05hbWVzU2V0ID0gdG9PcmRlcmVkU2V0KGNsYXNzTmFtZXMpXG5cdFx0cmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcywgZnVuY3Rpb24oYmFzZSkge1xuXHRcdFx0dmFyIGxzID0gW107XG5cdFx0XHRpZiAoY2xhc3NOYW1lc1NldC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdF92aXNpdE5vZGUoYmFzZS5kb2N1bWVudEVsZW1lbnQsIGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRcdFx0XHRpZihub2RlICE9PSBiYXNlICYmIG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuXHRcdFx0XHRcdFx0dmFyIG5vZGVDbGFzc05hbWVzID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJylcblx0XHRcdFx0XHRcdC8vIGNhbiBiZSBudWxsIGlmIHRoZSBhdHRyaWJ1dGUgZG9lcyBub3QgZXhpc3Rcblx0XHRcdFx0XHRcdGlmIChub2RlQ2xhc3NOYW1lcykge1xuXHRcdFx0XHRcdFx0XHQvLyBiZWZvcmUgc3BsaXR0aW5nIGFuZCBpdGVyYXRpbmcganVzdCBjb21wYXJlIHRoZW0gZm9yIHRoZSBtb3N0IGNvbW1vbiBjYXNlXG5cdFx0XHRcdFx0XHRcdHZhciBtYXRjaGVzID0gY2xhc3NOYW1lcyA9PT0gbm9kZUNsYXNzTmFtZXM7XG5cdFx0XHRcdFx0XHRcdGlmICghbWF0Y2hlcykge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBub2RlQ2xhc3NOYW1lc1NldCA9IHRvT3JkZXJlZFNldChub2RlQ2xhc3NOYW1lcylcblx0XHRcdFx0XHRcdFx0XHRtYXRjaGVzID0gY2xhc3NOYW1lc1NldC5ldmVyeShhcnJheUluY2x1ZGVzKG5vZGVDbGFzc05hbWVzU2V0KSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZihtYXRjaGVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0bHMucHVzaChub2RlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbHM7XG5cdFx0fSk7XG5cdH0sXG5cblx0Ly9kb2N1bWVudCBmYWN0b3J5IG1ldGhvZDpcblx0Y3JlYXRlRWxlbWVudCA6XHRmdW5jdGlvbih0YWdOYW1lKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBFbGVtZW50KCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLm5vZGVOYW1lID0gdGFnTmFtZTtcblx0XHRub2RlLnRhZ05hbWUgPSB0YWdOYW1lO1xuXHRcdG5vZGUubG9jYWxOYW1lID0gdGFnTmFtZTtcblx0XHRub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0XHR2YXIgYXR0cnNcdD0gbm9kZS5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuXHRcdGF0dHJzLl9vd25lckVsZW1lbnQgPSBub2RlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVEb2N1bWVudEZyYWdtZW50IDpcdGZ1bmN0aW9uKCl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZVRleHROb2RlIDpcdGZ1bmN0aW9uKGRhdGEpe1xuXHRcdHZhciBub2RlID0gbmV3IFRleHQoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUuYXBwZW5kRGF0YShkYXRhKVxuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVDb21tZW50IDpcdGZ1bmN0aW9uKGRhdGEpe1xuXHRcdHZhciBub2RlID0gbmV3IENvbW1lbnQoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUuYXBwZW5kRGF0YShkYXRhKVxuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVDREFUQVNlY3Rpb24gOlx0ZnVuY3Rpb24oZGF0YSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgQ0RBVEFTZWN0aW9uKCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLmFwcGVuZERhdGEoZGF0YSlcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlUHJvY2Vzc2luZ0luc3RydWN0aW9uIDpcdGZ1bmN0aW9uKHRhcmdldCxkYXRhKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUudGFnTmFtZSA9IG5vZGUubm9kZU5hbWUgPSBub2RlLnRhcmdldCA9IHRhcmdldDtcblx0XHRub2RlLm5vZGVWYWx1ZSA9IG5vZGUuZGF0YSA9IGRhdGE7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZUF0dHJpYnV0ZSA6XHRmdW5jdGlvbihuYW1lKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBBdHRyKCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50XHQ9IHRoaXM7XG5cdFx0bm9kZS5uYW1lID0gbmFtZTtcblx0XHRub2RlLm5vZGVOYW1lXHQ9IG5hbWU7XG5cdFx0bm9kZS5sb2NhbE5hbWUgPSBuYW1lO1xuXHRcdG5vZGUuc3BlY2lmaWVkID0gdHJ1ZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlRW50aXR5UmVmZXJlbmNlIDpcdGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHZhciBub2RlID0gbmV3IEVudGl0eVJlZmVyZW5jZSgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudFx0PSB0aGlzO1xuXHRcdG5vZGUubm9kZU5hbWVcdD0gbmFtZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Ly8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMjpcblx0Y3JlYXRlRWxlbWVudE5TIDpcdGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSxxdWFsaWZpZWROYW1lKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBFbGVtZW50KCk7XG5cdFx0dmFyIHBsID0gcXVhbGlmaWVkTmFtZS5zcGxpdCgnOicpO1xuXHRcdHZhciBhdHRyc1x0PSBub2RlLmF0dHJpYnV0ZXMgPSBuZXcgTmFtZWROb2RlTWFwKCk7XG5cdFx0bm9kZS5jaGlsZE5vZGVzID0gbmV3IE5vZGVMaXN0KCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLm5vZGVOYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLnRhZ05hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUubmFtZXNwYWNlVVJJID0gbmFtZXNwYWNlVVJJO1xuXHRcdGlmKHBsLmxlbmd0aCA9PSAyKXtcblx0XHRcdG5vZGUucHJlZml4ID0gcGxbMF07XG5cdFx0XHRub2RlLmxvY2FsTmFtZSA9IHBsWzFdO1xuXHRcdH1lbHNle1xuXHRcdFx0Ly9lbC5wcmVmaXggPSBudWxsO1xuXHRcdFx0bm9kZS5sb2NhbE5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdH1cblx0XHRhdHRycy5fb3duZXJFbGVtZW50ID0gbm9kZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Ly8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMjpcblx0Y3JlYXRlQXR0cmlidXRlTlMgOlx0ZnVuY3Rpb24obmFtZXNwYWNlVVJJLHF1YWxpZmllZE5hbWUpe1xuXHRcdHZhciBub2RlID0gbmV3IEF0dHIoKTtcblx0XHR2YXIgcGwgPSBxdWFsaWZpZWROYW1lLnNwbGl0KCc6Jyk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLm5vZGVOYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLm5hbWUgPSBxdWFsaWZpZWROYW1lO1xuXHRcdG5vZGUubmFtZXNwYWNlVVJJID0gbmFtZXNwYWNlVVJJO1xuXHRcdG5vZGUuc3BlY2lmaWVkID0gdHJ1ZTtcblx0XHRpZihwbC5sZW5ndGggPT0gMil7XG5cdFx0XHRub2RlLnByZWZpeCA9IHBsWzBdO1xuXHRcdFx0bm9kZS5sb2NhbE5hbWUgPSBwbFsxXTtcblx0XHR9ZWxzZXtcblx0XHRcdC8vZWwucHJlZml4ID0gbnVsbDtcblx0XHRcdG5vZGUubG9jYWxOYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHR9XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cbn07XG5fZXh0ZW5kcyhEb2N1bWVudCxOb2RlKTtcblxuXG5mdW5jdGlvbiBFbGVtZW50KCkge1xuXHR0aGlzLl9uc01hcCA9IHt9O1xufTtcbkVsZW1lbnQucHJvdG90eXBlID0ge1xuXHRub2RlVHlwZSA6IEVMRU1FTlRfTk9ERSxcblx0aGFzQXR0cmlidXRlIDogZnVuY3Rpb24obmFtZSl7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlTm9kZShuYW1lKSE9bnVsbDtcblx0fSxcblx0Z2V0QXR0cmlidXRlIDogZnVuY3Rpb24obmFtZSl7XG5cdFx0dmFyIGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGUobmFtZSk7XG5cdFx0cmV0dXJuIGF0dHIgJiYgYXR0ci52YWx1ZSB8fCAnJztcblx0fSxcblx0Z2V0QXR0cmlidXRlTm9kZSA6IGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKG5hbWUpO1xuXHR9LFxuXHRzZXRBdHRyaWJ1dGUgOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSl7XG5cdFx0dmFyIGF0dHIgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKG5hbWUpO1xuXHRcdGF0dHIudmFsdWUgPSBhdHRyLm5vZGVWYWx1ZSA9IFwiXCIgKyB2YWx1ZTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZU5vZGUoYXR0cilcblx0fSxcblx0cmVtb3ZlQXR0cmlidXRlIDogZnVuY3Rpb24obmFtZSl7XG5cdFx0dmFyIGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGUobmFtZSlcblx0XHRhdHRyICYmIHRoaXMucmVtb3ZlQXR0cmlidXRlTm9kZShhdHRyKTtcblx0fSxcblxuXHQvL2ZvdXIgcmVhbCBvcGVhcnRpb24gbWV0aG9kXG5cdGFwcGVuZENoaWxkOmZ1bmN0aW9uKG5ld0NoaWxkKXtcblx0XHRpZihuZXdDaGlsZC5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsbnVsbCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gX2FwcGVuZFNpbmdsZUNoaWxkKHRoaXMsbmV3Q2hpbGQpO1xuXHRcdH1cblx0fSxcblx0c2V0QXR0cmlidXRlTm9kZSA6IGZ1bmN0aW9uKG5ld0F0dHIpe1xuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuc2V0TmFtZWRJdGVtKG5ld0F0dHIpO1xuXHR9LFxuXHRzZXRBdHRyaWJ1dGVOb2RlTlMgOiBmdW5jdGlvbihuZXdBdHRyKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNldE5hbWVkSXRlbU5TKG5ld0F0dHIpO1xuXHR9LFxuXHRyZW1vdmVBdHRyaWJ1dGVOb2RlIDogZnVuY3Rpb24ob2xkQXR0cil7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzID09IG9sZEF0dHIub3duZXJFbGVtZW50KVxuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKG9sZEF0dHIubm9kZU5hbWUpO1xuXHR9LFxuXHQvL2dldCByZWFsIGF0dHJpYnV0ZSBuYW1lLGFuZCByZW1vdmUgaXQgYnkgcmVtb3ZlQXR0cmlidXRlTm9kZVxuXHRyZW1vdmVBdHRyaWJ1dGVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHR2YXIgb2xkID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuXHRcdG9sZCAmJiB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUob2xkKTtcblx0fSxcblxuXHRoYXNBdHRyaWJ1dGVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIT1udWxsO1xuXHR9LFxuXHRnZXRBdHRyaWJ1dGVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcblx0XHRyZXR1cm4gYXR0ciAmJiBhdHRyLnZhbHVlIHx8ICcnO1xuXHR9LFxuXHRzZXRBdHRyaWJ1dGVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgdmFsdWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSk7XG5cdFx0YXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gXCJcIiArIHZhbHVlO1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlTm9kZShhdHRyKVxuXHR9LFxuXHRnZXRBdHRyaWJ1dGVOb2RlTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG5cdH0sXG5cblx0Z2V0RWxlbWVudHNCeVRhZ05hbWUgOiBmdW5jdGlvbih0YWdOYW1lKXtcblx0XHRyZXR1cm4gbmV3IExpdmVOb2RlTGlzdCh0aGlzLGZ1bmN0aW9uKGJhc2Upe1xuXHRcdFx0dmFyIGxzID0gW107XG5cdFx0XHRfdmlzaXROb2RlKGJhc2UsZnVuY3Rpb24obm9kZSl7XG5cdFx0XHRcdGlmKG5vZGUgIT09IGJhc2UgJiYgbm9kZS5ub2RlVHlwZSA9PSBFTEVNRU5UX05PREUgJiYgKHRhZ05hbWUgPT09ICcqJyB8fCBub2RlLnRhZ05hbWUgPT0gdGFnTmFtZSkpe1xuXHRcdFx0XHRcdGxzLnB1c2gobm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGxzO1xuXHRcdH0pO1xuXHR9LFxuXHRnZXRFbGVtZW50c0J5VGFnTmFtZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpe1xuXHRcdHJldHVybiBuZXcgTGl2ZU5vZGVMaXN0KHRoaXMsZnVuY3Rpb24oYmFzZSl7XG5cdFx0XHR2YXIgbHMgPSBbXTtcblx0XHRcdF92aXNpdE5vZGUoYmFzZSxmdW5jdGlvbihub2RlKXtcblx0XHRcdFx0aWYobm9kZSAhPT0gYmFzZSAmJiBub2RlLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUgJiYgKG5hbWVzcGFjZVVSSSA9PT0gJyonIHx8IG5vZGUubmFtZXNwYWNlVVJJID09PSBuYW1lc3BhY2VVUkkpICYmIChsb2NhbE5hbWUgPT09ICcqJyB8fCBub2RlLmxvY2FsTmFtZSA9PSBsb2NhbE5hbWUpKXtcblx0XHRcdFx0XHRscy5wdXNoKG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBscztcblxuXHRcdH0pO1xuXHR9XG59O1xuRG9jdW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lID0gRWxlbWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU7XG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyA9IEVsZW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lTlM7XG5cblxuX2V4dGVuZHMoRWxlbWVudCxOb2RlKTtcbmZ1bmN0aW9uIEF0dHIoKSB7XG59O1xuQXR0ci5wcm90b3R5cGUubm9kZVR5cGUgPSBBVFRSSUJVVEVfTk9ERTtcbl9leHRlbmRzKEF0dHIsTm9kZSk7XG5cblxuZnVuY3Rpb24gQ2hhcmFjdGVyRGF0YSgpIHtcbn07XG5DaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSA9IHtcblx0ZGF0YSA6ICcnLFxuXHRzdWJzdHJpbmdEYXRhIDogZnVuY3Rpb24ob2Zmc2V0LCBjb3VudCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGEuc3Vic3RyaW5nKG9mZnNldCwgb2Zmc2V0K2NvdW50KTtcblx0fSxcblx0YXBwZW5kRGF0YTogZnVuY3Rpb24odGV4dCkge1xuXHRcdHRleHQgPSB0aGlzLmRhdGErdGV4dDtcblx0XHR0aGlzLm5vZGVWYWx1ZSA9IHRoaXMuZGF0YSA9IHRleHQ7XG5cdFx0dGhpcy5sZW5ndGggPSB0ZXh0Lmxlbmd0aDtcblx0fSxcblx0aW5zZXJ0RGF0YTogZnVuY3Rpb24ob2Zmc2V0LHRleHQpIHtcblx0XHR0aGlzLnJlcGxhY2VEYXRhKG9mZnNldCwwLHRleHQpO1xuXG5cdH0sXG5cdGFwcGVuZENoaWxkOmZ1bmN0aW9uKG5ld0NoaWxkKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoRXhjZXB0aW9uTWVzc2FnZVtISUVSQVJDSFlfUkVRVUVTVF9FUlJdKVxuXHR9LFxuXHRkZWxldGVEYXRhOiBmdW5jdGlvbihvZmZzZXQsIGNvdW50KSB7XG5cdFx0dGhpcy5yZXBsYWNlRGF0YShvZmZzZXQsY291bnQsXCJcIik7XG5cdH0sXG5cdHJlcGxhY2VEYXRhOiBmdW5jdGlvbihvZmZzZXQsIGNvdW50LCB0ZXh0KSB7XG5cdFx0dmFyIHN0YXJ0ID0gdGhpcy5kYXRhLnN1YnN0cmluZygwLG9mZnNldCk7XG5cdFx0dmFyIGVuZCA9IHRoaXMuZGF0YS5zdWJzdHJpbmcob2Zmc2V0K2NvdW50KTtcblx0XHR0ZXh0ID0gc3RhcnQgKyB0ZXh0ICsgZW5kO1xuXHRcdHRoaXMubm9kZVZhbHVlID0gdGhpcy5kYXRhID0gdGV4dDtcblx0XHR0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuXHR9XG59XG5fZXh0ZW5kcyhDaGFyYWN0ZXJEYXRhLE5vZGUpO1xuZnVuY3Rpb24gVGV4dCgpIHtcbn07XG5UZXh0LnByb3RvdHlwZSA9IHtcblx0bm9kZU5hbWUgOiBcIiN0ZXh0XCIsXG5cdG5vZGVUeXBlIDogVEVYVF9OT0RFLFxuXHRzcGxpdFRleHQgOiBmdW5jdGlvbihvZmZzZXQpIHtcblx0XHR2YXIgdGV4dCA9IHRoaXMuZGF0YTtcblx0XHR2YXIgbmV3VGV4dCA9IHRleHQuc3Vic3RyaW5nKG9mZnNldCk7XG5cdFx0dGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIG9mZnNldCk7XG5cdFx0dGhpcy5kYXRhID0gdGhpcy5ub2RlVmFsdWUgPSB0ZXh0O1xuXHRcdHRoaXMubGVuZ3RoID0gdGV4dC5sZW5ndGg7XG5cdFx0dmFyIG5ld05vZGUgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3VGV4dCk7XG5cdFx0aWYodGhpcy5wYXJlbnROb2RlKXtcblx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgdGhpcy5uZXh0U2libGluZyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXdOb2RlO1xuXHR9XG59XG5fZXh0ZW5kcyhUZXh0LENoYXJhY3RlckRhdGEpO1xuZnVuY3Rpb24gQ29tbWVudCgpIHtcbn07XG5Db21tZW50LnByb3RvdHlwZSA9IHtcblx0bm9kZU5hbWUgOiBcIiNjb21tZW50XCIsXG5cdG5vZGVUeXBlIDogQ09NTUVOVF9OT0RFXG59XG5fZXh0ZW5kcyhDb21tZW50LENoYXJhY3RlckRhdGEpO1xuXG5mdW5jdGlvbiBDREFUQVNlY3Rpb24oKSB7XG59O1xuQ0RBVEFTZWN0aW9uLnByb3RvdHlwZSA9IHtcblx0bm9kZU5hbWUgOiBcIiNjZGF0YS1zZWN0aW9uXCIsXG5cdG5vZGVUeXBlIDogQ0RBVEFfU0VDVElPTl9OT0RFXG59XG5fZXh0ZW5kcyhDREFUQVNlY3Rpb24sQ2hhcmFjdGVyRGF0YSk7XG5cblxuZnVuY3Rpb24gRG9jdW1lbnRUeXBlKCkge1xufTtcbkRvY3VtZW50VHlwZS5wcm90b3R5cGUubm9kZVR5cGUgPSBET0NVTUVOVF9UWVBFX05PREU7XG5fZXh0ZW5kcyhEb2N1bWVudFR5cGUsTm9kZSk7XG5cbmZ1bmN0aW9uIE5vdGF0aW9uKCkge1xufTtcbk5vdGF0aW9uLnByb3RvdHlwZS5ub2RlVHlwZSA9IE5PVEFUSU9OX05PREU7XG5fZXh0ZW5kcyhOb3RhdGlvbixOb2RlKTtcblxuZnVuY3Rpb24gRW50aXR5KCkge1xufTtcbkVudGl0eS5wcm90b3R5cGUubm9kZVR5cGUgPSBFTlRJVFlfTk9ERTtcbl9leHRlbmRzKEVudGl0eSxOb2RlKTtcblxuZnVuY3Rpb24gRW50aXR5UmVmZXJlbmNlKCkge1xufTtcbkVudGl0eVJlZmVyZW5jZS5wcm90b3R5cGUubm9kZVR5cGUgPSBFTlRJVFlfUkVGRVJFTkNFX05PREU7XG5fZXh0ZW5kcyhFbnRpdHlSZWZlcmVuY2UsTm9kZSk7XG5cbmZ1bmN0aW9uIERvY3VtZW50RnJhZ21lbnQoKSB7XG59O1xuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUubm9kZU5hbWUgPVx0XCIjZG9jdW1lbnQtZnJhZ21lbnRcIjtcbkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLm5vZGVUeXBlID1cdERPQ1VNRU5UX0ZSQUdNRU5UX05PREU7XG5fZXh0ZW5kcyhEb2N1bWVudEZyYWdtZW50LE5vZGUpO1xuXG5cbmZ1bmN0aW9uIFByb2Nlc3NpbmdJbnN0cnVjdGlvbigpIHtcbn1cblByb2Nlc3NpbmdJbnN0cnVjdGlvbi5wcm90b3R5cGUubm9kZVR5cGUgPSBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU7XG5fZXh0ZW5kcyhQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24sTm9kZSk7XG5mdW5jdGlvbiBYTUxTZXJpYWxpemVyKCl7fVxuWE1MU2VyaWFsaXplci5wcm90b3R5cGUuc2VyaWFsaXplVG9TdHJpbmcgPSBmdW5jdGlvbihub2RlLGlzSHRtbCxub2RlRmlsdGVyKXtcblx0cmV0dXJuIG5vZGVTZXJpYWxpemVUb1N0cmluZy5jYWxsKG5vZGUsaXNIdG1sLG5vZGVGaWx0ZXIpO1xufVxuTm9kZS5wcm90b3R5cGUudG9TdHJpbmcgPSBub2RlU2VyaWFsaXplVG9TdHJpbmc7XG5mdW5jdGlvbiBub2RlU2VyaWFsaXplVG9TdHJpbmcoaXNIdG1sLG5vZGVGaWx0ZXIpe1xuXHR2YXIgYnVmID0gW107XG5cdHZhciByZWZOb2RlID0gdGhpcy5ub2RlVHlwZSA9PSA5ICYmIHRoaXMuZG9jdW1lbnRFbGVtZW50IHx8IHRoaXM7XG5cdHZhciBwcmVmaXggPSByZWZOb2RlLnByZWZpeDtcblx0dmFyIHVyaSA9IHJlZk5vZGUubmFtZXNwYWNlVVJJO1xuXG5cdGlmKHVyaSAmJiBwcmVmaXggPT0gbnVsbCl7XG5cdFx0Ly9jb25zb2xlLmxvZyhwcmVmaXgpXG5cdFx0dmFyIHByZWZpeCA9IHJlZk5vZGUubG9va3VwUHJlZml4KHVyaSk7XG5cdFx0aWYocHJlZml4ID09IG51bGwpe1xuXHRcdFx0Ly9pc0hUTUwgPSB0cnVlO1xuXHRcdFx0dmFyIHZpc2libGVOYW1lc3BhY2VzPVtcblx0XHRcdHtuYW1lc3BhY2U6dXJpLHByZWZpeDpudWxsfVxuXHRcdFx0Ly97bmFtZXNwYWNlOnVyaSxwcmVmaXg6Jyd9XG5cdFx0XHRdXG5cdFx0fVxuXHR9XG5cdHNlcmlhbGl6ZVRvU3RyaW5nKHRoaXMsYnVmLGlzSHRtbCxub2RlRmlsdGVyLHZpc2libGVOYW1lc3BhY2VzKTtcblx0Ly9jb25zb2xlLmxvZygnIyMjJyx0aGlzLm5vZGVUeXBlLHVyaSxwcmVmaXgsYnVmLmpvaW4oJycpKVxuXHRyZXR1cm4gYnVmLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBuZWVkTmFtZXNwYWNlRGVmaW5lKG5vZGUsIGlzSFRNTCwgdmlzaWJsZU5hbWVzcGFjZXMpIHtcblx0dmFyIHByZWZpeCA9IG5vZGUucHJlZml4IHx8ICcnO1xuXHR2YXIgdXJpID0gbm9kZS5uYW1lc3BhY2VVUkk7XG5cdC8vIEFjY29yZGluZyB0byBbTmFtZXNwYWNlcyBpbiBYTUwgMS4wXShodHRwczovL3d3dy53My5vcmcvVFIvUkVDLXhtbC1uYW1lcy8jbnMtdXNpbmcpICxcblx0Ly8gYW5kIG1vcmUgc3BlY2lmaWNhbGx5IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLW5hbWVzLyNuc2MtTm9QcmVmaXhVbmRlY2wgOlxuXHQvLyA+IEluIGEgbmFtZXNwYWNlIGRlY2xhcmF0aW9uIGZvciBhIHByZWZpeCBbLi4uXSwgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBNVVNUIE5PVCBiZSBlbXB0eS5cblx0Ly8gaW4gYSBzaW1pbGFyIG1hbm5lciBbTmFtZXNwYWNlcyBpbiBYTUwgMS4xXShodHRwczovL3d3dy53My5vcmcvVFIveG1sLW5hbWVzMTEvI25zLXVzaW5nKVxuXHQvLyBhbmQgbW9yZSBzcGVjaWZpY2FsbHkgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC1uYW1lczExLyNuc2MtTlNEZWNsYXJlZCA6XG5cdC8vID4gWy4uLl0gRnVydGhlcm1vcmUsIHRoZSBhdHRyaWJ1dGUgdmFsdWUgWy4uLl0gbXVzdCBub3QgYmUgYW4gZW1wdHkgc3RyaW5nLlxuXHQvLyBzbyBzZXJpYWxpemluZyBlbXB0eSBuYW1lc3BhY2UgdmFsdWUgbGlrZSB4bWxuczpkcz1cIlwiIHdvdWxkIHByb2R1Y2UgYW4gaW52YWxpZCBYTUwgZG9jdW1lbnQuXG5cdGlmICghdXJpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmIChwcmVmaXggPT09IFwieG1sXCIgJiYgdXJpID09PSBOQU1FU1BBQ0UuWE1MIHx8IHVyaSA9PT0gTkFNRVNQQUNFLlhNTE5TKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGkgPSB2aXNpYmxlTmFtZXNwYWNlcy5sZW5ndGhcblx0d2hpbGUgKGktLSkge1xuXHRcdHZhciBucyA9IHZpc2libGVOYW1lc3BhY2VzW2ldO1xuXHRcdC8vIGdldCBuYW1lc3BhY2UgcHJlZml4XG5cdFx0aWYgKG5zLnByZWZpeCA9PT0gcHJlZml4KSB7XG5cdFx0XHRyZXR1cm4gbnMubmFtZXNwYWNlICE9PSB1cmk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBXZWxsLWZvcm1lZCBjb25zdHJhaW50OiBObyA8IGluIEF0dHJpYnV0ZSBWYWx1ZXNcbiAqID4gVGhlIHJlcGxhY2VtZW50IHRleHQgb2YgYW55IGVudGl0eSByZWZlcnJlZCB0byBkaXJlY3RseSBvciBpbmRpcmVjdGx5XG4gKiA+IGluIGFuIGF0dHJpYnV0ZSB2YWx1ZSBtdXN0IG5vdCBjb250YWluIGEgPC5cbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbDExLyNDbGVhbkF0dHJWYWxzXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwxMS8jTlQtQXR0VmFsdWVcbiAqXG4gKiBMaXRlcmFsIHdoaXRlc3BhY2Ugb3RoZXIgdGhhbiBzcGFjZSB0aGF0IGFwcGVhciBpbiBhdHRyaWJ1dGUgdmFsdWVzXG4gKiBhcmUgc2VyaWFsaXplZCBhcyB0aGVpciBlbnRpdHkgcmVmZXJlbmNlcywgc28gdGhleSB3aWxsIGJlIHByZXNlcnZlZC5cbiAqIChJbiBjb250cmFzdCB0byB3aGl0ZXNwYWNlIGxpdGVyYWxzIGluIHRoZSBpbnB1dCB3aGljaCBhcmUgbm9ybWFsaXplZCB0byBzcGFjZXMpXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwxMS8jQVZOb3JtYWxpemVcbiAqIEBzZWUgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0RPTS1QYXJzaW5nLyNzZXJpYWxpemluZy1hbi1lbGVtZW50LXMtYXR0cmlidXRlc1xuICovXG5mdW5jdGlvbiBhZGRTZXJpYWxpemVkQXR0cmlidXRlKGJ1ZiwgcXVhbGlmaWVkTmFtZSwgdmFsdWUpIHtcblx0YnVmLnB1c2goJyAnLCBxdWFsaWZpZWROYW1lLCAnPVwiJywgdmFsdWUucmVwbGFjZSgvWzw+JlwiXFx0XFxuXFxyXS9nLCBfeG1sRW5jb2RlciksICdcIicpXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVRvU3RyaW5nKG5vZGUsYnVmLGlzSFRNTCxub2RlRmlsdGVyLHZpc2libGVOYW1lc3BhY2VzKXtcblx0aWYgKCF2aXNpYmxlTmFtZXNwYWNlcykge1xuXHRcdHZpc2libGVOYW1lc3BhY2VzID0gW107XG5cdH1cblxuXHRpZihub2RlRmlsdGVyKXtcblx0XHRub2RlID0gbm9kZUZpbHRlcihub2RlKTtcblx0XHRpZihub2RlKXtcblx0XHRcdGlmKHR5cGVvZiBub2RlID09ICdzdHJpbmcnKXtcblx0XHRcdFx0YnVmLnB1c2gobm9kZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly9idWYuc29ydC5hcHBseShhdHRycywgYXR0cmlidXRlU29ydGVyKTtcblx0fVxuXG5cdHN3aXRjaChub2RlLm5vZGVUeXBlKXtcblx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0dmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzO1xuXHRcdHZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG5cdFx0dmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuXHRcdHZhciBub2RlTmFtZSA9IG5vZGUudGFnTmFtZTtcblxuXHRcdGlzSFRNTCA9IE5BTUVTUEFDRS5pc0hUTUwobm9kZS5uYW1lc3BhY2VVUkkpIHx8IGlzSFRNTFxuXG5cdFx0dmFyIHByZWZpeGVkTm9kZU5hbWUgPSBub2RlTmFtZVxuXHRcdGlmICghaXNIVE1MICYmICFub2RlLnByZWZpeCAmJiBub2RlLm5hbWVzcGFjZVVSSSkge1xuXHRcdFx0dmFyIGRlZmF1bHROU1xuXHRcdFx0Ly8gbG9va3VwIGN1cnJlbnQgZGVmYXVsdCBucyBmcm9tIGB4bWxuc2AgYXR0cmlidXRlXG5cdFx0XHRmb3IgKHZhciBhaSA9IDA7IGFpIDwgYXR0cnMubGVuZ3RoOyBhaSsrKSB7XG5cdFx0XHRcdGlmIChhdHRycy5pdGVtKGFpKS5uYW1lID09PSAneG1sbnMnKSB7XG5cdFx0XHRcdFx0ZGVmYXVsdE5TID0gYXR0cnMuaXRlbShhaSkudmFsdWVcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWRlZmF1bHROUykge1xuXHRcdFx0XHQvLyBsb29rdXAgY3VycmVudCBkZWZhdWx0IG5zIGluIHZpc2libGVOYW1lc3BhY2VzXG5cdFx0XHRcdGZvciAodmFyIG5zaSA9IHZpc2libGVOYW1lc3BhY2VzLmxlbmd0aCAtIDE7IG5zaSA+PSAwOyBuc2ktLSkge1xuXHRcdFx0XHRcdHZhciBuYW1lc3BhY2UgPSB2aXNpYmxlTmFtZXNwYWNlc1tuc2ldXG5cdFx0XHRcdFx0aWYgKG5hbWVzcGFjZS5wcmVmaXggPT09ICcnICYmIG5hbWVzcGFjZS5uYW1lc3BhY2UgPT09IG5vZGUubmFtZXNwYWNlVVJJKSB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0TlMgPSBuYW1lc3BhY2UubmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRlZmF1bHROUyAhPT0gbm9kZS5uYW1lc3BhY2VVUkkpIHtcblx0XHRcdFx0Zm9yICh2YXIgbnNpID0gdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoIC0gMTsgbnNpID49IDA7IG5zaS0tKSB7XG5cdFx0XHRcdFx0dmFyIG5hbWVzcGFjZSA9IHZpc2libGVOYW1lc3BhY2VzW25zaV1cblx0XHRcdFx0XHRpZiAobmFtZXNwYWNlLm5hbWVzcGFjZSA9PT0gbm9kZS5uYW1lc3BhY2VVUkkpIHtcblx0XHRcdFx0XHRcdGlmIChuYW1lc3BhY2UucHJlZml4KSB7XG5cdFx0XHRcdFx0XHRcdHByZWZpeGVkTm9kZU5hbWUgPSBuYW1lc3BhY2UucHJlZml4ICsgJzonICsgbm9kZU5hbWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YnVmLnB1c2goJzwnLCBwcmVmaXhlZE5vZGVOYW1lKTtcblxuXHRcdGZvcih2YXIgaT0wO2k8bGVuO2krKyl7XG5cdFx0XHQvLyBhZGQgbmFtZXNwYWNlcyBmb3IgYXR0cmlidXRlc1xuXHRcdFx0dmFyIGF0dHIgPSBhdHRycy5pdGVtKGkpO1xuXHRcdFx0aWYgKGF0dHIucHJlZml4ID09ICd4bWxucycpIHtcblx0XHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogYXR0ci5sb2NhbE5hbWUsIG5hbWVzcGFjZTogYXR0ci52YWx1ZSB9KTtcblx0XHRcdH1lbHNlIGlmKGF0dHIubm9kZU5hbWUgPT0gJ3htbG5zJyl7XG5cdFx0XHRcdHZpc2libGVOYW1lc3BhY2VzLnB1c2goeyBwcmVmaXg6ICcnLCBuYW1lc3BhY2U6IGF0dHIudmFsdWUgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yKHZhciBpPTA7aTxsZW47aSsrKXtcblx0XHRcdHZhciBhdHRyID0gYXR0cnMuaXRlbShpKTtcblx0XHRcdGlmIChuZWVkTmFtZXNwYWNlRGVmaW5lKGF0dHIsaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykpIHtcblx0XHRcdFx0dmFyIHByZWZpeCA9IGF0dHIucHJlZml4fHwnJztcblx0XHRcdFx0dmFyIHVyaSA9IGF0dHIubmFtZXNwYWNlVVJJO1xuXHRcdFx0XHRhZGRTZXJpYWxpemVkQXR0cmlidXRlKGJ1ZiwgcHJlZml4ID8gJ3htbG5zOicgKyBwcmVmaXggOiBcInhtbG5zXCIsIHVyaSk7XG5cdFx0XHRcdHZpc2libGVOYW1lc3BhY2VzLnB1c2goeyBwcmVmaXg6IHByZWZpeCwgbmFtZXNwYWNlOnVyaSB9KTtcblx0XHRcdH1cblx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKGF0dHIsYnVmLGlzSFRNTCxub2RlRmlsdGVyLHZpc2libGVOYW1lc3BhY2VzKTtcblx0XHR9XG5cblx0XHQvLyBhZGQgbmFtZXNwYWNlIGZvciBjdXJyZW50IG5vZGVcblx0XHRpZiAobm9kZU5hbWUgPT09IHByZWZpeGVkTm9kZU5hbWUgJiYgbmVlZE5hbWVzcGFjZURlZmluZShub2RlLCBpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSkge1xuXHRcdFx0dmFyIHByZWZpeCA9IG5vZGUucHJlZml4fHwnJztcblx0XHRcdHZhciB1cmkgPSBub2RlLm5hbWVzcGFjZVVSSTtcblx0XHRcdGFkZFNlcmlhbGl6ZWRBdHRyaWJ1dGUoYnVmLCBwcmVmaXggPyAneG1sbnM6JyArIHByZWZpeCA6IFwieG1sbnNcIiwgdXJpKTtcblx0XHRcdHZpc2libGVOYW1lc3BhY2VzLnB1c2goeyBwcmVmaXg6IHByZWZpeCwgbmFtZXNwYWNlOnVyaSB9KTtcblx0XHR9XG5cblx0XHRpZihjaGlsZCB8fCBpc0hUTUwgJiYgIS9eKD86bWV0YXxsaW5rfGltZ3xicnxocnxpbnB1dCkkL2kudGVzdChub2RlTmFtZSkpe1xuXHRcdFx0YnVmLnB1c2goJz4nKTtcblx0XHRcdC8vaWYgaXMgY2RhdGEgY2hpbGQgbm9kZVxuXHRcdFx0aWYoaXNIVE1MICYmIC9ec2NyaXB0JC9pLnRlc3Qobm9kZU5hbWUpKXtcblx0XHRcdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0XHRcdGlmKGNoaWxkLmRhdGEpe1xuXHRcdFx0XHRcdFx0YnVmLnB1c2goY2hpbGQuZGF0YSk7XG5cdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRzZXJpYWxpemVUb1N0cmluZyhjaGlsZCwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzLnNsaWNlKCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHR9ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRcdFx0c2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcy5zbGljZSgpKTtcblx0XHRcdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRidWYucHVzaCgnPC8nLHByZWZpeGVkTm9kZU5hbWUsJz4nKTtcblx0XHR9ZWxzZXtcblx0XHRcdGJ1Zi5wdXNoKCcvPicpO1xuXHRcdH1cblx0XHQvLyByZW1vdmUgYWRkZWQgdmlzaWJsZSBuYW1lc3BhY2VzXG5cdFx0Ly92aXNpYmxlTmFtZXNwYWNlcy5sZW5ndGggPSBzdGFydFZpc2libGVOYW1lc3BhY2VzO1xuXHRcdHJldHVybjtcblx0Y2FzZSBET0NVTUVOVF9OT0RFOlxuXHRjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG5cdFx0dmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuXHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMuc2xpY2UoKSk7XG5cdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdGNhc2UgQVRUUklCVVRFX05PREU6XG5cdFx0cmV0dXJuIGFkZFNlcmlhbGl6ZWRBdHRyaWJ1dGUoYnVmLCBub2RlLm5hbWUsIG5vZGUudmFsdWUpO1xuXHRjYXNlIFRFWFRfTk9ERTpcblx0XHQvKipcblx0XHQgKiBUaGUgYW1wZXJzYW5kIGNoYXJhY3RlciAoJikgYW5kIHRoZSBsZWZ0IGFuZ2xlIGJyYWNrZXQgKDwpIG11c3Qgbm90IGFwcGVhciBpbiB0aGVpciBsaXRlcmFsIGZvcm0sXG5cdFx0ICogZXhjZXB0IHdoZW4gdXNlZCBhcyBtYXJrdXAgZGVsaW1pdGVycywgb3Igd2l0aGluIGEgY29tbWVudCwgYSBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBvciBhIENEQVRBIHNlY3Rpb24uXG5cdFx0ICogSWYgdGhleSBhcmUgbmVlZGVkIGVsc2V3aGVyZSwgdGhleSBtdXN0IGJlIGVzY2FwZWQgdXNpbmcgZWl0aGVyIG51bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgb3IgdGhlIHN0cmluZ3Ncblx0XHQgKiBgJmFtcDtgIGFuZCBgJmx0O2AgcmVzcGVjdGl2ZWx5LlxuXHRcdCAqIFRoZSByaWdodCBhbmdsZSBicmFja2V0ICg+KSBtYXkgYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIHN0cmluZyBcIiAmZ3Q7IFwiLCBhbmQgbXVzdCwgZm9yIGNvbXBhdGliaWxpdHksXG5cdFx0ICogYmUgZXNjYXBlZCB1c2luZyBlaXRoZXIgYCZndDtgIG9yIGEgY2hhcmFjdGVyIHJlZmVyZW5jZSB3aGVuIGl0IGFwcGVhcnMgaW4gdGhlIHN0cmluZyBgXV0+YCBpbiBjb250ZW50LFxuXHRcdCAqIHdoZW4gdGhhdCBzdHJpbmcgaXMgbm90IG1hcmtpbmcgdGhlIGVuZCBvZiBhIENEQVRBIHNlY3Rpb24uXG5cdFx0ICpcblx0XHQgKiBJbiB0aGUgY29udGVudCBvZiBlbGVtZW50cywgY2hhcmFjdGVyIGRhdGEgaXMgYW55IHN0cmluZyBvZiBjaGFyYWN0ZXJzXG5cdFx0ICogd2hpY2ggZG9lcyBub3QgY29udGFpbiB0aGUgc3RhcnQtZGVsaW1pdGVyIG9mIGFueSBtYXJrdXBcblx0XHQgKiBhbmQgZG9lcyBub3QgaW5jbHVkZSB0aGUgQ0RBVEEtc2VjdGlvbi1jbG9zZSBkZWxpbWl0ZXIsIGBdXT5gLlxuXHRcdCAqXG5cdFx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLyNOVC1DaGFyRGF0YVxuXHRcdCAqIEBzZWUgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0RPTS1QYXJzaW5nLyN4bWwtc2VyaWFsaXppbmctYS10ZXh0LW5vZGVcblx0XHQgKi9cblx0XHRyZXR1cm4gYnVmLnB1c2gobm9kZS5kYXRhXG5cdFx0XHQucmVwbGFjZSgvWzwmPl0vZyxfeG1sRW5jb2Rlcilcblx0XHQpO1xuXHRjYXNlIENEQVRBX1NFQ1RJT05fTk9ERTpcblx0XHRyZXR1cm4gYnVmLnB1c2goICc8IVtDREFUQVsnLG5vZGUuZGF0YSwnXV0+Jyk7XG5cdGNhc2UgQ09NTUVOVF9OT0RFOlxuXHRcdHJldHVybiBidWYucHVzaCggXCI8IS0tXCIsbm9kZS5kYXRhLFwiLS0+XCIpO1xuXHRjYXNlIERPQ1VNRU5UX1RZUEVfTk9ERTpcblx0XHR2YXIgcHViaWQgPSBub2RlLnB1YmxpY0lkO1xuXHRcdHZhciBzeXNpZCA9IG5vZGUuc3lzdGVtSWQ7XG5cdFx0YnVmLnB1c2goJzwhRE9DVFlQRSAnLG5vZGUubmFtZSk7XG5cdFx0aWYocHViaWQpe1xuXHRcdFx0YnVmLnB1c2goJyBQVUJMSUMgJywgcHViaWQpO1xuXHRcdFx0aWYgKHN5c2lkICYmIHN5c2lkIT0nLicpIHtcblx0XHRcdFx0YnVmLnB1c2goJyAnLCBzeXNpZCk7XG5cdFx0XHR9XG5cdFx0XHRidWYucHVzaCgnPicpO1xuXHRcdH1lbHNlIGlmKHN5c2lkICYmIHN5c2lkIT0nLicpe1xuXHRcdFx0YnVmLnB1c2goJyBTWVNURU0gJywgc3lzaWQsICc+Jyk7XG5cdFx0fWVsc2V7XG5cdFx0XHR2YXIgc3ViID0gbm9kZS5pbnRlcm5hbFN1YnNldDtcblx0XHRcdGlmKHN1Yil7XG5cdFx0XHRcdGJ1Zi5wdXNoKFwiIFtcIixzdWIsXCJdXCIpO1xuXHRcdFx0fVxuXHRcdFx0YnVmLnB1c2goXCI+XCIpO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdGNhc2UgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFOlxuXHRcdHJldHVybiBidWYucHVzaCggXCI8P1wiLG5vZGUudGFyZ2V0LFwiIFwiLG5vZGUuZGF0YSxcIj8+XCIpO1xuXHRjYXNlIEVOVElUWV9SRUZFUkVOQ0VfTk9ERTpcblx0XHRyZXR1cm4gYnVmLnB1c2goICcmJyxub2RlLm5vZGVOYW1lLCc7Jyk7XG5cdC8vY2FzZSBFTlRJVFlfTk9ERTpcblx0Ly9jYXNlIE5PVEFUSU9OX05PREU6XG5cdGRlZmF1bHQ6XG5cdFx0YnVmLnB1c2goJz8/Jyxub2RlLm5vZGVOYW1lKTtcblx0fVxufVxuZnVuY3Rpb24gaW1wb3J0Tm9kZShkb2Msbm9kZSxkZWVwKXtcblx0dmFyIG5vZGUyO1xuXHRzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcblx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0bm9kZTIgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7XG5cdFx0bm9kZTIub3duZXJEb2N1bWVudCA9IGRvYztcblx0XHQvL3ZhciBhdHRycyA9IG5vZGUyLmF0dHJpYnV0ZXM7XG5cdFx0Ly92YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuXHRcdC8vZm9yKHZhciBpPTA7aTxsZW47aSsrKXtcblx0XHRcdC8vbm9kZTIuc2V0QXR0cmlidXRlTm9kZU5TKGltcG9ydE5vZGUoZG9jLGF0dHJzLml0ZW0oaSksZGVlcCkpO1xuXHRcdC8vfVxuXHRjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG5cdFx0YnJlYWs7XG5cdGNhc2UgQVRUUklCVVRFX05PREU6XG5cdFx0ZGVlcCA9IHRydWU7XG5cdFx0YnJlYWs7XG5cdC8vY2FzZSBFTlRJVFlfUkVGRVJFTkNFX05PREU6XG5cdC8vY2FzZSBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU6XG5cdC8vLy9jYXNlIFRFWFRfTk9ERTpcblx0Ly9jYXNlIENEQVRBX1NFQ1RJT05fTk9ERTpcblx0Ly9jYXNlIENPTU1FTlRfTk9ERTpcblx0Ly9cdGRlZXAgPSBmYWxzZTtcblx0Ly9cdGJyZWFrO1xuXHQvL2Nhc2UgRE9DVU1FTlRfTk9ERTpcblx0Ly9jYXNlIERPQ1VNRU5UX1RZUEVfTk9ERTpcblx0Ly9jYW5ub3QgYmUgaW1wb3J0ZWQuXG5cdC8vY2FzZSBFTlRJVFlfTk9ERTpcblx0Ly9jYXNlIE5PVEFUSU9OX05PREXvvJpcblx0Ly9jYW4gbm90IGhpdCBpbiBsZXZlbDNcblx0Ly9kZWZhdWx0OnRocm93IGU7XG5cdH1cblx0aWYoIW5vZGUyKXtcblx0XHRub2RlMiA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTsvL2ZhbHNlXG5cdH1cblx0bm9kZTIub3duZXJEb2N1bWVudCA9IGRvYztcblx0bm9kZTIucGFyZW50Tm9kZSA9IG51bGw7XG5cdGlmKGRlZXApe1xuXHRcdHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRub2RlMi5hcHBlbmRDaGlsZChpbXBvcnROb2RlKGRvYyxjaGlsZCxkZWVwKSk7XG5cdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbm9kZTI7XG59XG4vL1xuLy92YXIgX3JlbGF0aW9uTWFwID0ge2ZpcnN0Q2hpbGQ6MSxsYXN0Q2hpbGQ6MSxwcmV2aW91c1NpYmxpbmc6MSxuZXh0U2libGluZzoxLFxuLy9cdFx0XHRcdFx0YXR0cmlidXRlczoxLGNoaWxkTm9kZXM6MSxwYXJlbnROb2RlOjEsZG9jdW1lbnRFbGVtZW50OjEsZG9jdHlwZSx9O1xuZnVuY3Rpb24gY2xvbmVOb2RlKGRvYyxub2RlLGRlZXApe1xuXHR2YXIgbm9kZTIgPSBuZXcgbm9kZS5jb25zdHJ1Y3RvcigpO1xuXHRmb3IgKHZhciBuIGluIG5vZGUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsIG4pKSB7XG5cdFx0XHR2YXIgdiA9IG5vZGVbbl07XG5cdFx0XHRpZiAodHlwZW9mIHYgIT0gXCJvYmplY3RcIikge1xuXHRcdFx0XHRpZiAodiAhPSBub2RlMltuXSkge1xuXHRcdFx0XHRcdG5vZGUyW25dID0gdjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRpZihub2RlLmNoaWxkTm9kZXMpe1xuXHRcdG5vZGUyLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0fVxuXHRub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuXHRzd2l0Y2ggKG5vZGUyLm5vZGVUeXBlKSB7XG5cdGNhc2UgRUxFTUVOVF9OT0RFOlxuXHRcdHZhciBhdHRyc1x0PSBub2RlLmF0dHJpYnV0ZXM7XG5cdFx0dmFyIGF0dHJzMlx0PSBub2RlMi5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuXHRcdHZhciBsZW4gPSBhdHRycy5sZW5ndGhcblx0XHRhdHRyczIuX293bmVyRWxlbWVudCA9IG5vZGUyO1xuXHRcdGZvcih2YXIgaT0wO2k8bGVuO2krKyl7XG5cdFx0XHRub2RlMi5zZXRBdHRyaWJ1dGVOb2RlKGNsb25lTm9kZShkb2MsYXR0cnMuaXRlbShpKSx0cnVlKSk7XG5cdFx0fVxuXHRcdGJyZWFrOztcblx0Y2FzZSBBVFRSSUJVVEVfTk9ERTpcblx0XHRkZWVwID0gdHJ1ZTtcblx0fVxuXHRpZihkZWVwKXtcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0bm9kZTIuYXBwZW5kQ2hpbGQoY2xvbmVOb2RlKGRvYyxjaGlsZCxkZWVwKSk7XG5cdFx0XHRjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbm9kZTI7XG59XG5cbmZ1bmN0aW9uIF9fc2V0X18ob2JqZWN0LGtleSx2YWx1ZSl7XG5cdG9iamVjdFtrZXldID0gdmFsdWVcbn1cbi8vZG8gZHluYW1pY1xudHJ5e1xuXHRpZihPYmplY3QuZGVmaW5lUHJvcGVydHkpe1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaXZlTm9kZUxpc3QucHJvdG90eXBlLCdsZW5ndGgnLHtcblx0XHRcdGdldDpmdW5jdGlvbigpe1xuXHRcdFx0XHRfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG5cdFx0XHRcdHJldHVybiB0aGlzLiQkbGVuZ3RoO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLCd0ZXh0Q29udGVudCcse1xuXHRcdFx0Z2V0OmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJldHVybiBnZXRUZXh0Q29udGVudCh0aGlzKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldDpmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0c3dpdGNoKHRoaXMubm9kZVR5cGUpe1xuXHRcdFx0XHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHRcdFx0Y2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuXHRcdFx0XHRcdHdoaWxlKHRoaXMuZmlyc3RDaGlsZCl7XG5cdFx0XHRcdFx0XHR0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZmlyc3RDaGlsZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKGRhdGEgfHwgU3RyaW5nKGRhdGEpKXtcblx0XHRcdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPSBkYXRhO1xuXHRcdFx0XHRcdHRoaXMubm9kZVZhbHVlID0gZGF0YTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRmdW5jdGlvbiBnZXRUZXh0Q29udGVudChub2RlKXtcblx0XHRcdHN3aXRjaChub2RlLm5vZGVUeXBlKXtcblx0XHRcdGNhc2UgRUxFTUVOVF9OT0RFOlxuXHRcdFx0Y2FzZSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuXHRcdFx0XHR2YXIgYnVmID0gW107XG5cdFx0XHRcdG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdHdoaWxlKG5vZGUpe1xuXHRcdFx0XHRcdGlmKG5vZGUubm9kZVR5cGUhPT03ICYmIG5vZGUubm9kZVR5cGUgIT09OCl7XG5cdFx0XHRcdFx0XHRidWYucHVzaChnZXRUZXh0Q29udGVudChub2RlKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBidWYuam9pbignJyk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gbm9kZS5ub2RlVmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0X19zZXRfXyA9IGZ1bmN0aW9uKG9iamVjdCxrZXksdmFsdWUpe1xuXHRcdFx0Ly9jb25zb2xlLmxvZyh2YWx1ZSlcblx0XHRcdG9iamVjdFsnJCQnK2tleV0gPSB2YWx1ZVxuXHRcdH1cblx0fVxufWNhdGNoKGUpey8vaWU4XG59XG5cbi8vaWYodHlwZW9mIHJlcXVpcmUgPT0gJ2Z1bmN0aW9uJyl7XG5cdGV4cG9ydHMuRG9jdW1lbnRUeXBlID0gRG9jdW1lbnRUeXBlO1xuXHRleHBvcnRzLkRPTUV4Y2VwdGlvbiA9IERPTUV4Y2VwdGlvbjtcblx0ZXhwb3J0cy5ET01JbXBsZW1lbnRhdGlvbiA9IERPTUltcGxlbWVudGF0aW9uO1xuXHRleHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuXHRleHBvcnRzLk5vZGUgPSBOb2RlO1xuXHRleHBvcnRzLk5vZGVMaXN0ID0gTm9kZUxpc3Q7XG5cdGV4cG9ydHMuWE1MU2VyaWFsaXplciA9IFhNTFNlcmlhbGl6ZXI7XG4vL31cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZyZWV6ZSA9IHJlcXVpcmUoJy4vY29udmVudGlvbnMnKS5mcmVlemU7XG5cbi8qKlxuICogVGhlIGVudGl0aWVzIHRoYXQgYXJlIHByZWRlZmluZWQgaW4gZXZlcnkgWE1MIGRvY3VtZW50LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDYvUkVDLXhtbDExLTIwMDYwODE2LyNzZWMtcHJlZGVmaW5lZC1lbnQgVzNDIFhNTCAxLjFcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLXhtbC0yMDA4MTEyNi8jc2VjLXByZWRlZmluZWQtZW50IFczQyBYTUwgMS4wXG4gKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfWE1MX2FuZF9IVE1MX2NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlcyNQcmVkZWZpbmVkX2VudGl0aWVzX2luX1hNTCBXaWtpcGVkaWFcbiAqL1xuZXhwb3J0cy5YTUxfRU5USVRJRVMgPSBmcmVlemUoe1xuXHRhbXA6ICcmJyxcblx0YXBvczogXCInXCIsXG5cdGd0OiAnPicsXG5cdGx0OiAnPCcsXG5cdHF1b3Q6ICdcIicsXG59KTtcblxuLyoqXG4gKiBBIG1hcCBvZiBhbGwgZW50aXRpZXMgdGhhdCBhcmUgZGV0ZWN0ZWQgaW4gYW4gSFRNTCBkb2N1bWVudC5cbiAqIFRoZXkgY29udGFpbiBhbGwgZW50cmllcyBmcm9tIGBYTUxfRU5USVRJRVNgLlxuICpcbiAqIEBzZWUgWE1MX0VOVElUSUVTXG4gKiBAc2VlIERPTVBhcnNlci5wYXJzZUZyb21TdHJpbmdcbiAqIEBzZWUgRE9NSW1wbGVtZW50YXRpb24ucHJvdG90eXBlLmNyZWF0ZUhUTUxEb2N1bWVudFxuICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNuYW1lZC1jaGFyYWN0ZXItcmVmZXJlbmNlcyBXSEFUV0cgSFRNTCg1KSBTcGVjXG4gKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvZW50aXRpZXMuanNvbiBKU09OXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtZW50aXR5LW5hbWVzLyBXM0MgWE1MIEVudGl0eSBOYW1lc1xuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDQvc2dtbC9lbnRpdGllcy5odG1sIFczQyBIVE1MNC9TR01MXG4gKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfWE1MX2FuZF9IVE1MX2NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlcyNDaGFyYWN0ZXJfZW50aXR5X3JlZmVyZW5jZXNfaW5fSFRNTCBXaWtpcGVkaWEgKEhUTUwpXG4gKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfWE1MX2FuZF9IVE1MX2NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlcyNFbnRpdGllc19yZXByZXNlbnRpbmdfc3BlY2lhbF9jaGFyYWN0ZXJzX2luX1hIVE1MIFdpa3BlZGlhIChYSFRNTClcbiAqL1xuZXhwb3J0cy5IVE1MX0VOVElUSUVTID0gZnJlZXplKHtcblx0QWFjdXRlOiAnXFx1MDBDMScsXG5cdGFhY3V0ZTogJ1xcdTAwRTEnLFxuXHRBYnJldmU6ICdcXHUwMTAyJyxcblx0YWJyZXZlOiAnXFx1MDEwMycsXG5cdGFjOiAnXFx1MjIzRScsXG5cdGFjZDogJ1xcdTIyM0YnLFxuXHRhY0U6ICdcXHUyMjNFXFx1MDMzMycsXG5cdEFjaXJjOiAnXFx1MDBDMicsXG5cdGFjaXJjOiAnXFx1MDBFMicsXG5cdGFjdXRlOiAnXFx1MDBCNCcsXG5cdEFjeTogJ1xcdTA0MTAnLFxuXHRhY3k6ICdcXHUwNDMwJyxcblx0QUVsaWc6ICdcXHUwMEM2Jyxcblx0YWVsaWc6ICdcXHUwMEU2Jyxcblx0YWY6ICdcXHUyMDYxJyxcblx0QWZyOiAnXFx1RDgzNVxcdUREMDQnLFxuXHRhZnI6ICdcXHVEODM1XFx1REQxRScsXG5cdEFncmF2ZTogJ1xcdTAwQzAnLFxuXHRhZ3JhdmU6ICdcXHUwMEUwJyxcblx0YWxlZnN5bTogJ1xcdTIxMzUnLFxuXHRhbGVwaDogJ1xcdTIxMzUnLFxuXHRBbHBoYTogJ1xcdTAzOTEnLFxuXHRhbHBoYTogJ1xcdTAzQjEnLFxuXHRBbWFjcjogJ1xcdTAxMDAnLFxuXHRhbWFjcjogJ1xcdTAxMDEnLFxuXHRhbWFsZzogJ1xcdTJBM0YnLFxuXHRBTVA6ICdcXHUwMDI2Jyxcblx0YW1wOiAnXFx1MDAyNicsXG5cdEFuZDogJ1xcdTJBNTMnLFxuXHRhbmQ6ICdcXHUyMjI3Jyxcblx0YW5kYW5kOiAnXFx1MkE1NScsXG5cdGFuZGQ6ICdcXHUyQTVDJyxcblx0YW5kc2xvcGU6ICdcXHUyQTU4Jyxcblx0YW5kdjogJ1xcdTJBNUEnLFxuXHRhbmc6ICdcXHUyMjIwJyxcblx0YW5nZTogJ1xcdTI5QTQnLFxuXHRhbmdsZTogJ1xcdTIyMjAnLFxuXHRhbmdtc2Q6ICdcXHUyMjIxJyxcblx0YW5nbXNkYWE6ICdcXHUyOUE4Jyxcblx0YW5nbXNkYWI6ICdcXHUyOUE5Jyxcblx0YW5nbXNkYWM6ICdcXHUyOUFBJyxcblx0YW5nbXNkYWQ6ICdcXHUyOUFCJyxcblx0YW5nbXNkYWU6ICdcXHUyOUFDJyxcblx0YW5nbXNkYWY6ICdcXHUyOUFEJyxcblx0YW5nbXNkYWc6ICdcXHUyOUFFJyxcblx0YW5nbXNkYWg6ICdcXHUyOUFGJyxcblx0YW5ncnQ6ICdcXHUyMjFGJyxcblx0YW5ncnR2YjogJ1xcdTIyQkUnLFxuXHRhbmdydHZiZDogJ1xcdTI5OUQnLFxuXHRhbmdzcGg6ICdcXHUyMjIyJyxcblx0YW5nc3Q6ICdcXHUwMEM1Jyxcblx0YW5nemFycjogJ1xcdTIzN0MnLFxuXHRBb2dvbjogJ1xcdTAxMDQnLFxuXHRhb2dvbjogJ1xcdTAxMDUnLFxuXHRBb3BmOiAnXFx1RDgzNVxcdUREMzgnLFxuXHRhb3BmOiAnXFx1RDgzNVxcdURENTInLFxuXHRhcDogJ1xcdTIyNDgnLFxuXHRhcGFjaXI6ICdcXHUyQTZGJyxcblx0YXBFOiAnXFx1MkE3MCcsXG5cdGFwZTogJ1xcdTIyNEEnLFxuXHRhcGlkOiAnXFx1MjI0QicsXG5cdGFwb3M6ICdcXHUwMDI3Jyxcblx0QXBwbHlGdW5jdGlvbjogJ1xcdTIwNjEnLFxuXHRhcHByb3g6ICdcXHUyMjQ4Jyxcblx0YXBwcm94ZXE6ICdcXHUyMjRBJyxcblx0QXJpbmc6ICdcXHUwMEM1Jyxcblx0YXJpbmc6ICdcXHUwMEU1Jyxcblx0QXNjcjogJ1xcdUQ4MzVcXHVEQzlDJyxcblx0YXNjcjogJ1xcdUQ4MzVcXHVEQ0I2Jyxcblx0QXNzaWduOiAnXFx1MjI1NCcsXG5cdGFzdDogJ1xcdTAwMkEnLFxuXHRhc3ltcDogJ1xcdTIyNDgnLFxuXHRhc3ltcGVxOiAnXFx1MjI0RCcsXG5cdEF0aWxkZTogJ1xcdTAwQzMnLFxuXHRhdGlsZGU6ICdcXHUwMEUzJyxcblx0QXVtbDogJ1xcdTAwQzQnLFxuXHRhdW1sOiAnXFx1MDBFNCcsXG5cdGF3Y29uaW50OiAnXFx1MjIzMycsXG5cdGF3aW50OiAnXFx1MkExMScsXG5cdGJhY2tjb25nOiAnXFx1MjI0QycsXG5cdGJhY2tlcHNpbG9uOiAnXFx1MDNGNicsXG5cdGJhY2twcmltZTogJ1xcdTIwMzUnLFxuXHRiYWNrc2ltOiAnXFx1MjIzRCcsXG5cdGJhY2tzaW1lcTogJ1xcdTIyQ0QnLFxuXHRCYWNrc2xhc2g6ICdcXHUyMjE2Jyxcblx0QmFydjogJ1xcdTJBRTcnLFxuXHRiYXJ2ZWU6ICdcXHUyMkJEJyxcblx0QmFyd2VkOiAnXFx1MjMwNicsXG5cdGJhcndlZDogJ1xcdTIzMDUnLFxuXHRiYXJ3ZWRnZTogJ1xcdTIzMDUnLFxuXHRiYnJrOiAnXFx1MjNCNScsXG5cdGJicmt0YnJrOiAnXFx1MjNCNicsXG5cdGJjb25nOiAnXFx1MjI0QycsXG5cdEJjeTogJ1xcdTA0MTEnLFxuXHRiY3k6ICdcXHUwNDMxJyxcblx0YmRxdW86ICdcXHUyMDFFJyxcblx0YmVjYXVzOiAnXFx1MjIzNScsXG5cdEJlY2F1c2U6ICdcXHUyMjM1Jyxcblx0YmVjYXVzZTogJ1xcdTIyMzUnLFxuXHRiZW1wdHl2OiAnXFx1MjlCMCcsXG5cdGJlcHNpOiAnXFx1MDNGNicsXG5cdGJlcm5vdTogJ1xcdTIxMkMnLFxuXHRCZXJub3VsbGlzOiAnXFx1MjEyQycsXG5cdEJldGE6ICdcXHUwMzkyJyxcblx0YmV0YTogJ1xcdTAzQjInLFxuXHRiZXRoOiAnXFx1MjEzNicsXG5cdGJldHdlZW46ICdcXHUyMjZDJyxcblx0QmZyOiAnXFx1RDgzNVxcdUREMDUnLFxuXHRiZnI6ICdcXHVEODM1XFx1REQxRicsXG5cdGJpZ2NhcDogJ1xcdTIyQzInLFxuXHRiaWdjaXJjOiAnXFx1MjVFRicsXG5cdGJpZ2N1cDogJ1xcdTIyQzMnLFxuXHRiaWdvZG90OiAnXFx1MkEwMCcsXG5cdGJpZ29wbHVzOiAnXFx1MkEwMScsXG5cdGJpZ290aW1lczogJ1xcdTJBMDInLFxuXHRiaWdzcWN1cDogJ1xcdTJBMDYnLFxuXHRiaWdzdGFyOiAnXFx1MjYwNScsXG5cdGJpZ3RyaWFuZ2xlZG93bjogJ1xcdTI1QkQnLFxuXHRiaWd0cmlhbmdsZXVwOiAnXFx1MjVCMycsXG5cdGJpZ3VwbHVzOiAnXFx1MkEwNCcsXG5cdGJpZ3ZlZTogJ1xcdTIyQzEnLFxuXHRiaWd3ZWRnZTogJ1xcdTIyQzAnLFxuXHRia2Fyb3c6ICdcXHUyOTBEJyxcblx0YmxhY2tsb3plbmdlOiAnXFx1MjlFQicsXG5cdGJsYWNrc3F1YXJlOiAnXFx1MjVBQScsXG5cdGJsYWNrdHJpYW5nbGU6ICdcXHUyNUI0Jyxcblx0YmxhY2t0cmlhbmdsZWRvd246ICdcXHUyNUJFJyxcblx0YmxhY2t0cmlhbmdsZWxlZnQ6ICdcXHUyNUMyJyxcblx0YmxhY2t0cmlhbmdsZXJpZ2h0OiAnXFx1MjVCOCcsXG5cdGJsYW5rOiAnXFx1MjQyMycsXG5cdGJsazEyOiAnXFx1MjU5MicsXG5cdGJsazE0OiAnXFx1MjU5MScsXG5cdGJsazM0OiAnXFx1MjU5MycsXG5cdGJsb2NrOiAnXFx1MjU4OCcsXG5cdGJuZTogJ1xcdTAwM0RcXHUyMEU1Jyxcblx0Ym5lcXVpdjogJ1xcdTIyNjFcXHUyMEU1Jyxcblx0Yk5vdDogJ1xcdTJBRUQnLFxuXHRibm90OiAnXFx1MjMxMCcsXG5cdEJvcGY6ICdcXHVEODM1XFx1REQzOScsXG5cdGJvcGY6ICdcXHVEODM1XFx1REQ1MycsXG5cdGJvdDogJ1xcdTIyQTUnLFxuXHRib3R0b206ICdcXHUyMkE1Jyxcblx0Ym93dGllOiAnXFx1MjJDOCcsXG5cdGJveGJveDogJ1xcdTI5QzknLFxuXHRib3hETDogJ1xcdTI1NTcnLFxuXHRib3hEbDogJ1xcdTI1NTYnLFxuXHRib3hkTDogJ1xcdTI1NTUnLFxuXHRib3hkbDogJ1xcdTI1MTAnLFxuXHRib3hEUjogJ1xcdTI1NTQnLFxuXHRib3hEcjogJ1xcdTI1NTMnLFxuXHRib3hkUjogJ1xcdTI1NTInLFxuXHRib3hkcjogJ1xcdTI1MEMnLFxuXHRib3hIOiAnXFx1MjU1MCcsXG5cdGJveGg6ICdcXHUyNTAwJyxcblx0Ym94SEQ6ICdcXHUyNTY2Jyxcblx0Ym94SGQ6ICdcXHUyNTY0Jyxcblx0Ym94aEQ6ICdcXHUyNTY1Jyxcblx0Ym94aGQ6ICdcXHUyNTJDJyxcblx0Ym94SFU6ICdcXHUyNTY5Jyxcblx0Ym94SHU6ICdcXHUyNTY3Jyxcblx0Ym94aFU6ICdcXHUyNTY4Jyxcblx0Ym94aHU6ICdcXHUyNTM0Jyxcblx0Ym94bWludXM6ICdcXHUyMjlGJyxcblx0Ym94cGx1czogJ1xcdTIyOUUnLFxuXHRib3h0aW1lczogJ1xcdTIyQTAnLFxuXHRib3hVTDogJ1xcdTI1NUQnLFxuXHRib3hVbDogJ1xcdTI1NUMnLFxuXHRib3h1TDogJ1xcdTI1NUInLFxuXHRib3h1bDogJ1xcdTI1MTgnLFxuXHRib3hVUjogJ1xcdTI1NUEnLFxuXHRib3hVcjogJ1xcdTI1NTknLFxuXHRib3h1UjogJ1xcdTI1NTgnLFxuXHRib3h1cjogJ1xcdTI1MTQnLFxuXHRib3hWOiAnXFx1MjU1MScsXG5cdGJveHY6ICdcXHUyNTAyJyxcblx0Ym94Vkg6ICdcXHUyNTZDJyxcblx0Ym94Vmg6ICdcXHUyNTZCJyxcblx0Ym94dkg6ICdcXHUyNTZBJyxcblx0Ym94dmg6ICdcXHUyNTNDJyxcblx0Ym94Vkw6ICdcXHUyNTYzJyxcblx0Ym94Vmw6ICdcXHUyNTYyJyxcblx0Ym94dkw6ICdcXHUyNTYxJyxcblx0Ym94dmw6ICdcXHUyNTI0Jyxcblx0Ym94VlI6ICdcXHUyNTYwJyxcblx0Ym94VnI6ICdcXHUyNTVGJyxcblx0Ym94dlI6ICdcXHUyNTVFJyxcblx0Ym94dnI6ICdcXHUyNTFDJyxcblx0YnByaW1lOiAnXFx1MjAzNScsXG5cdEJyZXZlOiAnXFx1MDJEOCcsXG5cdGJyZXZlOiAnXFx1MDJEOCcsXG5cdGJydmJhcjogJ1xcdTAwQTYnLFxuXHRCc2NyOiAnXFx1MjEyQycsXG5cdGJzY3I6ICdcXHVEODM1XFx1RENCNycsXG5cdGJzZW1pOiAnXFx1MjA0RicsXG5cdGJzaW06ICdcXHUyMjNEJyxcblx0YnNpbWU6ICdcXHUyMkNEJyxcblx0YnNvbDogJ1xcdTAwNUMnLFxuXHRic29sYjogJ1xcdTI5QzUnLFxuXHRic29saHN1YjogJ1xcdTI3QzgnLFxuXHRidWxsOiAnXFx1MjAyMicsXG5cdGJ1bGxldDogJ1xcdTIwMjInLFxuXHRidW1wOiAnXFx1MjI0RScsXG5cdGJ1bXBFOiAnXFx1MkFBRScsXG5cdGJ1bXBlOiAnXFx1MjI0RicsXG5cdEJ1bXBlcTogJ1xcdTIyNEUnLFxuXHRidW1wZXE6ICdcXHUyMjRGJyxcblx0Q2FjdXRlOiAnXFx1MDEwNicsXG5cdGNhY3V0ZTogJ1xcdTAxMDcnLFxuXHRDYXA6ICdcXHUyMkQyJyxcblx0Y2FwOiAnXFx1MjIyOScsXG5cdGNhcGFuZDogJ1xcdTJBNDQnLFxuXHRjYXBicmN1cDogJ1xcdTJBNDknLFxuXHRjYXBjYXA6ICdcXHUyQTRCJyxcblx0Y2FwY3VwOiAnXFx1MkE0NycsXG5cdGNhcGRvdDogJ1xcdTJBNDAnLFxuXHRDYXBpdGFsRGlmZmVyZW50aWFsRDogJ1xcdTIxNDUnLFxuXHRjYXBzOiAnXFx1MjIyOVxcdUZFMDAnLFxuXHRjYXJldDogJ1xcdTIwNDEnLFxuXHRjYXJvbjogJ1xcdTAyQzcnLFxuXHRDYXlsZXlzOiAnXFx1MjEyRCcsXG5cdGNjYXBzOiAnXFx1MkE0RCcsXG5cdENjYXJvbjogJ1xcdTAxMEMnLFxuXHRjY2Fyb246ICdcXHUwMTBEJyxcblx0Q2NlZGlsOiAnXFx1MDBDNycsXG5cdGNjZWRpbDogJ1xcdTAwRTcnLFxuXHRDY2lyYzogJ1xcdTAxMDgnLFxuXHRjY2lyYzogJ1xcdTAxMDknLFxuXHRDY29uaW50OiAnXFx1MjIzMCcsXG5cdGNjdXBzOiAnXFx1MkE0QycsXG5cdGNjdXBzc206ICdcXHUyQTUwJyxcblx0Q2RvdDogJ1xcdTAxMEEnLFxuXHRjZG90OiAnXFx1MDEwQicsXG5cdGNlZGlsOiAnXFx1MDBCOCcsXG5cdENlZGlsbGE6ICdcXHUwMEI4Jyxcblx0Y2VtcHR5djogJ1xcdTI5QjInLFxuXHRjZW50OiAnXFx1MDBBMicsXG5cdENlbnRlckRvdDogJ1xcdTAwQjcnLFxuXHRjZW50ZXJkb3Q6ICdcXHUwMEI3Jyxcblx0Q2ZyOiAnXFx1MjEyRCcsXG5cdGNmcjogJ1xcdUQ4MzVcXHVERDIwJyxcblx0Q0hjeTogJ1xcdTA0MjcnLFxuXHRjaGN5OiAnXFx1MDQ0NycsXG5cdGNoZWNrOiAnXFx1MjcxMycsXG5cdGNoZWNrbWFyazogJ1xcdTI3MTMnLFxuXHRDaGk6ICdcXHUwM0E3Jyxcblx0Y2hpOiAnXFx1MDNDNycsXG5cdGNpcjogJ1xcdTI1Q0InLFxuXHRjaXJjOiAnXFx1MDJDNicsXG5cdGNpcmNlcTogJ1xcdTIyNTcnLFxuXHRjaXJjbGVhcnJvd2xlZnQ6ICdcXHUyMUJBJyxcblx0Y2lyY2xlYXJyb3dyaWdodDogJ1xcdTIxQkInLFxuXHRjaXJjbGVkYXN0OiAnXFx1MjI5QicsXG5cdGNpcmNsZWRjaXJjOiAnXFx1MjI5QScsXG5cdGNpcmNsZWRkYXNoOiAnXFx1MjI5RCcsXG5cdENpcmNsZURvdDogJ1xcdTIyOTknLFxuXHRjaXJjbGVkUjogJ1xcdTAwQUUnLFxuXHRjaXJjbGVkUzogJ1xcdTI0QzgnLFxuXHRDaXJjbGVNaW51czogJ1xcdTIyOTYnLFxuXHRDaXJjbGVQbHVzOiAnXFx1MjI5NScsXG5cdENpcmNsZVRpbWVzOiAnXFx1MjI5NycsXG5cdGNpckU6ICdcXHUyOUMzJyxcblx0Y2lyZTogJ1xcdTIyNTcnLFxuXHRjaXJmbmludDogJ1xcdTJBMTAnLFxuXHRjaXJtaWQ6ICdcXHUyQUVGJyxcblx0Y2lyc2NpcjogJ1xcdTI5QzInLFxuXHRDbG9ja3dpc2VDb250b3VySW50ZWdyYWw6ICdcXHUyMjMyJyxcblx0Q2xvc2VDdXJseURvdWJsZVF1b3RlOiAnXFx1MjAxRCcsXG5cdENsb3NlQ3VybHlRdW90ZTogJ1xcdTIwMTknLFxuXHRjbHViczogJ1xcdTI2NjMnLFxuXHRjbHVic3VpdDogJ1xcdTI2NjMnLFxuXHRDb2xvbjogJ1xcdTIyMzcnLFxuXHRjb2xvbjogJ1xcdTAwM0EnLFxuXHRDb2xvbmU6ICdcXHUyQTc0Jyxcblx0Y29sb25lOiAnXFx1MjI1NCcsXG5cdGNvbG9uZXE6ICdcXHUyMjU0Jyxcblx0Y29tbWE6ICdcXHUwMDJDJyxcblx0Y29tbWF0OiAnXFx1MDA0MCcsXG5cdGNvbXA6ICdcXHUyMjAxJyxcblx0Y29tcGZuOiAnXFx1MjIxOCcsXG5cdGNvbXBsZW1lbnQ6ICdcXHUyMjAxJyxcblx0Y29tcGxleGVzOiAnXFx1MjEwMicsXG5cdGNvbmc6ICdcXHUyMjQ1Jyxcblx0Y29uZ2RvdDogJ1xcdTJBNkQnLFxuXHRDb25ncnVlbnQ6ICdcXHUyMjYxJyxcblx0Q29uaW50OiAnXFx1MjIyRicsXG5cdGNvbmludDogJ1xcdTIyMkUnLFxuXHRDb250b3VySW50ZWdyYWw6ICdcXHUyMjJFJyxcblx0Q29wZjogJ1xcdTIxMDInLFxuXHRjb3BmOiAnXFx1RDgzNVxcdURENTQnLFxuXHRjb3Byb2Q6ICdcXHUyMjEwJyxcblx0Q29wcm9kdWN0OiAnXFx1MjIxMCcsXG5cdENPUFk6ICdcXHUwMEE5Jyxcblx0Y29weTogJ1xcdTAwQTknLFxuXHRjb3B5c3I6ICdcXHUyMTE3Jyxcblx0Q291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDogJ1xcdTIyMzMnLFxuXHRjcmFycjogJ1xcdTIxQjUnLFxuXHRDcm9zczogJ1xcdTJBMkYnLFxuXHRjcm9zczogJ1xcdTI3MTcnLFxuXHRDc2NyOiAnXFx1RDgzNVxcdURDOUUnLFxuXHRjc2NyOiAnXFx1RDgzNVxcdURDQjgnLFxuXHRjc3ViOiAnXFx1MkFDRicsXG5cdGNzdWJlOiAnXFx1MkFEMScsXG5cdGNzdXA6ICdcXHUyQUQwJyxcblx0Y3N1cGU6ICdcXHUyQUQyJyxcblx0Y3Rkb3Q6ICdcXHUyMkVGJyxcblx0Y3VkYXJybDogJ1xcdTI5MzgnLFxuXHRjdWRhcnJyOiAnXFx1MjkzNScsXG5cdGN1ZXByOiAnXFx1MjJERScsXG5cdGN1ZXNjOiAnXFx1MjJERicsXG5cdGN1bGFycjogJ1xcdTIxQjYnLFxuXHRjdWxhcnJwOiAnXFx1MjkzRCcsXG5cdEN1cDogJ1xcdTIyRDMnLFxuXHRjdXA6ICdcXHUyMjJBJyxcblx0Y3VwYnJjYXA6ICdcXHUyQTQ4Jyxcblx0Q3VwQ2FwOiAnXFx1MjI0RCcsXG5cdGN1cGNhcDogJ1xcdTJBNDYnLFxuXHRjdXBjdXA6ICdcXHUyQTRBJyxcblx0Y3VwZG90OiAnXFx1MjI4RCcsXG5cdGN1cG9yOiAnXFx1MkE0NScsXG5cdGN1cHM6ICdcXHUyMjJBXFx1RkUwMCcsXG5cdGN1cmFycjogJ1xcdTIxQjcnLFxuXHRjdXJhcnJtOiAnXFx1MjkzQycsXG5cdGN1cmx5ZXFwcmVjOiAnXFx1MjJERScsXG5cdGN1cmx5ZXFzdWNjOiAnXFx1MjJERicsXG5cdGN1cmx5dmVlOiAnXFx1MjJDRScsXG5cdGN1cmx5d2VkZ2U6ICdcXHUyMkNGJyxcblx0Y3VycmVuOiAnXFx1MDBBNCcsXG5cdGN1cnZlYXJyb3dsZWZ0OiAnXFx1MjFCNicsXG5cdGN1cnZlYXJyb3dyaWdodDogJ1xcdTIxQjcnLFxuXHRjdXZlZTogJ1xcdTIyQ0UnLFxuXHRjdXdlZDogJ1xcdTIyQ0YnLFxuXHRjd2NvbmludDogJ1xcdTIyMzInLFxuXHRjd2ludDogJ1xcdTIyMzEnLFxuXHRjeWxjdHk6ICdcXHUyMzJEJyxcblx0RGFnZ2VyOiAnXFx1MjAyMScsXG5cdGRhZ2dlcjogJ1xcdTIwMjAnLFxuXHRkYWxldGg6ICdcXHUyMTM4Jyxcblx0RGFycjogJ1xcdTIxQTEnLFxuXHRkQXJyOiAnXFx1MjFEMycsXG5cdGRhcnI6ICdcXHUyMTkzJyxcblx0ZGFzaDogJ1xcdTIwMTAnLFxuXHREYXNodjogJ1xcdTJBRTQnLFxuXHRkYXNodjogJ1xcdTIyQTMnLFxuXHRkYmthcm93OiAnXFx1MjkwRicsXG5cdGRibGFjOiAnXFx1MDJERCcsXG5cdERjYXJvbjogJ1xcdTAxMEUnLFxuXHRkY2Fyb246ICdcXHUwMTBGJyxcblx0RGN5OiAnXFx1MDQxNCcsXG5cdGRjeTogJ1xcdTA0MzQnLFxuXHRERDogJ1xcdTIxNDUnLFxuXHRkZDogJ1xcdTIxNDYnLFxuXHRkZGFnZ2VyOiAnXFx1MjAyMScsXG5cdGRkYXJyOiAnXFx1MjFDQScsXG5cdEREb3RyYWhkOiAnXFx1MjkxMScsXG5cdGRkb3RzZXE6ICdcXHUyQTc3Jyxcblx0ZGVnOiAnXFx1MDBCMCcsXG5cdERlbDogJ1xcdTIyMDcnLFxuXHREZWx0YTogJ1xcdTAzOTQnLFxuXHRkZWx0YTogJ1xcdTAzQjQnLFxuXHRkZW1wdHl2OiAnXFx1MjlCMScsXG5cdGRmaXNodDogJ1xcdTI5N0YnLFxuXHREZnI6ICdcXHVEODM1XFx1REQwNycsXG5cdGRmcjogJ1xcdUQ4MzVcXHVERDIxJyxcblx0ZEhhcjogJ1xcdTI5NjUnLFxuXHRkaGFybDogJ1xcdTIxQzMnLFxuXHRkaGFycjogJ1xcdTIxQzInLFxuXHREaWFjcml0aWNhbEFjdXRlOiAnXFx1MDBCNCcsXG5cdERpYWNyaXRpY2FsRG90OiAnXFx1MDJEOScsXG5cdERpYWNyaXRpY2FsRG91YmxlQWN1dGU6ICdcXHUwMkREJyxcblx0RGlhY3JpdGljYWxHcmF2ZTogJ1xcdTAwNjAnLFxuXHREaWFjcml0aWNhbFRpbGRlOiAnXFx1MDJEQycsXG5cdGRpYW06ICdcXHUyMkM0Jyxcblx0RGlhbW9uZDogJ1xcdTIyQzQnLFxuXHRkaWFtb25kOiAnXFx1MjJDNCcsXG5cdGRpYW1vbmRzdWl0OiAnXFx1MjY2NicsXG5cdGRpYW1zOiAnXFx1MjY2NicsXG5cdGRpZTogJ1xcdTAwQTgnLFxuXHREaWZmZXJlbnRpYWxEOiAnXFx1MjE0NicsXG5cdGRpZ2FtbWE6ICdcXHUwM0REJyxcblx0ZGlzaW46ICdcXHUyMkYyJyxcblx0ZGl2OiAnXFx1MDBGNycsXG5cdGRpdmlkZTogJ1xcdTAwRjcnLFxuXHRkaXZpZGVvbnRpbWVzOiAnXFx1MjJDNycsXG5cdGRpdm9ueDogJ1xcdTIyQzcnLFxuXHRESmN5OiAnXFx1MDQwMicsXG5cdGRqY3k6ICdcXHUwNDUyJyxcblx0ZGxjb3JuOiAnXFx1MjMxRScsXG5cdGRsY3JvcDogJ1xcdTIzMEQnLFxuXHRkb2xsYXI6ICdcXHUwMDI0Jyxcblx0RG9wZjogJ1xcdUQ4MzVcXHVERDNCJyxcblx0ZG9wZjogJ1xcdUQ4MzVcXHVERDU1Jyxcblx0RG90OiAnXFx1MDBBOCcsXG5cdGRvdDogJ1xcdTAyRDknLFxuXHREb3REb3Q6ICdcXHUyMERDJyxcblx0ZG90ZXE6ICdcXHUyMjUwJyxcblx0ZG90ZXFkb3Q6ICdcXHUyMjUxJyxcblx0RG90RXF1YWw6ICdcXHUyMjUwJyxcblx0ZG90bWludXM6ICdcXHUyMjM4Jyxcblx0ZG90cGx1czogJ1xcdTIyMTQnLFxuXHRkb3RzcXVhcmU6ICdcXHUyMkExJyxcblx0ZG91YmxlYmFyd2VkZ2U6ICdcXHUyMzA2Jyxcblx0RG91YmxlQ29udG91ckludGVncmFsOiAnXFx1MjIyRicsXG5cdERvdWJsZURvdDogJ1xcdTAwQTgnLFxuXHREb3VibGVEb3duQXJyb3c6ICdcXHUyMUQzJyxcblx0RG91YmxlTGVmdEFycm93OiAnXFx1MjFEMCcsXG5cdERvdWJsZUxlZnRSaWdodEFycm93OiAnXFx1MjFENCcsXG5cdERvdWJsZUxlZnRUZWU6ICdcXHUyQUU0Jyxcblx0RG91YmxlTG9uZ0xlZnRBcnJvdzogJ1xcdTI3RjgnLFxuXHREb3VibGVMb25nTGVmdFJpZ2h0QXJyb3c6ICdcXHUyN0ZBJyxcblx0RG91YmxlTG9uZ1JpZ2h0QXJyb3c6ICdcXHUyN0Y5Jyxcblx0RG91YmxlUmlnaHRBcnJvdzogJ1xcdTIxRDInLFxuXHREb3VibGVSaWdodFRlZTogJ1xcdTIyQTgnLFxuXHREb3VibGVVcEFycm93OiAnXFx1MjFEMScsXG5cdERvdWJsZVVwRG93bkFycm93OiAnXFx1MjFENScsXG5cdERvdWJsZVZlcnRpY2FsQmFyOiAnXFx1MjIyNScsXG5cdERvd25BcnJvdzogJ1xcdTIxOTMnLFxuXHREb3duYXJyb3c6ICdcXHUyMUQzJyxcblx0ZG93bmFycm93OiAnXFx1MjE5MycsXG5cdERvd25BcnJvd0JhcjogJ1xcdTI5MTMnLFxuXHREb3duQXJyb3dVcEFycm93OiAnXFx1MjFGNScsXG5cdERvd25CcmV2ZTogJ1xcdTAzMTEnLFxuXHRkb3duZG93bmFycm93czogJ1xcdTIxQ0EnLFxuXHRkb3duaGFycG9vbmxlZnQ6ICdcXHUyMUMzJyxcblx0ZG93bmhhcnBvb25yaWdodDogJ1xcdTIxQzInLFxuXHREb3duTGVmdFJpZ2h0VmVjdG9yOiAnXFx1Mjk1MCcsXG5cdERvd25MZWZ0VGVlVmVjdG9yOiAnXFx1Mjk1RScsXG5cdERvd25MZWZ0VmVjdG9yOiAnXFx1MjFCRCcsXG5cdERvd25MZWZ0VmVjdG9yQmFyOiAnXFx1Mjk1NicsXG5cdERvd25SaWdodFRlZVZlY3RvcjogJ1xcdTI5NUYnLFxuXHREb3duUmlnaHRWZWN0b3I6ICdcXHUyMUMxJyxcblx0RG93blJpZ2h0VmVjdG9yQmFyOiAnXFx1Mjk1NycsXG5cdERvd25UZWU6ICdcXHUyMkE0Jyxcblx0RG93blRlZUFycm93OiAnXFx1MjFBNycsXG5cdGRyYmthcm93OiAnXFx1MjkxMCcsXG5cdGRyY29ybjogJ1xcdTIzMUYnLFxuXHRkcmNyb3A6ICdcXHUyMzBDJyxcblx0RHNjcjogJ1xcdUQ4MzVcXHVEQzlGJyxcblx0ZHNjcjogJ1xcdUQ4MzVcXHVEQ0I5Jyxcblx0RFNjeTogJ1xcdTA0MDUnLFxuXHRkc2N5OiAnXFx1MDQ1NScsXG5cdGRzb2w6ICdcXHUyOUY2Jyxcblx0RHN0cm9rOiAnXFx1MDExMCcsXG5cdGRzdHJvazogJ1xcdTAxMTEnLFxuXHRkdGRvdDogJ1xcdTIyRjEnLFxuXHRkdHJpOiAnXFx1MjVCRicsXG5cdGR0cmlmOiAnXFx1MjVCRScsXG5cdGR1YXJyOiAnXFx1MjFGNScsXG5cdGR1aGFyOiAnXFx1Mjk2RicsXG5cdGR3YW5nbGU6ICdcXHUyOUE2Jyxcblx0RFpjeTogJ1xcdTA0MEYnLFxuXHRkemN5OiAnXFx1MDQ1RicsXG5cdGR6aWdyYXJyOiAnXFx1MjdGRicsXG5cdEVhY3V0ZTogJ1xcdTAwQzknLFxuXHRlYWN1dGU6ICdcXHUwMEU5Jyxcblx0ZWFzdGVyOiAnXFx1MkE2RScsXG5cdEVjYXJvbjogJ1xcdTAxMUEnLFxuXHRlY2Fyb246ICdcXHUwMTFCJyxcblx0ZWNpcjogJ1xcdTIyNTYnLFxuXHRFY2lyYzogJ1xcdTAwQ0EnLFxuXHRlY2lyYzogJ1xcdTAwRUEnLFxuXHRlY29sb246ICdcXHUyMjU1Jyxcblx0RWN5OiAnXFx1MDQyRCcsXG5cdGVjeTogJ1xcdTA0NEQnLFxuXHRlRERvdDogJ1xcdTJBNzcnLFxuXHRFZG90OiAnXFx1MDExNicsXG5cdGVEb3Q6ICdcXHUyMjUxJyxcblx0ZWRvdDogJ1xcdTAxMTcnLFxuXHRlZTogJ1xcdTIxNDcnLFxuXHRlZkRvdDogJ1xcdTIyNTInLFxuXHRFZnI6ICdcXHVEODM1XFx1REQwOCcsXG5cdGVmcjogJ1xcdUQ4MzVcXHVERDIyJyxcblx0ZWc6ICdcXHUyQTlBJyxcblx0RWdyYXZlOiAnXFx1MDBDOCcsXG5cdGVncmF2ZTogJ1xcdTAwRTgnLFxuXHRlZ3M6ICdcXHUyQTk2Jyxcblx0ZWdzZG90OiAnXFx1MkE5OCcsXG5cdGVsOiAnXFx1MkE5OScsXG5cdEVsZW1lbnQ6ICdcXHUyMjA4Jyxcblx0ZWxpbnRlcnM6ICdcXHUyM0U3Jyxcblx0ZWxsOiAnXFx1MjExMycsXG5cdGVsczogJ1xcdTJBOTUnLFxuXHRlbHNkb3Q6ICdcXHUyQTk3Jyxcblx0RW1hY3I6ICdcXHUwMTEyJyxcblx0ZW1hY3I6ICdcXHUwMTEzJyxcblx0ZW1wdHk6ICdcXHUyMjA1Jyxcblx0ZW1wdHlzZXQ6ICdcXHUyMjA1Jyxcblx0RW1wdHlTbWFsbFNxdWFyZTogJ1xcdTI1RkInLFxuXHRlbXB0eXY6ICdcXHUyMjA1Jyxcblx0RW1wdHlWZXJ5U21hbGxTcXVhcmU6ICdcXHUyNUFCJyxcblx0ZW1zcDogJ1xcdTIwMDMnLFxuXHRlbXNwMTM6ICdcXHUyMDA0Jyxcblx0ZW1zcDE0OiAnXFx1MjAwNScsXG5cdEVORzogJ1xcdTAxNEEnLFxuXHRlbmc6ICdcXHUwMTRCJyxcblx0ZW5zcDogJ1xcdTIwMDInLFxuXHRFb2dvbjogJ1xcdTAxMTgnLFxuXHRlb2dvbjogJ1xcdTAxMTknLFxuXHRFb3BmOiAnXFx1RDgzNVxcdUREM0MnLFxuXHRlb3BmOiAnXFx1RDgzNVxcdURENTYnLFxuXHRlcGFyOiAnXFx1MjJENScsXG5cdGVwYXJzbDogJ1xcdTI5RTMnLFxuXHRlcGx1czogJ1xcdTJBNzEnLFxuXHRlcHNpOiAnXFx1MDNCNScsXG5cdEVwc2lsb246ICdcXHUwMzk1Jyxcblx0ZXBzaWxvbjogJ1xcdTAzQjUnLFxuXHRlcHNpdjogJ1xcdTAzRjUnLFxuXHRlcWNpcmM6ICdcXHUyMjU2Jyxcblx0ZXFjb2xvbjogJ1xcdTIyNTUnLFxuXHRlcXNpbTogJ1xcdTIyNDInLFxuXHRlcXNsYW50Z3RyOiAnXFx1MkE5NicsXG5cdGVxc2xhbnRsZXNzOiAnXFx1MkE5NScsXG5cdEVxdWFsOiAnXFx1MkE3NScsXG5cdGVxdWFsczogJ1xcdTAwM0QnLFxuXHRFcXVhbFRpbGRlOiAnXFx1MjI0MicsXG5cdGVxdWVzdDogJ1xcdTIyNUYnLFxuXHRFcXVpbGlicml1bTogJ1xcdTIxQ0MnLFxuXHRlcXVpdjogJ1xcdTIyNjEnLFxuXHRlcXVpdkREOiAnXFx1MkE3OCcsXG5cdGVxdnBhcnNsOiAnXFx1MjlFNScsXG5cdGVyYXJyOiAnXFx1Mjk3MScsXG5cdGVyRG90OiAnXFx1MjI1MycsXG5cdEVzY3I6ICdcXHUyMTMwJyxcblx0ZXNjcjogJ1xcdTIxMkYnLFxuXHRlc2RvdDogJ1xcdTIyNTAnLFxuXHRFc2ltOiAnXFx1MkE3MycsXG5cdGVzaW06ICdcXHUyMjQyJyxcblx0RXRhOiAnXFx1MDM5NycsXG5cdGV0YTogJ1xcdTAzQjcnLFxuXHRFVEg6ICdcXHUwMEQwJyxcblx0ZXRoOiAnXFx1MDBGMCcsXG5cdEV1bWw6ICdcXHUwMENCJyxcblx0ZXVtbDogJ1xcdTAwRUInLFxuXHRldXJvOiAnXFx1MjBBQycsXG5cdGV4Y2w6ICdcXHUwMDIxJyxcblx0ZXhpc3Q6ICdcXHUyMjAzJyxcblx0RXhpc3RzOiAnXFx1MjIwMycsXG5cdGV4cGVjdGF0aW9uOiAnXFx1MjEzMCcsXG5cdEV4cG9uZW50aWFsRTogJ1xcdTIxNDcnLFxuXHRleHBvbmVudGlhbGU6ICdcXHUyMTQ3Jyxcblx0ZmFsbGluZ2RvdHNlcTogJ1xcdTIyNTInLFxuXHRGY3k6ICdcXHUwNDI0Jyxcblx0ZmN5OiAnXFx1MDQ0NCcsXG5cdGZlbWFsZTogJ1xcdTI2NDAnLFxuXHRmZmlsaWc6ICdcXHVGQjAzJyxcblx0ZmZsaWc6ICdcXHVGQjAwJyxcblx0ZmZsbGlnOiAnXFx1RkIwNCcsXG5cdEZmcjogJ1xcdUQ4MzVcXHVERDA5Jyxcblx0ZmZyOiAnXFx1RDgzNVxcdUREMjMnLFxuXHRmaWxpZzogJ1xcdUZCMDEnLFxuXHRGaWxsZWRTbWFsbFNxdWFyZTogJ1xcdTI1RkMnLFxuXHRGaWxsZWRWZXJ5U21hbGxTcXVhcmU6ICdcXHUyNUFBJyxcblx0ZmpsaWc6ICdcXHUwMDY2XFx1MDA2QScsXG5cdGZsYXQ6ICdcXHUyNjZEJyxcblx0ZmxsaWc6ICdcXHVGQjAyJyxcblx0Zmx0bnM6ICdcXHUyNUIxJyxcblx0Zm5vZjogJ1xcdTAxOTInLFxuXHRGb3BmOiAnXFx1RDgzNVxcdUREM0QnLFxuXHRmb3BmOiAnXFx1RDgzNVxcdURENTcnLFxuXHRGb3JBbGw6ICdcXHUyMjAwJyxcblx0Zm9yYWxsOiAnXFx1MjIwMCcsXG5cdGZvcms6ICdcXHUyMkQ0Jyxcblx0Zm9ya3Y6ICdcXHUyQUQ5Jyxcblx0Rm91cmllcnRyZjogJ1xcdTIxMzEnLFxuXHRmcGFydGludDogJ1xcdTJBMEQnLFxuXHRmcmFjMTI6ICdcXHUwMEJEJyxcblx0ZnJhYzEzOiAnXFx1MjE1MycsXG5cdGZyYWMxNDogJ1xcdTAwQkMnLFxuXHRmcmFjMTU6ICdcXHUyMTU1Jyxcblx0ZnJhYzE2OiAnXFx1MjE1OScsXG5cdGZyYWMxODogJ1xcdTIxNUInLFxuXHRmcmFjMjM6ICdcXHUyMTU0Jyxcblx0ZnJhYzI1OiAnXFx1MjE1NicsXG5cdGZyYWMzNDogJ1xcdTAwQkUnLFxuXHRmcmFjMzU6ICdcXHUyMTU3Jyxcblx0ZnJhYzM4OiAnXFx1MjE1QycsXG5cdGZyYWM0NTogJ1xcdTIxNTgnLFxuXHRmcmFjNTY6ICdcXHUyMTVBJyxcblx0ZnJhYzU4OiAnXFx1MjE1RCcsXG5cdGZyYWM3ODogJ1xcdTIxNUUnLFxuXHRmcmFzbDogJ1xcdTIwNDQnLFxuXHRmcm93bjogJ1xcdTIzMjInLFxuXHRGc2NyOiAnXFx1MjEzMScsXG5cdGZzY3I6ICdcXHVEODM1XFx1RENCQicsXG5cdGdhY3V0ZTogJ1xcdTAxRjUnLFxuXHRHYW1tYTogJ1xcdTAzOTMnLFxuXHRnYW1tYTogJ1xcdTAzQjMnLFxuXHRHYW1tYWQ6ICdcXHUwM0RDJyxcblx0Z2FtbWFkOiAnXFx1MDNERCcsXG5cdGdhcDogJ1xcdTJBODYnLFxuXHRHYnJldmU6ICdcXHUwMTFFJyxcblx0Z2JyZXZlOiAnXFx1MDExRicsXG5cdEdjZWRpbDogJ1xcdTAxMjInLFxuXHRHY2lyYzogJ1xcdTAxMUMnLFxuXHRnY2lyYzogJ1xcdTAxMUQnLFxuXHRHY3k6ICdcXHUwNDEzJyxcblx0Z2N5OiAnXFx1MDQzMycsXG5cdEdkb3Q6ICdcXHUwMTIwJyxcblx0Z2RvdDogJ1xcdTAxMjEnLFxuXHRnRTogJ1xcdTIyNjcnLFxuXHRnZTogJ1xcdTIyNjUnLFxuXHRnRWw6ICdcXHUyQThDJyxcblx0Z2VsOiAnXFx1MjJEQicsXG5cdGdlcTogJ1xcdTIyNjUnLFxuXHRnZXFxOiAnXFx1MjI2NycsXG5cdGdlcXNsYW50OiAnXFx1MkE3RScsXG5cdGdlczogJ1xcdTJBN0UnLFxuXHRnZXNjYzogJ1xcdTJBQTknLFxuXHRnZXNkb3Q6ICdcXHUyQTgwJyxcblx0Z2VzZG90bzogJ1xcdTJBODInLFxuXHRnZXNkb3RvbDogJ1xcdTJBODQnLFxuXHRnZXNsOiAnXFx1MjJEQlxcdUZFMDAnLFxuXHRnZXNsZXM6ICdcXHUyQTk0Jyxcblx0R2ZyOiAnXFx1RDgzNVxcdUREMEEnLFxuXHRnZnI6ICdcXHVEODM1XFx1REQyNCcsXG5cdEdnOiAnXFx1MjJEOScsXG5cdGdnOiAnXFx1MjI2QicsXG5cdGdnZzogJ1xcdTIyRDknLFxuXHRnaW1lbDogJ1xcdTIxMzcnLFxuXHRHSmN5OiAnXFx1MDQwMycsXG5cdGdqY3k6ICdcXHUwNDUzJyxcblx0Z2w6ICdcXHUyMjc3Jyxcblx0Z2xhOiAnXFx1MkFBNScsXG5cdGdsRTogJ1xcdTJBOTInLFxuXHRnbGo6ICdcXHUyQUE0Jyxcblx0Z25hcDogJ1xcdTJBOEEnLFxuXHRnbmFwcHJveDogJ1xcdTJBOEEnLFxuXHRnbkU6ICdcXHUyMjY5Jyxcblx0Z25lOiAnXFx1MkE4OCcsXG5cdGduZXE6ICdcXHUyQTg4Jyxcblx0Z25lcXE6ICdcXHUyMjY5Jyxcblx0Z25zaW06ICdcXHUyMkU3Jyxcblx0R29wZjogJ1xcdUQ4MzVcXHVERDNFJyxcblx0Z29wZjogJ1xcdUQ4MzVcXHVERDU4Jyxcblx0Z3JhdmU6ICdcXHUwMDYwJyxcblx0R3JlYXRlckVxdWFsOiAnXFx1MjI2NScsXG5cdEdyZWF0ZXJFcXVhbExlc3M6ICdcXHUyMkRCJyxcblx0R3JlYXRlckZ1bGxFcXVhbDogJ1xcdTIyNjcnLFxuXHRHcmVhdGVyR3JlYXRlcjogJ1xcdTJBQTInLFxuXHRHcmVhdGVyTGVzczogJ1xcdTIyNzcnLFxuXHRHcmVhdGVyU2xhbnRFcXVhbDogJ1xcdTJBN0UnLFxuXHRHcmVhdGVyVGlsZGU6ICdcXHUyMjczJyxcblx0R3NjcjogJ1xcdUQ4MzVcXHVEQ0EyJyxcblx0Z3NjcjogJ1xcdTIxMEEnLFxuXHRnc2ltOiAnXFx1MjI3MycsXG5cdGdzaW1lOiAnXFx1MkE4RScsXG5cdGdzaW1sOiAnXFx1MkE5MCcsXG5cdEd0OiAnXFx1MjI2QicsXG5cdEdUOiAnXFx1MDAzRScsXG5cdGd0OiAnXFx1MDAzRScsXG5cdGd0Y2M6ICdcXHUyQUE3Jyxcblx0Z3RjaXI6ICdcXHUyQTdBJyxcblx0Z3Rkb3Q6ICdcXHUyMkQ3Jyxcblx0Z3RsUGFyOiAnXFx1Mjk5NScsXG5cdGd0cXVlc3Q6ICdcXHUyQTdDJyxcblx0Z3RyYXBwcm94OiAnXFx1MkE4NicsXG5cdGd0cmFycjogJ1xcdTI5NzgnLFxuXHRndHJkb3Q6ICdcXHUyMkQ3Jyxcblx0Z3RyZXFsZXNzOiAnXFx1MjJEQicsXG5cdGd0cmVxcWxlc3M6ICdcXHUyQThDJyxcblx0Z3RybGVzczogJ1xcdTIyNzcnLFxuXHRndHJzaW06ICdcXHUyMjczJyxcblx0Z3ZlcnRuZXFxOiAnXFx1MjI2OVxcdUZFMDAnLFxuXHRndm5FOiAnXFx1MjI2OVxcdUZFMDAnLFxuXHRIYWNlazogJ1xcdTAyQzcnLFxuXHRoYWlyc3A6ICdcXHUyMDBBJyxcblx0aGFsZjogJ1xcdTAwQkQnLFxuXHRoYW1pbHQ6ICdcXHUyMTBCJyxcblx0SEFSRGN5OiAnXFx1MDQyQScsXG5cdGhhcmRjeTogJ1xcdTA0NEEnLFxuXHRoQXJyOiAnXFx1MjFENCcsXG5cdGhhcnI6ICdcXHUyMTk0Jyxcblx0aGFycmNpcjogJ1xcdTI5NDgnLFxuXHRoYXJydzogJ1xcdTIxQUQnLFxuXHRIYXQ6ICdcXHUwMDVFJyxcblx0aGJhcjogJ1xcdTIxMEYnLFxuXHRIY2lyYzogJ1xcdTAxMjQnLFxuXHRoY2lyYzogJ1xcdTAxMjUnLFxuXHRoZWFydHM6ICdcXHUyNjY1Jyxcblx0aGVhcnRzdWl0OiAnXFx1MjY2NScsXG5cdGhlbGxpcDogJ1xcdTIwMjYnLFxuXHRoZXJjb246ICdcXHUyMkI5Jyxcblx0SGZyOiAnXFx1MjEwQycsXG5cdGhmcjogJ1xcdUQ4MzVcXHVERDI1Jyxcblx0SGlsYmVydFNwYWNlOiAnXFx1MjEwQicsXG5cdGhrc2Vhcm93OiAnXFx1MjkyNScsXG5cdGhrc3dhcm93OiAnXFx1MjkyNicsXG5cdGhvYXJyOiAnXFx1MjFGRicsXG5cdGhvbXRodDogJ1xcdTIyM0InLFxuXHRob29rbGVmdGFycm93OiAnXFx1MjFBOScsXG5cdGhvb2tyaWdodGFycm93OiAnXFx1MjFBQScsXG5cdEhvcGY6ICdcXHUyMTBEJyxcblx0aG9wZjogJ1xcdUQ4MzVcXHVERDU5Jyxcblx0aG9yYmFyOiAnXFx1MjAxNScsXG5cdEhvcml6b250YWxMaW5lOiAnXFx1MjUwMCcsXG5cdEhzY3I6ICdcXHUyMTBCJyxcblx0aHNjcjogJ1xcdUQ4MzVcXHVEQ0JEJyxcblx0aHNsYXNoOiAnXFx1MjEwRicsXG5cdEhzdHJvazogJ1xcdTAxMjYnLFxuXHRoc3Ryb2s6ICdcXHUwMTI3Jyxcblx0SHVtcERvd25IdW1wOiAnXFx1MjI0RScsXG5cdEh1bXBFcXVhbDogJ1xcdTIyNEYnLFxuXHRoeWJ1bGw6ICdcXHUyMDQzJyxcblx0aHlwaGVuOiAnXFx1MjAxMCcsXG5cdElhY3V0ZTogJ1xcdTAwQ0QnLFxuXHRpYWN1dGU6ICdcXHUwMEVEJyxcblx0aWM6ICdcXHUyMDYzJyxcblx0SWNpcmM6ICdcXHUwMENFJyxcblx0aWNpcmM6ICdcXHUwMEVFJyxcblx0SWN5OiAnXFx1MDQxOCcsXG5cdGljeTogJ1xcdTA0MzgnLFxuXHRJZG90OiAnXFx1MDEzMCcsXG5cdElFY3k6ICdcXHUwNDE1Jyxcblx0aWVjeTogJ1xcdTA0MzUnLFxuXHRpZXhjbDogJ1xcdTAwQTEnLFxuXHRpZmY6ICdcXHUyMUQ0Jyxcblx0SWZyOiAnXFx1MjExMScsXG5cdGlmcjogJ1xcdUQ4MzVcXHVERDI2Jyxcblx0SWdyYXZlOiAnXFx1MDBDQycsXG5cdGlncmF2ZTogJ1xcdTAwRUMnLFxuXHRpaTogJ1xcdTIxNDgnLFxuXHRpaWlpbnQ6ICdcXHUyQTBDJyxcblx0aWlpbnQ6ICdcXHUyMjJEJyxcblx0aWluZmluOiAnXFx1MjlEQycsXG5cdGlpb3RhOiAnXFx1MjEyOScsXG5cdElKbGlnOiAnXFx1MDEzMicsXG5cdGlqbGlnOiAnXFx1MDEzMycsXG5cdEltOiAnXFx1MjExMScsXG5cdEltYWNyOiAnXFx1MDEyQScsXG5cdGltYWNyOiAnXFx1MDEyQicsXG5cdGltYWdlOiAnXFx1MjExMScsXG5cdEltYWdpbmFyeUk6ICdcXHUyMTQ4Jyxcblx0aW1hZ2xpbmU6ICdcXHUyMTEwJyxcblx0aW1hZ3BhcnQ6ICdcXHUyMTExJyxcblx0aW1hdGg6ICdcXHUwMTMxJyxcblx0aW1vZjogJ1xcdTIyQjcnLFxuXHRpbXBlZDogJ1xcdTAxQjUnLFxuXHRJbXBsaWVzOiAnXFx1MjFEMicsXG5cdGluOiAnXFx1MjIwOCcsXG5cdGluY2FyZTogJ1xcdTIxMDUnLFxuXHRpbmZpbjogJ1xcdTIyMUUnLFxuXHRpbmZpbnRpZTogJ1xcdTI5REQnLFxuXHRpbm9kb3Q6ICdcXHUwMTMxJyxcblx0SW50OiAnXFx1MjIyQycsXG5cdGludDogJ1xcdTIyMkInLFxuXHRpbnRjYWw6ICdcXHUyMkJBJyxcblx0aW50ZWdlcnM6ICdcXHUyMTI0Jyxcblx0SW50ZWdyYWw6ICdcXHUyMjJCJyxcblx0aW50ZXJjYWw6ICdcXHUyMkJBJyxcblx0SW50ZXJzZWN0aW9uOiAnXFx1MjJDMicsXG5cdGludGxhcmhrOiAnXFx1MkExNycsXG5cdGludHByb2Q6ICdcXHUyQTNDJyxcblx0SW52aXNpYmxlQ29tbWE6ICdcXHUyMDYzJyxcblx0SW52aXNpYmxlVGltZXM6ICdcXHUyMDYyJyxcblx0SU9jeTogJ1xcdTA0MDEnLFxuXHRpb2N5OiAnXFx1MDQ1MScsXG5cdElvZ29uOiAnXFx1MDEyRScsXG5cdGlvZ29uOiAnXFx1MDEyRicsXG5cdElvcGY6ICdcXHVEODM1XFx1REQ0MCcsXG5cdGlvcGY6ICdcXHVEODM1XFx1REQ1QScsXG5cdElvdGE6ICdcXHUwMzk5Jyxcblx0aW90YTogJ1xcdTAzQjknLFxuXHRpcHJvZDogJ1xcdTJBM0MnLFxuXHRpcXVlc3Q6ICdcXHUwMEJGJyxcblx0SXNjcjogJ1xcdTIxMTAnLFxuXHRpc2NyOiAnXFx1RDgzNVxcdURDQkUnLFxuXHRpc2luOiAnXFx1MjIwOCcsXG5cdGlzaW5kb3Q6ICdcXHUyMkY1Jyxcblx0aXNpbkU6ICdcXHUyMkY5Jyxcblx0aXNpbnM6ICdcXHUyMkY0Jyxcblx0aXNpbnN2OiAnXFx1MjJGMycsXG5cdGlzaW52OiAnXFx1MjIwOCcsXG5cdGl0OiAnXFx1MjA2MicsXG5cdEl0aWxkZTogJ1xcdTAxMjgnLFxuXHRpdGlsZGU6ICdcXHUwMTI5Jyxcblx0SXVrY3k6ICdcXHUwNDA2Jyxcblx0aXVrY3k6ICdcXHUwNDU2Jyxcblx0SXVtbDogJ1xcdTAwQ0YnLFxuXHRpdW1sOiAnXFx1MDBFRicsXG5cdEpjaXJjOiAnXFx1MDEzNCcsXG5cdGpjaXJjOiAnXFx1MDEzNScsXG5cdEpjeTogJ1xcdTA0MTknLFxuXHRqY3k6ICdcXHUwNDM5Jyxcblx0SmZyOiAnXFx1RDgzNVxcdUREMEQnLFxuXHRqZnI6ICdcXHVEODM1XFx1REQyNycsXG5cdGptYXRoOiAnXFx1MDIzNycsXG5cdEpvcGY6ICdcXHVEODM1XFx1REQ0MScsXG5cdGpvcGY6ICdcXHVEODM1XFx1REQ1QicsXG5cdEpzY3I6ICdcXHVEODM1XFx1RENBNScsXG5cdGpzY3I6ICdcXHVEODM1XFx1RENCRicsXG5cdEpzZXJjeTogJ1xcdTA0MDgnLFxuXHRqc2VyY3k6ICdcXHUwNDU4Jyxcblx0SnVrY3k6ICdcXHUwNDA0Jyxcblx0anVrY3k6ICdcXHUwNDU0Jyxcblx0S2FwcGE6ICdcXHUwMzlBJyxcblx0a2FwcGE6ICdcXHUwM0JBJyxcblx0a2FwcGF2OiAnXFx1MDNGMCcsXG5cdEtjZWRpbDogJ1xcdTAxMzYnLFxuXHRrY2VkaWw6ICdcXHUwMTM3Jyxcblx0S2N5OiAnXFx1MDQxQScsXG5cdGtjeTogJ1xcdTA0M0EnLFxuXHRLZnI6ICdcXHVEODM1XFx1REQwRScsXG5cdGtmcjogJ1xcdUQ4MzVcXHVERDI4Jyxcblx0a2dyZWVuOiAnXFx1MDEzOCcsXG5cdEtIY3k6ICdcXHUwNDI1Jyxcblx0a2hjeTogJ1xcdTA0NDUnLFxuXHRLSmN5OiAnXFx1MDQwQycsXG5cdGtqY3k6ICdcXHUwNDVDJyxcblx0S29wZjogJ1xcdUQ4MzVcXHVERDQyJyxcblx0a29wZjogJ1xcdUQ4MzVcXHVERDVDJyxcblx0S3NjcjogJ1xcdUQ4MzVcXHVEQ0E2Jyxcblx0a3NjcjogJ1xcdUQ4MzVcXHVEQ0MwJyxcblx0bEFhcnI6ICdcXHUyMURBJyxcblx0TGFjdXRlOiAnXFx1MDEzOScsXG5cdGxhY3V0ZTogJ1xcdTAxM0EnLFxuXHRsYWVtcHR5djogJ1xcdTI5QjQnLFxuXHRsYWdyYW46ICdcXHUyMTEyJyxcblx0TGFtYmRhOiAnXFx1MDM5QicsXG5cdGxhbWJkYTogJ1xcdTAzQkInLFxuXHRMYW5nOiAnXFx1MjdFQScsXG5cdGxhbmc6ICdcXHUyN0U4Jyxcblx0bGFuZ2Q6ICdcXHUyOTkxJyxcblx0bGFuZ2xlOiAnXFx1MjdFOCcsXG5cdGxhcDogJ1xcdTJBODUnLFxuXHRMYXBsYWNldHJmOiAnXFx1MjExMicsXG5cdGxhcXVvOiAnXFx1MDBBQicsXG5cdExhcnI6ICdcXHUyMTlFJyxcblx0bEFycjogJ1xcdTIxRDAnLFxuXHRsYXJyOiAnXFx1MjE5MCcsXG5cdGxhcnJiOiAnXFx1MjFFNCcsXG5cdGxhcnJiZnM6ICdcXHUyOTFGJyxcblx0bGFycmZzOiAnXFx1MjkxRCcsXG5cdGxhcnJoazogJ1xcdTIxQTknLFxuXHRsYXJybHA6ICdcXHUyMUFCJyxcblx0bGFycnBsOiAnXFx1MjkzOScsXG5cdGxhcnJzaW06ICdcXHUyOTczJyxcblx0bGFycnRsOiAnXFx1MjFBMicsXG5cdGxhdDogJ1xcdTJBQUInLFxuXHRsQXRhaWw6ICdcXHUyOTFCJyxcblx0bGF0YWlsOiAnXFx1MjkxOScsXG5cdGxhdGU6ICdcXHUyQUFEJyxcblx0bGF0ZXM6ICdcXHUyQUFEXFx1RkUwMCcsXG5cdGxCYXJyOiAnXFx1MjkwRScsXG5cdGxiYXJyOiAnXFx1MjkwQycsXG5cdGxiYnJrOiAnXFx1Mjc3MicsXG5cdGxicmFjZTogJ1xcdTAwN0InLFxuXHRsYnJhY2s6ICdcXHUwMDVCJyxcblx0bGJya2U6ICdcXHUyOThCJyxcblx0bGJya3NsZDogJ1xcdTI5OEYnLFxuXHRsYnJrc2x1OiAnXFx1Mjk4RCcsXG5cdExjYXJvbjogJ1xcdTAxM0QnLFxuXHRsY2Fyb246ICdcXHUwMTNFJyxcblx0TGNlZGlsOiAnXFx1MDEzQicsXG5cdGxjZWRpbDogJ1xcdTAxM0MnLFxuXHRsY2VpbDogJ1xcdTIzMDgnLFxuXHRsY3ViOiAnXFx1MDA3QicsXG5cdExjeTogJ1xcdTA0MUInLFxuXHRsY3k6ICdcXHUwNDNCJyxcblx0bGRjYTogJ1xcdTI5MzYnLFxuXHRsZHF1bzogJ1xcdTIwMUMnLFxuXHRsZHF1b3I6ICdcXHUyMDFFJyxcblx0bGRyZGhhcjogJ1xcdTI5NjcnLFxuXHRsZHJ1c2hhcjogJ1xcdTI5NEInLFxuXHRsZHNoOiAnXFx1MjFCMicsXG5cdGxFOiAnXFx1MjI2NicsXG5cdGxlOiAnXFx1MjI2NCcsXG5cdExlZnRBbmdsZUJyYWNrZXQ6ICdcXHUyN0U4Jyxcblx0TGVmdEFycm93OiAnXFx1MjE5MCcsXG5cdExlZnRhcnJvdzogJ1xcdTIxRDAnLFxuXHRsZWZ0YXJyb3c6ICdcXHUyMTkwJyxcblx0TGVmdEFycm93QmFyOiAnXFx1MjFFNCcsXG5cdExlZnRBcnJvd1JpZ2h0QXJyb3c6ICdcXHUyMUM2Jyxcblx0bGVmdGFycm93dGFpbDogJ1xcdTIxQTInLFxuXHRMZWZ0Q2VpbGluZzogJ1xcdTIzMDgnLFxuXHRMZWZ0RG91YmxlQnJhY2tldDogJ1xcdTI3RTYnLFxuXHRMZWZ0RG93blRlZVZlY3RvcjogJ1xcdTI5NjEnLFxuXHRMZWZ0RG93blZlY3RvcjogJ1xcdTIxQzMnLFxuXHRMZWZ0RG93blZlY3RvckJhcjogJ1xcdTI5NTknLFxuXHRMZWZ0Rmxvb3I6ICdcXHUyMzBBJyxcblx0bGVmdGhhcnBvb25kb3duOiAnXFx1MjFCRCcsXG5cdGxlZnRoYXJwb29udXA6ICdcXHUyMUJDJyxcblx0bGVmdGxlZnRhcnJvd3M6ICdcXHUyMUM3Jyxcblx0TGVmdFJpZ2h0QXJyb3c6ICdcXHUyMTk0Jyxcblx0TGVmdHJpZ2h0YXJyb3c6ICdcXHUyMUQ0Jyxcblx0bGVmdHJpZ2h0YXJyb3c6ICdcXHUyMTk0Jyxcblx0bGVmdHJpZ2h0YXJyb3dzOiAnXFx1MjFDNicsXG5cdGxlZnRyaWdodGhhcnBvb25zOiAnXFx1MjFDQicsXG5cdGxlZnRyaWdodHNxdWlnYXJyb3c6ICdcXHUyMUFEJyxcblx0TGVmdFJpZ2h0VmVjdG9yOiAnXFx1Mjk0RScsXG5cdExlZnRUZWU6ICdcXHUyMkEzJyxcblx0TGVmdFRlZUFycm93OiAnXFx1MjFBNCcsXG5cdExlZnRUZWVWZWN0b3I6ICdcXHUyOTVBJyxcblx0bGVmdHRocmVldGltZXM6ICdcXHUyMkNCJyxcblx0TGVmdFRyaWFuZ2xlOiAnXFx1MjJCMicsXG5cdExlZnRUcmlhbmdsZUJhcjogJ1xcdTI5Q0YnLFxuXHRMZWZ0VHJpYW5nbGVFcXVhbDogJ1xcdTIyQjQnLFxuXHRMZWZ0VXBEb3duVmVjdG9yOiAnXFx1Mjk1MScsXG5cdExlZnRVcFRlZVZlY3RvcjogJ1xcdTI5NjAnLFxuXHRMZWZ0VXBWZWN0b3I6ICdcXHUyMUJGJyxcblx0TGVmdFVwVmVjdG9yQmFyOiAnXFx1Mjk1OCcsXG5cdExlZnRWZWN0b3I6ICdcXHUyMUJDJyxcblx0TGVmdFZlY3RvckJhcjogJ1xcdTI5NTInLFxuXHRsRWc6ICdcXHUyQThCJyxcblx0bGVnOiAnXFx1MjJEQScsXG5cdGxlcTogJ1xcdTIyNjQnLFxuXHRsZXFxOiAnXFx1MjI2NicsXG5cdGxlcXNsYW50OiAnXFx1MkE3RCcsXG5cdGxlczogJ1xcdTJBN0QnLFxuXHRsZXNjYzogJ1xcdTJBQTgnLFxuXHRsZXNkb3Q6ICdcXHUyQTdGJyxcblx0bGVzZG90bzogJ1xcdTJBODEnLFxuXHRsZXNkb3RvcjogJ1xcdTJBODMnLFxuXHRsZXNnOiAnXFx1MjJEQVxcdUZFMDAnLFxuXHRsZXNnZXM6ICdcXHUyQTkzJyxcblx0bGVzc2FwcHJveDogJ1xcdTJBODUnLFxuXHRsZXNzZG90OiAnXFx1MjJENicsXG5cdGxlc3NlcWd0cjogJ1xcdTIyREEnLFxuXHRsZXNzZXFxZ3RyOiAnXFx1MkE4QicsXG5cdExlc3NFcXVhbEdyZWF0ZXI6ICdcXHUyMkRBJyxcblx0TGVzc0Z1bGxFcXVhbDogJ1xcdTIyNjYnLFxuXHRMZXNzR3JlYXRlcjogJ1xcdTIyNzYnLFxuXHRsZXNzZ3RyOiAnXFx1MjI3NicsXG5cdExlc3NMZXNzOiAnXFx1MkFBMScsXG5cdGxlc3NzaW06ICdcXHUyMjcyJyxcblx0TGVzc1NsYW50RXF1YWw6ICdcXHUyQTdEJyxcblx0TGVzc1RpbGRlOiAnXFx1MjI3MicsXG5cdGxmaXNodDogJ1xcdTI5N0MnLFxuXHRsZmxvb3I6ICdcXHUyMzBBJyxcblx0TGZyOiAnXFx1RDgzNVxcdUREMEYnLFxuXHRsZnI6ICdcXHVEODM1XFx1REQyOScsXG5cdGxnOiAnXFx1MjI3NicsXG5cdGxnRTogJ1xcdTJBOTEnLFxuXHRsSGFyOiAnXFx1Mjk2MicsXG5cdGxoYXJkOiAnXFx1MjFCRCcsXG5cdGxoYXJ1OiAnXFx1MjFCQycsXG5cdGxoYXJ1bDogJ1xcdTI5NkEnLFxuXHRsaGJsazogJ1xcdTI1ODQnLFxuXHRMSmN5OiAnXFx1MDQwOScsXG5cdGxqY3k6ICdcXHUwNDU5Jyxcblx0TGw6ICdcXHUyMkQ4Jyxcblx0bGw6ICdcXHUyMjZBJyxcblx0bGxhcnI6ICdcXHUyMUM3Jyxcblx0bGxjb3JuZXI6ICdcXHUyMzFFJyxcblx0TGxlZnRhcnJvdzogJ1xcdTIxREEnLFxuXHRsbGhhcmQ6ICdcXHUyOTZCJyxcblx0bGx0cmk6ICdcXHUyNUZBJyxcblx0TG1pZG90OiAnXFx1MDEzRicsXG5cdGxtaWRvdDogJ1xcdTAxNDAnLFxuXHRsbW91c3Q6ICdcXHUyM0IwJyxcblx0bG1vdXN0YWNoZTogJ1xcdTIzQjAnLFxuXHRsbmFwOiAnXFx1MkE4OScsXG5cdGxuYXBwcm94OiAnXFx1MkE4OScsXG5cdGxuRTogJ1xcdTIyNjgnLFxuXHRsbmU6ICdcXHUyQTg3Jyxcblx0bG5lcTogJ1xcdTJBODcnLFxuXHRsbmVxcTogJ1xcdTIyNjgnLFxuXHRsbnNpbTogJ1xcdTIyRTYnLFxuXHRsb2FuZzogJ1xcdTI3RUMnLFxuXHRsb2FycjogJ1xcdTIxRkQnLFxuXHRsb2JyazogJ1xcdTI3RTYnLFxuXHRMb25nTGVmdEFycm93OiAnXFx1MjdGNScsXG5cdExvbmdsZWZ0YXJyb3c6ICdcXHUyN0Y4Jyxcblx0bG9uZ2xlZnRhcnJvdzogJ1xcdTI3RjUnLFxuXHRMb25nTGVmdFJpZ2h0QXJyb3c6ICdcXHUyN0Y3Jyxcblx0TG9uZ2xlZnRyaWdodGFycm93OiAnXFx1MjdGQScsXG5cdGxvbmdsZWZ0cmlnaHRhcnJvdzogJ1xcdTI3RjcnLFxuXHRsb25nbWFwc3RvOiAnXFx1MjdGQycsXG5cdExvbmdSaWdodEFycm93OiAnXFx1MjdGNicsXG5cdExvbmdyaWdodGFycm93OiAnXFx1MjdGOScsXG5cdGxvbmdyaWdodGFycm93OiAnXFx1MjdGNicsXG5cdGxvb3BhcnJvd2xlZnQ6ICdcXHUyMUFCJyxcblx0bG9vcGFycm93cmlnaHQ6ICdcXHUyMUFDJyxcblx0bG9wYXI6ICdcXHUyOTg1Jyxcblx0TG9wZjogJ1xcdUQ4MzVcXHVERDQzJyxcblx0bG9wZjogJ1xcdUQ4MzVcXHVERDVEJyxcblx0bG9wbHVzOiAnXFx1MkEyRCcsXG5cdGxvdGltZXM6ICdcXHUyQTM0Jyxcblx0bG93YXN0OiAnXFx1MjIxNycsXG5cdGxvd2JhcjogJ1xcdTAwNUYnLFxuXHRMb3dlckxlZnRBcnJvdzogJ1xcdTIxOTknLFxuXHRMb3dlclJpZ2h0QXJyb3c6ICdcXHUyMTk4Jyxcblx0bG96OiAnXFx1MjVDQScsXG5cdGxvemVuZ2U6ICdcXHUyNUNBJyxcblx0bG96ZjogJ1xcdTI5RUInLFxuXHRscGFyOiAnXFx1MDAyOCcsXG5cdGxwYXJsdDogJ1xcdTI5OTMnLFxuXHRscmFycjogJ1xcdTIxQzYnLFxuXHRscmNvcm5lcjogJ1xcdTIzMUYnLFxuXHRscmhhcjogJ1xcdTIxQ0InLFxuXHRscmhhcmQ6ICdcXHUyOTZEJyxcblx0bHJtOiAnXFx1MjAwRScsXG5cdGxydHJpOiAnXFx1MjJCRicsXG5cdGxzYXF1bzogJ1xcdTIwMzknLFxuXHRMc2NyOiAnXFx1MjExMicsXG5cdGxzY3I6ICdcXHVEODM1XFx1RENDMScsXG5cdExzaDogJ1xcdTIxQjAnLFxuXHRsc2g6ICdcXHUyMUIwJyxcblx0bHNpbTogJ1xcdTIyNzInLFxuXHRsc2ltZTogJ1xcdTJBOEQnLFxuXHRsc2ltZzogJ1xcdTJBOEYnLFxuXHRsc3FiOiAnXFx1MDA1QicsXG5cdGxzcXVvOiAnXFx1MjAxOCcsXG5cdGxzcXVvcjogJ1xcdTIwMUEnLFxuXHRMc3Ryb2s6ICdcXHUwMTQxJyxcblx0bHN0cm9rOiAnXFx1MDE0MicsXG5cdEx0OiAnXFx1MjI2QScsXG5cdExUOiAnXFx1MDAzQycsXG5cdGx0OiAnXFx1MDAzQycsXG5cdGx0Y2M6ICdcXHUyQUE2Jyxcblx0bHRjaXI6ICdcXHUyQTc5Jyxcblx0bHRkb3Q6ICdcXHUyMkQ2Jyxcblx0bHRocmVlOiAnXFx1MjJDQicsXG5cdGx0aW1lczogJ1xcdTIyQzknLFxuXHRsdGxhcnI6ICdcXHUyOTc2Jyxcblx0bHRxdWVzdDogJ1xcdTJBN0InLFxuXHRsdHJpOiAnXFx1MjVDMycsXG5cdGx0cmllOiAnXFx1MjJCNCcsXG5cdGx0cmlmOiAnXFx1MjVDMicsXG5cdGx0clBhcjogJ1xcdTI5OTYnLFxuXHRsdXJkc2hhcjogJ1xcdTI5NEEnLFxuXHRsdXJ1aGFyOiAnXFx1Mjk2NicsXG5cdGx2ZXJ0bmVxcTogJ1xcdTIyNjhcXHVGRTAwJyxcblx0bHZuRTogJ1xcdTIyNjhcXHVGRTAwJyxcblx0bWFjcjogJ1xcdTAwQUYnLFxuXHRtYWxlOiAnXFx1MjY0MicsXG5cdG1hbHQ6ICdcXHUyNzIwJyxcblx0bWFsdGVzZTogJ1xcdTI3MjAnLFxuXHRNYXA6ICdcXHUyOTA1Jyxcblx0bWFwOiAnXFx1MjFBNicsXG5cdG1hcHN0bzogJ1xcdTIxQTYnLFxuXHRtYXBzdG9kb3duOiAnXFx1MjFBNycsXG5cdG1hcHN0b2xlZnQ6ICdcXHUyMUE0Jyxcblx0bWFwc3RvdXA6ICdcXHUyMUE1Jyxcblx0bWFya2VyOiAnXFx1MjVBRScsXG5cdG1jb21tYTogJ1xcdTJBMjknLFxuXHRNY3k6ICdcXHUwNDFDJyxcblx0bWN5OiAnXFx1MDQzQycsXG5cdG1kYXNoOiAnXFx1MjAxNCcsXG5cdG1ERG90OiAnXFx1MjIzQScsXG5cdG1lYXN1cmVkYW5nbGU6ICdcXHUyMjIxJyxcblx0TWVkaXVtU3BhY2U6ICdcXHUyMDVGJyxcblx0TWVsbGludHJmOiAnXFx1MjEzMycsXG5cdE1mcjogJ1xcdUQ4MzVcXHVERDEwJyxcblx0bWZyOiAnXFx1RDgzNVxcdUREMkEnLFxuXHRtaG86ICdcXHUyMTI3Jyxcblx0bWljcm86ICdcXHUwMEI1Jyxcblx0bWlkOiAnXFx1MjIyMycsXG5cdG1pZGFzdDogJ1xcdTAwMkEnLFxuXHRtaWRjaXI6ICdcXHUyQUYwJyxcblx0bWlkZG90OiAnXFx1MDBCNycsXG5cdG1pbnVzOiAnXFx1MjIxMicsXG5cdG1pbnVzYjogJ1xcdTIyOUYnLFxuXHRtaW51c2Q6ICdcXHUyMjM4Jyxcblx0bWludXNkdTogJ1xcdTJBMkEnLFxuXHRNaW51c1BsdXM6ICdcXHUyMjEzJyxcblx0bWxjcDogJ1xcdTJBREInLFxuXHRtbGRyOiAnXFx1MjAyNicsXG5cdG1ucGx1czogJ1xcdTIyMTMnLFxuXHRtb2RlbHM6ICdcXHUyMkE3Jyxcblx0TW9wZjogJ1xcdUQ4MzVcXHVERDQ0Jyxcblx0bW9wZjogJ1xcdUQ4MzVcXHVERDVFJyxcblx0bXA6ICdcXHUyMjEzJyxcblx0TXNjcjogJ1xcdTIxMzMnLFxuXHRtc2NyOiAnXFx1RDgzNVxcdURDQzInLFxuXHRtc3Rwb3M6ICdcXHUyMjNFJyxcblx0TXU6ICdcXHUwMzlDJyxcblx0bXU6ICdcXHUwM0JDJyxcblx0bXVsdGltYXA6ICdcXHUyMkI4Jyxcblx0bXVtYXA6ICdcXHUyMkI4Jyxcblx0bmFibGE6ICdcXHUyMjA3Jyxcblx0TmFjdXRlOiAnXFx1MDE0MycsXG5cdG5hY3V0ZTogJ1xcdTAxNDQnLFxuXHRuYW5nOiAnXFx1MjIyMFxcdTIwRDInLFxuXHRuYXA6ICdcXHUyMjQ5Jyxcblx0bmFwRTogJ1xcdTJBNzBcXHUwMzM4Jyxcblx0bmFwaWQ6ICdcXHUyMjRCXFx1MDMzOCcsXG5cdG5hcG9zOiAnXFx1MDE0OScsXG5cdG5hcHByb3g6ICdcXHUyMjQ5Jyxcblx0bmF0dXI6ICdcXHUyNjZFJyxcblx0bmF0dXJhbDogJ1xcdTI2NkUnLFxuXHRuYXR1cmFsczogJ1xcdTIxMTUnLFxuXHRuYnNwOiAnXFx1MDBBMCcsXG5cdG5idW1wOiAnXFx1MjI0RVxcdTAzMzgnLFxuXHRuYnVtcGU6ICdcXHUyMjRGXFx1MDMzOCcsXG5cdG5jYXA6ICdcXHUyQTQzJyxcblx0TmNhcm9uOiAnXFx1MDE0NycsXG5cdG5jYXJvbjogJ1xcdTAxNDgnLFxuXHROY2VkaWw6ICdcXHUwMTQ1Jyxcblx0bmNlZGlsOiAnXFx1MDE0NicsXG5cdG5jb25nOiAnXFx1MjI0NycsXG5cdG5jb25nZG90OiAnXFx1MkE2RFxcdTAzMzgnLFxuXHRuY3VwOiAnXFx1MkE0MicsXG5cdE5jeTogJ1xcdTA0MUQnLFxuXHRuY3k6ICdcXHUwNDNEJyxcblx0bmRhc2g6ICdcXHUyMDEzJyxcblx0bmU6ICdcXHUyMjYwJyxcblx0bmVhcmhrOiAnXFx1MjkyNCcsXG5cdG5lQXJyOiAnXFx1MjFENycsXG5cdG5lYXJyOiAnXFx1MjE5NycsXG5cdG5lYXJyb3c6ICdcXHUyMTk3Jyxcblx0bmVkb3Q6ICdcXHUyMjUwXFx1MDMzOCcsXG5cdE5lZ2F0aXZlTWVkaXVtU3BhY2U6ICdcXHUyMDBCJyxcblx0TmVnYXRpdmVUaGlja1NwYWNlOiAnXFx1MjAwQicsXG5cdE5lZ2F0aXZlVGhpblNwYWNlOiAnXFx1MjAwQicsXG5cdE5lZ2F0aXZlVmVyeVRoaW5TcGFjZTogJ1xcdTIwMEInLFxuXHRuZXF1aXY6ICdcXHUyMjYyJyxcblx0bmVzZWFyOiAnXFx1MjkyOCcsXG5cdG5lc2ltOiAnXFx1MjI0MlxcdTAzMzgnLFxuXHROZXN0ZWRHcmVhdGVyR3JlYXRlcjogJ1xcdTIyNkInLFxuXHROZXN0ZWRMZXNzTGVzczogJ1xcdTIyNkEnLFxuXHROZXdMaW5lOiAnXFx1MDAwQScsXG5cdG5leGlzdDogJ1xcdTIyMDQnLFxuXHRuZXhpc3RzOiAnXFx1MjIwNCcsXG5cdE5mcjogJ1xcdUQ4MzVcXHVERDExJyxcblx0bmZyOiAnXFx1RDgzNVxcdUREMkInLFxuXHRuZ0U6ICdcXHUyMjY3XFx1MDMzOCcsXG5cdG5nZTogJ1xcdTIyNzEnLFxuXHRuZ2VxOiAnXFx1MjI3MScsXG5cdG5nZXFxOiAnXFx1MjI2N1xcdTAzMzgnLFxuXHRuZ2Vxc2xhbnQ6ICdcXHUyQTdFXFx1MDMzOCcsXG5cdG5nZXM6ICdcXHUyQTdFXFx1MDMzOCcsXG5cdG5HZzogJ1xcdTIyRDlcXHUwMzM4Jyxcblx0bmdzaW06ICdcXHUyMjc1Jyxcblx0bkd0OiAnXFx1MjI2QlxcdTIwRDInLFxuXHRuZ3Q6ICdcXHUyMjZGJyxcblx0bmd0cjogJ1xcdTIyNkYnLFxuXHRuR3R2OiAnXFx1MjI2QlxcdTAzMzgnLFxuXHRuaEFycjogJ1xcdTIxQ0UnLFxuXHRuaGFycjogJ1xcdTIxQUUnLFxuXHRuaHBhcjogJ1xcdTJBRjInLFxuXHRuaTogJ1xcdTIyMEInLFxuXHRuaXM6ICdcXHUyMkZDJyxcblx0bmlzZDogJ1xcdTIyRkEnLFxuXHRuaXY6ICdcXHUyMjBCJyxcblx0TkpjeTogJ1xcdTA0MEEnLFxuXHRuamN5OiAnXFx1MDQ1QScsXG5cdG5sQXJyOiAnXFx1MjFDRCcsXG5cdG5sYXJyOiAnXFx1MjE5QScsXG5cdG5sZHI6ICdcXHUyMDI1Jyxcblx0bmxFOiAnXFx1MjI2NlxcdTAzMzgnLFxuXHRubGU6ICdcXHUyMjcwJyxcblx0bkxlZnRhcnJvdzogJ1xcdTIxQ0QnLFxuXHRubGVmdGFycm93OiAnXFx1MjE5QScsXG5cdG5MZWZ0cmlnaHRhcnJvdzogJ1xcdTIxQ0UnLFxuXHRubGVmdHJpZ2h0YXJyb3c6ICdcXHUyMUFFJyxcblx0bmxlcTogJ1xcdTIyNzAnLFxuXHRubGVxcTogJ1xcdTIyNjZcXHUwMzM4Jyxcblx0bmxlcXNsYW50OiAnXFx1MkE3RFxcdTAzMzgnLFxuXHRubGVzOiAnXFx1MkE3RFxcdTAzMzgnLFxuXHRubGVzczogJ1xcdTIyNkUnLFxuXHRuTGw6ICdcXHUyMkQ4XFx1MDMzOCcsXG5cdG5sc2ltOiAnXFx1MjI3NCcsXG5cdG5MdDogJ1xcdTIyNkFcXHUyMEQyJyxcblx0bmx0OiAnXFx1MjI2RScsXG5cdG5sdHJpOiAnXFx1MjJFQScsXG5cdG5sdHJpZTogJ1xcdTIyRUMnLFxuXHRuTHR2OiAnXFx1MjI2QVxcdTAzMzgnLFxuXHRubWlkOiAnXFx1MjIyNCcsXG5cdE5vQnJlYWs6ICdcXHUyMDYwJyxcblx0Tm9uQnJlYWtpbmdTcGFjZTogJ1xcdTAwQTAnLFxuXHROb3BmOiAnXFx1MjExNScsXG5cdG5vcGY6ICdcXHVEODM1XFx1REQ1RicsXG5cdE5vdDogJ1xcdTJBRUMnLFxuXHRub3Q6ICdcXHUwMEFDJyxcblx0Tm90Q29uZ3J1ZW50OiAnXFx1MjI2MicsXG5cdE5vdEN1cENhcDogJ1xcdTIyNkQnLFxuXHROb3REb3VibGVWZXJ0aWNhbEJhcjogJ1xcdTIyMjYnLFxuXHROb3RFbGVtZW50OiAnXFx1MjIwOScsXG5cdE5vdEVxdWFsOiAnXFx1MjI2MCcsXG5cdE5vdEVxdWFsVGlsZGU6ICdcXHUyMjQyXFx1MDMzOCcsXG5cdE5vdEV4aXN0czogJ1xcdTIyMDQnLFxuXHROb3RHcmVhdGVyOiAnXFx1MjI2RicsXG5cdE5vdEdyZWF0ZXJFcXVhbDogJ1xcdTIyNzEnLFxuXHROb3RHcmVhdGVyRnVsbEVxdWFsOiAnXFx1MjI2N1xcdTAzMzgnLFxuXHROb3RHcmVhdGVyR3JlYXRlcjogJ1xcdTIyNkJcXHUwMzM4Jyxcblx0Tm90R3JlYXRlckxlc3M6ICdcXHUyMjc5Jyxcblx0Tm90R3JlYXRlclNsYW50RXF1YWw6ICdcXHUyQTdFXFx1MDMzOCcsXG5cdE5vdEdyZWF0ZXJUaWxkZTogJ1xcdTIyNzUnLFxuXHROb3RIdW1wRG93bkh1bXA6ICdcXHUyMjRFXFx1MDMzOCcsXG5cdE5vdEh1bXBFcXVhbDogJ1xcdTIyNEZcXHUwMzM4Jyxcblx0bm90aW46ICdcXHUyMjA5Jyxcblx0bm90aW5kb3Q6ICdcXHUyMkY1XFx1MDMzOCcsXG5cdG5vdGluRTogJ1xcdTIyRjlcXHUwMzM4Jyxcblx0bm90aW52YTogJ1xcdTIyMDknLFxuXHRub3RpbnZiOiAnXFx1MjJGNycsXG5cdG5vdGludmM6ICdcXHUyMkY2Jyxcblx0Tm90TGVmdFRyaWFuZ2xlOiAnXFx1MjJFQScsXG5cdE5vdExlZnRUcmlhbmdsZUJhcjogJ1xcdTI5Q0ZcXHUwMzM4Jyxcblx0Tm90TGVmdFRyaWFuZ2xlRXF1YWw6ICdcXHUyMkVDJyxcblx0Tm90TGVzczogJ1xcdTIyNkUnLFxuXHROb3RMZXNzRXF1YWw6ICdcXHUyMjcwJyxcblx0Tm90TGVzc0dyZWF0ZXI6ICdcXHUyMjc4Jyxcblx0Tm90TGVzc0xlc3M6ICdcXHUyMjZBXFx1MDMzOCcsXG5cdE5vdExlc3NTbGFudEVxdWFsOiAnXFx1MkE3RFxcdTAzMzgnLFxuXHROb3RMZXNzVGlsZGU6ICdcXHUyMjc0Jyxcblx0Tm90TmVzdGVkR3JlYXRlckdyZWF0ZXI6ICdcXHUyQUEyXFx1MDMzOCcsXG5cdE5vdE5lc3RlZExlc3NMZXNzOiAnXFx1MkFBMVxcdTAzMzgnLFxuXHRub3RuaTogJ1xcdTIyMEMnLFxuXHRub3RuaXZhOiAnXFx1MjIwQycsXG5cdG5vdG5pdmI6ICdcXHUyMkZFJyxcblx0bm90bml2YzogJ1xcdTIyRkQnLFxuXHROb3RQcmVjZWRlczogJ1xcdTIyODAnLFxuXHROb3RQcmVjZWRlc0VxdWFsOiAnXFx1MkFBRlxcdTAzMzgnLFxuXHROb3RQcmVjZWRlc1NsYW50RXF1YWw6ICdcXHUyMkUwJyxcblx0Tm90UmV2ZXJzZUVsZW1lbnQ6ICdcXHUyMjBDJyxcblx0Tm90UmlnaHRUcmlhbmdsZTogJ1xcdTIyRUInLFxuXHROb3RSaWdodFRyaWFuZ2xlQmFyOiAnXFx1MjlEMFxcdTAzMzgnLFxuXHROb3RSaWdodFRyaWFuZ2xlRXF1YWw6ICdcXHUyMkVEJyxcblx0Tm90U3F1YXJlU3Vic2V0OiAnXFx1MjI4RlxcdTAzMzgnLFxuXHROb3RTcXVhcmVTdWJzZXRFcXVhbDogJ1xcdTIyRTInLFxuXHROb3RTcXVhcmVTdXBlcnNldDogJ1xcdTIyOTBcXHUwMzM4Jyxcblx0Tm90U3F1YXJlU3VwZXJzZXRFcXVhbDogJ1xcdTIyRTMnLFxuXHROb3RTdWJzZXQ6ICdcXHUyMjgyXFx1MjBEMicsXG5cdE5vdFN1YnNldEVxdWFsOiAnXFx1MjI4OCcsXG5cdE5vdFN1Y2NlZWRzOiAnXFx1MjI4MScsXG5cdE5vdFN1Y2NlZWRzRXF1YWw6ICdcXHUyQUIwXFx1MDMzOCcsXG5cdE5vdFN1Y2NlZWRzU2xhbnRFcXVhbDogJ1xcdTIyRTEnLFxuXHROb3RTdWNjZWVkc1RpbGRlOiAnXFx1MjI3RlxcdTAzMzgnLFxuXHROb3RTdXBlcnNldDogJ1xcdTIyODNcXHUyMEQyJyxcblx0Tm90U3VwZXJzZXRFcXVhbDogJ1xcdTIyODknLFxuXHROb3RUaWxkZTogJ1xcdTIyNDEnLFxuXHROb3RUaWxkZUVxdWFsOiAnXFx1MjI0NCcsXG5cdE5vdFRpbGRlRnVsbEVxdWFsOiAnXFx1MjI0NycsXG5cdE5vdFRpbGRlVGlsZGU6ICdcXHUyMjQ5Jyxcblx0Tm90VmVydGljYWxCYXI6ICdcXHUyMjI0Jyxcblx0bnBhcjogJ1xcdTIyMjYnLFxuXHRucGFyYWxsZWw6ICdcXHUyMjI2Jyxcblx0bnBhcnNsOiAnXFx1MkFGRFxcdTIwRTUnLFxuXHRucGFydDogJ1xcdTIyMDJcXHUwMzM4Jyxcblx0bnBvbGludDogJ1xcdTJBMTQnLFxuXHRucHI6ICdcXHUyMjgwJyxcblx0bnByY3VlOiAnXFx1MjJFMCcsXG5cdG5wcmU6ICdcXHUyQUFGXFx1MDMzOCcsXG5cdG5wcmVjOiAnXFx1MjI4MCcsXG5cdG5wcmVjZXE6ICdcXHUyQUFGXFx1MDMzOCcsXG5cdG5yQXJyOiAnXFx1MjFDRicsXG5cdG5yYXJyOiAnXFx1MjE5QicsXG5cdG5yYXJyYzogJ1xcdTI5MzNcXHUwMzM4Jyxcblx0bnJhcnJ3OiAnXFx1MjE5RFxcdTAzMzgnLFxuXHRuUmlnaHRhcnJvdzogJ1xcdTIxQ0YnLFxuXHRucmlnaHRhcnJvdzogJ1xcdTIxOUInLFxuXHRucnRyaTogJ1xcdTIyRUInLFxuXHRucnRyaWU6ICdcXHUyMkVEJyxcblx0bnNjOiAnXFx1MjI4MScsXG5cdG5zY2N1ZTogJ1xcdTIyRTEnLFxuXHRuc2NlOiAnXFx1MkFCMFxcdTAzMzgnLFxuXHROc2NyOiAnXFx1RDgzNVxcdURDQTknLFxuXHRuc2NyOiAnXFx1RDgzNVxcdURDQzMnLFxuXHRuc2hvcnRtaWQ6ICdcXHUyMjI0Jyxcblx0bnNob3J0cGFyYWxsZWw6ICdcXHUyMjI2Jyxcblx0bnNpbTogJ1xcdTIyNDEnLFxuXHRuc2ltZTogJ1xcdTIyNDQnLFxuXHRuc2ltZXE6ICdcXHUyMjQ0Jyxcblx0bnNtaWQ6ICdcXHUyMjI0Jyxcblx0bnNwYXI6ICdcXHUyMjI2Jyxcblx0bnNxc3ViZTogJ1xcdTIyRTInLFxuXHRuc3FzdXBlOiAnXFx1MjJFMycsXG5cdG5zdWI6ICdcXHUyMjg0Jyxcblx0bnN1YkU6ICdcXHUyQUM1XFx1MDMzOCcsXG5cdG5zdWJlOiAnXFx1MjI4OCcsXG5cdG5zdWJzZXQ6ICdcXHUyMjgyXFx1MjBEMicsXG5cdG5zdWJzZXRlcTogJ1xcdTIyODgnLFxuXHRuc3Vic2V0ZXFxOiAnXFx1MkFDNVxcdTAzMzgnLFxuXHRuc3VjYzogJ1xcdTIyODEnLFxuXHRuc3VjY2VxOiAnXFx1MkFCMFxcdTAzMzgnLFxuXHRuc3VwOiAnXFx1MjI4NScsXG5cdG5zdXBFOiAnXFx1MkFDNlxcdTAzMzgnLFxuXHRuc3VwZTogJ1xcdTIyODknLFxuXHRuc3Vwc2V0OiAnXFx1MjI4M1xcdTIwRDInLFxuXHRuc3Vwc2V0ZXE6ICdcXHUyMjg5Jyxcblx0bnN1cHNldGVxcTogJ1xcdTJBQzZcXHUwMzM4Jyxcblx0bnRnbDogJ1xcdTIyNzknLFxuXHROdGlsZGU6ICdcXHUwMEQxJyxcblx0bnRpbGRlOiAnXFx1MDBGMScsXG5cdG50bGc6ICdcXHUyMjc4Jyxcblx0bnRyaWFuZ2xlbGVmdDogJ1xcdTIyRUEnLFxuXHRudHJpYW5nbGVsZWZ0ZXE6ICdcXHUyMkVDJyxcblx0bnRyaWFuZ2xlcmlnaHQ6ICdcXHUyMkVCJyxcblx0bnRyaWFuZ2xlcmlnaHRlcTogJ1xcdTIyRUQnLFxuXHROdTogJ1xcdTAzOUQnLFxuXHRudTogJ1xcdTAzQkQnLFxuXHRudW06ICdcXHUwMDIzJyxcblx0bnVtZXJvOiAnXFx1MjExNicsXG5cdG51bXNwOiAnXFx1MjAwNycsXG5cdG52YXA6ICdcXHUyMjREXFx1MjBEMicsXG5cdG5WRGFzaDogJ1xcdTIyQUYnLFxuXHRuVmRhc2g6ICdcXHUyMkFFJyxcblx0bnZEYXNoOiAnXFx1MjJBRCcsXG5cdG52ZGFzaDogJ1xcdTIyQUMnLFxuXHRudmdlOiAnXFx1MjI2NVxcdTIwRDInLFxuXHRudmd0OiAnXFx1MDAzRVxcdTIwRDInLFxuXHRudkhhcnI6ICdcXHUyOTA0Jyxcblx0bnZpbmZpbjogJ1xcdTI5REUnLFxuXHRudmxBcnI6ICdcXHUyOTAyJyxcblx0bnZsZTogJ1xcdTIyNjRcXHUyMEQyJyxcblx0bnZsdDogJ1xcdTAwM0NcXHUyMEQyJyxcblx0bnZsdHJpZTogJ1xcdTIyQjRcXHUyMEQyJyxcblx0bnZyQXJyOiAnXFx1MjkwMycsXG5cdG52cnRyaWU6ICdcXHUyMkI1XFx1MjBEMicsXG5cdG52c2ltOiAnXFx1MjIzQ1xcdTIwRDInLFxuXHRud2FyaGs6ICdcXHUyOTIzJyxcblx0bndBcnI6ICdcXHUyMUQ2Jyxcblx0bndhcnI6ICdcXHUyMTk2Jyxcblx0bndhcnJvdzogJ1xcdTIxOTYnLFxuXHRud25lYXI6ICdcXHUyOTI3Jyxcblx0T2FjdXRlOiAnXFx1MDBEMycsXG5cdG9hY3V0ZTogJ1xcdTAwRjMnLFxuXHRvYXN0OiAnXFx1MjI5QicsXG5cdG9jaXI6ICdcXHUyMjlBJyxcblx0T2NpcmM6ICdcXHUwMEQ0Jyxcblx0b2NpcmM6ICdcXHUwMEY0Jyxcblx0T2N5OiAnXFx1MDQxRScsXG5cdG9jeTogJ1xcdTA0M0UnLFxuXHRvZGFzaDogJ1xcdTIyOUQnLFxuXHRPZGJsYWM6ICdcXHUwMTUwJyxcblx0b2RibGFjOiAnXFx1MDE1MScsXG5cdG9kaXY6ICdcXHUyQTM4Jyxcblx0b2RvdDogJ1xcdTIyOTknLFxuXHRvZHNvbGQ6ICdcXHUyOUJDJyxcblx0T0VsaWc6ICdcXHUwMTUyJyxcblx0b2VsaWc6ICdcXHUwMTUzJyxcblx0b2ZjaXI6ICdcXHUyOUJGJyxcblx0T2ZyOiAnXFx1RDgzNVxcdUREMTInLFxuXHRvZnI6ICdcXHVEODM1XFx1REQyQycsXG5cdG9nb246ICdcXHUwMkRCJyxcblx0T2dyYXZlOiAnXFx1MDBEMicsXG5cdG9ncmF2ZTogJ1xcdTAwRjInLFxuXHRvZ3Q6ICdcXHUyOUMxJyxcblx0b2hiYXI6ICdcXHUyOUI1Jyxcblx0b2htOiAnXFx1MDNBOScsXG5cdG9pbnQ6ICdcXHUyMjJFJyxcblx0b2xhcnI6ICdcXHUyMUJBJyxcblx0b2xjaXI6ICdcXHUyOUJFJyxcblx0b2xjcm9zczogJ1xcdTI5QkInLFxuXHRvbGluZTogJ1xcdTIwM0UnLFxuXHRvbHQ6ICdcXHUyOUMwJyxcblx0T21hY3I6ICdcXHUwMTRDJyxcblx0b21hY3I6ICdcXHUwMTREJyxcblx0T21lZ2E6ICdcXHUwM0E5Jyxcblx0b21lZ2E6ICdcXHUwM0M5Jyxcblx0T21pY3JvbjogJ1xcdTAzOUYnLFxuXHRvbWljcm9uOiAnXFx1MDNCRicsXG5cdG9taWQ6ICdcXHUyOUI2Jyxcblx0b21pbnVzOiAnXFx1MjI5NicsXG5cdE9vcGY6ICdcXHVEODM1XFx1REQ0NicsXG5cdG9vcGY6ICdcXHVEODM1XFx1REQ2MCcsXG5cdG9wYXI6ICdcXHUyOUI3Jyxcblx0T3BlbkN1cmx5RG91YmxlUXVvdGU6ICdcXHUyMDFDJyxcblx0T3BlbkN1cmx5UXVvdGU6ICdcXHUyMDE4Jyxcblx0b3BlcnA6ICdcXHUyOUI5Jyxcblx0b3BsdXM6ICdcXHUyMjk1Jyxcblx0T3I6ICdcXHUyQTU0Jyxcblx0b3I6ICdcXHUyMjI4Jyxcblx0b3JhcnI6ICdcXHUyMUJCJyxcblx0b3JkOiAnXFx1MkE1RCcsXG5cdG9yZGVyOiAnXFx1MjEzNCcsXG5cdG9yZGVyb2Y6ICdcXHUyMTM0Jyxcblx0b3JkZjogJ1xcdTAwQUEnLFxuXHRvcmRtOiAnXFx1MDBCQScsXG5cdG9yaWdvZjogJ1xcdTIyQjYnLFxuXHRvcm9yOiAnXFx1MkE1NicsXG5cdG9yc2xvcGU6ICdcXHUyQTU3Jyxcblx0b3J2OiAnXFx1MkE1QicsXG5cdG9TOiAnXFx1MjRDOCcsXG5cdE9zY3I6ICdcXHVEODM1XFx1RENBQScsXG5cdG9zY3I6ICdcXHUyMTM0Jyxcblx0T3NsYXNoOiAnXFx1MDBEOCcsXG5cdG9zbGFzaDogJ1xcdTAwRjgnLFxuXHRvc29sOiAnXFx1MjI5OCcsXG5cdE90aWxkZTogJ1xcdTAwRDUnLFxuXHRvdGlsZGU6ICdcXHUwMEY1Jyxcblx0T3RpbWVzOiAnXFx1MkEzNycsXG5cdG90aW1lczogJ1xcdTIyOTcnLFxuXHRvdGltZXNhczogJ1xcdTJBMzYnLFxuXHRPdW1sOiAnXFx1MDBENicsXG5cdG91bWw6ICdcXHUwMEY2Jyxcblx0b3ZiYXI6ICdcXHUyMzNEJyxcblx0T3ZlckJhcjogJ1xcdTIwM0UnLFxuXHRPdmVyQnJhY2U6ICdcXHUyM0RFJyxcblx0T3ZlckJyYWNrZXQ6ICdcXHUyM0I0Jyxcblx0T3ZlclBhcmVudGhlc2lzOiAnXFx1MjNEQycsXG5cdHBhcjogJ1xcdTIyMjUnLFxuXHRwYXJhOiAnXFx1MDBCNicsXG5cdHBhcmFsbGVsOiAnXFx1MjIyNScsXG5cdHBhcnNpbTogJ1xcdTJBRjMnLFxuXHRwYXJzbDogJ1xcdTJBRkQnLFxuXHRwYXJ0OiAnXFx1MjIwMicsXG5cdFBhcnRpYWxEOiAnXFx1MjIwMicsXG5cdFBjeTogJ1xcdTA0MUYnLFxuXHRwY3k6ICdcXHUwNDNGJyxcblx0cGVyY250OiAnXFx1MDAyNScsXG5cdHBlcmlvZDogJ1xcdTAwMkUnLFxuXHRwZXJtaWw6ICdcXHUyMDMwJyxcblx0cGVycDogJ1xcdTIyQTUnLFxuXHRwZXJ0ZW5rOiAnXFx1MjAzMScsXG5cdFBmcjogJ1xcdUQ4MzVcXHVERDEzJyxcblx0cGZyOiAnXFx1RDgzNVxcdUREMkQnLFxuXHRQaGk6ICdcXHUwM0E2Jyxcblx0cGhpOiAnXFx1MDNDNicsXG5cdHBoaXY6ICdcXHUwM0Q1Jyxcblx0cGhtbWF0OiAnXFx1MjEzMycsXG5cdHBob25lOiAnXFx1MjYwRScsXG5cdFBpOiAnXFx1MDNBMCcsXG5cdHBpOiAnXFx1MDNDMCcsXG5cdHBpdGNoZm9yazogJ1xcdTIyRDQnLFxuXHRwaXY6ICdcXHUwM0Q2Jyxcblx0cGxhbmNrOiAnXFx1MjEwRicsXG5cdHBsYW5ja2g6ICdcXHUyMTBFJyxcblx0cGxhbmt2OiAnXFx1MjEwRicsXG5cdHBsdXM6ICdcXHUwMDJCJyxcblx0cGx1c2FjaXI6ICdcXHUyQTIzJyxcblx0cGx1c2I6ICdcXHUyMjlFJyxcblx0cGx1c2NpcjogJ1xcdTJBMjInLFxuXHRwbHVzZG86ICdcXHUyMjE0Jyxcblx0cGx1c2R1OiAnXFx1MkEyNScsXG5cdHBsdXNlOiAnXFx1MkE3MicsXG5cdFBsdXNNaW51czogJ1xcdTAwQjEnLFxuXHRwbHVzbW46ICdcXHUwMEIxJyxcblx0cGx1c3NpbTogJ1xcdTJBMjYnLFxuXHRwbHVzdHdvOiAnXFx1MkEyNycsXG5cdHBtOiAnXFx1MDBCMScsXG5cdFBvaW5jYXJlcGxhbmU6ICdcXHUyMTBDJyxcblx0cG9pbnRpbnQ6ICdcXHUyQTE1Jyxcblx0UG9wZjogJ1xcdTIxMTknLFxuXHRwb3BmOiAnXFx1RDgzNVxcdURENjEnLFxuXHRwb3VuZDogJ1xcdTAwQTMnLFxuXHRQcjogJ1xcdTJBQkInLFxuXHRwcjogJ1xcdTIyN0EnLFxuXHRwcmFwOiAnXFx1MkFCNycsXG5cdHByY3VlOiAnXFx1MjI3QycsXG5cdHByRTogJ1xcdTJBQjMnLFxuXHRwcmU6ICdcXHUyQUFGJyxcblx0cHJlYzogJ1xcdTIyN0EnLFxuXHRwcmVjYXBwcm94OiAnXFx1MkFCNycsXG5cdHByZWNjdXJseWVxOiAnXFx1MjI3QycsXG5cdFByZWNlZGVzOiAnXFx1MjI3QScsXG5cdFByZWNlZGVzRXF1YWw6ICdcXHUyQUFGJyxcblx0UHJlY2VkZXNTbGFudEVxdWFsOiAnXFx1MjI3QycsXG5cdFByZWNlZGVzVGlsZGU6ICdcXHUyMjdFJyxcblx0cHJlY2VxOiAnXFx1MkFBRicsXG5cdHByZWNuYXBwcm94OiAnXFx1MkFCOScsXG5cdHByZWNuZXFxOiAnXFx1MkFCNScsXG5cdHByZWNuc2ltOiAnXFx1MjJFOCcsXG5cdHByZWNzaW06ICdcXHUyMjdFJyxcblx0UHJpbWU6ICdcXHUyMDMzJyxcblx0cHJpbWU6ICdcXHUyMDMyJyxcblx0cHJpbWVzOiAnXFx1MjExOScsXG5cdHBybmFwOiAnXFx1MkFCOScsXG5cdHBybkU6ICdcXHUyQUI1Jyxcblx0cHJuc2ltOiAnXFx1MjJFOCcsXG5cdHByb2Q6ICdcXHUyMjBGJyxcblx0UHJvZHVjdDogJ1xcdTIyMEYnLFxuXHRwcm9mYWxhcjogJ1xcdTIzMkUnLFxuXHRwcm9mbGluZTogJ1xcdTIzMTInLFxuXHRwcm9mc3VyZjogJ1xcdTIzMTMnLFxuXHRwcm9wOiAnXFx1MjIxRCcsXG5cdFByb3BvcnRpb246ICdcXHUyMjM3Jyxcblx0UHJvcG9ydGlvbmFsOiAnXFx1MjIxRCcsXG5cdHByb3B0bzogJ1xcdTIyMUQnLFxuXHRwcnNpbTogJ1xcdTIyN0UnLFxuXHRwcnVyZWw6ICdcXHUyMkIwJyxcblx0UHNjcjogJ1xcdUQ4MzVcXHVEQ0FCJyxcblx0cHNjcjogJ1xcdUQ4MzVcXHVEQ0M1Jyxcblx0UHNpOiAnXFx1MDNBOCcsXG5cdHBzaTogJ1xcdTAzQzgnLFxuXHRwdW5jc3A6ICdcXHUyMDA4Jyxcblx0UWZyOiAnXFx1RDgzNVxcdUREMTQnLFxuXHRxZnI6ICdcXHVEODM1XFx1REQyRScsXG5cdHFpbnQ6ICdcXHUyQTBDJyxcblx0UW9wZjogJ1xcdTIxMUEnLFxuXHRxb3BmOiAnXFx1RDgzNVxcdURENjInLFxuXHRxcHJpbWU6ICdcXHUyMDU3Jyxcblx0UXNjcjogJ1xcdUQ4MzVcXHVEQ0FDJyxcblx0cXNjcjogJ1xcdUQ4MzVcXHVEQ0M2Jyxcblx0cXVhdGVybmlvbnM6ICdcXHUyMTBEJyxcblx0cXVhdGludDogJ1xcdTJBMTYnLFxuXHRxdWVzdDogJ1xcdTAwM0YnLFxuXHRxdWVzdGVxOiAnXFx1MjI1RicsXG5cdFFVT1Q6ICdcXHUwMDIyJyxcblx0cXVvdDogJ1xcdTAwMjInLFxuXHRyQWFycjogJ1xcdTIxREInLFxuXHRyYWNlOiAnXFx1MjIzRFxcdTAzMzEnLFxuXHRSYWN1dGU6ICdcXHUwMTU0Jyxcblx0cmFjdXRlOiAnXFx1MDE1NScsXG5cdHJhZGljOiAnXFx1MjIxQScsXG5cdHJhZW1wdHl2OiAnXFx1MjlCMycsXG5cdFJhbmc6ICdcXHUyN0VCJyxcblx0cmFuZzogJ1xcdTI3RTknLFxuXHRyYW5nZDogJ1xcdTI5OTInLFxuXHRyYW5nZTogJ1xcdTI5QTUnLFxuXHRyYW5nbGU6ICdcXHUyN0U5Jyxcblx0cmFxdW86ICdcXHUwMEJCJyxcblx0UmFycjogJ1xcdTIxQTAnLFxuXHRyQXJyOiAnXFx1MjFEMicsXG5cdHJhcnI6ICdcXHUyMTkyJyxcblx0cmFycmFwOiAnXFx1Mjk3NScsXG5cdHJhcnJiOiAnXFx1MjFFNScsXG5cdHJhcnJiZnM6ICdcXHUyOTIwJyxcblx0cmFycmM6ICdcXHUyOTMzJyxcblx0cmFycmZzOiAnXFx1MjkxRScsXG5cdHJhcnJoazogJ1xcdTIxQUEnLFxuXHRyYXJybHA6ICdcXHUyMUFDJyxcblx0cmFycnBsOiAnXFx1Mjk0NScsXG5cdHJhcnJzaW06ICdcXHUyOTc0Jyxcblx0UmFycnRsOiAnXFx1MjkxNicsXG5cdHJhcnJ0bDogJ1xcdTIxQTMnLFxuXHRyYXJydzogJ1xcdTIxOUQnLFxuXHRyQXRhaWw6ICdcXHUyOTFDJyxcblx0cmF0YWlsOiAnXFx1MjkxQScsXG5cdHJhdGlvOiAnXFx1MjIzNicsXG5cdHJhdGlvbmFsczogJ1xcdTIxMUEnLFxuXHRSQmFycjogJ1xcdTI5MTAnLFxuXHRyQmFycjogJ1xcdTI5MEYnLFxuXHRyYmFycjogJ1xcdTI5MEQnLFxuXHRyYmJyazogJ1xcdTI3NzMnLFxuXHRyYnJhY2U6ICdcXHUwMDdEJyxcblx0cmJyYWNrOiAnXFx1MDA1RCcsXG5cdHJicmtlOiAnXFx1Mjk4QycsXG5cdHJicmtzbGQ6ICdcXHUyOThFJyxcblx0cmJya3NsdTogJ1xcdTI5OTAnLFxuXHRSY2Fyb246ICdcXHUwMTU4Jyxcblx0cmNhcm9uOiAnXFx1MDE1OScsXG5cdFJjZWRpbDogJ1xcdTAxNTYnLFxuXHRyY2VkaWw6ICdcXHUwMTU3Jyxcblx0cmNlaWw6ICdcXHUyMzA5Jyxcblx0cmN1YjogJ1xcdTAwN0QnLFxuXHRSY3k6ICdcXHUwNDIwJyxcblx0cmN5OiAnXFx1MDQ0MCcsXG5cdHJkY2E6ICdcXHUyOTM3Jyxcblx0cmRsZGhhcjogJ1xcdTI5NjknLFxuXHRyZHF1bzogJ1xcdTIwMUQnLFxuXHRyZHF1b3I6ICdcXHUyMDFEJyxcblx0cmRzaDogJ1xcdTIxQjMnLFxuXHRSZTogJ1xcdTIxMUMnLFxuXHRyZWFsOiAnXFx1MjExQycsXG5cdHJlYWxpbmU6ICdcXHUyMTFCJyxcblx0cmVhbHBhcnQ6ICdcXHUyMTFDJyxcblx0cmVhbHM6ICdcXHUyMTFEJyxcblx0cmVjdDogJ1xcdTI1QUQnLFxuXHRSRUc6ICdcXHUwMEFFJyxcblx0cmVnOiAnXFx1MDBBRScsXG5cdFJldmVyc2VFbGVtZW50OiAnXFx1MjIwQicsXG5cdFJldmVyc2VFcXVpbGlicml1bTogJ1xcdTIxQ0InLFxuXHRSZXZlcnNlVXBFcXVpbGlicml1bTogJ1xcdTI5NkYnLFxuXHRyZmlzaHQ6ICdcXHUyOTdEJyxcblx0cmZsb29yOiAnXFx1MjMwQicsXG5cdFJmcjogJ1xcdTIxMUMnLFxuXHRyZnI6ICdcXHVEODM1XFx1REQyRicsXG5cdHJIYXI6ICdcXHUyOTY0Jyxcblx0cmhhcmQ6ICdcXHUyMUMxJyxcblx0cmhhcnU6ICdcXHUyMUMwJyxcblx0cmhhcnVsOiAnXFx1Mjk2QycsXG5cdFJobzogJ1xcdTAzQTEnLFxuXHRyaG86ICdcXHUwM0MxJyxcblx0cmhvdjogJ1xcdTAzRjEnLFxuXHRSaWdodEFuZ2xlQnJhY2tldDogJ1xcdTI3RTknLFxuXHRSaWdodEFycm93OiAnXFx1MjE5MicsXG5cdFJpZ2h0YXJyb3c6ICdcXHUyMUQyJyxcblx0cmlnaHRhcnJvdzogJ1xcdTIxOTInLFxuXHRSaWdodEFycm93QmFyOiAnXFx1MjFFNScsXG5cdFJpZ2h0QXJyb3dMZWZ0QXJyb3c6ICdcXHUyMUM0Jyxcblx0cmlnaHRhcnJvd3RhaWw6ICdcXHUyMUEzJyxcblx0UmlnaHRDZWlsaW5nOiAnXFx1MjMwOScsXG5cdFJpZ2h0RG91YmxlQnJhY2tldDogJ1xcdTI3RTcnLFxuXHRSaWdodERvd25UZWVWZWN0b3I6ICdcXHUyOTVEJyxcblx0UmlnaHREb3duVmVjdG9yOiAnXFx1MjFDMicsXG5cdFJpZ2h0RG93blZlY3RvckJhcjogJ1xcdTI5NTUnLFxuXHRSaWdodEZsb29yOiAnXFx1MjMwQicsXG5cdHJpZ2h0aGFycG9vbmRvd246ICdcXHUyMUMxJyxcblx0cmlnaHRoYXJwb29udXA6ICdcXHUyMUMwJyxcblx0cmlnaHRsZWZ0YXJyb3dzOiAnXFx1MjFDNCcsXG5cdHJpZ2h0bGVmdGhhcnBvb25zOiAnXFx1MjFDQycsXG5cdHJpZ2h0cmlnaHRhcnJvd3M6ICdcXHUyMUM5Jyxcblx0cmlnaHRzcXVpZ2Fycm93OiAnXFx1MjE5RCcsXG5cdFJpZ2h0VGVlOiAnXFx1MjJBMicsXG5cdFJpZ2h0VGVlQXJyb3c6ICdcXHUyMUE2Jyxcblx0UmlnaHRUZWVWZWN0b3I6ICdcXHUyOTVCJyxcblx0cmlnaHR0aHJlZXRpbWVzOiAnXFx1MjJDQycsXG5cdFJpZ2h0VHJpYW5nbGU6ICdcXHUyMkIzJyxcblx0UmlnaHRUcmlhbmdsZUJhcjogJ1xcdTI5RDAnLFxuXHRSaWdodFRyaWFuZ2xlRXF1YWw6ICdcXHUyMkI1Jyxcblx0UmlnaHRVcERvd25WZWN0b3I6ICdcXHUyOTRGJyxcblx0UmlnaHRVcFRlZVZlY3RvcjogJ1xcdTI5NUMnLFxuXHRSaWdodFVwVmVjdG9yOiAnXFx1MjFCRScsXG5cdFJpZ2h0VXBWZWN0b3JCYXI6ICdcXHUyOTU0Jyxcblx0UmlnaHRWZWN0b3I6ICdcXHUyMUMwJyxcblx0UmlnaHRWZWN0b3JCYXI6ICdcXHUyOTUzJyxcblx0cmluZzogJ1xcdTAyREEnLFxuXHRyaXNpbmdkb3RzZXE6ICdcXHUyMjUzJyxcblx0cmxhcnI6ICdcXHUyMUM0Jyxcblx0cmxoYXI6ICdcXHUyMUNDJyxcblx0cmxtOiAnXFx1MjAwRicsXG5cdHJtb3VzdDogJ1xcdTIzQjEnLFxuXHRybW91c3RhY2hlOiAnXFx1MjNCMScsXG5cdHJubWlkOiAnXFx1MkFFRScsXG5cdHJvYW5nOiAnXFx1MjdFRCcsXG5cdHJvYXJyOiAnXFx1MjFGRScsXG5cdHJvYnJrOiAnXFx1MjdFNycsXG5cdHJvcGFyOiAnXFx1Mjk4NicsXG5cdFJvcGY6ICdcXHUyMTFEJyxcblx0cm9wZjogJ1xcdUQ4MzVcXHVERDYzJyxcblx0cm9wbHVzOiAnXFx1MkEyRScsXG5cdHJvdGltZXM6ICdcXHUyQTM1Jyxcblx0Um91bmRJbXBsaWVzOiAnXFx1Mjk3MCcsXG5cdHJwYXI6ICdcXHUwMDI5Jyxcblx0cnBhcmd0OiAnXFx1Mjk5NCcsXG5cdHJwcG9saW50OiAnXFx1MkExMicsXG5cdHJyYXJyOiAnXFx1MjFDOScsXG5cdFJyaWdodGFycm93OiAnXFx1MjFEQicsXG5cdHJzYXF1bzogJ1xcdTIwM0EnLFxuXHRSc2NyOiAnXFx1MjExQicsXG5cdHJzY3I6ICdcXHVEODM1XFx1RENDNycsXG5cdFJzaDogJ1xcdTIxQjEnLFxuXHRyc2g6ICdcXHUyMUIxJyxcblx0cnNxYjogJ1xcdTAwNUQnLFxuXHRyc3F1bzogJ1xcdTIwMTknLFxuXHRyc3F1b3I6ICdcXHUyMDE5Jyxcblx0cnRocmVlOiAnXFx1MjJDQycsXG5cdHJ0aW1lczogJ1xcdTIyQ0EnLFxuXHRydHJpOiAnXFx1MjVCOScsXG5cdHJ0cmllOiAnXFx1MjJCNScsXG5cdHJ0cmlmOiAnXFx1MjVCOCcsXG5cdHJ0cmlsdHJpOiAnXFx1MjlDRScsXG5cdFJ1bGVEZWxheWVkOiAnXFx1MjlGNCcsXG5cdHJ1bHVoYXI6ICdcXHUyOTY4Jyxcblx0cng6ICdcXHUyMTFFJyxcblx0U2FjdXRlOiAnXFx1MDE1QScsXG5cdHNhY3V0ZTogJ1xcdTAxNUInLFxuXHRzYnF1bzogJ1xcdTIwMUEnLFxuXHRTYzogJ1xcdTJBQkMnLFxuXHRzYzogJ1xcdTIyN0InLFxuXHRzY2FwOiAnXFx1MkFCOCcsXG5cdFNjYXJvbjogJ1xcdTAxNjAnLFxuXHRzY2Fyb246ICdcXHUwMTYxJyxcblx0c2NjdWU6ICdcXHUyMjdEJyxcblx0c2NFOiAnXFx1MkFCNCcsXG5cdHNjZTogJ1xcdTJBQjAnLFxuXHRTY2VkaWw6ICdcXHUwMTVFJyxcblx0c2NlZGlsOiAnXFx1MDE1RicsXG5cdFNjaXJjOiAnXFx1MDE1QycsXG5cdHNjaXJjOiAnXFx1MDE1RCcsXG5cdHNjbmFwOiAnXFx1MkFCQScsXG5cdHNjbkU6ICdcXHUyQUI2Jyxcblx0c2Nuc2ltOiAnXFx1MjJFOScsXG5cdHNjcG9saW50OiAnXFx1MkExMycsXG5cdHNjc2ltOiAnXFx1MjI3RicsXG5cdFNjeTogJ1xcdTA0MjEnLFxuXHRzY3k6ICdcXHUwNDQxJyxcblx0c2RvdDogJ1xcdTIyQzUnLFxuXHRzZG90YjogJ1xcdTIyQTEnLFxuXHRzZG90ZTogJ1xcdTJBNjYnLFxuXHRzZWFyaGs6ICdcXHUyOTI1Jyxcblx0c2VBcnI6ICdcXHUyMUQ4Jyxcblx0c2VhcnI6ICdcXHUyMTk4Jyxcblx0c2VhcnJvdzogJ1xcdTIxOTgnLFxuXHRzZWN0OiAnXFx1MDBBNycsXG5cdHNlbWk6ICdcXHUwMDNCJyxcblx0c2Vzd2FyOiAnXFx1MjkyOScsXG5cdHNldG1pbnVzOiAnXFx1MjIxNicsXG5cdHNldG1uOiAnXFx1MjIxNicsXG5cdHNleHQ6ICdcXHUyNzM2Jyxcblx0U2ZyOiAnXFx1RDgzNVxcdUREMTYnLFxuXHRzZnI6ICdcXHVEODM1XFx1REQzMCcsXG5cdHNmcm93bjogJ1xcdTIzMjInLFxuXHRzaGFycDogJ1xcdTI2NkYnLFxuXHRTSENIY3k6ICdcXHUwNDI5Jyxcblx0c2hjaGN5OiAnXFx1MDQ0OScsXG5cdFNIY3k6ICdcXHUwNDI4Jyxcblx0c2hjeTogJ1xcdTA0NDgnLFxuXHRTaG9ydERvd25BcnJvdzogJ1xcdTIxOTMnLFxuXHRTaG9ydExlZnRBcnJvdzogJ1xcdTIxOTAnLFxuXHRzaG9ydG1pZDogJ1xcdTIyMjMnLFxuXHRzaG9ydHBhcmFsbGVsOiAnXFx1MjIyNScsXG5cdFNob3J0UmlnaHRBcnJvdzogJ1xcdTIxOTInLFxuXHRTaG9ydFVwQXJyb3c6ICdcXHUyMTkxJyxcblx0c2h5OiAnXFx1MDBBRCcsXG5cdFNpZ21hOiAnXFx1MDNBMycsXG5cdHNpZ21hOiAnXFx1MDNDMycsXG5cdHNpZ21hZjogJ1xcdTAzQzInLFxuXHRzaWdtYXY6ICdcXHUwM0MyJyxcblx0c2ltOiAnXFx1MjIzQycsXG5cdHNpbWRvdDogJ1xcdTJBNkEnLFxuXHRzaW1lOiAnXFx1MjI0MycsXG5cdHNpbWVxOiAnXFx1MjI0MycsXG5cdHNpbWc6ICdcXHUyQTlFJyxcblx0c2ltZ0U6ICdcXHUyQUEwJyxcblx0c2ltbDogJ1xcdTJBOUQnLFxuXHRzaW1sRTogJ1xcdTJBOUYnLFxuXHRzaW1uZTogJ1xcdTIyNDYnLFxuXHRzaW1wbHVzOiAnXFx1MkEyNCcsXG5cdHNpbXJhcnI6ICdcXHUyOTcyJyxcblx0c2xhcnI6ICdcXHUyMTkwJyxcblx0U21hbGxDaXJjbGU6ICdcXHUyMjE4Jyxcblx0c21hbGxzZXRtaW51czogJ1xcdTIyMTYnLFxuXHRzbWFzaHA6ICdcXHUyQTMzJyxcblx0c21lcGFyc2w6ICdcXHUyOUU0Jyxcblx0c21pZDogJ1xcdTIyMjMnLFxuXHRzbWlsZTogJ1xcdTIzMjMnLFxuXHRzbXQ6ICdcXHUyQUFBJyxcblx0c210ZTogJ1xcdTJBQUMnLFxuXHRzbXRlczogJ1xcdTJBQUNcXHVGRTAwJyxcblx0U09GVGN5OiAnXFx1MDQyQycsXG5cdHNvZnRjeTogJ1xcdTA0NEMnLFxuXHRzb2w6ICdcXHUwMDJGJyxcblx0c29sYjogJ1xcdTI5QzQnLFxuXHRzb2xiYXI6ICdcXHUyMzNGJyxcblx0U29wZjogJ1xcdUQ4MzVcXHVERDRBJyxcblx0c29wZjogJ1xcdUQ4MzVcXHVERDY0Jyxcblx0c3BhZGVzOiAnXFx1MjY2MCcsXG5cdHNwYWRlc3VpdDogJ1xcdTI2NjAnLFxuXHRzcGFyOiAnXFx1MjIyNScsXG5cdHNxY2FwOiAnXFx1MjI5MycsXG5cdHNxY2FwczogJ1xcdTIyOTNcXHVGRTAwJyxcblx0c3FjdXA6ICdcXHUyMjk0Jyxcblx0c3FjdXBzOiAnXFx1MjI5NFxcdUZFMDAnLFxuXHRTcXJ0OiAnXFx1MjIxQScsXG5cdHNxc3ViOiAnXFx1MjI4RicsXG5cdHNxc3ViZTogJ1xcdTIyOTEnLFxuXHRzcXN1YnNldDogJ1xcdTIyOEYnLFxuXHRzcXN1YnNldGVxOiAnXFx1MjI5MScsXG5cdHNxc3VwOiAnXFx1MjI5MCcsXG5cdHNxc3VwZTogJ1xcdTIyOTInLFxuXHRzcXN1cHNldDogJ1xcdTIyOTAnLFxuXHRzcXN1cHNldGVxOiAnXFx1MjI5MicsXG5cdHNxdTogJ1xcdTI1QTEnLFxuXHRTcXVhcmU6ICdcXHUyNUExJyxcblx0c3F1YXJlOiAnXFx1MjVBMScsXG5cdFNxdWFyZUludGVyc2VjdGlvbjogJ1xcdTIyOTMnLFxuXHRTcXVhcmVTdWJzZXQ6ICdcXHUyMjhGJyxcblx0U3F1YXJlU3Vic2V0RXF1YWw6ICdcXHUyMjkxJyxcblx0U3F1YXJlU3VwZXJzZXQ6ICdcXHUyMjkwJyxcblx0U3F1YXJlU3VwZXJzZXRFcXVhbDogJ1xcdTIyOTInLFxuXHRTcXVhcmVVbmlvbjogJ1xcdTIyOTQnLFxuXHRzcXVhcmY6ICdcXHUyNUFBJyxcblx0c3F1ZjogJ1xcdTI1QUEnLFxuXHRzcmFycjogJ1xcdTIxOTInLFxuXHRTc2NyOiAnXFx1RDgzNVxcdURDQUUnLFxuXHRzc2NyOiAnXFx1RDgzNVxcdURDQzgnLFxuXHRzc2V0bW46ICdcXHUyMjE2Jyxcblx0c3NtaWxlOiAnXFx1MjMyMycsXG5cdHNzdGFyZjogJ1xcdTIyQzYnLFxuXHRTdGFyOiAnXFx1MjJDNicsXG5cdHN0YXI6ICdcXHUyNjA2Jyxcblx0c3RhcmY6ICdcXHUyNjA1Jyxcblx0c3RyYWlnaHRlcHNpbG9uOiAnXFx1MDNGNScsXG5cdHN0cmFpZ2h0cGhpOiAnXFx1MDNENScsXG5cdHN0cm5zOiAnXFx1MDBBRicsXG5cdFN1YjogJ1xcdTIyRDAnLFxuXHRzdWI6ICdcXHUyMjgyJyxcblx0c3ViZG90OiAnXFx1MkFCRCcsXG5cdHN1YkU6ICdcXHUyQUM1Jyxcblx0c3ViZTogJ1xcdTIyODYnLFxuXHRzdWJlZG90OiAnXFx1MkFDMycsXG5cdHN1Ym11bHQ6ICdcXHUyQUMxJyxcblx0c3VibkU6ICdcXHUyQUNCJyxcblx0c3VibmU6ICdcXHUyMjhBJyxcblx0c3VicGx1czogJ1xcdTJBQkYnLFxuXHRzdWJyYXJyOiAnXFx1Mjk3OScsXG5cdFN1YnNldDogJ1xcdTIyRDAnLFxuXHRzdWJzZXQ6ICdcXHUyMjgyJyxcblx0c3Vic2V0ZXE6ICdcXHUyMjg2Jyxcblx0c3Vic2V0ZXFxOiAnXFx1MkFDNScsXG5cdFN1YnNldEVxdWFsOiAnXFx1MjI4NicsXG5cdHN1YnNldG5lcTogJ1xcdTIyOEEnLFxuXHRzdWJzZXRuZXFxOiAnXFx1MkFDQicsXG5cdHN1YnNpbTogJ1xcdTJBQzcnLFxuXHRzdWJzdWI6ICdcXHUyQUQ1Jyxcblx0c3Vic3VwOiAnXFx1MkFEMycsXG5cdHN1Y2M6ICdcXHUyMjdCJyxcblx0c3VjY2FwcHJveDogJ1xcdTJBQjgnLFxuXHRzdWNjY3VybHllcTogJ1xcdTIyN0QnLFxuXHRTdWNjZWVkczogJ1xcdTIyN0InLFxuXHRTdWNjZWVkc0VxdWFsOiAnXFx1MkFCMCcsXG5cdFN1Y2NlZWRzU2xhbnRFcXVhbDogJ1xcdTIyN0QnLFxuXHRTdWNjZWVkc1RpbGRlOiAnXFx1MjI3RicsXG5cdHN1Y2NlcTogJ1xcdTJBQjAnLFxuXHRzdWNjbmFwcHJveDogJ1xcdTJBQkEnLFxuXHRzdWNjbmVxcTogJ1xcdTJBQjYnLFxuXHRzdWNjbnNpbTogJ1xcdTIyRTknLFxuXHRzdWNjc2ltOiAnXFx1MjI3RicsXG5cdFN1Y2hUaGF0OiAnXFx1MjIwQicsXG5cdFN1bTogJ1xcdTIyMTEnLFxuXHRzdW06ICdcXHUyMjExJyxcblx0c3VuZzogJ1xcdTI2NkEnLFxuXHRTdXA6ICdcXHUyMkQxJyxcblx0c3VwOiAnXFx1MjI4MycsXG5cdHN1cDE6ICdcXHUwMEI5Jyxcblx0c3VwMjogJ1xcdTAwQjInLFxuXHRzdXAzOiAnXFx1MDBCMycsXG5cdHN1cGRvdDogJ1xcdTJBQkUnLFxuXHRzdXBkc3ViOiAnXFx1MkFEOCcsXG5cdHN1cEU6ICdcXHUyQUM2Jyxcblx0c3VwZTogJ1xcdTIyODcnLFxuXHRzdXBlZG90OiAnXFx1MkFDNCcsXG5cdFN1cGVyc2V0OiAnXFx1MjI4MycsXG5cdFN1cGVyc2V0RXF1YWw6ICdcXHUyMjg3Jyxcblx0c3VwaHNvbDogJ1xcdTI3QzknLFxuXHRzdXBoc3ViOiAnXFx1MkFENycsXG5cdHN1cGxhcnI6ICdcXHUyOTdCJyxcblx0c3VwbXVsdDogJ1xcdTJBQzInLFxuXHRzdXBuRTogJ1xcdTJBQ0MnLFxuXHRzdXBuZTogJ1xcdTIyOEInLFxuXHRzdXBwbHVzOiAnXFx1MkFDMCcsXG5cdFN1cHNldDogJ1xcdTIyRDEnLFxuXHRzdXBzZXQ6ICdcXHUyMjgzJyxcblx0c3Vwc2V0ZXE6ICdcXHUyMjg3Jyxcblx0c3Vwc2V0ZXFxOiAnXFx1MkFDNicsXG5cdHN1cHNldG5lcTogJ1xcdTIyOEInLFxuXHRzdXBzZXRuZXFxOiAnXFx1MkFDQycsXG5cdHN1cHNpbTogJ1xcdTJBQzgnLFxuXHRzdXBzdWI6ICdcXHUyQUQ0Jyxcblx0c3Vwc3VwOiAnXFx1MkFENicsXG5cdHN3YXJoazogJ1xcdTI5MjYnLFxuXHRzd0FycjogJ1xcdTIxRDknLFxuXHRzd2FycjogJ1xcdTIxOTknLFxuXHRzd2Fycm93OiAnXFx1MjE5OScsXG5cdHN3bndhcjogJ1xcdTI5MkEnLFxuXHRzemxpZzogJ1xcdTAwREYnLFxuXHRUYWI6ICdcXHUwMDA5Jyxcblx0dGFyZ2V0OiAnXFx1MjMxNicsXG5cdFRhdTogJ1xcdTAzQTQnLFxuXHR0YXU6ICdcXHUwM0M0Jyxcblx0dGJyazogJ1xcdTIzQjQnLFxuXHRUY2Fyb246ICdcXHUwMTY0Jyxcblx0dGNhcm9uOiAnXFx1MDE2NScsXG5cdFRjZWRpbDogJ1xcdTAxNjInLFxuXHR0Y2VkaWw6ICdcXHUwMTYzJyxcblx0VGN5OiAnXFx1MDQyMicsXG5cdHRjeTogJ1xcdTA0NDInLFxuXHR0ZG90OiAnXFx1MjBEQicsXG5cdHRlbHJlYzogJ1xcdTIzMTUnLFxuXHRUZnI6ICdcXHVEODM1XFx1REQxNycsXG5cdHRmcjogJ1xcdUQ4MzVcXHVERDMxJyxcblx0dGhlcmU0OiAnXFx1MjIzNCcsXG5cdFRoZXJlZm9yZTogJ1xcdTIyMzQnLFxuXHR0aGVyZWZvcmU6ICdcXHUyMjM0Jyxcblx0VGhldGE6ICdcXHUwMzk4Jyxcblx0dGhldGE6ICdcXHUwM0I4Jyxcblx0dGhldGFzeW06ICdcXHUwM0QxJyxcblx0dGhldGF2OiAnXFx1MDNEMScsXG5cdHRoaWNrYXBwcm94OiAnXFx1MjI0OCcsXG5cdHRoaWNrc2ltOiAnXFx1MjIzQycsXG5cdFRoaWNrU3BhY2U6ICdcXHUyMDVGXFx1MjAwQScsXG5cdHRoaW5zcDogJ1xcdTIwMDknLFxuXHRUaGluU3BhY2U6ICdcXHUyMDA5Jyxcblx0dGhrYXA6ICdcXHUyMjQ4Jyxcblx0dGhrc2ltOiAnXFx1MjIzQycsXG5cdFRIT1JOOiAnXFx1MDBERScsXG5cdHRob3JuOiAnXFx1MDBGRScsXG5cdFRpbGRlOiAnXFx1MjIzQycsXG5cdHRpbGRlOiAnXFx1MDJEQycsXG5cdFRpbGRlRXF1YWw6ICdcXHUyMjQzJyxcblx0VGlsZGVGdWxsRXF1YWw6ICdcXHUyMjQ1Jyxcblx0VGlsZGVUaWxkZTogJ1xcdTIyNDgnLFxuXHR0aW1lczogJ1xcdTAwRDcnLFxuXHR0aW1lc2I6ICdcXHUyMkEwJyxcblx0dGltZXNiYXI6ICdcXHUyQTMxJyxcblx0dGltZXNkOiAnXFx1MkEzMCcsXG5cdHRpbnQ6ICdcXHUyMjJEJyxcblx0dG9lYTogJ1xcdTI5MjgnLFxuXHR0b3A6ICdcXHUyMkE0Jyxcblx0dG9wYm90OiAnXFx1MjMzNicsXG5cdHRvcGNpcjogJ1xcdTJBRjEnLFxuXHRUb3BmOiAnXFx1RDgzNVxcdURENEInLFxuXHR0b3BmOiAnXFx1RDgzNVxcdURENjUnLFxuXHR0b3Bmb3JrOiAnXFx1MkFEQScsXG5cdHRvc2E6ICdcXHUyOTI5Jyxcblx0dHByaW1lOiAnXFx1MjAzNCcsXG5cdFRSQURFOiAnXFx1MjEyMicsXG5cdHRyYWRlOiAnXFx1MjEyMicsXG5cdHRyaWFuZ2xlOiAnXFx1MjVCNScsXG5cdHRyaWFuZ2xlZG93bjogJ1xcdTI1QkYnLFxuXHR0cmlhbmdsZWxlZnQ6ICdcXHUyNUMzJyxcblx0dHJpYW5nbGVsZWZ0ZXE6ICdcXHUyMkI0Jyxcblx0dHJpYW5nbGVxOiAnXFx1MjI1QycsXG5cdHRyaWFuZ2xlcmlnaHQ6ICdcXHUyNUI5Jyxcblx0dHJpYW5nbGVyaWdodGVxOiAnXFx1MjJCNScsXG5cdHRyaWRvdDogJ1xcdTI1RUMnLFxuXHR0cmllOiAnXFx1MjI1QycsXG5cdHRyaW1pbnVzOiAnXFx1MkEzQScsXG5cdFRyaXBsZURvdDogJ1xcdTIwREInLFxuXHR0cmlwbHVzOiAnXFx1MkEzOScsXG5cdHRyaXNiOiAnXFx1MjlDRCcsXG5cdHRyaXRpbWU6ICdcXHUyQTNCJyxcblx0dHJwZXppdW06ICdcXHUyM0UyJyxcblx0VHNjcjogJ1xcdUQ4MzVcXHVEQ0FGJyxcblx0dHNjcjogJ1xcdUQ4MzVcXHVEQ0M5Jyxcblx0VFNjeTogJ1xcdTA0MjYnLFxuXHR0c2N5OiAnXFx1MDQ0NicsXG5cdFRTSGN5OiAnXFx1MDQwQicsXG5cdHRzaGN5OiAnXFx1MDQ1QicsXG5cdFRzdHJvazogJ1xcdTAxNjYnLFxuXHR0c3Ryb2s6ICdcXHUwMTY3Jyxcblx0dHdpeHQ6ICdcXHUyMjZDJyxcblx0dHdvaGVhZGxlZnRhcnJvdzogJ1xcdTIxOUUnLFxuXHR0d29oZWFkcmlnaHRhcnJvdzogJ1xcdTIxQTAnLFxuXHRVYWN1dGU6ICdcXHUwMERBJyxcblx0dWFjdXRlOiAnXFx1MDBGQScsXG5cdFVhcnI6ICdcXHUyMTlGJyxcblx0dUFycjogJ1xcdTIxRDEnLFxuXHR1YXJyOiAnXFx1MjE5MScsXG5cdFVhcnJvY2lyOiAnXFx1Mjk0OScsXG5cdFVicmN5OiAnXFx1MDQwRScsXG5cdHVicmN5OiAnXFx1MDQ1RScsXG5cdFVicmV2ZTogJ1xcdTAxNkMnLFxuXHR1YnJldmU6ICdcXHUwMTZEJyxcblx0VWNpcmM6ICdcXHUwMERCJyxcblx0dWNpcmM6ICdcXHUwMEZCJyxcblx0VWN5OiAnXFx1MDQyMycsXG5cdHVjeTogJ1xcdTA0NDMnLFxuXHR1ZGFycjogJ1xcdTIxQzUnLFxuXHRVZGJsYWM6ICdcXHUwMTcwJyxcblx0dWRibGFjOiAnXFx1MDE3MScsXG5cdHVkaGFyOiAnXFx1Mjk2RScsXG5cdHVmaXNodDogJ1xcdTI5N0UnLFxuXHRVZnI6ICdcXHVEODM1XFx1REQxOCcsXG5cdHVmcjogJ1xcdUQ4MzVcXHVERDMyJyxcblx0VWdyYXZlOiAnXFx1MDBEOScsXG5cdHVncmF2ZTogJ1xcdTAwRjknLFxuXHR1SGFyOiAnXFx1Mjk2MycsXG5cdHVoYXJsOiAnXFx1MjFCRicsXG5cdHVoYXJyOiAnXFx1MjFCRScsXG5cdHVoYmxrOiAnXFx1MjU4MCcsXG5cdHVsY29ybjogJ1xcdTIzMUMnLFxuXHR1bGNvcm5lcjogJ1xcdTIzMUMnLFxuXHR1bGNyb3A6ICdcXHUyMzBGJyxcblx0dWx0cmk6ICdcXHUyNUY4Jyxcblx0VW1hY3I6ICdcXHUwMTZBJyxcblx0dW1hY3I6ICdcXHUwMTZCJyxcblx0dW1sOiAnXFx1MDBBOCcsXG5cdFVuZGVyQmFyOiAnXFx1MDA1RicsXG5cdFVuZGVyQnJhY2U6ICdcXHUyM0RGJyxcblx0VW5kZXJCcmFja2V0OiAnXFx1MjNCNScsXG5cdFVuZGVyUGFyZW50aGVzaXM6ICdcXHUyM0REJyxcblx0VW5pb246ICdcXHUyMkMzJyxcblx0VW5pb25QbHVzOiAnXFx1MjI4RScsXG5cdFVvZ29uOiAnXFx1MDE3MicsXG5cdHVvZ29uOiAnXFx1MDE3MycsXG5cdFVvcGY6ICdcXHVEODM1XFx1REQ0QycsXG5cdHVvcGY6ICdcXHVEODM1XFx1REQ2NicsXG5cdFVwQXJyb3c6ICdcXHUyMTkxJyxcblx0VXBhcnJvdzogJ1xcdTIxRDEnLFxuXHR1cGFycm93OiAnXFx1MjE5MScsXG5cdFVwQXJyb3dCYXI6ICdcXHUyOTEyJyxcblx0VXBBcnJvd0Rvd25BcnJvdzogJ1xcdTIxQzUnLFxuXHRVcERvd25BcnJvdzogJ1xcdTIxOTUnLFxuXHRVcGRvd25hcnJvdzogJ1xcdTIxRDUnLFxuXHR1cGRvd25hcnJvdzogJ1xcdTIxOTUnLFxuXHRVcEVxdWlsaWJyaXVtOiAnXFx1Mjk2RScsXG5cdHVwaGFycG9vbmxlZnQ6ICdcXHUyMUJGJyxcblx0dXBoYXJwb29ucmlnaHQ6ICdcXHUyMUJFJyxcblx0dXBsdXM6ICdcXHUyMjhFJyxcblx0VXBwZXJMZWZ0QXJyb3c6ICdcXHUyMTk2Jyxcblx0VXBwZXJSaWdodEFycm93OiAnXFx1MjE5NycsXG5cdFVwc2k6ICdcXHUwM0QyJyxcblx0dXBzaTogJ1xcdTAzQzUnLFxuXHR1cHNpaDogJ1xcdTAzRDInLFxuXHRVcHNpbG9uOiAnXFx1MDNBNScsXG5cdHVwc2lsb246ICdcXHUwM0M1Jyxcblx0VXBUZWU6ICdcXHUyMkE1Jyxcblx0VXBUZWVBcnJvdzogJ1xcdTIxQTUnLFxuXHR1cHVwYXJyb3dzOiAnXFx1MjFDOCcsXG5cdHVyY29ybjogJ1xcdTIzMUQnLFxuXHR1cmNvcm5lcjogJ1xcdTIzMUQnLFxuXHR1cmNyb3A6ICdcXHUyMzBFJyxcblx0VXJpbmc6ICdcXHUwMTZFJyxcblx0dXJpbmc6ICdcXHUwMTZGJyxcblx0dXJ0cmk6ICdcXHUyNUY5Jyxcblx0VXNjcjogJ1xcdUQ4MzVcXHVEQ0IwJyxcblx0dXNjcjogJ1xcdUQ4MzVcXHVEQ0NBJyxcblx0dXRkb3Q6ICdcXHUyMkYwJyxcblx0VXRpbGRlOiAnXFx1MDE2OCcsXG5cdHV0aWxkZTogJ1xcdTAxNjknLFxuXHR1dHJpOiAnXFx1MjVCNScsXG5cdHV0cmlmOiAnXFx1MjVCNCcsXG5cdHV1YXJyOiAnXFx1MjFDOCcsXG5cdFV1bWw6ICdcXHUwMERDJyxcblx0dXVtbDogJ1xcdTAwRkMnLFxuXHR1d2FuZ2xlOiAnXFx1MjlBNycsXG5cdHZhbmdydDogJ1xcdTI5OUMnLFxuXHR2YXJlcHNpbG9uOiAnXFx1MDNGNScsXG5cdHZhcmthcHBhOiAnXFx1MDNGMCcsXG5cdHZhcm5vdGhpbmc6ICdcXHUyMjA1Jyxcblx0dmFycGhpOiAnXFx1MDNENScsXG5cdHZhcnBpOiAnXFx1MDNENicsXG5cdHZhcnByb3B0bzogJ1xcdTIyMUQnLFxuXHR2QXJyOiAnXFx1MjFENScsXG5cdHZhcnI6ICdcXHUyMTk1Jyxcblx0dmFycmhvOiAnXFx1MDNGMScsXG5cdHZhcnNpZ21hOiAnXFx1MDNDMicsXG5cdHZhcnN1YnNldG5lcTogJ1xcdTIyOEFcXHVGRTAwJyxcblx0dmFyc3Vic2V0bmVxcTogJ1xcdTJBQ0JcXHVGRTAwJyxcblx0dmFyc3Vwc2V0bmVxOiAnXFx1MjI4QlxcdUZFMDAnLFxuXHR2YXJzdXBzZXRuZXFxOiAnXFx1MkFDQ1xcdUZFMDAnLFxuXHR2YXJ0aGV0YTogJ1xcdTAzRDEnLFxuXHR2YXJ0cmlhbmdsZWxlZnQ6ICdcXHUyMkIyJyxcblx0dmFydHJpYW5nbGVyaWdodDogJ1xcdTIyQjMnLFxuXHRWYmFyOiAnXFx1MkFFQicsXG5cdHZCYXI6ICdcXHUyQUU4Jyxcblx0dkJhcnY6ICdcXHUyQUU5Jyxcblx0VmN5OiAnXFx1MDQxMicsXG5cdHZjeTogJ1xcdTA0MzInLFxuXHRWRGFzaDogJ1xcdTIyQUInLFxuXHRWZGFzaDogJ1xcdTIyQTknLFxuXHR2RGFzaDogJ1xcdTIyQTgnLFxuXHR2ZGFzaDogJ1xcdTIyQTInLFxuXHRWZGFzaGw6ICdcXHUyQUU2Jyxcblx0VmVlOiAnXFx1MjJDMScsXG5cdHZlZTogJ1xcdTIyMjgnLFxuXHR2ZWViYXI6ICdcXHUyMkJCJyxcblx0dmVlZXE6ICdcXHUyMjVBJyxcblx0dmVsbGlwOiAnXFx1MjJFRScsXG5cdFZlcmJhcjogJ1xcdTIwMTYnLFxuXHR2ZXJiYXI6ICdcXHUwMDdDJyxcblx0VmVydDogJ1xcdTIwMTYnLFxuXHR2ZXJ0OiAnXFx1MDA3QycsXG5cdFZlcnRpY2FsQmFyOiAnXFx1MjIyMycsXG5cdFZlcnRpY2FsTGluZTogJ1xcdTAwN0MnLFxuXHRWZXJ0aWNhbFNlcGFyYXRvcjogJ1xcdTI3NTgnLFxuXHRWZXJ0aWNhbFRpbGRlOiAnXFx1MjI0MCcsXG5cdFZlcnlUaGluU3BhY2U6ICdcXHUyMDBBJyxcblx0VmZyOiAnXFx1RDgzNVxcdUREMTknLFxuXHR2ZnI6ICdcXHVEODM1XFx1REQzMycsXG5cdHZsdHJpOiAnXFx1MjJCMicsXG5cdHZuc3ViOiAnXFx1MjI4MlxcdTIwRDInLFxuXHR2bnN1cDogJ1xcdTIyODNcXHUyMEQyJyxcblx0Vm9wZjogJ1xcdUQ4MzVcXHVERDREJyxcblx0dm9wZjogJ1xcdUQ4MzVcXHVERDY3Jyxcblx0dnByb3A6ICdcXHUyMjFEJyxcblx0dnJ0cmk6ICdcXHUyMkIzJyxcblx0VnNjcjogJ1xcdUQ4MzVcXHVEQ0IxJyxcblx0dnNjcjogJ1xcdUQ4MzVcXHVEQ0NCJyxcblx0dnN1Ym5FOiAnXFx1MkFDQlxcdUZFMDAnLFxuXHR2c3VibmU6ICdcXHUyMjhBXFx1RkUwMCcsXG5cdHZzdXBuRTogJ1xcdTJBQ0NcXHVGRTAwJyxcblx0dnN1cG5lOiAnXFx1MjI4QlxcdUZFMDAnLFxuXHRWdmRhc2g6ICdcXHUyMkFBJyxcblx0dnppZ3phZzogJ1xcdTI5OUEnLFxuXHRXY2lyYzogJ1xcdTAxNzQnLFxuXHR3Y2lyYzogJ1xcdTAxNzUnLFxuXHR3ZWRiYXI6ICdcXHUyQTVGJyxcblx0V2VkZ2U6ICdcXHUyMkMwJyxcblx0d2VkZ2U6ICdcXHUyMjI3Jyxcblx0d2VkZ2VxOiAnXFx1MjI1OScsXG5cdHdlaWVycDogJ1xcdTIxMTgnLFxuXHRXZnI6ICdcXHVEODM1XFx1REQxQScsXG5cdHdmcjogJ1xcdUQ4MzVcXHVERDM0Jyxcblx0V29wZjogJ1xcdUQ4MzVcXHVERDRFJyxcblx0d29wZjogJ1xcdUQ4MzVcXHVERDY4Jyxcblx0d3A6ICdcXHUyMTE4Jyxcblx0d3I6ICdcXHUyMjQwJyxcblx0d3JlYXRoOiAnXFx1MjI0MCcsXG5cdFdzY3I6ICdcXHVEODM1XFx1RENCMicsXG5cdHdzY3I6ICdcXHVEODM1XFx1RENDQycsXG5cdHhjYXA6ICdcXHUyMkMyJyxcblx0eGNpcmM6ICdcXHUyNUVGJyxcblx0eGN1cDogJ1xcdTIyQzMnLFxuXHR4ZHRyaTogJ1xcdTI1QkQnLFxuXHRYZnI6ICdcXHVEODM1XFx1REQxQicsXG5cdHhmcjogJ1xcdUQ4MzVcXHVERDM1Jyxcblx0eGhBcnI6ICdcXHUyN0ZBJyxcblx0eGhhcnI6ICdcXHUyN0Y3Jyxcblx0WGk6ICdcXHUwMzlFJyxcblx0eGk6ICdcXHUwM0JFJyxcblx0eGxBcnI6ICdcXHUyN0Y4Jyxcblx0eGxhcnI6ICdcXHUyN0Y1Jyxcblx0eG1hcDogJ1xcdTI3RkMnLFxuXHR4bmlzOiAnXFx1MjJGQicsXG5cdHhvZG90OiAnXFx1MkEwMCcsXG5cdFhvcGY6ICdcXHVEODM1XFx1REQ0RicsXG5cdHhvcGY6ICdcXHVEODM1XFx1REQ2OScsXG5cdHhvcGx1czogJ1xcdTJBMDEnLFxuXHR4b3RpbWU6ICdcXHUyQTAyJyxcblx0eHJBcnI6ICdcXHUyN0Y5Jyxcblx0eHJhcnI6ICdcXHUyN0Y2Jyxcblx0WHNjcjogJ1xcdUQ4MzVcXHVEQ0IzJyxcblx0eHNjcjogJ1xcdUQ4MzVcXHVEQ0NEJyxcblx0eHNxY3VwOiAnXFx1MkEwNicsXG5cdHh1cGx1czogJ1xcdTJBMDQnLFxuXHR4dXRyaTogJ1xcdTI1QjMnLFxuXHR4dmVlOiAnXFx1MjJDMScsXG5cdHh3ZWRnZTogJ1xcdTIyQzAnLFxuXHRZYWN1dGU6ICdcXHUwMEREJyxcblx0eWFjdXRlOiAnXFx1MDBGRCcsXG5cdFlBY3k6ICdcXHUwNDJGJyxcblx0eWFjeTogJ1xcdTA0NEYnLFxuXHRZY2lyYzogJ1xcdTAxNzYnLFxuXHR5Y2lyYzogJ1xcdTAxNzcnLFxuXHRZY3k6ICdcXHUwNDJCJyxcblx0eWN5OiAnXFx1MDQ0QicsXG5cdHllbjogJ1xcdTAwQTUnLFxuXHRZZnI6ICdcXHVEODM1XFx1REQxQycsXG5cdHlmcjogJ1xcdUQ4MzVcXHVERDM2Jyxcblx0WUljeTogJ1xcdTA0MDcnLFxuXHR5aWN5OiAnXFx1MDQ1NycsXG5cdFlvcGY6ICdcXHVEODM1XFx1REQ1MCcsXG5cdHlvcGY6ICdcXHVEODM1XFx1REQ2QScsXG5cdFlzY3I6ICdcXHVEODM1XFx1RENCNCcsXG5cdHlzY3I6ICdcXHVEODM1XFx1RENDRScsXG5cdFlVY3k6ICdcXHUwNDJFJyxcblx0eXVjeTogJ1xcdTA0NEUnLFxuXHRZdW1sOiAnXFx1MDE3OCcsXG5cdHl1bWw6ICdcXHUwMEZGJyxcblx0WmFjdXRlOiAnXFx1MDE3OScsXG5cdHphY3V0ZTogJ1xcdTAxN0EnLFxuXHRaY2Fyb246ICdcXHUwMTdEJyxcblx0emNhcm9uOiAnXFx1MDE3RScsXG5cdFpjeTogJ1xcdTA0MTcnLFxuXHR6Y3k6ICdcXHUwNDM3Jyxcblx0WmRvdDogJ1xcdTAxN0InLFxuXHR6ZG90OiAnXFx1MDE3QycsXG5cdHplZXRyZjogJ1xcdTIxMjgnLFxuXHRaZXJvV2lkdGhTcGFjZTogJ1xcdTIwMEInLFxuXHRaZXRhOiAnXFx1MDM5NicsXG5cdHpldGE6ICdcXHUwM0I2Jyxcblx0WmZyOiAnXFx1MjEyOCcsXG5cdHpmcjogJ1xcdUQ4MzVcXHVERDM3Jyxcblx0WkhjeTogJ1xcdTA0MTYnLFxuXHR6aGN5OiAnXFx1MDQzNicsXG5cdHppZ3JhcnI6ICdcXHUyMUREJyxcblx0Wm9wZjogJ1xcdTIxMjQnLFxuXHR6b3BmOiAnXFx1RDgzNVxcdURENkInLFxuXHRac2NyOiAnXFx1RDgzNVxcdURDQjUnLFxuXHR6c2NyOiAnXFx1RDgzNVxcdURDQ0YnLFxuXHR6d2o6ICdcXHUyMDBEJyxcblx0enduajogJ1xcdTIwMEMnLFxufSk7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIGBIVE1MX0VOVElUSUVTYCBpbnN0ZWFkXG4gKiBAc2VlIEhUTUxfRU5USVRJRVNcbiAqL1xuZXhwb3J0cy5lbnRpdHlNYXAgPSBleHBvcnRzLkhUTUxfRU5USVRJRVM7XG4iLCJ2YXIgZG9tID0gcmVxdWlyZSgnLi9kb20nKVxuZXhwb3J0cy5ET01JbXBsZW1lbnRhdGlvbiA9IGRvbS5ET01JbXBsZW1lbnRhdGlvblxuZXhwb3J0cy5YTUxTZXJpYWxpemVyID0gZG9tLlhNTFNlcmlhbGl6ZXJcbmV4cG9ydHMuRE9NUGFyc2VyID0gcmVxdWlyZSgnLi9kb20tcGFyc2VyJykuRE9NUGFyc2VyXG4iLCJ2YXIgTkFNRVNQQUNFID0gcmVxdWlyZShcIi4vY29udmVudGlvbnNcIikuTkFNRVNQQUNFO1xuXG4vL1s0XSAgIFx0TmFtZVN0YXJ0Q2hhclx0ICAgOjo9ICAgXHRcIjpcIiB8IFtBLVpdIHwgXCJfXCIgfCBbYS16XSB8IFsjeEMwLSN4RDZdIHwgWyN4RDgtI3hGNl0gfCBbI3hGOC0jeDJGRl0gfCBbI3gzNzAtI3gzN0RdIHwgWyN4MzdGLSN4MUZGRl0gfCBbI3gyMDBDLSN4MjAwRF0gfCBbI3gyMDcwLSN4MjE4Rl0gfCBbI3gyQzAwLSN4MkZFRl0gfCBbI3gzMDAxLSN4RDdGRl0gfCBbI3hGOTAwLSN4RkRDRl0gfCBbI3hGREYwLSN4RkZGRF0gfCBbI3gxMDAwMC0jeEVGRkZGXVxuLy9bNGFdICAgXHROYW1lQ2hhclx0ICAgOjo9ICAgXHROYW1lU3RhcnRDaGFyIHwgXCItXCIgfCBcIi5cIiB8IFswLTldIHwgI3hCNyB8IFsjeDAzMDAtI3gwMzZGXSB8IFsjeDIwM0YtI3gyMDQwXVxuLy9bNV0gICBcdE5hbWVcdCAgIDo6PSAgIFx0TmFtZVN0YXJ0Q2hhciAoTmFtZUNoYXIpKlxudmFyIG5hbWVTdGFydENoYXIgPSAvW0EtWl9hLXpcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXS8vL1xcdTEwMDAwLVxcdUVGRkZGXG52YXIgbmFtZUNoYXIgPSBuZXcgUmVnRXhwKFwiW1xcXFwtXFxcXC4wLTlcIituYW1lU3RhcnRDaGFyLnNvdXJjZS5zbGljZSgxLC0xKStcIlxcXFx1MDBCN1xcXFx1MDMwMC1cXFxcdTAzNkZcXFxcdTIwM0YtXFxcXHUyMDQwXVwiKTtcbnZhciB0YWdOYW1lUGF0dGVybiA9IG5ldyBSZWdFeHAoJ14nK25hbWVTdGFydENoYXIuc291cmNlK25hbWVDaGFyLnNvdXJjZSsnKig/OlxcOicrbmFtZVN0YXJ0Q2hhci5zb3VyY2UrbmFtZUNoYXIuc291cmNlKycqKT8kJyk7XG4vL3ZhciB0YWdOYW1lUGF0dGVybiA9IC9eW2EtekEtWl9dW1xcd1xcLVxcLl0qKD86XFw6W2EtekEtWl9dW1xcd1xcLVxcLl0qKT8kL1xuLy92YXIgaGFuZGxlcnMgPSAncmVzb2x2ZUVudGl0eSxnZXRFeHRlcm5hbFN1YnNldCxjaGFyYWN0ZXJzLGVuZERvY3VtZW50LGVuZEVsZW1lbnQsZW5kUHJlZml4TWFwcGluZyxpZ25vcmFibGVXaGl0ZXNwYWNlLHByb2Nlc3NpbmdJbnN0cnVjdGlvbixzZXREb2N1bWVudExvY2F0b3Isc2tpcHBlZEVudGl0eSxzdGFydERvY3VtZW50LHN0YXJ0RWxlbWVudCxzdGFydFByZWZpeE1hcHBpbmcsbm90YXRpb25EZWNsLHVucGFyc2VkRW50aXR5RGVjbCxlcnJvcixmYXRhbEVycm9yLHdhcm5pbmcsYXR0cmlidXRlRGVjbCxlbGVtZW50RGVjbCxleHRlcm5hbEVudGl0eURlY2wsaW50ZXJuYWxFbnRpdHlEZWNsLGNvbW1lbnQsZW5kQ0RBVEEsZW5kRFRELGVuZEVudGl0eSxzdGFydENEQVRBLHN0YXJ0RFRELHN0YXJ0RW50aXR5Jy5zcGxpdCgnLCcpXG5cbi8vU19UQUcsXHRTX0FUVFIsXHRTX0VRLFx0U19BVFRSX05PUVVPVF9WQUxVRVxuLy9TX0FUVFJfU1BBQ0UsXHRTX0FUVFJfRU5ELFx0U19UQUdfU1BBQ0UsIFNfVEFHX0NMT1NFXG52YXIgU19UQUcgPSAwOy8vdGFnIG5hbWUgb2ZmZXJyaW5nXG52YXIgU19BVFRSID0gMTsvL2F0dHIgbmFtZSBvZmZlcnJpbmdcbnZhciBTX0FUVFJfU1BBQ0U9MjsvL2F0dHIgbmFtZSBlbmQgYW5kIHNwYWNlIG9mZmVyXG52YXIgU19FUSA9IDM7Ly89c3BhY2U/XG52YXIgU19BVFRSX05PUVVPVF9WQUxVRSA9IDQ7Ly9hdHRyIHZhbHVlKG5vIHF1b3QgdmFsdWUgb25seSlcbnZhciBTX0FUVFJfRU5EID0gNTsvL2F0dHIgdmFsdWUgZW5kIGFuZCBubyBzcGFjZShxdW90IGVuZClcbnZhciBTX1RBR19TUEFDRSA9IDY7Ly8oYXR0ciB2YWx1ZSBlbmQgfHwgdGFnIGVuZCApICYmIChzcGFjZSBvZmZlcilcbnZhciBTX1RBR19DTE9TRSA9IDc7Ly9jbG9zZWQgZWw8ZWwgLz5cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGVycm9yIHRoYXQgd2lsbCBub3QgYmUgY2F1Z2h0IGJ5IFhNTFJlYWRlciBha2EgdGhlIFNBWCBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7YW55P30gbG9jYXRvciBPcHRpb25hbCwgY2FuIHByb3ZpZGUgZGV0YWlscyBhYm91dCB0aGUgbG9jYXRpb24gaW4gdGhlIHNvdXJjZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFBhcnNlRXJyb3IobWVzc2FnZSwgbG9jYXRvcikge1xuXHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG5cdHRoaXMubG9jYXRvciA9IGxvY2F0b3Jcblx0aWYoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIFBhcnNlRXJyb3IpO1xufVxuUGFyc2VFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblBhcnNlRXJyb3IucHJvdG90eXBlLm5hbWUgPSBQYXJzZUVycm9yLm5hbWVcblxuZnVuY3Rpb24gWE1MUmVhZGVyKCl7XG5cbn1cblxuWE1MUmVhZGVyLnByb3RvdHlwZSA9IHtcblx0cGFyc2U6ZnVuY3Rpb24oc291cmNlLGRlZmF1bHROU01hcCxlbnRpdHlNYXApe1xuXHRcdHZhciBkb21CdWlsZGVyID0gdGhpcy5kb21CdWlsZGVyO1xuXHRcdGRvbUJ1aWxkZXIuc3RhcnREb2N1bWVudCgpO1xuXHRcdF9jb3B5KGRlZmF1bHROU01hcCAsZGVmYXVsdE5TTWFwID0ge30pXG5cdFx0cGFyc2Uoc291cmNlLGRlZmF1bHROU01hcCxlbnRpdHlNYXAsXG5cdFx0XHRcdGRvbUJ1aWxkZXIsdGhpcy5lcnJvckhhbmRsZXIpO1xuXHRcdGRvbUJ1aWxkZXIuZW5kRG9jdW1lbnQoKTtcblx0fVxufVxuZnVuY3Rpb24gcGFyc2Uoc291cmNlLGRlZmF1bHROU01hcENvcHksZW50aXR5TWFwLGRvbUJ1aWxkZXIsZXJyb3JIYW5kbGVyKXtcblx0ZnVuY3Rpb24gZml4ZWRGcm9tQ2hhckNvZGUoY29kZSkge1xuXHRcdC8vIFN0cmluZy5wcm90b3R5cGUuZnJvbUNoYXJDb2RlIGRvZXMgbm90IHN1cHBvcnRzXG5cdFx0Ly8gPiAyIGJ5dGVzIHVuaWNvZGUgY2hhcnMgZGlyZWN0bHlcblx0XHRpZiAoY29kZSA+IDB4ZmZmZikge1xuXHRcdFx0Y29kZSAtPSAweDEwMDAwO1xuXHRcdFx0dmFyIHN1cnJvZ2F0ZTEgPSAweGQ4MDAgKyAoY29kZSA+PiAxMClcblx0XHRcdFx0LCBzdXJyb2dhdGUyID0gMHhkYzAwICsgKGNvZGUgJiAweDNmZik7XG5cblx0XHRcdHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHN1cnJvZ2F0ZTEsIHN1cnJvZ2F0ZTIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZW50aXR5UmVwbGFjZXIoYSl7XG5cdFx0dmFyIGsgPSBhLnNsaWNlKDEsLTEpO1xuXHRcdGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlbnRpdHlNYXAsIGspKSB7XG5cdFx0XHRyZXR1cm4gZW50aXR5TWFwW2tdO1xuXHRcdH1lbHNlIGlmKGsuY2hhckF0KDApID09PSAnIycpe1xuXHRcdFx0cmV0dXJuIGZpeGVkRnJvbUNoYXJDb2RlKHBhcnNlSW50KGsuc3Vic3RyKDEpLnJlcGxhY2UoJ3gnLCcweCcpKSlcblx0XHR9ZWxzZXtcblx0XHRcdGVycm9ySGFuZGxlci5lcnJvcignZW50aXR5IG5vdCBmb3VuZDonK2EpO1xuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGFwcGVuZFRleHQoZW5kKXsvL2hhcyBzb21lIGJ1Z3Ncblx0XHRpZihlbmQ+c3RhcnQpe1xuXHRcdFx0dmFyIHh0ID0gc291cmNlLnN1YnN0cmluZyhzdGFydCxlbmQpLnJlcGxhY2UoLyYjP1xcdys7L2csZW50aXR5UmVwbGFjZXIpO1xuXHRcdFx0bG9jYXRvciYmcG9zaXRpb24oc3RhcnQpO1xuXHRcdFx0ZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHh0LDAsZW5kLXN0YXJ0KTtcblx0XHRcdHN0YXJ0ID0gZW5kXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHBvc2l0aW9uKHAsbSl7XG5cdFx0d2hpbGUocD49bGluZUVuZCAmJiAobSA9IGxpbmVQYXR0ZXJuLmV4ZWMoc291cmNlKSkpe1xuXHRcdFx0bGluZVN0YXJ0ID0gbS5pbmRleDtcblx0XHRcdGxpbmVFbmQgPSBsaW5lU3RhcnQgKyBtWzBdLmxlbmd0aDtcblx0XHRcdGxvY2F0b3IubGluZU51bWJlcisrO1xuXHRcdFx0Ly9jb25zb2xlLmxvZygnbGluZSsrOicsbG9jYXRvcixzdGFydFBvcyxlbmRQb3MpXG5cdFx0fVxuXHRcdGxvY2F0b3IuY29sdW1uTnVtYmVyID0gcC1saW5lU3RhcnQrMTtcblx0fVxuXHR2YXIgbGluZVN0YXJ0ID0gMDtcblx0dmFyIGxpbmVFbmQgPSAwO1xuXHR2YXIgbGluZVBhdHRlcm4gPSAvLiooPzpcXHJcXG4/fFxcbil8LiokL2dcblx0dmFyIGxvY2F0b3IgPSBkb21CdWlsZGVyLmxvY2F0b3I7XG5cblx0dmFyIHBhcnNlU3RhY2sgPSBbe2N1cnJlbnROU01hcDpkZWZhdWx0TlNNYXBDb3B5fV1cblx0dmFyIGNsb3NlTWFwID0ge307XG5cdHZhciBzdGFydCA9IDA7XG5cdHdoaWxlKHRydWUpe1xuXHRcdHRyeXtcblx0XHRcdHZhciB0YWdTdGFydCA9IHNvdXJjZS5pbmRleE9mKCc8JyxzdGFydCk7XG5cdFx0XHRpZih0YWdTdGFydDwwKXtcblx0XHRcdFx0aWYoIXNvdXJjZS5zdWJzdHIoc3RhcnQpLm1hdGNoKC9eXFxzKiQvKSl7XG5cdFx0XHRcdFx0dmFyIGRvYyA9IGRvbUJ1aWxkZXIuZG9jO1xuXHQgICAgXHRcdFx0dmFyIHRleHQgPSBkb2MuY3JlYXRlVGV4dE5vZGUoc291cmNlLnN1YnN0cihzdGFydCkpO1xuXHQgICAgXHRcdFx0ZG9jLmFwcGVuZENoaWxkKHRleHQpO1xuXHQgICAgXHRcdFx0ZG9tQnVpbGRlci5jdXJyZW50RWxlbWVudCA9IHRleHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYodGFnU3RhcnQ+c3RhcnQpe1xuXHRcdFx0XHRhcHBlbmRUZXh0KHRhZ1N0YXJ0KTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaChzb3VyY2UuY2hhckF0KHRhZ1N0YXJ0KzEpKXtcblx0XHRcdGNhc2UgJy8nOlxuXHRcdFx0XHR2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJz4nLHRhZ1N0YXJ0KzMpO1xuXHRcdFx0XHR2YXIgdGFnTmFtZSA9IHNvdXJjZS5zdWJzdHJpbmcodGFnU3RhcnQgKyAyLCBlbmQpLnJlcGxhY2UoL1sgXFx0XFxuXFxyXSskL2csICcnKTtcblx0XHRcdFx0dmFyIGNvbmZpZyA9IHBhcnNlU3RhY2sucG9wKCk7XG5cdFx0XHRcdGlmKGVuZDwwKXtcblxuXHQgICAgICAgIFx0XHR0YWdOYW1lID0gc291cmNlLnN1YnN0cmluZyh0YWdTdGFydCsyKS5yZXBsYWNlKC9bXFxzPF0uKi8sJycpO1xuXHQgICAgICAgIFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiK3RhZ05hbWUrJyBpcyBub3QgY29tcGxldGU6Jytjb25maWcudGFnTmFtZSk7XG5cdCAgICAgICAgXHRcdGVuZCA9IHRhZ1N0YXJ0KzErdGFnTmFtZS5sZW5ndGg7XG5cdCAgICAgICAgXHR9ZWxzZSBpZih0YWdOYW1lLm1hdGNoKC9cXHM8Lykpe1xuXHQgICAgICAgIFx0XHR0YWdOYW1lID0gdGFnTmFtZS5yZXBsYWNlKC9bXFxzPF0uKi8sJycpO1xuXHQgICAgICAgIFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiK3RhZ05hbWUrJyBtYXliZSBub3QgY29tcGxldGUnKTtcblx0ICAgICAgICBcdFx0ZW5kID0gdGFnU3RhcnQrMSt0YWdOYW1lLmxlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgbG9jYWxOU01hcCA9IGNvbmZpZy5sb2NhbE5TTWFwO1xuXHRcdFx0XHR2YXIgZW5kTWF0Y2ggPSBjb25maWcudGFnTmFtZSA9PSB0YWdOYW1lO1xuXHRcdFx0XHR2YXIgZW5kSWdub3JlQ2FzZU1hY2ggPSBlbmRNYXRjaCB8fCBjb25maWcudGFnTmFtZSYmY29uZmlnLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSB0YWdOYW1lLnRvTG93ZXJDYXNlKClcblx0XHQgICAgICAgIGlmKGVuZElnbm9yZUNhc2VNYWNoKXtcblx0XHQgICAgICAgIFx0ZG9tQnVpbGRlci5lbmRFbGVtZW50KGNvbmZpZy51cmksY29uZmlnLmxvY2FsTmFtZSx0YWdOYW1lKTtcblx0XHRcdFx0XHRpZihsb2NhbE5TTWFwKXtcblx0XHRcdFx0XHRcdGZvciAodmFyIHByZWZpeCBpbiBsb2NhbE5TTWFwKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobG9jYWxOU01hcCwgcHJlZml4KSkge1xuXHRcdFx0XHRcdFx0XHRcdGRvbUJ1aWxkZXIuZW5kUHJlZml4TWFwcGluZyhwcmVmaXgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKCFlbmRNYXRjaCl7XG5cdFx0ICAgICAgICAgICAgXHRlcnJvckhhbmRsZXIuZmF0YWxFcnJvcihcImVuZCB0YWcgbmFtZTogXCIrdGFnTmFtZSsnIGlzIG5vdCBtYXRjaCB0aGUgY3VycmVudCBzdGFydCB0YWdOYW1lOicrY29uZmlnLnRhZ05hbWUgKTsgLy8gTm8ga25vd24gdGVzdCBjYXNlXG5cdFx0XHRcdFx0fVxuXHRcdCAgICAgICAgfWVsc2V7XG5cdFx0ICAgICAgICBcdHBhcnNlU3RhY2sucHVzaChjb25maWcpXG5cdFx0ICAgICAgICB9XG5cblx0XHRcdFx0ZW5kKys7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHQvLyBlbmQgZWxtZW50XG5cdFx0XHRjYXNlICc/JzovLyA8Py4uLj8+XG5cdFx0XHRcdGxvY2F0b3ImJnBvc2l0aW9uKHRhZ1N0YXJ0KTtcblx0XHRcdFx0ZW5kID0gcGFyc2VJbnN0cnVjdGlvbihzb3VyY2UsdGFnU3RhcnQsZG9tQnVpbGRlcik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnISc6Ly8gPCFkb2N0eXBlLDwhW0NEQVRBLDwhLS1cblx0XHRcdFx0bG9jYXRvciYmcG9zaXRpb24odGFnU3RhcnQpO1xuXHRcdFx0XHRlbmQgPSBwYXJzZURDQyhzb3VyY2UsdGFnU3RhcnQsZG9tQnVpbGRlcixlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGxvY2F0b3ImJnBvc2l0aW9uKHRhZ1N0YXJ0KTtcblx0XHRcdFx0dmFyIGVsID0gbmV3IEVsZW1lbnRBdHRyaWJ1dGVzKCk7XG5cdFx0XHRcdHZhciBjdXJyZW50TlNNYXAgPSBwYXJzZVN0YWNrW3BhcnNlU3RhY2subGVuZ3RoLTFdLmN1cnJlbnROU01hcDtcblx0XHRcdFx0Ly9lbFN0YXJ0RW5kXG5cdFx0XHRcdHZhciBlbmQgPSBwYXJzZUVsZW1lbnRTdGFydFBhcnQoc291cmNlLHRhZ1N0YXJ0LGVsLGN1cnJlbnROU01hcCxlbnRpdHlSZXBsYWNlcixlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHR2YXIgbGVuID0gZWwubGVuZ3RoO1xuXG5cblx0XHRcdFx0aWYoIWVsLmNsb3NlZCAmJiBmaXhTZWxmQ2xvc2VkKHNvdXJjZSxlbmQsZWwudGFnTmFtZSxjbG9zZU1hcCkpe1xuXHRcdFx0XHRcdGVsLmNsb3NlZCA9IHRydWU7XG5cdFx0XHRcdFx0aWYoIWVudGl0eU1hcC5uYnNwKXtcblx0XHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCd1bmNsb3NlZCB4bWwgYXR0cmlidXRlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKGxvY2F0b3IgJiYgbGVuKXtcblx0XHRcdFx0XHR2YXIgbG9jYXRvcjIgPSBjb3B5TG9jYXRvcihsb2NhdG9yLHt9KTtcblx0XHRcdFx0XHQvL3RyeXsvL2F0dHJpYnV0ZSBwb3NpdGlvbiBmaXhlZFxuXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7aTxsZW47aSsrKXtcblx0XHRcdFx0XHRcdHZhciBhID0gZWxbaV07XG5cdFx0XHRcdFx0XHRwb3NpdGlvbihhLm9mZnNldCk7XG5cdFx0XHRcdFx0XHRhLmxvY2F0b3IgPSBjb3B5TG9jYXRvcihsb2NhdG9yLHt9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZG9tQnVpbGRlci5sb2NhdG9yID0gbG9jYXRvcjJcblx0XHRcdFx0XHRpZihhcHBlbmRFbGVtZW50KGVsLGRvbUJ1aWxkZXIsY3VycmVudE5TTWFwKSl7XG5cdFx0XHRcdFx0XHRwYXJzZVN0YWNrLnB1c2goZWwpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRvbUJ1aWxkZXIubG9jYXRvciA9IGxvY2F0b3I7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGlmKGFwcGVuZEVsZW1lbnQoZWwsZG9tQnVpbGRlcixjdXJyZW50TlNNYXApKXtcblx0XHRcdFx0XHRcdHBhcnNlU3RhY2sucHVzaChlbClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoTkFNRVNQQUNFLmlzSFRNTChlbC51cmkpICYmICFlbC5jbG9zZWQpIHtcblx0XHRcdFx0XHRlbmQgPSBwYXJzZUh0bWxTcGVjaWFsQ29udGVudChzb3VyY2UsZW5kLGVsLnRhZ05hbWUsZW50aXR5UmVwbGFjZXIsZG9tQnVpbGRlcilcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbmQrKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1jYXRjaChlKXtcblx0XHRcdGlmIChlIGluc3RhbmNlb2YgUGFyc2VFcnJvcikge1xuXHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0fVxuXHRcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKCdlbGVtZW50IHBhcnNlIGVycm9yOiAnK2UpXG5cdFx0XHRlbmQgPSAtMTtcblx0XHR9XG5cdFx0aWYoZW5kPnN0YXJ0KXtcblx0XHRcdHN0YXJ0ID0gZW5kO1xuXHRcdH1lbHNle1xuXHRcdFx0Ly9UT0RPOiDov5nph4zmnInlj6/og71zYXjlm57pgIDvvIzmnInkvY3nva7plJnor6/po47pmalcblx0XHRcdGFwcGVuZFRleHQoTWF0aC5tYXgodGFnU3RhcnQsc3RhcnQpKzEpO1xuXHRcdH1cblx0fVxufVxuZnVuY3Rpb24gY29weUxvY2F0b3IoZix0KXtcblx0dC5saW5lTnVtYmVyID0gZi5saW5lTnVtYmVyO1xuXHR0LmNvbHVtbk51bWJlciA9IGYuY29sdW1uTnVtYmVyO1xuXHRyZXR1cm4gdDtcbn1cblxuLyoqXG4gKiBAc2VlICNhcHBlbmRFbGVtZW50KHNvdXJjZSxlbFN0YXJ0RW5kLGVsLHNlbGZDbG9zZWQsZW50aXR5UmVwbGFjZXIsZG9tQnVpbGRlcixwYXJzZVN0YWNrKTtcbiAqIEByZXR1cm4gZW5kIG9mIHRoZSBlbGVtZW50U3RhcnRQYXJ0KGVuZCBvZiBlbGVtZW50RW5kUGFydCBmb3Igc2VsZkNsb3NlZCBlbClcbiAqL1xuZnVuY3Rpb24gcGFyc2VFbGVtZW50U3RhcnRQYXJ0KHNvdXJjZSxzdGFydCxlbCxjdXJyZW50TlNNYXAsZW50aXR5UmVwbGFjZXIsZXJyb3JIYW5kbGVyKXtcblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHFuYW1lXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRJbmRleFxuXHQgKi9cblx0ZnVuY3Rpb24gYWRkQXR0cmlidXRlKHFuYW1lLCB2YWx1ZSwgc3RhcnRJbmRleCkge1xuXHRcdGlmIChlbC5hdHRyaWJ1dGVOYW1lcy5oYXNPd25Qcm9wZXJ0eShxbmFtZSkpIHtcblx0XHRcdGVycm9ySGFuZGxlci5mYXRhbEVycm9yKCdBdHRyaWJ1dGUgJyArIHFuYW1lICsgJyByZWRlZmluZWQnKVxuXHRcdH1cblx0XHRlbC5hZGRWYWx1ZShcblx0XHRcdHFuYW1lLFxuXHRcdFx0Ly8gQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLyNBVk5vcm1hbGl6ZVxuXHRcdFx0Ly8gc2luY2UgdGhlIHhtbGRvbSBzYXggcGFyc2VyIGRvZXMgbm90IFwiaW50ZXJwcmV0XCIgRFREIHRoZSBmb2xsb3dpbmcgaXMgbm90IGltcGxlbWVudGVkOlxuXHRcdFx0Ly8gLSByZWN1cnNpdmUgcmVwbGFjZW1lbnQgb2YgKERURCkgZW50aXR5IHJlZmVyZW5jZXNcblx0XHRcdC8vIC0gdHJpbW1pbmcgYW5kIGNvbGxhcHNpbmcgbXVsdGlwbGUgc3BhY2VzIGludG8gYSBzaW5nbGUgb25lIGZvciBhdHRyaWJ1dGVzIHRoYXQgYXJlIG5vdCBvZiB0eXBlIENEQVRBXG5cdFx0XHR2YWx1ZS5yZXBsYWNlKC9bXFx0XFxuXFxyXS9nLCAnICcpLnJlcGxhY2UoLyYjP1xcdys7L2csIGVudGl0eVJlcGxhY2VyKSxcblx0XHRcdHN0YXJ0SW5kZXhcblx0XHQpXG5cdH1cblx0dmFyIGF0dHJOYW1lO1xuXHR2YXIgdmFsdWU7XG5cdHZhciBwID0gKytzdGFydDtcblx0dmFyIHMgPSBTX1RBRzsvL3N0YXR1c1xuXHR3aGlsZSh0cnVlKXtcblx0XHR2YXIgYyA9IHNvdXJjZS5jaGFyQXQocCk7XG5cdFx0c3dpdGNoKGMpe1xuXHRcdGNhc2UgJz0nOlxuXHRcdFx0aWYocyA9PT0gU19BVFRSKXsvL2F0dHJOYW1lXG5cdFx0XHRcdGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LHApO1xuXHRcdFx0XHRzID0gU19FUTtcblx0XHRcdH1lbHNlIGlmKHMgPT09IFNfQVRUUl9TUEFDRSl7XG5cdFx0XHRcdHMgPSBTX0VRO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8vZmF0YWxFcnJvcjogZXF1YWwgbXVzdCBhZnRlciBhdHRyTmFtZSBvciBzcGFjZSBhZnRlciBhdHRyTmFtZVxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSBlcXVhbCBtdXN0IGFmdGVyIGF0dHJOYW1lJyk7IC8vIE5vIGtub3duIHRlc3QgY2FzZVxuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnXFwnJzpcblx0XHRjYXNlICdcIic6XG5cdFx0XHRpZihzID09PSBTX0VRIHx8IHMgPT09IFNfQVRUUiAvL3x8IHMgPT0gU19BVFRSX1NQQUNFXG5cdFx0XHRcdCl7Ly9lcXVhbFxuXHRcdFx0XHRpZihzID09PSBTX0FUVFIpe1xuXHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgdmFsdWUgbXVzdCBhZnRlciBcIj1cIicpXG5cdFx0XHRcdFx0YXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQscClcblx0XHRcdFx0fVxuXHRcdFx0XHRzdGFydCA9IHArMTtcblx0XHRcdFx0cCA9IHNvdXJjZS5pbmRleE9mKGMsc3RhcnQpXG5cdFx0XHRcdGlmKHA+MCl7XG5cdFx0XHRcdFx0dmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0LTEpO1xuXHRcdFx0XHRcdHMgPSBTX0FUVFJfRU5EO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHQvL2ZhdGFsRXJyb3I6IG5vIGVuZCBxdW90IG1hdGNoXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbm8gZW5kIFxcJycrYysnXFwnIG1hdGNoJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1lbHNlIGlmKHMgPT0gU19BVFRSX05PUVVPVF9WQUxVRSl7XG5cdFx0XHRcdHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKTtcblx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQpO1xuXHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJythdHRyTmFtZSsnXCIgbWlzc2VkIHN0YXJ0IHF1b3QoJytjKycpISEnKTtcblx0XHRcdFx0c3RhcnQgPSBwKzE7XG5cdFx0XHRcdHMgPSBTX0FUVFJfRU5EXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Ly9mYXRhbEVycm9yOiBubyBlcXVhbCBiZWZvcmVcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbXVzdCBhZnRlciBcIj1cIicpOyAvLyBObyBrbm93biB0ZXN0IGNhc2Vcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJy8nOlxuXHRcdFx0c3dpdGNoKHMpe1xuXHRcdFx0Y2FzZSBTX1RBRzpcblx0XHRcdFx0ZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQscCkpO1xuXHRcdFx0Y2FzZSBTX0FUVFJfRU5EOlxuXHRcdFx0Y2FzZSBTX1RBR19TUEFDRTpcblx0XHRcdGNhc2UgU19UQUdfQ0xPU0U6XG5cdFx0XHRcdHMgPVNfVEFHX0NMT1NFO1xuXHRcdFx0XHRlbC5jbG9zZWQgPSB0cnVlO1xuXHRcdFx0Y2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuXHRcdFx0Y2FzZSBTX0FUVFI6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfQVRUUl9TUEFDRTpcblx0XHRcdFx0XHRlbC5jbG9zZWQgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdC8vY2FzZSBTX0VROlxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXR0cmlidXRlIGludmFsaWQgY2xvc2UgY2hhcignLycpXCIpIC8vIE5vIGtub3duIHRlc3QgY2FzZVxuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnJzovL2VuZCBkb2N1bWVudFxuXHRcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKCd1bmV4cGVjdGVkIGVuZCBvZiBpbnB1dCcpO1xuXHRcdFx0aWYocyA9PSBTX1RBRyl7XG5cdFx0XHRcdGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LHApKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwO1xuXHRcdGNhc2UgJz4nOlxuXHRcdFx0c3dpdGNoKHMpe1xuXHRcdFx0Y2FzZSBTX1RBRzpcblx0XHRcdFx0ZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQscCkpO1xuXHRcdFx0Y2FzZSBTX0FUVFJfRU5EOlxuXHRcdFx0Y2FzZSBTX1RBR19TUEFDRTpcblx0XHRcdGNhc2UgU19UQUdfQ0xPU0U6XG5cdFx0XHRcdGJyZWFrOy8vbm9ybWFsXG5cdFx0XHRjYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6Ly9Db21wYXRpYmxlIHN0YXRlXG5cdFx0XHRjYXNlIFNfQVRUUjpcblx0XHRcdFx0dmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQscCk7XG5cdFx0XHRcdGlmKHZhbHVlLnNsaWNlKC0xKSA9PT0gJy8nKXtcblx0XHRcdFx0XHRlbC5jbG9zZWQgID0gdHJ1ZTtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsLTEpXG5cdFx0XHRcdH1cblx0XHRcdGNhc2UgU19BVFRSX1NQQUNFOlxuXHRcdFx0XHRpZihzID09PSBTX0FUVFJfU1BBQ0Upe1xuXHRcdFx0XHRcdHZhbHVlID0gYXR0ck5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYocyA9PSBTX0FUVFJfTk9RVU9UX1ZBTFVFKXtcblx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyt2YWx1ZSsnXCIgbWlzc2VkIHF1b3QoXCIpIScpO1xuXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0KVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZighTkFNRVNQQUNFLmlzSFRNTChjdXJyZW50TlNNYXBbJyddKSB8fCAhdmFsdWUubWF0Y2goL14oPzpkaXNhYmxlZHxjaGVja2VkfHNlbGVjdGVkKSQvaSkpe1xuXHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicrdmFsdWUrJ1wiIG1pc3NlZCB2YWx1ZSEhIFwiJyt2YWx1ZSsnXCIgaW5zdGVhZCEhJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKHZhbHVlLCB2YWx1ZSwgc3RhcnQpXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFNfRVE6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIHZhbHVlIG1pc3NlZCEhJyk7XG5cdFx0XHR9XG4vL1x0XHRcdGNvbnNvbGUubG9nKHRhZ05hbWUsdGFnTmFtZVBhdHRlcm4sdGFnTmFtZVBhdHRlcm4udGVzdCh0YWdOYW1lKSlcblx0XHRcdHJldHVybiBwO1xuXHRcdC8qeG1sIHNwYWNlICdcXHgyMCcgfCAjeDkgfCAjeEQgfCAjeEE7ICovXG5cdFx0Y2FzZSAnXFx1MDA4MCc6XG5cdFx0XHRjID0gJyAnO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRpZihjPD0gJyAnKXsvL3NwYWNlXG5cdFx0XHRcdHN3aXRjaChzKXtcblx0XHRcdFx0Y2FzZSBTX1RBRzpcblx0XHRcdFx0XHRlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCxwKSk7Ly90YWdOYW1lXG5cdFx0XHRcdFx0cyA9IFNfVEFHX1NQQUNFO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfQVRUUjpcblx0XHRcdFx0XHRhdHRyTmFtZSA9IHNvdXJjZS5zbGljZShzdGFydCxwKVxuXHRcdFx0XHRcdHMgPSBTX0FUVFJfU1BBQ0U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19BVFRSX05PUVVPVF9WQUxVRTpcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuXHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK3ZhbHVlKydcIiBtaXNzZWQgcXVvdChcIikhIScpO1xuXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0KVxuXHRcdFx0XHRjYXNlIFNfQVRUUl9FTkQ6XG5cdFx0XHRcdFx0cyA9IFNfVEFHX1NQQUNFO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHQvL2Nhc2UgU19UQUdfU1BBQ0U6XG5cdFx0XHRcdC8vY2FzZSBTX0VROlxuXHRcdFx0XHQvL2Nhc2UgU19BVFRSX1NQQUNFOlxuXHRcdFx0XHQvL1x0dm9pZCgpO2JyZWFrO1xuXHRcdFx0XHQvL2Nhc2UgU19UQUdfQ0xPU0U6XG5cdFx0XHRcdFx0Ly9pZ25vcmUgd2FybmluZ1xuXHRcdFx0XHR9XG5cdFx0XHR9ZWxzZXsvL25vdCBzcGFjZVxuLy9TX1RBRyxcdFNfQVRUUixcdFNfRVEsXHRTX0FUVFJfTk9RVU9UX1ZBTFVFXG4vL1NfQVRUUl9TUEFDRSxcdFNfQVRUUl9FTkQsXHRTX1RBR19TUEFDRSwgU19UQUdfQ0xPU0Vcblx0XHRcdFx0c3dpdGNoKHMpe1xuXHRcdFx0XHQvL2Nhc2UgU19UQUc6dm9pZCgpO2JyZWFrO1xuXHRcdFx0XHQvL2Nhc2UgU19BVFRSOnZvaWQoKTticmVhaztcblx0XHRcdFx0Ly9jYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6dm9pZCgpO2JyZWFrO1xuXHRcdFx0XHRjYXNlIFNfQVRUUl9TUEFDRTpcblx0XHRcdFx0XHR2YXIgdGFnTmFtZSA9ICBlbC50YWdOYW1lO1xuXHRcdFx0XHRcdGlmICghTkFNRVNQQUNFLmlzSFRNTChjdXJyZW50TlNNYXBbJyddKSB8fCAhYXR0ck5hbWUubWF0Y2goL14oPzpkaXNhYmxlZHxjaGVja2VkfHNlbGVjdGVkKSQvaSkpIHtcblx0XHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK2F0dHJOYW1lKydcIiBtaXNzZWQgdmFsdWUhISBcIicrYXR0ck5hbWUrJ1wiIGluc3RlYWQyISEnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJOYW1lLCBzdGFydCk7XG5cdFx0XHRcdFx0c3RhcnQgPSBwO1xuXHRcdFx0XHRcdHMgPSBTX0FUVFI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19BVFRSX0VORDpcblx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIHNwYWNlIGlzIHJlcXVpcmVkXCInK2F0dHJOYW1lKydcIiEhJylcblx0XHRcdFx0Y2FzZSBTX1RBR19TUEFDRTpcblx0XHRcdFx0XHRzID0gU19BVFRSO1xuXHRcdFx0XHRcdHN0YXJ0ID0gcDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0VROlxuXHRcdFx0XHRcdHMgPSBTX0FUVFJfTk9RVU9UX1ZBTFVFO1xuXHRcdFx0XHRcdHN0YXJ0ID0gcDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX1RBR19DTE9TRTpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJlbGVtZW50cyBjbG9zZWQgY2hhcmFjdGVyICcvJyBhbmQgJz4nIG11c3QgYmUgY29ubmVjdGVkIHRvXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fS8vZW5kIG91dGVyIHN3aXRjaFxuXHRcdC8vY29uc29sZS5sb2coJ3ArKycscClcblx0XHRwKys7XG5cdH1cbn1cbi8qKlxuICogQHJldHVybiB0cnVlIGlmIGhhcyBuZXcgbmFtZXNwYWNlIGRlZmluZVxuICovXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50KGVsLGRvbUJ1aWxkZXIsY3VycmVudE5TTWFwKXtcblx0dmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuXHR2YXIgbG9jYWxOU01hcCA9IG51bGw7XG5cdC8vdmFyIGN1cnJlbnROU01hcCA9IHBhcnNlU3RhY2tbcGFyc2VTdGFjay5sZW5ndGgtMV0uY3VycmVudE5TTWFwO1xuXHR2YXIgaSA9IGVsLmxlbmd0aDtcblx0d2hpbGUoaS0tKXtcblx0XHR2YXIgYSA9IGVsW2ldO1xuXHRcdHZhciBxTmFtZSA9IGEucU5hbWU7XG5cdFx0dmFyIHZhbHVlID0gYS52YWx1ZTtcblx0XHR2YXIgbnNwID0gcU5hbWUuaW5kZXhPZignOicpO1xuXHRcdGlmKG5zcD4wKXtcblx0XHRcdHZhciBwcmVmaXggPSBhLnByZWZpeCA9IHFOYW1lLnNsaWNlKDAsbnNwKTtcblx0XHRcdHZhciBsb2NhbE5hbWUgPSBxTmFtZS5zbGljZShuc3ArMSk7XG5cdFx0XHR2YXIgbnNQcmVmaXggPSBwcmVmaXggPT09ICd4bWxucycgJiYgbG9jYWxOYW1lXG5cdFx0fWVsc2V7XG5cdFx0XHRsb2NhbE5hbWUgPSBxTmFtZTtcblx0XHRcdHByZWZpeCA9IG51bGxcblx0XHRcdG5zUHJlZml4ID0gcU5hbWUgPT09ICd4bWxucycgJiYgJydcblx0XHR9XG5cdFx0Ly9jYW4gbm90IHNldCBwcmVmaXgsYmVjYXVzZSBwcmVmaXggIT09ICcnXG5cdFx0YS5sb2NhbE5hbWUgPSBsb2NhbE5hbWUgO1xuXHRcdC8vcHJlZml4ID09IG51bGwgZm9yIG5vIG5zIHByZWZpeCBhdHRyaWJ1dGVcblx0XHRpZihuc1ByZWZpeCAhPT0gZmFsc2Upey8vaGFjayEhXG5cdFx0XHRpZihsb2NhbE5TTWFwID09IG51bGwpe1xuXHRcdFx0XHRsb2NhbE5TTWFwID0ge31cblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhjdXJyZW50TlNNYXAsMClcblx0XHRcdFx0X2NvcHkoY3VycmVudE5TTWFwLGN1cnJlbnROU01hcD17fSlcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhjdXJyZW50TlNNYXAsMSlcblx0XHRcdH1cblx0XHRcdGN1cnJlbnROU01hcFtuc1ByZWZpeF0gPSBsb2NhbE5TTWFwW25zUHJlZml4XSA9IHZhbHVlO1xuXHRcdFx0YS51cmkgPSBOQU1FU1BBQ0UuWE1MTlNcblx0XHRcdGRvbUJ1aWxkZXIuc3RhcnRQcmVmaXhNYXBwaW5nKG5zUHJlZml4LCB2YWx1ZSlcblx0XHR9XG5cdH1cblx0dmFyIGkgPSBlbC5sZW5ndGg7XG5cdHdoaWxlKGktLSl7XG5cdFx0YSA9IGVsW2ldO1xuXHRcdHZhciBwcmVmaXggPSBhLnByZWZpeDtcblx0XHRpZihwcmVmaXgpey8vbm8gcHJlZml4IGF0dHJpYnV0ZSBoYXMgbm8gbmFtZXNwYWNlXG5cdFx0XHRpZihwcmVmaXggPT09ICd4bWwnKXtcblx0XHRcdFx0YS51cmkgPSBOQU1FU1BBQ0UuWE1MO1xuXHRcdFx0fWlmKHByZWZpeCAhPT0gJ3htbG5zJyl7XG5cdFx0XHRcdGEudXJpID0gY3VycmVudE5TTWFwW3ByZWZpeCB8fCAnJ11cblxuXHRcdFx0XHQvL3tjb25zb2xlLmxvZygnIyMjJythLnFOYW1lLGRvbUJ1aWxkZXIubG9jYXRvci5zeXN0ZW1JZCsnJyxjdXJyZW50TlNNYXAsYS51cmkpfVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR2YXIgbnNwID0gdGFnTmFtZS5pbmRleE9mKCc6Jyk7XG5cdGlmKG5zcD4wKXtcblx0XHRwcmVmaXggPSBlbC5wcmVmaXggPSB0YWdOYW1lLnNsaWNlKDAsbnNwKTtcblx0XHRsb2NhbE5hbWUgPSBlbC5sb2NhbE5hbWUgPSB0YWdOYW1lLnNsaWNlKG5zcCsxKTtcblx0fWVsc2V7XG5cdFx0cHJlZml4ID0gbnVsbDsvL2ltcG9ydGFudCEhXG5cdFx0bG9jYWxOYW1lID0gZWwubG9jYWxOYW1lID0gdGFnTmFtZTtcblx0fVxuXHQvL25vIHByZWZpeCBlbGVtZW50IGhhcyBkZWZhdWx0IG5hbWVzcGFjZVxuXHR2YXIgbnMgPSBlbC51cmkgPSBjdXJyZW50TlNNYXBbcHJlZml4IHx8ICcnXTtcblx0ZG9tQnVpbGRlci5zdGFydEVsZW1lbnQobnMsbG9jYWxOYW1lLHRhZ05hbWUsZWwpO1xuXHQvL2VuZFByZWZpeE1hcHBpbmcgYW5kIHN0YXJ0UHJlZml4TWFwcGluZyBoYXZlIG5vdCBhbnkgaGVscCBmb3IgZG9tIGJ1aWxkZXJcblx0Ly9sb2NhbE5TTWFwID0gbnVsbFxuXHRpZihlbC5jbG9zZWQpe1xuXHRcdGRvbUJ1aWxkZXIuZW5kRWxlbWVudChucyxsb2NhbE5hbWUsdGFnTmFtZSk7XG5cdFx0aWYobG9jYWxOU01hcCl7XG5cdFx0XHRmb3IgKHByZWZpeCBpbiBsb2NhbE5TTWFwKSB7XG5cdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobG9jYWxOU01hcCwgcHJlZml4KSkge1xuXHRcdFx0XHRcdGRvbUJ1aWxkZXIuZW5kUHJlZml4TWFwcGluZyhwcmVmaXgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9ZWxzZXtcblx0XHRlbC5jdXJyZW50TlNNYXAgPSBjdXJyZW50TlNNYXA7XG5cdFx0ZWwubG9jYWxOU01hcCA9IGxvY2FsTlNNYXA7XG5cdFx0Ly9wYXJzZVN0YWNrLnB1c2goZWwpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5mdW5jdGlvbiBwYXJzZUh0bWxTcGVjaWFsQ29udGVudChzb3VyY2UsZWxTdGFydEVuZCx0YWdOYW1lLGVudGl0eVJlcGxhY2VyLGRvbUJ1aWxkZXIpe1xuXHRpZigvXig/OnNjcmlwdHx0ZXh0YXJlYSkkL2kudGVzdCh0YWdOYW1lKSl7XG5cdFx0dmFyIGVsRW5kU3RhcnQgPSAgc291cmNlLmluZGV4T2YoJzwvJyt0YWdOYW1lKyc+JyxlbFN0YXJ0RW5kKTtcblx0XHR2YXIgdGV4dCA9IHNvdXJjZS5zdWJzdHJpbmcoZWxTdGFydEVuZCsxLGVsRW5kU3RhcnQpO1xuXHRcdGlmKC9bJjxdLy50ZXN0KHRleHQpKXtcblx0XHRcdGlmKC9ec2NyaXB0JC9pLnRlc3QodGFnTmFtZSkpe1xuXHRcdFx0XHQvL2lmKCEvXFxdXFxdPi8udGVzdCh0ZXh0KSl7XG5cdFx0XHRcdFx0Ly9sZXhIYW5kbGVyLnN0YXJ0Q0RBVEEoKTtcblx0XHRcdFx0XHRkb21CdWlsZGVyLmNoYXJhY3RlcnModGV4dCwwLHRleHQubGVuZ3RoKTtcblx0XHRcdFx0XHQvL2xleEhhbmRsZXIuZW5kQ0RBVEEoKTtcblx0XHRcdFx0XHRyZXR1cm4gZWxFbmRTdGFydDtcblx0XHRcdFx0Ly99XG5cdFx0XHR9Ly99ZWxzZXsvL3RleHQgYXJlYVxuXHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC8mIz9cXHcrOy9nLGVudGl0eVJlcGxhY2VyKTtcblx0XHRcdFx0ZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHRleHQsMCx0ZXh0Lmxlbmd0aCk7XG5cdFx0XHRcdHJldHVybiBlbEVuZFN0YXJ0O1xuXHRcdFx0Ly99XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIGVsU3RhcnRFbmQrMTtcbn1cbmZ1bmN0aW9uIGZpeFNlbGZDbG9zZWQoc291cmNlLGVsU3RhcnRFbmQsdGFnTmFtZSxjbG9zZU1hcCl7XG5cdC8vaWYodGFnTmFtZSBpbiBjbG9zZU1hcCl7XG5cdHZhciBwb3MgPSBjbG9zZU1hcFt0YWdOYW1lXTtcblx0aWYocG9zID09IG51bGwpe1xuXHRcdC8vY29uc29sZS5sb2codGFnTmFtZSlcblx0XHRwb3MgPSAgc291cmNlLmxhc3RJbmRleE9mKCc8LycrdGFnTmFtZSsnPicpXG5cdFx0aWYocG9zPGVsU3RhcnRFbmQpey8v5b+Y6K6w6Zet5ZCIXG5cdFx0XHRwb3MgPSBzb3VyY2UubGFzdEluZGV4T2YoJzwvJyt0YWdOYW1lKVxuXHRcdH1cblx0XHRjbG9zZU1hcFt0YWdOYW1lXSA9cG9zXG5cdH1cblx0cmV0dXJuIHBvczxlbFN0YXJ0RW5kO1xuXHQvL31cbn1cblxuZnVuY3Rpb24gX2NvcHkgKHNvdXJjZSwgdGFyZ2V0KSB7XG5cdGZvciAodmFyIG4gaW4gc291cmNlKSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIG4pKSB7XG5cdFx0XHR0YXJnZXRbbl0gPSBzb3VyY2Vbbl07XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRENDKHNvdXJjZSxzdGFydCxkb21CdWlsZGVyLGVycm9ySGFuZGxlcil7Ly9zdXJlIHN0YXJ0IHdpdGggJzwhJ1xuXHR2YXIgbmV4dD0gc291cmNlLmNoYXJBdChzdGFydCsyKVxuXHRzd2l0Y2gobmV4dCl7XG5cdGNhc2UgJy0nOlxuXHRcdGlmKHNvdXJjZS5jaGFyQXQoc3RhcnQgKyAzKSA9PT0gJy0nKXtcblx0XHRcdHZhciBlbmQgPSBzb3VyY2UuaW5kZXhPZignLS0+JyxzdGFydCs0KTtcblx0XHRcdC8vYXBwZW5kIGNvbW1lbnQgc291cmNlLnN1YnN0cmluZyg0LGVuZCkvLzwhLS1cblx0XHRcdGlmKGVuZD5zdGFydCl7XG5cdFx0XHRcdGRvbUJ1aWxkZXIuY29tbWVudChzb3VyY2Usc3RhcnQrNCxlbmQtc3RhcnQtNCk7XG5cdFx0XHRcdHJldHVybiBlbmQrMztcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoXCJVbmNsb3NlZCBjb21tZW50XCIpO1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHQvL2Vycm9yXG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXHRkZWZhdWx0OlxuXHRcdGlmKHNvdXJjZS5zdWJzdHIoc3RhcnQrMyw2KSA9PSAnQ0RBVEFbJyl7XG5cdFx0XHR2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJ11dPicsc3RhcnQrOSk7XG5cdFx0XHRkb21CdWlsZGVyLnN0YXJ0Q0RBVEEoKTtcblx0XHRcdGRvbUJ1aWxkZXIuY2hhcmFjdGVycyhzb3VyY2Usc3RhcnQrOSxlbmQtc3RhcnQtOSk7XG5cdFx0XHRkb21CdWlsZGVyLmVuZENEQVRBKClcblx0XHRcdHJldHVybiBlbmQrMztcblx0XHR9XG5cdFx0Ly88IURPQ1RZUEVcblx0XHQvL3N0YXJ0RFREKGphdmEubGFuZy5TdHJpbmcgbmFtZSwgamF2YS5sYW5nLlN0cmluZyBwdWJsaWNJZCwgamF2YS5sYW5nLlN0cmluZyBzeXN0ZW1JZClcblx0XHR2YXIgbWF0Y2hzID0gc3BsaXQoc291cmNlLHN0YXJ0KTtcblx0XHR2YXIgbGVuID0gbWF0Y2hzLmxlbmd0aDtcblx0XHRpZihsZW4+MSAmJiAvIWRvY3R5cGUvaS50ZXN0KG1hdGNoc1swXVswXSkpe1xuXHRcdFx0dmFyIG5hbWUgPSBtYXRjaHNbMV1bMF07XG5cdFx0XHR2YXIgcHViaWQgPSBmYWxzZTtcblx0XHRcdHZhciBzeXNpZCA9IGZhbHNlO1xuXHRcdFx0aWYobGVuPjMpe1xuXHRcdFx0XHRpZigvXnB1YmxpYyQvaS50ZXN0KG1hdGNoc1syXVswXSkpe1xuXHRcdFx0XHRcdHB1YmlkID0gbWF0Y2hzWzNdWzBdO1xuXHRcdFx0XHRcdHN5c2lkID0gbGVuPjQgJiYgbWF0Y2hzWzRdWzBdO1xuXHRcdFx0XHR9ZWxzZSBpZigvXnN5c3RlbSQvaS50ZXN0KG1hdGNoc1syXVswXSkpe1xuXHRcdFx0XHRcdHN5c2lkID0gbWF0Y2hzWzNdWzBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR2YXIgbGFzdE1hdGNoID0gbWF0Y2hzW2xlbi0xXVxuXHRcdFx0ZG9tQnVpbGRlci5zdGFydERURChuYW1lLCBwdWJpZCwgc3lzaWQpO1xuXHRcdFx0ZG9tQnVpbGRlci5lbmREVEQoKTtcblxuXHRcdFx0cmV0dXJuIGxhc3RNYXRjaC5pbmRleCtsYXN0TWF0Y2hbMF0ubGVuZ3RoXG5cdFx0fVxuXHR9XG5cdHJldHVybiAtMTtcbn1cblxuXG5cbmZ1bmN0aW9uIHBhcnNlSW5zdHJ1Y3Rpb24oc291cmNlLHN0YXJ0LGRvbUJ1aWxkZXIpe1xuXHR2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJz8+JyxzdGFydCk7XG5cdGlmKGVuZCl7XG5cdFx0dmFyIG1hdGNoID0gc291cmNlLnN1YnN0cmluZyhzdGFydCxlbmQpLm1hdGNoKC9ePFxcPyhcXFMqKVxccyooW1xcc1xcU10qPylcXHMqJC8pO1xuXHRcdGlmKG1hdGNoKXtcblx0XHRcdHZhciBsZW4gPSBtYXRjaFswXS5sZW5ndGg7XG5cdFx0XHRkb21CdWlsZGVyLnByb2Nlc3NpbmdJbnN0cnVjdGlvbihtYXRjaFsxXSwgbWF0Y2hbMl0pIDtcblx0XHRcdHJldHVybiBlbmQrMjtcblx0XHR9ZWxzZXsvL2Vycm9yXG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gRWxlbWVudEF0dHJpYnV0ZXMoKXtcblx0dGhpcy5hdHRyaWJ1dGVOYW1lcyA9IHt9XG59XG5FbGVtZW50QXR0cmlidXRlcy5wcm90b3R5cGUgPSB7XG5cdHNldFRhZ05hbWU6ZnVuY3Rpb24odGFnTmFtZSl7XG5cdFx0aWYoIXRhZ05hbWVQYXR0ZXJuLnRlc3QodGFnTmFtZSkpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHRhZ05hbWU6Jyt0YWdOYW1lKVxuXHRcdH1cblx0XHR0aGlzLnRhZ05hbWUgPSB0YWdOYW1lXG5cdH0sXG5cdGFkZFZhbHVlOmZ1bmN0aW9uKHFOYW1lLCB2YWx1ZSwgb2Zmc2V0KSB7XG5cdFx0aWYoIXRhZ05hbWVQYXR0ZXJuLnRlc3QocU5hbWUpKXtcblx0XHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCBhdHRyaWJ1dGU6JytxTmFtZSlcblx0XHR9XG5cdFx0dGhpcy5hdHRyaWJ1dGVOYW1lc1txTmFtZV0gPSB0aGlzLmxlbmd0aDtcblx0XHR0aGlzW3RoaXMubGVuZ3RoKytdID0ge3FOYW1lOnFOYW1lLHZhbHVlOnZhbHVlLG9mZnNldDpvZmZzZXR9XG5cdH0sXG5cdGxlbmd0aDowLFxuXHRnZXRMb2NhbE5hbWU6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXNbaV0ubG9jYWxOYW1lfSxcblx0Z2V0TG9jYXRvcjpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS5sb2NhdG9yfSxcblx0Z2V0UU5hbWU6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXNbaV0ucU5hbWV9LFxuXHRnZXRVUkk6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXNbaV0udXJpfSxcblx0Z2V0VmFsdWU6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXNbaV0udmFsdWV9XG4vL1x0LGdldEluZGV4OmZ1bmN0aW9uKHVyaSwgbG9jYWxOYW1lKSl7XG4vL1x0XHRpZihsb2NhbE5hbWUpe1xuLy9cbi8vXHRcdH1lbHNle1xuLy9cdFx0XHR2YXIgcU5hbWUgPSB1cmlcbi8vXHRcdH1cbi8vXHR9LFxuLy9cdGdldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VmFsdWUodGhpcy5nZXRJbmRleC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxcbi8vXHRnZXRUeXBlOmZ1bmN0aW9uKHVyaSxsb2NhbE5hbWUpe31cbi8vXHRnZXRUeXBlOmZ1bmN0aW9uKGkpe30sXG59XG5cblxuXG5mdW5jdGlvbiBzcGxpdChzb3VyY2Usc3RhcnQpe1xuXHR2YXIgbWF0Y2g7XG5cdHZhciBidWYgPSBbXTtcblx0dmFyIHJlZyA9IC8nW14nXSsnfFwiW15cIl0rXCJ8W15cXHM8PlxcLz1dKz0/fChcXC8/XFxzKj58PCkvZztcblx0cmVnLmxhc3RJbmRleCA9IHN0YXJ0O1xuXHRyZWcuZXhlYyhzb3VyY2UpOy8vc2tpcCA8XG5cdHdoaWxlKG1hdGNoID0gcmVnLmV4ZWMoc291cmNlKSl7XG5cdFx0YnVmLnB1c2gobWF0Y2gpO1xuXHRcdGlmKG1hdGNoWzFdKXJldHVybiBidWY7XG5cdH1cbn1cblxuZXhwb3J0cy5YTUxSZWFkZXIgPSBYTUxSZWFkZXI7XG5leHBvcnRzLlBhcnNlRXJyb3IgPSBQYXJzZUVycm9yO1xuIiwidmFyIHdpbjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICB3aW4gPSBzZWxmO1xufSBlbHNlIHtcbiAgICB3aW4gPSB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aW47XG4iLCIvKiEgQG5hbWUgbXBkLXBhcnNlciBAdmVyc2lvbiAxLjIuMiBAbGljZW5zZSBBcGFjaGUtMi4wICovXG5pbXBvcnQgcmVzb2x2ZVVybCBmcm9tICdAdmlkZW9qcy92aHMtdXRpbHMvZXMvcmVzb2x2ZS11cmwnO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7IGZvckVhY2hNZWRpYUdyb3VwIH0gZnJvbSAnQHZpZGVvanMvdmhzLXV0aWxzL2VzL21lZGlhLWdyb3Vwcyc7XG5pbXBvcnQgZGVjb2RlQjY0VG9VaW50OEFycmF5IGZyb20gJ0B2aWRlb2pzL3Zocy11dGlscy9lcy9kZWNvZGUtYjY0LXRvLXVpbnQ4LWFycmF5JztcbmltcG9ydCB7IERPTVBhcnNlciB9IGZyb20gJ0B4bWxkb20veG1sZG9tJztcblxudmFyIHZlcnNpb24gPSBcIjEuMi4yXCI7XG5cbmNvbnN0IGlzT2JqZWN0ID0gb2JqID0+IHtcbiAgcmV0dXJuICEhb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuY29uc3QgbWVyZ2UgPSAoLi4ub2JqZWN0cykgPT4ge1xuICByZXR1cm4gb2JqZWN0cy5yZWR1Y2UoKHJlc3VsdCwgc291cmNlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0W2tleV0pICYmIEFycmF5LmlzQXJyYXkoc291cmNlW2tleV0pKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gcmVzdWx0W2tleV0uY29uY2F0KHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QocmVzdWx0W2tleV0pICYmIGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHt9KTtcbn07XG5jb25zdCB2YWx1ZXMgPSBvID0+IE9iamVjdC5rZXlzKG8pLm1hcChrID0+IG9ba10pO1xuXG5jb25zdCByYW5nZSA9IChzdGFydCwgZW5kKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goaSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbmNvbnN0IGZsYXR0ZW4gPSBsaXN0cyA9PiBsaXN0cy5yZWR1Y2UoKHgsIHkpID0+IHguY29uY2F0KHkpLCBbXSk7XG5jb25zdCBmcm9tID0gbGlzdCA9PiB7XG4gIGlmICghbGlzdC5sZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChsaXN0W2ldKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuY29uc3QgZmluZEluZGV4ZXMgPSAobCwga2V5KSA9PiBsLnJlZHVjZSgoYSwgZSwgaSkgPT4ge1xuICBpZiAoZVtrZXldKSB7XG4gICAgYS5wdXNoKGkpO1xuICB9XG5cbiAgcmV0dXJuIGE7XG59LCBbXSk7XG4vKipcbiAqIFJldHVybnMgYSB1bmlvbiBvZiB0aGUgaW5jbHVkZWQgbGlzdHMgcHJvdmlkZWQgZWFjaCBlbGVtZW50IGNhbiBiZSBpZGVudGlmaWVkIGJ5IGEga2V5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgLSBsaXN0IG9mIGxpc3RzIHRvIGdldCB0aGUgdW5pb24gb2ZcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleUZ1bmN0aW9uIC0gdGhlIGZ1bmN0aW9uIHRvIHVzZSBhcyBhIGtleSBmb3IgZWFjaCBlbGVtZW50XG4gKlxuICogQHJldHVybiB7QXJyYXl9IHRoZSB1bmlvbiBvZiB0aGUgYXJyYXlzXG4gKi9cblxuY29uc3QgdW5pb24gPSAobGlzdHMsIGtleUZ1bmN0aW9uKSA9PiB7XG4gIHJldHVybiB2YWx1ZXMobGlzdHMucmVkdWNlKChhY2MsIGxpc3QpID0+IHtcbiAgICBsaXN0LmZvckVhY2goZWwgPT4ge1xuICAgICAgYWNjW2tleUZ1bmN0aW9uKGVsKV0gPSBlbDtcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSkpO1xufTtcblxudmFyIGVycm9ycyA9IHtcbiAgSU5WQUxJRF9OVU1CRVJfT0ZfUEVSSU9EOiAnSU5WQUxJRF9OVU1CRVJfT0ZfUEVSSU9EJyxcbiAgSU5WQUxJRF9OVU1CRVJfT0ZfQ09OVEVOVF9TVEVFUklORzogJ0lOVkFMSURfTlVNQkVSX09GX0NPTlRFTlRfU1RFRVJJTkcnLFxuICBEQVNIX0VNUFRZX01BTklGRVNUOiAnREFTSF9FTVBUWV9NQU5JRkVTVCcsXG4gIERBU0hfSU5WQUxJRF9YTUw6ICdEQVNIX0lOVkFMSURfWE1MJyxcbiAgTk9fQkFTRV9VUkw6ICdOT19CQVNFX1VSTCcsXG4gIE1JU1NJTkdfU0VHTUVOVF9JTkZPUk1BVElPTjogJ01JU1NJTkdfU0VHTUVOVF9JTkZPUk1BVElPTicsXG4gIFNFR01FTlRfVElNRV9VTlNQRUNJRklFRDogJ1NFR01FTlRfVElNRV9VTlNQRUNJRklFRCcsXG4gIFVOU1VQUE9SVEVEX1VUQ19USU1JTkdfU0NIRU1FOiAnVU5TVVBQT1JURURfVVRDX1RJTUlOR19TQ0hFTUUnXG59O1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNpbmdsZVVyaVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVyaSAtIHJlbGF0aXZlIGxvY2F0aW9uIG9mIHNlZ21lbnRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZXNvbHZlZFVyaSAtIHJlc29sdmVkIGxvY2F0aW9uIG9mIHNlZ21lbnRcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBieXRlcmFuZ2UgLSBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBvbiBob3cgdG8gbWFrZSBieXRlIHJhbmdlXG4gKiAgIHJlcXVlc3RzIGZvbGxvd2luZyBieXRlLXJhbmdlLXNwZWMgcGVyIFJGQzI2MTYuXG4gKiBAcHJvcGVydHkge1N0cmluZ30gYnl0ZXJhbmdlLmxlbmd0aCAtIGxlbmd0aCBvZiByYW5nZSByZXF1ZXN0XG4gKiBAcHJvcGVydHkge1N0cmluZ30gYnl0ZXJhbmdlLm9mZnNldCAtIGJ5dGUgb2Zmc2V0IG9mIHJhbmdlIHJlcXVlc3RcbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzE0Lmh0bWwjc2VjMTQuMzUuMVxuICovXG5cbi8qKlxuICogQ29udmVydHMgYSBVUkxUeXBlIG5vZGUgKDUuMy45LjIuMyBUYWJsZSAxMykgdG8gYSBzZWdtZW50IG9iamVjdFxuICogdGhhdCBjb25mb3JtcyB0byBob3cgbTN1OC1wYXJzZXIgaXMgc3RydWN0dXJlZFxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3ZpZGVvanMvbTN1OC1wYXJzZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybCAtIGJhc2VVcmwgcHJvdmlkZWQgYnkgPEJhc2VVcmw+IG5vZGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIC0gc291cmNlIHVybCBmb3Igc2VnbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHJhbmdlIC0gb3B0aW9uYWwgcmFuZ2UgdXNlZCBmb3IgcmFuZ2UgY2FsbHMsXG4gKiAgIGZvbGxvd3MgIFJGQyAyNjE2LCBDbGF1c2UgMTQuMzUuMVxuICogQHJldHVybiB7U2luZ2xlVXJpfSBmdWxsIHNlZ21lbnQgaW5mb3JtYXRpb24gdHJhbnNmb3JtZWQgaW50byBhIGZvcm1hdCBzaW1pbGFyXG4gKiAgIHRvIG0zdTgtcGFyc2VyXG4gKi9cblxuY29uc3QgdXJsVHlwZVRvU2VnbWVudCA9ICh7XG4gIGJhc2VVcmwgPSAnJyxcbiAgc291cmNlID0gJycsXG4gIHJhbmdlID0gJycsXG4gIGluZGV4UmFuZ2UgPSAnJ1xufSkgPT4ge1xuICBjb25zdCBzZWdtZW50ID0ge1xuICAgIHVyaTogc291cmNlLFxuICAgIHJlc29sdmVkVXJpOiByZXNvbHZlVXJsKGJhc2VVcmwgfHwgJycsIHNvdXJjZSlcbiAgfTtcblxuICBpZiAocmFuZ2UgfHwgaW5kZXhSYW5nZSkge1xuICAgIGNvbnN0IHJhbmdlU3RyID0gcmFuZ2UgPyByYW5nZSA6IGluZGV4UmFuZ2U7XG4gICAgY29uc3QgcmFuZ2VzID0gcmFuZ2VTdHIuc3BsaXQoJy0nKTsgLy8gZGVmYXVsdCB0byBwYXJzaW5nIHRoaXMgYXMgYSBCaWdJbnQgaWYgcG9zc2libGVcblxuICAgIGxldCBzdGFydFJhbmdlID0gd2luZG93LkJpZ0ludCA/IHdpbmRvdy5CaWdJbnQocmFuZ2VzWzBdKSA6IHBhcnNlSW50KHJhbmdlc1swXSwgMTApO1xuICAgIGxldCBlbmRSYW5nZSA9IHdpbmRvdy5CaWdJbnQgPyB3aW5kb3cuQmlnSW50KHJhbmdlc1sxXSkgOiBwYXJzZUludChyYW5nZXNbMV0sIDEwKTsgLy8gY29udmVydCBiYWNrIHRvIGEgbnVtYmVyIGlmIGxlc3MgdGhhbiBNQVhfU0FGRV9JTlRFR0VSXG5cbiAgICBpZiAoc3RhcnRSYW5nZSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICYmIHR5cGVvZiBzdGFydFJhbmdlID09PSAnYmlnaW50Jykge1xuICAgICAgc3RhcnRSYW5nZSA9IE51bWJlcihzdGFydFJhbmdlKTtcbiAgICB9XG5cbiAgICBpZiAoZW5kUmFuZ2UgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAmJiB0eXBlb2YgZW5kUmFuZ2UgPT09ICdiaWdpbnQnKSB7XG4gICAgICBlbmRSYW5nZSA9IE51bWJlcihlbmRSYW5nZSk7XG4gICAgfVxuXG4gICAgbGV0IGxlbmd0aDtcblxuICAgIGlmICh0eXBlb2YgZW5kUmFuZ2UgPT09ICdiaWdpbnQnIHx8IHR5cGVvZiBzdGFydFJhbmdlID09PSAnYmlnaW50Jykge1xuICAgICAgbGVuZ3RoID0gd2luZG93LkJpZ0ludChlbmRSYW5nZSkgLSB3aW5kb3cuQmlnSW50KHN0YXJ0UmFuZ2UpICsgd2luZG93LkJpZ0ludCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gZW5kUmFuZ2UgLSBzdGFydFJhbmdlICsgMTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGxlbmd0aCA9PT0gJ2JpZ2ludCcgJiYgbGVuZ3RoIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpO1xuICAgIH0gLy8gYnl0ZXJhbmdlIHNob3VsZCBiZSBpbmNsdXNpdmUgYWNjb3JkaW5nIHRvXG4gICAgLy8gUkZDIDI2MTYsIENsYXVzZSAxNC4zNS4xXG5cblxuICAgIHNlZ21lbnQuYnl0ZXJhbmdlID0ge1xuICAgICAgbGVuZ3RoLFxuICAgICAgb2Zmc2V0OiBzdGFydFJhbmdlXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzZWdtZW50O1xufTtcbmNvbnN0IGJ5dGVSYW5nZVRvU3RyaW5nID0gYnl0ZXJhbmdlID0+IHtcbiAgLy8gYGVuZFJhbmdlYCBpcyBvbmUgbGVzcyB0aGFuIGBvZmZzZXQgKyBsZW5ndGhgIGJlY2F1c2UgdGhlIEhUVFAgcmFuZ2VcbiAgLy8gaGVhZGVyIHVzZXMgaW5jbHVzaXZlIHJhbmdlc1xuICBsZXQgZW5kUmFuZ2U7XG5cbiAgaWYgKHR5cGVvZiBieXRlcmFuZ2Uub2Zmc2V0ID09PSAnYmlnaW50JyB8fCB0eXBlb2YgYnl0ZXJhbmdlLmxlbmd0aCA9PT0gJ2JpZ2ludCcpIHtcbiAgICBlbmRSYW5nZSA9IHdpbmRvdy5CaWdJbnQoYnl0ZXJhbmdlLm9mZnNldCkgKyB3aW5kb3cuQmlnSW50KGJ5dGVyYW5nZS5sZW5ndGgpIC0gd2luZG93LkJpZ0ludCgxKTtcbiAgfSBlbHNlIHtcbiAgICBlbmRSYW5nZSA9IGJ5dGVyYW5nZS5vZmZzZXQgKyBieXRlcmFuZ2UubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHJldHVybiBgJHtieXRlcmFuZ2Uub2Zmc2V0fS0ke2VuZFJhbmdlfWA7XG59O1xuXG4vKipcbiAqIHBhcnNlIHRoZSBlbmQgbnVtYmVyIGF0dHJpYnVlIHRoYXQgY2FuIGJlIGEgc3RyaW5nXG4gKiBudW1iZXIsIG9yIHVuZGVmaW5lZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8dW5kZWZpbmVkfSBlbmROdW1iZXJcbiAqICAgICAgICBUaGUgZW5kIG51bWJlciBhdHRyaWJ1dGUuXG4gKlxuICogQHJldHVybiB7bnVtYmVyfG51bGx9XG4gKiAgICAgICAgICBUaGUgcmVzdWx0IG9mIHBhcnNpbmcgdGhlIGVuZCBudW1iZXIuXG4gKi9cblxuY29uc3QgcGFyc2VFbmROdW1iZXIgPSBlbmROdW1iZXIgPT4ge1xuICBpZiAoZW5kTnVtYmVyICYmIHR5cGVvZiBlbmROdW1iZXIgIT09ICdudW1iZXInKSB7XG4gICAgZW5kTnVtYmVyID0gcGFyc2VJbnQoZW5kTnVtYmVyLCAxMCk7XG4gIH1cblxuICBpZiAoaXNOYU4oZW5kTnVtYmVyKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVuZE51bWJlcjtcbn07XG4vKipcbiAqIEZ1bmN0aW9ucyBmb3IgY2FsY3VsYXRpbmcgdGhlIHJhbmdlIG9mIGF2YWlsYWJsZSBzZWdtZW50cyBpbiBzdGF0aWMgYW5kIGR5bmFtaWNcbiAqIG1hbmlmZXN0cy5cbiAqL1xuXG5cbmNvbnN0IHNlZ21lbnRSYW5nZSA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVudGlyZSByYW5nZSBvZiBhdmFpbGFibGUgc2VnbWVudHMgZm9yIGEgc3RhdGljIE1QRFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICAgKiAgICAgICAgSW5oZXJpdGllZCBNUEQgYXR0cmlidXRlc1xuICAgKiBAcmV0dXJuIHt7IHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyIH19XG4gICAqICAgICAgICAgVGhlIHN0YXJ0IGFuZCBlbmQgbnVtYmVycyBmb3IgYXZhaWxhYmxlIHNlZ21lbnRzXG4gICAqL1xuICBzdGF0aWMoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdGltZXNjYWxlID0gMSxcbiAgICAgIHNvdXJjZUR1cmF0aW9uLFxuICAgICAgcGVyaW9kRHVyYXRpb25cbiAgICB9ID0gYXR0cmlidXRlcztcbiAgICBjb25zdCBlbmROdW1iZXIgPSBwYXJzZUVuZE51bWJlcihhdHRyaWJ1dGVzLmVuZE51bWJlcik7XG4gICAgY29uc3Qgc2VnbWVudER1cmF0aW9uID0gZHVyYXRpb24gLyB0aW1lc2NhbGU7XG5cbiAgICBpZiAodHlwZW9mIGVuZE51bWJlciA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IGVuZE51bWJlclxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBlcmlvZER1cmF0aW9uID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogcGVyaW9kRHVyYXRpb24gLyBzZWdtZW50RHVyYXRpb25cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZW5kOiBzb3VyY2VEdXJhdGlvbiAvIHNlZ21lbnREdXJhdGlvblxuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgbGl2ZSB3aW5kb3cgcmFuZ2Ugb2YgYXZhaWxhYmxlIHNlZ21lbnRzIGZvciBhIGR5bmFtaWMgTVBEXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gICAqICAgICAgICBJbmhlcml0aWVkIE1QRCBhdHRyaWJ1dGVzXG4gICAqIEByZXR1cm4ge3sgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIgfX1cbiAgICogICAgICAgICBUaGUgc3RhcnQgYW5kIGVuZCBudW1iZXJzIGZvciBhdmFpbGFibGUgc2VnbWVudHNcbiAgICovXG4gIGR5bmFtaWMoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IHtcbiAgICAgIE5PVyxcbiAgICAgIGNsaWVudE9mZnNldCxcbiAgICAgIGF2YWlsYWJpbGl0eVN0YXJ0VGltZSxcbiAgICAgIHRpbWVzY2FsZSA9IDEsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIHBlcmlvZFN0YXJ0ID0gMCxcbiAgICAgIG1pbmltdW1VcGRhdGVQZXJpb2QgPSAwLFxuICAgICAgdGltZVNoaWZ0QnVmZmVyRGVwdGggPSBJbmZpbml0eVxuICAgIH0gPSBhdHRyaWJ1dGVzO1xuICAgIGNvbnN0IGVuZE51bWJlciA9IHBhcnNlRW5kTnVtYmVyKGF0dHJpYnV0ZXMuZW5kTnVtYmVyKTsgLy8gY2xpZW50T2Zmc2V0IGlzIHBhc3NlZCBpbiBhdCB0aGUgdG9wIGxldmVsIG9mIG1wZC1wYXJzZXIgYW5kIGlzIGFuIG9mZnNldCBjYWxjdWxhdGVkXG4gICAgLy8gYWZ0ZXIgcmV0cmlldmluZyBVVEMgc2VydmVyIHRpbWUuXG5cbiAgICBjb25zdCBub3cgPSAoTk9XICsgY2xpZW50T2Zmc2V0KSAvIDEwMDA7IC8vIFdDIHN0YW5kcyBmb3IgV2FsbCBDbG9jay5cbiAgICAvLyBDb252ZXJ0IHRoZSBwZXJpb2Qgc3RhcnQgdGltZSB0byBFUE9DSC5cblxuICAgIGNvbnN0IHBlcmlvZFN0YXJ0V0MgPSBhdmFpbGFiaWxpdHlTdGFydFRpbWUgKyBwZXJpb2RTdGFydDsgLy8gUGVyaW9kIGVuZCBpbiBFUE9DSCBpcyBtYW5pZmVzdCdzIHJldHJpZXZhbCB0aW1lICsgdGltZSB1bnRpbCBuZXh0IHVwZGF0ZS5cblxuICAgIGNvbnN0IHBlcmlvZEVuZFdDID0gbm93ICsgbWluaW11bVVwZGF0ZVBlcmlvZDtcbiAgICBjb25zdCBwZXJpb2REdXJhdGlvbiA9IHBlcmlvZEVuZFdDIC0gcGVyaW9kU3RhcnRXQztcbiAgICBjb25zdCBzZWdtZW50Q291bnQgPSBNYXRoLmNlaWwocGVyaW9kRHVyYXRpb24gKiB0aW1lc2NhbGUgLyBkdXJhdGlvbik7XG4gICAgY29uc3QgYXZhaWxhYmxlU3RhcnQgPSBNYXRoLmZsb29yKChub3cgLSBwZXJpb2RTdGFydFdDIC0gdGltZVNoaWZ0QnVmZmVyRGVwdGgpICogdGltZXNjYWxlIC8gZHVyYXRpb24pO1xuICAgIGNvbnN0IGF2YWlsYWJsZUVuZCA9IE1hdGguZmxvb3IoKG5vdyAtIHBlcmlvZFN0YXJ0V0MpICogdGltZXNjYWxlIC8gZHVyYXRpb24pO1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogTWF0aC5tYXgoMCwgYXZhaWxhYmxlU3RhcnQpLFxuICAgICAgZW5kOiB0eXBlb2YgZW5kTnVtYmVyID09PSAnbnVtYmVyJyA/IGVuZE51bWJlciA6IE1hdGgubWluKHNlZ21lbnRDb3VudCwgYXZhaWxhYmxlRW5kKVxuICAgIH07XG4gIH1cblxufTtcbi8qKlxuICogTWFwcyBhIHJhbmdlIG9mIG51bWJlcnMgdG8gb2JqZWN0cyB3aXRoIGluZm9ybWF0aW9uIG5lZWRlZCB0byBidWlsZCB0aGUgY29ycmVzcG9uZGluZ1xuICogc2VnbWVudCBsaXN0XG4gKlxuICogQG5hbWUgdG9TZWdtZW50c0NhbGxiYWNrXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcbiAqICAgICAgICBOdW1iZXIgb2YgdGhlIHNlZ21lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogICAgICAgIEluZGV4IG9mIHRoZSBudW1iZXIgaW4gdGhlIHJhbmdlIGxpc3RcbiAqIEByZXR1cm4ge3sgbnVtYmVyOiBOdW1iZXIsIGR1cmF0aW9uOiBOdW1iZXIsIHRpbWVsaW5lOiBOdW1iZXIsIHRpbWU6IE51bWJlciB9fVxuICogICAgICAgICBPYmplY3Qgd2l0aCBzZWdtZW50IHRpbWluZyBhbmQgZHVyYXRpb24gaW5mb1xuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGNhbGxiYWNrIGZvciBBcnJheS5wcm90b3R5cGUubWFwIGZvciBtYXBwaW5nIGEgcmFuZ2Ugb2YgbnVtYmVycyB0b1xuICogaW5mb3JtYXRpb24gbmVlZGVkIHRvIGJ1aWxkIHRoZSBzZWdtZW50IGxpc3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgICAgICBJbmhlcml0ZWQgTVBEIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge3RvU2VnbWVudHNDYWxsYmFja31cbiAqICAgICAgICAgQ2FsbGJhY2sgbWFwIGZ1bmN0aW9uXG4gKi9cblxuY29uc3QgdG9TZWdtZW50cyA9IGF0dHJpYnV0ZXMgPT4gbnVtYmVyID0+IHtcbiAgY29uc3Qge1xuICAgIGR1cmF0aW9uLFxuICAgIHRpbWVzY2FsZSA9IDEsXG4gICAgcGVyaW9kU3RhcnQsXG4gICAgc3RhcnROdW1iZXIgPSAxXG4gIH0gPSBhdHRyaWJ1dGVzO1xuICByZXR1cm4ge1xuICAgIG51bWJlcjogc3RhcnROdW1iZXIgKyBudW1iZXIsXG4gICAgZHVyYXRpb246IGR1cmF0aW9uIC8gdGltZXNjYWxlLFxuICAgIHRpbWVsaW5lOiBwZXJpb2RTdGFydCxcbiAgICB0aW1lOiBudW1iZXIgKiBkdXJhdGlvblxuICB9O1xufTtcbi8qKlxuICogUmV0dXJucyBhIGxpc3Qgb2Ygb2JqZWN0cyBjb250YWluaW5nIHNlZ21lbnQgdGltaW5nIGFuZCBkdXJhdGlvbiBpbmZvIHVzZWQgZm9yXG4gKiBidWlsZGluZyB0aGUgbGlzdCBvZiBzZWdtZW50cy4gVGhpcyB1c2VzIHRoZSBAZHVyYXRpb24gYXR0cmlidXRlIHNwZWNpZmllZFxuICogaW4gdGhlIE1QRCBtYW5pZmVzdCB0byBkZXJpdmUgdGhlIHJhbmdlIG9mIHNlZ21lbnRzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgSW5oZXJpdGVkIE1QRCBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHt7bnVtYmVyOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIHRpbWU6IG51bWJlciwgdGltZWxpbmU6IG51bWJlcn1bXX1cbiAqICAgICAgICAgTGlzdCBvZiBPYmplY3RzIHdpdGggc2VnbWVudCB0aW1pbmcgYW5kIGR1cmF0aW9uIGluZm9cbiAqL1xuXG5jb25zdCBwYXJzZUJ5RHVyYXRpb24gPSBhdHRyaWJ1dGVzID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsXG4gICAgZHVyYXRpb24sXG4gICAgdGltZXNjYWxlID0gMSxcbiAgICBwZXJpb2REdXJhdGlvbixcbiAgICBzb3VyY2VEdXJhdGlvblxuICB9ID0gYXR0cmlidXRlcztcbiAgY29uc3Qge1xuICAgIHN0YXJ0LFxuICAgIGVuZFxuICB9ID0gc2VnbWVudFJhbmdlW3R5cGVdKGF0dHJpYnV0ZXMpO1xuICBjb25zdCBzZWdtZW50cyA9IHJhbmdlKHN0YXJ0LCBlbmQpLm1hcCh0b1NlZ21lbnRzKGF0dHJpYnV0ZXMpKTtcblxuICBpZiAodHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICBjb25zdCBpbmRleCA9IHNlZ21lbnRzLmxlbmd0aCAtIDE7IC8vIHNlY3Rpb24gaXMgZWl0aGVyIGEgcGVyaW9kIG9yIHRoZSBmdWxsIHNvdXJjZVxuXG4gICAgY29uc3Qgc2VjdGlvbkR1cmF0aW9uID0gdHlwZW9mIHBlcmlvZER1cmF0aW9uID09PSAnbnVtYmVyJyA/IHBlcmlvZER1cmF0aW9uIDogc291cmNlRHVyYXRpb247IC8vIGZpbmFsIHNlZ21lbnQgbWF5IGJlIGxlc3MgdGhhbiBmdWxsIHNlZ21lbnQgZHVyYXRpb25cblxuICAgIHNlZ21lbnRzW2luZGV4XS5kdXJhdGlvbiA9IHNlY3Rpb25EdXJhdGlvbiAtIGR1cmF0aW9uIC8gdGltZXNjYWxlICogaW5kZXg7XG4gIH1cblxuICByZXR1cm4gc2VnbWVudHM7XG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgU2VnbWVudEJhc2UgaW50byBhIHNldCBvZiBzZWdtZW50cy5cbiAqIChEQVNIIFNQRUMgU2VjdGlvbiA1LjMuOS4zLjIpIGNvbnRhaW5zIGEgc2V0IG9mIDxTZWdtZW50VVJMPiBub2Rlcy4gIEVhY2hcbiAqIG5vZGUgc2hvdWxkIGJlIHRyYW5zbGF0ZWQgaW50byBzZWdtZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICBuYW1lcyBhcyBrZXlzXG4gKiBAcmV0dXJuIHtPYmplY3QuPEFycmF5Pn0gbGlzdCBvZiBzZWdtZW50c1xuICovXG5cbmNvbnN0IHNlZ21lbnRzRnJvbUJhc2UgPSBhdHRyaWJ1dGVzID0+IHtcbiAgY29uc3Qge1xuICAgIGJhc2VVcmwsXG4gICAgaW5pdGlhbGl6YXRpb24gPSB7fSxcbiAgICBzb3VyY2VEdXJhdGlvbixcbiAgICBpbmRleFJhbmdlID0gJycsXG4gICAgcGVyaW9kU3RhcnQsXG4gICAgcHJlc2VudGF0aW9uVGltZSxcbiAgICBudW1iZXIgPSAwLFxuICAgIGR1cmF0aW9uXG4gIH0gPSBhdHRyaWJ1dGVzOyAvLyBiYXNlIHVybCBpcyByZXF1aXJlZCBmb3IgU2VnbWVudEJhc2UgdG8gd29yaywgcGVyIHNwZWMgKFNlY3Rpb24gNS4zLjkuMi4xKVxuXG4gIGlmICghYmFzZVVybCkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuTk9fQkFTRV9VUkwpO1xuICB9XG5cbiAgY29uc3QgaW5pdFNlZ21lbnQgPSB1cmxUeXBlVG9TZWdtZW50KHtcbiAgICBiYXNlVXJsLFxuICAgIHNvdXJjZTogaW5pdGlhbGl6YXRpb24uc291cmNlVVJMLFxuICAgIHJhbmdlOiBpbml0aWFsaXphdGlvbi5yYW5nZVxuICB9KTtcbiAgY29uc3Qgc2VnbWVudCA9IHVybFR5cGVUb1NlZ21lbnQoe1xuICAgIGJhc2VVcmwsXG4gICAgc291cmNlOiBiYXNlVXJsLFxuICAgIGluZGV4UmFuZ2VcbiAgfSk7XG4gIHNlZ21lbnQubWFwID0gaW5pdFNlZ21lbnQ7IC8vIElmIHRoZXJlIGlzIGEgZHVyYXRpb24sIHVzZSBpdCwgb3RoZXJ3aXNlIHVzZSB0aGUgZ2l2ZW4gZHVyYXRpb24gb2YgdGhlIHNvdXJjZVxuICAvLyAoc2luY2UgU2VnbWVudEJhc2UgaXMgb25seSBmb3Igb25lIHRvdGFsIHNlZ21lbnQpXG5cbiAgaWYgKGR1cmF0aW9uKSB7XG4gICAgY29uc3Qgc2VnbWVudFRpbWVJbmZvID0gcGFyc2VCeUR1cmF0aW9uKGF0dHJpYnV0ZXMpO1xuXG4gICAgaWYgKHNlZ21lbnRUaW1lSW5mby5sZW5ndGgpIHtcbiAgICAgIHNlZ21lbnQuZHVyYXRpb24gPSBzZWdtZW50VGltZUluZm9bMF0uZHVyYXRpb247XG4gICAgICBzZWdtZW50LnRpbWVsaW5lID0gc2VnbWVudFRpbWVJbmZvWzBdLnRpbWVsaW5lO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzb3VyY2VEdXJhdGlvbikge1xuICAgIHNlZ21lbnQuZHVyYXRpb24gPSBzb3VyY2VEdXJhdGlvbjtcbiAgICBzZWdtZW50LnRpbWVsaW5lID0gcGVyaW9kU3RhcnQ7XG4gIH0gLy8gSWYgcHJlc2VudGF0aW9uIHRpbWUgaXMgcHJvdmlkZWQsIHRoZXNlIHNlZ21lbnRzIGFyZSBiZWluZyBnZW5lcmF0ZWQgYnkgU0lEWFxuICAvLyByZWZlcmVuY2VzLCBhbmQgc2hvdWxkIHVzZSB0aGUgdGltZSBwcm92aWRlZC4gRm9yIHRoZSBnZW5lcmFsIGNhc2Ugb2YgU2VnbWVudEJhc2UsXG4gIC8vIHRoZXJlIHNob3VsZCBvbmx5IGJlIG9uZSBzZWdtZW50IGluIHRoZSBwZXJpb2QsIHNvIGl0cyBwcmVzZW50YXRpb24gdGltZSBpcyB0aGUgc2FtZVxuICAvLyBhcyBpdHMgcGVyaW9kIHN0YXJ0LlxuXG5cbiAgc2VnbWVudC5wcmVzZW50YXRpb25UaW1lID0gcHJlc2VudGF0aW9uVGltZSB8fCBwZXJpb2RTdGFydDtcbiAgc2VnbWVudC5udW1iZXIgPSBudW1iZXI7XG4gIHJldHVybiBbc2VnbWVudF07XG59O1xuLyoqXG4gKiBHaXZlbiBhIHBsYXlsaXN0LCBhIHNpZHggYm94LCBhbmQgYSBiYXNlVXJsLCB1cGRhdGUgdGhlIHNlZ21lbnQgbGlzdCBvZiB0aGUgcGxheWxpc3RcbiAqIGFjY29yZGluZyB0byB0aGUgc2lkeCBpbmZvcm1hdGlvbiBnaXZlbi5cbiAqXG4gKiBwbGF5bGlzdC5zaWR4IGhhcyBtZXRhZGFkYXRhIGFib3V0IHRoZSBzaWR4IHdoZXJlLWFzIHRoZSBzaWR4IHBhcmFtXG4gKiBpcyB0aGUgcGFyc2VkIHNpZHggYm94IGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGxheWxpc3QgdGhlIHBsYXlsaXN0IHRvIHVwZGF0ZSB0aGUgc2lkeCBpbmZvcm1hdGlvbiBmb3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBzaWR4IHRoZSBwYXJzZWQgc2lkeCBib3hcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIHBsYXlsaXN0IG9iamVjdCB3aXRoIHRoZSB1cGRhdGVkIHNpZHggaW5mb3JtYXRpb25cbiAqL1xuXG5jb25zdCBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0JDEgPSAocGxheWxpc3QsIHNpZHgsIGJhc2VVcmwpID0+IHtcbiAgLy8gUmV0YWluIGluaXQgc2VnbWVudCBpbmZvcm1hdGlvblxuICBjb25zdCBpbml0U2VnbWVudCA9IHBsYXlsaXN0LnNpZHgubWFwID8gcGxheWxpc3Quc2lkeC5tYXAgOiBudWxsOyAvLyBSZXRhaW4gc291cmNlIGR1cmF0aW9uIGZyb20gaW5pdGlhbCBtYWluIG1hbmlmZXN0IHBhcnNpbmdcblxuICBjb25zdCBzb3VyY2VEdXJhdGlvbiA9IHBsYXlsaXN0LnNpZHguZHVyYXRpb247IC8vIFJldGFpbiBzb3VyY2UgdGltZWxpbmVcblxuICBjb25zdCB0aW1lbGluZSA9IHBsYXlsaXN0LnRpbWVsaW5lIHx8IDA7XG4gIGNvbnN0IHNpZHhCeXRlUmFuZ2UgPSBwbGF5bGlzdC5zaWR4LmJ5dGVyYW5nZTtcbiAgY29uc3Qgc2lkeEVuZCA9IHNpZHhCeXRlUmFuZ2Uub2Zmc2V0ICsgc2lkeEJ5dGVSYW5nZS5sZW5ndGg7IC8vIFJldGFpbiB0aW1lc2NhbGUgb2YgdGhlIHBhcnNlZCBzaWR4XG5cbiAgY29uc3QgdGltZXNjYWxlID0gc2lkeC50aW1lc2NhbGU7IC8vIHJlZmVyZW5jZVR5cGUgMSByZWZlcnMgdG8gb3RoZXIgc2lkeCBib3hlc1xuXG4gIGNvbnN0IG1lZGlhUmVmZXJlbmNlcyA9IHNpZHgucmVmZXJlbmNlcy5maWx0ZXIociA9PiByLnJlZmVyZW5jZVR5cGUgIT09IDEpO1xuICBjb25zdCBzZWdtZW50cyA9IFtdO1xuICBjb25zdCB0eXBlID0gcGxheWxpc3QuZW5kTGlzdCA/ICdzdGF0aWMnIDogJ2R5bmFtaWMnO1xuICBjb25zdCBwZXJpb2RTdGFydCA9IHBsYXlsaXN0LnNpZHgudGltZWxpbmU7XG4gIGxldCBwcmVzZW50YXRpb25UaW1lID0gcGVyaW9kU3RhcnQ7XG4gIGxldCBudW1iZXIgPSBwbGF5bGlzdC5tZWRpYVNlcXVlbmNlIHx8IDA7IC8vIGZpcnN0T2Zmc2V0IGlzIHRoZSBvZmZzZXQgZnJvbSB0aGUgZW5kIG9mIHRoZSBzaWR4IGJveFxuXG4gIGxldCBzdGFydEluZGV4OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICBpZiAodHlwZW9mIHNpZHguZmlyc3RPZmZzZXQgPT09ICdiaWdpbnQnKSB7XG4gICAgc3RhcnRJbmRleCA9IHdpbmRvdy5CaWdJbnQoc2lkeEVuZCkgKyBzaWR4LmZpcnN0T2Zmc2V0O1xuICB9IGVsc2Uge1xuICAgIHN0YXJ0SW5kZXggPSBzaWR4RW5kICsgc2lkeC5maXJzdE9mZnNldDtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVkaWFSZWZlcmVuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2lkeC5yZWZlcmVuY2VzW2ldOyAvLyBzaXplIG9mIHRoZSByZWZlcmVuY2VkIChzdWIpc2VnbWVudFxuXG4gICAgY29uc3Qgc2l6ZSA9IHJlZmVyZW5jZS5yZWZlcmVuY2VkU2l6ZTsgLy8gZHVyYXRpb24gb2YgdGhlIHJlZmVyZW5jZWQgKHN1YilzZWdtZW50LCBpbiAgdGhlICB0aW1lc2NhbGVcbiAgICAvLyB0aGlzIHdpbGwgYmUgY29udmVydGVkIHRvIHNlY29uZHMgd2hlbiBnZW5lcmF0aW5nIHNlZ21lbnRzXG5cbiAgICBjb25zdCBkdXJhdGlvbiA9IHJlZmVyZW5jZS5zdWJzZWdtZW50RHVyYXRpb247IC8vIHNob3VsZCBiZSBhbiBpbmNsdXNpdmUgcmFuZ2VcblxuICAgIGxldCBlbmRJbmRleDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICBpZiAodHlwZW9mIHN0YXJ0SW5kZXggPT09ICdiaWdpbnQnKSB7XG4gICAgICBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyB3aW5kb3cuQmlnSW50KHNpemUpIC0gd2luZG93LkJpZ0ludCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgc2l6ZSAtIDE7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXhSYW5nZSA9IGAke3N0YXJ0SW5kZXh9LSR7ZW5kSW5kZXh9YDtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICAgICAgYmFzZVVybCxcbiAgICAgIHRpbWVzY2FsZSxcbiAgICAgIHRpbWVsaW5lLFxuICAgICAgcGVyaW9kU3RhcnQsXG4gICAgICBwcmVzZW50YXRpb25UaW1lLFxuICAgICAgbnVtYmVyLFxuICAgICAgZHVyYXRpb24sXG4gICAgICBzb3VyY2VEdXJhdGlvbixcbiAgICAgIGluZGV4UmFuZ2UsXG4gICAgICB0eXBlXG4gICAgfTtcbiAgICBjb25zdCBzZWdtZW50ID0gc2VnbWVudHNGcm9tQmFzZShhdHRyaWJ1dGVzKVswXTtcblxuICAgIGlmIChpbml0U2VnbWVudCkge1xuICAgICAgc2VnbWVudC5tYXAgPSBpbml0U2VnbWVudDtcbiAgICB9XG5cbiAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuXG4gICAgaWYgKHR5cGVvZiBzdGFydEluZGV4ID09PSAnYmlnaW50Jykge1xuICAgICAgc3RhcnRJbmRleCArPSB3aW5kb3cuQmlnSW50KHNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEluZGV4ICs9IHNpemU7XG4gICAgfVxuXG4gICAgcHJlc2VudGF0aW9uVGltZSArPSBkdXJhdGlvbiAvIHRpbWVzY2FsZTtcbiAgICBudW1iZXIrKztcbiAgfVxuXG4gIHBsYXlsaXN0LnNlZ21lbnRzID0gc2VnbWVudHM7XG4gIHJldHVybiBwbGF5bGlzdDtcbn07XG5cbmNvbnN0IFNVUFBPUlRFRF9NRURJQV9UWVBFUyA9IFsnQVVESU8nLCAnU1VCVElUTEVTJ107IC8vIGFsbG93IG9uZSA2MGZwcyBmcmFtZSBhcyBsZW5pZW5jeSAoYXJiaXRyYXJpbHkgY2hvc2VuKVxuXG5jb25zdCBUSU1FX0ZVREdFID0gMSAvIDYwO1xuLyoqXG4gKiBHaXZlbiBhIGxpc3Qgb2YgdGltZWxpbmVTdGFydHMsIGNvbWJpbmVzLCBkZWR1cGVzLCBhbmQgc29ydHMgdGhlbS5cbiAqXG4gKiBAcGFyYW0ge1RpbWVsaW5lU3RhcnRbXX0gdGltZWxpbmVTdGFydHMgLSBsaXN0IG9mIHRpbWVsaW5lIHN0YXJ0c1xuICpcbiAqIEByZXR1cm4ge1RpbWVsaW5lU3RhcnRbXX0gdGhlIGNvbWJpbmVkIGFuZCBkZWR1cGVkIHRpbWVsaW5lIHN0YXJ0c1xuICovXG5cbmNvbnN0IGdldFVuaXF1ZVRpbWVsaW5lU3RhcnRzID0gdGltZWxpbmVTdGFydHMgPT4ge1xuICByZXR1cm4gdW5pb24odGltZWxpbmVTdGFydHMsICh7XG4gICAgdGltZWxpbmVcbiAgfSkgPT4gdGltZWxpbmUpLnNvcnQoKGEsIGIpID0+IGEudGltZWxpbmUgPiBiLnRpbWVsaW5lID8gMSA6IC0xKTtcbn07XG4vKipcbiAqIEZpbmRzIHRoZSBwbGF5bGlzdCB3aXRoIHRoZSBtYXRjaGluZyBOQU1FIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwbGF5bGlzdHMgLSBwbGF5bGlzdHMgdG8gc2VhcmNoIHRocm91Z2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gdGhlIE5BTUUgYXR0cmlidXRlIHRvIHNlYXJjaCBmb3JcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R8bnVsbH0gdGhlIG1hdGNoaW5nIHBsYXlsaXN0IG9iamVjdCwgb3IgbnVsbFxuICovXG5cbmNvbnN0IGZpbmRQbGF5bGlzdFdpdGhOYW1lID0gKHBsYXlsaXN0cywgbmFtZSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXlsaXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwbGF5bGlzdHNbaV0uYXR0cmlidXRlcy5OQU1FID09PSBuYW1lKSB7XG4gICAgICByZXR1cm4gcGxheWxpc3RzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcbi8qKlxuICogR2V0cyBhIGZsYXR0ZW5lZCBhcnJheSBvZiBtZWRpYSBncm91cCBwbGF5bGlzdHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IC0gdGhlIG1haW4gbWFuaWZlc3Qgb2JqZWN0XG4gKlxuICogQHJldHVybiB7QXJyYXl9IHRoZSBtZWRpYSBncm91cCBwbGF5bGlzdHNcbiAqL1xuXG5jb25zdCBnZXRNZWRpYUdyb3VwUGxheWxpc3RzID0gbWFuaWZlc3QgPT4ge1xuICBsZXQgbWVkaWFHcm91cFBsYXlsaXN0cyA9IFtdO1xuICBmb3JFYWNoTWVkaWFHcm91cChtYW5pZmVzdCwgU1VQUE9SVEVEX01FRElBX1RZUEVTLCAocHJvcGVydGllcywgdHlwZSwgZ3JvdXAsIGxhYmVsKSA9PiB7XG4gICAgbWVkaWFHcm91cFBsYXlsaXN0cyA9IG1lZGlhR3JvdXBQbGF5bGlzdHMuY29uY2F0KHByb3BlcnRpZXMucGxheWxpc3RzIHx8IFtdKTtcbiAgfSk7XG4gIHJldHVybiBtZWRpYUdyb3VwUGxheWxpc3RzO1xufTtcbi8qKlxuICogVXBkYXRlcyB0aGUgcGxheWxpc3QncyBtZWRpYSBzZXF1ZW5jZSBudW1iZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBvcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5wbGF5bGlzdCAtIHRoZSBwbGF5bGlzdCB0byB1cGRhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb25maWcubWVkaWFTZXF1ZW5jZSAtIHRoZSBtZWRpYVNlcXVlbmNlIG51bWJlciB0byBzdGFydCB3aXRoXG4gKi9cblxuY29uc3QgdXBkYXRlTWVkaWFTZXF1ZW5jZUZvclBsYXlsaXN0ID0gKHtcbiAgcGxheWxpc3QsXG4gIG1lZGlhU2VxdWVuY2Vcbn0pID0+IHtcbiAgcGxheWxpc3QubWVkaWFTZXF1ZW5jZSA9IG1lZGlhU2VxdWVuY2U7XG4gIHBsYXlsaXN0LnNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQsIGluZGV4KSA9PiB7XG4gICAgc2VnbWVudC5udW1iZXIgPSBwbGF5bGlzdC5tZWRpYVNlcXVlbmNlICsgaW5kZXg7XG4gIH0pO1xufTtcbi8qKlxuICogVXBkYXRlcyB0aGUgbWVkaWEgYW5kIGRpc2NvbnRpbnVpdHkgc2VxdWVuY2UgbnVtYmVycyBvZiBuZXdQbGF5bGlzdHMgZ2l2ZW4gb2xkUGxheWxpc3RzXG4gKiBhbmQgYSBjb21wbGV0ZSBsaXN0IG9mIHRpbWVsaW5lIHN0YXJ0cy5cbiAqXG4gKiBJZiBubyBtYXRjaGluZyBwbGF5bGlzdCBpcyBmb3VuZCwgb25seSB0aGUgZGlzY29udGludWl0eSBzZXF1ZW5jZSBudW1iZXIgb2YgdGhlIHBsYXlsaXN0XG4gKiB3aWxsIGJlIHVwZGF0ZWQuXG4gKlxuICogU2luY2UgZWFybHkgYXZhaWxhYmxlIHRpbWVsaW5lcyBhcmUgbm90IHN1cHBvcnRlZCwgYXQgbGVhc3Qgb25lIHNlZ21lbnQgbXVzdCBiZSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBvcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3RbXX0gb2xkUGxheWxpc3RzIC0gdGhlIG9sZCBwbGF5bGlzdHMgdG8gdXNlIGFzIGEgcmVmZXJlbmNlXG4gKiBAcGFyYW0ge09iamVjdFtdfSBuZXdQbGF5bGlzdHMgLSB0aGUgbmV3IHBsYXlsaXN0cyB0byB1cGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aW1lbGluZVN0YXJ0cyAtIGFsbCB0aW1lbGluZVN0YXJ0cyBzZWVuIGluIHRoZSBzdHJlYW0gdG8gdGhpcyBwb2ludFxuICovXG5cbmNvbnN0IHVwZGF0ZVNlcXVlbmNlTnVtYmVycyA9ICh7XG4gIG9sZFBsYXlsaXN0cyxcbiAgbmV3UGxheWxpc3RzLFxuICB0aW1lbGluZVN0YXJ0c1xufSkgPT4ge1xuICBuZXdQbGF5bGlzdHMuZm9yRWFjaChwbGF5bGlzdCA9PiB7XG4gICAgcGxheWxpc3QuZGlzY29udGludWl0eVNlcXVlbmNlID0gdGltZWxpbmVTdGFydHMuZmluZEluZGV4KGZ1bmN0aW9uICh7XG4gICAgICB0aW1lbGluZVxuICAgIH0pIHtcbiAgICAgIHJldHVybiB0aW1lbGluZSA9PT0gcGxheWxpc3QudGltZWxpbmU7XG4gICAgfSk7IC8vIFBsYXlsaXN0cyBOQU1FcyBjb21lIGZyb20gREFTSCBSZXByZXNlbnRhdGlvbiBJRHMsIHdoaWNoIGFyZSBtYW5kYXRvcnlcbiAgICAvLyAoc2VlIElTT18yMzAwOS0xLTIwMTIgNS4zLjUuMikuXG4gICAgLy9cbiAgICAvLyBJZiB0aGUgc2FtZSBSZXByZXNlbnRhdGlvbiBleGlzdGVkIGluIGEgcHJpb3IgUGVyaW9kLCBpdCB3aWxsIHJldGFpbiB0aGUgc2FtZSBOQU1FLlxuXG4gICAgY29uc3Qgb2xkUGxheWxpc3QgPSBmaW5kUGxheWxpc3RXaXRoTmFtZShvbGRQbGF5bGlzdHMsIHBsYXlsaXN0LmF0dHJpYnV0ZXMuTkFNRSk7XG5cbiAgICBpZiAoIW9sZFBsYXlsaXN0KSB7XG4gICAgICAvLyBTaW5jZSB0aGlzIGlzIGEgbmV3IHBsYXlsaXN0LCB0aGUgbWVkaWEgc2VxdWVuY2UgdmFsdWVzIGNhbiBzdGFydCBmcm9tIDAgd2l0aG91dFxuICAgICAgLy8gY29uc2VxdWVuY2UuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBUT0RPIGJldHRlciBzdXBwb3J0IGZvciBsaXZlIFNJRFhcbiAgICAvL1xuICAgIC8vIEFzIG9mIHRoaXMgd3JpdGluZywgbXBkLXBhcnNlciBkb2VzIG5vdCBzdXBwb3J0IG11bHRpcGVyaW9kIFNJRFggKGluIGxpdmUgb3IgVk9EKS5cbiAgICAvLyBUaGlzIGlzIGV2aWRlbnQgYnkgYSBwbGF5bGlzdCBvbmx5IGhhdmluZyBhIHNpbmdsZSBTSURYIHJlZmVyZW5jZS4gSW4gYSBtdWx0aXBlcmlvZFxuICAgIC8vIHBsYXlsaXN0IHRoZXJlIHdvdWxkIG5lZWQgdG8gYmUgbXVsdGlwbGUgU0lEWCByZWZlcmVuY2VzLiBJbiBhZGRpdGlvbiwgbGl2ZSBTSURYIGlzXG4gICAgLy8gbm90IHN1cHBvcnRlZCB3aGVuIHRoZSBTSURYIHByb3BlcnRpZXMgY2hhbmdlIG9uIHJlZnJlc2hlcy5cbiAgICAvL1xuICAgIC8vIEluIHRoZSBmdXR1cmUsIGlmIHN1cHBvcnQgbmVlZHMgdG8gYmUgYWRkZWQsIHRoZSBtZXJnaW5nIGxvZ2ljIGhlcmUgY2FuIGJlIGNhbGxlZFxuICAgIC8vIGFmdGVyIFNJRFggcmVmZXJlbmNlcyBhcmUgcmVzb2x2ZWQuIEZvciBub3csIGV4aXQgZWFybHkgdG8gcHJldmVudCBleGNlcHRpb25zIGJlaW5nXG4gICAgLy8gdGhyb3duIGR1ZSB0byB1bmRlZmluZWQgcmVmZXJlbmNlcy5cblxuXG4gICAgaWYgKHBsYXlsaXN0LnNpZHgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFNpbmNlIHdlIGRvbid0IHlldCBzdXBwb3J0IGVhcmx5IGF2YWlsYWJsZSB0aW1lbGluZXMsIHdlIGRvbid0IG5lZWQgdG8gc3VwcG9ydFxuICAgIC8vIHBsYXlsaXN0cyB3aXRoIG5vIHNlZ21lbnRzLlxuXG5cbiAgICBjb25zdCBmaXJzdE5ld1NlZ21lbnQgPSBwbGF5bGlzdC5zZWdtZW50c1swXTtcbiAgICBjb25zdCBvbGRNYXRjaGluZ1NlZ21lbnRJbmRleCA9IG9sZFBsYXlsaXN0LnNlZ21lbnRzLmZpbmRJbmRleChmdW5jdGlvbiAob2xkU2VnbWVudCkge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKG9sZFNlZ21lbnQucHJlc2VudGF0aW9uVGltZSAtIGZpcnN0TmV3U2VnbWVudC5wcmVzZW50YXRpb25UaW1lKSA8IFRJTUVfRlVER0U7XG4gICAgfSk7IC8vIE5vIG1hdGNoaW5nIHNlZ21lbnQgZnJvbSB0aGUgb2xkIHBsYXlsaXN0IG1lYW5zIHRoZSBlbnRpcmUgcGxheWxpc3Qgd2FzIHJlZnJlc2hlZC5cbiAgICAvLyBJbiB0aGlzIGNhc2UgdGhlIG1lZGlhIHNlcXVlbmNlIHNob3VsZCBhY2NvdW50IGZvciB0aGlzIHVwZGF0ZSwgYW5kIHRoZSBuZXcgc2VnbWVudHNcbiAgICAvLyBzaG91bGQgYmUgbWFya2VkIGFzIGRpc2NvbnRpbnVvdXMgZnJvbSB0aGUgcHJpb3IgY29udGVudCwgc2luY2UgdGhlIGxhc3QgcHJpb3JcbiAgICAvLyB0aW1lbGluZSB3YXMgcmVtb3ZlZC5cblxuICAgIGlmIChvbGRNYXRjaGluZ1NlZ21lbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgIHVwZGF0ZU1lZGlhU2VxdWVuY2VGb3JQbGF5bGlzdCh7XG4gICAgICAgIHBsYXlsaXN0LFxuICAgICAgICBtZWRpYVNlcXVlbmNlOiBvbGRQbGF5bGlzdC5tZWRpYVNlcXVlbmNlICsgb2xkUGxheWxpc3Quc2VnbWVudHMubGVuZ3RoXG4gICAgICB9KTtcbiAgICAgIHBsYXlsaXN0LnNlZ21lbnRzWzBdLmRpc2NvbnRpbnVpdHkgPSB0cnVlO1xuICAgICAgcGxheWxpc3QuZGlzY29udGludWl0eVN0YXJ0cy51bnNoaWZ0KDApOyAvLyBObyBtYXRjaGluZyBzZWdtZW50IGRvZXMgbm90IG5lY2Vzc2FyaWx5IG1lYW4gdGhlcmUncyBtaXNzaW5nIGNvbnRlbnQuXG4gICAgICAvL1xuICAgICAgLy8gSWYgdGhlIG5ldyBwbGF5bGlzdCdzIHRpbWVsaW5lIGlzIHRoZSBzYW1lIGFzIHRoZSBsYXN0IHNlZW4gc2VnbWVudCdzIHRpbWVsaW5lLFxuICAgICAgLy8gdGhlbiBhIGRpc2NvbnRpbnVpdHkgY2FuIGJlIGFkZGVkIHRvIGlkZW50aWZ5IHRoYXQgdGhlcmUncyBwb3RlbnRpYWxseSBtaXNzaW5nXG4gICAgICAvLyBjb250ZW50LiBJZiB0aGVyZSdzIG5vIG1pc3NpbmcgY29udGVudCwgdGhlIGRpc2NvbnRpbnVpdHkgc2hvdWxkIHN0aWxsIGJlIHJhdGhlclxuICAgICAgLy8gaGFybWxlc3MuIEl0J3MgcG9zc2libGUgdGhhdCBpZiBzZWdtZW50IGR1cmF0aW9ucyBhcmUgYWNjdXJhdGUgZW5vdWdoLCB0aGF0IHRoZVxuICAgICAgLy8gZXhpc3RlbmNlIG9mIGEgZ2FwIGNhbiBiZSBkZXRlcm1pbmVkIHVzaW5nIHRoZSBwcmVzZW50YXRpb24gdGltZXMgYW5kIGR1cmF0aW9ucyxcbiAgICAgIC8vIGJ1dCBpZiB0aGUgc2VnbWVudCB0aW1pbmcgaW5mbyBpcyBvZmYsIGl0IG1heSBpbnRyb2R1Y2UgbW9yZSBwcm9ibGVtcyB0aGFuIHNpbXBseVxuICAgICAgLy8gYWRkaW5nIHRoZSBkaXNjb250aW51aXR5LlxuICAgICAgLy9cbiAgICAgIC8vIElmIHRoZSBuZXcgcGxheWxpc3QncyB0aW1lbGluZSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgbGFzdCBzZWVuIHNlZ21lbnQncyB0aW1lbGluZSxcbiAgICAgIC8vIHRoZW4gYSBkaXNjb250aW51aXR5IGNhbiBiZSBhZGRlZCB0byBpZGVudGlmeSB0aGF0IHRoaXMgaXMgdGhlIGZpcnN0IHNlZW4gc2VnbWVudFxuICAgICAgLy8gb2YgYSBuZXcgdGltZWxpbmUuIEhvd2V2ZXIsIHRoZSBsb2dpYyBhdCB0aGUgc3RhcnQgb2YgdGhpcyBmdW5jdGlvbiB0aGF0XG4gICAgICAvLyBkZXRlcm1pbmVkIHRoZSBkaXNjb25pbnVpdHkgc2VxdWVuY2UgYnkgdGltZWxpbmUgaW5kZXggaXMgbm93IG9mZiBieSBvbmUgKHRoZVxuICAgICAgLy8gZGlzY29udGludWl0eSBvZiB0aGUgbmV3ZXN0IHRpbWVsaW5lIGhhc24ndCB5ZXQgZmFsbGVuIG9mZiB0aGUgbWFuaWZlc3QuLi5zaW5jZVxuICAgICAgLy8gd2UgYWRkZWQgaXQpLCBzbyB0aGUgZGlzY29uaW51aXR5IHNlcXVlbmNlIG11c3QgYmUgZGVjcmVtZW50ZWQuXG4gICAgICAvL1xuICAgICAgLy8gQSBwZXJpb2QgbWF5IGFsc28gaGF2ZSBhIGR1cmF0aW9uIG9mIHplcm8sIHNvIHRoZSBjYXNlIG9mIG5vIHNlZ21lbnRzIGlzIGhhbmRsZWRcbiAgICAgIC8vIGhlcmUgZXZlbiB0aG91Z2ggd2UgZG9uJ3QgeWV0IHN1cHBvcnQgZWFybHkgYXZhaWxhYmxlIHBlcmlvZHMuXG5cbiAgICAgIGlmICghb2xkUGxheWxpc3Quc2VnbWVudHMubGVuZ3RoICYmIHBsYXlsaXN0LnRpbWVsaW5lID4gb2xkUGxheWxpc3QudGltZWxpbmUgfHwgb2xkUGxheWxpc3Quc2VnbWVudHMubGVuZ3RoICYmIHBsYXlsaXN0LnRpbWVsaW5lID4gb2xkUGxheWxpc3Quc2VnbWVudHNbb2xkUGxheWxpc3Quc2VnbWVudHMubGVuZ3RoIC0gMV0udGltZWxpbmUpIHtcbiAgICAgICAgcGxheWxpc3QuZGlzY29udGludWl0eVNlcXVlbmNlLS07XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIHRoZSBmaXJzdCBzZWdtZW50IG1hdGNoZWQgd2l0aCBhIHByaW9yIHNlZ21lbnQgb24gYSBkaXNjb250aW51aXR5IChpdCdzIG1hdGNoaW5nXG4gICAgLy8gb24gdGhlIGZpcnN0IHNlZ21lbnQgb2YgYSBwZXJpb2QpLCB0aGVuIHRoZSBkaXNjb250aW51aXR5U2VxdWVuY2Ugc2hvdWxkbid0IGJlIHRoZVxuICAgIC8vIHRpbWVsaW5lJ3MgbWF0Y2hpbmcgb25lLCBidXQgaW5zdGVhZCBzaG91bGQgYmUgdGhlIG9uZSBwcmlvciwgYW5kIHRoZSBmaXJzdCBzZWdtZW50XG4gICAgLy8gb2YgdGhlIG5ldyBtYW5pZmVzdCBzaG91bGQgYmUgbWFya2VkIHdpdGggYSBkaXNjb250aW51aXR5LlxuICAgIC8vXG4gICAgLy8gVGhlIHJlYXNvbiBmb3IgdGhpcyBzcGVjaWFsIGNhc2UgaXMgdGhhdCBkaXNjb250aW51aXR5IHNlcXVlbmNlIHNob3dzIGhvdyBtYW55XG4gICAgLy8gZGlzY29udGludWl0aWVzIGhhdmUgZmFsbGVuIG9mZiBvZiB0aGUgcGxheWxpc3QsIGFuZCBkaXNjb250aW51aXRpZXMgYXJlIG1hcmtlZCBvblxuICAgIC8vIHRoZSBmaXJzdCBzZWdtZW50IG9mIGEgbmV3IFwidGltZWxpbmUuXCIgQmVjYXVzZSBvZiB0aGlzLCB3aGlsZSBEQVNIIHdpbGwgcmV0YWluIHRoYXRcbiAgICAvLyBQZXJpb2Qgd2hpbGUgdGhlIFwidGltZWxpbmVcIiBleGlzdHMsIEhMUyBrZWVwcyB0cmFjayBvZiBpdCB2aWEgdGhlIGRpc2NvbnRpbnVpdHlcbiAgICAvLyBzZXF1ZW5jZSwgYW5kIHRoYXQgZmlyc3Qgc2VnbWVudCBpcyBhbiBpbmRpY2F0b3IsIGJ1dCBjYW4gYmUgcmVtb3ZlZCBiZWZvcmUgdGhhdFxuICAgIC8vIHRpbWVsaW5lIGlzIGdvbmUuXG5cblxuICAgIGNvbnN0IG9sZE1hdGNoaW5nU2VnbWVudCA9IG9sZFBsYXlsaXN0LnNlZ21lbnRzW29sZE1hdGNoaW5nU2VnbWVudEluZGV4XTtcblxuICAgIGlmIChvbGRNYXRjaGluZ1NlZ21lbnQuZGlzY29udGludWl0eSAmJiAhZmlyc3ROZXdTZWdtZW50LmRpc2NvbnRpbnVpdHkpIHtcbiAgICAgIGZpcnN0TmV3U2VnbWVudC5kaXNjb250aW51aXR5ID0gdHJ1ZTtcbiAgICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTdGFydHMudW5zaGlmdCgwKTtcbiAgICAgIHBsYXlsaXN0LmRpc2NvbnRpbnVpdHlTZXF1ZW5jZS0tO1xuICAgIH1cblxuICAgIHVwZGF0ZU1lZGlhU2VxdWVuY2VGb3JQbGF5bGlzdCh7XG4gICAgICBwbGF5bGlzdCxcbiAgICAgIG1lZGlhU2VxdWVuY2U6IG9sZFBsYXlsaXN0LnNlZ21lbnRzW29sZE1hdGNoaW5nU2VnbWVudEluZGV4XS5udW1iZXJcbiAgICB9KTtcbiAgfSk7XG59O1xuLyoqXG4gKiBHaXZlbiBhbiBvbGQgcGFyc2VkIG1hbmlmZXN0IG9iamVjdCBhbmQgYSBuZXcgcGFyc2VkIG1hbmlmZXN0IG9iamVjdCwgdXBkYXRlcyB0aGVcbiAqIHNlcXVlbmNlIGFuZCB0aW1pbmcgdmFsdWVzIHdpdGhpbiB0aGUgbmV3IG1hbmlmZXN0IHRvIGVuc3VyZSB0aGF0IGl0IGxpbmVzIHVwIHdpdGggdGhlXG4gKiBvbGQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gb2xkTWFuaWZlc3QgLSB0aGUgb2xkIG1haW4gbWFuaWZlc3Qgb2JqZWN0XG4gKiBAcGFyYW0ge0FycmF5fSBuZXdNYW5pZmVzdCAtIHRoZSBuZXcgbWFpbiBtYW5pZmVzdCBvYmplY3RcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSB1cGRhdGVkIG5ldyBtYW5pZmVzdCBvYmplY3RcbiAqL1xuXG5jb25zdCBwb3NpdGlvbk1hbmlmZXN0T25UaW1lbGluZSA9ICh7XG4gIG9sZE1hbmlmZXN0LFxuICBuZXdNYW5pZmVzdFxufSkgPT4ge1xuICAvLyBTdGFydGluZyBmcm9tIHY0LjEuMiBvZiB0aGUgSU9QLCBzZWN0aW9uIDQuNC4zLjMgc3RhdGVzOlxuICAvL1xuICAvLyBcIk1QREBhdmFpbGFiaWxpdHlTdGFydFRpbWUgYW5kIFBlcmlvZEBzdGFydCBzaGFsbCBub3QgYmUgY2hhbmdlZCBvdmVyIE1QRCB1cGRhdGVzLlwiXG4gIC8vXG4gIC8vIFRoaXMgd2FzIGFkZGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0Rhc2gtSW5kdXN0cnktRm9ydW0vREFTSC1JRi1JT1AvaXNzdWVzLzE2MFxuICAvL1xuICAvLyBCZWNhdXNlIG9mIHRoaXMgY2hhbmdlLCBhbmQgdGhlIGRpZmZpY3VsdHkgb2Ygc3VwcG9ydGluZyBwZXJpb2RzIHdpdGggY2hhbmdpbmcgc3RhcnRcbiAgLy8gdGltZXMsIHBlcmlvZHMgd2l0aCBjaGFuZ2luZyBzdGFydCB0aW1lcyBhcmUgbm90IHN1cHBvcnRlZC4gVGhpcyBtYWtlcyB0aGUgbG9naWMgbXVjaFxuICAvLyBzaW1wbGVyLCBzaW5jZSBwZXJpb2RzIHdpdGggdGhlIHNhbWUgc3RhcnQgdGltZSBjYW4gYmUgY29uc2lkZXJyZWQgdGhlIHNhbWUgcGVyaW9kXG4gIC8vIGFjcm9zcyByZWZyZXNoZXMuXG4gIC8vXG4gIC8vIFRvIGdpdmUgYW4gZXhhbXBsZSBhcyB0byB0aGUgZGlmZmljdWx0eSBvZiBoYW5kbGluZyBwZXJpb2RzIHdoZXJlIHRoZSBzdGFydCB0aW1lIG1heVxuICAvLyBjaGFuZ2UsIGlmIGEgc2luZ2xlIHBlcmlvZCBtYW5pZmVzdCBpcyByZWZyZXNoZWQgd2l0aCBhbm90aGVyIG1hbmlmZXN0IHdpdGggYSBzaW5nbGVcbiAgLy8gcGVyaW9kLCBhbmQgYm90aCB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lcyBhcmUgaW5jcmVhc2VkLCB0aGVuIHRoZSBvbmx5IHdheSB0byBkZXRlcm1pbmVcbiAgLy8gaWYgaXQncyBhIG5ldyBwZXJpb2Qgb3IgYW4gb2xkIG9uZSB0aGF0IGhhcyBjaGFuZ2VkIGlzIHRvIGxvb2sgdGhyb3VnaCB0aGUgc2VnbWVudHMgb2ZcbiAgLy8gZWFjaCBwbGF5bGlzdCBhbmQgZGV0ZXJtaW5lIHRoZSBwcmVzZW50YXRpb24gdGltZSBib3VuZHMgdG8gZmluZCBhIG1hdGNoLiBJbiBhZGRpdGlvbixcbiAgLy8gaWYgdGhlIHBlcmlvZCBzdGFydCBjaGFuZ2VkIHRvIGV4Y2VlZCB0aGUgb2xkIHBlcmlvZCBlbmQsIHRoZW4gdGhlcmUgd291bGQgYmUgbm9cbiAgLy8gbWF0Y2gsIGFuZCBpdCB3b3VsZCBub3QgYmUgcG9zc2libGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHJlZnJlc2hlZCBwZXJpb2QgaXMgYSBuZXdcbiAgLy8gb25lIG9yIHRoZSBvbGQgb25lLlxuICBjb25zdCBvbGRQbGF5bGlzdHMgPSBvbGRNYW5pZmVzdC5wbGF5bGlzdHMuY29uY2F0KGdldE1lZGlhR3JvdXBQbGF5bGlzdHMob2xkTWFuaWZlc3QpKTtcbiAgY29uc3QgbmV3UGxheWxpc3RzID0gbmV3TWFuaWZlc3QucGxheWxpc3RzLmNvbmNhdChnZXRNZWRpYUdyb3VwUGxheWxpc3RzKG5ld01hbmlmZXN0KSk7IC8vIFNhdmUgYWxsIHNlZW4gdGltZWxpbmVTdGFydHMgdG8gdGhlIG5ldyBtYW5pZmVzdC4gQWx0aG91Z2ggdGhpcyBwb3RlbnRpYWxseSBtZWFucyB0aGF0XG4gIC8vIHRoZXJlJ3MgYSBcIm1lbW9yeSBsZWFrXCIgaW4gdGhhdCBpdCB3aWxsIG5ldmVyIHN0b3AgZ3Jvd2luZywgaW4gcmVhbGl0eSwgb25seSBhIGNvdXBsZVxuICAvLyBvZiBwcm9wZXJ0aWVzIGFyZSBzYXZlZCBmb3IgZWFjaCBzZWVuIFBlcmlvZC4gRXZlbiBsb25nIHJ1bm5pbmcgbGl2ZSBzdHJlYW1zIHdvbid0XG4gIC8vIGdlbmVyYXRlIHRvbyBtYW55IFBlcmlvZHMsIHVubGVzcyB0aGUgc3RyZWFtIGlzIHdhdGNoZWQgZm9yIGRlY2FkZXMuIEluIHRoZSBmdXR1cmUsXG4gIC8vIHRoaXMgY2FuIGJlIG9wdGltaXplZCBieSBtYXBwaW5nIHRvIGRpc2NvbnRpbnVpdHkgc2VxdWVuY2UgbnVtYmVycyBmb3IgZWFjaCB0aW1lbGluZSxcbiAgLy8gYnV0IGl0IG1heSBub3QgYmVjb21lIGFuIGlzc3VlLCBhbmQgdGhlIGFkZGl0aW9uYWwgaW5mbyBjYW4gYmUgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG5cbiAgbmV3TWFuaWZlc3QudGltZWxpbmVTdGFydHMgPSBnZXRVbmlxdWVUaW1lbGluZVN0YXJ0cyhbb2xkTWFuaWZlc3QudGltZWxpbmVTdGFydHMsIG5ld01hbmlmZXN0LnRpbWVsaW5lU3RhcnRzXSk7XG4gIHVwZGF0ZVNlcXVlbmNlTnVtYmVycyh7XG4gICAgb2xkUGxheWxpc3RzLFxuICAgIG5ld1BsYXlsaXN0cyxcbiAgICB0aW1lbGluZVN0YXJ0czogbmV3TWFuaWZlc3QudGltZWxpbmVTdGFydHNcbiAgfSk7XG4gIHJldHVybiBuZXdNYW5pZmVzdDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlU2lkeEtleSA9IHNpZHggPT4gc2lkeCAmJiBzaWR4LnVyaSArICctJyArIGJ5dGVSYW5nZVRvU3RyaW5nKHNpZHguYnl0ZXJhbmdlKTtcblxuY29uc3QgbWVyZ2VEaXNjb250aWd1b3VzUGxheWxpc3RzID0gcGxheWxpc3RzID0+IHtcbiAgLy8gQnJlYWsgb3V0IHBsYXlsaXN0cyBpbnRvIGdyb3VwcyBiYXNlZCBvbiB0aGVpciBiYXNlVXJsXG4gIGNvbnN0IHBsYXlsaXN0c0J5QmFzZVVybCA9IHBsYXlsaXN0cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyKSB7XG4gICAgaWYgKCFhY2NbY3VyLmF0dHJpYnV0ZXMuYmFzZVVybF0pIHtcbiAgICAgIGFjY1tjdXIuYXR0cmlidXRlcy5iYXNlVXJsXSA9IFtdO1xuICAgIH1cblxuICAgIGFjY1tjdXIuYXR0cmlidXRlcy5iYXNlVXJsXS5wdXNoKGN1cik7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICBsZXQgYWxsUGxheWxpc3RzID0gW107XG4gIE9iamVjdC52YWx1ZXMocGxheWxpc3RzQnlCYXNlVXJsKS5mb3JFYWNoKHBsYXlsaXN0R3JvdXAgPT4ge1xuICAgIGNvbnN0IG1lcmdlZFBsYXlsaXN0cyA9IHZhbHVlcyhwbGF5bGlzdEdyb3VwLnJlZHVjZSgoYWNjLCBwbGF5bGlzdCkgPT4ge1xuICAgICAgLy8gYXNzdW1pbmcgcGxheWxpc3QgSURzIGFyZSB0aGUgc2FtZSBhY3Jvc3MgcGVyaW9kc1xuICAgICAgLy8gVE9ETzogaGFuZGxlIG11bHRpcGVyaW9kIHdoZXJlIHJlcHJlc2VudGF0aW9uIHNldHMgYXJlIG5vdCB0aGUgc2FtZVxuICAgICAgLy8gYWNyb3NzIHBlcmlvZHNcbiAgICAgIGNvbnN0IG5hbWUgPSBwbGF5bGlzdC5hdHRyaWJ1dGVzLmlkICsgKHBsYXlsaXN0LmF0dHJpYnV0ZXMubGFuZyB8fCAnJyk7XG5cbiAgICAgIGlmICghYWNjW25hbWVdKSB7XG4gICAgICAgIC8vIEZpcnN0IFBlcmlvZFxuICAgICAgICBhY2NbbmFtZV0gPSBwbGF5bGlzdDtcbiAgICAgICAgYWNjW25hbWVdLmF0dHJpYnV0ZXMudGltZWxpbmVTdGFydHMgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFN1YnNlcXVlbnQgUGVyaW9kc1xuICAgICAgICBpZiAocGxheWxpc3Quc2VnbWVudHMpIHtcbiAgICAgICAgICAvLyBmaXJzdCBzZWdtZW50IG9mIHN1YnNlcXVlbnQgcGVyaW9kcyBzaWduYWwgYSBkaXNjb250aW51aXR5XG4gICAgICAgICAgaWYgKHBsYXlsaXN0LnNlZ21lbnRzWzBdKSB7XG4gICAgICAgICAgICBwbGF5bGlzdC5zZWdtZW50c1swXS5kaXNjb250aW51aXR5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhY2NbbmFtZV0uc2VnbWVudHMucHVzaCguLi5wbGF5bGlzdC5zZWdtZW50cyk7XG4gICAgICAgIH0gLy8gYnViYmxlIHVwIGNvbnRlbnRQcm90ZWN0aW9uLCB0aGlzIGFzc3VtZXMgYWxsIERSTSBjb250ZW50XG4gICAgICAgIC8vIGhhcyB0aGUgc2FtZSBjb250ZW50UHJvdGVjdGlvblxuXG5cbiAgICAgICAgaWYgKHBsYXlsaXN0LmF0dHJpYnV0ZXMuY29udGVudFByb3RlY3Rpb24pIHtcbiAgICAgICAgICBhY2NbbmFtZV0uYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbiA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMuY29udGVudFByb3RlY3Rpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYWNjW25hbWVdLmF0dHJpYnV0ZXMudGltZWxpbmVTdGFydHMucHVzaCh7XG4gICAgICAgIC8vIEFsdGhvdWdoIHRoZXkgcmVwcmVzZW50IHRoZSBzYW1lIG51bWJlciwgaXQncyBpbXBvcnRhbnQgdG8gaGF2ZSBib3RoIHRvIG1ha2UgaXRcbiAgICAgICAgLy8gY29tcGF0aWJsZSB3aXRoIEhMUyBwb3RlbnRpYWxseSBoYXZpbmcgYSBzaW1pbGFyIGF0dHJpYnV0ZS5cbiAgICAgICAgc3RhcnQ6IHBsYXlsaXN0LmF0dHJpYnV0ZXMucGVyaW9kU3RhcnQsXG4gICAgICAgIHRpbWVsaW5lOiBwbGF5bGlzdC5hdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pKTtcbiAgICBhbGxQbGF5bGlzdHMgPSBhbGxQbGF5bGlzdHMuY29uY2F0KG1lcmdlZFBsYXlsaXN0cyk7XG4gIH0pO1xuICByZXR1cm4gYWxsUGxheWxpc3RzLm1hcChwbGF5bGlzdCA9PiB7XG4gICAgcGxheWxpc3QuZGlzY29udGludWl0eVN0YXJ0cyA9IGZpbmRJbmRleGVzKHBsYXlsaXN0LnNlZ21lbnRzIHx8IFtdLCAnZGlzY29udGludWl0eScpO1xuICAgIHJldHVybiBwbGF5bGlzdDtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0ID0gKHBsYXlsaXN0LCBzaWR4TWFwcGluZykgPT4ge1xuICBjb25zdCBzaWR4S2V5ID0gZ2VuZXJhdGVTaWR4S2V5KHBsYXlsaXN0LnNpZHgpO1xuICBjb25zdCBzaWR4TWF0Y2ggPSBzaWR4S2V5ICYmIHNpZHhNYXBwaW5nW3NpZHhLZXldICYmIHNpZHhNYXBwaW5nW3NpZHhLZXldLnNpZHg7XG5cbiAgaWYgKHNpZHhNYXRjaCkge1xuICAgIGFkZFNpZHhTZWdtZW50c1RvUGxheWxpc3QkMShwbGF5bGlzdCwgc2lkeE1hdGNoLCBwbGF5bGlzdC5zaWR4LnJlc29sdmVkVXJpKTtcbiAgfVxuXG4gIHJldHVybiBwbGF5bGlzdDtcbn07XG5jb25zdCBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0cyA9IChwbGF5bGlzdHMsIHNpZHhNYXBwaW5nID0ge30pID0+IHtcbiAgaWYgKCFPYmplY3Qua2V5cyhzaWR4TWFwcGluZykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBsYXlsaXN0cztcbiAgfVxuXG4gIGZvciAoY29uc3QgaSBpbiBwbGF5bGlzdHMpIHtcbiAgICBwbGF5bGlzdHNbaV0gPSBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0KHBsYXlsaXN0c1tpXSwgc2lkeE1hcHBpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHBsYXlsaXN0cztcbn07XG5jb25zdCBmb3JtYXRBdWRpb1BsYXlsaXN0ID0gKHtcbiAgYXR0cmlidXRlcyxcbiAgc2VnbWVudHMsXG4gIHNpZHgsXG4gIG1lZGlhU2VxdWVuY2UsXG4gIGRpc2NvbnRpbnVpdHlTZXF1ZW5jZSxcbiAgZGlzY29udGludWl0eVN0YXJ0c1xufSwgaXNBdWRpb09ubHkpID0+IHtcbiAgY29uc3QgcGxheWxpc3QgPSB7XG4gICAgYXR0cmlidXRlczoge1xuICAgICAgTkFNRTogYXR0cmlidXRlcy5pZCxcbiAgICAgIEJBTkRXSURUSDogYXR0cmlidXRlcy5iYW5kd2lkdGgsXG4gICAgICBDT0RFQ1M6IGF0dHJpYnV0ZXMuY29kZWNzLFxuICAgICAgWydQUk9HUkFNLUlEJ106IDFcbiAgICB9LFxuICAgIHVyaTogJycsXG4gICAgZW5kTGlzdDogYXR0cmlidXRlcy50eXBlID09PSAnc3RhdGljJyxcbiAgICB0aW1lbGluZTogYXR0cmlidXRlcy5wZXJpb2RTdGFydCxcbiAgICByZXNvbHZlZFVyaTogYXR0cmlidXRlcy5iYXNlVXJsIHx8ICcnLFxuICAgIHRhcmdldER1cmF0aW9uOiBhdHRyaWJ1dGVzLmR1cmF0aW9uLFxuICAgIGRpc2NvbnRpbnVpdHlTZXF1ZW5jZSxcbiAgICBkaXNjb250aW51aXR5U3RhcnRzLFxuICAgIHRpbWVsaW5lU3RhcnRzOiBhdHRyaWJ1dGVzLnRpbWVsaW5lU3RhcnRzLFxuICAgIG1lZGlhU2VxdWVuY2UsXG4gICAgc2VnbWVudHNcbiAgfTtcblxuICBpZiAoYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbikge1xuICAgIHBsYXlsaXN0LmNvbnRlbnRQcm90ZWN0aW9uID0gYXR0cmlidXRlcy5jb250ZW50UHJvdGVjdGlvbjtcbiAgfVxuXG4gIGlmIChhdHRyaWJ1dGVzLnNlcnZpY2VMb2NhdGlvbikge1xuICAgIHBsYXlsaXN0LmF0dHJpYnV0ZXMuc2VydmljZUxvY2F0aW9uID0gYXR0cmlidXRlcy5zZXJ2aWNlTG9jYXRpb247XG4gIH1cblxuICBpZiAoc2lkeCkge1xuICAgIHBsYXlsaXN0LnNpZHggPSBzaWR4O1xuICB9XG5cbiAgaWYgKGlzQXVkaW9Pbmx5KSB7XG4gICAgcGxheWxpc3QuYXR0cmlidXRlcy5BVURJTyA9ICdhdWRpbyc7XG4gICAgcGxheWxpc3QuYXR0cmlidXRlcy5TVUJUSVRMRVMgPSAnc3Vicyc7XG4gIH1cblxuICByZXR1cm4gcGxheWxpc3Q7XG59O1xuY29uc3QgZm9ybWF0VnR0UGxheWxpc3QgPSAoe1xuICBhdHRyaWJ1dGVzLFxuICBzZWdtZW50cyxcbiAgbWVkaWFTZXF1ZW5jZSxcbiAgZGlzY29udGludWl0eVN0YXJ0cyxcbiAgZGlzY29udGludWl0eVNlcXVlbmNlXG59KSA9PiB7XG4gIGlmICh0eXBlb2Ygc2VnbWVudHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gdnR0IHRyYWNrcyBtYXkgdXNlIHNpbmdsZSBmaWxlIGluIEJhc2VVUkxcbiAgICBzZWdtZW50cyA9IFt7XG4gICAgICB1cmk6IGF0dHJpYnV0ZXMuYmFzZVVybCxcbiAgICAgIHRpbWVsaW5lOiBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgICAgcmVzb2x2ZWRVcmk6IGF0dHJpYnV0ZXMuYmFzZVVybCB8fCAnJyxcbiAgICAgIGR1cmF0aW9uOiBhdHRyaWJ1dGVzLnNvdXJjZUR1cmF0aW9uLFxuICAgICAgbnVtYmVyOiAwXG4gICAgfV07IC8vIHRhcmdldER1cmF0aW9uIHNob3VsZCBiZSB0aGUgc2FtZSBkdXJhdGlvbiBhcyB0aGUgb25seSBzZWdtZW50XG5cbiAgICBhdHRyaWJ1dGVzLmR1cmF0aW9uID0gYXR0cmlidXRlcy5zb3VyY2VEdXJhdGlvbjtcbiAgfVxuXG4gIGNvbnN0IG0zdThBdHRyaWJ1dGVzID0ge1xuICAgIE5BTUU6IGF0dHJpYnV0ZXMuaWQsXG4gICAgQkFORFdJRFRIOiBhdHRyaWJ1dGVzLmJhbmR3aWR0aCxcbiAgICBbJ1BST0dSQU0tSUQnXTogMVxuICB9O1xuXG4gIGlmIChhdHRyaWJ1dGVzLmNvZGVjcykge1xuICAgIG0zdThBdHRyaWJ1dGVzLkNPREVDUyA9IGF0dHJpYnV0ZXMuY29kZWNzO1xuICB9XG5cbiAgY29uc3QgdnR0UGxheWxpc3QgPSB7XG4gICAgYXR0cmlidXRlczogbTN1OEF0dHJpYnV0ZXMsXG4gICAgdXJpOiAnJyxcbiAgICBlbmRMaXN0OiBhdHRyaWJ1dGVzLnR5cGUgPT09ICdzdGF0aWMnLFxuICAgIHRpbWVsaW5lOiBhdHRyaWJ1dGVzLnBlcmlvZFN0YXJ0LFxuICAgIHJlc29sdmVkVXJpOiBhdHRyaWJ1dGVzLmJhc2VVcmwgfHwgJycsXG4gICAgdGFyZ2V0RHVyYXRpb246IGF0dHJpYnV0ZXMuZHVyYXRpb24sXG4gICAgdGltZWxpbmVTdGFydHM6IGF0dHJpYnV0ZXMudGltZWxpbmVTdGFydHMsXG4gICAgZGlzY29udGludWl0eVN0YXJ0cyxcbiAgICBkaXNjb250aW51aXR5U2VxdWVuY2UsXG4gICAgbWVkaWFTZXF1ZW5jZSxcbiAgICBzZWdtZW50c1xuICB9O1xuXG4gIGlmIChhdHRyaWJ1dGVzLnNlcnZpY2VMb2NhdGlvbikge1xuICAgIHZ0dFBsYXlsaXN0LmF0dHJpYnV0ZXMuc2VydmljZUxvY2F0aW9uID0gYXR0cmlidXRlcy5zZXJ2aWNlTG9jYXRpb247XG4gIH1cblxuICByZXR1cm4gdnR0UGxheWxpc3Q7XG59O1xuY29uc3Qgb3JnYW5pemVBdWRpb1BsYXlsaXN0cyA9IChwbGF5bGlzdHMsIHNpZHhNYXBwaW5nID0ge30sIGlzQXVkaW9Pbmx5ID0gZmFsc2UpID0+IHtcbiAgbGV0IG1haW5QbGF5bGlzdDtcbiAgY29uc3QgZm9ybWF0dGVkUGxheWxpc3RzID0gcGxheWxpc3RzLnJlZHVjZSgoYSwgcGxheWxpc3QpID0+IHtcbiAgICBjb25zdCByb2xlID0gcGxheWxpc3QuYXR0cmlidXRlcy5yb2xlICYmIHBsYXlsaXN0LmF0dHJpYnV0ZXMucm9sZS52YWx1ZSB8fCAnJztcbiAgICBjb25zdCBsYW5ndWFnZSA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMubGFuZyB8fCAnJztcbiAgICBsZXQgbGFiZWwgPSBwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhYmVsIHx8ICdtYWluJztcblxuICAgIGlmIChsYW5ndWFnZSAmJiAhcGxheWxpc3QuYXR0cmlidXRlcy5sYWJlbCkge1xuICAgICAgY29uc3Qgcm9sZUxhYmVsID0gcm9sZSA/IGAgKCR7cm9sZX0pYCA6ICcnO1xuICAgICAgbGFiZWwgPSBgJHtwbGF5bGlzdC5hdHRyaWJ1dGVzLmxhbmd9JHtyb2xlTGFiZWx9YDtcbiAgICB9XG5cbiAgICBpZiAoIWFbbGFiZWxdKSB7XG4gICAgICBhW2xhYmVsXSA9IHtcbiAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgIGF1dG9zZWxlY3Q6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IHJvbGUgPT09ICdtYWluJyxcbiAgICAgICAgcGxheWxpc3RzOiBbXSxcbiAgICAgICAgdXJpOiAnJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtYXR0ZWQgPSBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0KGZvcm1hdEF1ZGlvUGxheWxpc3QocGxheWxpc3QsIGlzQXVkaW9Pbmx5KSwgc2lkeE1hcHBpbmcpO1xuICAgIGFbbGFiZWxdLnBsYXlsaXN0cy5wdXNoKGZvcm1hdHRlZCk7XG5cbiAgICBpZiAodHlwZW9mIG1haW5QbGF5bGlzdCA9PT0gJ3VuZGVmaW5lZCcgJiYgcm9sZSA9PT0gJ21haW4nKSB7XG4gICAgICBtYWluUGxheWxpc3QgPSBwbGF5bGlzdDtcbiAgICAgIG1haW5QbGF5bGlzdC5kZWZhdWx0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfSwge30pOyAvLyBpZiBubyBwbGF5bGlzdHMgaGF2ZSByb2xlIFwibWFpblwiLCBtYXJrIHRoZSBmaXJzdCBhcyBtYWluXG5cbiAgaWYgKCFtYWluUGxheWxpc3QpIHtcbiAgICBjb25zdCBmaXJzdExhYmVsID0gT2JqZWN0LmtleXMoZm9ybWF0dGVkUGxheWxpc3RzKVswXTtcbiAgICBmb3JtYXR0ZWRQbGF5bGlzdHNbZmlyc3RMYWJlbF0uZGVmYXVsdCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0dGVkUGxheWxpc3RzO1xufTtcbmNvbnN0IG9yZ2FuaXplVnR0UGxheWxpc3RzID0gKHBsYXlsaXN0cywgc2lkeE1hcHBpbmcgPSB7fSkgPT4ge1xuICByZXR1cm4gcGxheWxpc3RzLnJlZHVjZSgoYSwgcGxheWxpc3QpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMubGFiZWwgfHwgcGxheWxpc3QuYXR0cmlidXRlcy5sYW5nIHx8ICd0ZXh0JztcblxuICAgIGlmICghYVtsYWJlbF0pIHtcbiAgICAgIGFbbGFiZWxdID0ge1xuICAgICAgICBsYW5ndWFnZTogbGFiZWwsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICBhdXRvc2VsZWN0OiBmYWxzZSxcbiAgICAgICAgcGxheWxpc3RzOiBbXSxcbiAgICAgICAgdXJpOiAnJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBhW2xhYmVsXS5wbGF5bGlzdHMucHVzaChhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0KGZvcm1hdFZ0dFBsYXlsaXN0KHBsYXlsaXN0KSwgc2lkeE1hcHBpbmcpKTtcbiAgICByZXR1cm4gYTtcbiAgfSwge30pO1xufTtcblxuY29uc3Qgb3JnYW5pemVDYXB0aW9uU2VydmljZXMgPSBjYXB0aW9uU2VydmljZXMgPT4gY2FwdGlvblNlcnZpY2VzLnJlZHVjZSgoc3ZjT2JqLCBzdmMpID0+IHtcbiAgaWYgKCFzdmMpIHtcbiAgICByZXR1cm4gc3ZjT2JqO1xuICB9XG5cbiAgc3ZjLmZvckVhY2goc2VydmljZSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY2hhbm5lbCxcbiAgICAgIGxhbmd1YWdlXG4gICAgfSA9IHNlcnZpY2U7XG4gICAgc3ZjT2JqW2xhbmd1YWdlXSA9IHtcbiAgICAgIGF1dG9zZWxlY3Q6IGZhbHNlLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICBpbnN0cmVhbUlkOiBjaGFubmVsLFxuICAgICAgbGFuZ3VhZ2VcbiAgICB9O1xuXG4gICAgaWYgKHNlcnZpY2UuaGFzT3duUHJvcGVydHkoJ2FzcGVjdFJhdGlvJykpIHtcbiAgICAgIHN2Y09ialtsYW5ndWFnZV0uYXNwZWN0UmF0aW8gPSBzZXJ2aWNlLmFzcGVjdFJhdGlvO1xuICAgIH1cblxuICAgIGlmIChzZXJ2aWNlLmhhc093blByb3BlcnR5KCdlYXN5UmVhZGVyJykpIHtcbiAgICAgIHN2Y09ialtsYW5ndWFnZV0uZWFzeVJlYWRlciA9IHNlcnZpY2UuZWFzeVJlYWRlcjtcbiAgICB9XG5cbiAgICBpZiAoc2VydmljZS5oYXNPd25Qcm9wZXJ0eSgnM0QnKSkge1xuICAgICAgc3ZjT2JqW2xhbmd1YWdlXVsnM0QnXSA9IHNlcnZpY2VbJzNEJ107XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN2Y09iajtcbn0sIHt9KTtcblxuY29uc3QgZm9ybWF0VmlkZW9QbGF5bGlzdCA9ICh7XG4gIGF0dHJpYnV0ZXMsXG4gIHNlZ21lbnRzLFxuICBzaWR4LFxuICBkaXNjb250aW51aXR5U3RhcnRzXG59KSA9PiB7XG4gIGNvbnN0IHBsYXlsaXN0ID0ge1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIE5BTUU6IGF0dHJpYnV0ZXMuaWQsXG4gICAgICBBVURJTzogJ2F1ZGlvJyxcbiAgICAgIFNVQlRJVExFUzogJ3N1YnMnLFxuICAgICAgUkVTT0xVVElPTjoge1xuICAgICAgICB3aWR0aDogYXR0cmlidXRlcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBhdHRyaWJ1dGVzLmhlaWdodFxuICAgICAgfSxcbiAgICAgIENPREVDUzogYXR0cmlidXRlcy5jb2RlY3MsXG4gICAgICBCQU5EV0lEVEg6IGF0dHJpYnV0ZXMuYmFuZHdpZHRoLFxuICAgICAgWydQUk9HUkFNLUlEJ106IDFcbiAgICB9LFxuICAgIHVyaTogJycsXG4gICAgZW5kTGlzdDogYXR0cmlidXRlcy50eXBlID09PSAnc3RhdGljJyxcbiAgICB0aW1lbGluZTogYXR0cmlidXRlcy5wZXJpb2RTdGFydCxcbiAgICByZXNvbHZlZFVyaTogYXR0cmlidXRlcy5iYXNlVXJsIHx8ICcnLFxuICAgIHRhcmdldER1cmF0aW9uOiBhdHRyaWJ1dGVzLmR1cmF0aW9uLFxuICAgIGRpc2NvbnRpbnVpdHlTdGFydHMsXG4gICAgdGltZWxpbmVTdGFydHM6IGF0dHJpYnV0ZXMudGltZWxpbmVTdGFydHMsXG4gICAgc2VnbWVudHNcbiAgfTtcblxuICBpZiAoYXR0cmlidXRlcy5mcmFtZVJhdGUpIHtcbiAgICBwbGF5bGlzdC5hdHRyaWJ1dGVzWydGUkFNRS1SQVRFJ10gPSBhdHRyaWJ1dGVzLmZyYW1lUmF0ZTtcbiAgfVxuXG4gIGlmIChhdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uKSB7XG4gICAgcGxheWxpc3QuY29udGVudFByb3RlY3Rpb24gPSBhdHRyaWJ1dGVzLmNvbnRlbnRQcm90ZWN0aW9uO1xuICB9XG5cbiAgaWYgKGF0dHJpYnV0ZXMuc2VydmljZUxvY2F0aW9uKSB7XG4gICAgcGxheWxpc3QuYXR0cmlidXRlcy5zZXJ2aWNlTG9jYXRpb24gPSBhdHRyaWJ1dGVzLnNlcnZpY2VMb2NhdGlvbjtcbiAgfVxuXG4gIGlmIChzaWR4KSB7XG4gICAgcGxheWxpc3Quc2lkeCA9IHNpZHg7XG4gIH1cblxuICByZXR1cm4gcGxheWxpc3Q7XG59O1xuXG5jb25zdCB2aWRlb09ubHkgPSAoe1xuICBhdHRyaWJ1dGVzXG59KSA9PiBhdHRyaWJ1dGVzLm1pbWVUeXBlID09PSAndmlkZW8vbXA0JyB8fCBhdHRyaWJ1dGVzLm1pbWVUeXBlID09PSAndmlkZW8vd2VibScgfHwgYXR0cmlidXRlcy5jb250ZW50VHlwZSA9PT0gJ3ZpZGVvJztcblxuY29uc3QgYXVkaW9Pbmx5ID0gKHtcbiAgYXR0cmlidXRlc1xufSkgPT4gYXR0cmlidXRlcy5taW1lVHlwZSA9PT0gJ2F1ZGlvL21wNCcgfHwgYXR0cmlidXRlcy5taW1lVHlwZSA9PT0gJ2F1ZGlvL3dlYm0nIHx8IGF0dHJpYnV0ZXMuY29udGVudFR5cGUgPT09ICdhdWRpbyc7XG5cbmNvbnN0IHZ0dE9ubHkgPSAoe1xuICBhdHRyaWJ1dGVzXG59KSA9PiBhdHRyaWJ1dGVzLm1pbWVUeXBlID09PSAndGV4dC92dHQnIHx8IGF0dHJpYnV0ZXMuY29udGVudFR5cGUgPT09ICd0ZXh0Jztcbi8qKlxuICogQ29udGFpbnMgc3RhcnQgYW5kIHRpbWVsaW5lIHByb3BlcnRpZXMgZGVub3RpbmcgYSB0aW1lbGluZSBzdGFydC4gRm9yIERBU0gsIHRoZXNlIHdpbGxcbiAqIGJlIHRoZSBzYW1lIG51bWJlci5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUaW1lbGluZVN0YXJ0XG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnQgLSB0aGUgc3RhcnQgdGltZSBvZiB0aGUgdGltZWxpbmVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aW1lbGluZSAtIHRoZSB0aW1lbGluZSBudW1iZXJcbiAqL1xuXG4vKipcbiAqIEFkZHMgYXBwcm9wcmlhdGUgbWVkaWEgYW5kIGRpc2NvbnRpbnVpdHkgc2VxdWVuY2UgdmFsdWVzIHRvIHRoZSBzZWdtZW50cyBhbmQgcGxheWxpc3RzLlxuICpcbiAqIFRocm91Z2hvdXQgbXBkLXBhcnNlciwgdGhlIGBudW1iZXJgIGF0dHJpYnV0ZSBpcyB1c2VkIGluIHJlbGF0aW9uIHRvIGBzdGFydE51bWJlcmAsIGFcbiAqIERBU0ggc3BlY2lmaWMgYXR0cmlidXRlIHVzZWQgaW4gY29uc3RydWN0aW5nIHNlZ21lbnQgVVJJJ3MgZnJvbSB0ZW1wbGF0ZXMuIEhvd2V2ZXIsIGZyb21cbiAqIGFuIEhMUyBwZXJzcGVjdGl2ZSwgdGhlIGBudW1iZXJgIGF0dHJpYnV0ZSBvbiBhIHNlZ21lbnQgd291bGQgYmUgaXRzIGBtZWRpYVNlcXVlbmNlYFxuICogdmFsdWUsIHdoaWNoIHNob3VsZCBzdGFydCBhdCB0aGUgb3JpZ2luYWwgbWVkaWEgc2VxdWVuY2UgdmFsdWUgKG9yIDApIGFuZCBpbmNyZW1lbnQgYnkgMVxuICogZm9yIGVhY2ggc2VnbWVudCB0aGVyZWFmdGVyLiBTaW5jZSBEQVNIJ3MgYHN0YXJ0TnVtYmVyYCB2YWx1ZXMgYXJlIGluZGVwZW5kZW50IHBlclxuICogcGVyaW9kLCBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gdXNlIGl0IGZvciBgbnVtYmVyYC4gSW5zdGVhZCwgYXNzdW1lIGV2ZXJ5dGhpbmcgc3RhcnRzXG4gKiBmcm9tIGEgMCBtZWRpYVNlcXVlbmNlIHZhbHVlIGFuZCBpbmNyZW1lbnQgZnJvbSB0aGVyZS5cbiAqXG4gKiBOb3RlIHRoYXQgVkhTIGN1cnJlbnRseSBkb2Vzbid0IHVzZSB0aGUgYG51bWJlcmAgcHJvcGVydHksIGJ1dCBpdCBjYW4gYmUgaGVscGZ1bCBmb3JcbiAqIGRlYnVnZ2luZyBhbmQgbWFraW5nIHNlbnNlIG9mIHRoZSBtYW5pZmVzdC5cbiAqXG4gKiBGb3IgbGl2ZSBwbGF5bGlzdHMsIHRvIGFjY291bnQgZm9yIHZhbHVlcyBpbmNyZWFzaW5nIGluIG1hbmlmZXN0cyB3aGVuIHBlcmlvZHMgYXJlXG4gKiByZW1vdmVkIG9uIHJlZnJlc2hlcywgbWVyZ2luZyBsb2dpYyBzaG91bGQgYmUgdXNlZCB0byB1cGRhdGUgdGhlIG51bWJlcnMgdG8gdGhlaXJcbiAqIGFwcHJvcHJpYXRlIHZhbHVlcyAodG8gZW5zdXJlIHRoZXkncmUgc2VxdWVudGlhbCBhbmQgaW5jcmVhc2luZykuXG4gKlxuICogQHBhcmFtIHtPYmplY3RbXX0gcGxheWxpc3RzIC0gdGhlIHBsYXlsaXN0cyB0byB1cGRhdGVcbiAqIEBwYXJhbSB7VGltZWxpbmVTdGFydFtdfSB0aW1lbGluZVN0YXJ0cyAtIHRoZSB0aW1lbGluZSBzdGFydHMgZm9yIHRoZSBtYW5pZmVzdFxuICovXG5cblxuY29uc3QgYWRkTWVkaWFTZXF1ZW5jZVZhbHVlcyA9IChwbGF5bGlzdHMsIHRpbWVsaW5lU3RhcnRzKSA9PiB7XG4gIC8vIGluY3JlbWVudCBhbGwgc2VnbWVudHMgc2VxdWVudGlhbGx5XG4gIHBsYXlsaXN0cy5mb3JFYWNoKHBsYXlsaXN0ID0+IHtcbiAgICBwbGF5bGlzdC5tZWRpYVNlcXVlbmNlID0gMDtcbiAgICBwbGF5bGlzdC5kaXNjb250aW51aXR5U2VxdWVuY2UgPSB0aW1lbGluZVN0YXJ0cy5maW5kSW5kZXgoZnVuY3Rpb24gKHtcbiAgICAgIHRpbWVsaW5lXG4gICAgfSkge1xuICAgICAgcmV0dXJuIHRpbWVsaW5lID09PSBwbGF5bGlzdC50aW1lbGluZTtcbiAgICB9KTtcblxuICAgIGlmICghcGxheWxpc3Quc2VnbWVudHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwbGF5bGlzdC5zZWdtZW50cy5mb3JFYWNoKChzZWdtZW50LCBpbmRleCkgPT4ge1xuICAgICAgc2VnbWVudC5udW1iZXIgPSBpbmRleDtcbiAgICB9KTtcbiAgfSk7XG59O1xuLyoqXG4gKiBHaXZlbiBhIG1lZGlhIGdyb3VwIG9iamVjdCwgZmxhdHRlbnMgYWxsIHBsYXlsaXN0cyB3aXRoaW4gdGhlIG1lZGlhIGdyb3VwIGludG8gYSBzaW5nbGVcbiAqIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZWRpYUdyb3VwT2JqZWN0IC0gdGhlIG1lZGlhIGdyb3VwIG9iamVjdFxuICpcbiAqIEByZXR1cm4ge09iamVjdFtdfVxuICogICAgICAgICBUaGUgbWVkaWEgZ3JvdXAgcGxheWxpc3RzXG4gKi9cblxuY29uc3QgZmxhdHRlbk1lZGlhR3JvdXBQbGF5bGlzdHMgPSBtZWRpYUdyb3VwT2JqZWN0ID0+IHtcbiAgaWYgKCFtZWRpYUdyb3VwT2JqZWN0KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lZGlhR3JvdXBPYmplY3QpLnJlZHVjZSgoYWNjLCBsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsQ29udGVudHMgPSBtZWRpYUdyb3VwT2JqZWN0W2xhYmVsXTtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChsYWJlbENvbnRlbnRzLnBsYXlsaXN0cyk7XG4gIH0sIFtdKTtcbn07XG5jb25zdCB0b00zdTggPSAoe1xuICBkYXNoUGxheWxpc3RzLFxuICBsb2NhdGlvbnMsXG4gIGNvbnRlbnRTdGVlcmluZyxcbiAgc2lkeE1hcHBpbmcgPSB7fSxcbiAgcHJldmlvdXNNYW5pZmVzdCxcbiAgZXZlbnRTdHJlYW1cbn0pID0+IHtcbiAgaWYgKCFkYXNoUGxheWxpc3RzLmxlbmd0aCkge1xuICAgIHJldHVybiB7fTtcbiAgfSAvLyBncmFiIGFsbCBtYWluIG1hbmlmZXN0IGF0dHJpYnV0ZXNcblxuXG4gIGNvbnN0IHtcbiAgICBzb3VyY2VEdXJhdGlvbjogZHVyYXRpb24sXG4gICAgdHlwZSxcbiAgICBzdWdnZXN0ZWRQcmVzZW50YXRpb25EZWxheSxcbiAgICBtaW5pbXVtVXBkYXRlUGVyaW9kXG4gIH0gPSBkYXNoUGxheWxpc3RzWzBdLmF0dHJpYnV0ZXM7XG4gIGNvbnN0IHZpZGVvUGxheWxpc3RzID0gbWVyZ2VEaXNjb250aWd1b3VzUGxheWxpc3RzKGRhc2hQbGF5bGlzdHMuZmlsdGVyKHZpZGVvT25seSkpLm1hcChmb3JtYXRWaWRlb1BsYXlsaXN0KTtcbiAgY29uc3QgYXVkaW9QbGF5bGlzdHMgPSBtZXJnZURpc2NvbnRpZ3VvdXNQbGF5bGlzdHMoZGFzaFBsYXlsaXN0cy5maWx0ZXIoYXVkaW9Pbmx5KSk7XG4gIGNvbnN0IHZ0dFBsYXlsaXN0cyA9IG1lcmdlRGlzY29udGlndW91c1BsYXlsaXN0cyhkYXNoUGxheWxpc3RzLmZpbHRlcih2dHRPbmx5KSk7XG4gIGNvbnN0IGNhcHRpb25zID0gZGFzaFBsYXlsaXN0cy5tYXAocGxheWxpc3QgPT4gcGxheWxpc3QuYXR0cmlidXRlcy5jYXB0aW9uU2VydmljZXMpLmZpbHRlcihCb29sZWFuKTtcbiAgY29uc3QgbWFuaWZlc3QgPSB7XG4gICAgYWxsb3dDYWNoZTogdHJ1ZSxcbiAgICBkaXNjb250aW51aXR5U3RhcnRzOiBbXSxcbiAgICBzZWdtZW50czogW10sXG4gICAgZW5kTGlzdDogdHJ1ZSxcbiAgICBtZWRpYUdyb3Vwczoge1xuICAgICAgQVVESU86IHt9LFxuICAgICAgVklERU86IHt9LFxuICAgICAgWydDTE9TRUQtQ0FQVElPTlMnXToge30sXG4gICAgICBTVUJUSVRMRVM6IHt9XG4gICAgfSxcbiAgICB1cmk6ICcnLFxuICAgIGR1cmF0aW9uLFxuICAgIHBsYXlsaXN0czogYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdHModmlkZW9QbGF5bGlzdHMsIHNpZHhNYXBwaW5nKVxuICB9O1xuXG4gIGlmIChtaW5pbXVtVXBkYXRlUGVyaW9kID49IDApIHtcbiAgICBtYW5pZmVzdC5taW5pbXVtVXBkYXRlUGVyaW9kID0gbWluaW11bVVwZGF0ZVBlcmlvZCAqIDEwMDA7XG4gIH1cblxuICBpZiAobG9jYXRpb25zKSB7XG4gICAgbWFuaWZlc3QubG9jYXRpb25zID0gbG9jYXRpb25zO1xuICB9XG5cbiAgaWYgKGNvbnRlbnRTdGVlcmluZykge1xuICAgIG1hbmlmZXN0LmNvbnRlbnRTdGVlcmluZyA9IGNvbnRlbnRTdGVlcmluZztcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnZHluYW1pYycpIHtcbiAgICBtYW5pZmVzdC5zdWdnZXN0ZWRQcmVzZW50YXRpb25EZWxheSA9IHN1Z2dlc3RlZFByZXNlbnRhdGlvbkRlbGF5O1xuICB9XG5cbiAgaWYgKGV2ZW50U3RyZWFtICYmIGV2ZW50U3RyZWFtLmxlbmd0aCA+IDApIHtcbiAgICBtYW5pZmVzdC5ldmVudFN0cmVhbSA9IGV2ZW50U3RyZWFtO1xuICB9XG5cbiAgY29uc3QgaXNBdWRpb09ubHkgPSBtYW5pZmVzdC5wbGF5bGlzdHMubGVuZ3RoID09PSAwO1xuICBjb25zdCBvcmdhbml6ZWRBdWRpb0dyb3VwID0gYXVkaW9QbGF5bGlzdHMubGVuZ3RoID8gb3JnYW5pemVBdWRpb1BsYXlsaXN0cyhhdWRpb1BsYXlsaXN0cywgc2lkeE1hcHBpbmcsIGlzQXVkaW9Pbmx5KSA6IG51bGw7XG4gIGNvbnN0IG9yZ2FuaXplZFZ0dEdyb3VwID0gdnR0UGxheWxpc3RzLmxlbmd0aCA/IG9yZ2FuaXplVnR0UGxheWxpc3RzKHZ0dFBsYXlsaXN0cywgc2lkeE1hcHBpbmcpIDogbnVsbDtcbiAgY29uc3QgZm9ybWF0dGVkUGxheWxpc3RzID0gdmlkZW9QbGF5bGlzdHMuY29uY2F0KGZsYXR0ZW5NZWRpYUdyb3VwUGxheWxpc3RzKG9yZ2FuaXplZEF1ZGlvR3JvdXApLCBmbGF0dGVuTWVkaWFHcm91cFBsYXlsaXN0cyhvcmdhbml6ZWRWdHRHcm91cCkpO1xuICBjb25zdCBwbGF5bGlzdFRpbWVsaW5lU3RhcnRzID0gZm9ybWF0dGVkUGxheWxpc3RzLm1hcCgoe1xuICAgIHRpbWVsaW5lU3RhcnRzXG4gIH0pID0+IHRpbWVsaW5lU3RhcnRzKTtcbiAgbWFuaWZlc3QudGltZWxpbmVTdGFydHMgPSBnZXRVbmlxdWVUaW1lbGluZVN0YXJ0cyhwbGF5bGlzdFRpbWVsaW5lU3RhcnRzKTtcbiAgYWRkTWVkaWFTZXF1ZW5jZVZhbHVlcyhmb3JtYXR0ZWRQbGF5bGlzdHMsIG1hbmlmZXN0LnRpbWVsaW5lU3RhcnRzKTtcblxuICBpZiAob3JnYW5pemVkQXVkaW9Hcm91cCkge1xuICAgIG1hbmlmZXN0Lm1lZGlhR3JvdXBzLkFVRElPLmF1ZGlvID0gb3JnYW5pemVkQXVkaW9Hcm91cDtcbiAgfVxuXG4gIGlmIChvcmdhbml6ZWRWdHRHcm91cCkge1xuICAgIG1hbmlmZXN0Lm1lZGlhR3JvdXBzLlNVQlRJVExFUy5zdWJzID0gb3JnYW5pemVkVnR0R3JvdXA7XG4gIH1cblxuICBpZiAoY2FwdGlvbnMubGVuZ3RoKSB7XG4gICAgbWFuaWZlc3QubWVkaWFHcm91cHNbJ0NMT1NFRC1DQVBUSU9OUyddLmNjID0gb3JnYW5pemVDYXB0aW9uU2VydmljZXMoY2FwdGlvbnMpO1xuICB9XG5cbiAgaWYgKHByZXZpb3VzTWFuaWZlc3QpIHtcbiAgICByZXR1cm4gcG9zaXRpb25NYW5pZmVzdE9uVGltZWxpbmUoe1xuICAgICAgb2xkTWFuaWZlc3Q6IHByZXZpb3VzTWFuaWZlc3QsXG4gICAgICBuZXdNYW5pZmVzdDogbWFuaWZlc3RcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtYW5pZmVzdDtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgUiAocmVwZXRpdGlvbikgdmFsdWUgZm9yIGEgbGl2ZSBzdHJlYW0gKGZvciB0aGUgZmluYWwgc2VnbWVudFxuICogaW4gYSBtYW5pZmVzdCB3aGVyZSB0aGUgciB2YWx1ZSBpcyBuZWdhdGl2ZSAxKVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzXG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgICAgICAgbmFtZXMgYXMga2V5c1xuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAqICAgICAgICBjdXJyZW50IHRpbWUgKHR5cGljYWxseSB0aGUgdG90YWwgdGltZSB1cCB1bnRpbCB0aGUgZmluYWwgc2VnbWVudClcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogICAgICAgIGR1cmF0aW9uIHByb3BlcnR5IGZvciB0aGUgZ2l2ZW4gPFMgLz5cbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiAgICAgICAgUiB2YWx1ZSB0byByZWFjaCB0aGUgZW5kIG9mIHRoZSBnaXZlbiBwZXJpb2RcbiAqL1xuY29uc3QgZ2V0TGl2ZVJWYWx1ZSA9IChhdHRyaWJ1dGVzLCB0aW1lLCBkdXJhdGlvbikgPT4ge1xuICBjb25zdCB7XG4gICAgTk9XLFxuICAgIGNsaWVudE9mZnNldCxcbiAgICBhdmFpbGFiaWxpdHlTdGFydFRpbWUsXG4gICAgdGltZXNjYWxlID0gMSxcbiAgICBwZXJpb2RTdGFydCA9IDAsXG4gICAgbWluaW11bVVwZGF0ZVBlcmlvZCA9IDBcbiAgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IG5vdyA9IChOT1cgKyBjbGllbnRPZmZzZXQpIC8gMTAwMDtcbiAgY29uc3QgcGVyaW9kU3RhcnRXQyA9IGF2YWlsYWJpbGl0eVN0YXJ0VGltZSArIHBlcmlvZFN0YXJ0O1xuICBjb25zdCBwZXJpb2RFbmRXQyA9IG5vdyArIG1pbmltdW1VcGRhdGVQZXJpb2Q7XG4gIGNvbnN0IHBlcmlvZER1cmF0aW9uID0gcGVyaW9kRW5kV0MgLSBwZXJpb2RTdGFydFdDO1xuICByZXR1cm4gTWF0aC5jZWlsKChwZXJpb2REdXJhdGlvbiAqIHRpbWVzY2FsZSAtIHRpbWUpIC8gZHVyYXRpb24pO1xufTtcbi8qKlxuICogVXNlcyBpbmZvcm1hdGlvbiBwcm92aWRlZCBieSBTZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lIHRvIGRldGVybWluZSBzZWdtZW50XG4gKiB0aW1pbmcgYW5kIGR1cmF0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyBhbGwgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVcbiAqICAgICAgICBuYW1lcyBhcyBrZXlzXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzZWdtZW50VGltZWxpbmVcbiAqICAgICAgICBMaXN0IG9mIG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZSBhdHRyaWJ1dGVzIG9mIGVhY2ggUyBlbGVtZW50IGNvbnRhaW5lZCB3aXRoaW5cbiAqXG4gKiBAcmV0dXJuIHt7bnVtYmVyOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIHRpbWU6IG51bWJlciwgdGltZWxpbmU6IG51bWJlcn1bXX1cbiAqICAgICAgICAgTGlzdCBvZiBPYmplY3RzIHdpdGggc2VnbWVudCB0aW1pbmcgYW5kIGR1cmF0aW9uIGluZm9cbiAqL1xuXG5cbmNvbnN0IHBhcnNlQnlUaW1lbGluZSA9IChhdHRyaWJ1dGVzLCBzZWdtZW50VGltZWxpbmUpID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsXG4gICAgbWluaW11bVVwZGF0ZVBlcmlvZCA9IDAsXG4gICAgbWVkaWEgPSAnJyxcbiAgICBzb3VyY2VEdXJhdGlvbixcbiAgICB0aW1lc2NhbGUgPSAxLFxuICAgIHN0YXJ0TnVtYmVyID0gMSxcbiAgICBwZXJpb2RTdGFydDogdGltZWxpbmVcbiAgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IHNlZ21lbnRzID0gW107XG4gIGxldCB0aW1lID0gLTE7XG5cbiAgZm9yIChsZXQgc0luZGV4ID0gMDsgc0luZGV4IDwgc2VnbWVudFRpbWVsaW5lLmxlbmd0aDsgc0luZGV4KyspIHtcbiAgICBjb25zdCBTID0gc2VnbWVudFRpbWVsaW5lW3NJbmRleF07XG4gICAgY29uc3QgZHVyYXRpb24gPSBTLmQ7XG4gICAgY29uc3QgcmVwZWF0ID0gUy5yIHx8IDA7XG4gICAgY29uc3Qgc2VnbWVudFRpbWUgPSBTLnQgfHwgMDtcblxuICAgIGlmICh0aW1lIDwgMCkge1xuICAgICAgLy8gZmlyc3Qgc2VnbWVudFxuICAgICAgdGltZSA9IHNlZ21lbnRUaW1lO1xuICAgIH1cblxuICAgIGlmIChzZWdtZW50VGltZSAmJiBzZWdtZW50VGltZSA+IHRpbWUpIHtcbiAgICAgIC8vIGRpc2NvbnRpbnVpdHlcbiAgICAgIC8vIFRPRE86IEhvdyB0byBoYW5kbGUgdGhpcyB0eXBlIG9mIGRpc2NvbnRpbnVpdHlcbiAgICAgIC8vIHRpbWVsaW5lKysgaGVyZSB3b3VsZCB0cmVhdCBpdCBsaWtlIEhMUyBkaXNjb250dWl0eSBhbmQgY29udGVudCB3b3VsZFxuICAgICAgLy8gZ2V0IGFwcGVuZGVkIHdpdGhvdXQgZ2FwXG4gICAgICAvLyBFLkcuXG4gICAgICAvLyAgPFMgdD1cIjBcIiBkPVwiMVwiIC8+XG4gICAgICAvLyAgPFMgZD1cIjFcIiAvPlxuICAgICAgLy8gIDxTIGQ9XCIxXCIgLz5cbiAgICAgIC8vICA8UyB0PVwiNVwiIGQ9XCIxXCIgLz5cbiAgICAgIC8vIHdvdWxkIGhhdmUgJFRpbWUkIHZhbHVlcyBvZiBbMCwgMSwgMiwgNV1cbiAgICAgIC8vIHNob3VsZCB0aGlzIGJlIGFwcGVuZWQgYXQgdGltZSBwb3NpdGlvbnMgWzAsIDEsIDIsIDNdLCgjRVhULVgtRElTQ09OVElOVUlUWSlcbiAgICAgIC8vIG9yIFswLCAxLCAyLCBnYXAsIGdhcCwgNV0/ICgjRVhULVgtR0FQKVxuICAgICAgLy8gZG9lcyB0aGUgdmFsdWUgb2Ygc291cmNlRHVyYXRpb24gY29uc2lkZXIgdGhpcyB3aGVuIGNhbGN1bGF0aW5nIGFyYml0cmFyeVxuICAgICAgLy8gbmVnYXRpdmUgQHIgcmVwZWF0IHZhbHVlP1xuICAgICAgLy8gRS5HLiBTYW1lIGVsZW1lbnRzIGFzIGFib3ZlIHdpdGggdGhpcyBhZGRlZCBhdCB0aGUgZW5kXG4gICAgICAvLyAgPFMgZD1cIjFcIiByPVwiLTFcIiAvPlxuICAgICAgLy8gIHdpdGggYSBzb3VyY2VEdXJhdGlvbiBvZiAxMFxuICAgICAgLy8gV291bGQgdGhlIDIgZ2FwcyBiZSBpbmNsdWRlZCBpbiB0aGUgdGltZSBkdXJhdGlvbiBjYWxjdWxhdGlvbnMgcmVzdWx0aW5nIGluXG4gICAgICAvLyA4IHNlZ21lbnRzIHdpdGggJFRpbWUkIHZhbHVlcyBvZiBbMCwgMSwgMiwgNSwgNiwgNywgOCwgOV0gb3IgMTAgc2VnbWVudHNcbiAgICAgIC8vIHdpdGggJFRpbWUkIHZhbHVlcyBvZiBbMCwgMSwgMiwgNSwgNiwgNywgOCwgOSwgMTAsIDExXSA/XG4gICAgICB0aW1lID0gc2VnbWVudFRpbWU7XG4gICAgfVxuXG4gICAgbGV0IGNvdW50O1xuXG4gICAgaWYgKHJlcGVhdCA8IDApIHtcbiAgICAgIGNvbnN0IG5leHRTID0gc0luZGV4ICsgMTtcblxuICAgICAgaWYgKG5leHRTID09PSBzZWdtZW50VGltZWxpbmUubGVuZ3RoKSB7XG4gICAgICAgIC8vIGxhc3Qgc2VnbWVudFxuICAgICAgICBpZiAodHlwZSA9PT0gJ2R5bmFtaWMnICYmIG1pbmltdW1VcGRhdGVQZXJpb2QgPiAwICYmIG1lZGlhLmluZGV4T2YoJyROdW1iZXIkJykgPiAwKSB7XG4gICAgICAgICAgY291bnQgPSBnZXRMaXZlUlZhbHVlKGF0dHJpYnV0ZXMsIHRpbWUsIGR1cmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUT0RPOiBUaGlzIG1heSBiZSBpbmNvcnJlY3QgZGVwZW5kaW5nIG9uIGNvbmNsdXNpb24gb2YgVE9ETyBhYm92ZVxuICAgICAgICAgIGNvdW50ID0gKHNvdXJjZUR1cmF0aW9uICogdGltZXNjYWxlIC0gdGltZSkgLyBkdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnQgPSAoc2VnbWVudFRpbWVsaW5lW25leHRTXS50IC0gdGltZSkgLyBkdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSByZXBlYXQgKyAxO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IHN0YXJ0TnVtYmVyICsgc2VnbWVudHMubGVuZ3RoICsgY291bnQ7XG4gICAgbGV0IG51bWJlciA9IHN0YXJ0TnVtYmVyICsgc2VnbWVudHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKG51bWJlciA8IGVuZCkge1xuICAgICAgc2VnbWVudHMucHVzaCh7XG4gICAgICAgIG51bWJlcixcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uIC8gdGltZXNjYWxlLFxuICAgICAgICB0aW1lLFxuICAgICAgICB0aW1lbGluZVxuICAgICAgfSk7XG4gICAgICB0aW1lICs9IGR1cmF0aW9uO1xuICAgICAgbnVtYmVyKys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzO1xufTtcblxuY29uc3QgaWRlbnRpZmllclBhdHRlcm4gPSAvXFwkKFtBLXpdKikoPzooJTApKFswLTldKylkKT9cXCQvZztcbi8qKlxuICogUmVwbGFjZXMgdGVtcGxhdGUgaWRlbnRpZmllcnMgd2l0aCBjb3JyZXNwb25kaW5nIHZhbHVlcy4gVG8gYmUgdXNlZCBhcyB0aGUgY2FsbGJhY2tcbiAqIGZvciBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAqXG4gKiBAbmFtZSByZXBsYWNlQ2FsbGJhY2tcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoXG4gKiAgICAgICAgRW50aXJlIG1hdGNoIG9mIGlkZW50aWZpZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZGVudGlmaWVyXG4gKiAgICAgICAgTmFtZSBvZiBtYXRjaGVkIGlkZW50aWZpZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRcbiAqICAgICAgICBGb3JtYXQgdGFnIHN0cmluZy4gSXRzIHByZXNlbmNlIGluZGljYXRlcyB0aGF0IHBhZGRpbmcgaXMgZXhwZWN0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB3aWR0aFxuICogICAgICAgIERlc2lyZWQgbGVuZ3RoIG9mIHRoZSByZXBsYWNlZCB2YWx1ZS4gVmFsdWVzIGxlc3MgdGhhbiB0aGlzIHdpZHRoIHNoYWxsIGJlIGxlZnRcbiAqICAgICAgICB6ZXJvIHBhZGRlZFxuICogQHJldHVybiB7c3RyaW5nfVxuICogICAgICAgICBSZXBsYWNlbWVudCBmb3IgdGhlIG1hdGNoZWQgaWRlbnRpZmllclxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgYXMgYSBjYWxsYmFjayBmb3IgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlIHRvIHJlcGxhY2VcbiAqIHRlbXBsYXRlIGlkZW50aWZpZXJzXG4gKlxuICogQHBhcmFtIHtPYmVjdH0gdmFsdWVzXG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgdmFsdWVzIHRoYXQgc2hhbGwgYmUgdXNlZCB0byByZXBsYWNlIGtub3duIGlkZW50aWZpZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLlJlcHJlc2VudGF0aW9uSURcbiAqICAgICAgICBWYWx1ZSBvZiB0aGUgUmVwcmVzZW50YXRpb25AaWQgYXR0cmlidXRlXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLk51bWJlclxuICogICAgICAgIE51bWJlciBvZiB0aGUgY29ycmVzcG9uZGluZyBzZWdtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLkJhbmR3aWR0aFxuICogICAgICAgIFZhbHVlIG9mIHRoZSBSZXByZXNlbnRhdGlvbkBiYW5kd2lkdGggYXR0cmlidXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlcy5UaW1lXG4gKiAgICAgICAgVGltZXN0YW1wIHZhbHVlIG9mIHRoZSBjb3JyZXNwb25kaW5nIHNlZ21lbnRcbiAqIEByZXR1cm4ge3JlcGxhY2VDYWxsYmFja31cbiAqICAgICAgICAgQ2FsbGJhY2sgdG8gYmUgdXNlZCB3aXRoIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSB0byByZXBsYWNlIGlkZW50aWZpZXJzXG4gKi9cblxuY29uc3QgaWRlbnRpZmllclJlcGxhY2VtZW50ID0gdmFsdWVzID0+IChtYXRjaCwgaWRlbnRpZmllciwgZm9ybWF0LCB3aWR0aCkgPT4ge1xuICBpZiAobWF0Y2ggPT09ICckJCcpIHtcbiAgICAvLyBlc2NhcGUgc2VxdWVuY2VcbiAgICByZXR1cm4gJyQnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZXNbaWRlbnRpZmllcl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9XG5cbiAgY29uc3QgdmFsdWUgPSAnJyArIHZhbHVlc1tpZGVudGlmaWVyXTtcblxuICBpZiAoaWRlbnRpZmllciA9PT0gJ1JlcHJlc2VudGF0aW9uSUQnKSB7XG4gICAgLy8gRm9ybWF0IHRhZyBzaGFsbCBub3QgYmUgcHJlc2VudCB3aXRoIFJlcHJlc2VudGF0aW9uSURcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAoIWZvcm1hdCkge1xuICAgIHdpZHRoID0gMTtcbiAgfSBlbHNlIHtcbiAgICB3aWR0aCA9IHBhcnNlSW50KHdpZHRoLCAxMCk7XG4gIH1cblxuICBpZiAodmFsdWUubGVuZ3RoID49IHdpZHRoKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGAke25ldyBBcnJheSh3aWR0aCAtIHZhbHVlLmxlbmd0aCArIDEpLmpvaW4oJzAnKX0ke3ZhbHVlfWA7XG59O1xuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgc2VnbWVudCB1cmwgZnJvbSBhIHRlbXBsYXRlIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqICAgICAgICBUZW1wbGF0ZSBzdHJpbmcgdG8gY29uc3RydWN0IHVybCBmcm9tXG4gKiBAcGFyYW0ge09iZWN0fSB2YWx1ZXNcbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyB2YWx1ZXMgdGhhdCBzaGFsbCBiZSB1c2VkIHRvIHJlcGxhY2Uga25vd24gaWRlbnRpZmllcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuUmVwcmVzZW50YXRpb25JRFxuICogICAgICAgIFZhbHVlIG9mIHRoZSBSZXByZXNlbnRhdGlvbkBpZCBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuTnVtYmVyXG4gKiAgICAgICAgTnVtYmVyIG9mIHRoZSBjb3JyZXNwb25kaW5nIHNlZ21lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZXMuQmFuZHdpZHRoXG4gKiAgICAgICAgVmFsdWUgb2YgdGhlIFJlcHJlc2VudGF0aW9uQGJhbmR3aWR0aCBhdHRyaWJ1dGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVzLlRpbWVcbiAqICAgICAgICBUaW1lc3RhbXAgdmFsdWUgb2YgdGhlIGNvcnJlc3BvbmRpbmcgc2VnbWVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICogICAgICAgICBTZWdtZW50IHVybCB3aXRoIGlkZW50aWZpZXJzIHJlcGxhY2VkXG4gKi9cblxuY29uc3QgY29uc3RydWN0VGVtcGxhdGVVcmwgPSAodXJsLCB2YWx1ZXMpID0+IHVybC5yZXBsYWNlKGlkZW50aWZpZXJQYXR0ZXJuLCBpZGVudGlmaWVyUmVwbGFjZW1lbnQodmFsdWVzKSk7XG4vKipcbiAqIEdlbmVyYXRlcyBhIGxpc3Qgb2Ygb2JqZWN0cyBjb250YWluaW5nIHRpbWluZyBhbmQgZHVyYXRpb24gaW5mb3JtYXRpb24gYWJvdXQgZWFjaFxuICogc2VnbWVudCBuZWVkZWQgdG8gZ2VuZXJhdGUgc2VnbWVudCB1cmlzIGFuZCB0aGUgY29tcGxldGUgc2VnbWVudCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgIE9iamVjdCBjb250YWluaW5nIGFsbCBpbmhlcml0ZWQgYXR0cmlidXRlcyBmcm9tIHBhcmVudCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZVxuICogICAgICAgIG5hbWVzIGFzIGtleXNcbiAqIEBwYXJhbSB7T2JqZWN0W118dW5kZWZpbmVkfSBzZWdtZW50VGltZWxpbmVcbiAqICAgICAgICBMaXN0IG9mIG9iamVjdHMgcmVwcmVzZW50aW5nIHRoZSBhdHRyaWJ1dGVzIG9mIGVhY2ggUyBlbGVtZW50IGNvbnRhaW5lZCB3aXRoaW5cbiAqICAgICAgICB0aGUgU2VnbWVudFRpbWVsaW5lIGVsZW1lbnRcbiAqIEByZXR1cm4ge3tudW1iZXI6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgdGltZTogbnVtYmVyLCB0aW1lbGluZTogbnVtYmVyfVtdfVxuICogICAgICAgICBMaXN0IG9mIE9iamVjdHMgd2l0aCBzZWdtZW50IHRpbWluZyBhbmQgZHVyYXRpb24gaW5mb1xuICovXG5cbmNvbnN0IHBhcnNlVGVtcGxhdGVJbmZvID0gKGF0dHJpYnV0ZXMsIHNlZ21lbnRUaW1lbGluZSkgPT4ge1xuICBpZiAoIWF0dHJpYnV0ZXMuZHVyYXRpb24gJiYgIXNlZ21lbnRUaW1lbGluZSkge1xuICAgIC8vIGlmIG5laXRoZXIgQGR1cmF0aW9uIG9yIFNlZ21lbnRUaW1lbGluZSBhcmUgcHJlc2VudCwgdGhlbiB0aGVyZSBzaGFsbCBiZSBleGFjdGx5XG4gICAgLy8gb25lIG1lZGlhIHNlZ21lbnRcbiAgICByZXR1cm4gW3tcbiAgICAgIG51bWJlcjogYXR0cmlidXRlcy5zdGFydE51bWJlciB8fCAxLFxuICAgICAgZHVyYXRpb246IGF0dHJpYnV0ZXMuc291cmNlRHVyYXRpb24sXG4gICAgICB0aW1lOiAwLFxuICAgICAgdGltZWxpbmU6IGF0dHJpYnV0ZXMucGVyaW9kU3RhcnRcbiAgICB9XTtcbiAgfVxuXG4gIGlmIChhdHRyaWJ1dGVzLmR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnNlQnlEdXJhdGlvbihhdHRyaWJ1dGVzKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUJ5VGltZWxpbmUoYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKTtcbn07XG4vKipcbiAqIEdlbmVyYXRlcyBhIGxpc3Qgb2Ygc2VnbWVudHMgdXNpbmcgaW5mb3JtYXRpb24gcHJvdmlkZWQgYnkgdGhlIFNlZ21lbnRUZW1wbGF0ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyBhbGwgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVcbiAqICAgICAgICBuYW1lcyBhcyBrZXlzXG4gKiBAcGFyYW0ge09iamVjdFtdfHVuZGVmaW5lZH0gc2VnbWVudFRpbWVsaW5lXG4gKiAgICAgICAgTGlzdCBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgYXR0cmlidXRlcyBvZiBlYWNoIFMgZWxlbWVudCBjb250YWluZWQgd2l0aGluXG4gKiAgICAgICAgdGhlIFNlZ21lbnRUaW1lbGluZSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAqICAgICAgICAgTGlzdCBvZiBzZWdtZW50IG9iamVjdHNcbiAqL1xuXG5jb25zdCBzZWdtZW50c0Zyb21UZW1wbGF0ZSA9IChhdHRyaWJ1dGVzLCBzZWdtZW50VGltZWxpbmUpID0+IHtcbiAgY29uc3QgdGVtcGxhdGVWYWx1ZXMgPSB7XG4gICAgUmVwcmVzZW50YXRpb25JRDogYXR0cmlidXRlcy5pZCxcbiAgICBCYW5kd2lkdGg6IGF0dHJpYnV0ZXMuYmFuZHdpZHRoIHx8IDBcbiAgfTtcbiAgY29uc3Qge1xuICAgIGluaXRpYWxpemF0aW9uID0ge1xuICAgICAgc291cmNlVVJMOiAnJyxcbiAgICAgIHJhbmdlOiAnJ1xuICAgIH1cbiAgfSA9IGF0dHJpYnV0ZXM7XG4gIGNvbnN0IG1hcFNlZ21lbnQgPSB1cmxUeXBlVG9TZWdtZW50KHtcbiAgICBiYXNlVXJsOiBhdHRyaWJ1dGVzLmJhc2VVcmwsXG4gICAgc291cmNlOiBjb25zdHJ1Y3RUZW1wbGF0ZVVybChpbml0aWFsaXphdGlvbi5zb3VyY2VVUkwsIHRlbXBsYXRlVmFsdWVzKSxcbiAgICByYW5nZTogaW5pdGlhbGl6YXRpb24ucmFuZ2VcbiAgfSk7XG4gIGNvbnN0IHNlZ21lbnRzID0gcGFyc2VUZW1wbGF0ZUluZm8oYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKTtcbiAgcmV0dXJuIHNlZ21lbnRzLm1hcChzZWdtZW50ID0+IHtcbiAgICB0ZW1wbGF0ZVZhbHVlcy5OdW1iZXIgPSBzZWdtZW50Lm51bWJlcjtcbiAgICB0ZW1wbGF0ZVZhbHVlcy5UaW1lID0gc2VnbWVudC50aW1lO1xuICAgIGNvbnN0IHVyaSA9IGNvbnN0cnVjdFRlbXBsYXRlVXJsKGF0dHJpYnV0ZXMubWVkaWEgfHwgJycsIHRlbXBsYXRlVmFsdWVzKTsgLy8gU2VlIERBU0ggc3BlYyBzZWN0aW9uIDUuMy45LjIuMlxuICAgIC8vIC0gaWYgdGltZXNjYWxlIGlzbid0IHByZXNlbnQgb24gYW55IGxldmVsLCBkZWZhdWx0IHRvIDEuXG5cbiAgICBjb25zdCB0aW1lc2NhbGUgPSBhdHRyaWJ1dGVzLnRpbWVzY2FsZSB8fCAxOyAvLyAtIGlmIHByZXNlbnRhdGlvblRpbWVPZmZzZXQgaXNuJ3QgcHJlc2VudCBvbiBhbnkgbGV2ZWwsIGRlZmF1bHQgdG8gMFxuXG4gICAgY29uc3QgcHJlc2VudGF0aW9uVGltZU9mZnNldCA9IGF0dHJpYnV0ZXMucHJlc2VudGF0aW9uVGltZU9mZnNldCB8fCAwO1xuICAgIGNvbnN0IHByZXNlbnRhdGlvblRpbWUgPSAvLyBFdmVuIGlmIHRoZSBAdCBhdHRyaWJ1dGUgaXMgbm90IHNwZWNpZmllZCBmb3IgdGhlIHNlZ21lbnQsIHNlZ21lbnQudGltZSBpc1xuICAgIC8vIGNhbGN1bGF0ZWQgaW4gbXBkLXBhcnNlciBwcmlvciB0byB0aGlzLCBzbyBpdCdzIGFzc3VtZWQgdG8gYmUgYXZhaWxhYmxlLlxuICAgIGF0dHJpYnV0ZXMucGVyaW9kU3RhcnQgKyAoc2VnbWVudC50aW1lIC0gcHJlc2VudGF0aW9uVGltZU9mZnNldCkgLyB0aW1lc2NhbGU7XG4gICAgY29uc3QgbWFwID0ge1xuICAgICAgdXJpLFxuICAgICAgdGltZWxpbmU6IHNlZ21lbnQudGltZWxpbmUsXG4gICAgICBkdXJhdGlvbjogc2VnbWVudC5kdXJhdGlvbixcbiAgICAgIHJlc29sdmVkVXJpOiByZXNvbHZlVXJsKGF0dHJpYnV0ZXMuYmFzZVVybCB8fCAnJywgdXJpKSxcbiAgICAgIG1hcDogbWFwU2VnbWVudCxcbiAgICAgIG51bWJlcjogc2VnbWVudC5udW1iZXIsXG4gICAgICBwcmVzZW50YXRpb25UaW1lXG4gICAgfTtcbiAgICByZXR1cm4gbWFwO1xuICB9KTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSA8U2VnbWVudFVybD4gKG9mIHR5cGUgVVJMVHlwZSBmcm9tIHRoZSBEQVNIIHNwZWMgNS4zLjkuMiBUYWJsZSAxNClcbiAqIHRvIGFuIG9iamVjdCB0aGF0IG1hdGNoZXMgdGhlIG91dHB1dCBvZiBhIHNlZ21lbnQgaW4gdmlkZW9qcy9tcGQtcGFyc2VyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXNcbiAqICAgT2JqZWN0IGNvbnRhaW5pbmcgYWxsIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IGVsZW1lbnRzIHdpdGggYXR0cmlidXRlXG4gKiAgIG5hbWVzIGFzIGtleXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZWdtZW50VXJsXG4gKiAgIDxTZWdtZW50VVJMPiBub2RlIHRvIHRyYW5zbGF0ZSBpbnRvIGEgc2VnbWVudCBvYmplY3RcbiAqIEByZXR1cm4ge09iamVjdH0gdHJhbnNsYXRlZCBzZWdtZW50IG9iamVjdFxuICovXG5cbmNvbnN0IFNlZ21lbnRVUkxUb1NlZ21lbnRPYmplY3QgPSAoYXR0cmlidXRlcywgc2VnbWVudFVybCkgPT4ge1xuICBjb25zdCB7XG4gICAgYmFzZVVybCxcbiAgICBpbml0aWFsaXphdGlvbiA9IHt9XG4gIH0gPSBhdHRyaWJ1dGVzO1xuICBjb25zdCBpbml0U2VnbWVudCA9IHVybFR5cGVUb1NlZ21lbnQoe1xuICAgIGJhc2VVcmwsXG4gICAgc291cmNlOiBpbml0aWFsaXphdGlvbi5zb3VyY2VVUkwsXG4gICAgcmFuZ2U6IGluaXRpYWxpemF0aW9uLnJhbmdlXG4gIH0pO1xuICBjb25zdCBzZWdtZW50ID0gdXJsVHlwZVRvU2VnbWVudCh7XG4gICAgYmFzZVVybCxcbiAgICBzb3VyY2U6IHNlZ21lbnRVcmwubWVkaWEsXG4gICAgcmFuZ2U6IHNlZ21lbnRVcmwubWVkaWFSYW5nZVxuICB9KTtcbiAgc2VnbWVudC5tYXAgPSBpbml0U2VnbWVudDtcbiAgcmV0dXJuIHNlZ21lbnQ7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHNlZ21lbnRzIHVzaW5nIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBTZWdtZW50TGlzdCBlbGVtZW50XG4gKiBTZWdtZW50TGlzdCAoREFTSCBTUEVDIFNlY3Rpb24gNS4zLjkuMy4yKSBjb250YWlucyBhIHNldCBvZiA8U2VnbWVudFVSTD4gbm9kZXMuICBFYWNoXG4gKiBub2RlIHNob3VsZCBiZSB0cmFuc2xhdGVkIGludG8gc2VnbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlc1xuICogICBPYmplY3QgY29udGFpbmluZyBhbGwgaW5oZXJpdGVkIGF0dHJpYnV0ZXMgZnJvbSBwYXJlbnQgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGVcbiAqICAgbmFtZXMgYXMga2V5c1xuICogQHBhcmFtIHtPYmplY3RbXXx1bmRlZmluZWR9IHNlZ21lbnRUaW1lbGluZVxuICogICAgICAgIExpc3Qgb2Ygb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIGF0dHJpYnV0ZXMgb2YgZWFjaCBTIGVsZW1lbnQgY29udGFpbmVkIHdpdGhpblxuICogICAgICAgIHRoZSBTZWdtZW50VGltZWxpbmUgZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0LjxBcnJheT59IGxpc3Qgb2Ygc2VnbWVudHNcbiAqL1xuXG5cbmNvbnN0IHNlZ21lbnRzRnJvbUxpc3QgPSAoYXR0cmlidXRlcywgc2VnbWVudFRpbWVsaW5lKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkdXJhdGlvbixcbiAgICBzZWdtZW50VXJscyA9IFtdLFxuICAgIHBlcmlvZFN0YXJ0XG4gIH0gPSBhdHRyaWJ1dGVzOyAvLyBQZXIgc3BlYyAoNS4zLjkuMi4xKSBubyB3YXkgdG8gZGV0ZXJtaW5lIHNlZ21lbnQgZHVyYXRpb24gT1JcbiAgLy8gaWYgYm90aCBTZWdtZW50VGltZWxpbmUgYW5kIEBkdXJhdGlvbiBhcmUgZGVmaW5lZCwgaXQgaXMgb3V0c2lkZSBvZiBzcGVjLlxuXG4gIGlmICghZHVyYXRpb24gJiYgIXNlZ21lbnRUaW1lbGluZSB8fCBkdXJhdGlvbiAmJiBzZWdtZW50VGltZWxpbmUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlNFR01FTlRfVElNRV9VTlNQRUNJRklFRCk7XG4gIH1cblxuICBjb25zdCBzZWdtZW50VXJsTWFwID0gc2VnbWVudFVybHMubWFwKHNlZ21lbnRVcmxPYmplY3QgPT4gU2VnbWVudFVSTFRvU2VnbWVudE9iamVjdChhdHRyaWJ1dGVzLCBzZWdtZW50VXJsT2JqZWN0KSk7XG4gIGxldCBzZWdtZW50VGltZUluZm87XG5cbiAgaWYgKGR1cmF0aW9uKSB7XG4gICAgc2VnbWVudFRpbWVJbmZvID0gcGFyc2VCeUR1cmF0aW9uKGF0dHJpYnV0ZXMpO1xuICB9XG5cbiAgaWYgKHNlZ21lbnRUaW1lbGluZSkge1xuICAgIHNlZ21lbnRUaW1lSW5mbyA9IHBhcnNlQnlUaW1lbGluZShhdHRyaWJ1dGVzLCBzZWdtZW50VGltZWxpbmUpO1xuICB9XG5cbiAgY29uc3Qgc2VnbWVudHMgPSBzZWdtZW50VGltZUluZm8ubWFwKChzZWdtZW50VGltZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoc2VnbWVudFVybE1hcFtpbmRleF0pIHtcbiAgICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50VXJsTWFwW2luZGV4XTsgLy8gU2VlIERBU0ggc3BlYyBzZWN0aW9uIDUuMy45LjIuMlxuICAgICAgLy8gLSBpZiB0aW1lc2NhbGUgaXNuJ3QgcHJlc2VudCBvbiBhbnkgbGV2ZWwsIGRlZmF1bHQgdG8gMS5cblxuICAgICAgY29uc3QgdGltZXNjYWxlID0gYXR0cmlidXRlcy50aW1lc2NhbGUgfHwgMTsgLy8gLSBpZiBwcmVzZW50YXRpb25UaW1lT2Zmc2V0IGlzbid0IHByZXNlbnQgb24gYW55IGxldmVsLCBkZWZhdWx0IHRvIDBcblxuICAgICAgY29uc3QgcHJlc2VudGF0aW9uVGltZU9mZnNldCA9IGF0dHJpYnV0ZXMucHJlc2VudGF0aW9uVGltZU9mZnNldCB8fCAwO1xuICAgICAgc2VnbWVudC50aW1lbGluZSA9IHNlZ21lbnRUaW1lLnRpbWVsaW5lO1xuICAgICAgc2VnbWVudC5kdXJhdGlvbiA9IHNlZ21lbnRUaW1lLmR1cmF0aW9uO1xuICAgICAgc2VnbWVudC5udW1iZXIgPSBzZWdtZW50VGltZS5udW1iZXI7XG4gICAgICBzZWdtZW50LnByZXNlbnRhdGlvblRpbWUgPSBwZXJpb2RTdGFydCArIChzZWdtZW50VGltZS50aW1lIC0gcHJlc2VudGF0aW9uVGltZU9mZnNldCkgLyB0aW1lc2NhbGU7XG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9IC8vIFNpbmNlIHdlJ3JlIG1hcHBpbmcgd2Ugc2hvdWxkIGdldCByaWQgb2YgYW55IGJsYW5rIHNlZ21lbnRzIChpbiBjYXNlXG4gICAgLy8gdGhlIGdpdmVuIFNlZ21lbnRUaW1lbGluZSBpcyBoYW5kbGluZyBmb3IgbW9yZSBlbGVtZW50cyB0aGFuIHdlIGhhdmVcbiAgICAvLyBTZWdtZW50VVJMcyBmb3IpLlxuXG4gIH0pLmZpbHRlcihzZWdtZW50ID0+IHNlZ21lbnQpO1xuICByZXR1cm4gc2VnbWVudHM7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVNlZ21lbnRzID0gKHtcbiAgYXR0cmlidXRlcyxcbiAgc2VnbWVudEluZm9cbn0pID0+IHtcbiAgbGV0IHNlZ21lbnRBdHRyaWJ1dGVzO1xuICBsZXQgc2VnbWVudHNGbjtcblxuICBpZiAoc2VnbWVudEluZm8udGVtcGxhdGUpIHtcbiAgICBzZWdtZW50c0ZuID0gc2VnbWVudHNGcm9tVGVtcGxhdGU7XG4gICAgc2VnbWVudEF0dHJpYnV0ZXMgPSBtZXJnZShhdHRyaWJ1dGVzLCBzZWdtZW50SW5mby50ZW1wbGF0ZSk7XG4gIH0gZWxzZSBpZiAoc2VnbWVudEluZm8uYmFzZSkge1xuICAgIHNlZ21lbnRzRm4gPSBzZWdtZW50c0Zyb21CYXNlO1xuICAgIHNlZ21lbnRBdHRyaWJ1dGVzID0gbWVyZ2UoYXR0cmlidXRlcywgc2VnbWVudEluZm8uYmFzZSk7XG4gIH0gZWxzZSBpZiAoc2VnbWVudEluZm8ubGlzdCkge1xuICAgIHNlZ21lbnRzRm4gPSBzZWdtZW50c0Zyb21MaXN0O1xuICAgIHNlZ21lbnRBdHRyaWJ1dGVzID0gbWVyZ2UoYXR0cmlidXRlcywgc2VnbWVudEluZm8ubGlzdCk7XG4gIH1cblxuICBjb25zdCBzZWdtZW50c0luZm8gPSB7XG4gICAgYXR0cmlidXRlc1xuICB9O1xuXG4gIGlmICghc2VnbWVudHNGbikge1xuICAgIHJldHVybiBzZWdtZW50c0luZm87XG4gIH1cblxuICBjb25zdCBzZWdtZW50cyA9IHNlZ21lbnRzRm4oc2VnbWVudEF0dHJpYnV0ZXMsIHNlZ21lbnRJbmZvLnNlZ21lbnRUaW1lbGluZSk7IC8vIFRoZSBAZHVyYXRpb24gYXR0cmlidXRlIHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbiB0aGUgcGxheWxpc3QncyB0YXJnZXREdXJhdGlvbiB3aGljaFxuICAvLyBtdXN0IGJlIGluIHNlY29uZHMuIFNpbmNlIHdlJ3ZlIGdlbmVyYXRlZCB0aGUgc2VnbWVudCBsaXN0LCB3ZSBubyBsb25nZXIgbmVlZFxuICAvLyBAZHVyYXRpb24gdG8gYmUgaW4gQHRpbWVzY2FsZSB1bml0cywgc28gd2UgY2FuIGNvbnZlcnQgaXQgaGVyZS5cblxuICBpZiAoc2VnbWVudEF0dHJpYnV0ZXMuZHVyYXRpb24pIHtcbiAgICBjb25zdCB7XG4gICAgICBkdXJhdGlvbixcbiAgICAgIHRpbWVzY2FsZSA9IDFcbiAgICB9ID0gc2VnbWVudEF0dHJpYnV0ZXM7XG4gICAgc2VnbWVudEF0dHJpYnV0ZXMuZHVyYXRpb24gPSBkdXJhdGlvbiAvIHRpbWVzY2FsZTtcbiAgfSBlbHNlIGlmIChzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAvLyBpZiB0aGVyZSBpcyBubyBAZHVyYXRpb24gYXR0cmlidXRlLCB1c2UgdGhlIGxhcmdlc3Qgc2VnbWVudCBkdXJhdGlvbiBhc1xuICAgIC8vIGFzIHRhcmdldCBkdXJhdGlvblxuICAgIHNlZ21lbnRBdHRyaWJ1dGVzLmR1cmF0aW9uID0gc2VnbWVudHMucmVkdWNlKChtYXgsIHNlZ21lbnQpID0+IHtcbiAgICAgIHJldHVybiBNYXRoLm1heChtYXgsIE1hdGguY2VpbChzZWdtZW50LmR1cmF0aW9uKSk7XG4gICAgfSwgMCk7XG4gIH0gZWxzZSB7XG4gICAgc2VnbWVudEF0dHJpYnV0ZXMuZHVyYXRpb24gPSAwO1xuICB9XG5cbiAgc2VnbWVudHNJbmZvLmF0dHJpYnV0ZXMgPSBzZWdtZW50QXR0cmlidXRlcztcbiAgc2VnbWVudHNJbmZvLnNlZ21lbnRzID0gc2VnbWVudHM7IC8vIFRoaXMgaXMgYSBzaWR4IGJveCB3aXRob3V0IGFjdHVhbCBzZWdtZW50IGluZm9ybWF0aW9uXG5cbiAgaWYgKHNlZ21lbnRJbmZvLmJhc2UgJiYgc2VnbWVudEF0dHJpYnV0ZXMuaW5kZXhSYW5nZSkge1xuICAgIHNlZ21lbnRzSW5mby5zaWR4ID0gc2VnbWVudHNbMF07XG4gICAgc2VnbWVudHNJbmZvLnNlZ21lbnRzID0gW107XG4gIH1cblxuICByZXR1cm4gc2VnbWVudHNJbmZvO1xufTtcbmNvbnN0IHRvUGxheWxpc3RzID0gcmVwcmVzZW50YXRpb25zID0+IHJlcHJlc2VudGF0aW9ucy5tYXAoZ2VuZXJhdGVTZWdtZW50cyk7XG5cbmNvbnN0IGZpbmRDaGlsZHJlbiA9IChlbGVtZW50LCBuYW1lKSA9PiBmcm9tKGVsZW1lbnQuY2hpbGROb2RlcykuZmlsdGVyKCh7XG4gIHRhZ05hbWVcbn0pID0+IHRhZ05hbWUgPT09IG5hbWUpO1xuY29uc3QgZ2V0Q29udGVudCA9IGVsZW1lbnQgPT4gZWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIHByb3ZpZGVkIHN0cmluZyB0aGF0IG1heSBjb250YWluIGEgZGl2aXNpb24gb3BlcmF0aW9uIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIHRoZSBwcm92aWRlZCBzdHJpbmcgdmFsdWVcbiAqXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBwYXJzZWQgc3RyaW5nIHZhbHVlXG4gKi9cbmNvbnN0IHBhcnNlRGl2aXNpb25WYWx1ZSA9IHZhbHVlID0+IHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUuc3BsaXQoJy8nKS5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHByZXYgLyBjdXJyZW50KSk7XG59O1xuXG5jb25zdCBwYXJzZUR1cmF0aW9uID0gc3RyID0+IHtcbiAgY29uc3QgU0VDT05EU19JTl9ZRUFSID0gMzY1ICogMjQgKiA2MCAqIDYwO1xuICBjb25zdCBTRUNPTkRTX0lOX01PTlRIID0gMzAgKiAyNCAqIDYwICogNjA7XG4gIGNvbnN0IFNFQ09ORFNfSU5fREFZID0gMjQgKiA2MCAqIDYwO1xuICBjb25zdCBTRUNPTkRTX0lOX0hPVVIgPSA2MCAqIDYwO1xuICBjb25zdCBTRUNPTkRTX0lOX01JTiA9IDYwOyAvLyBQMTBZMTBNMTBEVDEwSDEwTTEwLjFTXG5cbiAgY29uc3QgZHVyYXRpb25SZWdleCA9IC9QKD86KFxcZCopWSk/KD86KFxcZCopTSk/KD86KFxcZCopRCk/KD86VCg/OihcXGQqKUgpPyg/OihcXGQqKU0pPyg/OihbXFxkLl0qKVMpPyk/LztcbiAgY29uc3QgbWF0Y2ggPSBkdXJhdGlvblJlZ2V4LmV4ZWMoc3RyKTtcblxuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb25zdCBbeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmRdID0gbWF0Y2guc2xpY2UoMSk7XG4gIHJldHVybiBwYXJzZUZsb2F0KHllYXIgfHwgMCkgKiBTRUNPTkRTX0lOX1lFQVIgKyBwYXJzZUZsb2F0KG1vbnRoIHx8IDApICogU0VDT05EU19JTl9NT05USCArIHBhcnNlRmxvYXQoZGF5IHx8IDApICogU0VDT05EU19JTl9EQVkgKyBwYXJzZUZsb2F0KGhvdXIgfHwgMCkgKiBTRUNPTkRTX0lOX0hPVVIgKyBwYXJzZUZsb2F0KG1pbnV0ZSB8fCAwKSAqIFNFQ09ORFNfSU5fTUlOICsgcGFyc2VGbG9hdChzZWNvbmQgfHwgMCk7XG59O1xuY29uc3QgcGFyc2VEYXRlID0gc3RyID0+IHtcbiAgLy8gRGF0ZSBmb3JtYXQgd2l0aG91dCB0aW1lem9uZSBhY2NvcmRpbmcgdG8gSVNPIDg2MDFcbiAgLy8gWVlZLU1NLUREVGhoOm1tOnNzLnNzc3Nzc1xuICBjb25zdCBkYXRlUmVnZXggPSAvXlxcZCstXFxkKy1cXGQrVFxcZCs6XFxkKzpcXGQrKFxcLlxcZCspPyQvOyAvLyBJZiB0aGUgZGF0ZSBzdHJpbmcgZG9lcyBub3Qgc3BlY2lmaXkgYSB0aW1lem9uZSwgd2UgbXVzdCBzcGVjaWZpeSBVVEMuIFRoaXMgaXNcbiAgLy8gZXhwcmVzc2VkIGJ5IGVuZGluZyB3aXRoICdaJ1xuXG4gIGlmIChkYXRlUmVnZXgudGVzdChzdHIpKSB7XG4gICAgc3RyICs9ICdaJztcbiAgfVxuXG4gIHJldHVybiBEYXRlLnBhcnNlKHN0cik7XG59O1xuXG5jb25zdCBwYXJzZXJzID0ge1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBkdXJhdGlvbiBvZiB0aGUgZW50aXJlIE1lZGlhIFByZXNlbnRhdGlvbi4gRm9ybWF0IGlzIGEgZHVyYXRpb24gc3RyaW5nXG4gICAqIGFzIHNwZWNpZmllZCBpbiBJU08gODYwMVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIGR1cmF0aW9uIGluIHNlY29uZHNcbiAgICovXG4gIG1lZGlhUHJlc2VudGF0aW9uRHVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VEdXJhdGlvbih2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgU2VnbWVudCBhdmFpbGFiaWxpdHkgc3RhcnQgdGltZSBmb3IgYWxsIFNlZ21lbnRzIHJlZmVycmVkIHRvIGluIHRoaXNcbiAgICogTVBELiBGb3IgYSBkeW5hbWljIG1hbmlmZXN0LCBpdCBzcGVjaWZpZXMgdGhlIGFuY2hvciBmb3IgdGhlIGVhcmxpZXN0IGF2YWlsYWJpbGl0eVxuICAgKiB0aW1lLiBGb3JtYXQgaXMgYSBkYXRlIHN0cmluZyBhcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDFcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBkYXRlIGFzIHNlY29uZHMgZnJvbSB1bml4IGVwb2NoXG4gICAqL1xuICBhdmFpbGFiaWxpdHlTdGFydFRpbWUodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VEYXRlKHZhbHVlKSAvIDEwMDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgc21hbGxlc3QgcGVyaW9kIGJldHdlZW4gcG90ZW50aWFsIGNoYW5nZXMgdG8gdGhlIE1QRC4gRm9ybWF0IGlzIGFcbiAgICogZHVyYXRpb24gc3RyaW5nIGFzIHNwZWNpZmllZCBpbiBJU08gODYwMVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIGR1cmF0aW9uIGluIHNlY29uZHNcbiAgICovXG4gIG1pbmltdW1VcGRhdGVQZXJpb2QodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VEdXJhdGlvbih2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgc3VnZ2VzdGVkIHByZXNlbnRhdGlvbiBkZWxheS4gRm9ybWF0IGlzIGFcbiAgICogZHVyYXRpb24gc3RyaW5nIGFzIHNwZWNpZmllZCBpbiBJU08gODYwMVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIGR1cmF0aW9uIGluIHNlY29uZHNcbiAgICovXG4gIHN1Z2dlc3RlZFByZXNlbnRhdGlvbkRlbGF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBzcGVjaWZpY2VzIHRoZSB0eXBlIG9mIG1wZC4gQ2FuIGJlIGVpdGhlciBcInN0YXRpY1wiIG9yIFwiZHluYW1pY1wiXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogICAgICAgICBUaGUgdHlwZSBhcyBhIHN0cmluZ1xuICAgKi9cbiAgdHlwZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBkdXJhdGlvbiBvZiB0aGUgc21hbGxlc3QgdGltZSBzaGlmdGluZyBidWZmZXIgZm9yIGFueSBSZXByZXNlbnRhdGlvblxuICAgKiBpbiB0aGUgTVBELiBGb3JtYXQgaXMgYSBkdXJhdGlvbiBzdHJpbmcgYXMgc3BlY2lmaWVkIGluIElTTyA4NjAxXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKi9cbiAgdGltZVNoaWZ0QnVmZmVyRGVwdGgodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VEdXJhdGlvbih2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgUGVyaW9kU3RhcnQgdGltZSBvZiB0aGUgUGVyaW9kIHJlbGF0aXZlIHRvIHRoZSBhdmFpbGFiaWxpdHlTdGFydHRpbWUuXG4gICAqIEZvcm1hdCBpcyBhIGR1cmF0aW9uIHN0cmluZyBhcyBzcGVjaWZpZWQgaW4gSVNPIDg2MDFcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBkdXJhdGlvbiBpbiBzZWNvbmRzXG4gICAqL1xuICBzdGFydCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUR1cmF0aW9uKHZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSB3aWR0aCBvZiB0aGUgdmlzdWFsIHByZXNlbnRhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCB3aWR0aFxuICAgKi9cbiAgd2lkdGgodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBoZWlnaHQgb2YgdGhlIHZpc3VhbCBwcmVzZW50YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgaGVpZ2h0XG4gICAqL1xuICBoZWlnaHQodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBiaXRyYXRlIG9mIHRoZSByZXByZXNlbnRhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBiYW5kd2lkdGhcbiAgICovXG4gIGJhbmR3aWR0aCh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIGZyYW1lIHJhdGUgb2YgdGhlIHJlcHJlc2VudGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIGZyYW1lIHJhdGVcbiAgICovXG4gIGZyYW1lUmF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZURpdmlzaW9uVmFsdWUodmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiB0aGUgZmlyc3QgTWVkaWEgU2VnbWVudCBpbiB0aGlzIFJlcHJlc2VudGF0aW9uIGluIHRoZSBQZXJpb2RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgbnVtYmVyXG4gICAqL1xuICBzdGFydE51bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHRpbWVzY2FsZSBpbiB1bml0cyBwZXIgc2Vjb25kc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCB0aW1lc2NhbGVcbiAgICovXG4gIHRpbWVzY2FsZSh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHByZXNlbnRhdGlvblRpbWVPZmZzZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBwcmVzZW50YXRpb25UaW1lT2Zmc2V0XG4gICAqL1xuICBwcmVzZW50YXRpb25UaW1lT2Zmc2V0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgY29uc3RhbnQgYXBwcm94aW1hdGUgU2VnbWVudCBkdXJhdGlvblxuICAgKiBOT1RFOiBUaGUgPFBlcmlvZD4gZWxlbWVudCBhbHNvIGNvbnRhaW5zIGFuIEBkdXJhdGlvbiBhdHRyaWJ1dGUuIFRoaXMgZHVyYXRpb25cbiAgICogICAgICAgc3BlY2lmaWVzIHRoZSBkdXJhdGlvbiBvZiB0aGUgUGVyaW9kLiBUaGlzIGF0dHJpYnV0ZSBpcyBjdXJyZW50bHkgbm90XG4gICAqICAgICAgIHN1cHBvcnRlZCBieSB0aGUgcmVzdCBvZiB0aGUgcGFyc2VyLCBob3dldmVyIHdlIHN0aWxsIGNoZWNrIGZvciBpdCB0byBwcmV2ZW50XG4gICAqICAgICAgIGVycm9ycy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqICAgICAgICB2YWx1ZSBvZiBhdHRyaWJ1dGUgYXMgYSBzdHJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKiAgICAgICAgIFRoZSBwYXJzZWQgZHVyYXRpb25cbiAgICovXG4gIGR1cmF0aW9uKHZhbHVlKSB7XG4gICAgY29uc3QgcGFyc2VkVmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXG4gICAgaWYgKGlzTmFOKHBhcnNlZFZhbHVlKSkge1xuICAgICAgcmV0dXJuIHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWRWYWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBTZWdtZW50IGR1cmF0aW9uLCBpbiB1bml0cyBvZiB0aGUgdmFsdWUgb2YgdGhlIEB0aW1lc2NhbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIGR1cmF0aW9uXG4gICAqL1xuICBkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgTVBEIHN0YXJ0IHRpbWUsIGluIEB0aW1lc2NhbGUgdW5pdHMsIHRoZSBmaXJzdCBTZWdtZW50IGluIHRoZSBzZXJpZXNcbiAgICogc3RhcnRzIHJlbGF0aXZlIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIFBlcmlvZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogICAgICAgIHZhbHVlIG9mIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCB0aW1lXG4gICAqL1xuICB0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgcmVwZWF0IGNvdW50IG9mIHRoZSBudW1iZXIgb2YgZm9sbG93aW5nIGNvbnRpZ3VvdXMgU2VnbWVudHMgd2l0aCB0aGVcbiAgICogc2FtZSBkdXJhdGlvbiBleHByZXNzZWQgYnkgdGhlIHZhbHVlIG9mIEBkXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICogICAgICAgICBUaGUgcGFyc2VkIG51bWJlclxuICAgKi9cbiAgcih2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHByZXNlbnRhdGlvblRpbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBhcyBhIHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqICAgICAgICAgVGhlIHBhcnNlZCBwcmVzZW50YXRpb25UaW1lXG4gICAqL1xuICBwcmVzZW50YXRpb25UaW1lKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgcGFyc2VyIGZvciBhbGwgb3RoZXIgYXR0cmlidXRlcy4gQWN0cyBhcyBhIG5vLW9wIGFuZCBqdXN0IHJldHVybnMgdGhlIHZhbHVlXG4gICAqIGFzIGEgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiAgICAgICAgdmFsdWUgb2YgYXR0cmlidXRlIGFzIGEgc3RyaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICogICAgICAgICBVbnBhcnNlZCB2YWx1ZVxuICAgKi9cbiAgREVGQVVMVCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59O1xuLyoqXG4gKiBHZXRzIGFsbCB0aGUgYXR0cmlidXRlcyBhbmQgdmFsdWVzIG9mIHRoZSBwcm92aWRlZCBub2RlLCBwYXJzZXMgYXR0cmlidXRlcyB3aXRoIGtub3duXG4gKiB0eXBlcywgYW5kIHJldHVybnMgYW4gb2JqZWN0IHdpdGggYXR0cmlidXRlIG5hbWVzIG1hcHBlZCB0byB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBlbFxuICogICAgICAgIFRoZSBub2RlIHRvIHBhcnNlIGF0dHJpYnV0ZXMgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fVxuICogICAgICAgICBPYmplY3Qgd2l0aCBhbGwgYXR0cmlidXRlcyBvZiBlbCBwYXJzZWRcbiAqL1xuXG5jb25zdCBwYXJzZUF0dHJpYnV0ZXMgPSBlbCA9PiB7XG4gIGlmICghKGVsICYmIGVsLmF0dHJpYnV0ZXMpKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcmV0dXJuIGZyb20oZWwuYXR0cmlidXRlcykucmVkdWNlKChhLCBlKSA9PiB7XG4gICAgY29uc3QgcGFyc2VGbiA9IHBhcnNlcnNbZS5uYW1lXSB8fCBwYXJzZXJzLkRFRkFVTFQ7XG4gICAgYVtlLm5hbWVdID0gcGFyc2VGbihlLnZhbHVlKTtcbiAgICByZXR1cm4gYTtcbiAgfSwge30pO1xufTtcblxuY29uc3Qga2V5U3lzdGVtc01hcCA9IHtcbiAgJ3Vybjp1dWlkOjEwNzdlZmVjLWMwYjItNGQwMi1hY2UzLTNjMWU1MmUyZmI0Yic6ICdvcmcudzMuY2xlYXJrZXknLFxuICAndXJuOnV1aWQ6ZWRlZjhiYTktNzlkNi00YWNlLWEzYzgtMjdkY2Q1MWQyMWVkJzogJ2NvbS53aWRldmluZS5hbHBoYScsXG4gICd1cm46dXVpZDo5YTA0ZjA3OS05ODQwLTQyODYtYWI5Mi1lNjViZTA4ODVmOTUnOiAnY29tLm1pY3Jvc29mdC5wbGF5cmVhZHknLFxuICAndXJuOnV1aWQ6ZjIzOWU3NjktZWZhMy00ODUwLTljMTYtYTkwM2M2OTMyZWZiJzogJ2NvbS5hZG9iZS5wcmltZXRpbWUnXG59O1xuLyoqXG4gKiBCdWlsZHMgYSBsaXN0IG9mIHVybHMgdGhhdCBpcyB0aGUgcHJvZHVjdCBvZiB0aGUgcmVmZXJlbmNlIHVybHMgYW5kIEJhc2VVUkwgdmFsdWVzXG4gKlxuICogQHBhcmFtIHtPYmplY3RbXX0gcmVmZXJlbmNlc1xuICogICAgICAgIExpc3Qgb2Ygb2JqZWN0cyBjb250YWluaW5nIHRoZSByZWZlcmVuY2UgVVJMIGFzIHdlbGwgYXMgaXRzIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7Tm9kZVtdfSBiYXNlVXJsRWxlbWVudHNcbiAqICAgICAgICBMaXN0IG9mIEJhc2VVUkwgbm9kZXMgZnJvbSB0aGUgbXBkXG4gKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAqICAgICAgICAgTGlzdCBvZiBvYmplY3RzIHdpdGggcmVzb2x2ZWQgdXJscyBhbmQgYXR0cmlidXRlc1xuICovXG5cbmNvbnN0IGJ1aWxkQmFzZVVybHMgPSAocmVmZXJlbmNlcywgYmFzZVVybEVsZW1lbnRzKSA9PiB7XG4gIGlmICghYmFzZVVybEVsZW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgcmV0dXJuIGZsYXR0ZW4ocmVmZXJlbmNlcy5tYXAoZnVuY3Rpb24gKHJlZmVyZW5jZSkge1xuICAgIHJldHVybiBiYXNlVXJsRWxlbWVudHMubWFwKGZ1bmN0aW9uIChiYXNlVXJsRWxlbWVudCkge1xuICAgICAgY29uc3QgaW5pdGlhbEJhc2VVcmwgPSBnZXRDb250ZW50KGJhc2VVcmxFbGVtZW50KTtcbiAgICAgIGNvbnN0IHJlc29sdmVkQmFzZVVybCA9IHJlc29sdmVVcmwocmVmZXJlbmNlLmJhc2VVcmwsIGluaXRpYWxCYXNlVXJsKTtcbiAgICAgIGNvbnN0IGZpbmFsQmFzZVVybCA9IG1lcmdlKHBhcnNlQXR0cmlidXRlcyhiYXNlVXJsRWxlbWVudCksIHtcbiAgICAgICAgYmFzZVVybDogcmVzb2x2ZWRCYXNlVXJsXG4gICAgICB9KTsgLy8gSWYgdGhlIFVSTCBpcyByZXNvbHZlZCwgd2Ugd2FudCB0byBnZXQgdGhlIHNlcnZpY2VMb2NhdGlvbiBmcm9tIHRoZSByZWZlcmVuY2VcbiAgICAgIC8vIGFzc3VtaW5nIHRoZXJlIGlzIG5vIHNlcnZpY2VMb2NhdGlvbiBvbiB0aGUgaW5pdGlhbEJhc2VVcmxcblxuICAgICAgaWYgKHJlc29sdmVkQmFzZVVybCAhPT0gaW5pdGlhbEJhc2VVcmwgJiYgIWZpbmFsQmFzZVVybC5zZXJ2aWNlTG9jYXRpb24gJiYgcmVmZXJlbmNlLnNlcnZpY2VMb2NhdGlvbikge1xuICAgICAgICBmaW5hbEJhc2VVcmwuc2VydmljZUxvY2F0aW9uID0gcmVmZXJlbmNlLnNlcnZpY2VMb2NhdGlvbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbmFsQmFzZVVybDtcbiAgICB9KTtcbiAgfSkpO1xufTtcbi8qKlxuICogQ29udGFpbnMgYWxsIFNlZ21lbnQgaW5mb3JtYXRpb24gZm9yIGl0cyBjb250YWluaW5nIEFkYXB0YXRpb25TZXRcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTZWdtZW50SW5mb3JtYXRpb25cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fHVuZGVmaW5lZH0gdGVtcGxhdGVcbiAqICAgICAgICAgICBDb250YWlucyB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIFNlZ21lbnRUZW1wbGF0ZSBub2RlXG4gKiBAcHJvcGVydHkge09iamVjdFtdfHVuZGVmaW5lZH0gc2VnbWVudFRpbWVsaW5lXG4gKiAgICAgICAgICAgQ29udGFpbnMgYSBsaXN0IG9mIGF0cnJpYnV0ZXMgZm9yIGVhY2ggUyBub2RlIHdpdGhpbiB0aGUgU2VnbWVudFRpbWVsaW5lIG5vZGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fHVuZGVmaW5lZH0gbGlzdFxuICogICAgICAgICAgIENvbnRhaW5zIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgU2VnbWVudExpc3Qgbm9kZVxuICogQHByb3BlcnR5IHtPYmplY3R8dW5kZWZpbmVkfSBiYXNlXG4gKiAgICAgICAgICAgQ29udGFpbnMgdGhlIGF0dHJpYnV0ZXMgZm9yIHRoZSBTZWdtZW50QmFzZSBub2RlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFsbCBhdmFpbGFibGUgU2VnbWVudCBpbmZvcm1hdGlvbiBjb250YWluZWQgd2l0aGluIHRoZSBBZGFwdGF0aW9uU2V0IG5vZGVcbiAqXG4gKiBAcGFyYW0ge05vZGV9IGFkYXB0YXRpb25TZXRcbiAqICAgICAgICBUaGUgQWRhcHRhdGlvblNldCBub2RlIHRvIGdldCBTZWdtZW50IGluZm9ybWF0aW9uIGZyb21cbiAqIEByZXR1cm4ge1NlZ21lbnRJbmZvcm1hdGlvbn1cbiAqICAgICAgICAgVGhlIFNlZ21lbnQgaW5mb3JtYXRpb24gY29udGFpbmVkIHdpdGhpbiB0aGUgcHJvdmlkZWQgQWRhcHRhdGlvblNldFxuICovXG5cbmNvbnN0IGdldFNlZ21lbnRJbmZvcm1hdGlvbiA9IGFkYXB0YXRpb25TZXQgPT4ge1xuICBjb25zdCBzZWdtZW50VGVtcGxhdGUgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ1NlZ21lbnRUZW1wbGF0ZScpWzBdO1xuICBjb25zdCBzZWdtZW50TGlzdCA9IGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnU2VnbWVudExpc3QnKVswXTtcbiAgY29uc3Qgc2VnbWVudFVybHMgPSBzZWdtZW50TGlzdCAmJiBmaW5kQ2hpbGRyZW4oc2VnbWVudExpc3QsICdTZWdtZW50VVJMJykubWFwKHMgPT4gbWVyZ2Uoe1xuICAgIHRhZzogJ1NlZ21lbnRVUkwnXG4gIH0sIHBhcnNlQXR0cmlidXRlcyhzKSkpO1xuICBjb25zdCBzZWdtZW50QmFzZSA9IGZpbmRDaGlsZHJlbihhZGFwdGF0aW9uU2V0LCAnU2VnbWVudEJhc2UnKVswXTtcbiAgY29uc3Qgc2VnbWVudFRpbWVsaW5lUGFyZW50Tm9kZSA9IHNlZ21lbnRMaXN0IHx8IHNlZ21lbnRUZW1wbGF0ZTtcbiAgY29uc3Qgc2VnbWVudFRpbWVsaW5lID0gc2VnbWVudFRpbWVsaW5lUGFyZW50Tm9kZSAmJiBmaW5kQ2hpbGRyZW4oc2VnbWVudFRpbWVsaW5lUGFyZW50Tm9kZSwgJ1NlZ21lbnRUaW1lbGluZScpWzBdO1xuICBjb25zdCBzZWdtZW50SW5pdGlhbGl6YXRpb25QYXJlbnROb2RlID0gc2VnbWVudExpc3QgfHwgc2VnbWVudEJhc2UgfHwgc2VnbWVudFRlbXBsYXRlO1xuICBjb25zdCBzZWdtZW50SW5pdGlhbGl6YXRpb24gPSBzZWdtZW50SW5pdGlhbGl6YXRpb25QYXJlbnROb2RlICYmIGZpbmRDaGlsZHJlbihzZWdtZW50SW5pdGlhbGl6YXRpb25QYXJlbnROb2RlLCAnSW5pdGlhbGl6YXRpb24nKVswXTsgLy8gU2VnbWVudFRlbXBsYXRlIGlzIGhhbmRsZWQgc2xpZ2h0bHkgZGlmZmVyZW50bHksIHNpbmNlIGl0IGNhbiBoYXZlIGJvdGhcbiAgLy8gQGluaXRpYWxpemF0aW9uIGFuZCBhbiA8SW5pdGlhbGl6YXRpb24+IG5vZGUuICBAaW5pdGlhbGl6YXRpb24gY2FuIGJlIHRlbXBsYXRlZCxcbiAgLy8gd2hpbGUgdGhlIG5vZGUgY2FuIGhhdmUgYSB1cmwgYW5kIHJhbmdlIHNwZWNpZmllZC4gIElmIHRoZSA8U2VnbWVudFRlbXBsYXRlPiBoYXNcbiAgLy8gYm90aCBAaW5pdGlhbGl6YXRpb24gYW5kIGFuIDxJbml0aWFsaXphdGlvbj4gc3ViZWxlbWVudCB3ZSBvcHQgdG8gb3ZlcnJpZGUgd2l0aFxuICAvLyB0aGUgbm9kZSwgYXMgdGhpcyBpbnRlcmFjdGlvbiBpcyBub3QgZGVmaW5lZCBpbiB0aGUgc3BlYy5cblxuICBjb25zdCB0ZW1wbGF0ZSA9IHNlZ21lbnRUZW1wbGF0ZSAmJiBwYXJzZUF0dHJpYnV0ZXMoc2VnbWVudFRlbXBsYXRlKTtcblxuICBpZiAodGVtcGxhdGUgJiYgc2VnbWVudEluaXRpYWxpemF0aW9uKSB7XG4gICAgdGVtcGxhdGUuaW5pdGlhbGl6YXRpb24gPSBzZWdtZW50SW5pdGlhbGl6YXRpb24gJiYgcGFyc2VBdHRyaWJ1dGVzKHNlZ21lbnRJbml0aWFsaXphdGlvbik7XG4gIH0gZWxzZSBpZiAodGVtcGxhdGUgJiYgdGVtcGxhdGUuaW5pdGlhbGl6YXRpb24pIHtcbiAgICAvLyBJZiBpdCBpcyBAaW5pdGlhbGl6YXRpb24gd2UgY29udmVydCBpdCB0byBhbiBvYmplY3Qgc2luY2UgdGhpcyBpcyB0aGUgZm9ybWF0IHRoYXRcbiAgICAvLyBsYXRlciBmdW5jdGlvbnMgd2lsbCByZWx5IG9uIGZvciB0aGUgaW5pdGlhbGl6YXRpb24gc2VnbWVudC4gIFRoaXMgaXMgb25seSB2YWxpZFxuICAgIC8vIGZvciA8U2VnbWVudFRlbXBsYXRlPlxuICAgIHRlbXBsYXRlLmluaXRpYWxpemF0aW9uID0ge1xuICAgICAgc291cmNlVVJMOiB0ZW1wbGF0ZS5pbml0aWFsaXphdGlvblxuICAgIH07XG4gIH1cblxuICBjb25zdCBzZWdtZW50SW5mbyA9IHtcbiAgICB0ZW1wbGF0ZSxcbiAgICBzZWdtZW50VGltZWxpbmU6IHNlZ21lbnRUaW1lbGluZSAmJiBmaW5kQ2hpbGRyZW4oc2VnbWVudFRpbWVsaW5lLCAnUycpLm1hcChzID0+IHBhcnNlQXR0cmlidXRlcyhzKSksXG4gICAgbGlzdDogc2VnbWVudExpc3QgJiYgbWVyZ2UocGFyc2VBdHRyaWJ1dGVzKHNlZ21lbnRMaXN0KSwge1xuICAgICAgc2VnbWVudFVybHMsXG4gICAgICBpbml0aWFsaXphdGlvbjogcGFyc2VBdHRyaWJ1dGVzKHNlZ21lbnRJbml0aWFsaXphdGlvbilcbiAgICB9KSxcbiAgICBiYXNlOiBzZWdtZW50QmFzZSAmJiBtZXJnZShwYXJzZUF0dHJpYnV0ZXMoc2VnbWVudEJhc2UpLCB7XG4gICAgICBpbml0aWFsaXphdGlvbjogcGFyc2VBdHRyaWJ1dGVzKHNlZ21lbnRJbml0aWFsaXphdGlvbilcbiAgICB9KVxuICB9O1xuICBPYmplY3Qua2V5cyhzZWdtZW50SW5mbykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICghc2VnbWVudEluZm9ba2V5XSkge1xuICAgICAgZGVsZXRlIHNlZ21lbnRJbmZvW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlZ21lbnRJbmZvO1xufTtcbi8qKlxuICogQ29udGFpbnMgU2VnbWVudCBpbmZvcm1hdGlvbiBhbmQgYXR0cmlidXRlcyBuZWVkZWQgdG8gY29uc3RydWN0IGEgUGxheWxpc3Qgb2JqZWN0XG4gKiBmcm9tIGEgUmVwcmVzZW50YXRpb25cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBSZXByZXNlbnRhdGlvbkluZm9ybWF0aW9uXG4gKiBAcHJvcGVydHkge1NlZ21lbnRJbmZvcm1hdGlvbn0gc2VnbWVudEluZm9cbiAqICAgICAgICAgICBTZWdtZW50IGluZm9ybWF0aW9uIGZvciB0aGlzIFJlcHJlc2VudGF0aW9uXG4gKiBAcHJvcGVydHkge09iamVjdH0gYXR0cmlidXRlc1xuICogICAgICAgICAgIEluaGVyaXRlZCBhdHRyaWJ1dGVzIGZvciB0aGlzIFJlcHJlc2VudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBNYXBzIGEgUmVwcmVzZW50YXRpb24gbm9kZSB0byBhbiBvYmplY3QgY29udGFpbmluZyBTZWdtZW50IGluZm9ybWF0aW9uIGFuZCBhdHRyaWJ1dGVzXG4gKlxuICogQG5hbWUgaW5oZXJpdEJhc2VVcmxzQ2FsbGJhY2tcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtOb2RlfSByZXByZXNlbnRhdGlvblxuICogICAgICAgIFJlcHJlc2VudGF0aW9uIG5vZGUgZnJvbSB0aGUgbXBkXG4gKiBAcmV0dXJuIHtSZXByZXNlbnRhdGlvbkluZm9ybWF0aW9ufVxuICogICAgICAgICBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gY29uc3RydWN0IGEgUGxheWxpc3Qgb2JqZWN0XG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIEFycmF5LnByb3RvdHlwZS5tYXAgZm9yIG1hcHBpbmcgUmVwcmVzZW50YXRpb24gbm9kZXMgdG9cbiAqIFNlZ21lbnQgaW5mb3JtYXRpb24gYW5kIGF0dHJpYnV0ZXMgdXNpbmcgaW5oZXJpdGVkIEJhc2VVUkwgbm9kZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFkYXB0YXRpb25TZXRBdHRyaWJ1dGVzXG4gKiAgICAgICAgQ29udGFpbnMgYXR0cmlidXRlcyBpbmhlcml0ZWQgYnkgdGhlIEFkYXB0YXRpb25TZXRcbiAqIEBwYXJhbSB7T2JqZWN0W119IGFkYXB0YXRpb25TZXRCYXNlVXJsc1xuICogICAgICAgIExpc3Qgb2Ygb2JqZWN0cyBjb250YWluaW5nIHJlc29sdmVkIGJhc2UgVVJMcyBhbmQgYXR0cmlidXRlc1xuICogICAgICAgIGluaGVyaXRlZCBieSB0aGUgQWRhcHRhdGlvblNldFxuICogQHBhcmFtIHtTZWdtZW50SW5mb3JtYXRpb259IGFkYXB0YXRpb25TZXRTZWdtZW50SW5mb1xuICogICAgICAgIENvbnRhaW5zIFNlZ21lbnQgaW5mb3JtYXRpb24gZm9yIHRoZSBBZGFwdGF0aW9uU2V0XG4gKiBAcmV0dXJuIHtpbmhlcml0QmFzZVVybHNDYWxsYmFja31cbiAqICAgICAgICAgQ2FsbGJhY2sgbWFwIGZ1bmN0aW9uXG4gKi9cblxuY29uc3QgaW5oZXJpdEJhc2VVcmxzID0gKGFkYXB0YXRpb25TZXRBdHRyaWJ1dGVzLCBhZGFwdGF0aW9uU2V0QmFzZVVybHMsIGFkYXB0YXRpb25TZXRTZWdtZW50SW5mbykgPT4gcmVwcmVzZW50YXRpb24gPT4ge1xuICBjb25zdCByZXBCYXNlVXJsRWxlbWVudHMgPSBmaW5kQ2hpbGRyZW4ocmVwcmVzZW50YXRpb24sICdCYXNlVVJMJyk7XG4gIGNvbnN0IHJlcEJhc2VVcmxzID0gYnVpbGRCYXNlVXJscyhhZGFwdGF0aW9uU2V0QmFzZVVybHMsIHJlcEJhc2VVcmxFbGVtZW50cyk7XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBtZXJnZShhZGFwdGF0aW9uU2V0QXR0cmlidXRlcywgcGFyc2VBdHRyaWJ1dGVzKHJlcHJlc2VudGF0aW9uKSk7XG4gIGNvbnN0IHJlcHJlc2VudGF0aW9uU2VnbWVudEluZm8gPSBnZXRTZWdtZW50SW5mb3JtYXRpb24ocmVwcmVzZW50YXRpb24pO1xuICByZXR1cm4gcmVwQmFzZVVybHMubWFwKGJhc2VVcmwgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzZWdtZW50SW5mbzogbWVyZ2UoYWRhcHRhdGlvblNldFNlZ21lbnRJbmZvLCByZXByZXNlbnRhdGlvblNlZ21lbnRJbmZvKSxcbiAgICAgIGF0dHJpYnV0ZXM6IG1lcmdlKGF0dHJpYnV0ZXMsIGJhc2VVcmwpXG4gICAgfTtcbiAgfSk7XG59O1xuLyoqXG4gKiBUcmFuZm9ybXMgYSBzZXJpZXMgb2YgY29udGVudCBwcm90ZWN0aW9uIG5vZGVzIHRvXG4gKiBhbiBvYmplY3QgY29udGFpbmluZyBwc3NoIGRhdGEgYnkga2V5IHN5c3RlbVxuICpcbiAqIEBwYXJhbSB7Tm9kZVtdfSBjb250ZW50UHJvdGVjdGlvbk5vZGVzXG4gKiAgICAgICAgQ29udGVudCBwcm90ZWN0aW9uIG5vZGVzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgICAgICAgT2JqZWN0IGNvbnRhaW5pbmcgcHNzaCBkYXRhIGJ5IGtleSBzeXN0ZW1cbiAqL1xuXG5jb25zdCBnZW5lcmF0ZUtleVN5c3RlbUluZm9ybWF0aW9uID0gY29udGVudFByb3RlY3Rpb25Ob2RlcyA9PiB7XG4gIHJldHVybiBjb250ZW50UHJvdGVjdGlvbk5vZGVzLnJlZHVjZSgoYWNjLCBub2RlKSA9PiB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhub2RlKTsgLy8gQWx0aG91Z2ggaXQgY291bGQgYmUgYXJndWVkIHRoYXQgYWNjb3JkaW5nIHRvIHRoZSBVVUlEIFJGQyBzcGVjIHRoZSBVVUlEIHN0cmluZyAoYS1mIGNoYXJzKSBzaG91bGQgYmUgZ2VuZXJhdGVkXG4gICAgLy8gYXMgYSBsb3dlcmNhc2Ugc3RyaW5nIGl0IGFsc28gbWVudGlvbnMgaXQgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgY2FzZS1pbnNlbnNpdGl2ZSBvbiBpbnB1dC4gU2luY2UgdGhlIGtleSBzeXN0ZW1cbiAgICAvLyBVVUlEcyBpbiB0aGUga2V5U3lzdGVtc01hcCBhcmUgaGFyZGNvZGVkIGFzIGxvd2VyY2FzZSBpbiB0aGUgY29kZWJhc2UgdGhlcmUgaXNuJ3QgYW55IHJlYXNvbiBub3QgdG8gZG9cbiAgICAvLyAudG9Mb3dlckNhc2UoKSBvbiB0aGUgaW5wdXQgVVVJRCBzdHJpbmcgZnJvbSB0aGUgbWFuaWZlc3QgKGF0IGxlYXN0IEkgY291bGQgbm90IHRoaW5rIG9mIG9uZSkuXG5cbiAgICBpZiAoYXR0cmlidXRlcy5zY2hlbWVJZFVyaSkge1xuICAgICAgYXR0cmlidXRlcy5zY2hlbWVJZFVyaSA9IGF0dHJpYnV0ZXMuc2NoZW1lSWRVcmkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXlTeXN0ZW0gPSBrZXlTeXN0ZW1zTWFwW2F0dHJpYnV0ZXMuc2NoZW1lSWRVcmldO1xuXG4gICAgaWYgKGtleVN5c3RlbSkge1xuICAgICAgYWNjW2tleVN5c3RlbV0gPSB7XG4gICAgICAgIGF0dHJpYnV0ZXNcbiAgICAgIH07XG4gICAgICBjb25zdCBwc3NoTm9kZSA9IGZpbmRDaGlsZHJlbihub2RlLCAnY2VuYzpwc3NoJylbMF07XG5cbiAgICAgIGlmIChwc3NoTm9kZSkge1xuICAgICAgICBjb25zdCBwc3NoID0gZ2V0Q29udGVudChwc3NoTm9kZSk7XG4gICAgICAgIGFjY1trZXlTeXN0ZW1dLnBzc2ggPSBwc3NoICYmIGRlY29kZUI2NFRvVWludDhBcnJheShwc3NoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59OyAvLyBkZWZpbmVkIGluIEFOU0lfU0NURSAyMTQtMSAyMDE2XG5cblxuY29uc3QgcGFyc2VDYXB0aW9uU2VydmljZU1ldGFkYXRhID0gc2VydmljZSA9PiB7XG4gIC8vIDYwOCBjYXB0aW9uc1xuICBpZiAoc2VydmljZS5zY2hlbWVJZFVyaSA9PT0gJ3VybjpzY3RlOmRhc2g6Y2M6Y2VhLTYwODoyMDE1Jykge1xuICAgIGNvbnN0IHZhbHVlcyA9IHR5cGVvZiBzZXJ2aWNlLnZhbHVlICE9PSAnc3RyaW5nJyA/IFtdIDogc2VydmljZS52YWx1ZS5zcGxpdCgnOycpO1xuICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgIGxldCBjaGFubmVsO1xuICAgICAgbGV0IGxhbmd1YWdlOyAvLyBkZWZhdWx0IGxhbmd1YWdlIHRvIHZhbHVlXG5cbiAgICAgIGxhbmd1YWdlID0gdmFsdWU7XG5cbiAgICAgIGlmICgvXkNDXFxkPS8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgW2NoYW5uZWwsIGxhbmd1YWdlXSA9IHZhbHVlLnNwbGl0KCc9Jyk7XG4gICAgICB9IGVsc2UgaWYgKC9eQ0NcXGQkLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICBjaGFubmVsID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNoYW5uZWwsXG4gICAgICAgIGxhbmd1YWdlXG4gICAgICB9O1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHNlcnZpY2Uuc2NoZW1lSWRVcmkgPT09ICd1cm46c2N0ZTpkYXNoOmNjOmNlYS03MDg6MjAxNScpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0eXBlb2Ygc2VydmljZS52YWx1ZSAhPT0gJ3N0cmluZycgPyBbXSA6IHNlcnZpY2UudmFsdWUuc3BsaXQoJzsnKTtcbiAgICByZXR1cm4gdmFsdWVzLm1hcCh2YWx1ZSA9PiB7XG4gICAgICBjb25zdCBmbGFncyA9IHtcbiAgICAgICAgLy8gc2VydmljZSBvciBjaGFubmVsIG51bWJlciAxLTYzXG4gICAgICAgICdjaGFubmVsJzogdW5kZWZpbmVkLFxuICAgICAgICAvLyBsYW5ndWFnZSBpcyBhIDNBTFBIQSBwZXIgSVNPIDYzOS4yL0JcbiAgICAgICAgLy8gZmllbGQgaXMgcmVxdWlyZWRcbiAgICAgICAgJ2xhbmd1YWdlJzogdW5kZWZpbmVkLFxuICAgICAgICAvLyBCSVQgMS8wIG9yID9cbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZSBpcyAxLCBtZWFuaW5nIDE2OjkgYXNwZWN0IHJhdGlvLCAwIGlzIDQ6MywgPyBpcyB1bmtub3duXG4gICAgICAgICdhc3BlY3RSYXRpbyc6IDEsXG4gICAgICAgIC8vIEJJVCAxLzBcbiAgICAgICAgLy8gZWFzeSByZWFkZXIgZmxhZyBpbmRpY2F0ZWQgdGhlIHRleHQgaXMgdGFpbGVkIHRvIHRoZSBuZWVkcyBvZiBiZWdpbm5pbmcgcmVhZGVyc1xuICAgICAgICAvLyBkZWZhdWx0IDAsIG9yIG9mZlxuICAgICAgICAnZWFzeVJlYWRlcic6IDAsXG4gICAgICAgIC8vIEJJVCAxLzBcbiAgICAgICAgLy8gSWYgM2QgbWV0YWRhdGEgaXMgcHJlc2VudCAoQ0VBLTcwOC4xKSB0aGVuIDFcbiAgICAgICAgLy8gZGVmYXVsdCAwXG4gICAgICAgICczRCc6IDBcbiAgICAgIH07XG5cbiAgICAgIGlmICgvPS8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgW2NoYW5uZWwsIG9wdHMgPSAnJ10gPSB2YWx1ZS5zcGxpdCgnPScpO1xuICAgICAgICBmbGFncy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgZmxhZ3MubGFuZ3VhZ2UgPSB2YWx1ZTtcbiAgICAgICAgb3B0cy5zcGxpdCgnLCcpLmZvckVhY2gob3B0ID0+IHtcbiAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsXSA9IG9wdC5zcGxpdCgnOicpO1xuXG4gICAgICAgICAgaWYgKG5hbWUgPT09ICdsYW5nJykge1xuICAgICAgICAgICAgZmxhZ3MubGFuZ3VhZ2UgPSB2YWw7IC8vIGVyIGZvciBlYXN5UmVhZGVyeVxuICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2VyJykge1xuICAgICAgICAgICAgZmxhZ3MuZWFzeVJlYWRlciA9IE51bWJlcih2YWwpOyAvLyB3YXIgZm9yIHdpZGUgYXNwZWN0IHJhdGlvXG4gICAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnd2FyJykge1xuICAgICAgICAgICAgZmxhZ3MuYXNwZWN0UmF0aW8gPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICczRCcpIHtcbiAgICAgICAgICAgIGZsYWdzWyczRCddID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsYWdzLmxhbmd1YWdlID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGFncy5jaGFubmVsKSB7XG4gICAgICAgIGZsYWdzLmNoYW5uZWwgPSAnU0VSVklDRScgKyBmbGFncy5jaGFubmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmxhZ3M7XG4gICAgfSk7XG4gIH1cbn07XG4vKipcbiAqIEEgbWFwIGNhbGxiYWNrIHRoYXQgd2lsbCBwYXJzZSBhbGwgZXZlbnQgc3RyZWFtIGRhdGEgZm9yIGEgY29sbGVjdGlvbiBvZiBwZXJpb2RzXG4gKiBEQVNIIElTT19JRUNfMjMwMDkgNS4xMC4yLjJcbiAqIGh0dHBzOi8vZGFzaGlmLWRvY3VtZW50cy5henVyZXdlYnNpdGVzLm5ldC9FdmVudHMvbWFzdGVyL2V2ZW50Lmh0bWwjbXBkLWV2ZW50LXRpbWluZ1xuICpcbiAqIEBwYXJhbSB7UGVyaW9kSW5mb3JtYXRpb259IHBlcmlvZCBvYmplY3QgY29udGFpbmluZyBuZWNlc3NhcnkgcGVyaW9kIGluZm9ybWF0aW9uXG4gKiBAcmV0dXJuIGEgY29sbGVjdGlvbiBvZiBwYXJzZWQgZXZlbnRzdHJlYW0gZXZlbnQgb2JqZWN0c1xuICovXG5cbmNvbnN0IHRvRXZlbnRTdHJlYW0gPSBwZXJpb2QgPT4ge1xuICAvLyBnZXQgYW5kIGZsYXR0ZW4gYWxsIEV2ZW50U3RyZWFtcyB0YWdzIGFuZCBwYXJzZSBhdHRyaWJ1dGVzIGFuZCBjaGlsZHJlblxuICByZXR1cm4gZmxhdHRlbihmaW5kQ2hpbGRyZW4ocGVyaW9kLm5vZGUsICdFdmVudFN0cmVhbScpLm1hcChldmVudFN0cmVhbSA9PiB7XG4gICAgY29uc3QgZXZlbnRTdHJlYW1BdHRyaWJ1dGVzID0gcGFyc2VBdHRyaWJ1dGVzKGV2ZW50U3RyZWFtKTtcbiAgICBjb25zdCBzY2hlbWVJZFVyaSA9IGV2ZW50U3RyZWFtQXR0cmlidXRlcy5zY2hlbWVJZFVyaTsgLy8gZmluZCBhbGwgRXZlbnRzIHBlciBFdmVudFN0cmVhbSB0YWcgYW5kIG1hcCB0byByZXR1cm4gb2JqZWN0c1xuXG4gICAgcmV0dXJuIGZpbmRDaGlsZHJlbihldmVudFN0cmVhbSwgJ0V2ZW50JykubWFwKGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50QXR0cmlidXRlcyA9IHBhcnNlQXR0cmlidXRlcyhldmVudCk7XG4gICAgICBjb25zdCBwcmVzZW50YXRpb25UaW1lID0gZXZlbnRBdHRyaWJ1dGVzLnByZXNlbnRhdGlvblRpbWUgfHwgMDtcbiAgICAgIGNvbnN0IHRpbWVzY2FsZSA9IGV2ZW50U3RyZWFtQXR0cmlidXRlcy50aW1lc2NhbGUgfHwgMTtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gZXZlbnRBdHRyaWJ1dGVzLmR1cmF0aW9uIHx8IDA7XG4gICAgICBjb25zdCBzdGFydCA9IHByZXNlbnRhdGlvblRpbWUgLyB0aW1lc2NhbGUgKyBwZXJpb2QuYXR0cmlidXRlcy5zdGFydDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNjaGVtZUlkVXJpLFxuICAgICAgICB2YWx1ZTogZXZlbnRTdHJlYW1BdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgICBpZDogZXZlbnRBdHRyaWJ1dGVzLmlkLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgZW5kOiBzdGFydCArIGR1cmF0aW9uIC8gdGltZXNjYWxlLFxuICAgICAgICBtZXNzYWdlRGF0YTogZ2V0Q29udGVudChldmVudCkgfHwgZXZlbnRBdHRyaWJ1dGVzLm1lc3NhZ2VEYXRhLFxuICAgICAgICBjb250ZW50RW5jb2Rpbmc6IGV2ZW50U3RyZWFtQXR0cmlidXRlcy5jb250ZW50RW5jb2RpbmcsXG4gICAgICAgIHByZXNlbnRhdGlvblRpbWVPZmZzZXQ6IGV2ZW50U3RyZWFtQXR0cmlidXRlcy5wcmVzZW50YXRpb25UaW1lT2Zmc2V0IHx8IDBcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pKTtcbn07XG4vKipcbiAqIE1hcHMgYW4gQWRhcHRhdGlvblNldCBub2RlIHRvIGEgbGlzdCBvZiBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbiBvYmplY3RzXG4gKlxuICogQG5hbWUgdG9SZXByZXNlbnRhdGlvbnNDYWxsYmFja1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge05vZGV9IGFkYXB0YXRpb25TZXRcbiAqICAgICAgICBBZGFwdGF0aW9uU2V0IG5vZGUgZnJvbSB0aGUgbXBkXG4gKiBAcmV0dXJuIHtSZXByZXNlbnRhdGlvbkluZm9ybWF0aW9uW119XG4gKiAgICAgICAgIExpc3Qgb2Ygb2JqZWN0cyBjb250YWluaW5nIFJlcHJlc2VudGFpb24gaW5mb3JtYXRpb25cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBjYWxsYmFjayBmb3IgQXJyYXkucHJvdG90eXBlLm1hcCBmb3IgbWFwcGluZyBBZGFwdGF0aW9uU2V0IG5vZGVzIHRvIGEgbGlzdCBvZlxuICogUmVwcmVzZW50YXRpb24gaW5mb3JtYXRpb24gb2JqZWN0c1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwZXJpb2RBdHRyaWJ1dGVzXG4gKiAgICAgICAgQ29udGFpbnMgYXR0cmlidXRlcyBpbmhlcml0ZWQgYnkgdGhlIFBlcmlvZFxuICogQHBhcmFtIHtPYmplY3RbXX0gcGVyaW9kQmFzZVVybHNcbiAqICAgICAgICBDb250YWlucyBsaXN0IG9mIG9iamVjdHMgd2l0aCByZXNvbHZlZCBiYXNlIHVybHMgYW5kIGF0dHJpYnV0ZXNcbiAqICAgICAgICBpbmhlcml0ZWQgYnkgdGhlIFBlcmlvZFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGVyaW9kU2VnbWVudEluZm9cbiAqICAgICAgICBDb250YWlucyBTZWdtZW50IEluZm9ybWF0aW9uIGF0IHRoZSBwZXJpb2QgbGV2ZWxcbiAqIEByZXR1cm4ge3RvUmVwcmVzZW50YXRpb25zQ2FsbGJhY2t9XG4gKiAgICAgICAgIENhbGxiYWNrIG1hcCBmdW5jdGlvblxuICovXG5cbmNvbnN0IHRvUmVwcmVzZW50YXRpb25zID0gKHBlcmlvZEF0dHJpYnV0ZXMsIHBlcmlvZEJhc2VVcmxzLCBwZXJpb2RTZWdtZW50SW5mbykgPT4gYWRhcHRhdGlvblNldCA9PiB7XG4gIGNvbnN0IGFkYXB0YXRpb25TZXRBdHRyaWJ1dGVzID0gcGFyc2VBdHRyaWJ1dGVzKGFkYXB0YXRpb25TZXQpO1xuICBjb25zdCBhZGFwdGF0aW9uU2V0QmFzZVVybHMgPSBidWlsZEJhc2VVcmxzKHBlcmlvZEJhc2VVcmxzLCBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ0Jhc2VVUkwnKSk7XG4gIGNvbnN0IHJvbGUgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ1JvbGUnKVswXTtcbiAgY29uc3Qgcm9sZUF0dHJpYnV0ZXMgPSB7XG4gICAgcm9sZTogcGFyc2VBdHRyaWJ1dGVzKHJvbGUpXG4gIH07XG4gIGxldCBhdHRycyA9IG1lcmdlKHBlcmlvZEF0dHJpYnV0ZXMsIGFkYXB0YXRpb25TZXRBdHRyaWJ1dGVzLCByb2xlQXR0cmlidXRlcyk7XG4gIGNvbnN0IGFjY2Vzc2liaWxpdHkgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ0FjY2Vzc2liaWxpdHknKVswXTtcbiAgY29uc3QgY2FwdGlvblNlcnZpY2VzID0gcGFyc2VDYXB0aW9uU2VydmljZU1ldGFkYXRhKHBhcnNlQXR0cmlidXRlcyhhY2Nlc3NpYmlsaXR5KSk7XG5cbiAgaWYgKGNhcHRpb25TZXJ2aWNlcykge1xuICAgIGF0dHJzID0gbWVyZ2UoYXR0cnMsIHtcbiAgICAgIGNhcHRpb25TZXJ2aWNlc1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgbGFiZWwgPSBmaW5kQ2hpbGRyZW4oYWRhcHRhdGlvblNldCwgJ0xhYmVsJylbMF07XG5cbiAgaWYgKGxhYmVsICYmIGxhYmVsLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgbGFiZWxWYWwgPSBsYWJlbC5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZS50cmltKCk7XG4gICAgYXR0cnMgPSBtZXJnZShhdHRycywge1xuICAgICAgbGFiZWw6IGxhYmVsVmFsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjb250ZW50UHJvdGVjdGlvbiA9IGdlbmVyYXRlS2V5U3lzdGVtSW5mb3JtYXRpb24oZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdDb250ZW50UHJvdGVjdGlvbicpKTtcblxuICBpZiAoT2JqZWN0LmtleXMoY29udGVudFByb3RlY3Rpb24pLmxlbmd0aCkge1xuICAgIGF0dHJzID0gbWVyZ2UoYXR0cnMsIHtcbiAgICAgIGNvbnRlbnRQcm90ZWN0aW9uXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzZWdtZW50SW5mbyA9IGdldFNlZ21lbnRJbmZvcm1hdGlvbihhZGFwdGF0aW9uU2V0KTtcbiAgY29uc3QgcmVwcmVzZW50YXRpb25zID0gZmluZENoaWxkcmVuKGFkYXB0YXRpb25TZXQsICdSZXByZXNlbnRhdGlvbicpO1xuICBjb25zdCBhZGFwdGF0aW9uU2V0U2VnbWVudEluZm8gPSBtZXJnZShwZXJpb2RTZWdtZW50SW5mbywgc2VnbWVudEluZm8pO1xuICByZXR1cm4gZmxhdHRlbihyZXByZXNlbnRhdGlvbnMubWFwKGluaGVyaXRCYXNlVXJscyhhdHRycywgYWRhcHRhdGlvblNldEJhc2VVcmxzLCBhZGFwdGF0aW9uU2V0U2VnbWVudEluZm8pKSk7XG59O1xuLyoqXG4gKiBDb250YWlucyBhbGwgcGVyaW9kIGluZm9ybWF0aW9uIGZvciBtYXBwaW5nIG5vZGVzIG9udG8gYWRhcHRhdGlvbiBzZXRzLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBlcmlvZEluZm9ybWF0aW9uXG4gKiBAcHJvcGVydHkge05vZGV9IHBlcmlvZC5ub2RlXG4gKiAgICAgICAgICAgUGVyaW9kIG5vZGUgZnJvbSB0aGUgbXBkXG4gKiBAcHJvcGVydHkge09iamVjdH0gcGVyaW9kLmF0dHJpYnV0ZXNcbiAqICAgICAgICAgICBQYXJzZWQgcGVyaW9kIGF0dHJpYnV0ZXMgZnJvbSBub2RlIHBsdXMgYW55IGFkZGVkXG4gKi9cblxuLyoqXG4gKiBNYXBzIGEgUGVyaW9kSW5mb3JtYXRpb24gb2JqZWN0IHRvIGEgbGlzdCBvZiBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbiBvYmplY3RzIGZvciBhbGxcbiAqIEFkYXB0YXRpb25TZXQgbm9kZXMgY29udGFpbmVkIHdpdGhpbiB0aGUgUGVyaW9kLlxuICpcbiAqIEBuYW1lIHRvQWRhcHRhdGlvblNldHNDYWxsYmFja1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1BlcmlvZEluZm9ybWF0aW9ufSBwZXJpb2RcbiAqICAgICAgICBQZXJpb2Qgb2JqZWN0IGNvbnRhaW5pbmcgbmVjZXNzYXJ5IHBlcmlvZCBpbmZvcm1hdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IHBlcmlvZFN0YXJ0XG4gKiAgICAgICAgU3RhcnQgdGltZSBvZiB0aGUgUGVyaW9kIHdpdGhpbiB0aGUgbXBkXG4gKiBAcmV0dXJuIHtSZXByZXNlbnRhdGlvbkluZm9ybWF0aW9uW119XG4gKiAgICAgICAgIExpc3Qgb2Ygb2JqZWN0cyBjb250YWluaW5nIFJlcHJlc2VudGFpb24gaW5mb3JtYXRpb25cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBjYWxsYmFjayBmb3IgQXJyYXkucHJvdG90eXBlLm1hcCBmb3IgbWFwcGluZyBQZXJpb2Qgbm9kZXMgdG8gYSBsaXN0IG9mXG4gKiBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvbiBvYmplY3RzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG1wZEF0dHJpYnV0ZXNcbiAqICAgICAgICBDb250YWlucyBhdHRyaWJ1dGVzIGluaGVyaXRlZCBieSB0aGUgbXBkXG4gICogQHBhcmFtIHtPYmplY3RbXX0gbXBkQmFzZVVybHNcbiAqICAgICAgICBDb250YWlucyBsaXN0IG9mIG9iamVjdHMgd2l0aCByZXNvbHZlZCBiYXNlIHVybHMgYW5kIGF0dHJpYnV0ZXNcbiAqICAgICAgICBpbmhlcml0ZWQgYnkgdGhlIG1wZFxuICogQHJldHVybiB7dG9BZGFwdGF0aW9uU2V0c0NhbGxiYWNrfVxuICogICAgICAgICBDYWxsYmFjayBtYXAgZnVuY3Rpb25cbiAqL1xuXG5jb25zdCB0b0FkYXB0YXRpb25TZXRzID0gKG1wZEF0dHJpYnV0ZXMsIG1wZEJhc2VVcmxzKSA9PiAocGVyaW9kLCBpbmRleCkgPT4ge1xuICBjb25zdCBwZXJpb2RCYXNlVXJscyA9IGJ1aWxkQmFzZVVybHMobXBkQmFzZVVybHMsIGZpbmRDaGlsZHJlbihwZXJpb2Qubm9kZSwgJ0Jhc2VVUkwnKSk7XG4gIGNvbnN0IHBlcmlvZEF0dHJpYnV0ZXMgPSBtZXJnZShtcGRBdHRyaWJ1dGVzLCB7XG4gICAgcGVyaW9kU3RhcnQ6IHBlcmlvZC5hdHRyaWJ1dGVzLnN0YXJ0XG4gIH0pO1xuXG4gIGlmICh0eXBlb2YgcGVyaW9kLmF0dHJpYnV0ZXMuZHVyYXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgcGVyaW9kQXR0cmlidXRlcy5wZXJpb2REdXJhdGlvbiA9IHBlcmlvZC5hdHRyaWJ1dGVzLmR1cmF0aW9uO1xuICB9XG5cbiAgY29uc3QgYWRhcHRhdGlvblNldHMgPSBmaW5kQ2hpbGRyZW4ocGVyaW9kLm5vZGUsICdBZGFwdGF0aW9uU2V0Jyk7XG4gIGNvbnN0IHBlcmlvZFNlZ21lbnRJbmZvID0gZ2V0U2VnbWVudEluZm9ybWF0aW9uKHBlcmlvZC5ub2RlKTtcbiAgcmV0dXJuIGZsYXR0ZW4oYWRhcHRhdGlvblNldHMubWFwKHRvUmVwcmVzZW50YXRpb25zKHBlcmlvZEF0dHJpYnV0ZXMsIHBlcmlvZEJhc2VVcmxzLCBwZXJpb2RTZWdtZW50SW5mbykpKTtcbn07XG4vKipcbiAqIFRyYW5mb3JtcyBhbiBhcnJheSBvZiBjb250ZW50IHN0ZWVyaW5nIG5vZGVzIGludG8gYW4gb2JqZWN0XG4gKiBjb250YWluaW5nIENETiBjb250ZW50IHN0ZWVyaW5nIGluZm9ybWF0aW9uIGZyb20gdGhlIE1QRCBtYW5pZmVzdC5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGUgREFTSCBzcGVjIGZvciBDb250ZW50IFN0ZWVyaW5nIHBhcnNpbmcsIHNlZTpcbiAqIGh0dHBzOi8vZGFzaGlmLm9yZy9kb2NzL0RBU0gtSUYtQ1RTLTAwWFgtQ29udGVudC1TdGVlcmluZy1Db21tdW5pdHktUmV2aWV3LnBkZlxuICpcbiAqIEBwYXJhbSB7Tm9kZVtdfSBjb250ZW50U3RlZXJpbmdOb2Rlc1xuICogICAgICAgIENvbnRlbnQgc3RlZXJpbmcgbm9kZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV2ZW50SGFuZGxlclxuICogICAgICAgIFRoZSBldmVudCBoYW5kbGVyIHBhc3NlZCBpbnRvIHRoZSBwYXJzZXIgb3B0aW9ucyB0byBoYW5kbGUgd2FybmluZ3NcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqICAgICAgICBPYmplY3QgY29udGFpbmluZyBjb250ZW50IHN0ZWVyaW5nIGRhdGFcbiAqL1xuXG5jb25zdCBnZW5lcmF0ZUNvbnRlbnRTdGVlcmluZ0luZm9ybWF0aW9uID0gKGNvbnRlbnRTdGVlcmluZ05vZGVzLCBldmVudEhhbmRsZXIpID0+IHtcbiAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgQ29udGVudFN0ZWVyaW5nIHRhZ3MsIHRocm93IGFuIGVycm9yXG4gIGlmIChjb250ZW50U3RlZXJpbmdOb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgZXZlbnRIYW5kbGVyKHtcbiAgICAgIHR5cGU6ICd3YXJuJyxcbiAgICAgIG1lc3NhZ2U6ICdUaGUgTVBEIG1hbmlmZXN0IHNob3VsZCBjb250YWluIG5vIG1vcmUgdGhhbiBvbmUgQ29udGVudFN0ZWVyaW5nIHRhZydcbiAgICB9KTtcbiAgfSAvLyBSZXR1cm4gYSBudWxsIHZhbHVlIGlmIHRoZXJlIGFyZSBubyBDb250ZW50U3RlZXJpbmcgdGFnc1xuXG5cbiAgaWYgKCFjb250ZW50U3RlZXJpbmdOb2Rlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGluZm9Gcm9tQ29udGVudFN0ZWVyaW5nVGFnID0gbWVyZ2Uoe1xuICAgIHNlcnZlclVSTDogZ2V0Q29udGVudChjb250ZW50U3RlZXJpbmdOb2Rlc1swXSlcbiAgfSwgcGFyc2VBdHRyaWJ1dGVzKGNvbnRlbnRTdGVlcmluZ05vZGVzWzBdKSk7IC8vIENvbnZlcnRzIGBxdWVyeUJlZm9yZVN0YXJ0YCB0byBhIGJvb2xlYW4sIGFzIHdlbGwgYXMgc2V0dGluZyB0aGUgZGVmYXVsdCB2YWx1ZVxuICAvLyB0byBgZmFsc2VgIGlmIGl0IGRvZXNuJ3QgZXhpc3RcblxuICBpbmZvRnJvbUNvbnRlbnRTdGVlcmluZ1RhZy5xdWVyeUJlZm9yZVN0YXJ0ID0gaW5mb0Zyb21Db250ZW50U3RlZXJpbmdUYWcucXVlcnlCZWZvcmVTdGFydCA9PT0gJ3RydWUnO1xuICByZXR1cm4gaW5mb0Zyb21Db250ZW50U3RlZXJpbmdUYWc7XG59O1xuLyoqXG4gKiBHZXRzIFBlcmlvZEBzdGFydCBwcm9wZXJ0eSBmb3IgYSBnaXZlbiBwZXJpb2QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuYXR0cmlidXRlc1xuICogICAgICAgIFBlcmlvZCBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucHJpb3JQZXJpb2RBdHRyaWJ1dGVzXVxuICogICAgICAgIFByaW9yIHBlcmlvZCBhdHRyaWJ1dGVzIChpZiBwcmlvciBwZXJpb2QgaXMgYXZhaWxhYmxlKVxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubXBkVHlwZVxuICogICAgICAgIFRoZSBNUERAdHlwZSB0aGVzZSBwZXJpb2RzIGNhbWUgZnJvbVxuICogQHJldHVybiB7bnVtYmVyfG51bGx9XG4gKiAgICAgICAgIFRoZSBwZXJpb2Qgc3RhcnQsIG9yIG51bGwgaWYgaXQncyBhbiBlYXJseSBhdmFpbGFibGUgcGVyaW9kIG9yIGVycm9yXG4gKi9cblxuY29uc3QgZ2V0UGVyaW9kU3RhcnQgPSAoe1xuICBhdHRyaWJ1dGVzLFxuICBwcmlvclBlcmlvZEF0dHJpYnV0ZXMsXG4gIG1wZFR5cGVcbn0pID0+IHtcbiAgLy8gU3VtbWFyeSBvZiBwZXJpb2Qgc3RhcnQgdGltZSBjYWxjdWxhdGlvbiBmcm9tIERBU0ggc3BlYyBzZWN0aW9uIDUuMy4yLjFcbiAgLy9cbiAgLy8gQSBwZXJpb2QncyBzdGFydCBpcyB0aGUgZmlyc3QgcGVyaW9kJ3Mgc3RhcnQgKyB0aW1lIGVsYXBzZWQgYWZ0ZXIgcGxheWluZyBhbGxcbiAgLy8gcHJpb3IgcGVyaW9kcyB0byB0aGlzIG9uZS4gUGVyaW9kcyBjb250aW51ZSBvbmUgYWZ0ZXIgdGhlIG90aGVyIGluIHRpbWUgKHdpdGhvdXRcbiAgLy8gZ2FwcykgdW50aWwgdGhlIGVuZCBvZiB0aGUgcHJlc2VudGF0aW9uLlxuICAvL1xuICAvLyBUaGUgdmFsdWUgb2YgUGVyaW9kQHN0YXJ0IHNob3VsZCBiZTpcbiAgLy8gMS4gaWYgUGVyaW9kQHN0YXJ0IGlzIHByZXNlbnQ6IHZhbHVlIG9mIFBlcmlvZEBzdGFydFxuICAvLyAyLiBpZiBwcmV2aW91cyBwZXJpb2QgZXhpc3RzIGFuZCBpdCBoYXMgQGR1cmF0aW9uOiBwcmV2aW91cyBQZXJpb2RAc3RhcnQgK1xuICAvLyAgICBwcmV2aW91cyBQZXJpb2RAZHVyYXRpb25cbiAgLy8gMy4gaWYgdGhpcyBpcyBmaXJzdCBwZXJpb2QgYW5kIE1QREB0eXBlIGlzICdzdGF0aWMnOiAwXG4gIC8vIDQuIGluIGFsbCBvdGhlciBjYXNlcywgY29uc2lkZXIgdGhlIHBlcmlvZCBhbiBcImVhcmx5IGF2YWlsYWJsZSBwZXJpb2RcIiAobm90ZTogbm90XG4gIC8vICAgIGN1cnJlbnRseSBzdXBwb3J0ZWQpXG4gIC8vICgxKVxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMuc3RhcnQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuc3RhcnQ7XG4gIH0gLy8gKDIpXG5cblxuICBpZiAocHJpb3JQZXJpb2RBdHRyaWJ1dGVzICYmIHR5cGVvZiBwcmlvclBlcmlvZEF0dHJpYnV0ZXMuc3RhcnQgPT09ICdudW1iZXInICYmIHR5cGVvZiBwcmlvclBlcmlvZEF0dHJpYnV0ZXMuZHVyYXRpb24gPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHByaW9yUGVyaW9kQXR0cmlidXRlcy5zdGFydCArIHByaW9yUGVyaW9kQXR0cmlidXRlcy5kdXJhdGlvbjtcbiAgfSAvLyAoMylcblxuXG4gIGlmICghcHJpb3JQZXJpb2RBdHRyaWJ1dGVzICYmIG1wZFR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gLy8gKDQpXG4gIC8vIFRoZXJlIGlzIGN1cnJlbnRseSBubyBsb2dpYyBmb3IgY2FsY3VsYXRpbmcgdGhlIFBlcmlvZEBzdGFydCB2YWx1ZSBpZiB0aGVyZSBpc1xuICAvLyBubyBQZXJpb2RAc3RhcnQgb3IgcHJpb3IgUGVyaW9kQHN0YXJ0IGFuZCBQZXJpb2RAZHVyYXRpb24gYXZhaWxhYmxlLiBUaGlzIGlzIG5vdCBtYWRlXG4gIC8vIGV4cGxpY2l0IGJ5IHRoZSBEQVNIIGludGVyb3AgZ3VpZGVsaW5lcyBvciB0aGUgREFTSCBzcGVjLCBob3dldmVyLCBzaW5jZSB0aGVyZSdzXG4gIC8vIG5vdGhpbmcgYWJvdXQgYW55IG90aGVyIHJlc29sdXRpb24gc3RyYXRlZ2llcywgaXQncyBpbXBsaWVkLiBUaHVzLCB0aGlzIGNhc2Ugc2hvdWxkXG4gIC8vIGJlIGNvbnNpZGVyZWQgYW4gZWFybHkgYXZhaWxhYmxlIHBlcmlvZCwgb3IgZXJyb3IsIGFuZCBudWxsIHNob3VsZCBzdWZmaWNlIGZvciBib3RoXG4gIC8vIG9mIHRob3NlIGNhc2VzLlxuXG5cbiAgcmV0dXJuIG51bGw7XG59O1xuLyoqXG4gKiBUcmF2ZXJzZXMgdGhlIG1wZCB4bWwgdHJlZSB0byBnZW5lcmF0ZSBhIGxpc3Qgb2YgUmVwcmVzZW50YXRpb24gaW5mb3JtYXRpb24gb2JqZWN0c1xuICogdGhhdCBoYXZlIGluaGVyaXRlZCBhdHRyaWJ1dGVzIGZyb20gcGFyZW50IG5vZGVzXG4gKlxuICogQHBhcmFtIHtOb2RlfSBtcGRcbiAqICAgICAgICBUaGUgcm9vdCBub2RlIG9mIHRoZSBtcGRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgICAgICAgQXZhaWxhYmxlIG9wdGlvbnMgZm9yIGluaGVyaXRBdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5tYW5pZmVzdFVyaVxuICogICAgICAgIFRoZSB1cmkgc291cmNlIG9mIHRoZSBtcGRcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLk5PV1xuICogICAgICAgIEN1cnJlbnQgdGltZSBwZXIgREFTSCBJT1AuICBEZWZhdWx0IGlzIGN1cnJlbnQgdGltZSBpbiBtcyBzaW5jZSBlcG9jaFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuY2xpZW50T2Zmc2V0XG4gKiAgICAgICAgQ2xpZW50IHRpbWUgZGlmZmVyZW5jZSBmcm9tIE5PVyAoaW4gbWlsbGlzZWNvbmRzKVxuICogQHJldHVybiB7UmVwcmVzZW50YXRpb25JbmZvcm1hdGlvbltdfVxuICogICAgICAgICBMaXN0IG9mIG9iamVjdHMgY29udGFpbmluZyBSZXByZXNlbnRhdGlvbiBpbmZvcm1hdGlvblxuICovXG5cbmNvbnN0IGluaGVyaXRBdHRyaWJ1dGVzID0gKG1wZCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBtYW5pZmVzdFVyaSA9ICcnLFxuICAgIE5PVyA9IERhdGUubm93KCksXG4gICAgY2xpZW50T2Zmc2V0ID0gMCxcbiAgICAvLyBUT0RPOiBGb3Igbm93LCB3ZSBhcmUgZXhwZWN0aW5nIGFuIGV2ZW50SGFuZGxlciBjYWxsYmFjayBmdW5jdGlvblxuICAgIC8vIHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBtcGQgcGFyc2VyIGFzIGFuIG9wdGlvbi5cbiAgICAvLyBJbiB0aGUgZnV0dXJlLCB3ZSBzaG91bGQgZW5hYmxlIHN0cmVhbSBwYXJzaW5nIGJ5IHVzaW5nIHRoZSBTdHJlYW0gY2xhc3MgZnJvbSB2aHMtdXRpbHMuXG4gICAgLy8gVGhpcyB3aWxsIHN1cHBvcnQgbmV3IGZlYXR1cmVzIGluY2x1ZGluZyBhIHN0YW5kYXJkaXplZCBldmVudCBoYW5kbGVyLlxuICAgIC8vIFNlZSB0aGUgbTN1OCBwYXJzZXIgZm9yIGV4YW1wbGVzIG9mIGhvdyBzdHJlYW0gcGFyc2luZyBpcyBjdXJyZW50bHkgdXNlZCBmb3IgSExTIHBhcnNpbmcuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZpZGVvanMvdmhzLXV0aWxzL2Jsb2IvODhkNmUxMGM2MzFlNTdhNWFmMDJjNWE2MmJjNzM3NmNkNDU2YjRmNS9zcmMvc3RyZWFtLmpzI0w5XG4gICAgZXZlbnRIYW5kbGVyID0gZnVuY3Rpb24gKCkge31cbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHBlcmlvZE5vZGVzID0gZmluZENoaWxkcmVuKG1wZCwgJ1BlcmlvZCcpO1xuXG4gIGlmICghcGVyaW9kTm9kZXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5JTlZBTElEX05VTUJFUl9PRl9QRVJJT0QpO1xuICB9XG5cbiAgY29uc3QgbG9jYXRpb25zID0gZmluZENoaWxkcmVuKG1wZCwgJ0xvY2F0aW9uJyk7XG4gIGNvbnN0IG1wZEF0dHJpYnV0ZXMgPSBwYXJzZUF0dHJpYnV0ZXMobXBkKTtcbiAgY29uc3QgbXBkQmFzZVVybHMgPSBidWlsZEJhc2VVcmxzKFt7XG4gICAgYmFzZVVybDogbWFuaWZlc3RVcmlcbiAgfV0sIGZpbmRDaGlsZHJlbihtcGQsICdCYXNlVVJMJykpO1xuICBjb25zdCBjb250ZW50U3RlZXJpbmdOb2RlcyA9IGZpbmRDaGlsZHJlbihtcGQsICdDb250ZW50U3RlZXJpbmcnKTsgLy8gU2VlIERBU0ggc3BlYyBzZWN0aW9uIDUuMy4xLjIsIFNlbWFudGljcyBvZiBNUEQgZWxlbWVudC4gRGVmYXVsdCB0eXBlIHRvICdzdGF0aWMnLlxuXG4gIG1wZEF0dHJpYnV0ZXMudHlwZSA9IG1wZEF0dHJpYnV0ZXMudHlwZSB8fCAnc3RhdGljJztcbiAgbXBkQXR0cmlidXRlcy5zb3VyY2VEdXJhdGlvbiA9IG1wZEF0dHJpYnV0ZXMubWVkaWFQcmVzZW50YXRpb25EdXJhdGlvbiB8fCAwO1xuICBtcGRBdHRyaWJ1dGVzLk5PVyA9IE5PVztcbiAgbXBkQXR0cmlidXRlcy5jbGllbnRPZmZzZXQgPSBjbGllbnRPZmZzZXQ7XG5cbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGgpIHtcbiAgICBtcGRBdHRyaWJ1dGVzLmxvY2F0aW9ucyA9IGxvY2F0aW9ucy5tYXAoZ2V0Q29udGVudCk7XG4gIH1cblxuICBjb25zdCBwZXJpb2RzID0gW107IC8vIFNpbmNlIHRvQWRhcHRhdGlvblNldHMgYWN0cyBvbiBpbmRpdmlkdWFsIHBlcmlvZHMgcmlnaHQgbm93LCB0aGUgc2ltcGxlc3QgYXBwcm9hY2ggdG9cbiAgLy8gYWRkaW5nIHByb3BlcnRpZXMgdGhhdCByZXF1aXJlIGxvb2tpbmcgYXQgcHJpb3IgcGVyaW9kcyBpcyB0byBwYXJzZSBhdHRyaWJ1dGVzIGFuZCBhZGRcbiAgLy8gbWlzc2luZyBvbmVzIGJlZm9yZSB0b0FkYXB0YXRpb25TZXRzIGlzIGNhbGxlZC4gSWYgbW9yZSBzdWNoIHByb3BlcnRpZXMgYXJlIGFkZGVkLCBpdFxuICAvLyBtYXkgYmUgYmV0dGVyIHRvIHJlZmFjdG9yIHRvQWRhcHRhdGlvblNldHMuXG5cbiAgcGVyaW9kTm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gcGFyc2VBdHRyaWJ1dGVzKG5vZGUpOyAvLyBVc2UgdGhlIGxhc3QgbW9kaWZpZWQgcHJpb3IgcGVyaW9kLCBhcyBpdCBtYXkgY29udGFpbiBhZGRlZCBpbmZvcm1hdGlvbiBuZWNlc3NhcnlcbiAgICAvLyBmb3IgdGhpcyBwZXJpb2QuXG5cbiAgICBjb25zdCBwcmlvclBlcmlvZCA9IHBlcmlvZHNbaW5kZXggLSAxXTtcbiAgICBhdHRyaWJ1dGVzLnN0YXJ0ID0gZ2V0UGVyaW9kU3RhcnQoe1xuICAgICAgYXR0cmlidXRlcyxcbiAgICAgIHByaW9yUGVyaW9kQXR0cmlidXRlczogcHJpb3JQZXJpb2QgPyBwcmlvclBlcmlvZC5hdHRyaWJ1dGVzIDogbnVsbCxcbiAgICAgIG1wZFR5cGU6IG1wZEF0dHJpYnV0ZXMudHlwZVxuICAgIH0pO1xuICAgIHBlcmlvZHMucHVzaCh7XG4gICAgICBub2RlLFxuICAgICAgYXR0cmlidXRlc1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBsb2NhdGlvbnM6IG1wZEF0dHJpYnV0ZXMubG9jYXRpb25zLFxuICAgIGNvbnRlbnRTdGVlcmluZ0luZm86IGdlbmVyYXRlQ29udGVudFN0ZWVyaW5nSW5mb3JtYXRpb24oY29udGVudFN0ZWVyaW5nTm9kZXMsIGV2ZW50SGFuZGxlciksXG4gICAgLy8gVE9ETzogVGhlcmUgYXJlIG9jY3VyZW5jZXMgd2hlcmUgdGhpcyBgcmVwcmVzZW50YXRpb25JbmZvYCBhcnJheSBjb250YWlucyB1bmRlc2lyZWRcbiAgICAvLyBkdXBsaWNhdGVzLiBUaGlzIGdlbmVyYWxseSBvY2N1cnMgd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgQmFzZVVSTCBub2RlcyB0aGF0IGFyZVxuICAgIC8vIGRpcmVjdCBjaGlsZHJlbiBvZiB0aGUgTVBEIG5vZGUuIFdoZW4gd2UgYXR0ZW1wdCB0byByZXNvbHZlIFVSTHMgZnJvbSBhIGNvbWJpbmF0aW9uIG9mIHRoZVxuICAgIC8vIHBhcmVudCBCYXNlVVJMIGFuZCBhIGNoaWxkIEJhc2VVUkwsIGFuZCB0aGUgdmFsdWUgZG9lcyBub3QgcmVzb2x2ZSxcbiAgICAvLyB3ZSBlbmQgdXAgcmV0dXJuaW5nIHRoZSBjaGlsZCBCYXNlVVJMIG11bHRpcGxlIHRpbWVzLlxuICAgIC8vIFdlIG5lZWQgdG8gZGV0ZXJtaW5lIGEgd2F5IHRvIHJlbW92ZSB0aGVzZSBkdXBsaWNhdGVzIGluIGEgc2FmZSB3YXkuXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdmlkZW9qcy9tcGQtcGFyc2VyL3B1bGwvMTcjZGlzY3Vzc2lvbl9yMTYyNzUwNTI3XG4gICAgcmVwcmVzZW50YXRpb25JbmZvOiBmbGF0dGVuKHBlcmlvZHMubWFwKHRvQWRhcHRhdGlvblNldHMobXBkQXR0cmlidXRlcywgbXBkQmFzZVVybHMpKSksXG4gICAgZXZlbnRTdHJlYW06IGZsYXR0ZW4ocGVyaW9kcy5tYXAodG9FdmVudFN0cmVhbSkpXG4gIH07XG59O1xuXG5jb25zdCBzdHJpbmdUb01wZFhtbCA9IG1hbmlmZXN0U3RyaW5nID0+IHtcbiAgaWYgKG1hbmlmZXN0U3RyaW5nID09PSAnJykge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvcnMuREFTSF9FTVBUWV9NQU5JRkVTVCk7XG4gIH1cblxuICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gIGxldCB4bWw7XG4gIGxldCBtcGQ7XG5cbiAgdHJ5IHtcbiAgICB4bWwgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG1hbmlmZXN0U3RyaW5nLCAnYXBwbGljYXRpb24veG1sJyk7XG4gICAgbXBkID0geG1sICYmIHhtbC5kb2N1bWVudEVsZW1lbnQudGFnTmFtZSA9PT0gJ01QRCcgPyB4bWwuZG9jdW1lbnRFbGVtZW50IDogbnVsbDtcbiAgfSBjYXRjaCAoZSkgey8vIGllIDExIHRocm93cyBvbiBpbnZhbGlkIHhtbFxuICB9XG5cbiAgaWYgKCFtcGQgfHwgbXBkICYmIG1wZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgncGFyc2VyZXJyb3InKS5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5EQVNIX0lOVkFMSURfWE1MKTtcbiAgfVxuXG4gIHJldHVybiBtcGQ7XG59O1xuXG4vKipcbiAqIFBhcnNlcyB0aGUgbWFuaWZlc3QgZm9yIGEgVVRDVGltaW5nIG5vZGUsIHJldHVybmluZyB0aGUgbm9kZXMgYXR0cmlidXRlcyBpZiBmb3VuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtcGRcbiAqICAgICAgICBYTUwgc3RyaW5nIG9mIHRoZSBNUEQgbWFuaWZlc3RcbiAqIEByZXR1cm4ge09iamVjdHxudWxsfVxuICogICAgICAgICBBdHRyaWJ1dGVzIG9mIFVUQ1RpbWluZyBub2RlIHNwZWNpZmllZCBpbiB0aGUgbWFuaWZlc3QuIE51bGwgaWYgbm9uZSBmb3VuZFxuICovXG5cbmNvbnN0IHBhcnNlVVRDVGltaW5nU2NoZW1lID0gbXBkID0+IHtcbiAgY29uc3QgVVRDVGltaW5nTm9kZSA9IGZpbmRDaGlsZHJlbihtcGQsICdVVENUaW1pbmcnKVswXTtcblxuICBpZiAoIVVUQ1RpbWluZ05vZGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBwYXJzZUF0dHJpYnV0ZXMoVVRDVGltaW5nTm9kZSk7XG5cbiAgc3dpdGNoIChhdHRyaWJ1dGVzLnNjaGVtZUlkVXJpKSB7XG4gICAgY2FzZSAndXJuOm1wZWc6ZGFzaDp1dGM6aHR0cC1oZWFkOjIwMTQnOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAtaGVhZDoyMDEyJzpcbiAgICAgIGF0dHJpYnV0ZXMubWV0aG9kID0gJ0hFQUQnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpodHRwLXhzZGF0ZToyMDE0JzpcbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpodHRwLWlzbzoyMDE0JzpcbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpodHRwLXhzZGF0ZToyMDEyJzpcbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpodHRwLWlzbzoyMDEyJzpcbiAgICAgIGF0dHJpYnV0ZXMubWV0aG9kID0gJ0dFVCc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmRpcmVjdDoyMDE0JzpcbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpkaXJlY3Q6MjAxMic6XG4gICAgICBhdHRyaWJ1dGVzLm1ldGhvZCA9ICdESVJFQ1QnO1xuICAgICAgYXR0cmlidXRlcy52YWx1ZSA9IERhdGUucGFyc2UoYXR0cmlidXRlcy52YWx1ZSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOmh0dHAtbnRwOjIwMTQnOlxuICAgIGNhc2UgJ3VybjptcGVnOmRhc2g6dXRjOm50cDoyMDE0JzpcbiAgICBjYXNlICd1cm46bXBlZzpkYXNoOnV0YzpzbnRwOjIwMTQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLlVOU1VQUE9SVEVEX1VUQ19USU1JTkdfU0NIRU1FKTtcbiAgfVxuXG4gIHJldHVybiBhdHRyaWJ1dGVzO1xufTtcblxuY29uc3QgVkVSU0lPTiA9IHZlcnNpb247XG4vKlxuICogR2l2ZW4gYSBEQVNIIG1hbmlmZXN0IHN0cmluZyBhbmQgb3B0aW9ucywgcGFyc2VzIHRoZSBEQVNIIG1hbmlmZXN0IGludG8gYW4gb2JqZWN0IGluIHRoZVxuICogZm9ybSBvdXRwdXRlZCBieSBtM3U4LXBhcnNlciBhbmQgYWNjZXB0ZWQgYnkgdmlkZW9qcy9odHRwLXN0cmVhbWluZy5cbiAqXG4gKiBGb3IgbGl2ZSBEQVNIIG1hbmlmZXN0cywgaWYgYHByZXZpb3VzTWFuaWZlc3RgIGlzIHByb3ZpZGVkIGluIG9wdGlvbnMsIHRoZW4gdGhlIG5ld2x5XG4gKiBwYXJzZWQgREFTSCBtYW5pZmVzdCB3aWxsIGhhdmUgaXRzIG1lZGlhIHNlcXVlbmNlIGFuZCBkaXNjb250aW51aXR5IHNlcXVlbmNlIHZhbHVlc1xuICogdXBkYXRlZCB0byByZWZsZWN0IGl0cyBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgcHJpb3IgbWFuaWZlc3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hbmlmZXN0U3RyaW5nIC0gdGhlIERBU0ggbWFuaWZlc3QgYXMgYSBzdHJpbmdcbiAqIEBwYXJhbSB7b3B0aW9uc30gW29wdGlvbnNdIC0gYW55IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtYW5pZmVzdCBvYmplY3RcbiAqL1xuXG5jb25zdCBwYXJzZSA9IChtYW5pZmVzdFN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IHBhcnNlZE1hbmlmZXN0SW5mbyA9IGluaGVyaXRBdHRyaWJ1dGVzKHN0cmluZ1RvTXBkWG1sKG1hbmlmZXN0U3RyaW5nKSwgb3B0aW9ucyk7XG4gIGNvbnN0IHBsYXlsaXN0cyA9IHRvUGxheWxpc3RzKHBhcnNlZE1hbmlmZXN0SW5mby5yZXByZXNlbnRhdGlvbkluZm8pO1xuICByZXR1cm4gdG9NM3U4KHtcbiAgICBkYXNoUGxheWxpc3RzOiBwbGF5bGlzdHMsXG4gICAgbG9jYXRpb25zOiBwYXJzZWRNYW5pZmVzdEluZm8ubG9jYXRpb25zLFxuICAgIGNvbnRlbnRTdGVlcmluZzogcGFyc2VkTWFuaWZlc3RJbmZvLmNvbnRlbnRTdGVlcmluZ0luZm8sXG4gICAgc2lkeE1hcHBpbmc6IG9wdGlvbnMuc2lkeE1hcHBpbmcsXG4gICAgcHJldmlvdXNNYW5pZmVzdDogb3B0aW9ucy5wcmV2aW91c01hbmlmZXN0LFxuICAgIGV2ZW50U3RyZWFtOiBwYXJzZWRNYW5pZmVzdEluZm8uZXZlbnRTdHJlYW1cbiAgfSk7XG59O1xuLyoqXG4gKiBQYXJzZXMgdGhlIG1hbmlmZXN0IGZvciBhIFVUQ1RpbWluZyBub2RlLCByZXR1cm5pbmcgdGhlIG5vZGVzIGF0dHJpYnV0ZXMgaWYgZm91bmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFuaWZlc3RTdHJpbmdcbiAqICAgICAgICBYTUwgc3RyaW5nIG9mIHRoZSBNUEQgbWFuaWZlc3RcbiAqIEByZXR1cm4ge09iamVjdHxudWxsfVxuICogICAgICAgICBBdHRyaWJ1dGVzIG9mIFVUQ1RpbWluZyBub2RlIHNwZWNpZmllZCBpbiB0aGUgbWFuaWZlc3QuIE51bGwgaWYgbm9uZSBmb3VuZFxuICovXG5cblxuY29uc3QgcGFyc2VVVENUaW1pbmcgPSBtYW5pZmVzdFN0cmluZyA9PiBwYXJzZVVUQ1RpbWluZ1NjaGVtZShzdHJpbmdUb01wZFhtbChtYW5pZmVzdFN0cmluZykpO1xuXG5leHBvcnQgeyBWRVJTSU9OLCBhZGRTaWR4U2VnbWVudHNUb1BsYXlsaXN0JDEgYXMgYWRkU2lkeFNlZ21lbnRzVG9QbGF5bGlzdCwgZ2VuZXJhdGVTaWR4S2V5LCBpbmhlcml0QXR0cmlidXRlcywgcGFyc2UsIHBhcnNlVVRDVGltaW5nLCBzdHJpbmdUb01wZFhtbCwgdG9NM3U4LCB0b1BsYXlsaXN0cyB9O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSBcIm1wZC1wYXJzZXJcIjtcbmV4cG9ydCB2YXIgZ2V0UGFyc2VkTWFuaWZlc3QgPSBmdW5jdGlvbiAobWFuaWZlc3RVcmkpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1hbmlmZXN0UmVzcG9uc2UsIG1hbmlmZXN0LCBwYXJzZWRNYW5pZmVzdCwgYmFuZHdpZHRocywgdmFyaWFudHM7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKG1hbmlmZXN0VXJpKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbWFuaWZlc3RSZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBtYW5pZmVzdFJlc3BvbnNlLnRleHQoKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgbWFuaWZlc3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcGFyc2VkTWFuaWZlc3QgPSBwYXJzZShtYW5pZmVzdCk7XG4gICAgICAgICAgICAgICAgYmFuZHdpZHRocyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhcmlhbnRzID0gcGFyc2VkTWFuaWZlc3QucGxheWxpc3RzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIHBsYXlsaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhbmR3aWR0aCA9IHBsYXlsaXN0LmF0dHJpYnV0ZXMuQkFORFdJRFRIO1xuICAgICAgICAgICAgICAgICAgICBiYW5kd2lkdGhzLnB1c2goYmFuZHdpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluaXRpYWxpemF0aW9uU2VnbWVudCA9IFwiLi9zZWdtZW50cy9cIi5jb25jYXQocGxheWxpc3Quc2VnbWVudHNbMF0ubWFwLnVyaSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IHBsYXlsaXN0LnNlZ21lbnRzLm1hcChmdW5jdGlvbiAoc2VnbWVudCkgeyByZXR1cm4gXCIuL3NlZ21lbnRzL1wiLmNvbmNhdChzZWdtZW50LnVyaSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGFjY3VtdWxhdG9yKSwgKF9hID0ge30sIF9hW2JhbmR3aWR0aF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlY3M6IHBsYXlsaXN0LmF0dHJpYnV0ZXMuQ09ERUNTLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudHM6IF9fc3ByZWFkQXJyYXkoW2luaXRpYWxpemF0aW9uU2VnbWVudF0sIHNlZ21lbnRzLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgfSwgX2EpKTtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHsgdmFyaWFudHM6IHZhcmlhbnRzLCBiYW5kd2lkdGhzOiBiYW5kd2lkdGhzIH1dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbiIsIi8vIHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMTgwOFxuXG4oZnVuY3Rpb24gKHJvb3QpIHtcbiAgdmFyIFVSTF9SRUdFWCA9XG4gICAgL14oPz0oKD86W2EtekEtWjAtOStcXC0uXSs6KT8pKVxcMSg/PSgoPzpcXC9cXC9bXlxcLz8jXSopPykpXFwyKD89KCg/Oig/OltePyNcXC9dKlxcLykqW147PyNcXC9dKik/KSlcXDMoKD86O1tePyNdKik/KShcXD9bXiNdKik/KCNbXl0qKT8kLztcbiAgdmFyIEZJUlNUX1NFR01FTlRfUkVHRVggPSAvXig/PShbXlxcLz8jXSopKVxcMShbXl0qKSQvO1xuICB2YXIgU0xBU0hfRE9UX1JFR0VYID0gLyg/OlxcL3xeKVxcLig/PVxcLykvZztcbiAgdmFyIFNMQVNIX0RPVF9ET1RfUkVHRVggPSAvKD86XFwvfF4pXFwuXFwuXFwvKD8hXFwuXFwuXFwvKVteXFwvXSooPz1cXC8pL2c7XG5cbiAgdmFyIFVSTFRvb2xraXQgPSB7XG4gICAgLy8gSWYgb3B0cy5hbHdheXNOb3JtYWxpemUgaXMgdHJ1ZSB0aGVuIHRoZSBwYXRoIHdpbGwgYWx3YXlzIGJlIG5vcm1hbGl6ZWQgZXZlbiB3aGVuIGl0IHN0YXJ0cyB3aXRoIC8gb3IgLy9cbiAgICAvLyBFLmdcbiAgICAvLyBXaXRoIG9wdHMuYWx3YXlzTm9ybWFsaXplID0gZmFsc2UgKGRlZmF1bHQsIHNwZWMgY29tcGxpYW50KVxuICAgIC8vIGh0dHA6Ly9hLmNvbS9iL2NkICsgL2UvZi8uLi9nID0+IGh0dHA6Ly9hLmNvbS9lL2YvLi4vZ1xuICAgIC8vIFdpdGggb3B0cy5hbHdheXNOb3JtYWxpemUgPSB0cnVlIChub3Qgc3BlYyBjb21wbGlhbnQpXG4gICAgLy8gaHR0cDovL2EuY29tL2IvY2QgKyAvZS9mLy4uL2cgPT4gaHR0cDovL2EuY29tL2UvZ1xuICAgIGJ1aWxkQWJzb2x1dGVVUkw6IGZ1bmN0aW9uIChiYXNlVVJMLCByZWxhdGl2ZVVSTCwgb3B0cykge1xuICAgICAgb3B0cyA9IG9wdHMgfHwge307XG4gICAgICAvLyByZW1vdmUgYW55IHJlbWFpbmluZyBzcGFjZSBhbmQgQ1JMRlxuICAgICAgYmFzZVVSTCA9IGJhc2VVUkwudHJpbSgpO1xuICAgICAgcmVsYXRpdmVVUkwgPSByZWxhdGl2ZVVSTC50cmltKCk7XG4gICAgICBpZiAoIXJlbGF0aXZlVVJMKSB7XG4gICAgICAgIC8vIDJhKSBJZiB0aGUgZW1iZWRkZWQgVVJMIGlzIGVudGlyZWx5IGVtcHR5LCBpdCBpbmhlcml0cyB0aGVcbiAgICAgICAgLy8gZW50aXJlIGJhc2UgVVJMIChpLmUuLCBpcyBzZXQgZXF1YWwgdG8gdGhlIGJhc2UgVVJMKVxuICAgICAgICAvLyBhbmQgd2UgYXJlIGRvbmUuXG4gICAgICAgIGlmICghb3B0cy5hbHdheXNOb3JtYWxpemUpIHtcbiAgICAgICAgICByZXR1cm4gYmFzZVVSTDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYmFzZVBhcnRzRm9yTm9ybWFsaXNlID0gVVJMVG9vbGtpdC5wYXJzZVVSTChiYXNlVVJMKTtcbiAgICAgICAgaWYgKCFiYXNlUGFydHNGb3JOb3JtYWxpc2UpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHRyeWluZyB0byBwYXJzZSBiYXNlIFVSTC4nKTtcbiAgICAgICAgfVxuICAgICAgICBiYXNlUGFydHNGb3JOb3JtYWxpc2UucGF0aCA9IFVSTFRvb2xraXQubm9ybWFsaXplUGF0aChcbiAgICAgICAgICBiYXNlUGFydHNGb3JOb3JtYWxpc2UucGF0aFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gVVJMVG9vbGtpdC5idWlsZFVSTEZyb21QYXJ0cyhiYXNlUGFydHNGb3JOb3JtYWxpc2UpO1xuICAgICAgfVxuICAgICAgdmFyIHJlbGF0aXZlUGFydHMgPSBVUkxUb29sa2l0LnBhcnNlVVJMKHJlbGF0aXZlVVJMKTtcbiAgICAgIGlmICghcmVsYXRpdmVQYXJ0cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHRyeWluZyB0byBwYXJzZSByZWxhdGl2ZSBVUkwuJyk7XG4gICAgICB9XG4gICAgICBpZiAocmVsYXRpdmVQYXJ0cy5zY2hlbWUpIHtcbiAgICAgICAgLy8gMmIpIElmIHRoZSBlbWJlZGRlZCBVUkwgc3RhcnRzIHdpdGggYSBzY2hlbWUgbmFtZSwgaXQgaXNcbiAgICAgICAgLy8gaW50ZXJwcmV0ZWQgYXMgYW4gYWJzb2x1dGUgVVJMIGFuZCB3ZSBhcmUgZG9uZS5cbiAgICAgICAgaWYgKCFvcHRzLmFsd2F5c05vcm1hbGl6ZSkge1xuICAgICAgICAgIHJldHVybiByZWxhdGl2ZVVSTDtcbiAgICAgICAgfVxuICAgICAgICByZWxhdGl2ZVBhcnRzLnBhdGggPSBVUkxUb29sa2l0Lm5vcm1hbGl6ZVBhdGgocmVsYXRpdmVQYXJ0cy5wYXRoKTtcbiAgICAgICAgcmV0dXJuIFVSTFRvb2xraXQuYnVpbGRVUkxGcm9tUGFydHMocmVsYXRpdmVQYXJ0cyk7XG4gICAgICB9XG4gICAgICB2YXIgYmFzZVBhcnRzID0gVVJMVG9vbGtpdC5wYXJzZVVSTChiYXNlVVJMKTtcbiAgICAgIGlmICghYmFzZVBhcnRzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgdHJ5aW5nIHRvIHBhcnNlIGJhc2UgVVJMLicpO1xuICAgICAgfVxuICAgICAgaWYgKCFiYXNlUGFydHMubmV0TG9jICYmIGJhc2VQYXJ0cy5wYXRoICYmIGJhc2VQYXJ0cy5wYXRoWzBdICE9PSAnLycpIHtcbiAgICAgICAgLy8gSWYgbmV0TG9jIG1pc3NpbmcgYW5kIHBhdGggZG9lc24ndCBzdGFydCB3aXRoICcvJywgYXNzdW1lIGV2ZXJ0aGluZyBiZWZvcmUgdGhlIGZpcnN0ICcvJyBpcyB0aGUgbmV0TG9jXG4gICAgICAgIC8vIFRoaXMgY2F1c2VzICdleGFtcGxlLmNvbS9hJyB0byBiZSBoYW5kbGVkIGFzICcvL2V4YW1wbGUuY29tL2EnIGluc3RlYWQgb2YgJy9leGFtcGxlLmNvbS9hJ1xuICAgICAgICB2YXIgcGF0aFBhcnRzID0gRklSU1RfU0VHTUVOVF9SRUdFWC5leGVjKGJhc2VQYXJ0cy5wYXRoKTtcbiAgICAgICAgYmFzZVBhcnRzLm5ldExvYyA9IHBhdGhQYXJ0c1sxXTtcbiAgICAgICAgYmFzZVBhcnRzLnBhdGggPSBwYXRoUGFydHNbMl07XG4gICAgICB9XG4gICAgICBpZiAoYmFzZVBhcnRzLm5ldExvYyAmJiAhYmFzZVBhcnRzLnBhdGgpIHtcbiAgICAgICAgYmFzZVBhcnRzLnBhdGggPSAnLyc7XG4gICAgICB9XG4gICAgICB2YXIgYnVpbHRQYXJ0cyA9IHtcbiAgICAgICAgLy8gMmMpIE90aGVyd2lzZSwgdGhlIGVtYmVkZGVkIFVSTCBpbmhlcml0cyB0aGUgc2NoZW1lIG9mXG4gICAgICAgIC8vIHRoZSBiYXNlIFVSTC5cbiAgICAgICAgc2NoZW1lOiBiYXNlUGFydHMuc2NoZW1lLFxuICAgICAgICBuZXRMb2M6IHJlbGF0aXZlUGFydHMubmV0TG9jLFxuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBwYXJhbXM6IHJlbGF0aXZlUGFydHMucGFyYW1zLFxuICAgICAgICBxdWVyeTogcmVsYXRpdmVQYXJ0cy5xdWVyeSxcbiAgICAgICAgZnJhZ21lbnQ6IHJlbGF0aXZlUGFydHMuZnJhZ21lbnQsXG4gICAgICB9O1xuICAgICAgaWYgKCFyZWxhdGl2ZVBhcnRzLm5ldExvYykge1xuICAgICAgICAvLyAzKSBJZiB0aGUgZW1iZWRkZWQgVVJMJ3MgPG5ldF9sb2M+IGlzIG5vbi1lbXB0eSwgd2Ugc2tpcCB0b1xuICAgICAgICAvLyBTdGVwIDcuICBPdGhlcndpc2UsIHRoZSBlbWJlZGRlZCBVUkwgaW5oZXJpdHMgdGhlIDxuZXRfbG9jPlxuICAgICAgICAvLyAoaWYgYW55KSBvZiB0aGUgYmFzZSBVUkwuXG4gICAgICAgIGJ1aWx0UGFydHMubmV0TG9jID0gYmFzZVBhcnRzLm5ldExvYztcbiAgICAgICAgLy8gNCkgSWYgdGhlIGVtYmVkZGVkIFVSTCBwYXRoIGlzIHByZWNlZGVkIGJ5IGEgc2xhc2ggXCIvXCIsIHRoZVxuICAgICAgICAvLyBwYXRoIGlzIG5vdCByZWxhdGl2ZSBhbmQgd2Ugc2tpcCB0byBTdGVwIDcuXG4gICAgICAgIGlmIChyZWxhdGl2ZVBhcnRzLnBhdGhbMF0gIT09ICcvJykge1xuICAgICAgICAgIGlmICghcmVsYXRpdmVQYXJ0cy5wYXRoKSB7XG4gICAgICAgICAgICAvLyA1KSBJZiB0aGUgZW1iZWRkZWQgVVJMIHBhdGggaXMgZW1wdHkgKGFuZCBub3QgcHJlY2VkZWQgYnkgYVxuICAgICAgICAgICAgLy8gc2xhc2gpLCB0aGVuIHRoZSBlbWJlZGRlZCBVUkwgaW5oZXJpdHMgdGhlIGJhc2UgVVJMIHBhdGhcbiAgICAgICAgICAgIGJ1aWx0UGFydHMucGF0aCA9IGJhc2VQYXJ0cy5wYXRoO1xuICAgICAgICAgICAgLy8gNWEpIGlmIHRoZSBlbWJlZGRlZCBVUkwncyA8cGFyYW1zPiBpcyBub24tZW1wdHksIHdlIHNraXAgdG9cbiAgICAgICAgICAgIC8vIHN0ZXAgNzsgb3RoZXJ3aXNlLCBpdCBpbmhlcml0cyB0aGUgPHBhcmFtcz4gb2YgdGhlIGJhc2VcbiAgICAgICAgICAgIC8vIFVSTCAoaWYgYW55KSBhbmRcbiAgICAgICAgICAgIGlmICghcmVsYXRpdmVQYXJ0cy5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgYnVpbHRQYXJ0cy5wYXJhbXMgPSBiYXNlUGFydHMucGFyYW1zO1xuICAgICAgICAgICAgICAvLyA1YikgaWYgdGhlIGVtYmVkZGVkIFVSTCdzIDxxdWVyeT4gaXMgbm9uLWVtcHR5LCB3ZSBza2lwIHRvXG4gICAgICAgICAgICAgIC8vIHN0ZXAgNzsgb3RoZXJ3aXNlLCBpdCBpbmhlcml0cyB0aGUgPHF1ZXJ5PiBvZiB0aGUgYmFzZVxuICAgICAgICAgICAgICAvLyBVUkwgKGlmIGFueSkgYW5kIHdlIHNraXAgdG8gc3RlcCA3LlxuICAgICAgICAgICAgICBpZiAoIXJlbGF0aXZlUGFydHMucXVlcnkpIHtcbiAgICAgICAgICAgICAgICBidWlsdFBhcnRzLnF1ZXJ5ID0gYmFzZVBhcnRzLnF1ZXJ5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIDYpIFRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIGJhc2UgVVJMJ3MgcGF0aCAoYW55dGhpbmdcbiAgICAgICAgICAgIC8vIGZvbGxvd2luZyB0aGUgcmlnaHRtb3N0IHNsYXNoIFwiL1wiLCBvciB0aGUgZW50aXJlIHBhdGggaWYgbm9cbiAgICAgICAgICAgIC8vIHNsYXNoIGlzIHByZXNlbnQpIGlzIHJlbW92ZWQgYW5kIHRoZSBlbWJlZGRlZCBVUkwncyBwYXRoIGlzXG4gICAgICAgICAgICAvLyBhcHBlbmRlZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgICAgICB2YXIgYmFzZVVSTFBhdGggPSBiYXNlUGFydHMucGF0aDtcbiAgICAgICAgICAgIHZhciBuZXdQYXRoID1cbiAgICAgICAgICAgICAgYmFzZVVSTFBhdGguc3Vic3RyaW5nKDAsIGJhc2VVUkxQYXRoLmxhc3RJbmRleE9mKCcvJykgKyAxKSArXG4gICAgICAgICAgICAgIHJlbGF0aXZlUGFydHMucGF0aDtcbiAgICAgICAgICAgIGJ1aWx0UGFydHMucGF0aCA9IFVSTFRvb2xraXQubm9ybWFsaXplUGF0aChuZXdQYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChidWlsdFBhcnRzLnBhdGggPT09IG51bGwpIHtcbiAgICAgICAgYnVpbHRQYXJ0cy5wYXRoID0gb3B0cy5hbHdheXNOb3JtYWxpemVcbiAgICAgICAgICA/IFVSTFRvb2xraXQubm9ybWFsaXplUGF0aChyZWxhdGl2ZVBhcnRzLnBhdGgpXG4gICAgICAgICAgOiByZWxhdGl2ZVBhcnRzLnBhdGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gVVJMVG9vbGtpdC5idWlsZFVSTEZyb21QYXJ0cyhidWlsdFBhcnRzKTtcbiAgICB9LFxuICAgIHBhcnNlVVJMOiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICB2YXIgcGFydHMgPSBVUkxfUkVHRVguZXhlYyh1cmwpO1xuICAgICAgaWYgKCFwYXJ0cykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNjaGVtZTogcGFydHNbMV0gfHwgJycsXG4gICAgICAgIG5ldExvYzogcGFydHNbMl0gfHwgJycsXG4gICAgICAgIHBhdGg6IHBhcnRzWzNdIHx8ICcnLFxuICAgICAgICBwYXJhbXM6IHBhcnRzWzRdIHx8ICcnLFxuICAgICAgICBxdWVyeTogcGFydHNbNV0gfHwgJycsXG4gICAgICAgIGZyYWdtZW50OiBwYXJ0c1s2XSB8fCAnJyxcbiAgICAgIH07XG4gICAgfSxcbiAgICBub3JtYWxpemVQYXRoOiBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgLy8gVGhlIGZvbGxvd2luZyBvcGVyYXRpb25zIGFyZVxuICAgICAgLy8gdGhlbiBhcHBsaWVkLCBpbiBvcmRlciwgdG8gdGhlIG5ldyBwYXRoOlxuICAgICAgLy8gNmEpIEFsbCBvY2N1cnJlbmNlcyBvZiBcIi4vXCIsIHdoZXJlIFwiLlwiIGlzIGEgY29tcGxldGUgcGF0aFxuICAgICAgLy8gc2VnbWVudCwgYXJlIHJlbW92ZWQuXG4gICAgICAvLyA2YikgSWYgdGhlIHBhdGggZW5kcyB3aXRoIFwiLlwiIGFzIGEgY29tcGxldGUgcGF0aCBzZWdtZW50LFxuICAgICAgLy8gdGhhdCBcIi5cIiBpcyByZW1vdmVkLlxuICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKS5yZXBsYWNlKFNMQVNIX0RPVF9SRUdFWCwgJycpO1xuICAgICAgLy8gNmMpIEFsbCBvY2N1cnJlbmNlcyBvZiBcIjxzZWdtZW50Pi8uLi9cIiwgd2hlcmUgPHNlZ21lbnQ+IGlzIGFcbiAgICAgIC8vIGNvbXBsZXRlIHBhdGggc2VnbWVudCBub3QgZXF1YWwgdG8gXCIuLlwiLCBhcmUgcmVtb3ZlZC5cbiAgICAgIC8vIFJlbW92YWwgb2YgdGhlc2UgcGF0aCBzZWdtZW50cyBpcyBwZXJmb3JtZWQgaXRlcmF0aXZlbHksXG4gICAgICAvLyByZW1vdmluZyB0aGUgbGVmdG1vc3QgbWF0Y2hpbmcgcGF0dGVybiBvbiBlYWNoIGl0ZXJhdGlvbixcbiAgICAgIC8vIHVudGlsIG5vIG1hdGNoaW5nIHBhdHRlcm4gcmVtYWlucy5cbiAgICAgIC8vIDZkKSBJZiB0aGUgcGF0aCBlbmRzIHdpdGggXCI8c2VnbWVudD4vLi5cIiwgd2hlcmUgPHNlZ21lbnQ+IGlzIGFcbiAgICAgIC8vIGNvbXBsZXRlIHBhdGggc2VnbWVudCBub3QgZXF1YWwgdG8gXCIuLlwiLCB0aGF0XG4gICAgICAvLyBcIjxzZWdtZW50Pi8uLlwiIGlzIHJlbW92ZWQuXG4gICAgICB3aGlsZSAoXG4gICAgICAgIHBhdGgubGVuZ3RoICE9PSAocGF0aCA9IHBhdGgucmVwbGFjZShTTEFTSF9ET1RfRE9UX1JFR0VYLCAnJykpLmxlbmd0aFxuICAgICAgKSB7fVxuICAgICAgcmV0dXJuIHBhdGguc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgICB9LFxuICAgIGJ1aWxkVVJMRnJvbVBhcnRzOiBmdW5jdGlvbiAocGFydHMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHBhcnRzLnNjaGVtZSArXG4gICAgICAgIHBhcnRzLm5ldExvYyArXG4gICAgICAgIHBhcnRzLnBhdGggK1xuICAgICAgICBwYXJ0cy5wYXJhbXMgK1xuICAgICAgICBwYXJ0cy5xdWVyeSArXG4gICAgICAgIHBhcnRzLmZyYWdtZW50XG4gICAgICApO1xuICAgIH0sXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JylcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFVSTFRvb2xraXQ7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBVUkxUb29sa2l0O1xuICAgIH0pO1xuICBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIGV4cG9ydHNbJ1VSTFRvb2xraXQnXSA9IFVSTFRvb2xraXQ7XG4gIGVsc2Ugcm9vdFsnVVJMVG9vbGtpdCddID0gVVJMVG9vbGtpdDtcbn0pKHRoaXMpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgZ2V0UGFyc2VkTWFuaWZlc3QgfSBmcm9tIFwiLi9zcmMvbXBkLXBhcnNlclwiO1xudmFyIHN0YXJ0UGxheWJhY2sgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGdldE1wNERhdGEobXA0VXJpKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtcDRSZXNwb25zZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2gobXA0VXJpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1wNFJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1wNFJlc3BvbnNlLmFycmF5QnVmZmVyKCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXRpbGl0eUJhc2VkU2VsZWN0aW9uKGJ1ZmZlckxldmVsLCBiYW5kd2lkdGhzKSB7XG4gICAgICAgIHZhciBoaWdoZXN0VXRpbGl0eSA9IC1JbmZpbml0eTtcbiAgICAgICAgdmFyIHF1YWxpdHkgPSAwO1xuICAgICAgICAvLyBVdGlsaXR5LWJhc2VkIHF1YWxpdHkgc2VsZWN0aW9uXG4gICAgICAgIGZvciAodmFyIGlfMSA9IDA7IGlfMSA8IGJhbmR3aWR0aHMubGVuZ3RoOyBpXzErKykge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHV0aWxpdHkgZm9yIGVhY2ggdmFyaWFudFxuICAgICAgICAgICAgdmFyIHV0aWxpdHkgPSAoYmFuZHdpZHRoc1tpXzFdIC0gYmFuZHdpZHRoc1swXSkgLyBiYW5kd2lkdGhzWzBdICtcbiAgICAgICAgICAgICAgICAoYnVmZmVyTGV2ZWwgLSByZXNlcnZvaXIpIC8gY3VzaGlvbjtcbiAgICAgICAgICAgIGlmICh1dGlsaXR5ID4gaGlnaGVzdFV0aWxpdHkpIHtcbiAgICAgICAgICAgICAgICBoaWdoZXN0VXRpbGl0eSA9IHV0aWxpdHk7XG4gICAgICAgICAgICAgICAgcXVhbGl0eSA9IGlfMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVhbGl0eTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2VsZWN0Qk9MQXZhcmlhbnQoYnVmZmVyTGV2ZWwsIHZhcmlhbnRzKSB7XG4gICAgICAgIHZhciBxdWFsaXR5ID0gMDtcbiAgICAgICAgaWYgKGJ1ZmZlckxldmVsIDwgcmVzZXJ2b2lyKSB7XG4gICAgICAgICAgICBxdWFsaXR5ID0gMDsgLy8gTG93ZXN0IHF1YWxpdHlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChidWZmZXJMZXZlbCA+IHJlc2Vydm9pciArIGN1c2hpb24pIHtcbiAgICAgICAgICAgIHF1YWxpdHkgPSBiYW5kd2lkdGhzLmxlbmd0aCAtIDE7IC8vIEhpZ2hlc3QgcXVhbGl0eVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcXVhbGl0eSA9IHV0aWxpdHlCYXNlZFNlbGVjdGlvbihidWZmZXJMZXZlbCwgYmFuZHdpZHRocyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhcmlhbnRzW2JhbmR3aWR0aHNbcXVhbGl0eV1dO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCdWZmZXJJbmZvKGJ1ZmZlcmVkKSB7XG4gICAgICAgIHZhciByZXQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaV8yID0gMDsgaV8yIDwgYnVmZmVyZWQubGVuZ3RoOyBpXzIrKykge1xuICAgICAgICAgICAgcmV0LnB1c2goeyBzdGFydDogYnVmZmVyZWQuc3RhcnQoaV8yKSwgZW5kOiBidWZmZXJlZC5lbmQoaV8yKSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVCdWZmZXJMZXZlbChidWZmZXJlZCkge1xuICAgICAgICB2YXIgYnVmZmVySW5mbyA9IGNhbGN1bGF0ZUJ1ZmZlckluZm8oYnVmZmVyZWQpO1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSB2aWRlby5jdXJyZW50VGltZTtcbiAgICAgICAgaWYgKCFidWZmZXJJbmZvLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJ1ZmZlckxldmVsID0gMDtcbiAgICAgICAgdmFyIF9hID0gYnVmZmVySW5mb1tidWZmZXJJbmZvLmxlbmd0aCAtIDFdLCBlbmQgPSBfYS5lbmQsIHN0YXJ0ID0gX2Euc3RhcnQ7XG4gICAgICAgIGlmIChjdXJyZW50VGltZSA8IGVuZCAmJiBjdXJyZW50VGltZSA+PSBzdGFydCkge1xuICAgICAgICAgICAgYnVmZmVyTGV2ZWwgPSBlbmQgLSBjdXJyZW50VGltZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmZmVyTGV2ZWw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrQnVmZmVyQW5kU2VsZWN0VmFyaWFudChidWZmZXJlZCkge1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGN1cnJlbnQgYnVmZmVyIHNpemVcbiAgICAgICAgdmFyIGJ1ZmZlckxldmVsID0gY2FsY3VsYXRlQnVmZmVyTGV2ZWwoYnVmZmVyZWQpO1xuICAgICAgICAvLyBTZWxlY3QgdGhlIG9wdGltYWwgdmFyaWFudCBiYXNlZCBvbiBCT0xBXG4gICAgICAgIHZhciBvcHRpbWFsVmFyaWFudCA9IHNlbGVjdEJPTEF2YXJpYW50KGJ1ZmZlckxldmVsLCB2YXJpYW50cyk7XG4gICAgICAgIHJldHVybiBvcHRpbWFsVmFyaWFudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3dpdGNoVmFyaWFudChuZXdWYXJpYW50LCBzb3VyY2VCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluaXRTZWdtZW50LCBmaXJzdFNlZ21lbnQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnQgPSBuZXdWYXJpYW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFNlZ21lbnQgPSBuZXdWYXJpYW50LnNlZ21lbnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhc291cmNlQnVmZmVyLnVwZGF0aW5nKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldE1wNERhdGEoaW5pdFNlZ21lbnQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RTZWdtZW50ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFwcGVuZEJ1ZmZlcihmaXJzdFNlZ21lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNlZ21lbnRzKHNvdXJjZUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW1hbFZhcmlhbnQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWFsVmFyaWFudCA9IGNoZWNrQnVmZmVyQW5kU2VsZWN0VmFyaWFudChzb3VyY2VCdWZmZXIuYnVmZmVyZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoaSAhPT0gMCAmJiBvcHRpbWFsVmFyaWFudC5zZWdtZW50c1swXSAhPT0gc2VsZWN0ZWRWYXJpYW50LnNlZ21lbnRzWzBdKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzd2l0Y2hWYXJpYW50KG9wdGltYWxWYXJpYW50LCBzb3VyY2VCdWZmZXIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBvcHRpbWFsVmFyaWFudC5zZWdtZW50c107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblNvdXJjZU9wZW4oKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2VCdWZmZXIsIGZpcnN0U2VnbWVudDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodmlkZW8uc3JjKTsgLy8gUmV2b2tlIE9iamVjdCBVUkwgZm9yIGdhcmJhZ2UgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyID0gbWVkaWFTb3VyY2UuYWRkU291cmNlQnVmZmVyKG1pbWVDb2RlYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZWVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFNlZ21lbnRVcmksIG5leHRTZWdtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISghc291cmNlQnVmZmVyLnVwZGF0aW5nICYmIGkgIT09IHNlZ21lbnRzLmxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRTZWdtZW50cyhzb3VyY2VCdWZmZXIpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISghc291cmNlQnVmZmVyLnVwZGF0aW5nICYmIGkgIT09IHNlZ21lbnRzLmxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2VnbWVudFVyaSA9IHNlZ21lbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRNcDREYXRhKG5leHRTZWdtZW50VXJpKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2VnbWVudCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFwcGVuZEJ1ZmZlcihuZXh0U2VnbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lZGlhU291cmNlLnJlYWR5U3RhdGUgPT09IFwib3BlblwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc291cmNlQnVmZmVyLnVwZGF0aW5nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID09PSBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhU291cmNlLmVuZE9mU3RyZWFtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0TXA0RGF0YShtcDRJbml0aWFsaXphdGlvblVyaSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFNlZ21lbnQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VCdWZmZXIuYXBwZW5kQnVmZmVyKGZpcnN0U2VnbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgdmlkZW8sIF9hLCB2YXJpYW50cywgYmFuZHdpZHRocywgc2VsZWN0ZWRWYXJpYW50LCBpbml0aWFsaXphdGlvblNlZ21lbnQsIGNvZGVjcywgc2VnbWVudHMsIG1wNEluaXRpYWxpemF0aW9uVXJpLCBtaW1lQ29kZWMsIG1lZGlhU291cmNlLCB1cmwsIHJlc2Vydm9pciwgY3VzaGlvbiwgaTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcbiAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9IFwiNjQwcHhcIjtcbiAgICAgICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQodmlkZW8pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFBhcnNlZE1hbmlmZXN0KFwiLi9zZWdtZW50cy9CaWdCdWNrQnVubnkubXBkXCIpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKSwgdmFyaWFudHMgPSBfYS52YXJpYW50cywgYmFuZHdpZHRocyA9IF9hLmJhbmR3aWR0aHM7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYW50ID0gdmFyaWFudHNbYmFuZHdpZHRoc1swXV07XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6YXRpb25TZWdtZW50ID0gc2VsZWN0ZWRWYXJpYW50LnNlZ21lbnRzWzBdO1xuICAgICAgICAgICAgICAgIGNvZGVjcyA9IHNlbGVjdGVkVmFyaWFudC5jb2RlY3M7XG4gICAgICAgICAgICAgICAgc2VnbWVudHMgPSBzZWxlY3RlZFZhcmlhbnQuc2VnbWVudHM7XG4gICAgICAgICAgICAgICAgbXA0SW5pdGlhbGl6YXRpb25VcmkgPSBpbml0aWFsaXphdGlvblNlZ21lbnQ7XG4gICAgICAgICAgICAgICAgbWltZUNvZGVjID0gXCJ2aWRlby9tcDQ7IGNvZGVjcz1cXFwiXCIuY29uY2F0KGNvZGVjcywgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICghTWVkaWFTb3VyY2UuaXNUeXBlU3VwcG9ydGVkKG1pbWVDb2RlYykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuc3VwcG9ydGVkIG1lZGlhIGZvcm1hdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtZWRpYVNvdXJjZSA9IG5ldyBNZWRpYVNvdXJjZSgpO1xuICAgICAgICAgICAgICAgIHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG1lZGlhU291cmNlKTtcbiAgICAgICAgICAgICAgICB2aWRlby5zcmMgPSB1cmw7XG4gICAgICAgICAgICAgICAgcmVzZXJ2b2lyID0gMztcbiAgICAgICAgICAgICAgICBjdXNoaW9uID0gMjtcbiAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgICBtZWRpYVNvdXJjZS5hZGRFdmVudExpc3RlbmVyKFwic291cmNlb3BlblwiLCBvblNvdXJjZU9wZW4uYmluZChtZWRpYVNvdXJjZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5zdGFydFBsYXliYWNrKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=