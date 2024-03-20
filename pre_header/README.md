
```
<!-- Including a JS file from a module -->
{{ $script := resources.Get "js/pre_header.js" }}
<script src="{{ $script.Permalink }}"></script>
```