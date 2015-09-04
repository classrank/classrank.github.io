# How to Make a Blog Post
#### _If you feel so inclined..._

1. Clone the website repo
```
git clone git@github.com:classrank/classrank.github.io.git
```
2. Go into the `_posts` directory
```
cd _posts
```
3. Make a post with title `YEAR-MO-DY-title-of-post.md`. Look to currently existing posts for examples. This allows Jekyll to properly order the posts and place them in the right directory.
```
touch 2015-09-04-your-title-here.md
```
4. You're almost done. You just need to affix the front-matter to the top of the post. The front-matter tells Jekyll two pieces of information: what layout to format the post with, and what title to use. Luckily, we already have a layout for blog posts, `blog.html`. The front-matter looks like this:
```
    ---
    layout: blog
    title: your-title-here
 ---
```
5. Finally, add your blog post below the three dashes. Jekyll is formatted in [Markdown][1] (see [here][2] for a cheat-sheet), so make it pretty. The usual format (or rather, the format I've been using so far) is
```
    # Blog Post Name
##### Blog post sub-title (if exists)

 Post text...
```
6. Save your post.
7. Now, let Jekyll do the work for you: build the site. Move to the top-level directory of the repo, and `jekyll build`.
```
cd ..
jekyll build
```


And you're done! If you'd like to see the post in action (or debug it), Jekyll can help with that:
```
jekyll serve --watch
```
This command has Jekyll spin up a small server to run the website, rebuilding it if you make any changes to your post. Go to the link indicated (usually http://127.0.0.1:4000/). Now, go to the correct subfolder to see your post:
```
http://127.0.0.1:4000/YEAR/MO/DY/your-title-here/
```

## Troubleshooting
### _I don't have Jekyll_
Do you have Ruby installed?
```
gem install jekyll
```
Don't have Ruby installed? [Ruby download][3]

Still throwing errors? [Google][4]
[1]: https://en.wikipedia.org/wiki/Markdown
[2]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[3]: https://www.ruby-lang.org/en/downloads/
[4]: https://www.google.com/
