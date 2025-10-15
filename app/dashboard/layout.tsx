import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/features/dashboard/components/dashboard-sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
        <div className="flex min-h-screen w-full overflow-x-hidden">
            {/* Todo: Sidebar */}
            <DashboardSidebar initialPlaygoundData={[]} />

            <main className="flex-1">
                {children}
            </main>
        </div>
    </SidebarProvider>
  )
}