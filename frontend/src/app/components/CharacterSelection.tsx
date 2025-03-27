"use client"
import Image from "next/image"
import { IconStarFilled } from "@tabler/icons-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export const CharacterSelection = () => {
  return (
    <>
      <BackgroundImage />

      <RegionSelect />

      <CharacterInfo />

      <CharacterSelect />
    </>
  )
}

const BackgroundImage = () => (
  <Image
    src={"https://placehold.co/1800x1000/333/000.png"}
    alt="placeholder"
    width={1200}
    height={600}
    className="relative inset-0 -z-10 w-full min-h-[600px] aspect-[600/257] object-cover select-none pointer-events-none opacity-50"
    draggable="false"
    priority
  />
)
const RegionSelect = () => {
  const [position, setPosition] = useState("")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="absolute left-4 top-1/2 -translate-y-1/2">
        <Button variant="outline" className="capitalize">
          {position ? position : "Select Region"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit" align="start">
        <DropdownMenuLabel className="mx-6">Select region</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="mondstadt">Mondstadt</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="liyue">Liyue</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="inazuma">Inazuma</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sumeru">Sumeru</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fontaine">Fontaine</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="natlan">Natlan</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
const CharacterInfo = () => (
  <div className="absolute right-8 top-1/2 -translate-y-1/2 grid justify-items-center">
    <h2 className="text-4xl flex gap-2 items-center">
      Nome
      <span className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <IconStarFilled key={index} size={16} />
        ))}
      </span>
    </h2>
    <img src="https://placehold.co/150x100/ccc/000.png" alt="placeholder" className="rounded-md" />
  </div>
)
const CharacterSelect = () => (
  <Carousel
    opts={{
      align: "start",
      loop: true,
      skipSnaps: true,
    }}
    className="w-full max-w-sm absolute bottom-8 left-1/2 -translate-x-1/2"
  >
    <CarouselContent>
      {Array.from({ length: 20 }).map((_, index) => (
        <CarouselItem key={index} className="basis-1/5">
          <div className="p-1 *:w-full">
            <img
              src={`https://placehold.co/250x250/ccc/000.png?text=${index + 1}`}
              alt="placeholder"
              className="rounded-md aspect-square select-none"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
)
