/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Sv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(wf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new kv;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Av=function(n){const e=wf(n);return _f.encodeByteArray(e,!0)},so=function(n){return Av(n).replace(/\./g,"")},If=function(n){try{return _f.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function oo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Cv(t)||(n[t]=oo(n[t],e[t]));return n}function Cv(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=()=>Rv().__FIREBASE_DEFAULTS__,Dv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&If(n[1]);return e&&JSON.parse(e)},uu=()=>{try{return Nv()||Dv()||xv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pv=()=>{var n;return(n=uu())===null||n===void 0?void 0:n.config},Ov=n=>{var e;return(e=uu())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[so(JSON.stringify(t)),so(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function Uo(){var n;const e=(n=uu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fv(){return typeof self=="object"&&self.self===self}function Ef(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function lu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bf(){const n=Z();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Uv(){return!Uo()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pi(){try{return typeof indexedDB=="object"}catch{return!1}}function Vv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="FirebaseError";class De extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bv,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$v(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new De(i,a,r)}}function $v(n,e){return n.replace(qv,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function jv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dc(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(lh(s)&&lh(o)){if(!dc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function lh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function mi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Sf(n,e){const t=new zv(n,e);return t.subscribe.bind(t)}class zv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gv(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ma),i.error===void 0&&(i.error=Ma),i.complete===void 0&&(i.complete=Ma);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ma(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(n){return n&&n._delegate?n._delegate:n}class et{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Lv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wv(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hv(n){return n===In?void 0:n}function Wv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=[];var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const kf={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Xv=U.INFO,Yv={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Jv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Yv[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vo{constructor(e){this.name=e,this._logLevel=Xv,this._logHandler=Jv,this._userLogHandler=null,hu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}function Zv(n){hu.forEach(e=>{e.setLogLevel(n)})}function ew(n,e){for(const t of hu){let r=null;e&&e.level&&(r=kf[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&n({level:U[s].toLowerCase(),message:a,args:o,type:i.name})}}}const tw=(n,e)=>e.some(t=>n instanceof t);let hh,dh;function nw(){return hh||(hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rw(){return dh||(dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Af=new WeakMap,fc=new WeakMap,Cf=new WeakMap,Fa=new WeakMap,du=new WeakMap;function iw(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Yt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Af.set(t,n)}).catch(()=>{}),du.set(e,n),e}function sw(n){if(fc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});fc.set(n,e)}let pc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return fc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ow(n){pc=n(pc)}function aw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ua(this),e,...t);return Cf.set(r,e.sort?e.sort():[e]),Yt(r)}:rw().includes(n)?function(...e){return n.apply(Ua(this),e),Yt(Af.get(this))}:function(...e){return Yt(n.apply(Ua(this),e))}}function cw(n){return typeof n=="function"?aw(n):(n instanceof IDBTransaction&&sw(n),tw(n,nw())?new Proxy(n,pc):n)}function Yt(n){if(n instanceof IDBRequest)return iw(n);if(Fa.has(n))return Fa.get(n);const e=cw(n);return e!==n&&(Fa.set(n,e),du.set(e,n)),e}const Ua=n=>du.get(n);function uw(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Yt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Yt(o.result),c.oldVersion,c.newVersion,Yt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const lw=["get","getKey","getAll","getAllKeys","count"],hw=["put","add","delete","clear"],Va=new Map;function fh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Va.get(e))return Va.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=hw.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lw.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Va.set(e,s),s}ow(n=>({...n,get:(e,t,r)=>fh(e,t)||n.get(e,t,r),has:(e,t)=>!!fh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fw(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function fw(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mc="@firebase/app",ph="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Vo("@firebase/app"),pw="@firebase/app-compat",mw="@firebase/analytics-compat",gw="@firebase/analytics",yw="@firebase/app-check-compat",vw="@firebase/app-check",ww="@firebase/auth",_w="@firebase/auth-compat",Iw="@firebase/database",Tw="@firebase/database-compat",Ew="@firebase/functions",bw="@firebase/functions-compat",Sw="@firebase/installations",kw="@firebase/installations-compat",Aw="@firebase/messaging",Cw="@firebase/messaging-compat",Rw="@firebase/performance",Nw="@firebase/performance-compat",Dw="@firebase/remote-config",xw="@firebase/remote-config-compat",Pw="@firebase/storage",Ow="@firebase/storage-compat",Lw="@firebase/firestore",Mw="@firebase/firestore-compat",Fw="firebase",Uw="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]",Vw={[mc]:"fire-core",[pw]:"fire-core-compat",[gw]:"fire-analytics",[mw]:"fire-analytics-compat",[vw]:"fire-app-check",[yw]:"fire-app-check-compat",[ww]:"fire-auth",[_w]:"fire-auth-compat",[Iw]:"fire-rtdb",[Tw]:"fire-rtdb-compat",[Ew]:"fire-fn",[bw]:"fire-fn-compat",[Sw]:"fire-iid",[kw]:"fire-iid-compat",[Aw]:"fire-fcm",[Cw]:"fire-fcm-compat",[Rw]:"fire-perf",[Nw]:"fire-perf-compat",[Dw]:"fire-rc",[xw]:"fire-rc-compat",[Pw]:"fire-gcs",[Ow]:"fire-gcs-compat",[Lw]:"fire-fst",[Mw]:"fire-fst-compat","fire-js":"fire-js",[Fw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Map,Oi=new Map;function ao(n,e){try{n.container.addComponent(e)}catch(t){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Rf(n,e){n.container.addOrOverwriteComponent(e)}function xt(n){const e=n.name;if(Oi.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Oi.set(e,n);for(const t of Zt.values())ao(t,n);return!0}function Nf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Bw(n,e,t=Jt){Nf(n,e).clearInstance(t)}function $w(){Oi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new Zn("app","Firebase",qw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jw=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=Uw;function fu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(t||(t=Pv()),!t)throw Rt.create("no-options");const s=Zt.get(i);if(s){if(dc(t,s.options)&&dc(r,s.config))return s;throw Rt.create("duplicate-app",{appName:i})}const o=new Qv(i);for(const c of Oi.values())o.addComponent(c);const a=new jw(t,r,o);return Zt.set(i,a),a}function zw(n=Jt){const e=Zt.get(n);if(!e&&n===Jt)return fu();if(!e)throw Rt.create("no-app",{appName:n});return e}function Gw(){return Array.from(Zt.values())}async function Df(n){const e=n.name;Zt.has(e)&&(Zt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Ze(n,e,t){var r;let i=(r=Vw[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(a.join(" "));return}xt(new et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function xf(n,e){if(n!==null&&typeof n!="function")throw Rt.create("invalid-log-argument");ew(n,e)}function Pf(n){Zv(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="firebase-heartbeat-database",Hw=1,Li="firebase-heartbeat-store";let Ba=null;function Of(){return Ba||(Ba=uw(Kw,Hw,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Li)}}}).catch(n=>{throw Rt.create("idb-open",{originalErrorMessage:n.message})})),Ba}async function Ww(n){try{return(await Of()).transaction(Li).objectStore(Li).get(Lf(n))}catch(e){if(e instanceof De)Vn.warn(e.message);else{const t=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(t.message)}}}async function mh(n,e){try{const r=(await Of()).transaction(Li,"readwrite");return await r.objectStore(Li).put(e,Lf(n)),r.done}catch(t){if(t instanceof De)Vn.warn(t.message);else{const r=Rt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vn.warn(r.message)}}}function Lf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=1024,Xw=30*24*60*60*1e3;class Yw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Xw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gh(),{heartbeatsToSend:t,unsentEntries:r}=Jw(this._heartbeatsCache.heartbeats),i=so(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gh(){return new Date().toISOString().substring(0,10)}function Jw(n,e=Qw){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),yh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Zw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pi()?Vv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ww(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return mh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return mh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yh(n){return so(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(n){xt(new et("platform-logger",e=>new dw(e),"PRIVATE")),xt(new et("heartbeat",e=>new Yw(e),"PRIVATE")),Ze(mc,ph,n),Ze(mc,ph,"esm2017"),Ze("fire-js","")}e_("");const t_=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:De,SDK_VERSION:Mt,_DEFAULT_ENTRY_NAME:Jt,_addComponent:ao,_addOrOverwriteComponent:Rf,_apps:Zt,_clearComponents:$w,_components:Oi,_getProvider:Nf,_registerComponent:xt,_removeServiceInstance:Bw,deleteApp:Df,getApp:zw,getApps:Gw,initializeApp:fu,onLog:xf,registerVersion:Ze,setLogLevel:Pf},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t){this._delegate=e,this.firebase=t,ao(e,new et("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Df(this._delegate)))}_getService(e,t=Jt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Jt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ao(this._delegate,e)}_addOrOverwriteComponent(e){Rf(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},vh=new Zn("app-compat","Firebase",r_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Ze,setLogLevel:Pf,onLog:xf,apps:null,SDK_VERSION:Mt,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:t_}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Jt,!uh(e,u))throw vh.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=fu(u,l);if(uh(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(xt(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw vh.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&oo(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(){const n=i_(n_);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Mf,extendNamespace:e,createSubscribe:Sf,ErrorFactory:Zn,deepExtend:oo});function e(t){oo(n,t)}return n}const s_=Mf();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Vo("@firebase/app-compat"),o_="@firebase/app-compat",a_="0.2.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n){Ze(o_,a_,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Fv()&&self.firebase!==void 0){wh.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&wh.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Tt=s_;c_();var u_="firebase",l_="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.registerVersion(u_,l_,"app-compat");var h_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,pu=pu||{},N=h_||self;function co(){}function Bo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function is(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function d_(n){return Object.prototype.hasOwnProperty.call(n,$a)&&n[$a]||(n[$a]=++f_)}var $a="closure_uid_"+(1e9*Math.random()>>>0),f_=0;function p_(n,e,t){return n.call.apply(n.bind,arguments)}function m_(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function xe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xe=p_:xe=m_,xe.apply(null,arguments)}function Ds(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ve(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function hn(){this.s=this.s,this.o=this.o}var g_=0;hn.prototype.s=!1;hn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),g_!=0)&&d_(this)};hn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ff=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function mu(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function _h(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Bo(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Pe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var y_=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{N.addEventListener("test",co,e),N.removeEventListener("test",co,e)}catch{}return n}();function uo(n){return/^[\s\xa0]*$/.test(n)}var Ih=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function qa(n,e){return n<e?-1:n>e?1:0}function $o(){var n=N.navigator;return n&&(n=n.userAgent)?n:""}function ot(n){return $o().indexOf(n)!=-1}function gu(n){return gu[" "](n),n}gu[" "]=co;function Uf(n,e,t){return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var v_=ot("Opera"),kr=ot("Trident")||ot("MSIE"),Vf=ot("Edge"),gc=Vf||kr,Bf=ot("Gecko")&&!($o().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge"))&&!(ot("Trident")||ot("MSIE"))&&!ot("Edge"),w_=$o().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge");function $f(){var n=N.document;return n?n.documentMode:void 0}var lo;e:{var ja="",za=function(){var n=$o();if(Bf)return/rv:([^\);]+)(\)|;)/.exec(n);if(Vf)return/Edge\/([\d\.]+)/.exec(n);if(kr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(w_)return/WebKit\/(\S+)/.exec(n);if(v_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(za&&(ja=za?za[1]:""),kr){var Ga=$f();if(Ga!=null&&Ga>parseFloat(ja)){lo=String(Ga);break e}}lo=ja}var __={};function I_(){return Uf(__,9,function(){let n=0;const e=Ih(String(lo)).split("."),t=Ih("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=qa(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||qa(i[2].length==0,s[2].length==0)||qa(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var yc;if(N.document&&kr){var Th=$f();yc=Th||parseInt(lo,10)||void 0}else yc=void 0;var T_=yc;function Mi(n,e){if(Pe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Bf){e:{try{gu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:E_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Mi.$.h.call(this)}}ve(Mi,Pe);var E_={2:"touch",3:"pen",4:"mouse"};Mi.prototype.h=function(){Mi.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ss="closure_listenable_"+(1e6*Math.random()|0),b_=0;function S_(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++b_,this.fa=this.ia=!1}function qo(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function yu(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function qf(n){const e={};for(const t in n)e[t]=n[t];return e}const Eh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jf(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Eh.length;s++)t=Eh[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function jo(n){this.src=n,this.g={},this.h=0}jo.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=wc(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new S_(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function vc(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Ff(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(qo(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function wc(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var vu="closure_lm_"+(1e6*Math.random()|0),Ka={};function zf(n,e,t,r,i){if(r&&r.once)return Kf(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)zf(n,e[s],t,r,i);return null}return t=Iu(t),n&&n[ss]?n.O(e,t,is(r)?!!r.capture:!!r,i):Gf(n,e,t,!1,r,i)}function Gf(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=is(i)?!!i.capture:!!i,a=_u(n);if(a||(n[vu]=a=new jo(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=k_(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)y_||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Wf(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function k_(){function n(t){return e.call(n.src,n.listener,t)}const e=A_;return n}function Kf(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Kf(n,e[s],t,r,i);return null}return t=Iu(t),n&&n[ss]?n.P(e,t,is(r)?!!r.capture:!!r,i):Gf(n,e,t,!0,r,i)}function Hf(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Hf(n,e[s],t,r,i);else r=is(r)?!!r.capture:!!r,t=Iu(t),n&&n[ss]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=wc(s,t,r,i),-1<t&&(qo(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=_u(n))&&(e=n.g[e.toString()],n=-1,e&&(n=wc(e,t,r,i)),(t=-1<n?e[n]:null)&&wu(t))}function wu(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[ss])vc(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Wf(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=_u(e))?(vc(t,n),t.h==0&&(t.src=null,e[vu]=null)):qo(n)}}}function Wf(n){return n in Ka?Ka[n]:Ka[n]="on"+n}function A_(n,e){if(n.fa)n=!0;else{e=new Mi(e,this);var t=n.listener,r=n.la||n.src;n.ia&&wu(n),n=t.call(r,e)}return n}function _u(n){return n=n[vu],n instanceof jo?n:null}var Ha="__closure_events_fn_"+(1e9*Math.random()>>>0);function Iu(n){return typeof n=="function"?n:(n[Ha]||(n[Ha]=function(e){return n.handleEvent(e)}),n[Ha])}function ye(){hn.call(this),this.i=new jo(this),this.S=this,this.J=null}ve(ye,hn);ye.prototype[ss]=!0;ye.prototype.removeEventListener=function(n,e,t,r){Hf(this,n,e,t,r)};function be(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Pe(e,n);else if(e instanceof Pe)e.target=e.target||n;else{var i=e;e=new Pe(r,n),jf(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=xs(o,r,!0,e)&&i}if(o=e.g=n,i=xs(o,r,!0,e)&&i,i=xs(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=xs(o,r,!1,e)&&i}ye.prototype.N=function(){if(ye.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)qo(t[r]);delete n.g[e],n.h--}}this.J=null};ye.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ye.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function xs(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&vc(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Tu=N.JSON.stringify;function C_(){var n=Yf;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class R_{constructor(){this.h=this.g=null}add(e,t){const r=Qf.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Qf=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new N_,n=>n.reset());class N_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function D_(n){N.setTimeout(()=>{throw n},0)}function Xf(n,e){_c||x_(),Ic||(_c(),Ic=!0),Yf.add(n,e)}var _c;function x_(){var n=N.Promise.resolve(void 0);_c=function(){n.then(P_)}}var Ic=!1,Yf=new R_;function P_(){for(var n;n=C_();){try{n.h.call(n.g)}catch(t){D_(t)}var e=Qf;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Ic=!1}function zo(n,e){ye.call(this),this.h=n||1,this.g=e||N,this.j=xe(this.qb,this),this.l=Date.now()}ve(zo,ye);b=zo.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),be(this,"tick"),this.ga&&(Eu(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Eu(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}b.N=function(){zo.$.N.call(this),Eu(this),delete this.g};function bu(n,e,t){if(typeof n=="function")t&&(n=xe(n,t));else if(n&&typeof n.handleEvent=="function")n=xe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(n,e||0)}function Jf(n){n.g=bu(()=>{n.g=null,n.i&&(n.i=!1,Jf(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class O_ extends hn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jf(this)}N(){super.N(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(n){hn.call(this),this.h=n,this.g={}}ve(Fi,hn);var bh=[];function Zf(n,e,t,r){Array.isArray(t)||(t&&(bh[0]=t.toString()),t=bh);for(var i=0;i<t.length;i++){var s=zf(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function ep(n){yu(n.g,function(e,t){this.g.hasOwnProperty(t)&&wu(e)},n),n.g={}}Fi.prototype.N=function(){Fi.$.N.call(this),ep(this)};Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Go(){this.g=!0}Go.prototype.Ea=function(){this.g=!1};function L_(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function M_(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function gr(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+U_(n,t)+(r?" "+r:"")})}function F_(n,e){n.info(function(){return"TIMEOUT: "+e})}Go.prototype.info=function(){};function U_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Tu(t)}catch{return e}}var er={},Sh=null;function Ko(){return Sh=Sh||new ye}er.Ta="serverreachability";function tp(n){Pe.call(this,er.Ta,n)}ve(tp,Pe);function Ui(n){const e=Ko();be(e,new tp(e))}er.STAT_EVENT="statevent";function np(n,e){Pe.call(this,er.STAT_EVENT,n),this.stat=e}ve(np,Pe);function Ue(n){const e=Ko();be(e,new np(e,n))}er.Ua="timingevent";function rp(n,e){Pe.call(this,er.Ua,n),this.size=e}ve(rp,Pe);function os(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){n()},e)}var Ho={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ip={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Su(){}Su.prototype.h=null;function kh(n){return n.h||(n.h=n.i())}function sp(){}var as={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ku(){Pe.call(this,"d")}ve(ku,Pe);function Au(){Pe.call(this,"c")}ve(Au,Pe);var Tc;function Wo(){}ve(Wo,Su);Wo.prototype.g=function(){return new XMLHttpRequest};Wo.prototype.i=function(){return{}};Tc=new Wo;function cs(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Fi(this),this.P=V_,n=gc?125:void 0,this.V=new zo(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new op}function op(){this.i=null,this.g="",this.h=!1}var V_=45e3,Ec={},ho={};b=cs.prototype;b.setTimeout=function(n){this.P=n};function bc(n,e,t){n.L=1,n.v=Xo(Pt(e)),n.s=t,n.S=!0,ap(n,null)}function ap(n,e){n.G=Date.now(),us(n),n.A=Pt(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),mp(t.i,"t",r),n.C=0,t=n.l.I,n.h=new op,n.g=Mp(n.l,t?e:null,!n.s),0<n.O&&(n.M=new O_(xe(n.Pa,n,n.g),n.O)),Zf(n.U,n.g,"readystatechange",n.nb),e=n.I?qf(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Ui(),L_(n.j,n.u,n.A,n.m,n.W,n.s)}b.nb=function(n){n=n.target;const e=this.M;e&&bt(n)==3?e.l():this.Pa(n)};b.Pa=function(n){try{if(n==this.g)e:{const l=bt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||gc||this.g&&(this.h.h||this.g.ja()||Nh(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Ui(3):Ui(2)),Qo(this);var t=this.g.da();this.aa=t;t:if(cp(this)){var r=Nh(this.g);n="";var i=r.length,s=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),Ti(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,M_(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!uo(a)){var u=a;break t}}u=null}if(t=u)gr(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sc(this,t);else{this.i=!1,this.o=3,Ue(12),Cn(this),Ti(this);break e}}this.S?(up(this,l,o),gc&&this.i&&l==3&&(Zf(this.U,this.V,"tick",this.mb),this.V.start())):(gr(this.j,this.m,o,null),Sc(this,o)),l==4&&Cn(this),this.i&&!this.J&&(l==4?xp(this.l,this):(this.i=!1,us(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ue(12)):(this.o=0,Ue(13)),Cn(this),Ti(this)}}}catch{}finally{}};function cp(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function up(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=B_(n,t),i==ho){e==4&&(n.o=4,Ue(14),r=!1),gr(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Ec){n.o=4,Ue(15),gr(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else gr(n.j,n.m,i,null),Sc(n,i);cp(n)&&i!=ho&&i!=Ec&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ue(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ca&&(n.ca=!0,e=n.l,e.g==n&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ou(e),e.L=!0,Ue(11))):(gr(n.j,n.m,t,"[Invalid Chunked Response]"),Cn(n),Ti(n))}b.mb=function(){if(this.g){var n=bt(this.g),e=this.g.ja();this.C<e.length&&(Qo(this),up(this,n,e),this.i&&n!=4&&us(this))}};function B_(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?ho:(t=Number(e.substring(t,r)),isNaN(t)?Ec:(r+=1,r+t>e.length?ho:(e=e.substr(r,t),n.C=r+t,e)))}b.cancel=function(){this.J=!0,Cn(this)};function us(n){n.Y=Date.now()+n.P,lp(n,n.P)}function lp(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=os(xe(n.lb,n),e)}function Qo(n){n.B&&(N.clearTimeout(n.B),n.B=null)}b.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(F_(this.j,this.A),this.L!=2&&(Ui(),Ue(17)),Cn(this),this.o=2,Ti(this)):lp(this,this.Y-n)};function Ti(n){n.l.H==0||n.J||xp(n.l,n)}function Cn(n){Qo(n);var e=n.M;e&&typeof e.ra=="function"&&e.ra(),n.M=null,Eu(n.V),ep(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.ra())}function Sc(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||kc(t.h,n))){if(!n.K&&kc(t.h,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)mo(t),Zo(t);else break e;Pu(t),Ue(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.M&&t.A==0&&!t.v&&(t.v=os(xe(t.ib,t),6e3));if(1>=vp(t.h)&&t.na){try{t.na()}catch{}t.na=void 0}}else Rn(t,11)}else if((n.K||t.g==n)&&mo(t),!uo(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.J=u[1],t.oa=u[2];const l=u[3];l!=null&&(t.qa=l,t.j.info("VER="+t.qa));const h=u[4];h!=null&&(t.Ga=h,t.j.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.K=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Cu(s,s.h),s.h=null))}if(r.F){const w=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,X(r.G,r.F,w))}}t.H=3,t.l&&t.l.Ba(),t.ca&&(t.S=Date.now()-n.G,t.j.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Lp(r,r.I?r.oa:null,r.Y),o.K){wp(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Qo(a),us(a)),r.g=o}else Np(r);0<t.i.length&&ea(t)}else u[0]!="stop"&&u[0]!="close"||Rn(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Rn(t,7):xu(t):u[0]!="noop"&&t.l&&t.l.Aa(u),t.A=0)}}Ui(4)}catch{}}function $_(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Bo(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function q_(n){if(n.sa&&typeof n.sa=="function")return n.sa();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Bo(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function hp(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Bo(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=q_(n),r=$_(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var dp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function j_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pn(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Pn){this.h=e!==void 0?e:n.h,fo(this,n.j),this.s=n.s,this.g=n.g,po(this,n.m),this.l=n.l,e=n.i;var t=new Vi;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Ah(this,t),this.o=n.o}else n&&(t=String(n).match(dp))?(this.h=!!e,fo(this,t[1]||"",!0),this.s=gi(t[2]||""),this.g=gi(t[3]||"",!0),po(this,t[4]),this.l=gi(t[5]||"",!0),Ah(this,t[6]||"",!0),this.o=gi(t[7]||"")):(this.h=!!e,this.i=new Vi(null,this.h))}Pn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(yi(e,Ch,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(yi(e,Ch,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(yi(t,t.charAt(0)=="/"?K_:G_,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",yi(t,W_)),n.join("")};function Pt(n){return new Pn(n)}function fo(n,e,t){n.j=t?gi(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function po(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Ah(n,e,t){e instanceof Vi?(n.i=e,Q_(n.i,n.h)):(t||(e=yi(e,H_)),n.i=new Vi(e,n.h))}function X(n,e,t){n.i.set(e,t)}function Xo(n){return X(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function gi(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function yi(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,z_),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function z_(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ch=/[#\/\?@]/g,G_=/[#\?:]/g,K_=/[#\?]/g,H_=/[#\?@]/g,W_=/#/g;function Vi(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function dn(n){n.g||(n.g=new Map,n.h=0,n.i&&j_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}b=Vi.prototype;b.add=function(n,e){dn(this),this.i=null,n=qr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function fp(n,e){dn(n),e=qr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function pp(n,e){return dn(n),e=qr(n,e),n.g.has(e)}b.forEach=function(n,e){dn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};b.sa=function(){dn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};b.Z=function(n){dn(this);let e=[];if(typeof n=="string")pp(this,n)&&(e=e.concat(this.g.get(qr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};b.set=function(n,e){return dn(this),this.i=null,n=qr(this,n),pp(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};b.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function mp(n,e,t){fp(n,e),0<t.length&&(n.i=null,n.g.set(qr(n,e),mu(t)),n.h+=t.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function qr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Q_(n,e){e&&!n.j&&(dn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(fp(this,r),mp(this,i,t))},n)),n.j=e}var X_=class{constructor(n,e){this.h=n,this.g=e}};function gp(n){this.l=n||Y_,N.PerformanceNavigationTiming?(n=N.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(N.g&&N.g.Ka&&N.g.Ka()&&N.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Y_=10;function yp(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function vp(n){return n.h?1:n.g?n.g.size:0}function kc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Cu(n,e){n.g?n.g.add(e):n.h=e}function wp(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}gp.prototype.cancel=function(){if(this.i=_p(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function _p(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return mu(n.i)}function Ru(){}Ru.prototype.stringify=function(n){return N.JSON.stringify(n,void 0)};Ru.prototype.parse=function(n){return N.JSON.parse(n,void 0)};function J_(){this.g=new Ru}function Z_(n,e,t){const r=t||"";try{hp(n,function(i,s){let o=i;is(i)&&(o=Tu(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function eI(n,e){const t=new Go;if(N.Image){const r=new Image;r.onload=Ds(Ps,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Ds(Ps,t,r,"TestLoadImage: error",!1,e),r.onabort=Ds(Ps,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ds(Ps,t,r,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Ps(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ls(n){this.l=n.fc||null,this.j=n.ob||!1}ve(ls,Su);ls.prototype.g=function(){return new Yo(this.l,this.j)};ls.prototype.i=function(n){return function(){return n}}({});function Yo(n,e){ye.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Nu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ve(Yo,ye);var Nu=0;b=Yo.prototype;b.open=function(n,e){if(this.readyState!=Nu)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Bi(this)};b.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||N).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hs(this)),this.readyState=Nu};b.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Bi(this)),this.g&&(this.readyState=3,Bi(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ip(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Ip(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}b.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?hs(this):Bi(this),this.readyState==3&&Ip(this)}};b.Za=function(n){this.g&&(this.response=this.responseText=n,hs(this))};b.Ya=function(n){this.g&&(this.response=n,hs(this))};b.ka=function(){this.g&&hs(this)};function hs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Bi(n)}b.setRequestHeader=function(n,e){this.v.append(n,e)};b.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Bi(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var tI=N.JSON.parse;function ne(n){ye.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Tp,this.L=this.M=!1}ve(ne,ye);var Tp="",nI=/^https?$/i,rI=["POST","PUT"];b=ne.prototype;b.Oa=function(n){this.M=n};b.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Tc.g(),this.C=this.u?kh(this.u):kh(Tc),this.g.onreadystatechange=xe(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Rh(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=N.FormData&&n instanceof N.FormData,!(0<=Ff(rI,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Sp(this),0<this.B&&((this.L=iI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xe(this.ua,this)):this.A=bu(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Rh(this,s)}};function iI(n){return kr&&I_()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}b.ua=function(){typeof pu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))};function Rh(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Ep(n),Jo(n)}function Ep(n){n.F||(n.F=!0,be(n,"complete"),be(n,"error"))}b.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,be(this,"complete"),be(this,"abort"),Jo(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jo(this,!0)),ne.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?bp(this):this.kb())};b.kb=function(){bp(this)};function bp(n){if(n.h&&typeof pu<"u"&&(!n.C[1]||bt(n)!=4||n.da()!=2)){if(n.v&&bt(n)==4)bu(n.La,0,n);else if(be(n,"readystatechange"),bt(n)==4){n.h=!1;try{const a=n.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.I).match(dp)[1]||null;if(!i&&N.self&&N.self.location){var s=N.self.location.protocol;i=s.substr(0,s.length-1)}r=!nI.test(i?i.toLowerCase():"")}t=r}if(t)be(n,"complete"),be(n,"success");else{n.m=6;try{var o=2<bt(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.da()+"]",Ep(n)}}finally{Jo(n)}}}}function Jo(n,e){if(n.g){Sp(n);const t=n.g,r=n.C[0]?co:null;n.g=null,n.C=null,e||be(n,"ready");try{t.onreadystatechange=r}catch{}}}function Sp(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(N.clearTimeout(n.A),n.A=null)}function bt(n){return n.g?n.g.readyState:0}b.da=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),tI(e)}};function Nh(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Tp:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function kp(n){let e="";return yu(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Du(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=kp(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):X(n,e,t))}function ri(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Ap(n){this.Ga=0,this.i=[],this.j=new Go,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ri("failFast",!1,n),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ri("baseRetryDelayMs",5e3,n),this.hb=ri("retryDelaySeedMs",1e4,n),this.eb=ri("forwardChannelMaxRetries",2,n),this.xa=ri("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.K=void 0,this.I=n&&n.supportsCrossDomainXhr||!1,this.J="",this.h=new gp(n&&n.concurrentRequestLimit),this.Ja=new J_,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.j.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}b=Ap.prototype;b.qa=8;b.H=1;function xu(n){if(Cp(n),n.H==3){var e=n.W++,t=Pt(n.G);X(t,"SID",n.J),X(t,"RID",e),X(t,"TYPE","terminate"),ds(n,t),e=new cs(n,n.j,e,void 0),e.L=2,e.v=Xo(Pt(t)),t=!1,N.navigator&&N.navigator.sendBeacon&&(t=N.navigator.sendBeacon(e.v.toString(),"")),!t&&N.Image&&(new Image().src=e.v,t=!0),t||(e.g=Mp(e.l,null),e.g.ha(e.v)),e.G=Date.now(),us(e)}Op(n)}function Zo(n){n.g&&(Ou(n),n.g.cancel(),n.g=null)}function Cp(n){Zo(n),n.u&&(N.clearTimeout(n.u),n.u=null),mo(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&N.clearTimeout(n.m),n.m=null)}function ea(n){yp(n.h)||n.m||(n.m=!0,Xf(n.Na,n),n.C=0)}function sI(n,e){return vp(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.F.concat(n.i),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=os(xe(n.Na,n,e),Pp(n,n.C)),n.C++,!0)}b.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new cs(this,this.j,n,void 0);let s=this.s;if(this.U&&(s?(s=qf(s),jf(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Rp(this,i,e),t=Pt(this.G),X(t,"RID",n),X(t,"CVER",22),this.F&&X(t,"X-HTTP-Session-Id",this.F),ds(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(kp(s)))+"&"+e:this.o&&Du(t,this.o,s)),Cu(this.h,i),this.bb&&X(t,"TYPE","init"),this.P?(X(t,"$req",e),X(t,"SID","null"),i.ba=!0,bc(i,t,null)):bc(i,t,e),this.H=2}}else this.H==3&&(n?Dh(this,n):this.i.length==0||yp(this.h)||Dh(this))};function Dh(n,e){var t;e?t=e.m:t=n.W++;const r=Pt(n.G);X(r,"SID",n.J),X(r,"RID",t),X(r,"AID",n.V),ds(n,r),n.o&&n.s&&Du(r,n.o,n.s),t=new cs(n,n.j,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.i=e.F.concat(n.i)),e=Rp(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Cu(n.h,t),bc(t,r,e)}function ds(n,e){n.ma&&yu(n.ma,function(t,r){X(e,r,t)}),n.l&&hp({},function(t,r){X(e,r,t)})}function Rp(n,e,t){t=Math.min(n.i.length,t);var r=n.l?xe(n.l.Va,n.l,n):null;e:{var i=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{Z_(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.F=n,r}function Np(n){n.g||n.u||(n.ba=1,Xf(n.Ma,n),n.A=0)}function Pu(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=os(xe(n.Ma,n),Pp(n,n.A)),n.A++,!0)}b.Ma=function(){if(this.u=null,Dp(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var n=2*this.S;this.j.info("BP detection timer enabled: "+n),this.B=os(xe(this.jb,this),n)}};b.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Ue(10),Zo(this),Dp(this))};function Ou(n){n.B!=null&&(N.clearTimeout(n.B),n.B=null)}function Dp(n){n.g=new cs(n,n.j,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Pt(n.wa);X(e,"RID","rpc"),X(e,"SID",n.J),X(e,"CI",n.M?"0":"1"),X(e,"AID",n.V),X(e,"TYPE","xmlhttp"),ds(n,e),n.o&&n.s&&Du(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.oa,t.L=1,t.v=Xo(Pt(e)),t.s=null,t.S=!0,ap(t,n)}b.ib=function(){this.v!=null&&(this.v=null,Zo(this),Pu(this),Ue(19))};function mo(n){n.v!=null&&(N.clearTimeout(n.v),n.v=null)}function xp(n,e){var t=null;if(n.g==e){mo(n),Ou(n),n.g=null;var r=2}else if(kc(n.h,e))t=e.F,wp(n.h,e),r=1;else return;if(n.H!=0){if(n.ta=e.aa,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=Ko(),be(r,new rp(r,t)),ea(n)}else Np(n);else if(i=e.o,i==3||i==0&&0<n.ta||!(r==1&&sI(n,e)||r==2&&Pu(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:Rn(n,5);break;case 4:Rn(n,10);break;case 3:Rn(n,6);break;default:Rn(n,2)}}}function Pp(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.l||(t*=2),t*e}function Rn(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=xe(n.pb,n);t||(t=new Pn("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||fo(t,"https"),Xo(t)),eI(t.toString(),r)}else Ue(2);n.H=0,n.l&&n.l.za(e),Op(n),Cp(n)}b.pb=function(n){n?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function Op(n){if(n.H=0,n.pa=[],n.l){const e=_p(n.h);(e.length!=0||n.i.length!=0)&&(_h(n.pa,e),_h(n.pa,n.i),n.h.i.length=0,mu(n.i),n.i.length=0),n.l.ya()}}function Lp(n,e,t){var r=t instanceof Pn?Pt(t):new Pn(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),po(r,r.m);else{var i=N.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Pn(null,void 0);r&&fo(s,r),e&&(s.g=e),i&&po(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&X(r,t,e),X(r,"VER",n.qa),ds(n,r),r}function Mp(n,e,t){if(e&&!n.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new ne(new ls({ob:!0})):new ne(n.va),e.Oa(n.I),e}function Fp(){}b=Fp.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.Va=function(){};function go(){if(kr&&!(10<=Number(T_)))throw Error("Environmental error: no available transport.")}go.prototype.g=function(n,e){return new We(n,e)};function We(n,e){ye.call(this),this.g=new Ap(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!uo(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!uo(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new jr(this)}ve(We,ye);We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var n=this.g,e=this.l,t=this.h||void 0;Ue(0),n.Y=e,n.ma=t||{},n.M=n.aa,n.G=Lp(n,null,n.Y),ea(n)};We.prototype.close=function(){xu(this.g)};We.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Tu(n),n=t);e.i.push(new X_(e.fb++,n)),e.H==3&&ea(e)};We.prototype.N=function(){this.g.l=null,delete this.j,xu(this.g),delete this.g,We.$.N.call(this)};function Up(n){ku.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ve(Up,ku);function Vp(){Au.call(this),this.status=1}ve(Vp,Au);function jr(n){this.g=n}ve(jr,Fp);jr.prototype.Ba=function(){be(this.g,"a")};jr.prototype.Aa=function(n){be(this.g,new Up(n))};jr.prototype.za=function(n){be(this.g,new Vp)};jr.prototype.ya=function(){be(this.g,"b")};function oI(){this.blockSize=-1}function rt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ve(rt,oI);rt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wa(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}rt.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Wa(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Wa(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Wa(this,r),i=0;break}}this.h=i,this.i+=e};rt.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function z(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var aI={};function Lu(n){return-128<=n&&128>n?Uf(aI,n,function(e){return new z([e|0],0>e?-1:0)}):new z([n|0],0>n?-1:0)}function dt(n){if(isNaN(n)||!isFinite(n))return yr;if(0>n)return Te(dt(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Ac;return new z(e,0)}function Bp(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Te(Bp(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=dt(Math.pow(e,8)),r=yr,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=dt(Math.pow(e,s)),r=r.R(s).add(dt(o))):(r=r.R(t),r=r.add(dt(o)))}return r}var Ac=4294967296,yr=Lu(0),Cc=Lu(1),xh=Lu(16777216);b=z.prototype;b.ea=function(){if(Xe(this))return-Te(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Ac+r)*e,e*=Ac}return n};b.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(St(this))return"0";if(Xe(this))return"-"+Te(this).toString(n);for(var e=dt(Math.pow(n,6)),t=this,r="";;){var i=vo(t,e).g;t=yo(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,St(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};b.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function St(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Xe(n){return n.h==-1}b.X=function(n){return n=yo(this,n),Xe(n)?-1:St(n)?0:1};function Te(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new z(t,~n.h).add(Cc)}b.abs=function(){return Xe(this)?Te(this):this};b.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new z(t,t[t.length-1]&-2147483648?-1:0)};function yo(n,e){return n.add(Te(e))}b.R=function(n){if(St(this)||St(n))return yr;if(Xe(this))return Xe(n)?Te(this).R(Te(n)):Te(Te(this).R(n));if(Xe(n))return Te(this.R(Te(n)));if(0>this.X(xh)&&0>n.X(xh))return dt(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,Os(t,2*r+2*i),t[2*r+2*i+1]+=s*c,Os(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,Os(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,Os(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new z(t,0)};function Os(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function ii(n,e){this.g=n,this.h=e}function vo(n,e){if(St(e))throw Error("division by zero");if(St(n))return new ii(yr,yr);if(Xe(n))return e=vo(Te(n),e),new ii(Te(e.g),Te(e.h));if(Xe(e))return e=vo(n,Te(e)),new ii(Te(e.g),e.h);if(30<n.g.length){if(Xe(n)||Xe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Cc,r=e;0>=r.X(n);)t=Ph(t),r=Ph(r);var i=ar(t,1),s=ar(r,1);for(r=ar(r,2),t=ar(t,2);!St(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=ar(r,1),t=ar(t,1)}return e=yo(n,i.R(e)),new ii(i,e)}for(i=yr;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=dt(t),o=s.R(e);Xe(o)||0<o.X(n);)t-=r,s=dt(t),o=s.R(e);St(s)&&(s=Cc),i=i.add(s),n=yo(n,o)}return new ii(i,n)}b.gb=function(n){return vo(this,n).h};b.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new z(t,this.h&n.h)};b.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new z(t,this.h|n.h)};b.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new z(t,this.h^n.h)};function Ph(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new z(t,n.h)}function ar(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new z(i,n.h)}go.prototype.createWebChannel=go.prototype.g;We.prototype.send=We.prototype.u;We.prototype.open=We.prototype.m;We.prototype.close=We.prototype.close;Ho.NO_ERROR=0;Ho.TIMEOUT=8;Ho.HTTP_ERROR=6;ip.COMPLETE="complete";sp.EventType=as;as.OPEN="a";as.CLOSE="b";as.ERROR="c";as.MESSAGE="d";ye.prototype.listen=ye.prototype.O;ne.prototype.listenOnce=ne.prototype.P;ne.prototype.getLastError=ne.prototype.Sa;ne.prototype.getLastErrorCode=ne.prototype.Ia;ne.prototype.getStatus=ne.prototype.da;ne.prototype.getResponseJson=ne.prototype.Wa;ne.prototype.getResponseText=ne.prototype.ja;ne.prototype.send=ne.prototype.ha;ne.prototype.setWithCredentials=ne.prototype.Oa;rt.prototype.digest=rt.prototype.l;rt.prototype.reset=rt.prototype.reset;rt.prototype.update=rt.prototype.j;z.prototype.add=z.prototype.add;z.prototype.multiply=z.prototype.R;z.prototype.modulo=z.prototype.gb;z.prototype.compare=z.prototype.X;z.prototype.toNumber=z.prototype.ea;z.prototype.toString=z.prototype.toString;z.prototype.getBits=z.prototype.D;z.fromNumber=dt;z.fromString=Bp;var cI=function(){return new go},uI=function(){return Ko()},Qa=Ho,lI=ip,hI=er,Oh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},dI=ls,Ls=sp,fI=ne,pI=rt,vr=z;const Lh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Vo("@firebase/firestore");function Rc(){return en.logLevel}function mI(n){en.setLogLevel(n)}function v(n,...e){if(en.logLevel<=U.DEBUG){const t=e.map(Mu);en.debug(`Firestore (${zr}): ${n}`,...t)}}function ie(n,...e){if(en.logLevel<=U.ERROR){const t=e.map(Mu);en.error(`Firestore (${zr}): ${n}`,...t)}}function it(n,...e){if(en.logLevel<=U.WARN){const t=e.map(Mu);en.warn(`Firestore (${zr}): ${n}`,...t)}}function Mu(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n="Unexpected state"){const e=`FIRESTORE (${zr}) INTERNAL ASSERTION FAILED: `+n;throw ie(e),new Error(e)}function C(n,e){n||S()}function gI(n,e){n||S()}function T(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends De{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(me.UNAUTHENTICATED))}shutdown(){}}class vI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class wI{constructor(e){this.t=e,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ge;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ge,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ge)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(C(typeof r.accessToken=="string"),new $p(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return C(e===null||typeof e=="string"),new me(e)}}class _I{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class II{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new _I(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EI{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(C(typeof t.token=="string"),this.T=t.token,new TI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=bI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function D(n,e){return n<e?-1:n>e?1:0}function Ar(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function jp(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return J.fromMillis(Date.now())}static fromDate(e){return J.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new J(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new J(0,0))}static max(){return new A(new J(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r){t===void 0?t=0:t>e.length&&S(),r===void 0?r=e.length-t:r>e.length-t&&S(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return $i.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $i?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class V extends $i{construct(e,t,r){return new V(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new V(t)}static emptyPath(){return new V([])}}const SI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class se extends $i{construct(e,t,r){return new se(e,t,r)}static isValidIdentifier(e){return SI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new se(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new se(t)}static emptyPath(){return new se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(V.fromString(e))}static fromName(e){return new I(V.fromString(e).popFirst(5))}static empty(){return new I(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&V.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return V.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new V(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Nc(n){return n.fields.find(e=>e.kind===2)}function Tn(n){return n.fields.filter(e=>e.kind!==2)}zp.UNKNOWN_ID=-1;class kI{constructor(e,t){this.fieldPath=e,this.kind=t}}class wo{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new wo(0,Qe.min())}}function Gp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=A.fromTimestamp(r===1e9?new J(t+1,0):new J(t,r));return new Qe(i,I.empty(),e)}function Kp(n){return new Qe(n.readTime,n.key,-1)}class Qe{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qe(A.min(),I.empty(),-1)}static max(){return new Qe(A.max(),I.empty(),-1)}}function Fu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:D(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==Hp)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,r)=>{t(e)})}static reject(e){return new p((t,r)=>{r(e)})}static waitFor(e){return new p((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=p.resolve(!1);for(const r of e)t=t.next(i=>i?p.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new p((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new p((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new ge,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new Ei(e,t.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=Uu(r.target.error);this.R.reject(new Ei(e,i))}}static open(e,t,r,i){try{return new ta(t,e.transaction(i,r))}catch(s){throw new Ei(t,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new CI(t)}}class nt{constructor(e,t,r){this.name=e,this.version=t,this.V=r,nt.S(Z())===12.2&&ie("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),En(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Pi())return!1;if(nt.C())return!0;const e=Z(),t=nt.S(e),r=0<t&&t<10,i=nt.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Ei(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ei(e,o))},i.onupgradeneeded=s=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.$(o,i.transaction,s.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=ta.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),p.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class AI{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return En(this.L.delete())}}class Ei extends y{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function pn(n){return n.name==="IndexedDbTransactionError"}class CI{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),En(r)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),En(this.store.add(e))}get(e){return En(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),En(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),En(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new p((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new p((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){v("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Z(e){const t=this.cursor({});return new p((r,i)=>{t.onerror=s=>{const o=Uu(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new p((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new AI(a),u=t(a.primaryKey,a.value,c);if(u instanceof p){const l=u.catch(h=>(c.done(),p.reject(h)));r.push(l)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>p.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function En(n){return new p((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Uu(r.target.error);t(i)}})}let Mh=!1;function Uu(n){const e=nt.S(Z());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Mh||(Mh=!0,setTimeout(()=>{throw r},0)),r}}return n}class RI{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){v("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{v("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){pn(t)?v("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await fn(t)}await this.et(6e4)})}}class NI{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return p.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return v("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(v("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Kp(s);Fu(o,r)>0&&(r=o)}),new Qe(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}qe.ct=-1;function fs(n){return n==null}function qi(n){return n===0&&1/n==-1/0}function Qp(n){return typeof n=="number"&&Number.isInteger(n)&&!qi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Fh(e)),e=DI(n.get(t),e);return Fh(e)}function DI(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Fh(n){return n+""}function ft(n){const e=n.length;if(C(e>=2),e===2)return C(n.charAt(0)===""&&n.charAt(1)===""),V.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&S(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:S()}s=o+2}return new V(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n,e){return[n,Ve(e)]}function Xp(n,e,t){return[n,Ve(e),t]}const xI={},PI=["prefixPath","collectionGroup","readTime","documentId"],OI=["prefixPath","collectionGroup","documentId"],LI=["collectionGroup","readTime","prefixPath","documentId"],MI=["canonicalId","targetId"],FI=["targetId","path"],UI=["path","targetId"],VI=["collectionId","parent"],BI=["indexId","uid"],$I=["uid","sequenceNumber"],qI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],jI=["indexId","uid","orderedDocumentKey"],zI=["userId","collectionPath","documentId"],GI=["userId","collectionPath","largestBatchId"],KI=["userId","collectionGroup","largestBatchId"],Yp=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],HI=[...Yp,"documentOverlays"],Jp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Zp=Jp,WI=[...Zp,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Wp{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function we(n,e){const t=T(n);return nt.M(t.at,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function tr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function em(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new G(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new G(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ms(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ms(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ms(this.root,e,this.comparator,!0)}}class Ms{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ie.RED,this.left=i??Ie.EMPTY,this.right=s??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ie(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(n,e,t,r,i){return this}insert(n,e,t){return new Ie(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.comparator=e,this.data=new G(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bh(this.data.getIterator())}getIteratorFrom(e){return new Bh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof H)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new H(this.comparator);return t.data=e,t}}class Bh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function cr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.fields=e,e.sort(se.comparator)}static empty(){return new je([])}unionWith(e){let t=new H(se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ar(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tm("Invalid base64 string: "+i):i}}(e);return new de(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const XI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tn(n){if(C(!!n),typeof n=="string"){let e=0;const t=XI.exec(n);if(C(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:te(n.seconds),nanos:te(n.nanos)}}function te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nn(n){return typeof n=="string"?de.fromBase64String(n):de.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Vu(n){const e=n.mapValue.fields.__previous_value__;return na(e)?Vu(e):e}function ji(n){const e=tn(n.mapValue.fields.__local_write_time__.timestampValue);return new J(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class rn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ws={nullValue:"NULL_VALUE"};function Bn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?na(n)?4:nm(n)?9007199254740991:10:S()}function wt(n,e){if(n===e)return!0;const t=Bn(n);if(t!==Bn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ji(n).isEqual(ji(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=tn(r.timestampValue),o=tn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return nn(r.bytesValue).isEqual(nn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return te(r.geoPointValue.latitude)===te(i.geoPointValue.latitude)&&te(r.geoPointValue.longitude)===te(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return te(r.integerValue)===te(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=te(r.doubleValue),o=te(i.doubleValue);return s===o?qi(s)===qi(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Ar(n.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Vh(s)!==Vh(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!wt(s[a],o[a])))return!1;return!0}(n,e);default:return S()}}function zi(n,e){return(n.values||[]).find(t=>wt(t,e))!==void 0}function sn(n,e){if(n===e)return 0;const t=Bn(n),r=Bn(e);if(t!==r)return D(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=te(i.integerValue||i.doubleValue),a=te(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return $h(n.timestampValue,e.timestampValue);case 4:return $h(ji(n),ji(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(i,s){const o=nn(i),a=nn(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=D(te(i.latitude),te(s.latitude));return o!==0?o:D(te(i.longitude),te(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=sn(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Qt.mapValue&&s===Qt.mapValue)return 0;if(i===Qt.mapValue)return 1;if(s===Qt.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=D(a[l],u[l]);if(h!==0)return h;const d=sn(o[a[l]],c[u[l]]);if(d!==0)return d}return D(a.length,u.length)}(n.mapValue,e.mapValue);default:throw S()}}function $h(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=tn(n),r=tn(e),i=D(t.seconds,r.seconds);return i!==0?i:D(t.nanos,r.nanos)}function Cr(n){return xc(n)}function xc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=tn(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?nn(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=xc(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${xc(r.fields[a])}`;return s+"}"}(n.mapValue):S();var e,t}function $n(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Pc(n){return!!n&&"integerValue"in n}function Gi(n){return!!n&&"arrayValue"in n}function qh(n){return!!n&&"nullValue"in n}function jh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qs(n){return!!n&&"mapValue"in n}function bi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return tr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=bi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=bi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function nm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function JI(n){return"nullValue"in n?Ws:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?$n(rn.empty(),I.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:S()}function ZI(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?$n(rn.empty(),I.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Qt:S()}function zh(n,e){const t=sn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Gh(n,e){const t=sn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.value=e}static empty(){return new Ee({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Qs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bi(t)}setAll(e){let t=se.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=bi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Qs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Qs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){tr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ee(bi(this.value))}}function rm(n){const e=[];return tr(n.fields,(t,r)=>{const i=new se([t]);if(Qs(r)){const s=rm(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new K(e,0,A.min(),A.min(),A.min(),Ee.empty(),0)}static newFoundDocument(e,t,r,i){return new K(e,1,t,A.min(),r,i,0)}static newNoDocument(e,t){return new K(e,2,t,A.min(),A.min(),Ee.empty(),0)}static newUnknownDocument(e,t){return new K(e,3,t,A.min(),A.min(),Ee.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof K&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new K(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){this.position=e,this.inclusive=t}}function Kh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),t.key):r=sn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t="asc"){this.field=e,this.dir=t}}function eT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{}class L extends im{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new tT(e,t,r):t==="array-contains"?new iT(e,r):t==="in"?new lm(e,r):t==="not-in"?new sT(e,r):t==="array-contains-any"?new oT(e,r):new L(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new nT(e,r):new rT(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(sn(t,this.value)):t!==null&&Bn(this.value)===Bn(t)&&this.matchesComparison(sn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class j extends im{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new j(e,t)}matches(e){return Rr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Rr(n){return n.op==="and"}function Oc(n){return n.op==="or"}function Bu(n){return sm(n)&&Rr(n)}function sm(n){for(const e of n.filters)if(e instanceof j)return!1;return!0}function Lc(n){if(n instanceof L)return n.field.canonicalString()+n.op.toString()+Cr(n.value);if(Bu(n))return n.filters.map(e=>Lc(e)).join(",");{const e=n.filters.map(t=>Lc(t)).join(",");return`${n.op}(${e})`}}function om(n,e){return n instanceof L?function(t,r){return r instanceof L&&t.op===r.op&&t.field.isEqual(r.field)&&wt(t.value,r.value)}(n,e):n instanceof j?function(t,r){return r instanceof j&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&om(s,r.filters[o]),!0):!1}(n,e):void S()}function am(n,e){const t=n.filters.concat(e);return j.create(t,n.op)}function cm(n){return n instanceof L?function(e){return`${e.field.canonicalString()} ${e.op} ${Cr(e.value)}`}(n):n instanceof j?function(e){return e.op.toString()+" {"+e.getFilters().map(cm).join(" ,")+"}"}(n):"Filter"}class tT extends L{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class nT extends L{constructor(e,t){super(e,"in",t),this.keys=um("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rT extends L{constructor(e,t){super(e,"not-in",t),this.keys=um("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function um(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class iT extends L{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gi(t)&&zi(t.arrayValue,this.value)}}class lm extends L{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zi(this.value.arrayValue,t)}}class sT extends L{constructor(e,t){super(e,"not-in",t)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zi(this.value.arrayValue,t)}}class oT extends L{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>zi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Mc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new aT(n,e,t,r,i,s,o)}function qn(n){const e=T(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Lc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),fs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cr(r)).join(",")),e.ft=t}return e.ft}function ps(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!eT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!om(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Hh(n.startAt,e.startAt)&&Hh(n.endAt,e.endAt)}function _o(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Io(n,e){return n.filters.filter(t=>t instanceof L&&t.field.isEqual(e))}function Wh(n,e,t){let r=Ws,i=!0;for(const s of Io(n,e)){let o=Ws,a=!0;switch(s.op){case"<":case"<=":o=JI(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ws}zh({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];zh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function Qh(n,e,t){let r=Qt,i=!0;for(const s of Io(n,e)){let o=Qt,a=!0;switch(s.op){case">=":case">":o=ZI(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Qt}Gh({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Gh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function hm(n,e,t,r,i,s,o,a){return new Ft(n,e,t,r,i,s,o,a)}function Gr(n){return new Ft(n)}function Xh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $u(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ra(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function qu(n){return n.collectionGroup!==null}function On(n){const e=T(n);if(e.dt===null){e.dt=[];const t=ra(e),r=$u(e);if(t!==null&&r===null)t.isKeyField()||e.dt.push(new wr(t)),e.dt.push(new wr(se.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new wr(se.keyField(),s))}}}return e.dt}function Ge(n){const e=T(n);if(!e._t)if(e.limitType==="F")e._t=Mc(e.path,e.collectionGroup,On(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of On(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new wr(s.field,o))}const r=e.endAt?new on(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new on(e.startAt.position,e.startAt.inclusive):null;e._t=Mc(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function Fc(n,e){e.getFirstInequalityField(),ra(n);const t=n.filters.concat([e]);return new Ft(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function To(n,e,t){return new Ft(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ms(n,e){return ps(Ge(n),Ge(e))&&n.limitType===e.limitType}function dm(n){return`${qn(Ge(n))}|lt:${n.limitType}`}function Uc(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>cm(r)).join(", ")}]`),fs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cr(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cr(r)).join(",")),`Target(${t})`}(Ge(n))}; limitType=${n.limitType})`}function gs(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):I.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of On(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Kh(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,On(t),r)||t.endAt&&!function(i,s,o){const a=Kh(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,On(t),r))}(n,e)}function fm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pm(n){return(e,t)=>{let r=!1;for(const i of On(n)){const s=cT(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cT(n,e,t){const r=n.field.isKeyField()?I.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?sn(a,c):S()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return S()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){tr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return em(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=new G(I.comparator);function ze(){return uT}const mm=new G(I.comparator);function vi(...n){let e=mm;for(const t of n)e=e.insert(t.key,t);return e}function gm(n){let e=mm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function pt(){return Si()}function ym(){return Si()}function Si(){return new mn(n=>n.toString(),(n,e)=>n.isEqual(e))}const lT=new G(I.comparator),hT=new H(I.comparator);function P(...n){let e=hT;for(const t of n)e=e.add(t);return e}const dT=new H(D);function ju(){return dT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qi(e)?"-0":e}}function wm(n){return{integerValue:""+n}}function _m(n,e){return Qp(e)?wm(e):vm(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this._=void 0}}function fT(n,e,t){return n instanceof Nr?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&na(i)&&(i=Vu(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof jn?Tm(n,e):n instanceof zn?Em(n,e):function(r,i){const s=Im(r,i),o=Yh(s)+Yh(r.wt);return Pc(s)&&Pc(r.wt)?wm(o):vm(r.serializer,o)}(n,e)}function pT(n,e,t){return n instanceof jn?Tm(n,e):n instanceof zn?Em(n,e):t}function Im(n,e){return n instanceof Dr?Pc(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Nr extends ia{}class jn extends ia{constructor(e){super(),this.elements=e}}function Tm(n,e){const t=bm(e);for(const r of n.elements)t.some(i=>wt(i,r))||t.push(r);return{arrayValue:{values:t}}}class zn extends ia{constructor(e){super(),this.elements=e}}function Em(n,e){let t=bm(e);for(const r of n.elements)t=t.filter(i=>!wt(i,r));return{arrayValue:{values:t}}}class Dr extends ia{constructor(e,t){super(),this.serializer=e,this.wt=t}}function Yh(n){return te(n.integerValue||n.doubleValue)}function bm(n){return Gi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.field=e,this.transform=t}}function mT(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof jn&&r instanceof jn||t instanceof zn&&r instanceof zn?Ar(t.elements,r.elements,wt):t instanceof Dr&&r instanceof Dr?wt(t.wt,r.wt):t instanceof Nr&&r instanceof Nr}(n.transform,e.transform)}class gT{constructor(e,t){this.version=e,this.transformResults=t}}class Y{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Y}static exists(e){return new Y(void 0,e)}static updateTime(e){return new Y(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class sa{}function Sm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Hr(n.key,Y.none()):new Kr(n.key,n.data,Y.none());{const t=n.data,r=Ee.empty();let i=new H(se.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ut(n.key,r,new je(i.toArray()),Y.none())}}function yT(n,e,t){n instanceof Kr?function(r,i,s){const o=r.value.clone(),a=Zh(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Ut?function(r,i,s){if(!Xs(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Zh(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(km(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function ki(n,e,t,r){return n instanceof Kr?function(i,s,o,a){if(!Xs(i.precondition,s))return o;const c=i.value.clone(),u=ed(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ut?function(i,s,o,a){if(!Xs(i.precondition,s))return o;const c=ed(i.fieldTransforms,a,s),u=s.data;return u.setAll(km(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return Xs(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function vT(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Im(r.transform,i||null);s!=null&&(t===null&&(t=Ee.empty()),t.set(r.field,s))}return t||null}function Jh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Ar(t,r,(i,s)=>mT(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Kr extends sa{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ut extends sa{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function km(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Zh(n,e,t){const r=new Map;C(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,pT(o,a,t[i]))}return r}function ed(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,fT(s,o,e))}return r}class Hr extends sa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zu extends sa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yT(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ki(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ki(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ym();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Sm(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),P())}isEqual(e){return this.batchId===e.batchId&&Ar(this.mutations,e.mutations,(t,r)=>Jh(t,r))&&Ar(this.baseMutations,e.baseMutations,(t,r)=>Jh(t,r))}}class Ku{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){C(e.mutations.length===r.length);let i=lT;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ku(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,F;function Am(n){switch(n){default:return S();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Cm(n){if(n===void 0)return ie("GRPC error has no .code"),m.UNKNOWN;switch(n){case ue.OK:return m.OK;case ue.CANCELLED:return m.CANCELLED;case ue.UNKNOWN:return m.UNKNOWN;case ue.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case ue.INTERNAL:return m.INTERNAL;case ue.UNAVAILABLE:return m.UNAVAILABLE;case ue.UNAUTHENTICATED:return m.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case ue.NOT_FOUND:return m.NOT_FOUND;case ue.ALREADY_EXISTS:return m.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return m.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case ue.ABORTED:return m.ABORTED;case ue.OUT_OF_RANGE:return m.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return m.UNIMPLEMENTED;case ue.DATA_LOSS:return m.DATA_LOSS;default:return S()}}(F=ue||(ue={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Fs}static getOrCreateInstance(){return Fs===null&&(Fs=new Wu),Fs}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Fs=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new vr([4294967295,4294967295],0);function td(n){const e=Rm().encode(n),t=new pI;return t.update(e),new Uint8Array(t.digest())}function nd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vr([t,r],0),new vr([i,s],0)]}class Qu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new wi(`Invalid padding: ${t}`);if(r<0)throw new wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new wi(`Invalid padding when bitmap length is 0: ${t}`);this.yt=8*e.length-t,this.It=vr.fromNumber(this.yt)}Tt(e,t,r){let i=e.add(t.multiply(vr.fromNumber(r)));return i.compare(_T)===1&&(i=new vr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const t=td(e),[r,i]=nd(t);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Qu(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const t=td(e),[r,i]=nd(t);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ws.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new vs(A.min(),i,new G(D),ze(),P())}}class ws{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ws(r,t,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t,r,i){this.vt=e,this.removedTargetIds=t,this.key=r,this.Pt=i}}class Nm{constructor(e,t){this.targetId=e,this.bt=t}}class Dm{constructor(e,t,r=de.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class rd{constructor(){this.Vt=0,this.St=sd(),this.Dt=de.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=P(),t=P(),r=P();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:S()}}),new ws(this.Dt,this.Ct,e,t,r)}$t(){this.xt=!1,this.St=sd()}Ft(e,t){this.xt=!0,this.St=this.St.insert(e,t)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class IT{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=ze(),this.jt=id(),this.zt=new G(D)}Wt(e){for(const t of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(t,e.Pt):this.Jt(t,e.key,e.Pt);for(const t of e.removedTargetIds)this.Jt(t,e.key,e.Pt)}Yt(e){this.forEachTarget(e,t=>{const r=this.Xt(t);switch(e.state){case 0:this.Zt(t)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(t);break;case 3:this.Zt(t)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(t)&&(this.te(t),r.Mt(e.resumeToken));break;default:S()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Gt.forEach((r,i)=>{this.Zt(i)&&t(i)})}ee(e){var t;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(_o(o))if(i===0){const a=new I(o.path);this.Jt(r,a,K.newNoDocument(a,A.min()))}else C(i===1);else{const a=this.se(r);if(a!==i){const c=this.ie(e,a);if(c!==0){this.te(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(t=Wu.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,l,h){var d,f,g,w,E,x;const M={localCacheCount:l,existenceFilterCount:h.count},R=h.unchangedNames;return R&&(M.bloomFilter={applied:u===0,hashCount:(d=R==null?void 0:R.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(w=(g=(f=R==null?void 0:R.bits)===null||f===void 0?void 0:f.bitmap)===null||g===void 0?void 0:g.length)!==null&&w!==void 0?w:0,padding:(x=(E=R==null?void 0:R.bits)===null||E===void 0?void 0:E.padding)!==null&&x!==void 0?x:0}),M}(c,a,e.bt))}}}}ie(e,t){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=nn(s).toUint8Array()}catch(l){if(l instanceof tm)return it("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Qu(c,o,a)}catch(l){return it(l instanceof wi?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.yt===0?1:i!==t-this.re(e.targetId,u)?2:0}re(e,t){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const t=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&_o(a.target)){const c=new I(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,K.newNoDocument(c,e))}s.kt&&(t.set(o,s.Ot()),s.$t())}});let r=P();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.ne(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new vs(e,t,this.zt,this.Qt,r);return this.Qt=ze(),this.jt=id(),this.zt=new G(D),i}Ht(e,t){if(!this.Zt(e))return;const r=this.ce(e,t.key)?2:0;this.Xt(e).Ft(t.key,r),this.Qt=this.Qt.insert(t.key,t),this.jt=this.jt.insert(t.key,this.ae(t.key).add(e))}Jt(e,t,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,t)?i.Ft(t,1):i.Bt(t),this.jt=this.jt.insert(t,this.ae(t).delete(e)),r&&(this.Qt=this.Qt.insert(t,r))}removeTarget(e){this.Gt.delete(e)}se(e){const t=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let t=this.Gt.get(e);return t||(t=new rd,this.Gt.set(e,t)),t}ae(e){let t=this.jt.get(e);return t||(t=new H(D),this.jt=this.jt.insert(e,t)),t}Zt(e){const t=this.ne(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}ne(e){const t=this.Gt.get(e);return t&&t.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new rd),this.Kt.getRemoteKeysForTarget(e).forEach(t=>{this.Jt(e,t,null)})}ce(e,t){return this.Kt.getRemoteKeysForTarget(e).has(t)}}function id(){return new G(I.comparator)}function sd(){return new G(I.comparator)}const TT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ET=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),bT=(()=>({and:"AND",or:"OR"}))();class ST{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vc(n,e){return n.useProto3Json||fs(e)?e:{value:e}}function xr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function kT(n,e){return xr(n,e.toTimestamp())}function oe(n){return C(!!n),A.fromTimestamp(function(e){const t=tn(e);return new J(t.seconds,t.nanos)}(n))}function Xu(n,e){return function(t){return new V(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Pm(n){const e=V.fromString(n);return C(qm(e)),e}function Ki(n,e){return Xu(n.databaseId,e.path)}function gt(n,e){const t=Pm(e);if(t.get(1)!==n.databaseId.projectId)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(Lm(t))}function Bc(n,e){return Xu(n.databaseId,e)}function Om(n){const e=Pm(n);return e.length===4?V.emptyPath():Lm(e)}function Hi(n){return new V(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lm(n){return C(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function od(n,e,t){return{name:Ki(n,e),fields:t.value.mapValue.fields}}function Mm(n,e,t){const r=gt(n,e.name),i=oe(e.updateTime),s=e.createTime?oe(e.createTime):A.min(),o=new Ee({mapValue:{fields:e.fields}}),a=K.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function AT(n,e){return"found"in e?function(t,r){C(!!r.found),r.found.name,r.found.updateTime;const i=gt(t,r.found.name),s=oe(r.found.updateTime),o=r.found.createTime?oe(r.found.createTime):A.min(),a=new Ee({mapValue:{fields:r.found.fields}});return K.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){C(!!r.missing),C(!!r.readTime);const i=gt(t,r.missing),s=oe(r.readTime);return K.newNoDocument(i,s)}(n,e):S()}function CT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(C(u===void 0||typeof u=="string"),de.fromBase64String(u||"")):(C(u===void 0||u instanceof Uint8Array),de.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:Cm(c.code);return new y(u,c.message||"")}(o);t=new Dm(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=gt(n,r.document.name),s=oe(r.document.updateTime),o=r.document.createTime?oe(r.document.createTime):A.min(),a=new Ee({mapValue:{fields:r.document.fields}}),c=K.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Ys(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=gt(n,r.document),s=r.readTime?oe(r.readTime):A.min(),o=K.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Ys([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=gt(n,r.document),s=r.removedTargetIds||[];t=new Ys([],s,i,null)}else{if(!("filter"in e))return S();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new wT(i,s),a=r.targetId;t=new Nm(a,o)}}return t}function Wi(n,e){let t;if(e instanceof Kr)t={update:od(n,e.key,e.value)};else if(e instanceof Hr)t={delete:Ki(n,e.key)};else if(e instanceof Ut)t={update:od(n,e.key,e.data),updateMask:OT(e.fieldMask)};else{if(!(e instanceof zu))return S();t={verify:Ki(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Nr)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof jn)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof zn)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Dr)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw S()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:kT(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:S()}(n,e.precondition)),t}function $c(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Y.updateTime(oe(i.updateTime)):i.exists!==void 0?Y.exists(i.exists):Y.none()}(e.currentDocument):Y.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)C(o.setToServerValue==="REQUEST_TIME"),a=new Nr;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new jn(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new zn(u)}else"increment"in o?a=new Dr(s,o.increment):S();const c=se.fromServerFormat(o.fieldPath);return new ys(c,a)}(n,i)):[];if(e.update){e.update.name;const i=gt(n,e.update.name),s=new Ee({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new je(c.map(u=>se.fromServerFormat(u)))}(e.updateMask);return new Ut(i,s,o,t,r)}return new Kr(i,s,t,r)}if(e.delete){const i=gt(n,e.delete);return new Hr(i,t)}if(e.verify){const i=gt(n,e.verify);return new zu(i,t)}return S()}function RT(n,e){return n&&n.length>0?(C(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?oe(r.updateTime):oe(i);return s.isEqual(A.min())&&(s=oe(i)),new gT(s,r.transformResults||[])}(t,e))):[]}function Fm(n,e){return{documents:[Bc(n,e.path)]}}function Um(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Bc(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Bc(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return $m(j.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:dr(l.field),direction:DT(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Vc(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Vm(n){let e=Om(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){C(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=Bm(l);return h instanceof j&&Bu(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new wr(fr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,fs(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new on(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new on(d,h)}(t.endAt)),hm(e,i,o,s,a,"F",c,u)}function NT(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bm(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=fr(e.unaryFilter.field);return L.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=fr(e.unaryFilter.field);return L.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fr(e.unaryFilter.field);return L.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=fr(e.unaryFilter.field);return L.create(s,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(n):n.fieldFilter!==void 0?function(e){return L.create(fr(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return j.create(e.compositeFilter.filters.map(t=>Bm(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return S()}}(e.compositeFilter.op))}(n):S()}function DT(n){return TT[n]}function xT(n){return ET[n]}function PT(n){return bT[n]}function dr(n){return{fieldPath:n.canonicalString()}}function fr(n){return se.fromServerFormat(n.fieldPath)}function $m(n){return n instanceof L?function(e){if(e.op==="=="){if(jh(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NAN"}};if(qh(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jh(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NOT_NAN"}};if(qh(e.value))return{unaryFilter:{field:dr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dr(e.field),op:xT(e.op),value:e.value}}}(n):n instanceof j?function(e){const t=e.getFilters().map(r=>$m(r));return t.length===1?t[0]:{compositeFilter:{op:PT(e.op),filters:t}}}(n):S()}function OT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t,r,i,s=A.min(),o=A.min(),a=de.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.le=e}}function LT(n,e){let t;if(e.document)t=Mm(n.le,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=I.fromSegments(e.noDocument.path),i=Kn(e.noDocument.readTime);t=K.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return S();{const r=I.fromSegments(e.unknownDocument.path),i=Kn(e.unknownDocument.version);t=K.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new J(r[0],r[1]);return A.fromTimestamp(i)}(e.readTime)),t}function ad(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Eo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Ki(i,s.key),fields:s.data.value.mapValue.fields,updateTime:xr(i,s.version.toTimestamp()),createTime:xr(i,s.createTime.toTimestamp())}}(n.le,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Gn(e.version)};else{if(!e.isUnknownDocument())return S();r.unknownDocument={path:t.path.toArray(),version:Gn(e.version)}}return r}function Eo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Gn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Kn(n){const e=new J(n.seconds,n.nanoseconds);return A.fromTimestamp(e)}function bn(n,e){const t=(e.baseMutations||[]).map(s=>$c(n.le,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>$c(n.le,s)),i=J.fromMillis(e.localWriteTimeMs);return new Gu(e.batchId,i,t,r)}function _i(n){const e=Kn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Kn(n.lastLimboFreeSnapshotVersion):A.min();let r;var i;return n.query.documents!==void 0?(C((i=n.query).documents.length===1),r=Ge(Gr(Om(i.documents[0])))):r=function(s){return Ge(Vm(s))}(n.query),new kt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,de.fromBase64String(n.resumeToken))}function zm(n,e){const t=Gn(e.snapshotVersion),r=Gn(e.lastLimboFreeSnapshotVersion);let i;i=_o(e.target)?Fm(n.le,e.target):Um(n.le,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:qn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Yu(n){const e=Vm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?To(e,e.limit,"L"):e}function Xa(n,e){return new Hu(e.largestBatchId,$c(n.le,e.overlayMutation))}function cd(n,e){const t=e.path.lastSegment();return[n,Ve(e.path.popLast()),t]}function ud(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Gn(r.readTime),documentKey:Ve(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{getBundleMetadata(e,t){return ld(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Kn(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return ld(e).put({bundleId:(r=t).id,createTime:Gn(oe(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return hd(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:Yu(i.bundledQuery),readTime:Kn(i.readTime)};var i})}saveNamedQuery(e,t){return hd(e).put(function(r){return{name:r.name,readTime:Gn(oe(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function ld(n){return we(n,"bundles")}function hd(n){return we(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.serializer=e,this.userId=t}static fe(e,t){const r=t.uid||"";return new oa(e,r)}getOverlay(e,t){return si(e).get(cd(this.userId,t)).next(r=>r?Xa(this.serializer,r):null)}getOverlays(e,t){const r=pt();return p.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Hu(t,o);i.push(this.de(e,a))}),p.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Ve(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(si(e).J("collectionPathOverlayIndex",a))}),p.waitFor(s)}getOverlaysForCollection(e,t,r){const i=pt(),s=Ve(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return si(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Xa(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=pt();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return si(e).X({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Xa(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}de(e,t){return si(e).put(function(r,i,s){const[o,a,c]=cd(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Wi(r.le,s.mutation)}}(this.serializer,this.userId,t))}}function si(n){return we(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){}_e(e,t){this.we(e,t),t.me()}we(e,t){if("nullValue"in e)this.ge(t,5);else if("booleanValue"in e)this.ge(t,10),t.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(t,15),t.ye(te(e.integerValue));else if("doubleValue"in e){const r=te(e.doubleValue);isNaN(r)?this.ge(t,13):(this.ge(t,15),qi(r)?t.ye(0):t.ye(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ge(t,20),typeof r=="string"?t.pe(r):(t.pe(`${r.seconds||""}`),t.ye(r.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,t),this.Te(t);else if("bytesValue"in e)this.ge(t,30),t.Ee(nn(e.bytesValue)),this.Te(t);else if("referenceValue"in e)this.Ae(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ge(t,45),t.ye(r.latitude||0),t.ye(r.longitude||0)}else"mapValue"in e?nm(e)?this.ge(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Te(t)):"arrayValue"in e?(this.ve(e.arrayValue,t),this.Te(t)):S()}Ie(e,t){this.ge(t,25),this.Pe(e,t)}Pe(e,t){t.pe(e)}Re(e,t){const r=e.fields||{};this.ge(t,55);for(const i of Object.keys(r))this.Ie(i,t),this.we(r[i],t)}ve(e,t){const r=e.values||[];this.ge(t,50);for(const i of r)this.we(i,t)}Ae(e,t){this.ge(t,37),I.fromName(e).path.forEach(r=>{this.ge(t,60),this.Pe(r,t)})}ge(e,t){e.ye(t)}Te(e){e.ye(2)}}Sn.be=new Sn;function FT(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function dd(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=FT(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class UT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ve(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Se(r.value),r=t.next();this.De()}Ce(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.xe(r.value),r=t.next();this.Ne()}ke(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Se(r);else if(r<2048)this.Se(960|r>>>6),this.Se(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Se(480|r>>>12),this.Se(128|63&r>>>6),this.Se(128|63&r);else{const i=t.codePointAt(0);this.Se(240|i>>>18),this.Se(128|63&i>>>12),this.Se(128|63&i>>>6),this.Se(128|63&i)}}this.De()}Me(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.xe(r);else if(r<2048)this.xe(960|r>>>6),this.xe(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.xe(480|r>>>12),this.xe(128|63&r>>>6),this.xe(128|63&r);else{const i=t.codePointAt(0);this.xe(240|i>>>18),this.xe(128|63&i>>>12),this.xe(128|63&i>>>6),this.xe(128|63&i)}}this.Ne()}Oe(e){const t=this.$e(e),r=dd(t);this.Fe(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Be(e){const t=this.$e(e),r=dd(t);this.Fe(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Le(){this.qe(255),this.qe(255)}Ue(){this.Ke(255),this.Ke(255)}reset(){this.position=0}seed(e){this.Fe(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ge(){return this.buffer.slice(0,this.position)}$e(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Se(e){const t=255&e;t===0?(this.qe(0),this.qe(255)):t===255?(this.qe(255),this.qe(0)):this.qe(t)}xe(e){const t=255&e;t===0?(this.Ke(0),this.Ke(255)):t===255?(this.Ke(255),this.Ke(0)):this.Ke(e)}De(){this.qe(0),this.qe(1)}Ne(){this.Ke(0),this.Ke(1)}qe(e){this.Fe(1),this.buffer[this.position++]=e}Ke(e){this.Fe(1),this.buffer[this.position++]=~e}Fe(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class VT{constructor(e){this.Qe=e}Ee(e){this.Qe.Ve(e)}pe(e){this.Qe.ke(e)}ye(e){this.Qe.Oe(e)}me(){this.Qe.Le()}}class BT{constructor(e){this.Qe=e}Ee(e){this.Qe.Ce(e)}pe(e){this.Qe.Me(e)}ye(e){this.Qe.Be(e)}me(){this.Qe.Ue()}}class oi{constructor(){this.Qe=new UT,this.je=new VT(this.Qe),this.ze=new BT(this.Qe)}seed(e){this.Qe.seed(e)}We(e){return e===0?this.je:this.ze}Ge(){return this.Qe.Ge()}reset(){this.Qe.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}He(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new kn(this.indexId,this.documentKey,this.arrayValue,r)}}function jt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=fd(n.arrayValue,e.arrayValue),t!==0?t:(t=fd(n.directionalValue,e.directionalValue),t!==0?t:I.comparator(n.documentKey,e.documentKey)))}function fd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Je=e.orderBy,this.Ye=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xe=r:this.Ye.push(r)}}Ze(e){C(e.collectionGroup===this.collectionId);const t=Nc(e);if(t!==void 0&&!this.tn(t))return!1;const r=Tn(e);let i=0,s=0;for(;i<r.length&&this.tn(r[i]);++i);if(i===r.length)return!0;if(this.Xe!==void 0){const o=r[i];if(!this.en(this.Xe,o)||!this.nn(this.Je[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Je.length||!this.nn(this.Je[s++],o))return!1}return!0}tn(e){for(const t of this.Ye)if(this.en(t,e))return!0;return!1}en(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}nn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n){var e,t;if(C(n instanceof L||n instanceof j),n instanceof L){if(n instanceof lm){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>L.create(n.field,"==",s)))||[];return j.create(i,"or")}return n}const r=n.filters.map(i=>Gm(i));return j.create(r,n.op)}function qT(n){if(n.getFilters().length===0)return[];const e=zc(Gm(n));return C(Km(e)),qc(e)||jc(e)?[e]:e.getFilters()}function qc(n){return n instanceof L}function jc(n){return n instanceof j&&Bu(n)}function Km(n){return qc(n)||jc(n)||function(e){if(e instanceof j&&Oc(e)){for(const t of e.getFilters())if(!qc(t)&&!jc(t))return!1;return!0}return!1}(n)}function zc(n){if(C(n instanceof L||n instanceof j),n instanceof L)return n;if(n.filters.length===1)return zc(n.filters[0]);const e=n.filters.map(r=>zc(r));let t=j.create(e,n.op);return t=bo(t),Km(t)?t:(C(t instanceof j),C(Rr(t)),C(t.filters.length>1),t.filters.reduce((r,i)=>Ju(r,i)))}function Ju(n,e){let t;return C(n instanceof L||n instanceof j),C(e instanceof L||e instanceof j),t=n instanceof L?e instanceof L?function(r,i){return j.create([r,i],"and")}(n,e):pd(n,e):e instanceof L?pd(e,n):function(r,i){if(C(r.filters.length>0&&i.filters.length>0),Rr(r)&&Rr(i))return am(r,i.getFilters());const s=Oc(r)?r:i,o=Oc(r)?i:r,a=s.filters.map(c=>Ju(c,o));return j.create(a,"or")}(n,e),bo(t)}function pd(n,e){if(Rr(e))return am(e,n.getFilters());{const t=e.filters.map(r=>Ju(n,r));return j.create(t,"or")}}function bo(n){if(C(n instanceof L||n instanceof j),n instanceof L)return n;const e=n.getFilters();if(e.length===1)return bo(e[0]);if(sm(n))return n;const t=e.map(i=>bo(i)),r=[];return t.forEach(i=>{i instanceof L?r.push(i):i instanceof j&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:j.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.sn=new Zu}addToCollectionParentIndex(e,t){return this.sn.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve(Qe.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve(Qe.min())}updateCollectionGroup(e,t,r){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class Zu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new H(V.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new H(V.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Uint8Array(0);class zT{constructor(e,t){this.user=e,this.databaseId=t,this.rn=new Zu,this.on=new mn(r=>qn(r),(r,i)=>ps(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.rn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.rn.add(t)});const s={collectionId:r,parent:Ve(i)};return md(e).put(s)}return p.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[jp(t),""],!1,!0);return md(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(ft(o.parent))}return r})}addFieldIndex(e,t){const r=Vs(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=ci(e);return s.next(a=>{o.put(ud(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Vs(e),i=ci(e),s=ai(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=ai(e);let i=!0;const s=new Map;return p.forEach(this.un(t),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=P();const a=[];return p.forEach(s,(c,u)=>{var l;v("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(R=>`${R.fieldPath}:${R.kind}`).join(",")}`} to execute ${qn(t)}`);const h=function(R,O){const q=Nc(O);if(q===void 0)return null;for(const B of Io(R,q.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(u,c),d=function(R,O){const q=new Map;for(const B of Tn(O))for(const ce of Io(R,B.fieldPath))switch(ce.op){case"==":case"in":q.set(B.fieldPath.canonicalString(),ce.value);break;case"not-in":case"!=":return q.set(B.fieldPath.canonicalString(),ce.value),Array.from(q.values())}return null}(u,c),f=function(R,O){const q=[];let B=!0;for(const ce of Tn(O)){const Ce=ce.kind===0?Wh(R,ce.fieldPath,R.startAt):Qh(R,ce.fieldPath,R.startAt);q.push(Ce.value),B&&(B=Ce.inclusive)}return new on(q,B)}(u,c),g=function(R,O){const q=[];let B=!0;for(const ce of Tn(O)){const Ce=ce.kind===0?Qh(R,ce.fieldPath,R.endAt):Wh(R,ce.fieldPath,R.endAt);q.push(Ce.value),B&&(B=Ce.inclusive)}return new on(q,B)}(u,c),w=this.an(c,u,f),E=this.an(c,u,g),x=this.hn(c,u,d),M=this.ln(c.indexId,h,w,f.inclusive,E,g.inclusive,x);return p.forEach(M,R=>r.H(R,t.limit).next(O=>{O.forEach(q=>{const B=I.fromSegments(q.documentKey);o.has(B)||(o=o.add(B),a.push(B))})}))}).next(()=>a)}return p.resolve(null)})}un(e){let t=this.on.get(e);return t||(e.filters.length===0?t=[e]:t=qT(j.create(e.filters,"and")).map(r=>Mc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.on.set(e,t),t)}ln(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.fn(t[h/u]):Us,f=this.dn(e,d,r[h%u],i),g=this._n(e,d,s[h%u],o),w=a.map(E=>this.dn(e,d,E,!0));l.push(...this.createRange(f,g,w))}return l}dn(e,t,r,i){const s=new kn(e,I.empty(),t,r);return i?s:s.He()}_n(e,t,r,i){const s=new kn(e,I.empty(),t,r);return i?s.He():s}cn(e,t){const r=new $T(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Ze(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.un(t);return p.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new H(se.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}wn(e,t){const r=new oi;for(const i of Tn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.We(i.kind);Sn.be._e(s,o)}return r.Ge()}fn(e){const t=new oi;return Sn.be._e(e,t.We(0)),t.Ge()}mn(e,t){const r=new oi;return Sn.be._e($n(this.databaseId,t),r.We(function(i){const s=Tn(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Ge()}hn(e,t,r){if(r===null)return[];let i=[];i.push(new oi);let s=0;for(const o of Tn(e)){const a=r[s++];for(const c of i)if(this.gn(t,o.fieldPath)&&Gi(a))i=this.yn(i,o,a);else{const u=c.We(o.kind);Sn.be._e(a,u)}}return this.pn(i)}an(e,t,r){return this.hn(e,t,r.position)}pn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Ge();return t}yn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new oi;c.seed(a.Ge()),Sn.be._e(o,c.We(t.kind)),s.push(c)}return s}gn(e,t){return!!e.filters.find(r=>r instanceof L&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Vs(e),i=ci(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return p.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new wo(l.sequenceNumber,new Qe(Kn(l.readTime),new I(ft(l.documentKey)),l.largestBatchId)):wo.empty(),d=u.fields.map(([f,g])=>new kI(se.fromServerFormat(f),g));return new zp(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:D(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Vs(e),s=ci(e);return this.In(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>p.forEach(a,c=>s.put(ud(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return p.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?p.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),p.forEach(a,c=>this.Tn(e,i,c).next(u=>{const l=this.En(s,c);return u.isEqual(l)?p.resolve():this.An(e,s,c,u,l)}))))})}Rn(e,t,r,i){return ai(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,t.key),documentKey:t.key.path.toArray()})}vn(e,t,r,i){return ai(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,t.key),t.key.path.toArray()])}Tn(e,t,r){const i=ai(e);let s=new H(jt);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,t)])},(o,a)=>{s=s.add(new kn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}En(e,t){let r=new H(jt);const i=this.wn(t,e);if(i==null)return r;const s=Nc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Gi(o))for(const a of o.arrayValue.values||[])r=r.add(new kn(t.indexId,e.key,this.fn(a),i))}else r=r.add(new kn(t.indexId,e.key,Us,i));return r}An(e,t,r,i,s){v("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let g=cr(d),w=cr(f);for(;g||w;){let E=!1,x=!1;if(g&&w){const M=u(g,w);M<0?x=!0:M>0&&(E=!0)}else g!=null?x=!0:E=!0;E?(l(w),w=cr(f)):x?(h(g),g=cr(d)):(g=cr(d),w=cr(f))}}(i,s,jt,a=>{o.push(this.Rn(e,t,r,a))},a=>{o.push(this.vn(e,t,r,a))}),p.waitFor(o)}In(e){let t=1;return ci(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>jt(o,a)).filter((o,a,c)=>!a||jt(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=jt(o,e),c=jt(o,t);if(a===0)i[0]=e.He();else if(a>0&&c<0)i.push(o),i.push(o.He());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Us,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Us,[]];s.push(IDBKeyRange.bound(a,c))}return s}Pn(e,t){return jt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(gd)}getMinOffset(e,t){return p.mapArray(this.un(t),r=>this.cn(e,r).next(i=>i||S())).next(gd)}}function md(n){return we(n,"collectionParents")}function ai(n){return we(n,"indexEntries")}function Vs(n){return we(n,"indexConfiguration")}function ci(n){return we(n,"indexState")}function gd(n){C(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Fu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Qe(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Be{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Be(e,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.X({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{C(a===1)}));const u=[];for(const l of t.mutations){const h=Xp(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return p.waitFor(s).next(()=>u)}function So(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw S();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be.DEFAULT_COLLECTION_PERCENTILE=10,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Be.DEFAULT=new Be(41943040,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Be.DISABLED=new Be(-1,0,0);class aa{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static fe(e,t,r,i){C(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new aa(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=pr(e),o=zt(e);return o.add({}).next(a=>{C(typeof a=="number");const c=new Gu(a,t,r,i),u=function(d,f,g){const w=g.baseMutations.map(x=>Wi(d.le,x)),E=g.mutations.map(x=>Wi(d.le,x));return{userId:f,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:w,mutations:E}}(this.serializer,this.userId,c),l=[];let h=new H((d,f)=>D(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Xp(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,xI))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),p.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return zt(e).get(t).next(r=>r?(C(r.userId===this.userId),bn(this.serializer,r)):null)}Vn(e,t){return this.bn[t]?p.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.bn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return zt(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(C(a.batchId>=r),s=bn(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return zt(e).X({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).j("userMutationsIndex",t).next(r=>r.map(i=>bn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Hs(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return pr(e).X({range:i},(o,a,c)=>{const[u,l,h]=o,d=ft(l);if(u===this.userId&&t.path.isEqual(d))return zt(e).get(h).next(f=>{if(!f)throw S();C(f.userId===this.userId),s.push(bn(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new H(D);const i=[];return t.forEach(s=>{const o=Hs(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=pr(e).X({range:a},(u,l,h)=>{const[d,f,g]=u,w=ft(f);d===this.userId&&s.path.isEqual(w)?r=r.add(g):h.done()});i.push(c)}),p.waitFor(i).next(()=>this.Sn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Hs(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new H(D);return pr(e).X({range:o},(c,u,l)=>{const[h,d,f]=c,g=ft(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Sn(e,a))}Sn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(zt(e).get(s).next(o=>{if(o===null)throw S();C(o.userId===this.userId),r.push(bn(this.serializer,o))}))}),p.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Hm(e.at,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Dn(t.batchId)}),p.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Dn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return p.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return pr(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=ft(s[1]);i.push(c)}else a.done()}).next(()=>{C(i.length===0)})})}containsKey(e,t){return Wm(e,this.userId,t)}Cn(e){return Qm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Wm(n,e,t){const r=Hs(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return pr(n).X({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function zt(n){return we(n,"mutations")}function pr(n){return we(n,"documentMutations")}function Qm(n){return we(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Hn(0)}static kn(){return new Hn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Mn(e).next(t=>{const r=new Hn(t.highestTargetId);return t.highestTargetId=r.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Mn(e).next(t=>A.fromTimestamp(new J(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Mn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Mn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.On(e,i)))}addTargetData(e,t){return this.$n(e,t).next(()=>this.Mn(e).next(r=>(r.targetCount+=1,this.Fn(t,r),this.On(e,r))))}updateTargetData(e,t){return this.$n(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ur(e).delete(t.targetId)).next(()=>this.Mn(e)).next(r=>(C(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return ur(e).X((o,a)=>{const c=_i(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>p.waitFor(s)).next(()=>i)}forEachTarget(e,t){return ur(e).X((r,i)=>{const s=_i(i);t(s)})}Mn(e){return vd(e).get("targetGlobalKey").next(t=>(C(t!==null),t))}On(e,t){return vd(e).put("targetGlobalKey",t)}$n(e,t){return ur(e).put(zm(this.serializer,t))}Fn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Mn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=qn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ur(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=_i(a);ps(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Ht(e);return t.forEach(o=>{const a=Ve(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),p.waitFor(i)}removeMatchingKeys(e,t,r){const i=Ht(e);return p.forEach(t,s=>{const o=Ve(s.path);return p.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Ht(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Ht(e);let s=P();return i.X({range:r,Y:!0},(o,a,c)=>{const u=ft(o[1]),l=new I(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Ve(t.path),i=IDBKeyRange.bound([r],[jp(r)],!1,!0);let s=0;return Ht(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}he(e,t){return ur(e).get(t).next(r=>r?_i(r):null)}}function ur(n){return we(n,"targets")}function vd(n){return we(n,"targetGlobal")}function Ht(n){return we(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd([n,e],[t,r]){const i=D(n,t);return i===0?D(e,r):i}class KT{constructor(e){this.Bn=e,this.buffer=new H(wd),this.Ln=0}qn(){return++this.Ln}Un(e){const t=[e,this.qn()];if(this.buffer.size<this.Bn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();wd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class HT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Kn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Kn&&(this.Kn.cancel(),this.Kn=null)}get started(){return this.Kn!==null}Gn(e){v("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Kn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Kn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){pn(t)?v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await fn(t)}await this.Gn(3e5)})}}class WT{constructor(e,t){this.Qn=e,this.params=t}calculateTargetCount(e,t){return this.Qn.jn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return p.resolve(qe.ct);const r=new KT(t);return this.Qn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.Qn.zn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Qn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Qn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(v("LruGarbageCollector","Garbage collection skipped; disabled"),p.resolve(yd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yd):this.Wn(e,t))}getCacheSize(e){return this.Qn.getCacheSize(e)}Wn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Rc()<=U.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),p.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function QT(n,e){return new WT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t){this.db=e,this.garbageCollector=QT(this,t)}jn(e){const t=this.Hn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Hn(e){let t=0;return this.zn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}zn(e,t){return this.Jn(e,(r,i)=>t(i))}addReference(e,t,r){return Bs(e,r)}removeReference(e,t,r){return Bs(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Bs(e,t)}Yn(e,t){return function(r,i){let s=!1;return Qm(r).Z(o=>Wm(r,o,i).next(a=>(a&&(s=!0),p.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Jn(e,(o,a)=>{if(a<=t){const c=this.Yn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,A.min()),Ht(e).delete([0,Ve(o.path)])))});i.push(c)}}).next(()=>p.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Bs(e,t)}Jn(e,t){const r=Ht(e);let i,s=qe.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==qe.ct&&t(new I(ft(i)),s),s=u,i=c):s=qe.ct}).next(()=>{s!==qe.ct&&t(new I(ft(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Bs(n,e){return Ht(n).put(function(t,r){return{targetId:0,path:Ve(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.changes=new mn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,K.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?p.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return _n(e).put(r)}removeEntry(e,t,r){return _n(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Eo(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Xn(e,r)))}getEntry(e,t){let r=K.newInvalidDocument(t);return _n(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ui(t))},(i,s)=>{r=this.Zn(t,s)}).next(()=>r)}ts(e,t){let r={size:0,document:K.newInvalidDocument(t)};return _n(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(ui(t))},(i,s)=>{r={document:this.Zn(t,s),size:So(s)}}).next(()=>r)}getEntries(e,t){let r=ze();return this.es(e,t,(i,s)=>{const o=this.Zn(i,s);r=r.insert(i,o)}).next(()=>r)}ns(e,t){let r=ze(),i=new G(I.comparator);return this.es(e,t,(s,o)=>{const a=this.Zn(s,o);r=r.insert(s,a),i=i.insert(s,So(o))}).next(()=>({documents:r,ss:i}))}es(e,t,r){if(t.isEmpty())return p.resolve();let i=new H(Td);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(ui(i.first()),ui(i.last())),o=i.getIterator();let a=o.getNext();return _n(e).X({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=I.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Td(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(ui(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),Eo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return _n(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=ze();for(const l of c){const h=this.Zn(I.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(gs(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=ze();const o=Id(t,r),a=Id(t,Qe.max());return _n(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Zn(I.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new JT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return _d(e).get("remoteDocumentGlobalKey").next(t=>(C(!!t),t))}Xn(e,t){return _d(e).put("remoteDocumentGlobalKey",t)}Zn(e,t){if(t){const r=LT(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(A.min())))return r}return K.newInvalidDocument(e)}}function Ym(n){return new YT(n)}class JT extends Xm{constructor(e,t){super(),this.rs=e,this.trackRemovals=t,this.os=new mn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new H((s,o)=>D(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.os.get(s);if(t.push(this.rs.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=ad(this.rs.serializer,o);i=i.add(s.path.popLast());const u=So(c);r+=u-a.size,t.push(this.rs.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=ad(this.rs.serializer,o.convertToNoDocument(A.min()));t.push(this.rs.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.rs.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.rs.updateMetadata(e,r)),p.waitFor(t)}getFromCache(e,t){return this.rs.ts(e,t).next(r=>(this.os.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.rs.ns(e,t).next(({documents:r,ss:i})=>(i.forEach((s,o)=>{this.os.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function _d(n){return we(n,"remoteDocumentGlobal")}function _n(n){return we(n,"remoteDocumentsV14")}function ui(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Id(n,e){const t=e.documentKey.path.toArray();return[n,Eo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Td(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=D(t[s],r[s]),i)return i;return i=D(t.length,r.length),i||(i=D(t[t.length-2],r[r.length-2]),i||D(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ki(r.mutation,i,je.empty(),J.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,P()).next(()=>r))}getLocalViewOfDocuments(e,t,r=P()){const i=pt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=vi();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=pt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,P()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=ze();const o=Si(),a=Si();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Ut)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),ki(l.mutation,u,l.mutation.getFieldMask(),J.now())):o.set(u.key,je.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new ZT(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Si();let i=new G((o,a)=>o-a),s=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||je.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||P()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=ym();l.forEach(d=>{if(!s.has(d)){const f=Sm(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return I.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):p.resolve(pt());let a=-1,c=s;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,P())).next(l=>({batchId:a,changes:gm(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(r=>{let i=vi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=vi();return this.indexManager.getCollectionParents(e,i).next(o=>p.forEach(o,a=>{const c=function(u,l){return new Ft(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,K.newInvalidDocument(u)))});let o=vi();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&ki(u.mutation,c,je.empty(),J.now()),gs(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,t){return p.resolve(this.us.get(t))}saveBundleMetadata(e,t){var r;return this.us.set(t.id,{id:(r=t).id,version:r.version,createTime:oe(r.createTime)}),p.resolve()}getNamedQuery(e,t){return p.resolve(this.cs.get(t))}saveNamedQuery(e,t){return this.cs.set(t.name,function(r){return{name:r.name,query:Yu(r.bundledQuery),readTime:oe(r.readTime)}}(t)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(){this.overlays=new G(I.comparator),this.hs=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const r=pt();return p.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.de(e,t,s)}),p.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),p.resolve()}getOverlaysForCollection(e,t,r){const i=pt(),s=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new G((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=pt(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=pt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return p.resolve(a)}de(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Hu(t,r));let s=this.hs.get(t);s===void 0&&(s=P(),this.hs.set(t,s)),this.hs.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.ls=new H(pe.fs),this.ds=new H(pe._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,t){const r=new pe(e,t);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gs(new pe(e,t))}ys(e,t){e.forEach(r=>this.removeReference(r,t))}ps(e){const t=new I(new V([])),r=new pe(t,e),i=new pe(t,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const t=new I(new V([])),r=new pe(t,e),i=new pe(t,e+1);let s=P();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new pe(e,0),r=this.ls.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.Es=t}static fs(e,t){return I.comparator(e.key,t.key)||D(e.Es,t.Es)}static _s(e,t){return D(e.Es,t.Es)||I.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.As=1,this.Rs=new H(pe.fs)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gu(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.vs(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Ps(r),s=i<0?0:i;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),i=new pe(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new H(D);return t.forEach(i=>{const s=new pe(i,0),o=new pe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),p.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;I.isDocumentKey(s)||(s=s.child(""));const o=new pe(new I(s),0);let a=new H(D);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Es)),!0)},o),p.resolve(this.bs(a))}bs(e){const t=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){C(this.Vs(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return p.forEach(t.mutations,i=>{const s=new pe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,t){const r=new pe(t,0),i=this.Rs.firstAfterOrEqual(r);return p.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Vs(e,t){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const t=this.Ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.Ss=e,this.docs=new G(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return p.resolve(r?r.document.mutableCopy():K.newInvalidDocument(t))}getEntries(e,t){let r=ze();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():K.newInvalidDocument(i))}),p.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ze();const o=t.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Fu(Kp(l),r)<=0||(i.has(l.key)||gs(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(e,t,r,i){S()}Ds(e,t){return p.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new iE(this)}getSize(e){return p.resolve(this.size)}}class iE extends Xm{constructor(e){super(),this.rs=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),p.waitFor(t)}getFromCache(e,t){return this.rs.getEntry(e,t)}getAllFromCache(e,t){return this.rs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.persistence=e,this.Cs=new mn(t=>qn(t),ps),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.xs=0,this.Ns=new el,this.targetCount=0,this.ks=Hn.Nn()}forEachTarget(e,t){return this.Cs.forEach((r,i)=>t(i)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.xs&&(this.xs=t),p.resolve()}$n(e){this.Cs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ks=new Hn(t),this.highestTargetId=t),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,t){return this.$n(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.$n(t),p.resolve()}removeTargetData(e,t){return this.Cs.delete(t.target),this.Ns.ps(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),p.waitFor(s).next(()=>i)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const r=this.Cs.get(t)||null;return p.resolve(r)}addMatchingKeys(e,t,r){return this.Ns.ws(t,r),p.resolve()}removeMatchingKeys(e,t,r){this.Ns.ys(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ns.ps(t),p.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ns.Ts(t);return p.resolve(r)}containsKey(e,t){return p.resolve(this.Ns.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t){this.Ms={},this.overlays={},this.Os=new qe(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new sE(this),this.indexManager=new jT,this.remoteDocumentCache=function(r){return new rE(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new jm(t),this.Ls=new eE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ms[e.toKey()];return r||(r=new nE(t,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,t,r){v("MemoryPersistence","Starting transaction:",e);const i=new oE(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,t){return p.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,t)))}}class oE extends Wp{constructor(e){super(),this.currentSequenceNumber=e}}class ca{constructor(e){this.persistence=e,this.Gs=new el,this.Qs=null}static js(e){return new ca(e)}get zs(){if(this.Qs)return this.Qs;throw S()}addReference(e,t,r){return this.Gs.addReference(r,t),this.zs.delete(r.toString()),p.resolve()}removeReference(e,t,r){return this.Gs.removeReference(r,t),this.zs.add(r.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.zs.add(t.toString()),p.resolve()}removeTarget(e,t){this.Gs.ps(t.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}qs(){this.Qs=new Set}Us(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.zs,r=>{const i=I.fromPath(r);return this.Ws(e,i).next(s=>{s||t.removeEntry(i,A.min())})}).next(()=>(this.Qs=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ws(e,t).next(r=>{r?this.zs.delete(t.toString()):this.zs.add(t.toString())})}Bs(e){return 0}Ws(e,t){return p.or([()=>p.resolve(this.Gs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ks(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.serializer=e}$(e,t,r,i){const s=new ta("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Uh,{unique:!0}),a.createObjectStore("documentMutations")}(e),Ed(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=p.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Ed(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:A.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Uh,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return p.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Js(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ys(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xs(s))),r<8&&i>=8&&(o=o.next(()=>this.Zs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:zI});c.createIndex("collectionPathOverlayIndex",GI,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",KI,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:PI});c.createIndex("documentKeyIndex",OI),c.createIndex("collectionGroupIndex",LI)}(e)).next(()=>this.ei(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ni(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:BI}).createIndex("sequenceNumberIndex",$I,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:qI}).createIndex("documentKeyIndex",jI,{unique:!1})}(e))),o}Ys(e){let t=0;return e.store("remoteDocuments").X((r,i)=>{t+=So(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Js(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>p.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>p.forEach(a,c=>{C(c.userId===s.userId);const u=bn(this.serializer,c);return Hm(e,s.userId,u).next(()=>{})}))}))}Xs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new V(o),u=function(l){return[0,Ve(l)]}(c);s.push(t.get(u).next(l=>l?p.resolve():(h=>t.put({targetId:0,path:Ve(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>p.waitFor(s))})}Zs(e,t){e.createObjectStore("collectionParents",{keyPath:VI});const r=t.store("collectionParents"),i=new Zu,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ve(c)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new V(o);return s(c.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,c],u)=>{const l=ft(a);return s(l.popLast())}))}ti(e){const t=e.store("targets");return t.X((r,i)=>{const s=_i(i),o=zm(this.serializer,s);return t.put(o)})}ei(e,t){const r=t.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new I(V.fromString(u.document.name).popFirst(5)):u.noDocument?I.fromSegments(u.noDocument.path):u.unknownDocument?I.fromSegments(u.unknownDocument.path):S()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>p.waitFor(i))}ni(e,t){const r=t.store("mutations"),i=Ym(this.serializer),s=new Zm(ca.js,this.serializer.le);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:P();bn(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),p.forEach(a,(c,u)=>{const l=new me(u),h=oa.fe(this.serializer,l),d=s.getIndexManager(l),f=aa.fe(l,this.serializer,d,s.referenceDelegate);return new Jm(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Dc(t,qe.ct),c).next()})})}}function Ed(n){n.createObjectStore("targetDocuments",{keyPath:FI}).createIndex("documentTargetsIndex",UI,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",MI,{unique:!0}),n.createObjectStore("targetGlobal")}const Ya="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class tl{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.si=s,this.window=o,this.document=a,this.ii=u,this.ri=l,this.oi=h,this.Os=null,this.$s=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.ai=null,this.hi=Number.NEGATIVE_INFINITY,this.li=d=>Promise.resolve(),!tl.D())throw new y(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new XT(this,i),this.fi=t+"main",this.serializer=new jm(c),this.di=new nt(this.fi,this.oi,new aE(this.serializer)),this.Fs=new GT(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ym(this.serializer),this.Ls=new MT,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,l===!1&&ie("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,Ya);return this.mi(),this.gi(),this.yi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Fs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new qe(e,this.ii)}).then(()=>{this.$s=!0}).catch(e=>(this.di&&this.di.close(),Promise.reject(e)))}pi(e){return this.li=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.di.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>$s(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ii(e).next(t=>{t||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)))})}).next(()=>this.Ti(e)).next(t=>this.isPrimary&&!t?this.Ei(e).next(()=>!1):!!t&&this.Ai(e).next(()=>!0))).catch(e=>{if(pn(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.li(e)),this.isPrimary=e})}Ii(e){return li(e).get("owner").next(t=>p.resolve(this.Ri(t)))}vi(e){return $s(e).delete(this.clientId)}async Pi(){if(this.isPrimary&&!this.bi(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=we(t,"clientMetadata");return r.j().next(i=>{const s=this.Vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return p.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Si(t.clientId))}}yi(){this.ai=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Pi()).then(()=>this.yi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ti(e){return this.ri?p.resolve(!0):li(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Di(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,Ya);return!1}}return!(!this.networkEnabled||!this.inForeground)||$s(e).j().next(r=>this.Vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&v("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.$s=!1,this.Ci(),this.ai&&(this.ai.cancel(),this.ai=null),this.xi(),this.Ni(),await this.di.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Dc(e,qe.ct);return this.Ei(t).next(()=>this.vi(t))}),this.di.close(),this.ki()}Vi(e,t){return e.filter(r=>this.bi(r.updateTimeMs,t)&&!this.Di(r.clientId))}Mi(){return this.runTransaction("getActiveClients","readonly",e=>$s(e).j().next(t=>this.Vi(t,18e5).map(r=>r.clientId)))}get started(){return this.$s}getMutationQueue(e,t){return aa.fe(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new zT(e,this.serializer.le.databaseId)}getDocumentOverlayCache(e){return oa.fe(this.serializer,e)}getBundleCache(){return this.Ls}runTransaction(e,t,r){v("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.oi)===15?WI:o===14?Zp:o===13?Jp:o===12?HI:o===11?Yp:void S();var o;let a;return this.di.runTransaction(e,i,s,c=>(a=new Dc(c,this.Os?this.Os.next():qe.ct),t==="readwrite-primary"?this.Ii(a).next(u=>!!u||this.Ti(a)).next(u=>{if(!u)throw ie(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)),new y(m.FAILED_PRECONDITION,Hp);return r(a)}).next(u=>this.Ai(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return li(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Di(t.ownerId)&&!this.Ri(t)&&!(this.ri||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(m.FAILED_PRECONDITION,Ya)})}Ai(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return li(e).put("owner",t)}static D(){return nt.D()}Ei(e){const t=li(e);return t.get("owner").next(r=>this.Ri(r)?(v("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):p.resolve())}bi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ie(`Detected an update time that is in the future: ${e} > ${r}`),!1))}mi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Ci();const t=/(?:Version|Mobile)\/1[456]/;Uv()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Ni(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Di(e){var t;try{const r=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Si(e)))!==null;return v("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ie("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ci(){if(this._i)try{this._i.setItem(this.Si(this.clientId),String(Date.now()))}catch(e){ie("Failed to set zombie client id.",e)}}ki(){if(this._i)try{this._i.removeItem(this.Si(this.clientId))}catch{}}Si(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function li(n){return we(n,"owner")}function $s(n){return we(n,"clientMetadata")}function nl(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Fi=i}static Bi(e,t){let r=P(),i=P();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rl(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.Li=!1}initialize(e,t){this.qi=e,this.indexManager=t,this.Li=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ui(e,t).next(s=>s||this.Ki(e,t,i,r)).next(s=>s||this.Gi(e,t))}Ui(e,t){if(Xh(t))return p.resolve(null);let r=Ge(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=To(t,null,"F"),r=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=P(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Qi(t,a);return this.ji(t,u,o,c.readTime)?this.Ui(e,To(t,null,"F")):this.zi(e,u,t,c)}))})))}Ki(e,t,r,i){return Xh(t)||i.isEqual(A.min())?this.Gi(e,t):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(t,s);return this.ji(t,o,r,i)?this.Gi(e,t):(Rc()<=U.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Uc(t)),this.zi(e,o,t,Gp(i,-1)))})}Qi(e,t){let r=new H(pm(e));return t.forEach((i,s)=>{gs(e,s)&&(r=r.add(s))}),r}ji(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,t){return Rc()<=U.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Uc(t)),this.qi.getDocumentsMatchingQuery(e,t,Qe.min())}zi(e,t,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,t,r,i){this.persistence=e,this.Wi=t,this.serializer=i,this.Hi=new G(D),this.Ji=new mn(s=>qn(s),ps),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jm(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Hi))}}function tg(n,e,t,r){return new cE(n,e,t,r)}async function ng(n,e){const t=T(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Zi(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=P();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function uE(n,e){const t=T(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(g=>{const w=c.docVersions.get(f);C(w!==null),g.version.compareTo(w)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=P();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function rg(n){const e=T(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Fs.getLastRemoteSnapshotVersion(t))}function lE(n,e){const t=T(n),r=e.snapshotVersion;let i=t.Hi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});i=t.Hi;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Fs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Fs.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(de.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(g,w,E){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,l)&&a.push(t.Fs.updateTargetData(s,f))});let c=ze(),u=P();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(ig(s,o,e.documentUpdates).next(l=>{c=l.er,u=l.nr})),!r.isEqual(A.min())){const l=t.Fs.getLastRemoteSnapshotVersion(s).next(h=>t.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Hi=i,s))}function ig(n,e,t){let r=P(),i=P();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=ze();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{er:o,nr:i}})}function hE(n,e){const t=T(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Pr(n,e){const t=T(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Fs.getTargetData(r,e).next(s=>s?(i=s,p.resolve(i)):t.Fs.allocateTargetId(r).next(o=>(i=new kt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Hi=t.Hi.insert(r.targetId,r),t.Ji.set(e,r.targetId)),r})}async function Or(n,e,t){const r=T(n),i=r.Hi.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function ko(n,e,t){const r=T(n);let i=A.min(),s=P();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=T(a),h=l.Ji.get(u);return h!==void 0?p.resolve(l.Hi.get(h)):l.Fs.getTargetData(c,u)}(r,o,Ge(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,t?i:A.min(),t?s:P())).next(a=>(ag(r,fm(e),a),{documents:a,sr:s})))}function sg(n,e){const t=T(n),r=T(t.Fs),i=t.Hi.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.he(s,e).next(o=>o?o.target:null))}function og(n,e){const t=T(n),r=t.Yi.get(e)||A.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Xi.getAllFromCollectionGroup(i,e,Gp(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(ag(t,e,i),i))}function ag(n,e,t){let r=n.Yi.get(e)||A.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Yi.set(e,r)}async function dE(n,e,t,r){const i=T(n);let s=P(),o=ze();for(const u of t){const l=e.ir(u.metadata.name);u.document&&(s=s.add(l));const h=e.rr(u);h.setReadTime(e.ur(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await Pr(i,function(u){return Ge(Gr(V.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>ig(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Fs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Fs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.er,l.nr)).next(()=>l.er)))}async function fE(n,e,t=P()){const r=await Pr(n,Ge(Yu(e.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=oe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ls.saveNamedQuery(s,e);const a=r.withResumeToken(de.EMPTY_BYTE_STRING,o);return i.Hi=i.Hi.insert(a.targetId,a),i.Fs.updateTargetData(s,a).next(()=>i.Fs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Fs.addMatchingKeys(s,t,r.targetId)).next(()=>i.Ls.saveNamedQuery(s,e))})}function bd(n,e){return`firestore_clients_${n}_${e}`}function Sd(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ja(n,e){return`firestore_targets_${n}_${e}`}class Ao{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static cr(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new y(i.error.code,i.error.message))),o?new Ao(e,t,i.state,s):(ie("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ai{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static cr(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new y(r.error.code,r.error.message))),s?new Ai(e,r.state,i):(ie("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Co{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static cr(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=ju();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Qp(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Co(e,s):(ie("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class il{constructor(e,t){this.clientId=e,this.onlineState=t}static cr(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new il(t.clientId,t.onlineState):(ie("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Gc{constructor(){this.activeTargetIds=ju()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Za{constructor(e,t,r,i,s){this.window=e,this.si=t,this.persistenceKey=r,this.dr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.wr.bind(this),this.mr=new G(D),this.started=!1,this.gr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.yr=bd(this.persistenceKey,this.dr),this.pr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.mr=this.mr.insert(this.dr,new Gc),this.Ir=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Tr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Er=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ar=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Mi();for(const r of e){if(r===this.dr)continue;const i=this.getItem(bd(this.persistenceKey,r));if(i){const s=Co.cr(r,i);s&&(this.mr=this.mr.insert(s.clientId,s))}}this.vr();const t=this.storage.getItem(this.Ar);if(t){const r=this.Pr(t);r&&this.br(r)}for(const r of this.gr)this.wr(r);this.gr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.pr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Vr(this.mr)}isActiveQueryTarget(e){let t=!1;return this.mr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Sr(e,"pending")}updateMutationState(e,t,r){this.Sr(e,t,r),this.Dr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Ja(this.persistenceKey,e));if(r){const i=Ai.cr(e,r);i&&(t=i.state)}}return this.Cr.hr(e),this.vr(),t}removeLocalQueryTarget(e){this.Cr.lr(e),this.vr()}isLocalQueryTarget(e){return this.Cr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ja(this.persistenceKey,e))}updateQueryState(e,t,r){this.Nr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Dr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.kr(e)}notifyBundleLoaded(e){this.Mr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.yr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return v("SharedClientState","READ",e,t),t}setItem(e,t){v("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){v("SharedClientState","REMOVE",e),this.storage.removeItem(e)}wr(e){const t=e;if(t.storageArea===this.storage){if(v("SharedClientState","EVENT",t.key,t.newValue),t.key===this.yr)return void ie("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ir.test(t.key)){if(t.newValue==null){const r=this.Or(t.key);return this.$r(r,null)}{const r=this.Fr(t.key,t.newValue);if(r)return this.$r(r.clientId,r)}}else if(this.Tr.test(t.key)){if(t.newValue!==null){const r=this.Br(t.key,t.newValue);if(r)return this.Lr(r)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const r=this.qr(t.key,t.newValue);if(r)return this.Ur(r)}}else if(t.key===this.Ar){if(t.newValue!==null){const r=this.Pr(t.newValue);if(r)return this.br(r)}}else if(t.key===this.pr){const r=function(i){let s=qe.ct;if(i!=null)try{const o=JSON.parse(i);C(typeof o=="number"),s=o}catch(o){ie("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==qe.ct&&this.sequenceNumberHandler(r)}else if(t.key===this.Rr){const r=this.Kr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Gr(i)))}}}else this.gr.push(t)})}}get Cr(){return this.mr.get(this.dr)}vr(){this.setItem(this.yr,this.Cr.ar())}Sr(e,t,r){const i=new Ao(this.currentUser,e,t,r),s=Sd(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ar())}Dr(e){const t=Sd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}kr(e){const t={clientId:this.dr,onlineState:e};this.storage.setItem(this.Ar,JSON.stringify(t))}Nr(e,t,r){const i=Ja(this.persistenceKey,e),s=new Ai(e,t,r);this.setItem(i,s.ar())}Mr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Ir.exec(e);return t?t[1]:null}Fr(e,t){const r=this.Or(e);return Co.cr(r,t)}Br(e,t){const r=this.Tr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Ao.cr(new me(s),i,t)}qr(e,t){const r=this.Er.exec(e),i=Number(r[1]);return Ai.cr(i,t)}Pr(e){return il.cr(e)}Kr(e){return JSON.parse(e)}async Lr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Qr(e.batchId,e.state,e.error);v("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ur(e){return this.syncEngine.jr(e.targetId,e.state,e.error)}$r(e,t){const r=t?this.mr.insert(e,t):this.mr.remove(e),i=this.Vr(this.mr),s=this.Vr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.zr(o,a).then(()=>{this.mr=r})}br(e){this.mr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Vr(e){let t=ju();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class cg{constructor(){this.Wr=new Gc,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,t,r){this.Hr[e]=t}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Gc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs=null;function ec(){return qs===null?qs=268435456+Math.round(2147483648*Math.random()):qs++,"0x"+qs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class yE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.wo=t+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,t,r,i,s){const o=ec(),a=this.Io(e,t);v("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.To(c,i,s),this.Eo(e,a,c,r).then(u=>(v("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw it("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,t,r,i,s,o){return this.po(e,t,r,i,s)}To(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+zr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,t){const r=mE[e];return`${this.wo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,t,r,i){const s=ec();return new Promise((o,a)=>{const c=new fI;c.setWithCredentials(!0),c.listenOnce(lI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qa.NO_ERROR:const l=c.getResponseJson();v(Re,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Qa.TIMEOUT:v(Re,`RPC '${e}' ${s} timed out`),a(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case Qa.HTTP_ERROR:const h=c.getStatus();if(v(Re,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(w){const E=w.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(E)>=0?E:m.UNKNOWN}(f.status);a(new y(g,f.message))}else a(new y(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(m.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{v(Re,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);v(Re,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}Ro(e,t,r){const i=ec(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cI(),a=uI(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new dI({})),this.To(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=s.join("");v(Re,`Creating RPC '${e}' stream ${i}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const f=new gE({io:w=>{d?v(Re,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(v(Re,`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),v(Re,`RPC '${e}' stream ${i} sending:`,w),l.send(w))},ro:()=>l.close()}),g=(w,E,x)=>{w.listen(E,M=>{try{x(M)}catch(R){setTimeout(()=>{throw R},0)}})};return g(l,Ls.EventType.OPEN,()=>{d||v(Re,`RPC '${e}' stream ${i} transport opened.`)}),g(l,Ls.EventType.CLOSE,()=>{d||(d=!0,v(Re,`RPC '${e}' stream ${i} transport closed`),f.fo())}),g(l,Ls.EventType.ERROR,w=>{d||(d=!0,it(Re,`RPC '${e}' stream ${i} transport errored:`,w),f.fo(new y(m.UNAVAILABLE,"The operation could not be completed")))}),g(l,Ls.EventType.MESSAGE,w=>{var E;if(!d){const x=w.data[0];C(!!x);const M=x,R=M.error||((E=M[0])===null||E===void 0?void 0:E.error);if(R){v(Re,`RPC '${e}' stream ${i} received error:`,R);const O=R.status;let q=function(ce){const Ce=ue[ce];if(Ce!==void 0)return Cm(Ce)}(O),B=R.message;q===void 0&&(q=m.INTERNAL,B="Unknown error status: "+O+" with message "+R.message),d=!0,f.fo(new y(q,B)),l.close()}else v(Re,`RPC '${e}' stream ${i} received:`,x),f._o(x)}}),g(a,hI.STAT_EVENT,w=>{w.stat===Oh.PROXY?v(Re,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===Oh.NOPROXY&&v(Re,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.lo()},0),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(){return typeof window<"u"?window:null}function Js(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){return new ST(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=t,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const t=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,t-r);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t,r,i,s,o,a,c){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new sl(e,t)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,t){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(ie(t.toString()),ie("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(t)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),t=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===t&&this.Xo(r,i)},r=>{e(()=>{const i=new y(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,t){const r=this.Yo(this.$o);this.stream=this.tu(e,t),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return t=>{this.si.enqueueAndForget(()=>this.$o===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vE extends lg{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}tu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.Lo.reset();const t=CT(this.serializer,e),r=function(i){if(!("targetChange"in i))return A.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?A.min():s.readTime?oe(s.readTime):A.min()}(e);return this.listener.eu(t,r)}nu(e){const t={};t.database=Hi(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;if(o=_o(a)?{documents:Fm(i,a)}:{query:Um(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=xm(i,s.resumeToken);const c=Vc(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(A.min())>0){o.readTime=xr(i,s.snapshotVersion.toTimestamp());const c=Vc(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=NT(this.serializer,e);r&&(t.labels=r),this.zo(t)}su(e){const t={};t.database=Hi(this.serializer),t.removeTarget=e,this.zo(t)}}class wE extends lg{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(C(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const t=RT(e.writeResults,e.commitTime),r=oe(e.commitTime);return this.listener.uu(r,t)}return C(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Hi(this.serializer),this.zo(e)}ou(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Wi(this.serializer,r))};this.zo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,t,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(m.UNKNOWN,i.toString())})}Ao(e,t,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(m.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class IE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(ie(t),this.wu=!1):v("OnlineStateTracker",t)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{gn(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=T(a);c.Au.add(4),await Wr(c),c.Pu.set("Unknown"),c.Au.delete(4),await Is(c)}(this))})}),this.Pu=new IE(r,i)}}async function Is(n){if(gn(n))for(const e of n.Ru)await e(!0)}async function Wr(n){for(const e of n.Ru)await e(!1)}function ua(n,e){const t=T(n);t.Eu.has(e.targetId)||(t.Eu.set(e.targetId,e),cl(t)?al(t):Xr(t).Uo()&&ol(t,e))}function Qi(n,e){const t=T(n),r=Xr(t);t.Eu.delete(e),r.Uo()&&hg(t,e),t.Eu.size===0&&(r.Uo()?r.Qo():gn(t)&&t.Pu.set("Unknown"))}function ol(n,e){if(n.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(A.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xr(n).nu(e)}function hg(n,e){n.bu.Lt(e),Xr(n).su(e)}function al(n){n.bu=new IT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),he:e=>n.Eu.get(e)||null,oe:()=>n.datastore.serializer.databaseId}),Xr(n).start(),n.Pu.mu()}function cl(n){return gn(n)&&!Xr(n).qo()&&n.Eu.size>0}function gn(n){return T(n).Au.size===0}function dg(n){n.bu=void 0}async function EE(n){n.Eu.forEach((e,t)=>{ol(n,e)})}async function bE(n,e){dg(n),cl(n)?(n.Pu.pu(e),al(n)):n.Pu.set("Unknown")}async function SE(n,e,t){if(n.Pu.set("Online"),e instanceof Dm&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(n,e)}catch(r){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ro(n,r)}else if(e instanceof Ys?n.bu.Wt(e):e instanceof Nm?n.bu.ee(e):n.bu.Yt(e),!t.isEqual(A.min()))try{const r=await rg(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(c);u&&i.Eu.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(de.EMPTY_BYTE_STRING,u.snapshotVersion)),hg(i,a);const l=new kt(u.target,a,c,u.sequenceNumber);ol(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){v("RemoteStore","Failed to raise snapshot:",r),await Ro(n,r)}}async function Ro(n,e,t){if(!pn(e))throw e;n.Au.add(1),await Wr(n),n.Pu.set("Offline"),t||(t=()=>rg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.Au.delete(1),await Is(n)})}function fg(n,e){return e().catch(t=>Ro(n,t,e))}async function Qr(n){const e=T(n),t=an(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;kE(e);)try{const i=await hE(e.localStore,r);if(i===null){e.Tu.length===0&&t.Qo();break}r=i.batchId,AE(e,i)}catch(i){await Ro(e,i)}pg(e)&&mg(e)}function kE(n){return gn(n)&&n.Tu.length<10}function AE(n,e){n.Tu.push(e);const t=an(n);t.Uo()&&t.ru&&t.ou(e.mutations)}function pg(n){return gn(n)&&!an(n).qo()&&n.Tu.length>0}function mg(n){an(n).start()}async function CE(n){an(n).au()}async function RE(n){const e=an(n);for(const t of n.Tu)e.ou(t.mutations)}async function NE(n,e,t){const r=n.Tu.shift(),i=Ku.from(r,e,t);await fg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Qr(n)}async function DE(n,e){e&&an(n).ru&&await async function(t,r){if(i=r.code,Am(i)&&i!==m.ABORTED){const s=t.Tu.shift();an(t).Go(),await fg(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Qr(t)}var i}(n,e),pg(n)&&mg(n)}async function Ad(n,e){const t=T(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const r=gn(t);t.Au.add(3),await Wr(t),r&&t.Pu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Au.delete(3),await Is(t)}async function Kc(n,e){const t=T(n);e?(t.Au.delete(2),await Is(t)):e||(t.Au.add(2),await Wr(t),t.Pu.set("Unknown"))}function Xr(n){return n.Vu||(n.Vu=function(e,t,r){const i=T(e);return i.lu(),new vE(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{oo:EE.bind(null,n),co:bE.bind(null,n),eu:SE.bind(null,n)}),n.Ru.push(async e=>{e?(n.Vu.Go(),cl(n)?al(n):n.Pu.set("Unknown")):(await n.Vu.stop(),dg(n))})),n.Vu}function an(n){return n.Su||(n.Su=function(e,t,r){const i=T(e);return i.lu(),new wE(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{oo:CE.bind(null,n),co:DE.bind(null,n),cu:RE.bind(null,n),uu:NE.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Go(),await Qr(n)):(await n.Su.stop(),n.Tu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.Tu.length} pending writes`),n.Tu=[]))})),n.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new ul(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yr(n,e){if(ie("AsyncQueue",`${e}: ${n}`),pn(n))return new y(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.comparator=e?(t,r)=>e(t,r)||I.comparator(t.key,r.key):(t,r)=>I.comparator(t.key,r.key),this.keyedMap=vi(),this.sortedSet=new G(this.comparator)}static emptySet(e){return new _r(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _r)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new _r;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.Du=new G(I.comparator)}track(e){const t=e.doc.key,r=this.Du.get(t);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(t,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(t):e.type===1&&r.type===2?this.Du=this.Du.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(t,{type:2,doc:e.doc}):S():this.Du=this.Du.insert(t,e)}Cu(){const e=[];return this.Du.inorderTraversal((t,r)=>{e.push(r)}),e}}class Lr{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Lr(e,t,_r.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ms(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.xu=void 0,this.listeners=[]}}class PE{constructor(){this.queries=new mn(e=>dm(e),ms),this.onlineState="Unknown",this.Nu=new Set}}async function ll(n,e){const t=T(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new xE),i)try{s.xu=await t.onListen(r)}catch(o){const a=Yr(o,`Initialization of query '${Uc(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.ku(t.onlineState),s.xu&&e.Mu(s.xu)&&dl(t)}async function hl(n,e){const t=T(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function OE(n,e){const t=T(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&dl(t)}function LE(n,e,t){const r=T(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function dl(n){n.Nu.forEach(e=>{e.next()})}class fl{constructor(e,t,r){this.query=e,this.Ou=t,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Lr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.qu(e),t=!0),this.Fu=e,t}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let t=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),t=!0),t}Lu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const t=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qu(e){e=Lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t){this.Ku=e,this.byteLength=t}Gu(){return"metadata"in this.Ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.serializer=e}ir(e){return gt(this.serializer,e)}rr(e){return e.metadata.exists?Mm(this.serializer,e.document,!1):K.newNoDocument(this.ir(e.metadata.name),this.ur(e.metadata.readTime))}ur(e){return oe(e)}}class FE{constructor(e,t,r){this.Qu=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=gg(e)}ju(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ku.namedQuery)this.queries.push(e.Ku.namedQuery);else if(e.Ku.documentMetadata){this.documents.push({metadata:e.Ku.documentMetadata}),e.Ku.documentMetadata.exists||++t;const r=V.fromString(e.Ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ku.document&&(this.documents[this.documents.length-1].document=e.Ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}zu(e){const t=new Map,r=new Rd(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.ir(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||P()).add(s);t.set(o,a)}}return t}async complete(){const e=await dE(this.localStore,new Rd(this.serializer),this.documents,this.Qu.id),t=this.zu(this.documents);for(const r of this.queries)await fE(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Hu:e}}}function gg(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.key=e}}class vg{constructor(e){this.key=e}}class wg{constructor(e,t){this.query=e,this.Ju=t,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=P(),this.mutatedKeys=P(),this.Zu=pm(e),this.tc=new _r(this.Zu)}get ec(){return this.Ju}nc(e,t){const r=t?t.sc:new Cd,i=t?t.tc:this.tc;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=gs(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),w=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?g!==w&&(r.track({type:3,doc:f}),E=!0):this.ic(d,f)||(r.track({type:2,doc:f}),E=!0,(c&&this.Zu(f,c)>0||u&&this.Zu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(f?(o=o.add(f),s=w?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,l)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return f(h)-f(d)}(u.type,l.type)||this.Zu(u.doc,l.doc)),this.rc(r);const o=t?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,s.length!==0||c?{snapshot:new Lr(this.query,e.tc,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Cd,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(t=>this.Ju=this.Ju.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ju=this.Ju.delete(t)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=P(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const t=[];return e.forEach(r=>{this.Xu.has(r)||t.push(new vg(r))}),this.Xu.forEach(r=>{e.has(r)||t.push(new yg(r))}),t}ac(e){this.Ju=e.sr,this.Xu=P();const t=this.nc(e.documents);return this.applyChanges(t,!0)}hc(){return Lr.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class UE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class VE{constructor(e){this.key=e,this.lc=!1}}class BE{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new mn(a=>dm(a),ms),this._c=new Map,this.wc=new Set,this.mc=new G(I.comparator),this.gc=new Map,this.yc=new el,this.Ic={},this.Tc=new Map,this.Ec=Hn.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function $E(n,e){const t=vl(n);let r,i;const s=t.dc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await Pr(t.localStore,Ge(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await pl(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&ua(t.remoteStore,o)}return i}async function pl(n,e,t,r,i){n.Rc=(h,d,f)=>async function(g,w,E,x){let M=w.view.nc(E);M.ji&&(M=await ko(g.localStore,w.query,!1).then(({documents:q})=>w.view.nc(q,M)));const R=x&&x.targetChanges.get(w.targetId),O=w.view.applyChanges(M,g.isPrimaryClient,R);return Hc(g,w.targetId,O.uc),O.snapshot}(n,h,d,f);const s=await ko(n.localStore,e,!0),o=new wg(e,s.sr),a=o.nc(s.documents),c=ws.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Hc(n,t,u.uc);const l=new UE(e,t,o);return n.dc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function qE(n,e){const t=T(n),r=t.dc.get(e),i=t._c.get(r.targetId);if(i.length>1)return t._c.set(r.targetId,i.filter(s=>!ms(s,e))),void t.dc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Or(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Qi(t.remoteStore,r.targetId),Mr(t,r.targetId)}).catch(fn)):(Mr(t,r.targetId),await Or(t.localStore,r.targetId,!0))}async function jE(n,e,t){const r=wl(n);try{const i=await function(s,o){const a=T(s),c=J.now(),u=o.reduce((d,f)=>d.add(f.key),P());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=ze(),g=P();return a.Xi.getEntries(d,u).next(w=>{f=w,f.forEach((E,x)=>{x.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(w=>{l=w;const E=[];for(const x of o){const M=vT(x,l.get(x.key).overlayedDocument);M!=null&&E.push(new Ut(x.key,M,rm(M.value.mapValue),Y.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,E,o)}).next(w=>{h=w;const E=w.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,w.batchId,E)})}).then(()=>({batchId:h.batchId,changes:gm(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Ic[s.currentUser.toKey()];c||(c=new G(D)),c=c.insert(o,a),s.Ic[s.currentUser.toKey()]=c}(r,i.batchId,t),await Vt(r,i.changes),await Qr(r.remoteStore)}catch(i){const s=Yr(i,"Failed to persist write");t.reject(s)}}async function _g(n,e){const t=T(n);try{const r=await lE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.gc.get(s);o&&(C(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?C(o.lc):i.removedDocuments.size>0&&(C(o.lc),o.lc=!1))}),await Vt(t,r,e)}catch(r){await fn(r)}}function Nd(n,e,t){const r=T(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=T(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.ku(o)&&(c=!0)}),c&&dl(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zE(n,e,t){const r=T(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new G(I.comparator);o=o.insert(s,K.newNoDocument(s,A.min()));const a=P().add(s),c=new vs(A.min(),new Map,new G(D),o,a);await _g(r,c),r.mc=r.mc.remove(s),r.gc.delete(e),yl(r)}else await Or(r.localStore,e,!1).then(()=>Mr(r,e,t)).catch(fn)}async function GE(n,e){const t=T(n),r=e.batch.batchId;try{const i=await uE(t.localStore,e);gl(t,r,null),ml(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vt(t,i)}catch(i){await fn(i)}}async function KE(n,e,t){const r=T(n);try{const i=await function(s,o){const a=T(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(C(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);gl(r,e,t),ml(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vt(r,i)}catch(i){await fn(i)}}async function HE(n,e){const t=T(n);gn(t.remoteStore)||v("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=T(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Tc.get(r)||[];i.push(e),t.Tc.set(r,i)}catch(r){const i=Yr(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ml(n,e){(n.Tc.get(e)||[]).forEach(t=>{t.resolve()}),n.Tc.delete(e)}function gl(n,e,t){const r=T(n);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function Mr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.dc.delete(r),t&&n.fc.vc(r,t);n._c.delete(e),n.isPrimaryClient&&n.yc.ps(e).forEach(r=>{n.yc.containsKey(r)||Ig(n,r)})}function Ig(n,e){n.wc.delete(e.path.canonicalString());const t=n.mc.get(e);t!==null&&(Qi(n.remoteStore,t),n.mc=n.mc.remove(e),n.gc.delete(t),yl(n))}function Hc(n,e,t){for(const r of t)r instanceof yg?(n.yc.addReference(r.key,e),WE(n,r)):r instanceof vg?(v("SyncEngine","Document no longer in limbo: "+r.key),n.yc.removeReference(r.key,e),n.yc.containsKey(r.key)||Ig(n,r.key)):S()}function WE(n,e){const t=e.key,r=t.path.canonicalString();n.mc.get(t)||n.wc.has(r)||(v("SyncEngine","New document in limbo: "+t),n.wc.add(r),yl(n))}function yl(n){for(;n.wc.size>0&&n.mc.size<n.maxConcurrentLimboResolutions;){const e=n.wc.values().next().value;n.wc.delete(e);const t=new I(V.fromString(e)),r=n.Ec.next();n.gc.set(r,new VE(t)),n.mc=n.mc.insert(t,r),ua(n.remoteStore,new kt(Ge(Gr(t.path)),r,"TargetPurposeLimboResolution",qe.ct))}}async function Vt(n,e,t){const r=T(n),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,c)=>{o.push(r.Rc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=rl.Bi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,c){const u=T(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!pn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Hi.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);u.Hi=u.Hi.insert(h,g)}}}(r.localStore,s))}async function QE(n,e){const t=T(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const r=await ng(t.localStore,e);t.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new y(m.CANCELLED,s))})}),i.Tc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vt(t,r.tr)}}function XE(n,e){const t=T(n),r=t.gc.get(e);if(r&&r.lc)return P().add(r.key);{let i=P();const s=t._c.get(e);if(!s)return i;for(const o of s){const a=t.dc.get(o);i=i.unionWith(a.view.ec)}return i}}async function YE(n,e){const t=T(n),r=await ko(t.localStore,e.query,!0),i=e.view.ac(r);return t.isPrimaryClient&&Hc(t,e.targetId,i.uc),i}async function JE(n,e){const t=T(n);return og(t.localStore,e).then(r=>Vt(t,r))}async function ZE(n,e,t,r){const i=T(n),s=await function(o,a){const c=T(o),u=T(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Vn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):p.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Qr(i.remoteStore):t==="acknowledged"||t==="rejected"?(gl(i,e,r||null),ml(i,e),function(o,a){T(T(o).mutationQueue).Dn(a)}(i.localStore,e)):S(),await Vt(i,s)):v("SyncEngine","Cannot apply mutation batch with id: "+e)}async function eb(n,e){const t=T(n);if(vl(t),wl(t),e===!0&&t.Ac!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await Dd(t,r.toArray());t.Ac=!0,await Kc(t.remoteStore,!0);for(const s of i)ua(t.remoteStore,s)}else if(e===!1&&t.Ac!==!1){const r=[];let i=Promise.resolve();t._c.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Mr(t,o),Or(t.localStore,o,!0))),Qi(t.remoteStore,o)}),await i,await Dd(t,r),function(s){const o=T(s);o.gc.forEach((a,c)=>{Qi(o.remoteStore,c)}),o.yc.Is(),o.gc=new Map,o.mc=new G(I.comparator)}(t),t.Ac=!1,await Kc(t.remoteStore,!1)}}async function Dd(n,e,t){const r=T(n),i=[],s=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await Pr(r.localStore,Ge(c[0]));for(const u of c){const l=r.dc.get(u),h=await YE(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await sg(r.localStore,o);a=await Pr(r.localStore,u),await pl(r,Tg(u),o,!1,a.resumeToken)}i.push(a)}return r.fc.eu(s),i}function Tg(n){return hm(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function tb(n){const e=T(n);return T(T(e.localStore).persistence).Mi()}async function nb(n,e,t,r){const i=T(n);if(i.Ac)return void v("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await og(i.localStore,fm(s[0])),a=vs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",de.EMPTY_BYTE_STRING);await Vt(i,o,a);break}case"rejected":await Or(i.localStore,e,!0),Mr(i,e,r);break;default:S()}}async function rb(n,e,t){const r=vl(n);if(r.Ac){for(const i of e){if(r._c.has(i)){v("SyncEngine","Adding an already active target "+i);continue}const s=await sg(r.localStore,i),o=await Pr(r.localStore,s);await pl(r,Tg(s),o.targetId,!1,o.resumeToken),ua(r.remoteStore,o)}for(const i of t)r._c.has(i)&&await Or(r.localStore,i,!1).then(()=>{Qi(r.remoteStore,i),Mr(r,i)}).catch(fn)}}function vl(n){const e=T(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=_g.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zE.bind(null,e),e.fc.eu=OE.bind(null,e.eventManager),e.fc.vc=LE.bind(null,e.eventManager),e}function wl(n){const e=T(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KE.bind(null,e),e}function ib(n,e,t){const r=T(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=T(h),g=oe(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",w=>f.Ls.getBundleMetadata(w,d.id)).then(w=>!!w&&w.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(gg(a));const c=new FE(a,i.localStore,s.serializer);let u=await s.Pc();for(;u;){const h=await c.ju(u);h&&o._updateProgress(h),u=await s.Pc()}const l=await c.complete();return await Vt(i,l.Hu,void 0),await function(h,d){const f=T(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.Ls.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Wu)}catch(a){return it("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Wc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_s(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return tg(this.persistence,new eg,e.initialUser,this.serializer)}createPersistence(e){return new Zm(ca.js,this.serializer)}createSharedClientState(e){return new cg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Eg extends Wc{constructor(e,t,r){super(),this.bc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.bc.initialize(this,e),await wl(this.bc.syncEngine),await Qr(this.bc.remoteStore),await this.persistence.pi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return tg(this.persistence,new eg,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new HT(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new NI(t,this.persistence);return new RI(e.asyncQueue,r)}createPersistence(e){const t=nl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Be.withCacheSize(this.cacheSizeBytes):Be.DEFAULT;return new tl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,ug(),Js(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new cg}}class sb extends Eg{constructor(e,t){super(e,t,!1),this.bc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.bc.syncEngine;this.sharedClientState instanceof Za&&(this.sharedClientState.syncEngine={Qr:ZE.bind(null,t),jr:nb.bind(null,t),zr:rb.bind(null,t),Mi:tb.bind(null,t),Gr:JE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.pi(async r=>{await eb(this.bc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=ug();if(!Za.D(t))throw new y(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=nl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Za(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class _l{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QE.bind(null,this.syncEngine),await Kc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new PE}createDatastore(e){const t=_s(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new yE(i));var i;return function(s,o,a,c){return new _E(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Nd(this.syncEngine,a,0),o=kd.D()?new kd:new pE,new TE(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new BE(r,i,s,o,a,c);return u&&(l.Ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=T(e);v("RemoteStore","RemoteStore shutting down."),t.Au.add(5),await Wr(t),t.vu.shutdown(),t.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):ie("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,t){this.Dc=e,this.serializer=t,this.metadata=new ge,this.buffer=new Uint8Array,this.Cc=new TextDecoder("utf-8"),this.xc().then(r=>{r&&r.Gu()?this.metadata.resolve(r.Ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ku)}`))},r=>this.metadata.reject(r))}close(){return this.Dc.cancel()}async getMetadata(){return this.metadata.promise}async Pc(){return await this.getMetadata(),this.xc()}async xc(){const e=await this.Nc();if(e===null)return null;const t=this.Cc.decode(e),r=Number(t);isNaN(r)&&this.kc(`length string (${t}) is not valid number`);const i=await this.Mc(r);return new ME(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Nc(){for(;this.Oc()<0&&!await this.$c(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.kc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Mc(e){for(;this.buffer.length<e;)await this.$c()&&this.kc("Reached the end of bundle when more is expected.");const t=this.Cc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}kc(e){throw this.Dc.cancel(),new Error(`Invalid bundle format: ${e}`)}async $c(){const e=await this.Dc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=T(r),o=Hi(s.serializer)+"/documents",a={documents:i.map(h=>Ki(s.serializer,h))},c=await s.Ao("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=AT(s.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());C(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Hr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=I.fromPath(r);this.mutations.push(new zu(i,this.precondition(i)))}),await async function(t,r){const i=T(t),s=Hi(i.serializer)+"/documents",o={writes:r.map(a=>Wi(i.serializer,a))};await i.po("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw S();t=A.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new y(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(A.min())?Y.exists(!1):Y.updateTime(t):Y.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(A.min()))throw new y(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Y.updateTime(t)}return Y.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Fc=r.maxAttempts,this.Lo=new sl(this.asyncQueue,"transaction_retry")}run(){this.Fc-=1,this.Bc()}Bc(){this.Lo.xo(async()=>{const e=new ab(this.datastore),t=this.Lc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.qc(i)}))}).catch(r=>{this.qc(r)})})}Lc(e){try{const t=this.updateFunction(e);return!fs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}qc(e){this.Fc>0&&this.Uc(e)?(this.Fc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bc(),Promise.resolve()))):this.deferred.reject(e)}Uc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Am(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=me.UNAUTHENTICATED,this.clientId=qp.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{v("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(v("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Yr(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zs(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ng(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Qc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Il(n);v("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Ad(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ad(e.remoteStore,s)),n._onlineComponents=e}function bg(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Il(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!bg(t))throw t;it("Error using user provided cache. Falling back to memory cache: "+t),await Zs(n,new Wc)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await Zs(n,new Wc);return n._offlineComponents}async function ha(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await Qc(n,n._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await Qc(n,new _l))),n._onlineComponents}function Sg(n){return Il(n).then(e=>e.persistence)}function Tl(n){return Il(n).then(e=>e.localStore)}function kg(n){return ha(n).then(e=>e.remoteStore)}function El(n){return ha(n).then(e=>e.syncEngine)}function lb(n){return ha(n).then(e=>e.datastore)}async function Fr(n){const e=await ha(n),t=e.eventManager;return t.onListen=$E.bind(null,e.syncEngine),t.onUnlisten=qE.bind(null,e.syncEngine),t}function hb(n){return n.asyncQueue.enqueue(async()=>{const e=await Sg(n),t=await kg(n);return e.setNetworkEnabled(!0),function(r){const i=T(r);return i.Au.delete(0),Is(i)}(t)})}function db(n){return n.asyncQueue.enqueue(async()=>{const e=await Sg(n),t=await kg(n);return e.setNetworkEnabled(!1),async function(r){const i=T(r);i.Au.add(0),await Wr(i),i.Pu.set("Offline")}(t)})}function fb(n,e){const t=new ge;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=T(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new y(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Yr(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Tl(n),e,t)),t.promise}function Ag(n,e,t={}){const r=new ge;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new la({next:h=>{s.enqueueAndForget(()=>hl(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new fl(Gr(o.path),u,{includeMetadataChanges:!0,Uu:!0});return ll(i,l)}(await Fr(n),n.asyncQueue,e,t,r)),r.promise}function pb(n,e){const t=new ge;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await ko(r,i,!0),a=new wg(i,o.sr),c=a.nc(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Yr(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Tl(n),e,t)),t.promise}function Cg(n,e,t={}){const r=new ge;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new la({next:h=>{s.enqueueAndForget(()=>hl(i,l)),h.fromCache&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new fl(o,u,{includeMetadataChanges:!0,Uu:!0});return ll(i,l)}(await Fr(n),n.asyncQueue,e,t,r)),r.promise}function mb(n,e){const t=new la(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){T(r).Nu.add(i),i.next()}(await Fr(n),t)),()=>{t.Sc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){T(r).Nu.delete(i)}(await Fr(n),t))}}function gb(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?Rm().encode(s):s,function(c,u){return new ob(c,u)}(function(c,u){if(c instanceof Uint8Array)return xd(c,u);if(c instanceof ArrayBuffer)return xd(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,_s(e));n.asyncQueue.enqueueAndForget(async()=>{ib(await El(n),i,r)})}function yb(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=T(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ls.getNamedQuery(s,r))}(await Tl(n),e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n,e,t){if(!t)throw new y(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Rg(n,e,t,r){if(e===!0&&r===!0)throw new y(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Od(n){if(!I.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ld(n){if(I.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function da(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":S()}function $(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=da(n);throw new y(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Ng(n,e){if(e<=0)throw new y(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Rg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Md({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Md(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new yI;switch(t.type){case"firstParty":return new II(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Pd.get(e);t&&(v("ComponentProvider","Removing Datastore"),Pd.delete(e),t.terminate())}(this),Promise.resolve()}}function vb(n,e,t,r={}){var i;const s=(n=$(n,Ts))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&it("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=me.MOCK_USER;else{o=Tf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new me(c)}n._authCredentials=new vI(new $p(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new W(this.firestore,e,this._key)}}class ke{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ke(this.firestore,e,this._query)}}class yt extends ke{constructor(e,t,r){super(e,t,Gr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new W(this.firestore,null,new I(e))}withConverter(e){return new yt(this.firestore,e,this._path)}}function Dg(n,e,...t){if(n=k(n),bl("collection","path",e),n instanceof Ts){const r=V.fromString(e,...t);return Ld(r),new yt(n,null,r)}{if(!(n instanceof W||n instanceof yt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(V.fromString(e,...t));return Ld(r),new yt(n.firestore,null,r)}}function wb(n,e){if(n=$(n,Ts),bl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ke(n,null,function(t){return new Ft(V.emptyPath(),t)}(e))}function No(n,e,...t){if(n=k(n),arguments.length===1&&(e=qp.A()),bl("doc","path",e),n instanceof Ts){const r=V.fromString(e,...t);return Od(r),new W(n,null,new I(r))}{if(!(n instanceof W||n instanceof yt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(V.fromString(e,...t));return Od(r),new W(n.firestore,n instanceof yt?n.converter:null,new I(r))}}function xg(n,e){return n=k(n),e=k(e),(n instanceof W||n instanceof yt)&&(e instanceof W||e instanceof yt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Pg(n,e){return n=k(n),e=k(e),n instanceof ke&&e instanceof ke&&n.firestore===e.firestore&&ms(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new sl(this,"async_queue_retry"),this.Yc=()=>{const t=Js();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Lo.ko()};const e=Js();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const t=Js();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const t=new ge;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!pn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const t=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ie("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=t,t}enqueueAfterDelay(e,t,r){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);const i=ul.createAndSchedule(this,e,t,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&S()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const t of this.jc)if(t.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.jc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const t=this.jc.indexOf(e);this.jc.splice(t,1)}}function Xc(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Ib{constructor(){this._progressObserver={},this._taskCompletionResolver=new ge,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=-1;class re extends Ts{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new _b,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Og(this),this._firestoreClient.terminate()}}function _e(n){return n._firestoreClient||Og(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Og(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,u){return new YI(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new ub(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function Eb(n,e){Mg(n=$(n,re));const t=_e(n);if(t._uninitializedComponentsProvider)throw new y(m.FAILED_PRECONDITION,"SDK cache is already specified.");it("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new _l;return Lg(t,i,new Eg(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function bb(n){Mg(n=$(n,re));const e=_e(n);if(e._uninitializedComponentsProvider)throw new y(m.FAILED_PRECONDITION,"SDK cache is already specified.");it("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new _l;return Lg(e,r,new sb(r,t.cacheSizeBytes))}function Lg(n,e,t){const r=new ge;return n.asyncQueue.enqueue(async()=>{try{await Zs(n,t),await Qc(n,e),r.resolve()}catch(i){const s=i;if(!bg(s))throw s;it("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function Sb(n){if(n._initialized&&!n._terminated)throw new y(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ge;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!nt.D())return Promise.resolve();const r=t+"main";await nt.delete(r)}(nl(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function kb(n){return function(e){const t=new ge;return e.asyncQueue.enqueueAndForget(async()=>HE(await El(e),t)),t.promise}(_e(n=$(n,re)))}function Ab(n){return hb(_e(n=$(n,re)))}function Cb(n){return db(_e(n=$(n,re)))}function Rb(n,e){const t=_e(n=$(n,re)),r=new Ib;return gb(t,n._databaseId,e,r),r}function Nb(n,e){return yb(_e(n=$(n,re)),e).then(t=>t?new ke(n,null,t.query):null)}function Mg(n){if(n._initialized||n._terminated)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _t(de.fromBase64String(e))}catch(t){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _t(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=/^__.*__$/;class xb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ut(e,this.data,this.fieldMask,t,this.fieldTransforms):new Kr(e,this.data,t,this.fieldTransforms)}}class Fg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ut(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ug(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class pa{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new pa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Do(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Ug(this.ua)&&Db.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Pb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||_s(e)}ga(e,t,r,i=!1){return new pa({ua:e,methodName:t,ma:r,path:se.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rr(n){const e=n._freezeSettings(),t=_s(n._databaseId);return new Pb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ma(n,e,t,r,i,s={}){const o=n.ga(s.merge||s.mergeFields?2:0,e,t,i);Cl("Data must be an object, but it was:",o,r);const a=$g(r,o);let c,u;if(s.merge)c=new je(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Yc(e,h,t);if(!o.contains(d))throw new y(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);jg(l,d)||l.push(d)}c=new je(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new xb(new Ee(a),c,u)}class Es extends nr{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Es}}function Vg(n,e,t){return new pa({ua:3,ma:e.settings.ma,methodName:n._methodName,ha:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Sl extends nr{_toFieldTransform(e){return new ys(e.path,new Nr)}isEqual(e){return e instanceof Sl}}class Ob extends nr{constructor(e,t){super(e),this.ya=t}_toFieldTransform(e){const t=Vg(this,e,!0),r=this.ya.map(s=>ir(s,t)),i=new jn(r);return new ys(e.path,i)}isEqual(e){return this===e}}class Lb extends nr{constructor(e,t){super(e),this.ya=t}_toFieldTransform(e){const t=Vg(this,e,!0),r=this.ya.map(s=>ir(s,t)),i=new zn(r);return new ys(e.path,i)}isEqual(e){return this===e}}class Mb extends nr{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=new Dr(e.serializer,_m(e.serializer,this.pa));return new ys(e.path,t)}isEqual(e){return this===e}}function kl(n,e,t,r){const i=n.ga(1,e,t);Cl("Data must be an object, but it was:",i,r);const s=[],o=Ee.empty();tr(r,(c,u)=>{const l=Rl(e,c,t);u=k(u);const h=i.fa(l);if(u instanceof Es)s.push(l);else{const d=ir(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new je(s);return new Fg(o,a,i.fieldTransforms)}function Al(n,e,t,r,i,s){const o=n.ga(1,e,t),a=[Yc(e,r,t)],c=[i];if(s.length%2!=0)throw new y(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Yc(e,s[d])),c.push(s[d+1]);const u=[],l=Ee.empty();for(let d=a.length-1;d>=0;--d)if(!jg(u,a[d])){const f=a[d];let g=c[d];g=k(g);const w=o.fa(f);if(g instanceof Es)u.push(f);else{const E=ir(g,w);E!=null&&(u.push(f),l.set(f,E))}}const h=new je(u);return new Fg(l,h,o.fieldTransforms)}function Bg(n,e,t,r=!1){return ir(t,n.ga(r?4:3,e))}function ir(n,e){if(qg(n=k(n)))return Cl("Unsupported field value:",e,n),$g(n,e);if(n instanceof nr)return function(t,r){if(!Ug(r.ua))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=ir(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=k(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return _m(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=J.fromDate(t);return{timestampValue:xr(r.serializer,i)}}if(t instanceof J){const i=new J(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:xr(r.serializer,i)}}if(t instanceof fa)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof _t)return{bytesValue:xm(r.serializer,t._byteString)};if(t instanceof W){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xu(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${da(t)}`)}(n,e)}function $g(n,e){const t={};return em(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tr(n,(r,i)=>{const s=ir(i,e.aa(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function qg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof fa||n instanceof _t||n instanceof W||n instanceof nr)}function Cl(n,e,t){if(!qg(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=da(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function Yc(n,e,t){if((e=k(e))instanceof cn)return e._internalPath;if(typeof e=="string")return Rl(n,e);throw Do("Field path arguments must be of type string or ",n,!1,void 0,t)}const Fb=new RegExp("[~\\*/\\[\\]]");function Rl(n,e,t){if(e.search(Fb)>=0)throw Do(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new cn(...e.split("."))._internalPath}catch{throw Do(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Do(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new y(m.INVALID_ARGUMENT,a+n+c)}function jg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new W(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ub(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ga("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ub extends Xi{data(){return super.data()}}function ga(n,e){return typeof e=="string"?Rl(n,e):e instanceof cn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nl{}class bs extends Nl{}function Gt(n,e,...t){let r=[];e instanceof Nl&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof Dl).length,o=i.filter(a=>a instanceof ya).length;if(s>1||s>0&&o>0)throw new y(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ya extends bs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ya(e,t,r)}_apply(e){const t=this._parse(e);return Kg(e._query,t),new ke(e.firestore,e.converter,Fc(e._query,t))}_parse(e){const t=rr(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ud(l,u);const d=[];for(const f of l)d.push(Fd(a,i,f));h={arrayValue:{values:d}}}else h=Fd(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ud(l,u),h=Bg(o,s,l,u==="in"||u==="not-in");return L.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Vb(n,e,t){const r=e,i=ga("where",n);return ya._create(i,r,t)}class Dl extends Nl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Dl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:j.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Kg(s,a),s=Fc(s,a)}(e._query,t),new ke(e.firestore,e.converter,Fc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xl extends bs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new xl(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new wr(i,s);return function(a,c){if($u(a)===null){const u=ra(a);u!==null&&Hg(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new ke(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Ft(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function Bb(n,e="asc"){const t=e,r=ga("orderBy",n);return xl._create(r,t)}class va extends bs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new va(e,t,r)}_apply(e){return new ke(e.firestore,e.converter,To(e._query,this._limit,this._limitType))}}function $b(n){return Ng("limit",n),va._create("limit",n,"F")}function qb(n){return Ng("limitToLast",n),va._create("limitToLast",n,"L")}class wa extends bs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new wa(e,t,r)}_apply(e){const t=Gg(e,this.type,this._docOrFields,this._inclusive);return new ke(e.firestore,e.converter,function(r,i){return new Ft(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function jb(...n){return wa._create("startAt",n,!0)}function zb(...n){return wa._create("startAfter",n,!1)}class _a extends bs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new _a(e,t,r)}_apply(e){const t=Gg(e,this.type,this._docOrFields,this._inclusive);return new ke(e.firestore,e.converter,function(r,i){return new Ft(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function Gb(...n){return _a._create("endBefore",n,!1)}function Kb(...n){return _a._create("endAt",n,!0)}function Gg(n,e,t,r){if(t[0]=k(t[0]),t[0]instanceof Xi)return function(i,s,o,a,c){if(!a)throw new y(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of On(i))if(l.field.isKeyField())u.push($n(s,a.key));else{const h=a.data.field(l.field);if(na(h))throw new y(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new y(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new on(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=rr(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new y(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const g=u[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new y(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!qu(s)&&g.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const w=s.path.child(V.fromString(g));if(!I.isDocumentKey(w))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const E=new I(w);d.push($n(o,E))}else{const w=Bg(a,c,g);d.push(w)}}return new on(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Fd(n,e,t){if(typeof(t=k(t))=="string"){if(t==="")throw new y(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qu(e)&&t.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(V.fromString(t));if(!I.isDocumentKey(r))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $n(n,new I(r))}if(t instanceof W)return $n(n,t._key);throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${da(t)}.`)}function Ud(n,e){if(!Array.isArray(n)||n.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kg(n,e){if(e.isInequality()){const r=ra(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new y(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=$u(n);s!==null&&Hg(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Hg(n,e,t){if(!t.isEqual(e))throw new y(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Pl{convertValue(e,t="none"){switch(Bn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw S()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return tr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new fa(te(e.latitude),te(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Vu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const t=tn(e);return new J(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=V.fromString(e);C(qm(r));const i=new rn(r.get(1),r.get(3)),s=new I(r.popFirst(5));return i.isEqual(t)||ie(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Hb extends Pl{constructor(e){super(),this.firestore=e}convertBytes(e){return new _t(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ot extends Xi{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ci(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ga("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ci extends Ot{data(e={}){return super.data(e)}}class un{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ci(this._firestore,this._userDataWriter,r.key,r,new Nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ci(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Nn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ci(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Nn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:Wb(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Wb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}function Wg(n,e){return n instanceof Ot&&e instanceof Ot?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof un&&e instanceof un&&n._firestore===e._firestore&&Pg(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(n){n=$(n,W);const e=$(n.firestore,re);return Ag(_e(e),n._key).then(t=>Ol(e,n,t))}class sr extends Pl{constructor(e){super(),this.firestore=e}convertBytes(e){return new _t(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,t)}}function Xb(n){n=$(n,W);const e=$(n.firestore,re),t=_e(e),r=new sr(e);return fb(t,n._key).then(i=>new Ot(e,r,n._key,i,new Nn(i!==null&&i.hasLocalMutations,!0),n.converter))}function Yb(n){n=$(n,W);const e=$(n.firestore,re);return Ag(_e(e),n._key,{source:"server"}).then(t=>Ol(e,n,t))}function Jb(n){n=$(n,ke);const e=$(n.firestore,re),t=_e(e),r=new sr(e);return zg(n._query),Cg(t,n._query).then(i=>new un(e,r,n,i))}function Zb(n){n=$(n,ke);const e=$(n.firestore,re),t=_e(e),r=new sr(e);return pb(t,n._query).then(i=>new un(e,r,n,i))}function e0(n){n=$(n,ke);const e=$(n.firestore,re),t=_e(e),r=new sr(e);return Cg(t,n._query,{source:"server"}).then(i=>new un(e,r,n,i))}function Vd(n,e,t){n=$(n,W);const r=$(n.firestore,re),i=Ia(n.converter,e,t);return Ss(r,[ma(rr(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Y.none())])}function Bd(n,e,t,...r){n=$(n,W);const i=$(n.firestore,re),s=rr(i);let o;return o=typeof(e=k(e))=="string"||e instanceof cn?Al(s,"updateDoc",n._key,e,t,r):kl(s,"updateDoc",n._key,e),Ss(i,[o.toMutation(n._key,Y.exists(!0))])}function t0(n){return Ss($(n.firestore,re),[new Hr(n._key,Y.none())])}function n0(n,e){const t=$(n.firestore,re),r=No(n),i=Ia(n.converter,e);return Ss(t,[ma(rr(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Y.exists(!1))]).then(()=>r)}function Qg(n,...e){var t,r,i;n=k(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Xc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Xc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof W)u=$(n.firestore,re),l=Gr(n._key.path),c={next:h=>{e[o]&&e[o](Ol(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=$(n,ke);u=$(h.firestore,re),l=h._query;const d=new sr(u);c={next:f=>{e[o]&&e[o](new un(u,d,h,f))},error:e[o+1],complete:e[o+2]},zg(n._query)}return function(h,d,f,g){const w=new la(g),E=new fl(d,w,f);return h.asyncQueue.enqueueAndForget(async()=>ll(await Fr(h),E)),()=>{w.Sc(),h.asyncQueue.enqueueAndForget(async()=>hl(await Fr(h),E))}}(_e(u),l,a,c)}function r0(n,e){return mb(_e(n=$(n,re)),Xc(e)?e:{next:e})}function Ss(n,e){return function(t,r){const i=new ge;return t.asyncQueue.enqueueAndForget(async()=>jE(await El(t),r,i)),i.promise}(_e(n),e)}function Ol(n,e,t){const r=t.docs.get(e._key),i=new sr(n);return new Ot(n,i,e._key,r,new Nn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=rr(e)}set(e,t,r){this._verifyNotCommitted();const i=Wt(e,this._firestore),s=Ia(i.converter,t,r),o=ma(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Y.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Wt(e,this._firestore);let o;return o=typeof(t=k(t))=="string"||t instanceof cn?Al(this._dataReader,"WriteBatch.update",s._key,t,r,i):kl(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Y.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Wt(e,this._firestore);return this._mutations=this._mutations.concat(new Hr(t._key,Y.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Wt(n,e){if((n=k(n)).firestore!==e)throw new y(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0 extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=rr(e)}get(e){const t=Wt(e,this._firestore),r=new Hb(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return S();const s=i[0];if(s.isFoundDocument())return new Xi(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new Xi(this._firestore,r,t._key,null,t.converter);throw S()})}set(e,t,r){const i=Wt(e,this._firestore),s=Ia(i.converter,t,r),o=ma(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Wt(e,this._firestore);let o;return o=typeof(t=k(t))=="string"||t instanceof cn?Al(this._dataReader,"Transaction.update",s._key,t,r,i):kl(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Wt(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Wt(e,this._firestore),r=new sr(this._firestore);return super.get(e).then(i=>new Ot(this._firestore,r,t._key,i._document,new Nn(!1,!1),t.converter))}}function a0(n,e,t){n=$(n,re);const r=Object.assign(Object.assign({},i0),t);return function(i){if(i.maxAttempts<1)throw new y(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ge;return i.asyncQueue.enqueueAndForget(async()=>{const c=await lb(i);new cb(i.asyncQueue,c,o,s,a).run()}),a.promise}(_e(n),i=>e(new o0(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(){return new Es("deleteField")}function u0(){return new Sl("serverTimestamp")}function l0(...n){return new Ob("arrayUnion",n)}function h0(...n){return new Lb("arrayRemove",n)}function d0(n){return new Mb("increment",n)}(function(n,e=!0){(function(t){zr=t})(Mt),xt(new et("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new re(new wI(t.getProvider("auth-internal")),new EI(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rn(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ze(Lh,"3.11.0",n),Ze(Lh,"3.11.0","esm2017")})();const f0="@firebase/firestore-compat",p0="0.3.8";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(){if(typeof Uint8Array>"u")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function qd(){if(!QI())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}let Xg=class Jc{constructor(e){this._delegate=e}static fromBase64String(e){return qd(),new Jc(_t.fromBase64String(e))}static fromUint8Array(e){return $d(),new Jc(_t.fromUint8Array(e))}toBase64(){return qd(),this._delegate.toBase64()}toUint8Array(){return $d(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n){return m0(n,["next","error","complete"])}function m0(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{enableIndexedDbPersistence(e,t){return Eb(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return bb(e._delegate)}clearIndexedDbPersistence(e){return Sb(e._delegate)}}class Yg{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof rn||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&it("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){vb(this._delegate,e,t,r)}enableNetwork(){return Ab(this._delegate)}disableNetwork(){return Cb(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Rg("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return kb(this._delegate)}onSnapshotsInSync(e){return r0(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ur(this,Dg(this._delegate,e))}catch(t){throw Me(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ye(this,No(this._delegate,e))}catch(t){throw Me(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Le(this,wb(this._delegate,e))}catch(t){throw Me(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return a0(this._delegate,t=>e(new Jg(this,t)))}batch(){return _e(this._delegate),new Zg(new s0(this._delegate,e=>Ss(this._delegate,e)))}loadBundle(e){return Rb(this._delegate,e)}namedQuery(e){return Nb(this._delegate,e).then(t=>t?new Le(this,t):null)}}class Ta extends Pl{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xg(new _t(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ye.forKey(t,this.firestore,null)}}function y0(n){mI(n)}class Jg{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Ta(e)}get(e){const t=Dn(e);return this._delegate.get(t).then(r=>new Yi(this._firestore,new Ot(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Dn(e);return r?(Ll("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Dn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Dn(e);return this._delegate.delete(t),this}}class Zg{constructor(e){this._delegate=e}set(e,t,r){const i=Dn(e);return r?(Ll("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Dn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Dn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Wn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ci(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ji(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Wn.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Wn(e,new Ta(e),t),i.set(t,s)),s}}Wn.INSTANCES=new WeakMap;class Ye{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ta(e)}static forPath(e,t,r){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ye(t,new W(t._delegate,r,new I(e)))}static forKey(e,t,r){return new Ye(t,new W(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ur(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ur(this.firestore,Dg(this._delegate,e))}catch(t){throw Me(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=k(e),e instanceof W?xg(this._delegate,e):!1}set(e,t){t=Ll("DocumentReference.set",t);try{return t?Vd(this._delegate,e,t):Vd(this._delegate,e)}catch(r){throw Me(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Bd(this._delegate,e):Bd(this._delegate,e,t,...r)}catch(i){throw Me(i,"updateDoc()","DocumentReference.update()")}}delete(){return t0(this._delegate)}onSnapshot(...e){const t=ey(e),r=ty(e,i=>new Yi(this.firestore,new Ot(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Qg(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Xb(this._delegate):(e==null?void 0:e.source)==="server"?t=Yb(this._delegate):t=Qb(this._delegate),t.then(r=>new Yi(this.firestore,new Ot(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ye(this.firestore,e?this._delegate.withConverter(Wn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Me(n,e,t){return n.message=n.message.replace(e,t),n}function ey(n){for(const e of n)if(typeof e=="object"&&!Zc(e))return e;return{}}function ty(n,e){var t,r;let i;return Zc(n[0])?i=n[0]:Zc(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Yi{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ye(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Wg(this._delegate,e._delegate)}}class Ji extends Yi{data(e){const t=this._delegate.data(e);return gI(t!==void 0),t}}class Le{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ta(e)}where(e,t,r){try{return new Le(this.firestore,Gt(this._delegate,Vb(e,t,r)))}catch(i){throw Me(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Le(this.firestore,Gt(this._delegate,Bb(e,t)))}catch(r){throw Me(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Le(this.firestore,Gt(this._delegate,$b(e)))}catch(t){throw Me(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Le(this.firestore,Gt(this._delegate,qb(e)))}catch(t){throw Me(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Le(this.firestore,Gt(this._delegate,jb(...e)))}catch(t){throw Me(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Le(this.firestore,Gt(this._delegate,zb(...e)))}catch(t){throw Me(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Le(this.firestore,Gt(this._delegate,Gb(...e)))}catch(t){throw Me(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Le(this.firestore,Gt(this._delegate,Kb(...e)))}catch(t){throw Me(t,"endAt()","Query.endAt()")}}isEqual(e){return Pg(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Zb(this._delegate):(e==null?void 0:e.source)==="server"?t=e0(this._delegate):t=Jb(this._delegate),t.then(r=>new eu(this.firestore,new un(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=ey(e),r=ty(e,i=>new eu(this.firestore,new un(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Qg(this._delegate,t,r)}withConverter(e){return new Le(this.firestore,e?this._delegate.withConverter(Wn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class v0{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ji(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class eu{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Le(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ji(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new v0(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Ji(this._firestore,r))})}isEqual(e){return Wg(this._delegate,e._delegate)}}class Ur extends Le{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ye(this.firestore,e):null}doc(e){try{return e===void 0?new Ye(this.firestore,No(this._delegate)):new Ye(this.firestore,No(this._delegate,e))}catch(t){throw Me(t,"doc()","CollectionReference.doc()")}}add(e){return n0(this._delegate,e).then(t=>new Ye(this.firestore,t))}isEqual(e){return xg(this._delegate,e._delegate)}withConverter(e){return new Ur(this.firestore,e?this._delegate.withConverter(Wn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Dn(n){return $(n,W)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(...e){this._delegate=new cn(...e)}static documentId(){return new Ml(se.keyField().canonicalString())}isEqual(e){return e=k(e),e instanceof cn?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._delegate=e}static serverTimestamp(){const e=u0();return e._methodName="FieldValue.serverTimestamp",new An(e)}static delete(){const e=c0();return e._methodName="FieldValue.delete",new An(e)}static arrayUnion(...e){const t=l0(...e);return t._methodName="FieldValue.arrayUnion",new An(t)}static arrayRemove(...e){const t=h0(...e);return t._methodName="FieldValue.arrayRemove",new An(t)}static increment(e){const t=d0(e);return t._methodName="FieldValue.increment",new An(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0={Firestore:Yg,GeoPoint:fa,Timestamp:J,Blob:Xg,Transaction:Jg,WriteBatch:Zg,DocumentReference:Ye,DocumentSnapshot:Yi,Query:Le,QueryDocumentSnapshot:Ji,QuerySnapshot:eu,CollectionReference:Ur,FieldPath:Ml,FieldValue:An,setLogLevel:y0,CACHE_SIZE_UNLIMITED:Tb};function _0(n,e){n.INTERNAL.registerComponent(new et("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},w0)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n){_0(n,(e,t)=>new Yg(e,t,new g0)),n.registerVersion(f0,p0)}I0(Tt);function Fl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const hi={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},lr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function ny(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E0=T0,b0=ny,ry=new Zn("auth","Firebase",ny());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Vo("@firebase/auth");function S0(n,...e){xo.logLevel<=U.WARN&&xo.warn(`Auth (${Mt}): ${n}`,...e)}function eo(n,...e){xo.logLevel<=U.ERROR&&xo.error(`Auth (${Mt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,...e){throw Ul(n,...e)}function Se(n,...e){return Ul(n,...e)}function iy(n,e,t){const r=Object.assign(Object.assign({},b0()),{[e]:t});return new Zn("auth","Firebase",r).create(e,{appName:n.name})}function Jr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ae(n,"argument-error"),iy(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ul(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ry.create(n,...e)}function _(n,e,...t){if(!n)throw Ul(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw eo(e),new Error(e)}function st(n,e){n||mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vl(){return jd()==="http:"||jd()==="https:"}function jd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vl()||Ef()||"connection"in navigator)?navigator.onLine:!0}function A0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t){this.shortDelay=e,this.longDelay=t,st(t>e,"Short delay should be less than long delay!"),this.isMobile=Mv()||lu()}get(){return k0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n,e){st(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new ks(3e4,6e4);function he(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fe(n,e,t,r,i={}){return oy(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=$r(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),sy.fetch()(ay(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function oy(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},C0),e);try{const i=new N0(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ii(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ii(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ii(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iy(n,l,u);Ae(n,l)}}catch(i){if(i instanceof De)throw i;Ae(n,"network-request-failed",{message:String(i)})}}async function Bt(n,e,t,r,i={}){const s=await fe(n,e,t,r,i);return"mfaPendingCredential"in s&&Ae(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ay(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Bl(n.config,i):`${n.config.apiScheme}://${i}`}class N0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Se(this.auth,"network-request-failed")),R0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ii(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Se(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(n,e){return fe(n,"POST","/v1/accounts:delete",e)}async function x0(n,e){return fe(n,"POST","/v1/accounts:update",e)}async function P0(n,e){return fe(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O0(n,e=!1){const t=k(n),r=await t.getIdToken(e),i=Ea(r);_(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ri(tc(i.auth_time)),issuedAtTime:Ri(tc(i.iat)),expirationTime:Ri(tc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tc(n){return Number(n)*1e3}function Ea(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const i=If(t);return i?JSON.parse(i):(eo("Failed to decode base64 JWT payload"),null)}catch(i){return eo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function L0(n){const e=Ea(n);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof De&&M0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function M0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Lt(n,P0(t,{idToken:r}));_(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?B0(s.providerUserInfo):[],a=V0(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new cy(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function U0(n){const e=k(n);await es(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V0(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function B0(n){return n.map(e=>{var{providerId:t}=e,r=Fl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(n,e){const t=await oy(n,{},async()=>{const r=$r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=ay(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):L0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await $0(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ts;return r&&(_(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(_(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(_(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n,e){_(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Fl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new F0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Lt(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return O0(this,e)}reload(){return U0(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Lt(this,D0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=t.createdAt)!==null&&u!==void 0?u:void 0,M=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:R,emailVerified:O,isAnonymous:q,providerData:B,stsTokenManager:ce}=t;_(R&&ce,e,"internal-error");const Ce=ts.fromJSON(this.name,ce);_(typeof R=="string",e,"internal-error"),Kt(h,e.name),Kt(d,e.name),_(typeof O=="boolean",e,"internal-error"),_(typeof q=="boolean",e,"internal-error"),Kt(f,e.name),Kt(g,e.name),Kt(w,e.name),Kt(E,e.name),Kt(x,e.name),Kt(M,e.name);const wn=new Ln({uid:R,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:q,photoURL:g,phoneNumber:f,tenantId:w,stsTokenManager:Ce,createdAt:x,lastLoginAt:M});return B&&Array.isArray(B)&&(wn.providerData=B.map(bv=>Object.assign({},bv))),E&&(wn._redirectEventId=E),wn}static async _fromIdTokenResponse(e,t,r=!1){const i=new ts;i.updateFromServerResponse(t);const s=new Ln({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await es(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new Map;function He(n){st(n instanceof Function,"Expected a class definition");let e=zd.get(n);return e?(st(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zd.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uy.type="NONE";const Vr=uy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n,e,t){return`firebase:${n}:${e}:${t}`}class Ir{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ir(He(Vr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||He(Vr);const o=Mn(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=Ln._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ir(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ir(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ly(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fy(e))return"Blackberry";if(py(e))return"Webos";if($l(e))return"Safari";if((e.includes("chrome/")||hy(e))&&!e.includes("edge/"))return"Chrome";if(As(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ly(n=Z()){return/firefox\//i.test(n)}function $l(n=Z()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hy(n=Z()){return/crios\//i.test(n)}function dy(n=Z()){return/iemobile/i.test(n)}function As(n=Z()){return/android/i.test(n)}function fy(n=Z()){return/blackberry/i.test(n)}function py(n=Z()){return/webos/i.test(n)}function Zr(n=Z()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function q0(n=Z()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function j0(n=Z()){var e;return Zr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function z0(){return bf()&&document.documentMode===10}function my(n=Z()){return Zr(n)||As(n)||py(n)||fy(n)||/windows phone/i.test(n)||dy(n)}function G0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n,e=[]){let t;switch(n){case"Browser":t=Gd(Z());break;case"Worker":t=`${Gd(Z())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mt}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(n){return(await fe(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function yy(n,e){return fe(n,"GET","/v2/recaptchaConfig",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n){return n!==void 0&&n.getResponse!==void 0}function Hd(n){return n!==void 0&&n.enterprise!==void 0}class vy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ql(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Se("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",H0().appendChild(r)})}function wy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const W0="https://www.google.com/recaptcha/enterprise.js?render=",Q0="recaptcha-enterprise",X0="NO_RECAPTCHA";class _y{constructor(e){this.type=Q0,this.auth=ae(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vy(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Hd(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(X0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Hd(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ql(W0+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ln(n,e,t,r=!1){const i=new _y(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wd(this),this.idTokenSubscription=new Wd(this),this.beforeStateQueue=new Y0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ry,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=He(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ir.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await es(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?k(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}async initializeRecaptchaConfig(){const e=await yy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new vy(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new _y(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&He(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await Ir.create(this,[He(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&S0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ae(n){return k(n)}class Wd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sf(t=>this.observer=t)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Z0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(He);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eS(n,e,t){const r=ae(n);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Iy(e),{host:o,port:a}=tS(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nS()}function Iy(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function tS(n){const e=Iy(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qd(o)}}}function Qd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function nS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(n,e){return fe(n,"POST","/v1/accounts:resetPassword",he(n,e))}async function Ey(n,e){return fe(n,"POST","/v1/accounts:update",e)}async function rS(n,e){return fe(n,"POST","/v1/accounts:update",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(n,e){return Bt(n,"POST","/v1/accounts:signInWithPassword",he(n,e))}async function ba(n,e){return fe(n,"POST","/v1/accounts:sendOobCode",he(n,e))}async function iS(n,e){return ba(n,e)}async function rc(n,e){return ba(n,e)}async function ic(n,e){return ba(n,e)}async function sS(n,e){return ba(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(n,e){return Bt(n,"POST","/v1/accounts:signInWithEmailLink",he(n,e))}async function aS(n,e){return Bt(n,"POST","/v1/accounts:signInWithEmailLink",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends ei{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ns(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ns(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await ln(e,r,"signInWithPassword");return nc(e,i)}else return nc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ln(e,r,"signInWithPassword");return nc(e,s)}else return Promise.reject(i)});case"emailLink":return oS(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ey(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aS(e,{idToken:t,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(n,e){return Bt(n,"POST","/v1/accounts:signInWithIdp",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="http://localhost";class It extends ei{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new It(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Fl(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new It(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Nt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Nt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}buildRequest(){const e={requestUri:cS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$r(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(n,e){return fe(n,"POST","/v1/accounts:sendVerificationCode",he(n,e))}async function lS(n,e){return Bt(n,"POST","/v1/accounts:signInWithPhoneNumber",he(n,e))}async function hS(n,e){const t=await Bt(n,"POST","/v1/accounts:signInWithPhoneNumber",he(n,e));if(t.temporaryProof)throw Ii(n,"account-exists-with-different-credential",t);return t}const dS={USER_NOT_FOUND:"user-not-found"};async function fS(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Bt(n,"POST","/v1/accounts:signInWithPhoneNumber",he(n,t),dS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ei{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Fn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return lS(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return hS(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return fS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Fn({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mS(n){const e=mr(mi(n)).link,t=e?mr(mi(e)).deep_link_id:null,r=mr(mi(n)).deep_link_id;return(r?mr(mi(r)).link:null)||r||t||e||n}class Sa{constructor(e){var t,r,i,s,o,a;const c=mr(mi(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=pS((i=c.mode)!==null&&i!==void 0?i:null);_(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=mS(e);try{return new Sa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.providerId=yn.PROVIDER_ID}static credential(e,t){return ns._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Sa.parseLink(t);return _(r,"argument-error"),ns._fromEmailAndCode(e,r.code,r.tenantId)}}yn.PROVIDER_ID="password";yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends $t{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Tr extends ti{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return _("providerId"in t&&"signInMethod"in t,"argument-error"),It._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return _(e.idToken||e.accessToken,"argument-error"),It._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Tr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Tr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Tr(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends ti{constructor(){super("facebook.com")}static credential(e){return It._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.FACEBOOK_SIGN_IN_METHOD="facebook.com";at.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return It._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ct.credential(t,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends ti{constructor(){super("github.com")}static credential(e){return It._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="http://localhost";class Br extends ei{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Nt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Nt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Br(r,s)}static _create(e,t){return new Br(e,t)}buildRequest(){return{requestUri:gS,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="saml.";class Po extends $t{constructor(e){_(e.startsWith(yS),"argument-error"),super(e)}static credentialFromResult(e){return Po.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Po.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Br.fromJSON(e);return _(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Br._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends ti{constructor(){super("twitter.com")}static credential(e,t){return It._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return lt.credential(t,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(n,e){return Bt(n,"POST","/v1/accounts:signUp",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ln._fromIdTokenResponse(e,r,i),o=Xd(r);return new tt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Xd(r);return new tt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Xd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(n){var e;const t=ae(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new tt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await to(t,{returnSecureToken:!0}),i=await tt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends De{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Oo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Oo(e,t,r,i)}}function by(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Oo._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(n,e){const t=k(n);await ka(!0,t,e);const{providerUserInfo:r}=await x0(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Sy(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function jl(n,e,t=!1){const r=await Lt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return tt._forOperation(n,"link",r)}async function ka(n,e,t){await es(e);const r=Sy(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";_(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Lt(n,by(r,i,e,n),t);_(s.idToken,r,"internal-error");const o=Ea(s.idToken);_(o,r,"internal-error");const{sub:a}=o;return _(n.uid===a,r,"user-mismatch"),tt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ae(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(n,e,t=!1){const r="signIn",i=await by(n,r,e),s=await tt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Aa(n,e){return Ay(ae(n),e)}async function Cy(n,e){const t=k(n);return await ka(!1,t,e.providerId),jl(t,e)}async function Ry(n,e){return ky(k(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(n,e){return Bt(n,"POST","/v1/accounts:signInWithCustomToken",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(n,e){const t=ae(n),r=await _S(t,{token:e,returnSecureToken:!0}),i=await tt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?zl._fromServerResponse(e,t):"totpInfo"in t?Gl._fromServerResponse(e,t):Ae(e,"internal-error")}}class zl extends Cs{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new zl(t)}}class Gl extends Cs{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Gl(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n,e,t){var r;_(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),_(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(_(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(_(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(n,e,t){var r;const i=ae(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await ln(i,s,"getOobCode",!0);t&&Er(i,o,t),await rc(i,o)}else t&&Er(i,s,t),await rc(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await ln(i,s,"getOobCode",!0);t&&Er(i,a,t),await rc(i,a)}else return Promise.reject(o)})}async function ES(n,e,t){await Ty(k(n),{oobCode:e,newPassword:t})}async function bS(n,e){await rS(k(n),{oobCode:e})}async function Ny(n,e){const t=k(n),r=await Ty(t,{oobCode:e}),i=r.requestType;switch(_(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_(r.mfaInfo,t,"internal-error");default:_(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Cs._fromServerResponse(ae(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function SS(n,e){const{data:t}=await Ny(k(n),e);return t.email}async function kS(n,e,t){var r;const i=ae(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ln(i,s,"signUpPassword");o=to(i,u)}else o=to(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await ln(i,s,"signUpPassword");return to(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await tt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function AS(n,e,t){return Aa(k(n),yn.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(n,e,t){var r;const i=ae(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){_(c.handleCodeInApp,i,"argument-error"),c&&Er(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await ln(i,s,"getOobCode",!0);o(a,t),await ic(i,a)}else o(s,t),await ic(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await ln(i,s,"getOobCode",!0);o(c,t),await ic(i,c)}else return Promise.reject(a)})}function RS(n,e){const t=Sa.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function NS(n,e,t){const r=k(n),i=yn.credentialWithLink(e,t||Zi());return _(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Aa(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(n,e){return fe(n,"POST","/v1/accounts:createAuthUri",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(n,e){const t=Vl()?Zi():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await DS(k(n),r);return i||[]}async function PS(n,e){const t=k(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Er(t.auth,i,e);const{email:s}=await iS(t.auth,i);s!==n.email&&await n.reload()}async function OS(n,e,t){const r=k(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Er(r.auth,s,t);const{email:o}=await sS(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(n,e){return fe(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=k(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Lt(r,LS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function FS(n,e){return Dy(k(n),e,null)}function US(n,e){return Dy(k(n),null,e)}async function Dy(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Lt(n,Ey(r,s));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=Ea(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new br(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new BS(s,i);case"github.com":return new $S(s,i);case"google.com":return new qS(s,i);case"twitter.com":return new jS(s,i,n.screenName||null);case"custom":case"anonymous":return new br(s,null);default:return new br(s,r,i)}}class br{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class xy extends br{constructor(e,t,r,i){super(e,t,r),this.username=i}}class BS extends br{constructor(e,t){super(e,"facebook.com",t)}}class $S extends xy{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class qS extends br{constructor(e,t){super(e,"google.com",t)}}class jS extends xy{constructor(e,t,r){super(e,"twitter.com",t,r)}}function zS(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:VS(t)}class xn{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new xn("enroll",e,t)}static _fromMfaPendingCredential(e){return new xn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return xn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return xn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=ae(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Cs._fromServerResponse(r,a));_(i.mfaPendingCredential,r,"internal-error");const o=xn._fromMfaPendingCredential(i.mfaPendingCredential);return new Kl(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await tt._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return _(t.user,r,"internal-error"),tt._forOperation(t.user,t.operationType,u);default:Ae(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function GS(n,e){var t;const r=k(n),i=e;return _(e.customData.operationType,r,"argument-error"),_((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Kl._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:start",he(n,e))}function HS(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:finalize",he(n,e))}function WS(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:withdraw",he(n,e))}class Hl{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Cs._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Hl(e)}async getSession(){return xn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Lt(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Lt(this.user,WS(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const sc=new WeakMap;function QS(n){const e=k(n);return sc.has(e)||sc.set(e,Hl._fromUser(e)),sc.get(e)}const Lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(){const n=Z();return $l(n)||Zr(n)}const YS=1e3,JS=10;class Oy extends Py{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=XS()&&G0(),this.fallbackToPolling=my(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);z0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JS):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},YS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oy.type="LOCAL";const Wl=Oy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly extends Py{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ly.type="SESSION";const Qn=Ly;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await ZS(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Rs("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return window}function tk(n){le().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(){return typeof le().WorkerGlobalScope<"u"&&typeof le().importScripts=="function"}async function nk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ik(){return Ql()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="firebaseLocalStorageDb",sk=1,Mo="firebaseLocalStorage",Fy="fbase_key";class Ns{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ra(n,e){return n.transaction([Mo],e?"readwrite":"readonly").objectStore(Mo)}function ok(){const n=indexedDB.deleteDatabase(My);return new Ns(n).toPromise()}function tu(){const n=indexedDB.open(My,sk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Mo,{keyPath:Fy})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Mo)?e(r):(r.close(),await ok(),e(await tu()))})})}async function Yd(n,e,t){const r=Ra(n,!0).put({[Fy]:e,value:t});return new Ns(r).toPromise()}async function ak(n,e){const t=Ra(n,!1).get(e),r=await new Ns(t).toPromise();return r===void 0?null:r.value}function Jd(n,e){const t=Ra(n,!0).delete(e);return new Ns(t).toPromise()}const ck=800,uk=3;class Uy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>uk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ql()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ca._getInstance(ik()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nk(),!this.activeServiceWorker)return;this.sender=new ek(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tu();return await Yd(e,Lo,"1"),await Jd(e,Lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ak(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ra(i,!1).getAll();return new Ns(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uy.type="LOCAL";const rs=Uy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(n,e){return fe(n,"POST","/v2/accounts/mfaSignIn:start",he(n,e))}function hk(n,e){return fe(n,"POST","/v2/accounts/mfaSignIn:finalize",he(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=500,fk=6e4,js=1e12;class pk{constructor(e){this.auth=e,this.counter=js,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new mk(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||js;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||js;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||js;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class mk{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;_(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=gk(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},fk)},dk))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gk(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=wy("rcb"),yk=new ks(3e4,6e4),vk="https://www.google.com/recaptcha/api.js?";class wk{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=le().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return _(_k(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Kd(le().grecaptcha)?Promise.resolve(le().grecaptcha):new Promise((r,i)=>{const s=le().setTimeout(()=>{i(Se(e,"network-request-failed"))},yk.get());le()[oc]=()=>{le().clearTimeout(s),delete le()[oc];const a=le().grecaptcha;if(!a||!Kd(a)){i(Se(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${vk}?${$r({onload:oc,render:"explicit",hl:t})}`;ql(o).catch(()=>{clearTimeout(s),i(Se(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=le().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _k(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Ik{async load(e){return new pk(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="recaptcha",Tk={theme:"light",type:"image"};let Ek=class{constructor(e,t=Object.assign({},Tk),r){this.parameters=t,this.type=Vy,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ae(r),this.isInvisible=this.parameters.size==="invisible",_(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;_(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Ik:new wk,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){_(!this.parameters.sitekey,this.auth,"argument-error"),_(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),_(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=le()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){_(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){_(Vl()&&!Ql(),this.auth,"internal-error"),await bk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await K0(this.auth);_(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return _(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function bk(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Fn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Sk(n,e,t){const r=ae(n),i=await Na(r,e,k(t));return new Xl(i,s=>Aa(r,s))}async function kk(n,e,t){const r=k(n);await ka(!1,r,"phone");const i=await Na(r.auth,e,k(t));return new Xl(i,s=>Cy(r,s))}async function Ak(n,e,t){const r=k(n),i=await Na(r.auth,e,k(t));return new Xl(i,s=>Ry(r,s))}async function Na(n,e,t){var r;const i=await t.verify();try{_(typeof i=="string",n,"argument-error"),_(t.type===Vy,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return _(o.type==="enroll",n,"internal-error"),(await KS(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{_(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return _(a,n,"missing-multi-factor-info"),(await lk(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await uS(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function Ck(n,e){await jl(k(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn=class no{constructor(e){this.providerId=no.PROVIDER_ID,this.auth=ae(e)}verifyPhoneNumber(e,t){return Na(this.auth,e,k(t))}static credential(e,t){return Fn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return no.credentialFromTaggedObject(t)}static credentialFromError(e){return no.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Fn._fromTokenResponse(t,r):null}};Xn.PROVIDER_ID="phone";Xn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n,e){return e?He(e):(_(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends ei{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rk(n){return Ay(n.auth,new Yl(n),n.bypassAuthState)}function Nk(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),ky(t,new Yl(n),n.bypassAuthState)}async function Dk(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),jl(t,new Yl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rk;case"linkViaPopup":case"linkViaRedirect":return Dk;case"reauthViaPopup":case"reauthViaRedirect":return Nk;default:Ae(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=new ks(2e3,1e4);async function Pk(n,e,t){const r=ae(n);Jr(n,e,$t);const i=or(r,t);return new At(r,"signInViaPopup",e,i).executeNotNull()}async function Ok(n,e,t){const r=k(n);Jr(r.auth,e,$t);const i=or(r.auth,t);return new At(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Lk(n,e,t){const r=k(n);Jr(r.auth,e,$t);const i=or(r.auth,t);return new At(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class At extends By{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=Rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xk.get())};e()}}At.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="pendingRedirect",Ni=new Map;class Fk extends By{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ni.get(this.auth._key());if(!e){try{const r=await Uk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ni.set(this.auth._key(),e)}return this.bypassAuthState||Ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uk(n,e){const t=qy(e),r=$y(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Jl(n,e){return $y(n)._set(qy(e),"true")}function Vk(){Ni.clear()}function Zl(n,e){Ni.set(n._key(),e)}function $y(n){return He(n._redirectPersistence)}function qy(n){return Mn(Mk,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(n,e,t){return $k(n,e,t)}async function $k(n,e,t){const r=ae(n);Jr(n,e,$t),await r._initializationPromise;const i=or(r,t);return await Jl(i,r),i._openRedirect(r,e,"signInViaRedirect")}function qk(n,e,t){return jk(n,e,t)}async function jk(n,e,t){const r=k(n);Jr(r.auth,e,$t),await r.auth._initializationPromise;const i=or(r.auth,t);await Jl(i,r.auth);const s=await jy(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function zk(n,e,t){return Gk(n,e,t)}async function Gk(n,e,t){const r=k(n);Jr(r.auth,e,$t),await r.auth._initializationPromise;const i=or(r.auth,t);await ka(!1,r,e.providerId),await Jl(i,r.auth);const s=await jy(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Kk(n,e){return await ae(n)._initializationPromise,Da(n,e,!1)}async function Da(n,e,t=!1){const r=ae(n),i=or(r,e),o=await new Fk(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function jy(n){const e=Rs(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=10*60*1e3;class zy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Gy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Se(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zd(e))}saveEventToCache(e){this.cachedEventUids.add(Zd(e)),this.lastProcessedEventTime=Date.now()}}function Zd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Gy({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gy(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(n,e={}){return fe(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xk=/^https?/;async function Yk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ky(n);for(const t of e)try{if(Jk(t))return}catch{}Ae(n,"unauthorized-domain")}function Jk(n){const e=Zi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Xk.test(t))return!1;if(Qk.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new ks(3e4,6e4);function ef(){const n=le().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function eA(n){return new Promise((e,t)=>{var r,i,s;function o(){ef(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ef(),t(Se(n,"network-request-failed"))},timeout:Zk.get()})}if(!((i=(r=le().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=le().gapi)===null||s===void 0)&&s.load)o();else{const a=wy("iframefcb");return le()[a]=()=>{gapi.load?o():t(Se(n,"network-request-failed"))},ql(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ro=null,e})}let ro=null;function tA(n){return ro=ro||eA(n),ro}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=new ks(5e3,15e3),rA="__/auth/iframe",iA="emulator/auth/iframe",sA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aA(n){const e=n.config;_(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Bl(e,iA):`https://${n.config.authDomain}/${rA}`,r={apiKey:e.apiKey,appName:n.name,v:Mt},i=oA.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${$r(r).slice(1)}`}async function cA(n){const e=await tA(n),t=le().gapi;return _(t,n,"internal-error"),e.open({where:document.body,url:aA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Se(n,"network-request-failed"),a=le().setTimeout(()=>{s(o)},nA.get());function c(){le().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lA=500,hA=600,dA="_blank",fA="http://localhost";class tf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pA(n,e,t,r=lA,i=hA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},uA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Z().toLowerCase();t&&(a=hy(u)?dA:t),ly(u)&&(e=e||fA,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(j0(u)&&a!=="_self")return mA(e||"",a),new tf(null);const h=window.open(e||"",a,l);_(h,n,"popup-blocked");try{h.focus()}catch{}return new tf(h)}function mA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="__/auth/handler",yA="emulator/auth/handler",vA=encodeURIComponent("fac");async function nu(n,e,t,r,i,s){_(n.config.authDomain,n,"auth-domain-config-required"),_(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Mt,eventId:i};if(e instanceof $t){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",jv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof ti){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${vA}=${encodeURIComponent(c)}`:"";return`${wA(n)}?${$r(a).slice(1)}${u}`}function wA({config:n}){return n.emulator?Bl(n,yA):`https://${n.authDomain}/${gA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="webStorageSupport";class _A{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qn,this._completeRedirectFn=Da,this._overrideRedirectResult=Zl}async _openPopup(e,t,r,i){var s;st((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await nu(e,t,r,Zi(),i);return pA(e,o,Rs())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await nu(e,t,r,Zi(),i);return tk(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(st(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await cA(e),r=new zy(e);return t.register("authEvent",i=>(_(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ac,{type:ac},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ac];o!==void 0&&t(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return my()||$l()||Zr()}}const IA=_A;class TA{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return mt("unexpected MultiFactorSessionType")}}}class eh extends TA{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new eh(e)}_finalizeEnroll(e,t,r){return HS(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return hk(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Hy{constructor(){}static assertion(e){return eh._fromCredential(e)}}Hy.FACTOR_ID="phone";var nf="@firebase/auth",rf="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function SA(n){xt(new et("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),_(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gy(n)},u=new J0(r,i,s,c);return Z0(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xt(new et("auth-internal",e=>{const t=ae(e.getProvider("auth").getImmediate());return(r=>new EA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(nf,rf,bA(n)),Ze(nf,rf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=5*60;Ov("authIdTokenMaxAge");SA("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=2e3;async function CA(n,e,t){var r;const{BuildInfo:i}=Yn();st(e.sessionId,"AuthEvent did not contain a session ID");const s=await PA(e.sessionId),o={};return Zr()?o.ibi=i.packageName:As()?o.apn=i.packageName:Ae(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,nu(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function RA(n){const{BuildInfo:e}=Yn(),t={};Zr()?t.iosBundleId=e.packageName:As()?t.androidPackageName=e.packageName:Ae(n,"operation-not-supported-in-this-environment"),await Ky(n,t)}function NA(n){const{cordova:e}=Yn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,q0()?"_blank":"_system","location=yes"),t(i)})})}async function DA(n,e,t){const{cordova:r}=Yn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(Se(n,"redirect-cancelled-by-user"))},AA))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),As()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function xA(n){var e,t,r,i,s,o,a,c,u,l;const h=Yn();_(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),_(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),_(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),_(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),_(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function PA(n){const e=OA(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function OA(n){if(st(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=20;class MA extends zy{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function FA(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:BA(),postBody:null,tenantId:n.tenantId,error:Se(n,"no-auth-event")}}function UA(n,e){return ru()._set(iu(n),e)}async function sf(n){const e=await ru()._get(iu(n));return e&&await ru()._remove(iu(n)),e}function VA(n,e){var t,r;const i=qA(e);if(i.includes("/__/auth/callback")){const s=io(i),o=s.firebaseError?$A(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Se(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function BA(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<LA;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function ru(){return He(Wl)}function iu(n){return Mn("authEvent",n.config.apiKey,n.name)}function $A(n){try{return JSON.parse(n)}catch{return null}}function qA(n){const e=io(n),t=e.link?decodeURIComponent(e.link):void 0,r=io(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return io(i).link||i||r||t||n}function io(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return mr(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=500;class zA{constructor(){this._redirectPersistence=Qn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Da,this._overrideRedirectResult=Zl}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new MA(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ae(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){xA(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Vk(),await this._originValidation(e);const o=FA(e,r,i);await UA(e,o);const a=await CA(e,o,t),c=await NA(a);return DA(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=RA(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Yn(),o=setTimeout(async()=>{await sf(e),t.onEvent(of())},jA),a=async l=>{clearTimeout(o);const h=await sf(e);let d=null;h&&(l!=null&&l.url)&&(d=VA(h,l.url)),t.onEvent(d||of())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Yn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const GA=zA;function of(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Se("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(n,e){ae(n)._logFramework(e)}var HA="@firebase/auth-compat",WA="0.4.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=1e3;function Di(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function XA(){return Di()==="http:"||Di()==="https:"}function Wy(n=Z()){return!!((Di()==="file:"||Di()==="ionic:"||Di()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function YA(){return lu()||Uo()}function JA(){return bf()&&(document==null?void 0:document.documentMode)===11}function ZA(n=Z()){return/Edge\/\d+/.test(n)}function eC(n=Z()){return JA()||ZA(n)}function Qy(){try{const n=self.localStorage,e=Rs();if(n)return n.setItem(e,"1"),n.removeItem(e),eC()?Pi():!0}catch{return th()&&Pi()}return!1}function th(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function cc(){return(XA()||Ef()||Wy())&&!YA()&&Qy()&&!th()}function Xy(){return Wy()&&typeof document<"u"}async function tC(){return Xy()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},QA);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function nC(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke={LOCAL:"local",NONE:"none",SESSION:"session"},di=_,Yy="persistence";function rC(n,e){if(di(Object.values(Ke).includes(e),n,"invalid-persistence-type"),lu()){di(e!==Ke.SESSION,n,"unsupported-persistence-type");return}if(Uo()){di(e===Ke.NONE,n,"unsupported-persistence-type");return}if(th()){di(e===Ke.NONE||e===Ke.LOCAL&&Pi(),n,"unsupported-persistence-type");return}di(e===Ke.NONE||Qy(),n,"unsupported-persistence-type")}async function su(n){await n._initializationPromise;const e=Jy(),t=Mn(Yy,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function iC(n,e){const t=Jy();if(!t)return[];const r=Mn(Yy,n,e);switch(t.getItem(r)){case Ke.NONE:return[Vr];case Ke.LOCAL:return[rs,Qn];case Ke.SESSION:return[Qn];default:return[]}}function Jy(){var n;try{return((n=nC())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=_;class Xt{constructor(){this.browserResolver=He(IA),this.cordovaResolver=He(GA),this.underlyingResolver=null,this._redirectPersistence=Qn,this._completeRedirectFn=Da,this._overrideRedirectResult=Zl}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Xy()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return sC(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await tC();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(n){return n.unwrap()}function oC(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(n){return ev(n)}function cC(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new uC(n,GS(n,e))}else if(r){const i=ev(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function ev(n){const{_tokenResponse:e}=n instanceof De?n.customData:n;if(!e)return null;if(!(n instanceof De)&&"temporaryProof"in e&&"phoneNumber"in e)return Xn.credentialFromResult(n);const t=e.providerId;if(!t||t===hi.PASSWORD)return null;let r;switch(t){case hi.GOOGLE:r=ct;break;case hi.FACEBOOK:r=at;break;case hi.GITHUB:r=ut;break;case hi.TWITTER:r=lt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Br._create(t,a):It._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Tr(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof De?r.credentialFromError(n):r.credentialFromResult(n)}function $e(n,e){return e.catch(t=>{throw t instanceof De&&cC(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:aC(t),additionalUserInfo:zS(t),user:Ct.getOrCreate(i)}})}async function ou(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>$e(n,t.confirm(r))}}class uC{constructor(e,t){this.resolver=t,this.auth=oC(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return $e(Zy(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this._delegate=e,this.multiFactor=QS(e)}static getOrCreate(e){return Ct.USER_MAP.has(e)||Ct.USER_MAP.set(e,new Ct(e)),Ct.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return $e(this.auth,Cy(this._delegate,e))}async linkWithPhoneNumber(e,t){return ou(this.auth,kk(this._delegate,e,t))}async linkWithPopup(e){return $e(this.auth,Lk(this._delegate,e,Xt))}async linkWithRedirect(e){return await su(ae(this.auth)),zk(this._delegate,e,Xt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return $e(this.auth,Ry(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return ou(this.auth,Ak(this._delegate,e,t))}reauthenticateWithPopup(e){return $e(this.auth,Ok(this._delegate,e,Xt))}async reauthenticateWithRedirect(e){return await su(ae(this.auth)),qk(this._delegate,e,Xt)}sendEmailVerification(e){return PS(this._delegate,e)}async unlink(e){return await wS(this._delegate,e),this}updateEmail(e){return FS(this._delegate,e)}updatePassword(e){return US(this._delegate,e)}updatePhoneNumber(e){return Ck(this._delegate,e)}updateProfile(e){return MS(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return OS(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Ct.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=_;class au{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;fi(r,"invalid-api-key",{appName:e.name}),fi(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Xt:void 0;this._delegate=t.initialize({options:{persistence:lC(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(E0),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ct.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){eS(this._delegate,e,t)}applyActionCode(e){return bS(this._delegate,e)}checkActionCode(e){return Ny(this._delegate,e)}confirmPasswordReset(e,t){return ES(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return $e(this._delegate,kS(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return xS(this._delegate,e)}isSignInWithEmailLink(e){return RS(this._delegate,e)}async getRedirectResult(){fi(cc(),this._delegate,"operation-not-supported-in-this-environment");const e=await Kk(this._delegate,Xt);return e?$e(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){KA(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=af(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=af(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return CS(this._delegate,e,t)}sendPasswordResetEmail(e,t){return TS(this._delegate,e,t||void 0)}async setPersistence(e){rC(this._delegate,e);let t;switch(e){case Ke.SESSION:t=Qn;break;case Ke.LOCAL:t=await He(rs)._isAvailable()?rs:Wl;break;case Ke.NONE:t=Vr;break;default:return Ae("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return $e(this._delegate,vS(this._delegate))}signInWithCredential(e){return $e(this._delegate,Aa(this._delegate,e))}signInWithCustomToken(e){return $e(this._delegate,IS(this._delegate,e))}signInWithEmailAndPassword(e,t){return $e(this._delegate,AS(this._delegate,e,t))}signInWithEmailLink(e,t){return $e(this._delegate,NS(this._delegate,e,t))}signInWithPhoneNumber(e,t){return ou(this._delegate,Sk(this._delegate,e,t))}async signInWithPopup(e){return fi(cc(),this._delegate,"operation-not-supported-in-this-environment"),$e(this._delegate,Pk(this._delegate,e,Xt))}async signInWithRedirect(e){return fi(cc(),this._delegate,"operation-not-supported-in-this-environment"),await su(this._delegate),Bk(this._delegate,e,Xt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return SS(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}au.Persistence=Ke;function af(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&Ct.getOrCreate(o)),error:e,complete:t}}function lC(n,e){const t=iC(n,e);if(typeof self<"u"&&!t.includes(rs)&&t.push(rs),typeof window<"u")for(const r of[Wl,Qn])t.includes(r)||t.push(r);return t.includes(Vr)||t.push(Vr),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.providerId="phone",this._delegate=new Xn(Zy(Tt.auth()))}static credential(e,t){return Xn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}nh.PHONE_SIGN_IN_METHOD=Xn.PHONE_SIGN_IN_METHOD;nh.PROVIDER_ID=Xn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=_;class dC{constructor(e,t,r=Tt.app()){var i;hC((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Ek(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="auth-compat";function pC(n){n.INTERNAL.registerComponent(new et(fC,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new au(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:lr.EMAIL_SIGNIN,PASSWORD_RESET:lr.PASSWORD_RESET,RECOVER_EMAIL:lr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:lr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:lr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:lr.VERIFY_EMAIL}},EmailAuthProvider:yn,FacebookAuthProvider:at,GithubAuthProvider:ut,GoogleAuthProvider:ct,OAuthProvider:Tr,SAMLAuthProvider:Po,PhoneAuthProvider:nh,PhoneMultiFactorGenerator:Hy,RecaptchaVerifier:dC,TwitterAuthProvider:lt,Auth:au,AuthCredential:ei,Error:De}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(HA,WA)}pC(Tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="firebasestorage.googleapis.com",nv="storageBucket",mC=2*60*1e3,gC=10*60*1e3,yC=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends De{constructor(e,t,r=0){super(uc(e),`Firebase Storage: ${t} (${uc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Q;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Q||(Q={}));function uc(n){return"storage/"+n}function rh(){const n="An unknown error occurred, please check the error payload for server response.";return new ee(Q.UNKNOWN,n)}function vC(n){return new ee(Q.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function wC(n){return new ee(Q.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _C(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ee(Q.UNAUTHENTICATED,n)}function IC(){return new ee(Q.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function TC(n){return new ee(Q.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function rv(){return new ee(Q.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iv(){return new ee(Q.CANCELED,"User canceled the upload/download.")}function EC(n){return new ee(Q.INVALID_URL,"Invalid URL '"+n+"'.")}function bC(n){return new ee(Q.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function SC(){return new ee(Q.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nv+"' property when initializing the app?")}function sv(){return new ee(Q.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function kC(){return new ee(Q.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function AC(){return new ee(Q.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CC(n){return new ee(Q.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sr(n){return new ee(Q.INVALID_ARGUMENT,n)}function ov(){return new ee(Q.APP_DELETED,"The Firebase app was deleted.")}function av(n){return new ee(Q.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xi(n,e){return new ee(Q.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function pi(n){throw new ee(Q.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ne.makeFromUrl(e,t)}catch{return new Ne(e,"")}if(r.path==="")return r;throw bC(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},w=t===tv?"(?:storage.googleapis.com|storage.cloud.google.com)":t,E="([^?#]*)",x=new RegExp(`^https?://${w}/${i}/${E}`,"i"),R=[{regex:a,indices:c,postModify:s},{regex:f,indices:g,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<R.length;O++){const q=R[O],B=q.regex.exec(e);if(B){const ce=B[q.indices.bucket];let Ce=B[q.indices.path];Ce||(Ce=""),r=new Ne(ce,Ce),q.postModify(r);break}}if(r==null)throw EC(e);return r}}class RC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,n(f,c())},E)}function d(){s&&clearTimeout(s)}function f(E,...x){if(u){d();return}if(E){d(),l.call(null,E,...x);return}if(c()||o){d(),l.call(null,E,...x);return}r<64&&(r*=2);let R;a===1?(a=2,R=0):R=(r+Math.random())*1e3,h(R)}let g=!1;function w(E){g||(g=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},t),w}function DC(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(n){return n!==void 0}function PC(n){return typeof n=="function"}function OC(n){return typeof n=="object"&&!Array.isArray(n)}function xa(n){return typeof n=="string"||n instanceof String}function cf(n){return ih()&&n instanceof Blob}function ih(){return typeof Blob<"u"&&!Uo()}function cu(n,e,t,r){if(r<e)throw Sr(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Sr(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function cv(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Un;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Un||(Un={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,t,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new zs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Un.NO_ERROR,c=s.getStatus();if(!a||uv(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===Un.ABORT;r(!1,new zs(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new zs(u,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());xC(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=rh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?ov():iv();o(c)}else{const c=rv();o(c)}};this.canceled_?t(!1,new zs(!1,null,!0)):this.backoffId_=NC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zs{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function MC(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function FC(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UC(n,e){e&&(n["X-Firebase-GMPID"]=e)}function VC(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function BC(n,e,t,r,i,s,o=!0){const a=cv(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return UC(u,e),MC(u,t),FC(u,s),VC(u,r),new LC(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qC(...n){const e=$C();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ih())return new Blob(n);throw new ee(Q.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jC(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(n){if(typeof atob>"u")throw CC("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lc{constructor(e,t){this.data=e,this.contentType=t||null}}function lv(n,e){switch(n){case Je.RAW:return new lc(hv(e));case Je.BASE64:case Je.BASE64URL:return new lc(dv(n,e));case Je.DATA_URL:return new lc(KC(e),HC(e))}throw rh()}function hv(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function GC(n){let e;try{e=decodeURIComponent(n)}catch{throw xi(Je.DATA_URL,"Malformed data URL.")}return hv(e)}function dv(n,e){switch(n){case Je.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw xi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Je.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw xi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=zC(e)}catch(i){throw i.message.includes("polyfill")?i:xi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class fv{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw xi(Je.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=WC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function KC(n){const e=new fv(n);return e.base64?dv(Je.BASE64,e.rest):GC(e.rest)}function HC(n){return new fv(n).contentType}function WC(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){let r=0,i="";cf(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(cf(this.data_)){const r=this.data_,i=jC(r,e,t);return i===null?null:new Et(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Et(r,!0)}}static getBlob(...e){if(ih()){const t=e.map(r=>r instanceof Et?r.data_:r);return new Et(qC.apply(null,t))}else{const t=e.map(o=>xa(o)?lv(Je.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Et(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n){let e;try{e=JSON.parse(n)}catch{return null}return OC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function XC(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function pv(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(n,e){return e}class Oe{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||YC}}let Gs=null;function JC(n){return!xa(n)||n.length<2?n:pv(n)}function Pa(){if(Gs)return Gs;const n=[];n.push(new Oe("bucket")),n.push(new Oe("generation")),n.push(new Oe("metageneration")),n.push(new Oe("name","fullPath",!0));function e(s,o){return JC(o)}const t=new Oe("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new Oe("size");return i.xform=r,n.push(i),n.push(new Oe("timeCreated")),n.push(new Oe("updated")),n.push(new Oe("md5Hash",null,!0)),n.push(new Oe("cacheControl",null,!0)),n.push(new Oe("contentDisposition",null,!0)),n.push(new Oe("contentEncoding",null,!0)),n.push(new Oe("contentLanguage",null,!0)),n.push(new Oe("contentType",null,!0)),n.push(new Oe("metadata","customMetadata",!0)),Gs=n,Gs}function ZC(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Ne(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function eR(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return ZC(r,n),r}function mv(n,e,t){const r=sh(e);return r===null?null:eR(n,r,t)}function tR(n,e,t,r){const i=sh(e);if(i===null||!xa(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=n.bucket,h=n.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=vn(d,t,r),g=cv({alt:"media",token:u});return f+g})[0]}function oh(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="prefixes",lf="items";function nR(n,e,t){const r={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[uf])for(const i of t[uf]){const s=i.replace(/\/$/,""),o=n._makeStorageReference(new Ne(e,s));r.prefixes.push(o)}if(t[lf])for(const i of t[lf]){const s=n._makeStorageReference(new Ne(e,i.name));r.items.push(s)}return r}function rR(n,e,t){const r=sh(t);return r===null?null:nR(n,e,r)}class qt{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n){if(!n)throw rh()}function Oa(n,e){function t(r,i){const s=mv(n,i,e);return vt(s!==null),s}return t}function iR(n,e){function t(r,i){const s=rR(n,e,i);return vt(s!==null),s}return t}function sR(n,e){function t(r,i){const s=mv(n,i,e);return vt(s!==null),tR(s,i,n.host,n._protocol)}return t}function ni(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=IC():i=_C():t.getStatus()===402?i=wC(n.bucket):t.getStatus()===403?i=TC(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function La(n){const e=ni(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=vC(n.path)),s.serverResponse=i.serverResponse,s}return t}function gv(n,e,t){const r=e.fullServerUrl(),i=vn(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new qt(i,s,Oa(n,t),o);return a.errorHandler=La(e),a}function oR(n,e,t,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",t&&t.length>0&&(s.delimiter=t),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=vn(o,n.host,n._protocol),c="GET",u=n.maxOperationRetryTime,l=new qt(a,c,iR(n,e.bucket),u);return l.urlParams=s,l.errorHandler=ni(e),l}function aR(n,e,t){const r=e.fullServerUrl(),i=vn(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new qt(i,s,sR(n,t),o);return a.errorHandler=La(e),a}function cR(n,e,t,r){const i=e.fullServerUrl(),s=vn(i,n.host,n._protocol),o="PATCH",a=oh(t,r),c={"Content-Type":"application/json; charset=utf-8"},u=n.maxOperationRetryTime,l=new qt(s,o,Oa(n,r),u);return l.headers=c,l.body=a,l.errorHandler=La(e),l}function uR(n,e){const t=e.fullServerUrl(),r=vn(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(c,u){}const a=new qt(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=La(e),a}function lR(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function yv(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=lR(null,e)),r}function hR(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let O=0;O<2;O++)R=R+Math.random().toString().slice(2);return R}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=yv(e,r,i),l=oh(u,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Et.getBlob(h,r,d);if(f===null)throw sv();const g={name:u.fullPath},w=vn(s,n.host,n._protocol),E="POST",x=n.maxUploadRetryTime,M=new qt(w,E,Oa(n,t),x);return M.urlParams=g,M.headers=o,M.body=f.uploadData(),M.errorHandler=ni(e),M}class Fo{constructor(e,t,r,i){this.current=e,this.total=t,this.finalized=!!r,this.metadata=i||null}}function ah(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{vt(!1)}return vt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function dR(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o=yv(e,r,i),a={name:o.fullPath},c=vn(s,n.host,n._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=oh(o,t),d=n.maxUploadRetryTime;function f(w){ah(w);let E;try{E=w.getResponseHeader("X-Goog-Upload-URL")}catch{vt(!1)}return vt(xa(E)),E}const g=new qt(c,u,f,d);return g.urlParams=a,g.headers=l,g.body=h,g.errorHandler=ni(e),g}function fR(n,e,t,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=ah(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{vt(!1)}h||vt(!1);const d=Number(h);return vt(!isNaN(d)),new Fo(d,r.size(),l==="final")}const o="POST",a=n.maxUploadRetryTime,c=new qt(t,o,s,a);return c.headers=i,c.errorHandler=ni(e),c}const hf=256*1024;function pR(n,e,t,r,i,s,o,a){const c=new Fo(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw kC();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},w=r.slice(h,d);if(w===null)throw sv();function E(O,q){const B=ah(O,["active","final"]),ce=c.current+l,Ce=r.size();let wn;return B==="final"?wn=Oa(e,s)(O,q):wn=null,new Fo(ce,Ce,B==="final",wn)}const x="POST",M=e.maxUploadRetryTime,R=new qt(t,x,E,M);return R.headers=g,R.body=w.uploadData(),R.progressCallback=a||null,R.errorHandler=ni(n),R}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR={STATE_CHANGED:"state_changed"},Fe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function hc(n){switch(n){case"running":case"pausing":case"canceling":return Fe.RUNNING;case"paused":return Fe.PAUSED;case"success":return Fe.SUCCESS;case"canceled":return Fe.CANCELED;case"error":return Fe.ERROR;default:return Fe.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,t,r){if(PC(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class yR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Un.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Un.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Un.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw pi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vR extends yR{initXhr(){this.xhr_.responseType="text"}}function ht(){return new vR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Pa(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Q.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(uv(i.status,[]))if(s)i=rv();else{this.sleepTime=Math.max(this.sleepTime*2,yC),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Q.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=dR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ht,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const i=fR(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,ht,t,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=hf*this._chunkMultiplier,t=new Fo(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=pR(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ht,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){hf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=gv(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,ht,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=hR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ht,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=iv(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=hc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,i){const s=new gR(t||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(hc(this._state)){case Fe.SUCCESS:hr(this._resolve.bind(null,this.snapshot))();break;case Fe.CANCELED:case Fe.ERROR:const t=this._reject;hr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(hc(this._state)){case Fe.RUNNING:case Fe.PAUSED:e.next&&hr(e.next.bind(e,this.snapshot))();break;case Fe.SUCCESS:e.complete&&hr(e.complete.bind(e))();break;case Fe.CANCELED:case Fe.ERROR:e.error&&hr(e.error.bind(e,this._error))();break;default:e.error&&hr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t){this._service=e,t instanceof Ne?this._location=t:this._location=Ne.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Jn(e,t)}get root(){const e=new Ne(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pv(this._location.path)}get storage(){return this._service}get parent(){const e=QC(this._location.path);if(e===null)return null;const t=new Ne(this._location.bucket,e);return new Jn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw av(e)}}function wR(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new vv(n,new Et(e),t)}function _R(n){const e={prefixes:[],items:[]};return wv(n,e).then(()=>e)}async function wv(n,e,t){const i=await _v(n,{pageToken:t});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await wv(n,e,i.nextPageToken)}function _v(n,e){e!=null&&typeof e.maxResults=="number"&&cu("options.maxResults",1,1e3,e.maxResults);const t=e||{},r=oR(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(r,ht)}function IR(n){n._throwIfRoot("getMetadata");const e=gv(n.storage,n._location,Pa());return n.storage.makeRequestWithTokens(e,ht)}function TR(n,e){n._throwIfRoot("updateMetadata");const t=cR(n.storage,n._location,e,Pa());return n.storage.makeRequestWithTokens(t,ht)}function ER(n){n._throwIfRoot("getDownloadURL");const e=aR(n.storage,n._location,Pa());return n.storage.makeRequestWithTokens(e,ht).then(t=>{if(t===null)throw AC();return t})}function bR(n){n._throwIfRoot("deleteObject");const e=uR(n.storage,n._location);return n.storage.makeRequestWithTokens(e,ht)}function Iv(n,e){const t=XC(n._location.path,e),r=new Ne(n._location.bucket,t);return new Jn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(n){return/^[A-Za-z]+:\/\//.test(n)}function kR(n,e){return new Jn(n,e)}function Tv(n,e){if(n instanceof ch){const t=n;if(t._bucket==null)throw SC();const r=new Jn(t,t._bucket);return e!=null?Tv(r,e):r}else return e!==void 0?Iv(n,e):n}function AR(n,e){if(e&&SR(e)){if(n instanceof ch)return kR(n,e);throw Sr("To use ref(service, url), the first argument must be a Storage instance.")}else return Tv(n,e)}function df(n,e){const t=e==null?void 0:e[nv];return t==null?null:Ne.makeFromBucketSpec(t,n)}function CR(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Tf(i,n.app.options.projectId))}class ch{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=tv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mC,this._maxUploadRetryTime=gC,this._requests=new Set,i!=null?this._bucket=Ne.makeFromBucketSpec(i,this._host):this._bucket=df(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ne.makeFromBucketSpec(this._url,e):this._bucket=df(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jn(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new RC(ov());{const o=BC(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const ff="@firebase/storage",pf="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR="storage";function NR(n,e,t){return n=k(n),wR(n,e,t)}function DR(n){return n=k(n),IR(n)}function xR(n,e){return n=k(n),TR(n,e)}function PR(n,e){return n=k(n),_v(n,e)}function OR(n){return n=k(n),_R(n)}function LR(n){return n=k(n),ER(n)}function MR(n){return n=k(n),bR(n)}function mf(n,e){return n=k(n),AR(n,e)}function FR(n,e){return Iv(n,e)}function UR(n,e,t,r={}){CR(n,e,t,r)}function VR(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new ch(t,r,i,e,Mt)}function BR(){xt(new et(RR,VR,"PUBLIC").setMultipleInstances(!0)),Ze(ff,pf,""),Ze(ff,pf,"esm2017")}BR();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,r){this._delegate=e,this.task=t,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ks(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(r=>{if(e)return e(new Ks(r,this,this._ref))},t)}on(e,t,r,i){let s;return t&&(typeof t=="function"?s=o=>t(new Ks(o,this,this._ref)):s={next:t.next?o=>t.next(new Ks(o,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class yf{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Dt(e,this._service))}get items(){return this._delegate.items.map(e=>new Dt(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=FR(this._delegate,e);return new Dt(t,this.storage)}get root(){return new Dt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Dt(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new gf(NR(this._delegate,e,t),this)}putString(e,t=Je.RAW,r){this._throwIfRoot("putString");const i=lv(t,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new gf(new vv(this._delegate,new Et(i.data,!0),s),this)}listAll(){return OR(this._delegate).then(e=>new yf(e,this.storage))}list(e){return PR(this._delegate,e||void 0).then(t=>new yf(t,this.storage))}getMetadata(){return DR(this._delegate)}updateMetadata(e){return xR(this._delegate,e)}getDownloadURL(){return LR(this._delegate)}delete(){return this._throwIfRoot("delete"),MR(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw av(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(vf(e))throw Sr("ref() expected a child path but got a URL, use refFromURL instead.");return new Dt(mf(this._delegate,e),this)}refFromURL(e){if(!vf(e))throw Sr("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Ne.makeFromUrl(e,this._delegate.host)}catch{throw Sr("refFromUrl() expected a valid full URL but got an invalid one.")}return new Dt(mf(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,r={}){UR(this._delegate,e,t,r)}}function vf(n){return/^[A-Za-z]+:\/\//.test(n)}const $R="@firebase/storage-compat",qR="0.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="storage-compat";function zR(n,{instanceIdentifier:e}){const t=n.getProvider("app-compat").getImmediate(),r=n.getProvider("storage").getImmediate({identifier:e});return new Ev(t,r)}function GR(n){const e={TaskState:Fe,TaskEvent:mR,StringFormat:Je,Storage:Ev,Reference:Dt};n.INTERNAL.registerComponent(new et(jR,zR,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),n.registerVersion($R,qR)}GR(Tt);const KR={apiKey:"AIzaSyAdNm6PGgleR1qE79jzgX7vURMCCoUiTdA",authDomain:"tutorialpilot-001.firebaseapp.com",projectId:"tutorialpilot-001",storageBucket:"tutorialpilot-001.appspot.com",messagingSenderId:"1057517143025",appId:"1:1057517143025:web:b00df543109841df86fa50",measurementId:"G-6FQTFWSBHV"};Tt.initializeApp(KR);const QR=Tt.firestore();Tt.auth();const XR=Tt.storage();export{QR as d,Tt as f,XR as s};
