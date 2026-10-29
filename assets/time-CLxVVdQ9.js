const e="Asia/Tehran",n=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"});function a(t){return n.format(typeof t=="string"?new Date(t):t)}export{a as t};
