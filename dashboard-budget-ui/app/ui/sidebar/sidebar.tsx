import { MENU_OPTIONS } from "@/app/lib/utils";
import MenuButton from "./menuoption";

export default function SideBar(){

  let setting = MENU_OPTIONS.pop();

  return (
    <section className="text-slate-100 bg-slate-900 min-w-60 h-dvh p-5 grid content-between">
      <div>
        <div>LOGO</div>
        <div className="mt-9 flex flex-col space-y-1">
          {
            MENU_OPTIONS.map(({route, href, icon}) => (
              <MenuButton key={route} name={route} href={href} icon={icon} />
            ))
          }
        </div>
      </div>
      <div>
        <ul>
          <MenuButton name={setting?.route ?? "Settings"} href={setting?.href ?? ""} icon={setting?.icon ?? ""} />
        </ul>
      </div>
    </section>
  )
}