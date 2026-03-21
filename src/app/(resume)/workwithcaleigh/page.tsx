import Image from 'next/image';
import { MailtoTag } from './MailtoTag';
import { DesktopDetailsOpen } from './DesktopDetailsOpen';
import './resume.css';

export default function WorkWithCaleigh() {
  return (
    <div className="resume-page">
      {/* HEADER */}
      <header className="r-header">
        <Image
          src="/images/caleigh-resume-header.jpeg"
          alt="Caleigh Haber-Takayama"
          fill
          priority
          className="r-header-bg"
        />
        <div className="r-header-gradient" />
        <div className="r-header-inner">
          <h1 className="r-name">
            Caleigh
            <br />
            Haber-Takayama
          </h1>
          <p className="r-title-line">
            Patient Advocate &nbsp;&middot;&nbsp; Founder
            &nbsp;&middot;&nbsp; Consultant &nbsp;&middot;&nbsp; Public Speaker
            &nbsp;&middot;&nbsp; Community &amp; Brand Strategist
          </p>
          <div className="r-contact-row">
            <span className="r-ci">
              <span className="r-cdot" />
              <a href="https://fight2breathe.org">fight2breathe.org</a>
            </span>
            <span className="r-ci">
              <span className="r-cdot" />
              <a href="https://instagram.com/fight2breathe">@Fight2Breathe</a>
            </span>
            <span className="r-ci">
              <span className="r-cdot" />
              <a href="mailto:caleigh@fight2breathe.org">
                caleigh@fight2breathe.org
              </a>
            </span>
          </div>
          <div className="r-hstats">
            <div className="r-hstat">
              <div className="r-hstat-n">71.9k</div>
              <div className="r-hstat-l">Instagram</div>
            </div>
            <div className="r-hstat">
              <div className="r-hstat-n">30+</div>
              <div className="r-hstat-l">Countries reached</div>
            </div>
            <div className="r-hstat">
              <div className="r-hstat-n">10+</div>
              <div className="r-hstat-l">Years advocating</div>
            </div>
          </div>
          <div className="r-health-tags">
            <span className="r-health-tag">Cystic Fibrosis</span>
            <span className="r-health-tag">Rare Disease</span>
            <span className="r-health-tag">Diabetes</span>
            <span className="r-health-tag">2&times; Lung Transplant</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="r-body">
        {/* SUMMARY */}
        <div className="r-summary">
          <p>
            Patient advocate and founder with 10+ years of experience
            translating lived experience with chronic illness into community,
            content, and systems-level impact. Founder of Fight2Breathe, a
            global platform reaching 71,900+ followers across 30+ countries.
            Currently lead Community and Brand Strategy at pRxTrialPort, helping
            bridge the gap between clinical trials and the rare disease
            communities they aim to serve.
          </p>
          <div className="r-tags">
            <MailtoTag
              label="Brand Partnerships"
              subject="Brand Partnership Inquiry – Fight2Breathe"
              body={`Hi Caleigh,

I'm reaching out regarding a potential brand partnership with Fight2Breathe.

Organization/Brand:
Partnership Type:
Timeline:
Budget Range:

Brief Description:


Thank you,
`}
            />
            <MailtoTag
              label="Speaking Engagement"
              subject="Speaking Engagement Inquiry – Fight2Breathe"
              body={`Hi Caleigh,

I'm reaching out regarding a potential speaking engagement.

Organization/Event:
Event Date:
Format (keynote, panel, fireside chat, virtual, etc.):
Audience:
Topic/Theme:

Additional Details:


Thank you,
`}
            />
            <MailtoTag
              label="Patient Consulting"
              subject="Patient Consulting Inquiry – Fight2Breathe"
              body={`Hi Caleigh,

I'm reaching out regarding a patient consulting opportunity.

Organization:
Project/Scope:
Timeline:
Area of Focus (clinical trials, patient engagement, rare disease strategy, etc.):

Additional Details:


Thank you,
`}
            />
          </div>
        </div>

        {/* GRID */}
        <div className="r-grid">
          {/* MAIN COLUMN */}
          <div className="r-main">
            {/* EXPERIENCE */}
            <div className="r-sec">
              <div className="r-sec-lbl">Experience</div>

              <details className="r-entry">
                <summary>
                  <div className="r-eh">
                    <span className="r-er">
                      Founder &amp; CEO — Fight2Breathe
                    </span>
                    <span className="r-ed">2014 – Present</span>
                  </div>
                  <div className="r-eo">
                    <em>Advocacy Platform &amp; Community</em> | 2014 – Present
                  </div>
                </summary>
                <ul className="r-eb">
                  <li>
                    Built and scaled a multi-platform global community to
                    71,900+ followers across 30+ countries, driven organically
                    through lived experience with cystic fibrosis and lung
                    transplantation
                  </li>
                  <li>
                    Produced and hosted <em>Our Fight to Breathe</em> podcast:
                    13 episodes, 1,000+ subscribers; conversations
                    averaging 45–60 min covering chronic illness, transplant
                    life, and patient advocacy
                  </li>
                  <li>
                    Launched Fight2Breathe.org (Next.js), integrating
                    accessibility-first design, educational resources, blog
                    content, and a merchandise storefront
                  </li>
                  <li>
                    Established and manage strategic partnerships with
                    organizations including CF News Today, American Lung
                    Association, American Hospitals Association, Philips
                    Respironics, Astrazeneca, Cystic Fibrosis Foundation, Cystic
                    Fibrosis Research Inc., Pfizer, Turnto.ai, and others
                  </li>
                  <li>
                    Served as Co-Chair of BreatheCon 2025; active contributor to
                    CFF Peer Connect, Global Genes Rare Leader Program,
                    Make-A-Wish Foundation (Wish Granter, 2019–2020), Global Genes Social
                    Media event content creator
                  </li>
                  <li>
                    DonateLife Ambassador, American Lung Association Ambassador,
                    Cystic Fibrosis Ambassador, Make A Wish Ambassador, Global
                    Genes Ambassador, Lyfebulb Ambassador
                  </li>
                  <li>
                    Recognized with the CFF Impact Grant (2024);{' '}
                    winner of <a href="/images/BreatheCon_Flowers_Poster_V2.pdf" target="_blank" rel="noopener noreferrer">BreatheCon Artist Contest</a> (2024); recipient of the CFF
                    Rose Award for Advocacy (2017)
                  </li>
                </ul>
              </details>

              <details className="r-entry">
                <summary>
                  <div className="r-eh">
                    <span className="r-er">
                      Community &amp; Brand Strategy
                    </span>
                    <span className="r-ed">Aug 2025 – Present</span>
                  </div>
                  <div className="r-eo">
                    pRxTrialPort &middot; Patient Engagement &amp; Clinical Trials
                    Platform
                  </div>
                </summary>
                <ul className="r-eb">
                  <li>
                    Lead community and brand strategy for an AI-powered clinical
                    trials platform focused on rare disease and underserved
                    populations, translating lived patient experience into
                    engagement design, content, and outreach
                  </li>
                  <li>
                    Lead editorial vision, outreach, and full production of the
                    pRxTrialPort newsletter (Brevo), delivering two monthly
                    editions highlighting patient and organization stories and
                    medical innovation; built structure, cadence, and strategic
                    direction while managing a team of three
                  </li>
                  <li>
                    Supporting the assessment and evolution of the Ambassador
                    Program, contributing to training materials, messaging
                    frameworks, community guidelines, and success metrics, with a
                    focus on equity and representation
                  </li>
                  <li>
                    Lead marketing strategy and execution in partnership with
                    agency (Hopeful), managing a team of four and overseeing ~20
                    monthly social posts across Instagram and TikTok; currently
                    driving a shift toward more authentic patient storytelling
                    and scalable, higher impact video content
                  </li>
                  <li>
                    Represented pRxTrialPort as a patient speaker at the Patient
                    Centricity and Collaboration World Congress (London, Feb
                    2026) and Worldwide Clinical Trials event, presenting on
                    access barriers, trust, and inclusive trial design;
                    co-paneled with CEO Keith Berelowitz
                  </li>
                  <li>
                    Bring patient voice into clinical trial conversations through
                    podcast contributions and collaborations, translating lived
                    experience into accessible insights for research, industry,
                    and community audiences
                  </li>
                </ul>
              </details>

              <details className="r-entry">
                <summary>
                  <div className="r-eh">
                    <span className="r-er">
                      Public Speaker &amp; Patient Advocate
                    </span>
                    <span className="r-ed">2015 – Present</span>
                  </div>
                  <div className="r-eo">
                    Cystic Fibrosis Foundation &middot; UCLA Health &middot;
                    Global Genes &middot; LifeSciences &middot; Various
                  </div>
                </summary>
                <ul className="r-eb">
                  <li>
                    Panelist, Patient Centricity &amp; Collaboration World
                    Congress (Feb 2026) — contributed to discussions on patient
                    engagement, trust, and patient-centered clinical research
                  </li>
                  <li>
                    Speaker Panelist, Worldwide Clinical Trials Global Event
                    (London, Feb 2026) — delivered patient perspective on cystic
                    fibrosis, rare disease, and inclusive clinical trial design
                  </li>
                  <li>
                    Panelist (Sept 2019) – speaking on the chronic illness
                    experience in women
                  </li>
                  <li>
                    Speaker, Global Genes (Sept 2018) — presented on love,
                    relationships, and living with chronic illness
                  </li>
                  <li>
                    Speaker, American Lung Association Awareness &amp;
                    Fundraising Event (Nov 2018)
                  </li>
                  <li>
                    Keynote Speaker, Cystic Fibrosis Foundation &ldquo;Beach,
                    Brews &amp; BBQ&rdquo; (2018, 2019) — delivered fundraising
                    speeches supporting drug development initiatives
                  </li>
                  <li>
                    Speaker, Cystic Fibrosis Foundation &ldquo;Great
                    Strides&rdquo; (2013–2016, 2018) — pre-event speaker driving
                    awareness and community engagement
                  </li>
                  <li>
                    Speaker, Make-A-Wish Foundation Events:
                    <ul className="r-eb r-eb-nested">
                      <li>
                        Diamonds &amp; Ice Gala (Aug 2019) — fundraising for
                        children with life-threatening illnesses
                      </li>
                      <li>
                        School Engagement Event — spoke to 2,500+ students to
                        drive awareness and participation in wish programs
                      </li>
                    </ul>
                  </li>
                  <li>
                    Upcoming:
                    <ul className="r-eb r-eb-nested">
                      <li>TransPerfect Life Sciences (May 2026)</li>
                    </ul>
                  </li>
                </ul>
              </details>

              <details className="r-entry">
                <summary>
                  <div className="r-eh">
                    <span className="r-er">Pastry Cook</span>
                    <span className="r-ed">2012 – 2014</span>
                  </div>
                  <div className="r-eo">
                    Three-Star Michelin Restaurant &middot; San Francisco, CA
                  </div>
                </summary>
                <ul className="r-eb">
                  <li>
                    Completed culinary degree and joined a Michelin-starred
                    kitchen; developed precision, discipline, and high-pressure
                    performance competencies
                  </li>
                </ul>
              </details>
            </div>

            {/* MEDIA & PRESS */}
            <div className="r-sec">
              <div className="r-sec-lbl">Media &amp; Press</div>
              <table className="r-media-table">
                <thead>
                  <tr>
                    <th>Outlet / Show</th>
                    <th>Type</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="https://open.spotify.com/episode/3gCEGndaBXHNAg2ewlTRpA?si=qUbB0C6sQwaN0H1JEljzLQ" target="_blank" rel="noopener noreferrer">MedTalks with Katrin</a></td>
                    <td><span className="r-media-pill r-mp-pod">Podcast</span></td>
                    <td>Mar 13, 2026</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.instagram.com/reel/DVOiU91Ch3M/" target="_blank" rel="noopener noreferrer">CF News Today</a></td>
                    <td><span className="r-media-pill r-mp-content">Content</span></td>
                    <td>Feb 26, 2026</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.instagram.com/reel/DUEUmDqj4eT/" target="_blank" rel="noopener noreferrer">CF News Today</a></td>
                    <td><span className="r-media-pill r-mp-content">Content</span></td>
                    <td>Jan 28, 2026</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.instagram.com/p/DSTT7m5Dzhg/" target="_blank" rel="noopener noreferrer">American Hospitals Assoc.</a></td>
                    <td><span className="r-media-pill r-mp-content">Content</span></td>
                    <td>Dec 31, 2025</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.instagram.com/reel/DSk7tejD2zC/" target="_blank" rel="noopener noreferrer">CF News Today</a></td>
                    <td><span className="r-media-pill r-mp-content">Content</span></td>
                    <td>Dec 4, 2025</td>
                  </tr>
                  <tr>
                    <td><a href="https://online.flipbuilder.com/jxtof/fipe/" target="_blank" rel="noopener noreferrer">CF Roundtable</a></td>
                    <td><span className="r-media-pill r-mp-pub">Publication</span></td>
                    <td>Nov 26, 2025</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.lung.org/blog/cystic-fibrosis-living-fully" target="_blank" rel="noopener noreferrer">American Lung Assoc.</a></td>
                    <td><span className="r-media-pill r-mp-pub">Feature</span></td>
                    <td>Nov 19, 2025</td>
                  </tr>
                  <tr>
                    <td><a href="https://open.spotify.com/episode/6krttjCOQrN2K53lJyUuJV?si=mhuIR3DpQh2Q85fgmEVNlA" target="_blank" rel="noopener noreferrer">Packing Up &amp; Peacing Out</a></td>
                    <td><span className="r-media-pill r-mp-pod">Podcast</span></td>
                    <td>Oct 27, 2025</td>
                  </tr>
                  <tr>
                    <td><a href="https://open.spotify.com/episode/35cFbIgv3dq4Po8uCXqKgb?si=oCp3LBsPQP-AGKLoOvDXVg" target="_blank" rel="noopener noreferrer">It&apos;s a Lung Story</a></td>
                    <td><span className="r-media-pill r-mp-pod">Podcast</span></td>
                    <td>Jul 14, 2025</td>
                  </tr>
                  <tr>
                    <td><a href="https://open.spotify.com/show/3gDKmuPjRsLctJEmoJKjgO?si=07aef93f86eb495b" target="_blank" rel="noopener noreferrer">Our Fight to Breathe</a></td>
                    <td><span className="r-media-pill r-mp-pod">Podcast</span></td>
                    <td>Jun 25, 2025</td>
                  </tr>
                  <tr>
                    <td><a href="https://podcasts.apple.com/us/podcast/our-fight-to-breathe-a-cystic-fibrosis-podcast/id1820255519" target="_blank" rel="noopener noreferrer">Our Fight to Breathe Podcast</a></td>
                    <td><span className="r-media-pill r-mp-pod">Podcast</span></td>
                    <td>2025</td>
                  </tr>
                  <tr>
                    <td><a href="https://podcasts.musixmatch.com/podcast/diabetech-diabetes-tech-news-and-management-01hg131n9rq0err2dwes3chmv4/episode/thriving-with-cystic-fibrosis-related-diabetes-caleighs-01hhycr6g04febgch86b0v3bd2" target="_blank" rel="noopener noreferrer">Diabetech Podcast</a></td>
                    <td><span className="r-media-pill r-mp-pod">Podcast</span></td>
                    <td>Jul 31, 2023</td>
                  </tr>
                  <tr>
                    <td><a href="https://globalgenes.org/raredaily/rare-leader-caleigh-haber-takayama-ceo-fight2breathe/" target="_blank" rel="noopener noreferrer">Global Genes Rare Leader</a></td>
                    <td><span className="r-media-pill r-mp-adv">Advocacy</span></td>
                    <td>May 14, 2020</td>
                  </tr>
                  <tr>
                    <td>USA Today</td>
                    <td><span className="r-media-pill r-mp-pub">Publication</span></td>
                    <td>Mar 14, 2020</td>
                  </tr>
                  <tr>
                    <td>Phillips Respironics</td>
                    <td><span className="r-media-pill r-mp-content">Content</span></td>
                    <td>Dec 10, 2019</td>
                  </tr>
                  <tr>
                    <td><a href="https://open.spotify.com/show/1hdVuf0sIIl8H50Z6FMBUm?si=c7308f697fae4e11" target="_blank" rel="noopener noreferrer">Jairek Robbins</a></td>
                    <td><span className="r-media-pill r-mp-pod">Podcast</span></td>
                    <td>Oct 15, 2018</td>
                  </tr>
                  <tr>
                    <td><a href="https://donatelifecalifornia.org/stories-of-hope/caleigh-haber/" target="_blank" rel="noopener noreferrer">Donate Life California</a></td>
                    <td><span className="r-media-pill r-mp-adv">Advocacy</span></td>
                    <td>Mar 20, 2018</td>
                  </tr>
                  <tr>
                    <td><a href="https://cysticfibrosisnewstoday.com/columns/welcome-not-your-average-rose-column-cystic-fibrosis/" target="_blank" rel="noopener noreferrer">CF News Today</a></td>
                    <td><span className="r-media-pill r-mp-pub">Publication</span></td>
                    <td>Apr 20, 2017</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.cff.org/community-posts/2016-10/unexpect-expected-what-i-learned-after-my-lung-transplant" target="_blank" rel="noopener noreferrer">CFF Blog</a></td>
                    <td><span className="r-media-pill r-mp-pub">Publication</span></td>
                    <td>Oct 6, 2016</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.cff.org/community-posts/2016-10/my-experience-waiting-and-getting-transplant-call" target="_blank" rel="noopener noreferrer">CFF Blog</a></td>
                    <td><span className="r-media-pill r-mp-pub">Publication</span></td>
                    <td>Oct 5, 2016</td>
                  </tr>
                  <tr>
                    <td><a href="https://www.cff.org/community-posts/2016-10/my-experience-waiting-and-getting-transplant-call" target="_blank" rel="noopener noreferrer">CFF Blog</a></td>
                    <td><span className="r-media-pill r-mp-pub">Publication</span></td>
                    <td>Apr 11, 2016</td>
                  </tr>
                  <tr>
                    <td><a href="https://cysticfibrosisnewstoday.com/news/artist-cf-caleigh-haber-fights-breathe-advocates-lung-donor-awareness/" target="_blank" rel="noopener noreferrer">CF News Today</a></td>
                    <td><span className="r-media-pill r-mp-adv">Advocacy</span></td>
                    <td>May 20, 2015</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="r-sidebar">
            {/* Platform */}
            <div className="r-sec">
              <div className="r-sec-lbl">Platform</div>
              <div className="r-pcard">
                <div className="r-pcard-name">Fight2Breathe</div>
                <div className="r-pcard-sub">fight2breathe.org</div>
                <div className="r-mini-grid">
                  <div className="r-mm">
                    <div className="r-mmv">71.9k</div>
                    <div className="r-mml">Instagram</div>
                  </div>
                  <div className="r-mm">
                    <div className="r-mmv">30+</div>
                    <div className="r-mml">Countries</div>
                  </div>
                  <div className="r-mm">
                    <div className="r-mmv">13</div>
                    <div className="r-mml">Podcast eps</div>
                  </div>
                  <div className="r-mm">
                    <div className="r-mmv">1k+</div>
                    <div className="r-mml">Subscribers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="r-sec">
              <div className="r-sec-lbl">Expertise</div>
              <div className="r-tg">
                <div className="r-tgl">Advocacy</div>
                <div className="r-tgs">
                  <span className="r-t r-ta">Genetic disorders</span>
                  <span className="r-t r-ta">Rare diseases</span>
                  <span className="r-t r-ta">Organ transplantation</span>
                  <span className="r-t r-ta">Cystic fibrosis</span>
                  <span className="r-t">Chronic illness</span>
                  <span className="r-t">Diabetes</span>
                  <span className="r-t">Clinical trials</span>
                  <span className="r-t">Women&apos;s health</span>
                  <span className="r-t">Health equity</span>
                  <span className="r-t">AI health technologies</span>
                </div>
              </div>
              <div className="r-tg">
                <div className="r-tgl">Content &amp; Brand</div>
                <div className="r-tgs">
                  <span className="r-t">Content strategy</span>
                  <span className="r-t">Social media</span>
                  <span className="r-t">Podcasting</span>
                  <span className="r-t">Newsletter</span>
                  <span className="r-t">Storytelling</span>
                  <span className="r-t">Medical translator</span>
                  <span className="r-t">Brand development &amp; direction</span>
                  <span className="r-t">Marketing</span>
                  <span className="r-t">Brand review &amp; design</span>
                  <span className="r-t">Fundraising</span>
                </div>
              </div>
              <div className="r-tg">
                <div className="r-tgl">Programs</div>
                <div className="r-tgs">
                  <span className="r-t">Patient education</span>
                  <span className="r-t">Ambassador programs</span>
                  <span className="r-t">Community building</span>
                  <span className="r-t">Partnerships</span>
                  <span className="r-t">Fundraising</span>
                </div>
              </div>
            </div>

            {/* Recognition */}
            <div className="r-sec">
              <div className="r-sec-lbl">Recognition</div>
              <div className="r-callout">
                <div className="r-ct">CFF Impact Grant recipient</div>
                <div className="r-cx">
                  Awarded 2024 for Fight2Breathe podcast &amp; platform impact
                </div>
              </div>
              <div className="r-callout">
                <div className="r-ct">CFF Rose Award for Advocacy</div>
                <div className="r-cx">
                  2017 — Cystic Fibrosis Foundation
                </div>
              </div>
              <div className="r-callout">
                <div className="r-ct">CFF BreatheCon Artist Contest Winner</div>
                <div className="r-cx">2024</div>
              </div>
              <div className="r-callout">
                <div className="r-ct">Global Genes Rare Leader</div>
                <div className="r-cx">Featured rare disease advocate</div>
              </div>
              <div className="r-callout">
                <div className="r-ct">Co-Chair, BreatheCon 2025</div>
                <div className="r-cx">
                  CFF national conference planning leadership
                </div>
              </div>
            </div>


            {/* Education */}
            <div className="r-sec">
              <div className="r-sec-lbl">Education</div>
              <div className="r-edu">
                <div className="r-edu-d">Culinary Arts — Pastry</div>
                <div className="r-edu-s">Culinary Institute, San Francisco</div>
                <div className="r-edu-n">
                  Placed in Michelin-starred kitchen upon graduating
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <DesktopDetailsOpen />
    </div>
  );
}
