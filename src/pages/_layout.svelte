<script></script>

<header id="siteHeader">
    <div id="siteHeader__container">
        <a href="/" id="siteHeader__home">
            <svg id="siteHeader__homeIcon"><use xlink:href="/icons.svg#reddit" /></svg>
            Svelte for Reddit
        </a>
        <div id="siteHeader__communities">
            <a href="/" class="siteHeader__community">
                <svg class="siteHeader__communityIcon"><use xlink:href="/icons.svg#home" /></svg>
                Home
            </a>
            <a href="/r/popular" class="siteHeader__community">
                <svg class="siteHeader__communityIcon"><use xlink:href="/icons.svg#chart-line-variant" /></svg>
                Popular
            </a>
            <a href="/r/all" class="siteHeader__community">
                <svg class="siteHeader__communityIcon"><use xlink:href="/icons.svg#bar-chart" /></svg>
                All
            </a>
        </div>
    </div>
</header>

<slot></slot>

<style>
#siteHeader {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    color: #1c1c1c;
}
#siteHeader__container {
    display: flex;
    border-bottom: 1px solid #edeff1;
    background: #fff;
    box-sizing: border-box;
    padding: 0 2rem;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    height: 4.9rem;
}
#siteHeader__home {
    background-size: 3.2rem 3.2rem;
    fill: #ff4500;
    display: flex;
    align-items: center;
    font-weight: 500;
}
#siteHeader__homeIcon {
    fill: #ff4500;
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 1rem;
}
#siteHeader__communities {
    font-size: 1.4rem;
}
.siteHeader__community {
    display: inline-block;
    padding: 0.8rem 1.6rem;
    border-radius: 1.6rem;
}
.siteHeader__community:hover {
    background-color: #f6f7f8;
}
.siteHeader__communityIcon {
    width: 1.8rem;
    height: 1.8rem;
    margin: -0.2rem 0.4rem 0 0;
    fill: #0079d3;
    vertical-align: middle;
}
</style>