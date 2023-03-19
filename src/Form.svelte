<script>
  export let bugfix = false
</script>

<section class="container">
  <div class="form-check form-switch mb-3">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
    <label class="form-check-label" for="flexSwitchCheckDefault">I agree</label>
    {#if bugfix}
      <span class="badge rounded-pill text-bg-success">Fixed</span>
    {/if}
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Alpha</label>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck2">
    <label class="form-check-label" for="exampleCheck2">Beta</label>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck3">
    <label class="form-check-label" for="exampleCheck3">Gamma</label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
      Yes
    </label>
  </div>
  <div class="form-check mb-3">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
    <label class="form-check-label" for="flexRadioDefault2">
      No
    </label>
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Win</button>
</section>
