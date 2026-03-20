import { Button } from '@/components/ui/Button';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <header className="ombre-bg pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            I&apos;ve been fighting
            <br />
            my whole life.
          </h1>
          <p className="text-2xl text-white/80 font-light">
            And I&apos;m not done yet.
          </p>
        </div>
      </header>

      {/* Understanding Cystic Fibrosis */}
      <section className="py-16 md:py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Understanding Cystic Fibrosis
          </h2>

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Cystic fibrosis (CF) is a genetic disease that affects how the
              body moves salt and water in and out of cells. This causes thick,
              sticky mucus to build up, especially in the lungs and digestive
              system. Over time, this makes breathing harder, increases
              infections, and interferes with digestion and nutrient absorption.
              CF is lifelong, has no cure, and requires daily treatment and
              medical care.
            </p>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold ombre-text-horizontal mb-4">
                Beyond the Diagnosis
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Cystic fibrosis means living with responsibility most people
                never see—managing treatments, medications, appointments, and
                constant decisions just to stay stable. It&apos;s carrying an
                invisible mental load, always thinking one step ahead about my
                health, my energy, and my limits. CF has shaped how I move
                through the world, how I plan my days, and how deeply I value
                time and connection. It has taken things from me, but it has
                also given me clarity, resilience, and an unshakable sense of
                perspective. And while CF is part of my story, it does not
                define the fullness, joy, or meaning of the life I continue to
                build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1 */}
      <section className="py-20 md:py-28 px-6 ombre-section">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold ombre-text">
              1990
            </span>
            <div className="h-px bg-gradient-to-r from-[#BBAAEE] to-[#F575D5] flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              I was diagnosed with cystic fibrosis at birth. In 1990, that was
              rare. Most infants went undiagnosed and didn&apos;t receive the
              correct treatment.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              The median life expectancy that year was 18.
            </p>
            <p>
              My parents had no idea what cystic fibrosis was. However, when
              they learned that salty ocean air could help thin the thick mucus
              in my lungs, they moved us as close to the waves as possible.
            </p>
            <p>
              I grew up along the coast, living a happy, active childhood,
              soaking in the salty air every chance I got.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="py-20 md:py-28 px-6 ombre-section-medium">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold ombre-text">
              2008
            </span>
            <div className="h-px bg-gradient-to-r from-[#BBAAEE] to-[#F575D5] flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              Cystic fibrosis is progressive. My childhood was healthy, but my
              adult years told a very different story.
            </p>
            <p>
              As my disease advanced, the hospital became my first home and my
              apartment my second. The nurses and doctors became family, and
              some of my closest confidants.
            </p>
            <p>
              I spent years cycling in and out—admitted for two or three weeks,
              home for one, then back again. Every day, I thought about
              independence and questioned whether it was still possible.
            </p>
            <p>
              What CF was doing to my body didn&apos;t just affect me. Like a
              ripple, it reshaped the lives of everyone in my family.
            </p>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 md:py-24 px-6 ombre-bg">
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
      <section className="py-20 md:py-28 px-6 ombre-section">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold ombre-text">
              2013
            </span>
            <div className="h-px bg-gradient-to-r from-[#BBAAEE] to-[#F575D5] flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              At 22 years old, my lung function dropped to 16%. I lost nearly 30
              pounds. I was living on supplemental oxygen and a feeding tube
              just to function at the most basic level.
            </p>
            <p>
              I was told that a double lung transplant was my only option for
              survival.
            </p>
            <p>
              That moment caused a dramatic shift in my family. Everything
              narrowed to one focus: my health. It became the number one
              priority, above everything else.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              The goal became simple: make it through one more day.
            </p>
            <p>
              After a year and a half of relentless work and checking off every
              goal my healthcare team set, I was listed for my life-saving
              transplant.
            </p>
            <p className="text-xl md:text-2xl text-gray-900 font-medium">
              Then I waited. Waiting is its own kind of fight.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 4 */}
      <section className="py-20 md:py-28 px-6 ombre-section-medium">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold ombre-text">
              2015
            </span>
            <div className="h-px bg-gradient-to-r from-[#BBAAEE] to-[#F575D5] flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p className="text-2xl md:text-3xl text-gray-900 font-medium">
              On October 20th, I received my gift of life.
            </p>
            <p>
              Slowly, I began reclaiming pieces of my old routine: walking to
              get my morning coffee, going to farmers markets, helping care for
              my dog. I became social again. I started to feel like myself.
            </p>
            <p className="text-xl md:text-2xl text-gray-900 font-medium py-2">
              But transplant tested me in ways I never expected.
            </p>
            <p>
              Just three months later, I developed an abscess in my left lung
              the size of an orange. Doctors questioned whether the lung would
              need to be removed entirely. Not long after, severe distal
              intestinal obstruction syndrome caused me to aspirate into my
              lungs, leading to respiratory failure, a life flight, ECMO life
              support, and a medically induced coma.
            </p>
            <p>
              When I woke up, I had to relearn everything. How to hold my head
              up. How to swallow. How to walk, talk, and piece my memory back
              together.
            </p>
            <p className="text-xl md:text-2xl font-medium ombre-text-horizontal">
              I didn&apos;t just survive. I had to rebuild myself from the
              ground up.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 5 */}
      <section className="py-20 md:py-28 px-6 ombre-section">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold ombre-text">
              2017
            </span>
            <div className="h-px bg-gradient-to-r from-[#BBAAEE] to-[#F575D5] flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              Shortly after my one-year Breathday, I went into organ rejection.
            </p>
            <p>
              My care team, my supporters, and I worked relentlessly to fight
              our way out of it. Weeks in the hospital. Training sessions to
              rebuild strength. Tighter management of CF-related diabetes.
              Trying to gain weight through continuous tube feeds. Constant
              clinic visits with my specialists. We controlled every variable we
              knew might help.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              It wasn&apos;t enough.
            </p>
            <p>
              Within months, I was back on supplemental oxygen around the clock,
              drinking nutritional supplements on top of continuous tube feeds.
              I couldn&apos;t care for myself. I couldn&apos;t even walk across
              the 650-square-foot San Francisco apartment I lived in.
            </p>
            <p className="text-xl md:text-2xl text-gray-900 font-medium">
              My lung function dropped to 9%.
            </p>
            <p>
              Rejection was more physically and emotionally devastating than my
              initial battle with end-stage lung disease. I felt responsible for
              my body failing to accept the lungs I had been given. I carried
              shame for letting my donor family down.
            </p>
          </div>
        </div>
      </section>

      {/* Dark Quote */}
      <section className="py-16 md:py-24 px-6 dark-purple-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-[#E8B8CE] leading-relaxed mb-4">
            My hospital told me I needed a second transplant.
          </p>
          <p className="text-2xl md:text-4xl text-white font-medium leading-relaxed">
            Then they told me they weren&apos;t willing to give it to me.
          </p>
          <p className="text-xl md:text-2xl text-[#E8B8CE] leading-relaxed mt-4">
            I was placed on hospice and discharged from care.
          </p>
        </div>
      </section>

      {/* Chapter 6 */}
      <section className="py-20 md:py-28 px-6 ombre-section-medium">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold ombre-text">
              2017
            </span>
            <div className="h-px bg-gradient-to-r from-[#BBAAEE] to-[#F575D5] flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p className="text-2xl md:text-3xl text-gray-900 font-medium">
              My fight was not over. And neither was my family&apos;s.
            </p>
            <p>
              As my health rapidly declined, my husband worked tirelessly to
              find a transplant center willing to take a chance on me.
            </p>
            <p>
              In the middle of it all, we got married, surrounded by 150 family
              members and friends. Then we went on a honeymoon to my favorite
              place in the world, Hawaii.
            </p>
            <p>Before we left, I said something simple to my husband:</p>
          </div>
        </div>
      </section>

      {/* The Quote */}
      <section className="py-24 md:py-32 px-6 ombre-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
            &ldquo;I have been fighting my whole life, and I&apos;m not done
            yet.&rdquo;
          </p>
        </div>
      </section>

      {/* Chapter 7 */}
      <section className="py-20 md:py-28 px-6 ombre-section">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl md:text-6xl font-bold ombre-text">
              2018
            </span>
            <div className="h-px bg-gradient-to-r from-[#BBAAEE] to-[#F575D5] flex-1" />
          </div>
          <p className="text-xl md:text-2xl font-medium ombre-text-horizontal mb-8">
            A Second Chance
          </p>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              I was admitted to the ICU when we got the news that UCLA Health
              was willing to give me the second chance no one else would.
            </p>
            <p>
              We packed up everything we owned and moved across California.
              After five and a half months living in the hospital, I received
              not just new lungs, but a new life.
            </p>
            <p className="text-2xl md:text-3xl text-gray-900 font-medium py-4">
              When I woke up on June 8th, I took the first full breath I&apos;d
              taken in over a decade.
            </p>
            <p className="text-xl md:text-2xl font-medium ombre-text-horizontal">
              For the first time, I could truly breathe.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 8: Now */}
      <section className="py-20 md:py-28 px-6 ombre-section-medium">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl font-bold ombre-text">
              Now
            </span>
            <div className="h-px bg-gradient-to-r from-[#BBAAEE] to-[#F575D5] flex-1" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p className="text-2xl md:text-3xl text-gray-900 font-medium">
              Today, I breathe deeply and effortlessly.
            </p>
            <p>
              But I haven&apos;t forgotten what it feels like to fight to
              breathe, or how much survival depends on who shows up around you.
            </p>
            <p>
              Fight2Breathe exists to change how patients and families
              experience illness—not in isolation, but in community. With access
              to information, support, and lived expertise from day one.
            </p>
            <p className="text-xl md:text-2xl font-medium ombre-text-horizontal pt-4">
              I&apos;m building the future I once needed.
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
