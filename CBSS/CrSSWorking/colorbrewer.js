  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>d3/lib/colorbrewer/colorbrewer.js at master · mbostock/d3 · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="YiQzMoTkQBQ6U7FCYR6HdEaOH8lkRLsY/G8nZ9HDloY=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-2edf6f58a5335626270ffd1443694b5b6cf35623.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-2f6b52ce3884d9a32c2dc1fd41266c20de7aa966.css" media="screen" rel="stylesheet" type="text/css" />
    


        <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-d61440caec5d2210a2242b084cdb2bc6597e00b7.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-e63e3cd4f81a90d65e10c31aa99588f78d242aa9.js" type="text/javascript"></script>
      

        <link rel='permalink' href='/mbostock/d3/blob/183060d40ffce8a8bd233feeedd80f84d4707642/lib/colorbrewer/colorbrewer.js'>
    <meta property="og:title" content="d3"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/mbostock/d3"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="d3 - A JavaScript visualization library for HTML and SVG."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="mbostock/d3"/>

    <meta name="description" content="d3 - A JavaScript visualization library for HTML and SVG." />

  <link href="https://github.com/mbostock/d3/commits/master.atom" rel="alternate" title="Recent Commits to d3:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-out">
          <div class="container clearfix">

            <a class="header-logo-wordmark" href="https://github.com/">
              <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1340659530" />
              <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1340659530" />
            </a>

              
<ul class="top-nav">
    <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
  <li class="search"><a href="https://github.com/search">Search</a></li>
  <li class="features"><a href="https://github.com/features">Features</a></li>
    <li class="blog"><a href="https://github.com/blog">Blog</a></li>
