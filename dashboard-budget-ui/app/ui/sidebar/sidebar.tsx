import { MENU_OPTIONS } from "@/app/lib/utils";
import MenuButton from "./menuoption";

export default function SideBar(){

  let mainBlock = MENU_OPTIONS.slice(0, MENU_OPTIONS.length - 1)
  let setting = MENU_OPTIONS[MENU_OPTIONS.length - 1];

  return (
    <section className="text-slate-100 bg-slate-900 min-w-60 h-dvh py-5 px-3 grid content-between">
      <div>
        <div>LOGO</div>
        <div className="mt-9 flex flex-col space-y-1">
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
  )
}