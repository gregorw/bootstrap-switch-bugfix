import{S as r,i,s as c,e as l,a as d,b as h,n as o,d as n}from"./index-c4d08199.js";/* empty css                */function m(s){let e;return{c(){e=l("main"),e.innerHTML=`<h1>Bootstrap Switch</h1> 
  <p>Who does not love <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches" target="_blank">Bootstrap’s switches</a>?
    <br/> 
    <a href="https://www.nngroup.com/articles/toggle-switch-guidelines/" target="_blank">Toggle Switches</a>  are an essential part of many applications.</p> 
  <h2>Current behaviour</h2> 
  <div class="row"><div class="col col-6 col-lg-3"><h3>Rectangular</h3> 
      <p><code>$enable-rounded: false;</code></p> 
      <iframe title="Rectangular" src="/bootstrap-switch/rectangular.html" frameborder="0" class="iframe svelte-1eqmgt5"></iframe></div> 
    <div class="col col-6 col-lg-3"><h3>Default</h3> 
      <p><code>// default settings</code></p> 
      <iframe title="Default" src="/bootstrap-switch/default.html" frameborder="0" class="iframe svelte-1eqmgt5"></iframe></div> 
    <div class="col col-6 col-lg-3"><h3>Round</h3> 
      <p><code>$border-radius: .2em;</code></p> 
      <iframe title="Round" src="/bootstrap-switch/round.html" frameborder="0" class="iframe svelte-1eqmgt5"></iframe> 
      <p class="alert alert-warning" role="alert">The <code>$border-radius</code> setting is neither applied to the switch nor the checkboxes.</p></div> 
    <div class="col col-6 col-lg-3"><h3>No radius</h3> 
      <p><code>$border-radius: 0;</code></p> 
      <iframe title="No radius" src="/bootstrap-switch/not-round.html" frameborder="0" class="iframe svelte-1eqmgt5"></iframe> 
      <p class="alert alert-warning" role="alert">The <code>$border-radius</code> setting is neither applied to the switch nor the checkboxes.</p></div></div> 
  <h3>Observations</h3> 
  <p>The “switch” component does not take <code>$border-radius</code> settings into account. Neither do checkboxes. The switch is fully rounded except when <code>$enable-rounded</code> is switched off. In this case, the box around the switch is rectangular while the toggle is still a disk — it is round.</p> 

  <h2>Options</h2> 

  <h3>Minimal Change</h3> 
  <p>There are two ways to fix the bug: Either make the inner toggle square or the outer switch round.</p> 
  <p>From looking at the <code>$enable-rounded</code> effect, it makes everything having pretty sharp edges. So, let us try this with a square toggle.</p> 

  <div class="row"><div class="col col-6 col-lg-3"><h4>Square</h4> 
      <p><code>$enable-rounded: false;</code></p> 
      <iframe title="Square" src="/bootstrap-switch/bugfix-square.html" frameborder="0" class="iframe svelte-1eqmgt5"></iframe></div></div> 

  <h3>Bigger Change</h3> 
  <p>We may want the “switch” to adhere to <code>$border-radius</code> settings. This means that the toggle SVG (i.e. <code>$form-switch-bg-image</code>) would need to be adjusted accordingly. This could easily be achieved using the rect SVG attribute <code>rx</code>. But, this is certainly not required at the moment.</p>`,d(e,"class","container-xxl py-4")},m(t,a){h(t,e,a)},p:o,i:o,o,d(t){t&&n(e)}}}class p extends r{constructor(e){super(),i(this,e,null,m,c,{})}}new p({target:document.getElementById("app")});