</ul>


            <div class="header-actions">
                <a class="button primary" href="https://github.com/signup">Sign up for free</a>
              <a class="button" href="https://github.com/login?return_to=%2Fmbostock%2Fd3%2Fblob%2Fmaster%2Flib%2Fcolorbrewer%2Fcolorbrewer.js">Sign in</a>
            </div>

          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fmbostock%2Fd3"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/mbostock/d3/stargazers">
        12,281
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fmbostock%2Fd3"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/mbostock/d3/network" class="social-count">
        2,014
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/mbostock" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">mbostock</span>
                  </a></span> /
                <strong><a href="/mbostock/d3" class="js-current-repository">d3</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/mbostock/d3" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/mbostock/d3/network" highlight="repo_network">Network</a></li>
    <li><a href="/mbostock/d3/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>39</span></a></li>

      <li><a href="/mbostock/d3/issues" highlight="repo_issues">Issues <span class='counter'>135</span></a></li>

      <li><a href="/mbostock/d3/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/mbostock/d3/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/mbostock/d3/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">125</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-filter="branches" class="js-select-menu-tab selected">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list js-filter-tab js-filter-branches css-truncate" data-filterable-for="commitish-filter-field" data-filterable-type="substring">



              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/adopt/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="adopt" rel="nofollow" title="adopt">adopt</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/capture-globals/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="capture-globals" rel="nofollow" title="capture-globals">capture-globals</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/fix-axis-tick-class/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-axis-tick-class" rel="nofollow" title="fix-axis-tick-class">fix-axis-tick-class</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/fix-centroid/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-centroid" rel="nofollow" title="fix-centroid">fix-centroid</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/fix-format-round/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-format-round" rel="nofollow" title="fix-format-round">fix-format-round</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/fix-greatarc-target/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-greatarc-target" rel="nofollow" title="fix-greatarc-target">fix-greatarc-target</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/fix-nest-rollup/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-nest-rollup" rel="nofollow" title="fix-nest-rollup">fix-nest-rollup</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/fix-voronoi-for-prototype/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-voronoi-for-prototype" rel="nofollow" title="fix-voronoi-for-prototype">fix-voronoi-for-prototype</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/fix-wheel/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-wheel" rel="nofollow" title="fix-wheel">fix-wheel</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/gh-pages/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/master/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/mbostock/d3/blob/minor-graticule/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="minor-graticule" rel="nofollow" title="minor-graticule">minor-graticule</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list js-filter-tab js-filter-tags css-truncate" data-filterable-for="commitish-filter-field" data-filterable-type="substring" style="display:none;">

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.5" rel="nofollow" title="v3.0.5">v3.0.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.4" rel="nofollow" title="v3.0.4">v3.0.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.3" rel="nofollow" title="v3.0.3">v3.0.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.2" rel="nofollow" title="v3.0.2">v3.0.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.1" rel="nofollow" title="v3.0.1">v3.0.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v3.0.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.0" rel="nofollow" title="v3.0.0">v3.0.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.10.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.3" rel="nofollow" title="v2.10.3">v2.10.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.10.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.2" rel="nofollow" title="v2.10.2">v2.10.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.10.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.1" rel="nofollow" title="v2.10.1">v2.10.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.10.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.0" rel="nofollow" title="v2.10.0">v2.10.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.7/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.7" rel="nofollow" title="v2.9.7">v2.9.7</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.6/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.6" rel="nofollow" title="v2.9.6">v2.9.6</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.5" rel="nofollow" title="v2.9.5">v2.9.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.4" rel="nofollow" title="v2.9.4">v2.9.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.3" rel="nofollow" title="v2.9.3">v2.9.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.2" rel="nofollow" title="v2.9.2">v2.9.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.1" rel="nofollow" title="v2.9.1">v2.9.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.9.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.0" rel="nofollow" title="v2.9.0">v2.9.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.8.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.8.1" rel="nofollow" title="v2.8.1">v2.8.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.8.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.8.0" rel="nofollow" title="v2.8.0">v2.8.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.5" rel="nofollow" title="v2.7.5">v2.7.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.4" rel="nofollow" title="v2.7.4">v2.7.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.3" rel="nofollow" title="v2.7.3">v2.7.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.2" rel="nofollow" title="v2.7.2">v2.7.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.1" rel="nofollow" title="v2.7.1">v2.7.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.7.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.0" rel="nofollow" title="v2.7.0">v2.7.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.6.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.6.1" rel="nofollow" title="v2.6.1">v2.6.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.6.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.6.0" rel="nofollow" title="v2.6.0">v2.6.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.5.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.5.2" rel="nofollow" title="v2.5.2">v2.5.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.5.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.5.1" rel="nofollow" title="v2.5.1">v2.5.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.5.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.5.0" rel="nofollow" title="v2.5.0">v2.5.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.6/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.6" rel="nofollow" title="v2.4.6">v2.4.6</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.5" rel="nofollow" title="v2.4.5">v2.4.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.4" rel="nofollow" title="v2.4.4">v2.4.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.3" rel="nofollow" title="v2.4.3">v2.4.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.2" rel="nofollow" title="v2.4.2">v2.4.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.1" rel="nofollow" title="v2.4.1">v2.4.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.4.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.0" rel="nofollow" title="v2.4.0">v2.4.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.3.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.4" rel="nofollow" title="v2.3.4">v2.3.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.3.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.3" rel="nofollow" title="v2.3.3">v2.3.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.3.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.2" rel="nofollow" title="v2.3.2">v2.3.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.3.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.1" rel="nofollow" title="v2.3.1">v2.3.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.3.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.0" rel="nofollow" title="v2.3.0">v2.3.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.2.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2.1" rel="nofollow" title="v2.2.1">v2.2.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.2.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2.0" rel="nofollow" title="v2.2.0">v2.2.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.1.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.3" rel="nofollow" title="v2.1.3">v2.1.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.1.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.2" rel="nofollow" title="v2.1.2">v2.1.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.1.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.1" rel="nofollow" title="v2.1.1">v2.1.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.1.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.0" rel="nofollow" title="v2.1.0">v2.1.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.0.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.4" rel="nofollow" title="v2.0.4">v2.0.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.0.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.3" rel="nofollow" title="v2.0.3">v2.0.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.0.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.2" rel="nofollow" title="v2.0.2">v2.0.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.0.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.1" rel="nofollow" title="v2.0.1">v2.0.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v2.0.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.0" rel="nofollow" title="v2.0.0">v2.0.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.7/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.7" rel="nofollow" title="v1.29.7">v1.29.7</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.6/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.6" rel="nofollow" title="v1.29.6">v1.29.6</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.5" rel="nofollow" title="v1.29.5">v1.29.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.4" rel="nofollow" title="v1.29.4">v1.29.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.3" rel="nofollow" title="v1.29.3">v1.29.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.2" rel="nofollow" title="v1.29.2">v1.29.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.1" rel="nofollow" title="v1.29.1">v1.29.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.29.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.0" rel="nofollow" title="v1.29.0">v1.29.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.28.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.28.1" rel="nofollow" title="v1.28.1">v1.28.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.28.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.28.0" rel="nofollow" title="v1.28.0">v1.28.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.27.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.27.2" rel="nofollow" title="v1.27.2">v1.27.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.27.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.27.1" rel="nofollow" title="v1.27.1">v1.27.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.27.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.27.0" rel="nofollow" title="v1.27.0">v1.27.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.26.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.26.0" rel="nofollow" title="v1.26.0">v1.26.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.25.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.25.0" rel="nofollow" title="v1.25.0">v1.25.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.24.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.24.1" rel="nofollow" title="v1.24.1">v1.24.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.24.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.24.0" rel="nofollow" title="v1.24.0">v1.24.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.23.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.23.0" rel="nofollow" title="v1.23.0">v1.23.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.22.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.22.1" rel="nofollow" title="v1.22.1">v1.22.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.22.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.22.0" rel="nofollow" title="v1.22.0">v1.22.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.21.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.21.0" rel="nofollow" title="v1.21.0">v1.21.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.20.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.3" rel="nofollow" title="v1.20.3">v1.20.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.20.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.2" rel="nofollow" title="v1.20.2">v1.20.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.20.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.1" rel="nofollow" title="v1.20.1">v1.20.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.20.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.0" rel="nofollow" title="v1.20.0">v1.20.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.19.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.19.1" rel="nofollow" title="v1.19.1">v1.19.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.19.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.19.0" rel="nofollow" title="v1.19.0">v1.19.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.18.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.18.0" rel="nofollow" title="v1.18.0">v1.18.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.17.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.17.1" rel="nofollow" title="v1.17.1">v1.17.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.17.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.17.0" rel="nofollow" title="v1.17.0">v1.17.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.16.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.16.0" rel="nofollow" title="v1.16.0">v1.16.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.15.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.15.1" rel="nofollow" title="v1.15.1">v1.15.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.15.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.15.0" rel="nofollow" title="v1.15.0">v1.15.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.14.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.14.2" rel="nofollow" title="v1.14.2">v1.14.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.14.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.14.1" rel="nofollow" title="v1.14.1">v1.14.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.14.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.14.0" rel="nofollow" title="v1.14.0">v1.14.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.13.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.4" rel="nofollow" title="v1.13.4">v1.13.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.13.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.3" rel="nofollow" title="v1.13.3">v1.13.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.13.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.2" rel="nofollow" title="v1.13.2">v1.13.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.13.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.1" rel="nofollow" title="v1.13.1">v1.13.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.13.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.0" rel="nofollow" title="v1.13.0">v1.13.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.12.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.12.0" rel="nofollow" title="v1.12.0">v1.12.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.11.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.11.1" rel="nofollow" title="v1.11.1">v1.11.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.11.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.11.0" rel="nofollow" title="v1.11.0">v1.11.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.10.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.10.1" rel="nofollow" title="v1.10.1">v1.10.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.10.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.10.0" rel="nofollow" title="v1.10.0">v1.10.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.9.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.9.1" rel="nofollow" title="v1.9.1">v1.9.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.9.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.9.0" rel="nofollow" title="v1.9.0">v1.9.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.5" rel="nofollow" title="v1.8.5">v1.8.5</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.4" rel="nofollow" title="v1.8.4">v1.8.4</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.3" rel="nofollow" title="v1.8.3">v1.8.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.2" rel="nofollow" title="v1.8.2">v1.8.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.1" rel="nofollow" title="v1.8.1">v1.8.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.8.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.0" rel="nofollow" title="v1.8.0">v1.8.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.7.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.7.0" rel="nofollow" title="v1.7.0">v1.7.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.6.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.6.1" rel="nofollow" title="v1.6.1">v1.6.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.6.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.6.0" rel="nofollow" title="v1.6.0">v1.6.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.5.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.3" rel="nofollow" title="v1.5.3">v1.5.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.5.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.2" rel="nofollow" title="v1.5.2">v1.5.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.5.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.1" rel="nofollow" title="v1.5.1">v1.5.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.5.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.0" rel="nofollow" title="v1.5.0">v1.5.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.4.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.4.0" rel="nofollow" title="v1.4.0">v1.4.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.3.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.3.0" rel="nofollow" title="v1.3.0">v1.3.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.2.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.2.1" rel="nofollow" title="v1.2.1">v1.2.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.2.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.2.0" rel="nofollow" title="v1.2.0">v1.2.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.1.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.0" rel="nofollow" title="v1.1.0">v1.1.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.0.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.3" rel="nofollow" title="v1.0.3">v1.0.3</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.0.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.2" rel="nofollow" title="v1.0.2">v1.0.2</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.0.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.1" rel="nofollow" title="v1.0.1">v1.0.1</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/v1.0.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0" rel="nofollow" title="v1.0.0">v1.0.0</a>

              </div> <!-- /.select-menu-item -->
              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/mbostock/d3/blob/semver/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="semver" rel="nofollow" title="semver">semver</a>

              </div> <!-- /.select-menu-item -->

            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/mbostock/d3" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/mbostock/d3/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/mbostock/d3/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">12</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:192ab0683784efd0e462a683705f7c15 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:192ab0683784efd0e462a683705f7c15 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">d3</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3/tree/master/lib" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">lib</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3/tree/master/lib/colorbrewer" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">colorbrewer</span></a></span> / <strong class="final-path">colorbrewer.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="lib/colorbrewer/colorbrewer.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/mbostock/d3/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/mbostock" rel="author">mbostock</a></span>
    <time class="js-relative-date" datetime="2010-10-04T20:41:18-07:00" title="2010-10-04 20:41:18">October 04, 2010</time>
    <div class="commit-title">
        <a href="/mbostock/d3/commit/5348d911938a0d1fdf43d7c86befbd908e431204" class="message">Add lib/colorbrewer.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mbostock">mbostock</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/mbostock/d3/blob/183060d40ffce8a8bd233feeedd80f84d4707642/lib/colorbrewer/colorbrewer.js" data-title="d3/lib/colorbrewer/colorbrewer.js at master · mbostock/d3 · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>33 lines (32 sloc)</span>
                <span>25.226 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/mbostock/d3/raw/master/lib/colorbrewer/colorbrewer.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/mbostock/d3/blame/master/lib/colorbrewer/colorbrewer.js" class="button minibutton ">Blame</a>
                  <a href="/mbostock/d3/commits/master/lib/colorbrewer/colorbrewer.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * This product includes color specifications and designs developed by Cynthia</span></div><div class='line' id='LC3'><span class="cm"> * Brewer (http://colorbrewer.org/).</span></div><div class='line' id='LC4'><span class="cm"> */</span></div><div class='line' id='LC5'><span class="kd">var</span> <span class="nx">colorbrewer</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC6'><span class="nx">YlGn</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,252,185)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(173,221,142)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(49,163,84)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(194,230,153)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(120,198,121)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,132,67)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(194,230,153)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(120,198,121)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(49,163,84)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,104,55)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,240,163)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(173,221,142)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(120,198,121)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(49,163,84)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,104,55)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,240,163)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(173,221,142)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(120,198,121)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,171,93)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,132,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,90,50)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,229)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,252,185)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,240,163)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(173,221,142)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(120,198,121)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,171,93)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,132,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,90,50)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,229)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,252,185)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,240,163)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(173,221,142)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(120,198,121)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,171,93)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,132,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,104,55)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,69,41)&quot;</span><span class="p">]},</span></div><div class='line' id='LC7'><span class="nx">YlGnBu</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,177)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,205,187)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(44,127,184)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(161,218,180)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,182,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(34,94,168)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(161,218,180)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,182,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(44,127,184)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(37,52,148)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,233,180)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,205,187)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,182,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(44,127,184)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(37,52,148)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,233,180)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,205,187)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,182,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(29,145,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(34,94,168)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(12,44,132)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(237,248,177)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,233,180)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,205,187)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,182,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(29,145,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(34,94,168)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(12,44,132)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(237,248,177)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,233,180)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,205,187)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,182,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(29,145,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(34,94,168)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(37,52,148)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,29,88)&quot;</span><span class="p">]},</span></div><div class='line' id='LC8'><span class="nx">GnBu</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(224,243,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(168,221,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(67,162,202)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(240,249,232)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(186,228,188)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(123,204,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(43,140,190)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(240,249,232)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(186,228,188)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(123,204,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(67,162,202)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,104,172)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(240,249,232)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,235,197)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(168,221,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(123,204,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(67,162,202)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,104,172)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(240,249,232)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,235,197)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(168,221,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(123,204,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(78,179,211)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(43,140,190)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,88,158)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,252,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,243,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,235,197)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(168,221,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(123,204,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(78,179,211)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(43,140,190)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,88,158)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,252,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,243,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,235,197)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(168,221,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(123,204,196)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(78,179,211)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(43,140,190)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,104,172)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,64,129)&quot;</span><span class="p">]},</span></div><div class='line' id='LC9'><span class="nx">BuGn</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(229,245,249)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,216,201)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(44,162,95)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,226,226)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,194,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,139,69)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,226,226)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,194,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(44,162,95)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,109,44)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,236,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,216,201)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,194,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(44,162,95)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,109,44)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,236,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,216,201)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,194,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,174,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,139,69)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,88,36)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,252,253)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(229,245,249)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,236,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,216,201)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,194,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,174,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,139,69)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,88,36)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,252,253)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(229,245,249)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,236,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,216,201)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,194,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,174,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,139,69)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,109,44)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,68,27)&quot;</span><span class="p">]},</span></div><div class='line' id='LC10'><span class="nx">PuBuGn</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(236,226,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,189,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(28,144,153)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(246,239,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,201,225)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(103,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(2,129,138)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(246,239,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,201,225)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(103,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(28,144,153)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,108,89)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(246,239,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(208,209,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,189,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(103,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(28,144,153)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,108,89)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(246,239,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(208,209,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,189,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(103,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(54,144,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(2,129,138)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,100,80)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,247,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(236,226,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(208,209,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,189,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(103,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(54,144,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(2,129,138)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,100,80)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,247,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(236,226,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(208,209,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,189,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(103,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(54,144,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(2,129,138)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,108,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,70,54)&quot;</span><span class="p">]},</span></div><div class='line' id='LC11'><span class="nx">PuBu</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(236,231,242)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,189,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(43,140,190)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(241,238,246)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,201,225)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(5,112,176)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(241,238,246)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,201,225)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(43,140,190)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(4,90,141)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(241,238,246)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(208,209,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,189,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(43,140,190)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(4,90,141)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(241,238,246)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(208,209,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,189,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(54,144,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(5,112,176)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(3,78,123)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,247,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(236,231,242)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(208,209,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,189,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(54,144,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(5,112,176)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(3,78,123)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,247,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(236,231,242)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(208,209,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,189,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(54,144,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(5,112,176)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(4,90,141)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(2,56,88)&quot;</span><span class="p">]},</span></div><div class='line' id='LC12'><span class="nx">BuPu</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(224,236,244)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,188,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(136,86,167)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(179,205,227)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,150,198)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(136,65,157)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(179,205,227)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,150,198)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(136,86,167)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(129,15,124)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(191,211,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,188,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,150,198)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(136,86,167)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(129,15,124)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,251)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(191,211,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,188,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,150,198)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,107,177)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(136,65,157)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(110,1,107)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,252,253)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,236,244)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(191,211,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,188,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,150,198)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,107,177)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(136,65,157)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(110,1,107)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,252,253)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,236,244)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(191,211,230)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,188,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,150,198)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,107,177)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(136,65,157)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(129,15,124)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,0,75)&quot;</span><span class="p">]},</span></div><div class='line' id='LC13'><span class="nx">RdPu</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(253,224,221)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(250,159,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(197,27,138)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,235,226)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(251,180,185)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,104,161)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(174,1,126)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,235,226)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(251,180,185)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,104,161)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(197,27,138)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(122,1,119)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,235,226)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,197,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(250,159,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,104,161)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(197,27,138)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(122,1,119)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,235,226)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,197,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(250,159,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,104,161)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(221,52,151)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(174,1,126)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(122,1,119)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,247,243)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,224,221)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,197,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(250,159,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,104,161)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(221,52,151)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(174,1,126)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(122,1,119)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,247,243)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,224,221)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,197,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(250,159,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,104,161)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(221,52,151)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(174,1,126)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(122,1,119)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(73,0,106)&quot;</span><span class="p">]},</span></div><div class='line' id='LC14'><span class="nx">PuRd</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(231,225,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(201,148,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(221,28,119)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(241,238,246)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(215,181,216)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,101,176)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(206,18,86)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(241,238,246)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(215,181,216)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,101,176)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(221,28,119)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(152,0,67)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(241,238,246)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(212,185,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(201,148,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,101,176)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(221,28,119)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(152,0,67)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(241,238,246)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(212,185,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(201,148,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,101,176)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(231,41,138)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(206,18,86)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(145,0,63)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,244,249)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(231,225,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(212,185,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(201,148,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,101,176)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(231,41,138)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(206,18,86)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(145,0,63)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,244,249)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(231,225,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(212,185,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(201,148,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,101,176)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(231,41,138)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(206,18,86)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(152,0,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(103,0,31)&quot;</span><span class="p">]},</span></div><div class='line' id='LC15'><span class="nx">OrRd</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,232,200)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,187,132)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(227,74,51)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,240,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,204,138)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(215,48,31)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,240,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,204,138)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(227,74,51)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(179,0,0)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,240,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,212,158)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,187,132)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(227,74,51)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(179,0,0)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,240,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,212,158)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,187,132)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,101,72)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(215,48,31)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,0,0)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,247,236)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,232,200)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,212,158)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,187,132)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,101,72)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(215,48,31)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,0,0)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,247,236)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,232,200)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,212,158)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,187,132)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,101,72)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(215,48,31)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(179,0,0)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,0,0)&quot;</span><span class="p">]},</span></div><div class='line' id='LC16'><span class="nx">YlOrRd</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,237,160)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,178,76)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(240,59,32)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,178)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,204,92)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(227,26,28)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,178)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,204,92)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(240,59,32)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,0,38)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,178)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,217,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,178,76)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(240,59,32)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,0,38)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,178)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,217,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,178,76)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,78,42)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(227,26,28)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(177,0,38)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,237,160)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,217,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,178,76)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,78,42)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(227,26,28)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(177,0,38)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,237,160)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,217,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,178,76)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,78,42)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(227,26,28)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,0,38)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,0,38)&quot;</span><span class="p">]},</span></div><div class='line' id='LC17'><span class="nx">YlOrBr</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,247,188)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,196,79)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,95,14)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,212)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,217,142)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,153,41)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,76,2)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,212)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,217,142)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,153,41)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,95,14)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,52,4)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,212)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,227,145)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,196,79)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,153,41)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,95,14)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,52,4)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,212)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,227,145)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,196,79)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,153,41)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(236,112,20)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,76,2)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,45,4)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,229)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,247,188)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,227,145)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,196,79)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,153,41)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(236,112,20)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,76,2)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,45,4)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,229)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,247,188)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,227,145)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,196,79)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,153,41)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(236,112,20)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,76,2)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,52,4)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,37,6)&quot;</span><span class="p">]},</span></div><div class='line' id='LC18'><span class="nx">Purples</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(239,237,245)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(188,189,220)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(117,107,177)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(242,240,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(203,201,226)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,154,200)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(106,81,163)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(242,240,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(203,201,226)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,154,200)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(117,107,177)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(84,39,143)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(242,240,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(218,218,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(188,189,220)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,154,200)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(117,107,177)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(84,39,143)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(242,240,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(218,218,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(188,189,220)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,154,200)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,125,186)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(106,81,163)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(74,20,134)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(252,251,253)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,237,245)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(218,218,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(188,189,220)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,154,200)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,125,186)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(106,81,163)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(74,20,134)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(252,251,253)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,237,245)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(218,218,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(188,189,220)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,154,200)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,125,186)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(106,81,163)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(84,39,143)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(63,0,125)&quot;</span><span class="p">]},</span></div><div class='line' id='LC19'><span class="nx">Blues</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(222,235,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,202,225)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(49,130,189)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(239,243,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,215,231)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(107,174,214)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(33,113,181)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(239,243,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,215,231)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(107,174,214)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(49,130,189)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,81,156)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(239,243,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(198,219,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,202,225)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(107,174,214)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(49,130,189)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,81,156)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(239,243,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(198,219,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,202,225)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(107,174,214)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(66,146,198)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(33,113,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,69,148)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,251,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(222,235,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(198,219,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,202,225)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(107,174,214)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(66,146,198)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(33,113,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,69,148)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,251,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(222,235,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(198,219,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(158,202,225)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(107,174,214)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(66,146,198)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(33,113,181)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,81,156)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(8,48,107)&quot;</span><span class="p">]},</span></div><div class='line' id='LC20'><span class="nx">Greens</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(229,245,224)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(161,217,155)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(49,163,84)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,233)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(186,228,179)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,196,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,139,69)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,233)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(186,228,179)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,196,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(49,163,84)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,109,44)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,233)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,233,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(161,217,155)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,196,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(49,163,84)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,109,44)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(237,248,233)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,233,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(161,217,155)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,196,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,171,93)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,139,69)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,90,50)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,252,245)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(229,245,224)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,233,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(161,217,155)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,196,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,171,93)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,139,69)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,90,50)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,252,245)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(229,245,224)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,233,192)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(161,217,155)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,196,118)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(65,171,93)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(35,139,69)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,109,44)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,68,27)&quot;</span><span class="p">]},</span></div><div class='line' id='LC21'><span class="nx">Oranges</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,230,206)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,107)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,85,13)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,237,222)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,190,133)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,71,1)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,237,222)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,190,133)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,85,13)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,54,3)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,237,222)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,208,162)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,107)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,85,13)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,54,3)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,237,222)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,208,162)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,107)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(241,105,19)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,72,1)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,45,4)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,245,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,230,206)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,208,162)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,107)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(241,105,19)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,72,1)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,45,4)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,245,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,230,206)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,208,162)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,107)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,141,60)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(241,105,19)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,72,1)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,54,3)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,39,4)&quot;</span><span class="p">]},</span></div><div class='line' id='LC22'><span class="nx">Reds</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,224,210)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,146,114)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(222,45,38)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,229,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,174,145)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(251,106,74)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(203,24,29)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,229,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,174,145)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(251,106,74)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(222,45,38)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(165,15,21)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,229,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,187,161)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,146,114)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(251,106,74)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(222,45,38)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(165,15,21)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(254,229,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,187,161)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,146,114)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(251,106,74)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,59,44)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(203,24,29)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,0,13)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,245,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,210)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,187,161)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,146,114)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(251,106,74)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,59,44)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(203,24,29)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,0,13)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,245,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,210)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,187,161)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,146,114)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(251,106,74)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,59,44)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(203,24,29)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(165,15,21)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(103,0,13)&quot;</span><span class="p">]},</span></div><div class='line' id='LC23'><span class="nx">Greys</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(240,240,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,189,189)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(99,99,99)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,204,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(150,150,150)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(82,82,82)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(204,204,204)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(150,150,150)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(99,99,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(37,37,37)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,217,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,189,189)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(150,150,150)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(99,99,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(37,37,37)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,217,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,189,189)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(150,150,150)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(115,115,115)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(82,82,82)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(37,37,37)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(240,240,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,217,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,189,189)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(150,150,150)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(115,115,115)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(82,82,82)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(37,37,37)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(255,255,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(240,240,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,217,217)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(189,189,189)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(150,150,150)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(115,115,115)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(82,82,82)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(37,37,37)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,0,0)&quot;</span><span class="p">]},</span></div><div class='line' id='LC24'><span class="nx">PuOr</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(241,163,64)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,142,195)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(230,97,1)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,184,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,171,210)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(94,60,153)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(230,97,1)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,184,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,171,210)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(94,60,153)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(179,88,6)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(241,163,64)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,182)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(216,218,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,142,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(84,39,136)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(179,88,6)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(241,163,64)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,182)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(216,218,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,142,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(84,39,136)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(179,88,6)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,130,20)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,184,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,182)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(216,218,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,171,210)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,115,172)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(84,39,136)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(179,88,6)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,130,20)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,184,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,182)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(216,218,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,171,210)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,115,172)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(84,39,136)&quot;</span><span class="p">],</span><span class="mi">10</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(127,59,8)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(179,88,6)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,130,20)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,184,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,182)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(216,218,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,171,210)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,115,172)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(84,39,136)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(45,0,75)&quot;</span><span class="p">],</span><span class="mi">11</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(127,59,8)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(179,88,6)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,130,20)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,184,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,182)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(216,218,235)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,171,210)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,115,172)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(84,39,136)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(45,0,75)&quot;</span><span class="p">]},</span></div><div class='line' id='LC25'><span class="nx">BrBG</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(216,179,101)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(245,245,245)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(90,180,172)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(166,97,26)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,194,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,205,193)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,133,113)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(166,97,26)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,194,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(245,245,245)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,205,193)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,133,113)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(140,81,10)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(216,179,101)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(246,232,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,234,229)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(90,180,172)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,102,94)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(140,81,10)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(216,179,101)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(246,232,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(245,245,245)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,234,229)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(90,180,172)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,102,94)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(140,81,10)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(191,129,45)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,194,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(246,232,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,234,229)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,205,193)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(53,151,143)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,102,94)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(140,81,10)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(191,129,45)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,194,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(246,232,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(245,245,245)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,234,229)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,205,193)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(53,151,143)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,102,94)&quot;</span><span class="p">],</span><span class="mi">10</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(84,48,5)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,81,10)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(191,129,45)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,194,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(246,232,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,234,229)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,205,193)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(53,151,143)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,102,94)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,60,48)&quot;</span><span class="p">],</span><span class="mi">11</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(84,48,5)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(140,81,10)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(191,129,45)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(223,194,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(246,232,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(245,245,245)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(199,234,229)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(128,205,193)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(53,151,143)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(1,102,94)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,60,48)&quot;</span><span class="p">]},</span></div><div class='line' id='LC26'><span class="nx">PRGn</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(175,141,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,191,123)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(123,50,148)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(194,165,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,219,160)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,136,55)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(123,50,148)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(194,165,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,219,160)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,136,55)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(118,42,131)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(175,141,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(231,212,232)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,240,211)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,191,123)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(27,120,55)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(118,42,131)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(175,141,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(231,212,232)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,240,211)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,191,123)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(27,120,55)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(118,42,131)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,112,171)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(194,165,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(231,212,232)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,240,211)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,219,160)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(90,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(27,120,55)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(118,42,131)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,112,171)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(194,165,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(231,212,232)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,240,211)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,219,160)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(90,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(27,120,55)&quot;</span><span class="p">],</span><span class="mi">10</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(64,0,75)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(118,42,131)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,112,171)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(194,165,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(231,212,232)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,240,211)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,219,160)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(90,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(27,120,55)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,68,27)&quot;</span><span class="p">],</span><span class="mi">11</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(64,0,75)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(118,42,131)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,112,171)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(194,165,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(231,212,232)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,240,211)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,219,160)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(90,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(27,120,55)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,68,27)&quot;</span><span class="p">]},</span></div><div class='line' id='LC27'><span class="nx">PiYG</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(233,163,201)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(161,215,106)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(208,28,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(241,182,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(184,225,134)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,172,38)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(208,28,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(241,182,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(184,225,134)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,172,38)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(197,27,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(233,163,201)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,224,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,208)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(161,215,106)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,146,33)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(197,27,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(233,163,201)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,224,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,208)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(161,215,106)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,146,33)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(197,27,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(222,119,174)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(241,182,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,224,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,208)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(184,225,134)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,188,65)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,146,33)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(197,27,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(222,119,174)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(241,182,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,224,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,208)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(184,225,134)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,188,65)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,146,33)&quot;</span><span class="p">],</span><span class="mi">10</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(142,1,82)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(197,27,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(222,119,174)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(241,182,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,224,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,208)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(184,225,134)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,188,65)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,146,33)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(39,100,25)&quot;</span><span class="p">],</span><span class="mi">11</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(142,1,82)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(197,27,125)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(222,119,174)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(241,182,218)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,224,239)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,208)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(184,225,134)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(127,188,65)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,146,33)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(39,100,25)&quot;</span><span class="p">]},</span></div><div class='line' id='LC28'><span class="nx">RdBu</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(239,138,98)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(103,169,207)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(202,0,32)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(146,197,222)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(5,113,176)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(202,0,32)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(146,197,222)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(5,113,176)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,138,98)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(209,229,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(103,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(33,102,172)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,138,98)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(209,229,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(103,169,207)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(33,102,172)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(214,96,77)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(209,229,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(146,197,222)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(67,147,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(33,102,172)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(214,96,77)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(209,229,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(146,197,222)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(67,147,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(33,102,172)&quot;</span><span class="p">],</span><span class="mi">10</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(103,0,31)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(214,96,77)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(209,229,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(146,197,222)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(67,147,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(33,102,172)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(5,48,97)&quot;</span><span class="p">],</span><span class="mi">11</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(103,0,31)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(214,96,77)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(247,247,247)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(209,229,240)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(146,197,222)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(67,147,195)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(33,102,172)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(5,48,97)&quot;</span><span class="p">]},</span></div><div class='line' id='LC29'><span class="nx">RdGy</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(239,138,98)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,153,153)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(202,0,32)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(186,186,186)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(64,64,64)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(202,0,32)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(186,186,186)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(64,64,64)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,138,98)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,224,224)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,153,153)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,77,77)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(239,138,98)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,224,224)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,153,153)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,77,77)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(214,96,77)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,224,224)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(186,186,186)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(135,135,135)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,77,77)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(214,96,77)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,224,224)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(186,186,186)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(135,135,135)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,77,77)&quot;</span><span class="p">],</span><span class="mi">10</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(103,0,31)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(214,96,77)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,224,224)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(186,186,186)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(135,135,135)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,77,77)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(26,26,26)&quot;</span><span class="p">],</span><span class="mi">11</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(103,0,31)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(178,24,43)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(214,96,77)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,165,130)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,219,199)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,255)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,224,224)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(186,186,186)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(135,135,135)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(77,77,77)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(26,26,26)&quot;</span><span class="p">]},</span></div><div class='line' id='LC30'><span class="nx">RdYlBu</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(145,191,219)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,25,28)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,217,233)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(44,123,182)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,25,28)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,217,233)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(44,123,182)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,144)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,243,248)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(145,191,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(69,117,180)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,144)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,243,248)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(145,191,219)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(69,117,180)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,144)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,243,248)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,217,233)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,173,209)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(69,117,180)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,144)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,243,248)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,217,233)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,173,209)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(69,117,180)&quot;</span><span class="p">],</span><span class="mi">10</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(165,0,38)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,144)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,243,248)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,217,233)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,173,209)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(69,117,180)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(49,54,149)&quot;</span><span class="p">],</span><span class="mi">11</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(165,0,38)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,144)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(224,243,248)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,217,233)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(116,173,209)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(69,117,180)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(49,54,149)&quot;</span><span class="p">]},</span></div><div class='line' id='LC31'><span class="nx">Spectral</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,213,148)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,25,28)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,221,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(43,131,186)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,25,28)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,221,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(43,131,186)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(213,62,79)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,152)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,213,148)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(50,136,189)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(213,62,79)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,152)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(153,213,148)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(50,136,189)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(213,62,79)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,152)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,221,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,194,165)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(50,136,189)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(213,62,79)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,152)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,221,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,194,165)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(50,136,189)&quot;</span><span class="p">],</span><span class="mi">10</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(158,1,66)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(213,62,79)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,152)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,221,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,194,165)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(50,136,189)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(94,79,162)&quot;</span><span class="p">],</span><span class="mi">11</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(158,1,66)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(213,62,79)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(230,245,152)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(171,221,164)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,194,165)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(50,136,189)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(94,79,162)&quot;</span><span class="p">]},</span></div><div class='line' id='LC32'><span class="nx">RdYlGn</span><span class="o">:</span><span class="p">{</span><span class="mi">3</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(145,207,96)&quot;</span><span class="p">],</span><span class="mi">4</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,25,28)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,217,106)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(26,150,65)&quot;</span><span class="p">],</span><span class="mi">5</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,25,28)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,217,106)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(26,150,65)&quot;</span><span class="p">],</span><span class="mi">6</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,239,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(145,207,96)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(26,152,80)&quot;</span><span class="p">],</span><span class="mi">7</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(252,141,89)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,239,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(145,207,96)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(26,152,80)&quot;</span><span class="p">],</span><span class="mi">8</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,239,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,217,106)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,189,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(26,152,80)&quot;</span><span class="p">],</span><span class="mi">9</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,239,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,217,106)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,189,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(26,152,80)&quot;</span><span class="p">],</span><span class="mi">10</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(165,0,38)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,239,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,217,106)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,189,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(26,152,80)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,104,55)&quot;</span><span class="p">],</span><span class="mi">11</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;rgb(165,0,38)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(215,48,39)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(244,109,67)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(253,174,97)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(254,224,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(255,255,191)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(217,239,139)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(166,217,106)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(102,189,99)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(26,152,80)&quot;</span><span class="p">,</span><span class="s2">&quot;rgb(0,104,55)&quot;</span><span class="p">]}};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543525" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.09056s from fe17.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/mbostock/d3/suggestions/commit/183060d40ffce8a8bd233feeedd80f84d4707642">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.09111' data-host='fe17'></span>
    
  </body>
</html>

