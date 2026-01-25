import { Button } from '@/components/ui/Button';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <header className="bg-gray-50 pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            I&apos;ve been fighting
            <br />
            my whole life.
          </h1>
          <p className="text-2xl text-gray-400 font-light">
            And I&apos;m not done yet.
          </p>
        </div>
      </header>

      {/* Chapter 1 */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold text-purple-200">
              1990
            </span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              I was diagnosed with cystic fibrosis at birth. That was rare in
              1990—most infants went undiagnosed and didn&apos;t receive the
              right treatment.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              The median life expectancy that year was 18 years old.
            </p>
            <p>
              My parents had no idea what cystic fibrosis was. But when they
              found out that salty ocean air helped thin the thick, sticky mucus
              in my lungs, they moved us as close to the waves as possible.
            </p>
            <p>
              I lived a happy and healthy childhood along the coast, enjoying
              the salty air every moment I could.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold text-purple-200">
              2005
            </span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              CF is progressive. My childhood was healthy, but my adult years
              told a different story.
            </p>
            <p>
              As my disease progressed, the hospital became my first home and my
              apartment became my second. The nurses and doctors became my
              family and closest confidants.
            </p>
            <p>
              I went years cycling through—admitted for two or three weeks, out
              for one, then back in. Every day thinking and wishing for my
              independence back.
            </p>
            <p>
              What CF was doing to my body didn&apos;t only affect me. Like a
              ripple, it disrupted the lives of everyone in my family.
            </p>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 md:py-24 px-6 bg-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-4xl text-white font-light leading-relaxed">
            &ldquo;To people living with CF, breathing is a full-time job.
            <br className="hidden md:block" />
            Hours of nebulizers, treatments, therapies, and pills.
            <br className="hidden md:block" />
            <span className="font-medium">Every single day.</span>&rdquo;
          </p>
        </div>
      </section>

      {/* Chapter 3 */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold text-purple-200">
              2013
            </span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              At 22 years old, my lung function dropped to 16%. I lost almost 30
              pounds. I was living on supplemental oxygen and a feeding tube.
            </p>
            <p>
              I laid in the hospital and was told that a double lung transplant
              was my only option for survival.
            </p>
            <p>
              My family&apos;s life was committed to working diligently on my
              health. After a year and a half of hard work, I was listed for my
              life-saving transplant.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              Then I waited. Waiting is its own kind of fight.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold text-purple-200">
              2015
            </span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p className="text-2xl md:text-3xl text-gray-900 font-medium">
              On October 20th, I received my gift of life.
            </p>
            <p>
              I regained many of my old routines—walking to get my morning
              coffee, attending farmers markets, helping care for my dog. I
              became more social again.
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
          </div>
        </div>
      </section>

      {/* Chapter 5 */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold text-purple-200">
              2017
            </span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              Shortly after my one-year breathday, I went into organ rejection.
            </p>
            <p>
              My care team, my supporters, and I worked endlessly to fight our
              way out of it. Weeks in the hospital. Working out with a trainer.
              Managing my CF-related diabetes. Trying to gain weight. Attempting
              to control every factor we knew could be playing a part.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              It wasn&apos;t enough.
            </p>
            <p>
              Within months, I was back on supplemental oxygen 24/7. Back on my
              feeding tube. I couldn&apos;t care for myself at all. I
              couldn&apos;t even walk around our 650-square-foot San Francisco
              apartment.
            </p>
            <p>My lung function dropped to 14%.</p>
            <p>
              Going through rejection was more emotionally and physically taxing
              than my first battle with end-stage lung disease. I felt
              responsible for my body failing to accept my lungs. Ashamed for
              letting my donor family down.
            </p>
          </div>
        </div>
      </section>

      {/* Dark Quote */}
      <section className="py-16 md:py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-4">
            My hospital told me I needed a second transplant.
          </p>
          <p className="text-2xl md:text-4xl text-white font-medium leading-relaxed">
            Then they told me they weren&apos;t willing to give it to me.
          </p>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mt-4">
            I was put on hospice and told not to return.
          </p>
        </div>
      </section>

      {/* Chapter 6 */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold text-rose-200">
              2017
            </span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p className="text-2xl md:text-3xl text-gray-900 font-medium">
              My fight was not over. And neither was my family&apos;s.
            </p>
            <p>
              While I suffered from a rapid decline, my husband worked
              endlessly to find a center that would take a chance on me.
            </p>
            <p>
              In the middle of all this, we got married—150 family members and
              friends. Then a honeymoon to my favorite place in the world,
              Hawaii.
            </p>
            <p>My words to my husband were simple:</p>
          </div>
        </div>
      </section>

      {/* The Quote */}
      <section className="py-24 md:py-32 px-6 bg-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
            &ldquo;I have been fighting my whole life, and I&apos;m not done
            yet.&rdquo;
          </p>
        </div>
      </section>

      {/* Chapter 7 */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold text-purple-200">
              2018
            </span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              We packed all of our belongings and moved across California. UCLA
              gave me a chance when no one else would.
            </p>
            <p>
              After five and a half months living in the hospital, I received
              not only new lungs—but a new life.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              When I woke up on June 8th, I felt my lungs breathe for the first
              time. I mean really breathe.
            </p>
            <p>
              Living with end-stage cystic fibrosis, my breathing had always
              been so shallow, so strenuous, that I didn&apos;t fully understand
              what it was like to take a deep breath.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium">
              Now I do.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 8: Now */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold text-purple-200">
              Now
            </span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>Today I breathe deep and effortlessly.</p>
            <p>
              But I will never forget the moments I struggled for oxygen. Or the
              people who showed up when it mattered.
            </p>
            <p>
              I started Fight2Breathe because this fight shouldn&apos;t be
              figured out alone. The information, the support, the
              community—it should already exist.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium pt-4">
              So I&apos;m building it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-500 mb-8">
            See what I&apos;m working on now.
          </p>
          <Button href="/about" variant="dark" size="lg">
            View My Work
          </Button>
        </div>
      </section>
    </main>
  );
}
