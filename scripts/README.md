# Publishing and the image optimizer

For editing content, use the [editing guide](../HOW-TO-EDIT-THIS-WEBSITE.md).

## Publishing

GitHub Pages builds the site straight from the `main` branch (**Settings → Pages → Build and deployment → Deploy from a branch**, `main`, `/ (root)`). Every commit to `main` starts a run named **pages build and deployment** in the [Actions tab](https://github.com/amaranth-unm/community-geography/actions). If a build fails, the previous version stays online; open the failed run, read the error, fix the named file, and commit again.

The site uses only Liquid templates and the plugins GitHub Pages supports, so there is nothing to install or configure. To preview locally, run `bundle install` and then `bundle exec jekyll serve`. The [Gemfile](../Gemfile) installs the same Jekyll version that GitHub Pages uses.

Old file addresses from the Cascade site, such as `/news/some-flyer.pdf`, are listed in [legacy-assets.json](../_data/legacy-assets.json). The [404 page](../404.md) sends anyone who follows one of those addresses to the file's new home in `assets/`.

## Optimize Images

| Script | What it does | When it runs |
| --- | --- | --- |
| [optimize-images.sh](optimize-images.sh) | A small entry point that passes the workflow's choices to the Python optimizer. | During every image-optimization run. |
| [optimize-images.py](optimize-images.py) | Finds tracked JPEGs and PNGs, including images without normal extensions. Uses ImageMagick to make smaller candidates and reports the measured savings. Preserves filenames and formats, never enlarges images, and replaces an image only if the result is smaller. Records applied files and settings to avoid repeatedly processing unchanged images. | After the optimizer tests pass. Preview uses temporary copies; apply replaces repository images in GitHub's working copy, which the workflow then commits. |
| [test-optimize-images.py](test-optimize-images.py) | Tests preview behavior, resizing, format and transparency preservation, unusual filenames, repeated runs, and error handling using temporary images in an isolated test repository. | **Check optimizer behavior on temporary images**, before processing site images. These tests do not change the site's images. |

To use it, open **Actions → Optimize Images → Run workflow**. Choose `main`, a folder, maximum image size, and JPEG quality. Leave **Actually change the files** unticked to measure savings first; inspect the run's summary. A preview reports sizes, not a side-by-side visual comparison. Tick the checkbox on a later run to apply your chosen settings. Applied changes replace images in place, commit them, and so republish the site; earlier versions remain in Git history.

The workflow installs its tools automatically.
