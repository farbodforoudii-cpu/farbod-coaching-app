function i(...n){return n.filter(Boolean).join("/").replace(/\/+/g,"/")}function o(n){const e=n.lastIndexOf("/");return e<=0?e===0?"/":".":n.slice(0,e)}export{o as d,i as j};
