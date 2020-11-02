#### Live Results:
<form action="">
  <input type="text" name="url" value="{{item.data.frame_url}}">
  <input type="button" value="Reload" onClick="document.getElementById('frame{{loop.index}}').src=this.form.url.value">
</form>
  <iframe id="frame{{loop.index}}" onload="showFrameSource(this, 'source{{loop.index}}')" class="results-container" width="100%" height="100%" src="{{item.data.frame_url}}" frameborder="0"></iframe>

#### Live Results (Source):

<pre><code id="source{{loop.index}}" class="language-html"></code></pre>
