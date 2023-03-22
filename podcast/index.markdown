---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# layout: home
layout: default
---

<p>Welcome to <strong>Steve Moy Show</strong>, a place to have open and honest discussions about all different topics! I'd always appreciate your feedback and you can get in touch with us on <a href="mailto:info.stephenmoy@gmail.com?subject=I found your website and wanted to say hi!">email</a> or on <a href="http://twitter.com/stevemoy1">twitter</a>!</p>

<div class="card-grid">
<!--     -->
    
    {% assign first_post = site.posts.first %}
    <div class="cards first">
        <h1 class="label reversed">Latest Episode</h1>
        <div class="center-content">
            <div class="seven columns">
                <h2><a class="post-link" href="{{ first_post.url | prepend: site.baseurl }}">{{ first_post.title }}</a></h2>
                
                <p class="meta">{{ first_post.date | date: "%b %-d, %Y" }}</p>
                <p>{{ first_post.summary }} </p> 
            </div>
            <div class="four columns center-content">
                <a href="{{ first_post.file }}" class="button button-primary" download="{{ first_post.title }}">Download Now</a>    
            </div>
        </div>            
        </div>
    
    {% for post in site.posts offset:1 %}
        <div class="cards">
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <p class="meta">{{ post.date | date: "%b %-d, %Y" }}</p>
        <p>{{ post.summary }} </p>
        </div>
    {% endfor %}
    
</div>

<div class="container center-content extra-padding">
</div>

<!-- This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](https://jekyllrb.com/)

You can find the source code for Minima at GitHub:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

You can find the source code for Jekyll at GitHub:
[jekyll][jekyll-organization] /
[jekyll](https://github.com/jekyll/jekyll)


[jekyll-organization]: https://github.com/jekyll -->