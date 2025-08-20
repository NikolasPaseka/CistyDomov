import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info, Receipt, Truck, MapPin, ArrowRight } from 'lucide-react'

type Item = { name: string; price?: string }

function PriceList({
  title = "Služba",
  items = [],
  ctaHref = "mailto:cistydomov@seznam.cz?subject=Poptávka%20služby",
}: {
  title?: string
  items?: Item[]
  ctaHref?: string
}) {
  return (
    <Card className="bg-white">
      <CardContent className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-4 divide-y">
          {items.map((it, i) => (
            <div key={i} className="flex items-center justify-between py-3 text-[15px]">
              <span className="text-zinc-800">{it.name}</span>
              <span className="font-medium text-zinc-900">{it.price ?? ""}</span>
            </div>
          ))}
        </div>
        {/*<div className="mt-4">
          <Button asChild variant="ghost" className="px-0 text-sky-700 hover:text-sky-600">
            <a href={ctaHref} aria-label={`Poptat službu: ${title}`}>
              Poptat službu <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>*/}
      </CardContent>
    </Card>
  )
}

export default function CenikPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="flex items-center gap-3">
          <Badge className="bg-sky-600 hover:bg-sky-600">Ceník</Badge>
          <span className="sr-only">Ceník</span>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Ceník nabízených služeb</h1>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {/* Levý sloupec */}
          <PriceList
            title="Čištění čalounění, koberců, židlí a matrací"
            items={[
              { name: "Židle", price: "100 Kč" },
              { name: "Křeslo", price: "450 Kč" },
              { name: "Kancelářské křeslo", price: "350 Kč" },
              { name: "Taburet", price: "300 Kč" },
              { name: "Sedačka tvar U", price: "1400 Kč" },
              { name: "Sedačka rohová", price: "1100 Kč" },
              { name: "3 místná sedačka", price: "850 Kč" },
              { name: "Kusový koberec (délkové vlákno)", price: "od 550 Kč" },
              { name: "Kusový koberec (krátké vlákno)", price: "od 450 Kč" },
              { name: "Hloubkové čištění koberců NS 270", price: "od 100 Kč /m2" },
              { name: "Matrace 90×220", price: "800 Kč" },
              { name: "Matrace 180×220", price: "1300 Kč" },
            ]}
          />

          {/* Pravý horní sloupec */}
          <PriceList
            title="Čištění kůže"
            items={[
              { name: "Kožená sedačka rohová", price: "1 700 Kč" },
              { name: "Kožená sedačka ve tvaru U", price: "2 200 Kč" },
              { name: "4 místná sedačka", price: "1 500 Kč" },
              { name: "3 místná sedačka", price: "1 150 Kč" },
              { name: "Kožené křeslo", price: "650 Kč" },
              { name: "Kožený Taburet", price: "320 Kč" },
              { name: "Židle", price: "170 Kč" },
            ]}
          />

          {/* Levý prostřední */}
          <PriceList
            title="Důkladné mytí oken i rámů"
            items={[
              { name: "Fr. okno", price: "450 Kč" },
              { name: "Balkonové dveře", price: "350 Kč" },
              { name: "Malé okno", price: "100 Kč" },
              { name: "Jedno křídlové okno", price: "200 Kč" },
            ]}
          />

          {/* Pravý prostřední */}
          <PriceList
            title="Doplňkové služby"
            items={[
              { name: "Venkovní žaluzie", price: "od 450 Kč" },
              { name: "Úklid či vyklizení bytů, domů, garáží", price: "od 1 500 Kč" },
              { name: "Hloubkové čištění koberců NS 270", price: "od 100 Kč /m2" },
              { name: "Odchlupení čalounění, koberců", price: "od 100 Kč /m2" },
              { name: "Kompletní odmaštění a odstranění lepidla ze skleněných ploch", price: "Cena dle náročnosti" },
              { name: "Nano impregnace čalounění/koberců C.QUARTZ IMPREGNACE", price: "od 800 Kč" },
            ]}
          />

          {/* Spodní levý – podlahy */}
          <PriceList
            title="Mytí podlah a dlažeb"
            items={[
              { name: "Strojní mytí „tvrdých podlah“ (dle stupně znečištění)", price: "od 70 Kč /m2" },
              { name: "Voskování podlah – polymery", price: "od 45 Kč /m2" },
              { name: "Tlakové mytí dlažeb pomocí systému VEVOR", price: "od 65 Kč /m2" },
              { name: "Odstranění mechu a plevele", price: "od 30 Kč /m2" },
              { name: "Důkladné zapískování dlažby", price: "od 35 Kč /m2" },
              { name: "Dlouhotelá impregnace dlažby (5–10 let)", price: "od 45 Kč /m2" },
            ]}
          />

          {/* Spodní pravý – poznámky */}
          <Card>
            <CardContent className="p-5 sm:p-6">
              <ul className="space-y-3 text-sm text-zinc-700">
                <li className="flex items-start gap-3">
                  <Info className="mt-0.5 h-4 w-4 text-sky-700" aria-hidden="true" />
                  <span>Při silném znečištění se cena může navýšit. Vždy po předběžné konzultaci.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Receipt className="mt-0.5 h-4 w-4 text-sky-700" aria-hidden="true" />
                  <span>Uvedené ceny jsou s DPH</span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-4 w-4 text-sky-700" aria-hidden="true" />
                  <span>Doprava po Brně je vždy zdarma</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-sky-700" aria-hidden="true" />
                  <span>Doprava mimo Brno 9 Kč/km</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Reference image preview (optional) */}
      </section>
    </main>
  )
}
