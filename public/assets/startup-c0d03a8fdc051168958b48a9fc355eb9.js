define("startup/adapters/application",["exports","ember-data","startup/config/environment"],function(e,t,a){"use strict";e["default"]=t["default"].ActiveModelAdapter.extend({host:a["default"].host})}),define("startup/app",["exports","ember","ember/resolver","ember/load-initializers","startup/config/environment"],function(e,t,a,r,n){"use strict";var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),r["default"](i,n["default"].modulePrefix),e["default"]=i}),define("startup/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("startup/controllers/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({signed_up:!1,invalid_email:!1,invalid_user_type:!1,prompt:"I'm a...",actions:{signup:function(){var e=this.get("email"),t=this.get("user_type"),a=this.validate(e,t);if(a){ga("send","signup",{email:e,user_type:t,hitCallback:function(){console.log("Logged signup via GA")}});var r=this.store.createRecord("user",{email:e,user_type:t});r.save(),this.set("signed_up",!0)}},set_user_type:function(e){this.set("user_type",e)}},validate:function(e,t){var a=this.isEmailValid(e);this.set("invalid_email",!a);var r=this.isUserTypeValid(t);return this.set("invalid_user_type",!r),a&&r},isUserTypeValid:function(e){return null!=e&&void 0!==e},isEmailValid:function(e){var t="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";return void 0!==e&&null!=e.match(t)}})}),define("startup/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("startup/initializers/export-application-global",["exports","ember","startup/config/environment"],function(e,t,a){"use strict";function r(e,r){var n=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[n]&&(window[n]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("startup/instance-initializers/app-version",["exports","startup/config/environment","ember"],function(e,t,a){"use strict";var r=a["default"].String.classify,n=!1;e["default"]={name:"App Version",initialize:function(e){if(!n){var i=r(e.toString());a["default"].libraries.register(i,t["default"].APP.version),n=!0}}}}),define("startup/mixins/google-pageview",["exports","ember","startup/config/environment"],function(e,t,a){"use strict";e["default"]=t["default"].Mixin.create({pageviewToGA:function(e,r){var e=e?e:this.get("url"),r=r?r:this.get("url");if(null!=t["default"].get(a["default"],"googleAnalytics.webPropertyId")){var n=t["default"].getWithDefault(a["default"],"googleAnalytics.tracker","analytics.js");if("analytics.js"===n){var i=t["default"].getWithDefault(a["default"],"googleAnalytics.globalVariable","ga");window[i]("send","pageview",{page:e,title:r})}else"ga.js"===n&&window._gaq.push(["_trackPageview"])}}.on("didTransition")})}),define("startup/models/user",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].Model.extend({email:t["default"].attr("string"),user_type:t["default"].attr("string")})}),define("startup/router",["exports","ember","startup/config/environment","startup/mixins/google-pageview"],function(e,t,a,r){"use strict";var n=t["default"].Router.extend(r["default"],{location:a["default"].locationType,notifyGoogleAnalytics:function(){return ga("send","pageview",{page:this.get("url"),title:this.get("url")})}.on("didTransition")});n.map(function(){this.route("about")}),e["default"]=n}),define("startup/routes/about",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("startup/routes/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({})}),define("startup/templates/about",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:4,column:40},end:{line:4,column:125}},moduleName:"startup/templates/about.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createElement("i");e.setAttribute(a,"class","large left arrow icon"),e.appendChild(t,a);var a=e.createTextNode(" ");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:41,column:10}},moduleName:"startup/templates/about.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","ui inverted blue center aligned compact page grid");var r=e.createTextNode("\n	");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","ui segments"),e.setAttribute(r,"style","margin-top: 15%; padding:0px");var n=e.createTextNode("\n		");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","ui center aligned inverted black segment"),e.setAttribute(n,"style","width: 100%; margin-bottom:-1px");var i=e.createTextNode("\n			");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","ui left floated header");var d=e.createTextNode(" ");e.appendChild(i,d);var d=e.createComment("");e.appendChild(i,d);var d=e.createTextNode(" ");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("		\n			");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","ui huge inverted header"),e.setAttribute(i,"style","margin-right: 6%");var d=e.createTextNode(" ");e.appendChild(i,d);var d=e.createElement("i");e.setAttribute(d,"class","users icon"),e.appendChild(i,d);var d=e.createTextNode(" Our Team ");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n		");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("			\n		");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","ui inverted black horizontal segments");var i=e.createTextNode("\n			  ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","ui center aligned inverted black segment");var d=e.createTextNode("\n			  	");e.appendChild(i,d);var d=e.createElement("img");e.setAttribute(d,"class","ui medium circular centered image"),e.setAttribute(d,"src","assets/images/sid-5ea1c2d4975e7e0e8da2005aaefd6c52.jpg"),e.appendChild(i,d);var d=e.createTextNode("\n			    ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","ui huge inverted header");var l=e.createTextNode("Sid Murching ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode(" \n			    ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","ui inverted header");var l=e.createTextNode(" Sid is a rising junior at Caltech and ex-Apple intern interested in\n			    	machine learning and math.\n			    ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n				");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"target","_blank"),e.setAttribute(d,"href","https://www.linkedin.com/pub/siddharth-murching/23/637/254");var l=e.createTextNode(" ");e.appendChild(d,l);var l=e.createElement("i");e.setAttribute(l,"class","circular large link inverted blue linkedin icon"),e.appendChild(d,l);var l=e.createTextNode(" ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n				");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"target","_blank"),e.setAttribute(d,"href","http://github.com/friendlymustache");var l=e.createTextNode(" ");e.appendChild(d,l);var l=e.createElement("i");e.setAttribute(l,"class","circular large link inverted blue github icon"),e.appendChild(d,l);var l=e.createTextNode(" ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n			  ");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n\n			  ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","ui center aligned inverted black segment");var d=e.createTextNode("\n			  	");e.appendChild(i,d);var d=e.createElement("img");e.setAttribute(d,"class","ui medium circular centered image"),e.setAttribute(d,"src","assets/images/vansh-692775ed40b57fdccd3cce33dfad1483.jpg"),e.appendChild(i,d);var d=e.createTextNode("\n			    ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","ui huge inverted header");var l=e.createTextNode("Vansh Kumar ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode(" \n			    ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","ui inverted header");var l=e.createTextNode(" Vansh is a rising senior at Caltech and ex-Google intern interested in\n			    	systems and algorithms.\n			    ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n				");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"target","_blank"),e.setAttribute(d,"href","https://www.linkedin.com/pub/vansh-kumar/37/a7/a45");var l=e.createTextNode(" ");e.appendChild(d,l);var l=e.createElement("i");e.setAttribute(l,"class","circular large link inverted blue linkedin icon"),e.appendChild(d,l);var l=e.createTextNode(" ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n				");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"target","_blank"),e.setAttribute(d,"href","https://github.com/vanshkumar");var l=e.createTextNode(" ");e.appendChild(d,l);var l=e.createElement("i");e.setAttribute(l,"class","circular large link inverted blue github icon"),e.appendChild(d,l);var l=e.createTextNode(" ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n			  ");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n\n			  ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","ui center aligned inverted black segment");var d=e.createTextNode("\n			  	");e.appendChild(i,d);var d=e.createElement("img");e.setAttribute(d,"class","ui medium circular centered image"),e.setAttribute(d,"src","assets/images/vishal-37e30cc23338f8b376a08fd7e1f15253.jpg"),e.appendChild(i,d);var d=e.createTextNode("\n			    ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","ui huge inverted header");var l=e.createTextNode("Vishal Talasani ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode(" \n			    ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","ui inverted header");var l=e.createTextNode(" Vishal is a rising sophomore at UChicago interested in\n			    	applied math and business development.\n			    ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n				");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"target","_blank"),e.setAttribute(d,"href","http://www.linkedin.com/in/vtalasani");var l=e.createTextNode(" ");e.appendChild(d,l);var l=e.createElement("i");e.setAttribute(l,"class","circular large link inverted blue linkedin icon"),e.appendChild(d,l);var l=e.createTextNode(" ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n				");e.appendChild(i,d);var d=e.createElement("a");e.setAttribute(d,"target","_blank"),e.setAttribute(d,"href","http://github.com/Lahsiv");var l=e.createTextNode(" ");e.appendChild(d,l);var l=e.createElement("i");e.setAttribute(l,"class","circular large link inverted blue github icon"),e.appendChild(d,l);var l=e.createTextNode(" ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n			  ");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("    \n		");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n	");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("		\n\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=new Array(2);return r[0]=e.createMorphAt(e.childAt(t,[0,1,1,1]),1,1),r[1]=e.createMorphAt(t,2,2,a),e.insertBoundary(t,null),r},statements:[["block","link-to",["index"],["class","ui left floated link"],0,null,["loc",[null,[4,40],[4,137]]]],["content","outlet",["loc",[null,[41,0],[41,10]]]]],locals:[],templates:[e]}}())}),define("startup/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:3,column:6}},moduleName:"startup/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","ui fluid segment"),e.setAttribute(a,"id","lp-image-content");var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n");return e.appendChild(a,r),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[0]),1,1),r},statements:[["content","outlet",["loc",[null,[2,0],[2,10]]]]],locals:[],templates:[]}}())}),define("startup/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:18,column:2},end:{line:24,column:2}},moduleName:"startup/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("			");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","ui message");var r=e.createTextNode(" \n				");e.appendChild(a,r);var r=e.createElement("i");e.setAttribute(r,"class","green checkmark icon"),e.appendChild(a,r);var r=e.createTextNode(" \n				Thanks for signing up! \n				We'll be in touch soon ");e.appendChild(a,r);var r=e.createElement("i");e.setAttribute(r,"class","smile icon"),e.appendChild(a,r);var r=e.createTextNode(" \n			");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){var e=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:27,column:5},end:{line:31,column:5}},moduleName:"startup/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("			  	");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","field");var r=e.createTextNode("\n			  		");e.appendChild(a,r);var r=e.createElement("div"),n=e.createTextNode(" Please select an option that describes you ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n			  	");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:67,column:5},end:{line:71,column:5}},moduleName:"startup/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("			  	");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","field");var r=e.createTextNode("\n			  		");e.appendChild(a,r);var r=e.createElement("div"),n=e.createTextNode(" Please enter a valid email ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n			  	");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:24,column:2},end:{line:80,column:2}},moduleName:"startup/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("			");e.appendChild(t,a);var a=e.createElement("form");e.setAttribute(a,"class","ui form");var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("				");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","inverted field");var n=e.createTextNode("\n					  ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","ui fluid labeled selection dropdown");var i=e.createTextNode("\n					    ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","text");var d=e.createTextNode("\n					      I'm a...\n					    ");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n					    ");e.appendChild(n,i);var i=e.createElement("i");e.setAttribute(i,"class","dropdown icon"),e.appendChild(n,i);var i=e.createTextNode("\n					    ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","menu");var d=e.createTextNode("\n					    ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","header");var l=e.createTextNode("\n					      I'm a...\n					    ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("		\n			      		  ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","item");var l=e.createTextNode("\n						      ");e.appendChild(d,l);var l=e.createElement("i");e.setAttribute(l,"class","child icon"),e.appendChild(d,l);var l=e.createTextNode("\n						      High Schooler\n					      ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("					    			    \n					      ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","item");var l=e.createTextNode("\n						      ");e.appendChild(d,l);var l=e.createElement("i");e.setAttribute(l,"class","student icon"),e.appendChild(d,l);var l=e.createTextNode("\n						      College Student\n					      ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n					      ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","item"),e.setAttribute(d,"data-value","1");var l=e.createTextNode("\n						      ");e.appendChild(d,l);var l=e.createElement("i");e.setAttribute(l,"class","user icon"),e.appendChild(d,l);var l=e.createTextNode("\n						      Parent\n					      ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n					      ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","item"),e.setAttribute(d,"data-value","1");var l=e.createTextNode("\n						      ");e.appendChild(d,l);var l=e.createElement("i");e.setAttribute(l,"class","idea icon"),e.appendChild(d,l);var l=e.createTextNode("\n						      Teacher\n					      ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n					      ");e.appendChild(i,d);var d=e.createElement("div");e.setAttribute(d,"class","item"),e.setAttribute(d,"data-value","1");var l=e.createTextNode("\n						      ");e.appendChild(d,l);var l=e.createElement("i");e.setAttribute(l,"class","users icon"),e.appendChild(d,l);var l=e.createTextNode("\n						      Guidance Counselor\n					      ");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("					      \n\n					    ");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n					  ");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n				");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("				");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","field");var n=e.createTextNode("\n					");e.appendChild(r,n);var n=e.createElement("div"),i=e.createTextNode("			\n						  ");e.appendChild(n,i);var i=e.createElement("i");e.appendChild(n,i);var i=e.createTextNode("\n						  ");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i);var i=e.createTextNode("	\n						");e.appendChild(n,i);var i=e.createElement("button");e.setAttribute(i,"class","ui red button"),e.setAttribute(i,"type","submit");var d=e.createTextNode(" Sign up ");e.appendChild(i,d),e.appendChild(n,i);var i=e.createTextNode("\n					");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n				");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n			");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=e.childAt(t,[1]),n=e.childAt(r,[3,1,5]),i=e.childAt(n,[3]),d=e.childAt(n,[5]),l=e.childAt(n,[7]),c=e.childAt(n,[9]),p=e.childAt(n,[11]),s=e.childAt(r,[7,1]),o=e.childAt(s,[1]),u=new Array(11);return u[0]=e.createElementMorph(r),u[1]=e.createMorphAt(r,1,1),u[2]=e.createElementMorph(i),u[3]=e.createElementMorph(d),u[4]=e.createElementMorph(l),u[5]=e.createElementMorph(c),u[6]=e.createElementMorph(p),u[7]=e.createMorphAt(r,5,5),u[8]=e.createAttrMorph(s,"class"),u[9]=e.createAttrMorph(o,"class"),u[10]=e.createMorphAt(s,3,3),u},statements:[["element","action",["signup"],["on","submit"],["loc",[null,[25,9],[25,40]]]],["block","if",[["get","invalid_user_type",["loc",[null,[27,11],[27,28]]]]],[],0,null,["loc",[null,[27,5],[31,12]]]],["element","action",["set_user_type","High Schooler"],[],["loc",[null,[42,31],[42,74]]]],["element","action",["set_user_type","College Student"],[],["loc",[null,[46,29],[46,74]]]],["element","action",["set_user_type","Parent"],[],["loc",[null,[50,44],[50,80]]]],["element","action",["set_user_type","Teacher"],[],["loc",[null,[54,44],[54,81]]]],["element","action",["set_user_type","Guidance Counselor"],[],["loc",[null,[58,44],[58,92]]]],["block","if",[["get","invalid_email",["loc",[null,[67,11],[67,24]]]]],[],1,null,["loc",[null,[67,5],[71,12]]]],["attribute","class",["concat",["ui left icon input ",["subexpr","if",[["get","invalid_email",["loc",[null,[73,41],[73,54]]]],"error"],[],["loc",[null,[73,36],[73,64]]]]]]],["attribute","class",["concat",[["subexpr","if",[["get","invalid_email",["loc",[null,[74,23],[74,36]]]],"red"],[],["loc",[null,[74,18],[74,44]]]]," mail icon"]]],["inline","input",[],["class","ui left icon","value",["subexpr","@mut",[["get","email",["loc",[null,[75,43],[75,48]]]]],[],[]],"placeholder","Email"],["loc",[null,[75,8],[75,70]]]]],locals:[],templates:[e,t]}}(),a=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:83,column:2},end:{line:87,column:2}},moduleName:"startup/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("		");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","ui inverted button");var r=e.createTextNode("		\n			About our team \n		");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:91,column:0}},moduleName:"startup/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n	");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","ui right floated inverted compact transparent segment"),e.setAttribute(a,"id","lp-blurb");var r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","ui inverted center aligned huge header");var n=e.createTextNode("\n		 Froshmate \n		 ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","sub header");var i=e.createTextNode("\n		 	College admissions, rethought.\n		 ");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n		");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n		");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","ui small header");var n=e.createTextNode("\n		Our Caltech and UChicago-based team is developing an Artificial Intelligence-driven approach to maximize your chances at college admissions. ");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode(" ");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("\n\n		We have close affiliates at top colleges including Harvard, Princeton, Yale, Stanford, and MIT, all friendly\n		and willing to speak with you about their college experiences. ");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode(" ");e.appendChild(r,n);var n=e.createElement("br");e.appendChild(r,n);var n=e.createTextNode("\n		Sign up to stay up to date with our service!\n		");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("		\n		");e.appendChild(a,r);var r=e.createElement("br");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("	");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n\n\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=e.childAt(t,[1]),n=new Array(2);return n[0]=e.createMorphAt(r,5,5),n[1]=e.createMorphAt(r,9,9),n},statements:[["block","if",[["get","signed_up",["loc",[null,[18,8],[18,17]]]]],[],0,1,["loc",[null,[18,2],[80,9]]]],["block","link-to",["about"],["class","link"],2,null,["loc",[null,[83,2],[87,14]]]]],locals:[],templates:[e,t,a]}}())}),define("startup/views/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({didInsertElement:function(){$(".ui.dropdown").dropdown()}})}),define("startup/config/environment",["ember"],function(e){var t="startup";try{var a=t+"/config/environment",r=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("startup/tests/test-helper"):require("startup/app")["default"].create({name:"startup",version:"0.0.0+a0a89d12"});