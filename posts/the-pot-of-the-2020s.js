/* ============================================================
   POST — body HTML only.

   Title, date, and slug live in CV.posts (data.js); this file
   just provides the body. The slug here MUST match the key in
   CV.posts.

   Footnotes:
     - In the article body, mark a ref with:
         <a href="#fn-N" id="fnref-N" class="fn-ref" data-fn="N">N</a>
     - In the <section class="footnotes"> at the bottom, give the
       matching note the id "fn-N":
         <li id="fn-N">…the note…</li>
     - The "rewind" icon (jump back to the ref) is injected
       automatically by the renderer — don't add it by hand.
   ============================================================ */

window.POSTS = window.POSTS || {};
window.POSTS['the-pot-of-the-2020s'] = {
  bodyHTML: `
<article class="post-article">
  <p>It&rsquo;s a typical Tuesday. I&rsquo;m at the gym working on shoulders.</p>
  <p>My stopwatch is on, making sure I only get 90 seconds of rest in between sets.</p>
  <p>After a couple of reps of the shoulder press (I probably could&rsquo;ve fit in 2&ndash;3 more reps if I was <em>really</em> pushing myself), I reset my stopwatch.</p>

  <p>The 90 seconds comes faster than 90 seconds.</p>
  <p>I do another set.</p>
  <p>I reset my stopwatch.</p>

  <p><em>&ldquo;James?&rdquo;</em></p>

  <p>I look over to my left.</p>
  <p>It&rsquo;s a little muffled through the noise cancellation and music of my AirPods, but a silver-haired man is smiling at me. He looks about 64 and towers over me. He must be at least 6&prime;3&Prime;.</p>
  <p>It takes a second, but it&rsquo;s a familiar face. He&rsquo;s the father of an old high school friend. We were on the tennis team together.</p>
  <p>But that&rsquo;s already four years past.</p>

  <p>Anticipating a quick chat, I only take my left AirPod out.</p>
  <p>I ask him how his son is doing, he asks me how I&rsquo;m doing.</p>
  <p>I tell him I&rsquo;m going back to school for a master&rsquo;s in computer science. For the sake of small talk, I mention it&rsquo;s hard to keep up with CS these days because AI<a href="#fn-1" id="fnref-1" class="fn-ref" data-fn="1">1</a> is changing the field so quickly.</p>

  <p>Suddenly, our casual gym conversation is no longer a casual gym conversation.</p>
  <p>He tells me his thoughts on AI and how he vows to never use it in his work (he&rsquo;s a humanities professor). He tells me that he tells his children to never use AI for any of their work either.</p>
  <p>I unintentionally unclogged a bathtub full of his thoughts and I had become the representative for the &ldquo;young&rdquo; minds he could pour his experienced wisdom into.</p>
  <p>With a dose of hubris, he tells me that he lived through the (19)70s without ever smoking pot. In the same way, he wants his children to be able to live through the (20)20s and proudly tell others that they&rsquo;ve never used AI<a href="#fn-2" id="fnref-2" class="fn-ref" data-fn="2">2</a>.</p>

  <p>That perspective was interesting to me.</p>
  <p>I didn&rsquo;t tell him of course, but I use AI tools every day.</p>
  <p>As a student in computer science, the general trend seems to be that we&rsquo;ve accepted AI as a productivity tool. I&rsquo;m definitely cautious of offloading certain pivotal parts of schooling (e.g., critical thinking) to AI tools, but it seems unwise to me to have such an adverse stance against it.</p>

  <p>But perhaps to him, I&rsquo;m smoking the pot of the (20)20s.</p>
  <p>Maybe I&rsquo;m destroying the functional and structural networks in my brain. But it sure does feel good to smoke it<a href="#fn-3" id="fnref-3" class="fn-ref" data-fn="3">3</a>.</p>
  <p>And whether you choose to smoke it or not, &ldquo;AI&rdquo; is at the forefront of a cultural and technological shift. Only more time, experience, and research will let us know the harms and benefits of &ldquo;smoking&rdquo; it.</p>

  <hr />

  <p>I look back down at my stopwatch.</p>
  <p>23 minutes and counting.</p>
  <p>I quickly go back to my shoulder presses.</p>
</article>

<section class="footnotes">
  <h3>Notes</h3>
  <ol>
    <li id="fn-1">I usually don&rsquo;t like to use the word &ldquo;AI&rdquo; because it seems to have become a meaningless buzzword. It&rsquo;s one of those things that become overused to the point of devaluation. Everything has &ldquo;AI&rdquo; now. I went to the store the other day and saw a dishwasher being advertised as an &ldquo;AI&rdquo; dishwasher.</li>
    <li id="fn-2">Though now it seems more difficult to <em>not</em> use AI. Perhaps he means &ldquo;not using&rdquo; AI in the sense of preserving original thought and expression. Which then poses the question: what is <em>original</em> thought? (but I digress).</li>
    <li id="fn-3">In case this blog steers you to adverse conclusions: <strong>No, I do not smoke pot</strong> nor do I endorse doing so.</li>
  </ol>
</section>
`,
};
