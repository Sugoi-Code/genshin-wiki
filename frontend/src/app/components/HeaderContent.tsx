import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { IconPlus, IconUser } from "@tabler/icons-react"

export const HeaderContent = () => {
  return (
    <>
      <ActionsButton />

      <Navigation />

      <AuthButtons />
    </>
  )
}

const ActionsButton = () => (
  <div className="flex gap-2">
    <Button size={"icon"}>
      <IconUser />
    </Button>
    <Button size={"icon"}>
      <IconPlus />
    </Button>
  </div>
)

const Navigation = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Home</NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="#">Search</NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="#">Message</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

const AuthButtons = () => (
  <div className="flex gap-2">
    <Button variant={"outline"}>Log in</Button>
    <Button>Sign up</Button>
  </div>
)
