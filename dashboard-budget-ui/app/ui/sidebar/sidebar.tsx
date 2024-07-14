import { MENU_OPTIONS } from "@/app/lib/utils";
import MenuButton from "./menuoption";
import Avatar from "./avatar";

export default function SideBar(){

  let mainBlock = MENU_OPTIONS.slice(0, MENU_OPTIONS.length - 1)
  let setting = MENU_OPTIONS[MENU_OPTIONS.length - 1];

  return (
    <div className="relative">
      <section className="text-slate-100 bg-slate-900 w-72 h-full py-3 px-3 grid content-between fixed top-0">
        <div>
          <Avatar />
          <div className="mt-20 flex flex-col space-y-1">
            {
              mainBlock.map(({ route, href }) => {
                return (
                  <MenuButton key={route} name={route} href={href} />
                );
              })
            }
          </div>
        </div>
        <div>
          <ul>
            <MenuButton name={setting?.route ?? "Settings"} href={setting?.href ?? ""} />
          </ul>
        </div>
      </section>
    </div>
  )
}