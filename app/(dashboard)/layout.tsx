
import BasicHeader from '@/components/layouts/basicHeader/basicHeader';
import Sidebar from '@/components/layouts/sidebar/sidebar';

export default function DashboardLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  const HEADER_HEIGHT = '40px'; 
  const SIDEBAR_WIDTH = '120px'; 

  return (
    <div className="flex h-screen overflow-hidden bg-[#E6EDEF] "> 
      <Sidebar />

      <div className="flex flex-col flex-1 ">
        <BasicHeader />

        <main
          className="flex-1 p-6 overflow-y-auto hide-scrollbar" 
          style={{
            paddingRight: SIDEBAR_WIDTH, 
            paddingTop: HEADER_HEIGHT,  
          }}
        >
          {children} 
        </main>
      </div>
    </div>
  );
}