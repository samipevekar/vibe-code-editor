import { SidebarProvider } from "@/components/ui/sidebar";
import { getAllPlaygroundForUser } from "@/features/dashboard/actions";
import DashboardSidebar from "@/features/dashboard/components/dashboard-sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

  const playgroundData = await getAllPlaygroundForUser()

  const techologyIconMap: Record<string, string> = {
    REACT:'Zap',
    NEXTJS:'Lightbulb',
    VUE:'Compass',
    EXPRESS:'Database',
    HONO:'FlameIcon',
    ANGULAR:'Terminal'

  }

  const formattedPlaygroundData = playgroundData?.map((playground) => ({
    id: playground.id,
    name: playground.title,
    starred: playground.Startmark?.[0]?.isMarked ||  false,
    icon: techologyIconMap[playground.template] || 'Code2'
  }) ) || []

  return (
    <SidebarProvider>
        <div className="flex min-h-screen w-full overflow-x-hidden">
            {/* Todo: Sidebar */}
            <DashboardSidebar initialPlaygoundData={formattedPlaygroundData} />

            <main className="flex-1">
                {children}
            </main>
        </div>
    </SidebarProvider>
  )
}