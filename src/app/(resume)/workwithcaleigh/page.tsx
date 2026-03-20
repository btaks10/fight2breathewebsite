import Image from 'next/image';
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
            Patient Advocate &nbsp;&middot;&nbsp; Founder &nbsp;&middot;&nbsp;
            Community &amp; Brand Strategist &nbsp;&middot;&nbsp; Public Speaker
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
            <div className="r-hstat">
              <div className="r-hstat-n">2&times;</div>
              <div className="r-hstat-l">Lung transplant</div>
            </div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="r-body">
        {/* SUMMARY */}
        <div className="r-summary">
          <p>
            Patient advocate, founder, and community strategist with over a
            decade of work at the intersection of chronic illness, storytelling,
            and systems change. Founder of Fight2Breathe — a platform built from
            lived experience with cystic fibrosis and two double lung
            transplants — reaching 71,900+ followers across 30+ countries.
            Currently leading community and brand strategy at pRxEngage, shaping
            how a clinical trials platform engages with rare disease communities
            worldwide.
          </p>
          <div className="r-tags">
            <span className="r-tag">Brand Partnerships</span>
            <span className="r-tag">Speaking Engagements</span>
            <span className="r-tag">Employment</span>
          </div>
        </div>

        {/* GRID */}
        <div className="r-grid">
          {/* MAIN COLUMN */}
          <div className="r-main">
            {/* EXPERIENCE */}
            <div className="r-sec">
              <div className="r-sec-lbl">Experience</div>

              <div className="r-entry">
                <div className="r-eh">
                  <span className="r-er">
                    Founder &amp; CEO — Fight2Breathe
                  </span>
                  <span className="r-ed">2014 – Present</span>
                </div>
                <div className="r-eo">
                  Fight2Breathe &middot; Advocacy Platform &amp; Community
                </div>
                <ul className="r-eb">
                  <li>
                    Built a multi-platform community of 71,900+ Instagram
                    followers with podcast listeners in 30+ countries —
                    organically, from personal lived experience with CF and
                    transplantation
                  </li>
                  <li>
                    Produced and hosted <em>Our Fight to Breathe</em> podcast:
                    13 episodes, 1,000+ subscribers; weekly conversations
                    averaging 45–60 min covering chronic illness, transplant
                    life, and patient advocacy
                  </li>
                  <li>
                    Launched Fight2Breathe.org (Next.js) with full accessibility
                    features, community resources, blog, and merchandise
                    storefront
                  </li>
                  <li>
                    Secured and manages active brand partnerships with CF News
                    Today, American Lung Association, American Hospitals
                    Association, Philips Respironics, Turnto.ai, and others
                  </li>
                  <li>
                    Received CFF Impact Grant (2024) in recognition of
                    platform&apos;s role in the CF community; won CFF BreatheCon
                    Artist Contest (2024); received CFF Rose Award for Advocacy
                    (2017)
                  </li>
                  <li>
                    Serves as Co-Chair for BreatheCon 2025; affiliated with CFF
                    Peer Connect, Global Genes Rare Leader program, Make-A-Wish
                    Foundation (Wish Granter, 2019–present), and Donate Life
                  </li>
                </ul>
              </div>

              <div className="r-entry">
                <div className="r-eh">
                  <span className="r-er">
                    Community &amp; Brand Strategy
                  </span>
                  <span className="r-ed">Aug 2025 – Present</span>
                </div>
                <div className="r-eo">
                  pRxEngage &middot; Patient Engagement &amp; Clinical Trials
                  Platform
                </div>
                <ul className="r-eb">
                  <li>
                    Leads community and brand strategy at an AI-powered clinical
                    trials platform focused on rare disease and underserved
                    communities — translating patient lived experience into
                    engagement design, content, and outreach
                  </li>
                  <li>
                    Owns editorial vision and production of pRxEngage newsletter
                    (Brevo): two alternating monthly editions covering patient
                    stories and medical innovation; structure, cadence, and
                    &ldquo;3 E&apos;s&rdquo; framework (Engagement, Education,
                    Empowerment)
                  </li>
                  <li>
                    Building and structuring the Ambassador Program from the
                    ground up — training materials, scripts/templates/talking
                    points, community expectations, success metrics, and equity
                    &amp; diversity focus; program grew to 4–5 members in first
                    months
                  </li>
                  <li>
                    Directs marketing strategy and execution alongside agency
                    partner (Hopeful): social content (20 posts/month across IG
                    and TikTok), mission-aligned messaging, real patient
                    storytelling, and repurposable video series
                  </li>
                  <li>
                    Developing original video content series:{' '}
                    <em>Walking Together</em> and a planned 5-minute patient
                    story format
                  </li>
                  <li>
                    Represented pRxEngage at Worldwide Clinical Trials global
                    event in London (Feb 2026) as patient speaker; spoke on
                    barriers to access, trust, and inclusive trial design;
                    co-paneled with founder Keith Berelowitz
                  </li>
                  <li>
                    Scope expanded from 10 hrs/month to 8 hrs/week (Jan 2026
                    contract addendum), reflecting demonstrated impact and
                    strategic leadership growth
                  </li>
                </ul>
              </div>

              <div className="r-entry">
                <div className="r-eh">
                  <span className="r-er">
                    Public Speaker &amp; Patient Advocate
                  </span>
                  <span className="r-ed">2015 – Present</span>
                </div>
                <div className="r-eo">
                  Cystic Fibrosis Foundation &middot; UCLA Health &middot;
                  Global Genes &middot; Various
                </div>
                <ul className="r-eb">
                  <li>
                    Featured keynote at CFF Beach, Brews &amp; BBQ (OC Chapter,
                    Newport Beach) — 2018 and 2019; fundraising speeches
                    supporting CFF&apos;s drug development pipeline
                  </li>
                  <li>
                    Patient panelist &amp; speaker, UCLA Health Lung Transplant
                    Patient Education Symposium (Nov 2018)
                  </li>
                  <li>
                    Speaker, Global Genes — Love and Relationship panel +
                    presentation (Sept 2018)
                  </li>
                  <li>
                    Speaker, American Lung Association awareness &amp;
                    fundraising event (Nov 2018)
                  </li>
                  <li>
                    Speaker, Worldwide Clinical Trials global event, London (Feb
                    2026) — patient perspective on CF, rare disease, and
                    inclusive trial design
                  </li>
                  <li>
                    Upcoming: Transperfect Life Sciences (May 2026); Patient
                    Centricity &amp; Collaboration Conference 2026
                  </li>
                </ul>
              </div>

              <div className="r-entry">
                <div className="r-eh">
                  <span className="r-er">Pastry Cook</span>
                  <span className="r-ed">2012 – 2014</span>
                </div>
                <div className="r-eo">
                  Three-Star Michelin Restaurant &middot; San Francisco, CA
                </div>
                <ul className="r-eb">
                  <li>
                    Completed culinary degree and joined a Michelin-starred
                    kitchen; developed precision, discipline, and high-pressure
                    performance competencies
                  </li>
                </ul>
              </div>
            </div>

            {/* MEDIA & PRESS */}
            <div className="r-sec">
              <div className="r-sec-lbl">Media &amp; Press</div>
              <table className="r-media-table">
                <thead>
                  <tr>
                    <th>Outlet / Show</th>
                    <th>Type</th>
                    <th>Topic / Title</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MedTalks with Katrin</td>
                    <td>
                      <span className="r-media-pill r-mp-pod">Podcast</span>
                    </td>
                    <td>CF and Patient Leadership</td>
                    <td>2026</td>
                  </tr>
                  <tr>
                    <td>CF Roundtable Publication</td>
                    <td>
                      <span className="r-media-pill r-mp-pub">Publication</span>
                    </td>
                    <td>Clinical trials article</td>
                    <td>2025</td>
                  </tr>
                  <tr>
                    <td>American Lung Association</td>
                    <td>
                      <span className="r-media-pill r-mp-pub">Feature</span>
                    </td>
                    <td>Patient feature</td>
                    <td>2025</td>
                  </tr>
                  <tr>
                    <td>Packing Up &amp; Peacing Out</td>
                    <td>
                      <span className="r-media-pill r-mp-pod">Podcast</span>
                    </td>
                    <td>Moving abroad with a chronic illness</td>
                    <td>2025</td>
                  </tr>
                  <tr>
                    <td>It&apos;s a Lung Story</td>
                    <td>
                      <span className="r-media-pill r-mp-pod">Podcast</span>
                    </td>
                    <td>CF transplant stories</td>
                    <td>2025</td>
                  </tr>
                  <tr>
                    <td>USA Today</td>
                    <td>
                      <span className="r-media-pill r-mp-pub">Campaign</span>
                    </td>
                    <td>Lung Health Campaign contributor</td>
                    <td>2020</td>
                  </tr>
                  <tr>
                    <td>Jairek Robbins Podcast</td>
                    <td>
                      <span className="r-media-pill r-mp-pod">Podcast</span>
                    </td>
                    <td>What the world needs more of</td>
                    <td>2018</td>
                  </tr>
                  <tr>
                    <td>Donate Life California</td>
                    <td>
                      <span className="r-media-pill r-mp-pub">Feature</span>
                    </td>
                    <td>Stories of Hope</td>
                    <td>2018</td>
                  </tr>
                  <tr>
                    <td>CFF Blog</td>
                    <td>
                      <span className="r-media-pill r-mp-content">
                        Contributor
                      </span>
                    </td>
                    <td>Multiple posts</td>
                    <td>2016</td>
                  </tr>
                  <tr>
                    <td>CF News Today</td>
                    <td>
                      <span className="r-media-pill r-mp-pub">Feature</span>
                    </td>
                    <td>Not Your Average Rose — Caleigh Haber</td>
                    <td>2017</td>
                  </tr>
                  <tr>
                    <td>CF News Today</td>
                    <td>
                      <span className="r-media-pill r-mp-pub">Feature</span>
                    </td>
                    <td>Artist With CF Fights to Breathe</td>
                    <td>2015</td>
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
                  <span className="r-t r-ta">Patient advocacy</span>
                  <span className="r-t r-ta">Rare disease</span>
                  <span className="r-t r-ta">CF &amp; transplant</span>
                  <span className="r-t r-ta">Clinical trials</span>
                </div>
              </div>
              <div className="r-tg">
                <div className="r-tgl">Content &amp; Brand</div>
                <div className="r-tgs">
                  <span className="r-t">Content strategy</span>
                  <span className="r-t">Social media</span>
                  <span className="r-t">Podcasting</span>
                  <span className="r-t">Newsletter</span>
                  <span className="r-t">Brand partnerships</span>
                  <span className="r-t">Storytelling</span>
                </div>
              </div>
              <div className="r-tg">
                <div className="r-tgl">Speaking</div>
                <div className="r-tgs">
                  <span className="r-t">Keynote</span>
                  <span className="r-t">Panel speaker</span>
                  <span className="r-t">Fundraising events</span>
                  <span className="r-t">Medical conferences</span>
                </div>
              </div>
              <div className="r-tg">
                <div className="r-tgl">Programs</div>
                <div className="r-tgs">
                  <span className="r-t">Ambassador programs</span>
                  <span className="r-t">Community building</span>
                  <span className="r-t">Patient education</span>
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

            {/* Affiliations */}
            <div className="r-sec">
              <div className="r-sec-lbl">Affiliations</div>
              <div className="r-affiliations">
                <span>Cystic Fibrosis Foundation</span>
                <span>pRxEngage</span>
                <span>Global Genes</span>
                <span>Donate Life California</span>
                <span>Make-A-Wish Foundation</span>
                <span>American Lung Association</span>
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
    </div>
  );
}
