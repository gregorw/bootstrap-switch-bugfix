import{S as o,i,s as l,e as c,a as n,b as d,n as a,d as h}from"./index-c4d08199.js";/* empty css                */function p(s){let e;return{c(){e=c("main"),e.innerHTML=`<h1>Bootstrap Switch <span class="badge rounded-pill text-bg-success">Fixed</span></h1> 
  <p>Who does not love <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches" target="_blank">Bootstrap’s switches</a>?
    <br/> 
    <a href="https://www.nngroup.com/articles/toggle-switch-guidelines/" target="_blank">Toggle Switches</a>  are an essential part of many applications.</p> 
  <p>Please see <a href="https://gregorw.github.io/bootstrap-switch/" target="_blank">gregorw.github.io/bootstrap-switch</a> for the the current buggy behaviour.</p> 

  <h2>Fixed behaviour</h2> 
  <p>Please see <a href="https://github.com/twbs/bootstrap/pull/38109" target="_blank">#38109</a>.</p> 
  <div class="row"><div class="col col-6 col-lg-3"><h3>Rectangular</h3> 
      <p><code>$enable-rounded: false;</code></p> 
      <iframe title="Rectangular" src="/bootstrap-switch-bugfix/rectangular.html" frameborder="0" class="iframe svelte-1eqmgt5"></iframe></div> 
    <div class="col col-6 col-lg-3"><h3>Default</h3> 
      <p><code>// default settings</code></p> 
      <iframe title="Default" src="/bootstrap-switch-bugfix/default.html" frameborder="0" class="iframe svelte-1eqmgt5"></iframe></div> 
    <div class="col col-6 col-lg-3"><h3>Round</h3> 
      <p><code>$border-radius: .2em;</code></p> 
      <iframe title="Round" src="/bootstrap-switch-bugfix/round.html" frameborder="0" class="iframe svelte-1eqmgt5"></iframe> 
      <p class="alert alert-warning" role="alert">The <code>$border-radius</code> setting is neither applied to the switch nor the checkboxes.</p></div> 
    <div class="col col-6 col-lg-3"><h3>No radius</h3> 
      <p><code>$border-radius: 0;</code></p> 
      <iframe title="No radius" src="/bootstrap-switch-bugfix/not-round.html" frameborder="0" class="iframe svelte-1eqmgt5"></iframe> 
      <p class="alert alert-warning" role="alert">The <code>$border-radius</code> setting is neither applied to the switch nor the checkboxes.</p></div></div>`,n(e,"class","container-xxl py-4")},m(t,r){d(t,e,r)},p:a,i:a,o:a,d(t){t&&h(e)}}}class g extends o{constructor(e){super(),i(this,e,null,p,l,{})}}new g({target:document.getElementById("app")});
