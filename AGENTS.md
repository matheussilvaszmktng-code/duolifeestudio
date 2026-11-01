<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Serve site photographs and the logo from `public/images` through `/images/...` paths so external hosts do not depend on Lovable's internal asset proxy; retain original bytes and presentation attributes.
- Legacy `src/assets/*.asset.json` files are unreferenced provenance only; do not use their internal URLs in the site or delete their remote assets.
