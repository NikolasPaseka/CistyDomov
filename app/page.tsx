import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Phone, Mail, Home, Sparkles, ArrowRight, BriefcaseBusiness } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-900 to-black">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 lg:py-16">
          {/* Hero illustration */}
          <div className="relative mx-auto mb-6 sm:mb-8 h-48 sm:h-56 md:h-64 w-full max-w-2xl overflow-hidden rounded-xl ring-1 ring-zinc-800/60">
            <Image
              src="/images/cleaner-hero.png"
              alt="Ilustrace uklízečky s mopem a upozorněním na mokrou podlahu"
              fill
              priority
              sizes="(min-width: 1024px) 32rem, (min-width: 640px) 28rem, 100vw"
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-2 text-sky-400">
            <Home className="h-6 w-6" aria-hidden="true" />
            <span className="font-semibold tracking-wide">Čistý domov</span>
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </div>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Čistý domov – profesionální úklid po celé ČR
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-200 sm:text-xl">
            Postaráme se o to, aby váš domov i kancelář zářily čistotou! Nabízíme kvalitní a šetrné čištění:
          </p>

          {/* Key services */}
          <ul className="mt-6 space-y-4 text-xl sm:text-2xl">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-7 w-7 text-sky-400" aria-hidden="true" />
              <span className="font-semibold">Koberců a čalounění</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-7 w-7 text-sky-400" aria-hidden="true" />
              <span className="font-semibold">Sedaček, matrací a podlahových krytin</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-7 w-7 text-sky-400" aria-hidden="true" />
              <span className="font-semibold">Mytí oken a výloh</span>
              <span className="ml-2 text-zinc-300">– beze šmouh, s perfektním výsledkem</span>
            </li>
          </ul>

          {/* Benefits */}
          <div className="mt-8 grid gap-3 text-base sm:text-lg text-zinc-200">
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
              <span>Ekologické prostředky šetrné k vašemu zdraví</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
              <span>Rychlý a spolehlivý servis</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
              <span>
                Dojíždíme po <strong>celé České republice</strong> (sídlo: Brno)
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500 text-white">
              <a href="tel:+420605262769">
                <Phone className="mr-2 h-5 w-5" />
                Zavolat: 605 262 769
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-sky-600 text-sky-400 hover:bg-sky-950 bg-transparent"
            >
              <a href="mailto:cistydomov@seznam.cz?subject=Poptávka%20úklidu&body=Dobrý%20den,%20rád(a)%20bych%20poptal(a)%20úklid.">
                <Mail className="mr-2 h-5 w-5" />
                Napsat e‑mail
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white text-zinc-900 hover:bg-zinc-100">
              <Link href="/cenik">
                <ArrowRight className="mr-2 h-5 w-5" />
                Zobrazit ceník
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content grid */}
      <section className="bg-white text-zinc-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
          {/* Left: copy */}
          <div>
            <Badge className="bg-sky-600 hover:bg-sky-600">Profesionální úklidové služby</Badge>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Co pro vás uděláme</h2>
            <p className="mt-4 text-zinc-700">
              Každou zakázku řešíme individuálně. Používáme moderní technologie a šetrné postupy, aby byl výsledek
              perfektní a bezpečný pro vaši rodinu i domácí mazlíčky.
            </p>

            <div className="mt-6 grid gap-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <CheckCircle2 className="h-6 w-6 text-sky-600" aria-hidden="true" />
                  <div>
                    <div className="font-semibold">Hloubkové čištění koberců a čalounění</div>
                    <div className="text-sm text-zinc-600">Odstranění skvrn, zápachu a alergenů</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <CheckCircle2 className="h-6 w-6 text-sky-600" aria-hidden="true" />
                  <div>
                    <div className="font-semibold">Sedačky, matrace, podlahové krytiny</div>
                    <div className="text-sm text-zinc-600">Jemné a účinné čištění pro delší životnost</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <CheckCircle2 className="h-6 w-6 text-sky-600" aria-hidden="true" />
                  <div>
                    <div className="font-semibold">Mytí oken a výloh</div>
                    <div className="text-sm text-zinc-600">Krystalicky čisté bez šmouh</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <CheckCircle2 className="h-6 w-6 text-sky-600" aria-hidden="true" />
                  <div>
                    <div className="font-semibold">Provádíme i malířské práce</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right: gallery and contact card */}
          <div className="grid gap-6">
            <div className="grid grid-cols-3 gap-3">
              <Image
                src="/vacuum-cleaning-carpet-detail.png"
                alt="Čištění koberce vysavačem"
                width={240}
                height={180}
                className="h-full w-full rounded-lg object-cover"
                priority
              />
              <Image
                src="/sofa-upholstery-cleaning.png"
                alt="Čištění sedačky a čalounění"
                width={240}
                height={180}
                className="h-full w-full rounded-lg object-cover"
              />
              <Image
                src="/placeholder-gyudl.png"
                alt="Mytí oken stěrkou"
                width={240}
                height={180}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            <Card className="border-sky-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Kontakt</h3>
                <p className="mt-2 text-zinc-700">Objednávky a dotazy:</p>
                <div className="mt-4 space-y-3">
                  <Link
                    href="mailto:cistydomov@seznam.cz"
                    className="flex items-center gap-3 text-sky-700 hover:underline"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    cistydomov@seznam.cz
                  </Link>
                  <Link href="tel:+420605262769" className="flex items-center gap-3 text-sky-700 hover:underline">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    605 262 769
                  </Link>
                  <Link href="tel:+420605262769" className="flex items-center gap-3 text-sky-700 hover:underline">
                    <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
                    IČO: 03874419 
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Čistý domov. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </main>
  )
}
