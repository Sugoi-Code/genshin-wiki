// import { MainContent } from "./components/MainContent"
import { FooterContent } from "./components/FooterContent"
import { HeaderContent } from "./components/HeaderContent"
import { CharacterSelection } from "./components/CharacterSelection"
import { Input, InputWithIcon } from "@/components/ui/input"
import { IconSearch } from "@tabler/icons-react"

export default function Home() {
  return (
    <>
      <header className="px-4 py-8 flex w-full justify-between">
        <HeaderContent />
      </header>

      <InputWithIcon className="mx-4 mb-8" icon={<IconSearch />} position={"left"}>
        <Input placeholder="Search" />
      </InputWithIcon>

      <main className="relative **:select-none">
        <section>
          <CharacterSelection />
        </section>
      </main>

      <footer className="px-4">
        <FooterContent />
      </footer>
    </>
  )
}
