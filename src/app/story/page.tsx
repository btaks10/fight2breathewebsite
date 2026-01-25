import { Button } from '@/components/ui/Button';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-2xl mx-auto px-6 md:px-8 py-32 md:py-40">
        {/* Opening */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            I&apos;ve been fighting my whole life.
          </h1>
          <p className="text-xl text-gray-500">And I&apos;m not done yet.</p>
        </header>

        {/* The Narrative */}
        <div className="prose prose-lg prose-gray max-w-none">
          <p>
            I was diagnosed with cystic fibrosis at birth. That was rare in
            1990—most infants went undiagnosed and didn&apos;t receive the right
            treatment. The median life expectancy that year was 18 years old.
          </p>

          <p>
            My parents had no idea what cystic fibrosis was. But when they found
            out that salty ocean air helped thin the thick, sticky mucus in my
            lungs, they moved us as close to the waves as possible. I lived a
            happy and healthy childhood along the coast, enjoying the salty air
            every moment I could.
          </p>

          <p>
            CF is progressive. My childhood was healthy, but my adult years told
            a different story.
          </p>

          <p>
            As my disease progressed, the hospital became my first home and my
            apartment became my second. The nurses and doctors became my family
            and closest confidants. I went years cycling through—admitted for
            two or three weeks, out for one, then back in. Every day thinking
            and wishing for my independence back.
          </p>

          <p>
            What CF was doing to my body didn&apos;t only affect me. Like a
            ripple, it disrupted the lives of everyone in my family.
          </p>

          <hr className="my-12 border-gray-200" />

          <p>
            To people living with CF, breathing is a full-time job. Hours of
            nebulizers, treatments, therapies, and pills. Every single day.
          </p>

          <hr className="my-12 border-gray-200" />

          <p>
            At 22 years old, my lung function dropped to 16%. I lost almost 30
            pounds. I was living on supplemental oxygen and a feeding tube. I
            laid in the hospital and was told that a double lung transplant was
            my only option for survival.
          </p>

          <p>
            My family&apos;s life was committed to working diligently on my
            health. After a year and a half of hard work, I was listed for my
            life-saving transplant.
          </p>

          <p>Then I waited. Waiting is its own kind of fight.</p>

          <hr className="my-12 border-gray-200" />

          <p>On October 20, 2015, I received my gift of life.</p>

          <p>
            I regained many of my old routines—walking to get my morning coffee,
            attending farmers markets, helping care for my dog. I became more
            social again.
          </p>

          <p>But transplant tested me in ways I never expected.</p>

          <p>
            An abscess the size of an orange in my left lung. The team
            questioned removing it entirely, just three months after my
            transplant. Then respiratory failure. A life flight. ECMO life
            support. A medically induced coma.
          </p>

          <p>
            I had to relearn everything. How to hold my own head up. How to
            swallow. How to walk, talk, and reform my memory.
          </p>

          <hr className="my-12 border-gray-200" />

          <p>
            Shortly after my one-year breathday, I went into organ rejection.
          </p>

          <p>
            My care team, my supporters, and I worked endlessly to fight our way
            out of it. Weeks in the hospital. Working out with a trainer.
            Managing my CF-related diabetes. Trying to gain weight. Attempting
            to control every factor we knew could be playing a part.
          </p>

          <p>It wasn&apos;t enough.</p>

          <p>
            Within months, I was back on supplemental oxygen 24/7. Back on my
            feeding tube. I couldn&apos;t care for myself at all. I couldn&apos;t
            even walk around our 650-square-foot San Francisco apartment. My
            lung function dropped to 14%.
          </p>

          <p>
            Going through rejection was more emotionally and physically taxing
            than my first battle with end-stage lung disease. I felt responsible
            for my body failing to accept my lungs. Ashamed for letting my donor
            family down. I believed I hadn&apos;t achieved all I wanted to in
            order to honor my donor&apos;s gift.
          </p>

          <p>
            My hospital told me I needed a second transplant. Then they told me
            they weren&apos;t willing to give it to me.
          </p>

          <p>I was put on hospice and told not to return.</p>

          <hr className="my-12 border-gray-200" />

          <p>My fight was not over. And neither was my family&apos;s.</p>

          <p>
            While I suffered from a rapid decline, my husband worked endlessly
            to find a center that would take a chance on me. In the middle of
            all this, we got married—150 family members and friends. Then a
            honeymoon to my favorite place in the world, Hawaii.
          </p>

          <p>My words to my husband were simple:</p>

          <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 border-l-4 border-purple-400 pl-6 my-12 italic">
            &ldquo;I have been fighting my whole life, and I&apos;m not done
            yet.&rdquo;
          </blockquote>

          <p>
            We packed all of our belongings and moved across California. UCLA
            gave me a chance when no one else would.
          </p>

          <p>
            After five and a half months living in the hospital, I received not
            only new lungs—but a new life.
          </p>

          <p>
            When I woke up on June 8th, 2018, I felt my lungs breathe for the
            first time. I mean really breathe. Living with end-stage cystic
            fibrosis, my breathing had always been so shallow, so strenuous,
            that I didn&apos;t fully understand what it was like to take a deep
            breath.
          </p>

          <p>Now I do.</p>

          <hr className="my-12 border-gray-200" />

          <p>Today I breathe deep and effortlessly.</p>

          <p>
            But I will never forget the moments I struggled for oxygen. Or the
            people who showed up when it mattered.
          </p>

          <p>
            I started Fight2Breathe because this fight shouldn&apos;t be figured
            out alone. The information, the support, the community—it should
            already exist.
          </p>

          <p>So I&apos;m building it.</p>
        </div>

        {/* Closing CTA */}
        <footer className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-gray-600 mb-6">See what I&apos;m working on now.</p>
          <Button href="/about" variant="dark" size="lg">
            View My Work
          </Button>
        </footer>
      </article>
    </main>
  );
}
