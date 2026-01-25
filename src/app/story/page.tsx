import Image from 'next/image';
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
              I was born with cystic fibrosis and diagnosed at birth, which was
              rare at the time. Many infants went undiagnosed and untreated.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              The median life expectancy that year was 18.
            </p>
            <p>
              When my parents learned that salty ocean air helped my lungs, they
              did what they could to keep me breathing and moved us closer to
              the sea.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold text-purple-200">
              2008
            </span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              Cystic fibrosis is progressive. My childhood was relatively
              healthy, but my adult years told a different story.
            </p>
            <p>
              The hospital became my first home, my apartment the second. I
              spent years cycling through admissions. Two or three weeks in, one
              week out, then back again.
            </p>
            <p>
              The nurses and doctors became family. Every day was spent thinking
              about getting my independence back.
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

          <div className="mb-10">
            <Image
              src="/images/journey-2013.jpg"
              alt="2013 - Fighting for survival"
              width={800}
              height={600}
              className="rounded-xl w-full object-cover"
            />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              At 22, my lung function dropped to 16%. I lost nearly 30 pounds. I
              relied on supplemental oxygen and a feeding tube.
            </p>
            <p>
              A double-lung transplant became my only option for survival.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              I was listed, and then I waited. Waiting is its own kind of fight.
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
              On October 20, I received my first double-lung transplant.
            </p>
            <p>
              After nearly two years of waiting, I got some of my old routines
              back. Walking to get coffee. Going to farmers markets. Caring for
              my dog.
            </p>
            <p>
              Post-transplant life tested me too. An abscess in my left lung.
              Respiratory failure. A life flight. ECMO. A medically induced
              coma. Multiple strokes.
            </p>
            <p>
              Relearning how to hold my head up, swallow, walk, and talk. I had
              to start from zero.
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
              I went into organ rejection shortly after my one-year breathday.
            </p>
            <p>
              Within months, I was back on oxygen, using my feeding tube
              continuously, and unable to walk more than a few feet.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              My lung function dropped to 9%.
            </p>
            <p>
              My center told me I wasn&apos;t a candidate for a redo. Their
              recommendation was palliative care.
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

          <div className="mb-10 flex justify-center">
            <Image
              src="/images/journey-2017.jpg"
              alt="2017 - Our wedding day"
              width={600}
              height={800}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p className="text-2xl md:text-3xl text-gray-900 font-medium">
              In the middle of all that, I married my best friend, surrounded by
              150 people who loved us.
            </p>
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
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl md:text-6xl font-bold text-purple-200">
              2018
            </span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>
          <p className="text-xl md:text-2xl text-purple-600 font-medium mb-8">
            A Second Chance
          </p>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              My husband searched nationwide for any center willing to take me.
              We packed everything and moved across California.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              UCLA gave me a chance when no one else would.
            </p>
            <p>
              After five and a half months living in the hospital, I received my
              second double-lung transplant on June 8th.
            </p>
            <p>
              When I woke up and took my first breath, I understood for the
              first time what breathing was meant to feel like.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium">
              All night, I kept repeating, &ldquo;I&apos;m so happy. I can
              breathe.&rdquo;
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
            <p>
              Today, I breathe deeply and effortlessly. But I&apos;ll never
              forget the moments I struggled for oxygen, or the people who
              showed up when it mattered.
            </p>
            <p>
              I started Fight2Breathe as a way to survive. Now, Fight2Breathe is
              bigger than my story.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              It&apos;s a community.
            </p>
            <p>
              A space where no one is expected to figure it out alone. Where
              support exists across diagnoses, roles, and stages of the journey.
              Where lived experience is centered, respected, and woven into
              every conversation.
            </p>
            <p className="text-xl md:text-2xl text-purple-600 font-medium pt-4">
              If you&apos;ve ever felt like you had to navigate illness, care,
              or advocacy on your own, this space is for you.
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
