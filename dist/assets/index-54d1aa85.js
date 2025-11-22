/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=["user","model","function"];var w;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(w||(w={}));var y;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(y||(y={}));var M;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(M||(M={}));var b;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(b||(b={}));var O;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.OTHER="OTHER"})(O||(O={}));var L;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(L||(L={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t.STRING="STRING",t.NUMBER="NUMBER",t.INTEGER="INTEGER",t.BOOLEAN="BOOLEAN",t.ARRAY="ARRAY",t.OBJECT="OBJECT"})(G||(G={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class p extends u{constructor(e,n){super(e),this.response=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="https://generativelanguage.googleapis.com",x="v1",Y="0.3.1",j="genai-js";var h;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(h||(h={}));class R{constructor(e,n,s,o,i){this.model=e,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var e;const n=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||x;let s=`${K}/${n}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function k(){return`${j}/${Y}`}async function C(t,e,n){let s;try{if(s=await fetch(t.toString(),Object.assign(Object.assign({},V(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":k(),"x-goog-api-key":t.apiKey},body:e})),!s.ok){let o="";try{const i=await s.json();o=i.error.message,i.error.details&&(o+=` ${JSON.stringify(i.error.details)}`)}catch{}throw new Error(`[${s.status} ${s.statusText}] ${o}`)}}catch(o){const i=new u(`Error fetching from ${t.toString()}: ${o.message}`);throw i.stack=o.stack,i}return s}function V(t){const e={};if((t==null?void 0:t.timeout)>=0){const n=new AbortController,s=n.signal;setTimeout(()=>n.abort(),t.timeout),e.signal=s}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),I(t.candidates[0]))throw new p(`${_(t)}`,t);return q(t)}else if(t.promptFeedback)throw new p(`Text not available. ${_(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function call from the first candidate only. Access response.candidates directly to use the other candidates.`),I(t.candidates[0]))throw new p(`${_(t)}`,t);return J(t)}else if(t.promptFeedback)throw new p(`Function call not available. ${_(t)}`,t)},t}function q(t){var e,n,s,o;return!((o=(s=(n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0?void 0:n.parts)===null||s===void 0?void 0:s[0])===null||o===void 0)&&o.text?t.candidates[0].content.parts.map(({text:i})=>i).join(""):""}function J(t){var e,n,s,o;return(o=(s=(n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0?void 0:n.parts)===null||s===void 0?void 0:s[0])===null||o===void 0?void 0:o.functionCall}const W=[O.RECITATION,O.SAFETY];function I(t){return!!t.finishReason&&W.includes(t.finishReason)}function _(t){var e,n,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];I(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function g(t){return this instanceof g?(this.v=t,this):new g(t)}function X(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(t,e||[]),o,i=[];return o={},c("next"),c("throw"),c("return"),o[Symbol.asyncIterator]=function(){return this},o;function c(d){s[d]&&(o[d]=function(E){return new Promise(function(A,F){i.push([d,E,A,F])>1||r(d,E)})})}function r(d,E){try{a(s[d](E))}catch(A){m(i[0][3],A)}}function a(d){d.value instanceof g?Promise.resolve(d.value.v).then(l,f):m(i[0][2],d)}function l(d){r("next",d)}function f(d){r("throw",d)}function m(d,E){d(E),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Q(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=tt(e),[s,o]=n.tee();return{stream:Z(s),response:z(o)}}async function z(t){const e=[],n=t.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return T(et(e));e.push(o)}}function Z(t){return X(this,arguments,function*(){const n=t.getReader();for(;;){const{value:s,done:o}=yield g(n.read());if(o)break;yield yield g(T(s))}})}function tt(t){const e=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return e.read().then(({value:c,done:r})=>{if(r){if(o.trim()){s.error(new u("Failed to parse stream"));return}s.close();return}o+=c;let a=o.match(P),l;for(;a;){try{l=JSON.parse(a[1])}catch{s.error(new u(`Error parsing JSON response: "${a[1]}"`));return}s.enqueue(l),o=o.substring(a[0].length),a=o.match(P)}return i()})}}})}function et(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t)if(s.candidates)for(const o of s.candidates){const i=o.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:o.index}),n.candidates[i].citationMetadata=o.citationMetadata,n.candidates[i].finishReason=o.finishReason,n.candidates[i].finishMessage=o.finishMessage,n.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[i].content||(n.candidates[i].content={role:o.content.role||"user",parts:[]});const c={};for(const r of o.content.parts)r.text&&(c.text=r.text),r.functionCall&&(c.functionCall=r.functionCall),Object.keys(c).length===0&&(c.text=""),n.candidates[i].content.parts.push(c)}}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(t,e,n,s){const o=new R(e,h.STREAM_GENERATE_CONTENT,t,!0,s),i=await C(o,JSON.stringify(n),s);return Q(i)}async function B(t,e,n,s){const o=new R(e,h.GENERATE_CONTENT,t,!1,s),c=await(await C(o,JSON.stringify(n),s)).json();return{response:T(c)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return nt(e)}function nt(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new u("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new u("No content is provided for sending chat message.");return s?e:n}function N(t){return t.contents?t:{contents:[S(t)]}}function st(t){return typeof t=="string"||Array.isArray(t)?{content:S(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=["text","inlineData","functionCall","functionResponse"],ot={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"]},H={user:["model"],function:["model"],model:["user","function"]};function it(t){let e;for(const n of t){const{role:s,parts:o}=n;if(!e&&s!=="user")throw new u(`First content should be with role 'user', got ${s}`);if(!v.includes(s))throw new u(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(v)}`);if(!Array.isArray(o))throw new u("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new u("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0};for(const r of o)for(const a of D)a in r&&(i[a]+=1);const c=ot[s];for(const r of D)if(!c.includes(r)&&i[r]>0)throw new u(`Content with role '${s}' can't contain '${r}' part`);if(e&&!H[s].includes(e.role))throw new u(`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(H)}`);e=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U="SILENT_ERROR";class rt{constructor(e,n,s,o){this.model=n,this.params=s,this.requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,s!=null&&s.history&&(it(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var n,s,o;await this._sendPromise;const i=S(e),c={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,contents:[...this._history,i]};let r;return this._sendPromise=this._sendPromise.then(()=>B(this._apiKey,this.model,c,this.requestOptions)).then(a=>{var l;if(a.response.candidates&&a.response.candidates.length>0){this._history.push(i);const f=Object.assign({parts:[],role:"model"},(l=a.response.candidates)===null||l===void 0?void 0:l[0].content);this._history.push(f)}else{const f=_(a.response);f&&console.warn(`sendMessage() was unsuccessful. ${f}. Inspect response object for details.`)}r=a}),await this._sendPromise,r}async sendMessageStream(e){var n,s,o;await this._sendPromise;const i=S(e),c={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,contents:[...this._history,i]},r=$(this._apiKey,this.model,c,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>r).catch(a=>{throw new Error(U)}).then(a=>a.response).then(a=>{if(a.candidates&&a.candidates.length>0){this._history.push(i);const l=Object.assign({},a.candidates[0].content);l.role||(l.role="model"),this._history.push(l)}else{const l=_(a);l&&console.warn(`sendMessageStream() was unsuccessful. ${l}. Inspect response object for details.`)}}).catch(a=>{a.message!==U&&console.error(a)}),r}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e,n,s){const o=new R(e,h.COUNT_TOKENS,t,!1,{});return(await C(o,JSON.stringify(Object.assign(Object.assign({},n),{model:e})),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t,e,n,s){const o=new R(e,h.EMBED_CONTENT,t,!1,{});return(await C(o,JSON.stringify(n),s)).json()}async function dt(t,e,n,s){const o=new R(e,h.BATCH_EMBED_CONTENTS,t,!1,{}),i=n.requests.map(r=>Object.assign(Object.assign({},r),{model:e}));return(await C(o,JSON.stringify({requests:i}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,s){this.apiKey=e,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.requestOptions=s||{}}async generateContent(e){const n=N(e);return B(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},n),this.requestOptions)}async generateContentStream(e){const n=N(e);return $(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},n),this.requestOptions)}startChat(e){return new rt(this.apiKey,this.model,Object.assign({tools:this.tools},e),this.requestOptions)}async countTokens(e){const n=N(e);return at(this.apiKey,this.model,n)}async embedContent(e){const n=st(e);return ct(this.apiKey,this.model,n)}async batchEmbedContents(e){return dt(this.apiKey,this.model,e,this.requestOptions)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new u("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new lt(this.apiKey,e,n)}}export{b as BlockReason,rt as ChatSession,O as FinishReason,G as FunctionDeclarationSchemaType,lt as GenerativeModel,ut as GoogleGenerativeAI,y as HarmBlockThreshold,w as HarmCategory,M as HarmProbability,v as POSSIBLE_ROLES,L as TaskType};
