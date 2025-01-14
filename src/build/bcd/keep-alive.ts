export const forceKeepAlive: Record<string, string[]> = {
  // Things that are incorrectly reported as unsupported.
  // These should be filed to https://github.com/mdn/browser-compat-data/issues
  BeforeUnloadEvent: ["returnValue"],
  console: [
    "assert",
    "clear",
    "count",
    "countReset",
    "debug",
    "dir",
    "dirxml",
    "error",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeLog",
    "timeStamp",
    "trace",
    "warn",
  ],
  CSSGroupingRule: ["cssRules", "deleteRule", "insertRule"],
  CSSStyleDeclaration: [
    "alignContent",
    "alignItems",
    "alignSelf",
    "alignmentBaseline",
    "baselineShift",
    "breakAfter",
    "breakBefore",
    "breakInside",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "columnGap",
    "dominantBaseline",
    "fill",
    "fillOpacity",
    "fillRule",
    "floodColor",
    "floodOpacity",
    "fontSizeAdjust",
    "fontVariantPosition",
    "gap",
    "gridColumnGap",
    "gridGap",
    "gridRowGap",
    "justifyContent",
    "justifyItems",
    "justifySelf",
    "lightingColor",
    "marker",
    "markerEnd",
    "markerMid",
    "markerStart",
    "placeContent",
    "placeItems",
    "placeSelf",
    "rotate",
    "rowGap",
    "scale",
    "shapeRendering",
    "stopColor",
    "stopOpacity",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "textAnchor",
    "translate",
    "webkitAlignContent",
    "webkitAlignItems",
    "webkitAlignSelf",
    "webkitJustifyContent",
    "webkitMaskBoxImageOutset",
    "webkitMaskBoxImageRepeat",
    "webkitMaskBoxImageSlice",
    "webkitMaskBoxImageSource",
    "webkitMaskBoxImageWidth",
    "wordWrap", // TODO: Support for alternative names
  ],
  CloseEvent: ["code", "reason", "wasClean"],
  DOMRectList: ["item", "length"],
  DOMMatrix: ["fromFloat32Array", "fromFloat64Array", "fromMatrix"],
  DOMRect: ["fromRect"],
  Document: ["charset", "inputEncoding"],
  Element: ["webkitMatchesSelector"],
  FileReader: ["onloadstart"],
  Gamepad: ["hapticActuators"],
  GlobalEventHandlers: [
    "ontoggle",
    "onwebkitanimationend",
    "onwebkitanimationiteration",
    "onwebkitanimationstart",
    "onwebkittransitionend",
  ],
  HTMLIFrameElement: ["allowPaymentRequest"],
  KeyframeEffect: ["iterationComposite"],
  MediaCapabilities: ["encodingInfo"],
  MutationEvent: [
    "attrChange",
    "attrName",
    "newValue",
    "prevValue",
    "relatedNode",
    "initMutationEvent",
    "ADDITION",
    "MODIFICATION",
    "REMOVAL",
  ],
  PaymentRequest: ["shippingAddress"],
  PictureInPictureWindow: [
    "requestPictureInPicture",
    "onenterpictureinpicture",
    "onleavepictureinpicture",
    "autoPictureInPicture",
    "disablePictureInPicture",
  ],
  Request: ["keepalive"],
  RTCDtlsTransport: ["onstatechange", "state"],
  RTCPeerConnection: ["canTrickleIceCandidates"],
  SVGAnimatedTransformList: ["animVal", "baseVal"],
  SVGElement: ["ownerSVGElement", "viewportElement"],
  SVGTransformList: [
    "numberOfItems",
    "appendItem",
    "clear",
    "consolidate",
    "createSVGTransformFromMatrix",
    "getItem",
    "initialize",
    "insertItemBefore",
    "removeItem",
    "replaceItem",
  ],
  SpeechSynthesisEvent: ["charLength"],
  WebAssembly: [
    "compile",
    "compileStreaming",
    "instantiate",
    "instantiateStreaming",
    "validate",
  ],
  WebGLRenderingContextBase: ["lineWidth"],
  WebGL2RenderingContextOverloads: [
    // These are implemented in WebGLRenderingContext and WebGL2RenderingContext separately
    // but BCD only have them in WebGLRenderingContext
    "bufferData",
    "compressedTexImage2D",
    "compressedTexSubImage2D",
    "readPixels",
    "texImage2D",
    "texSubImage2D",
    "uniform1fv",
    "uniform1iv",
    "uniform2fv",
    "uniform2iv",
    "uniform3fv",
    "uniform3iv",
    "uniform4fv",
    "uniform4iv",
  ],
  WindowEventHandlers: ["onoffline", "ononline", "onpagehide", "onpageshow"],
  WorkerGlobalScope: ["onrejectionhandled", "onunhandledrejection"],
  WorkletGlobalScope: [],
  // (WebAssembly namespace members)
  // TODO: Shouldn't these be inside "WebAssembly"?
  Instance: ["exports"],
  Global: ["value", "valueOf"],
  Memory: ["buffer", "grow"],
  Module: ["customSections", "exports", "imports"],
  Table: ["length", "get", "grow", "set"],

  // Widely supported but without being correctly exposed to global
  WritableStreamDefaultController: ["error"],
};
