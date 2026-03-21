import Image from 'next/image';
import { MailtoTag } from './MailtoTag';
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
                    Fibrosis Research Inc., Pfizer,{' '}
                    <a href="https://turnto.ai">Turnto.ai</a>, and others
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
                    Genes Ambassador
                  </li>
                  <li>
                    Recognized with the CFF Impact Grant (2024); winner of
                    BreatheCon Artist Contest (2024); recipient of the CFF Rose
                    Award for Advocacy (2017)
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
                  pRxTrialPort &middot; Patient Engagement &amp; Clinical Trials
                  Platform
                </div>
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
                  Global Genes &middot; LifeSciences &middot; Various
                </div>
                <ul className="r-eb">
                  <li>
                    Panelist, Patient Centricity &amp; Collaboration World
                    Congress (Feb 2026) — contributed to discussions on patient
                    engagement, trust, and patient-centered research
                  </li>
                  <li>
                    Speaker, Worldwide Clinical Trials Global Event (London, Feb
                    2026) — delivered patient perspective on cystic fibrosis,
                    rare disease, and inclusive clinical trial design
                  </li>
                  <li>
                    Speaker, Global Genes (Sept 2018) — presented on love,
                    relationships, and living with chronic illness
                  </li>
                  <li>
                    Panelist &amp; Speaker, UCLA Health Lung Transplant Patient
                    Education Symposium (Nov 2018)
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
                    Upcoming: TransPerfect Life Sciences (May 2026)
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
                    <td>CF &amp; Patient Leadership</td>
                    <td>2026</td>
                  </tr>
                  <tr>
                    <td>CF Roundtable</td>
                    <td>
                      <span className="r-media-pill r-mp-pub">Publication</span>
                    </td>
                    <td>Clinical trials article</td>
                    <td>2025</td>
                  </tr>
                  <tr>
                    <td>American Lung Assoc.</td>
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
                    <td>Chronic illness abroad</td>
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
                    <td>Lung Health Campaign</td>
                    <td>2020</td>
                  </tr>
                  <tr>
                    <td>Jairek Robbins</td>
                    <td>
                      <span className="r-media-pill r-mp-pod">Podcast</span>
                    </td>
                    <td>What the world needs</td>
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
                    <td>CF News Today</td>
                    <td>
                      <span className="r-media-pill r-mp-pub">Feature</span>
                    </td>
                    <td>Not Your Average Rose</td>
                    <td>2017</td>
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
                  <span className="r-t">Genetic disorders</span>
                  <span className="r-t">Chronic illness</span>
                  <span className="r-t">Cystic fibrosis</span>
                  <span className="r-t">Diabetes</span>
                  <span className="r-t">Organ transplantation</span>
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

            {/* Affiliations */}
            <div className="r-sec">
              <div className="r-sec-lbl">Affiliations</div>
              <div className="r-affiliations">
                <span>Cystic Fibrosis Foundation</span>
                <span>Make-A-Wish Foundation</span>
                <span>Global Genes</span>
                <span>American Lung Association</span>
                <span>American Hospitals Association</span>
                <span>Donate Life America</span>
                <span>Rare Patient Voice</span>
                <span>Cystic Fibrosis Research Inc.</span>
                <span>pRxTrialPort</span>
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
