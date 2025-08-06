import DashboardCards from "@/components/ui/DashboardCards/DashboardCards";
import { useActivityStore } from "@/store/recentActivity";

export default function Dashboard() {
  const { history } = useActivityStore();

  const formatPath = (path: string) => {
    return path
      .split("/")
      .filter((segment) => segment)
      .map(
        (segment) =>
          segment.charAt(0).toUpperCase() + segment.slice(1).replace("-", " ")
      )
      .join(" → ");
  };

  return (
    <div className=" flex flex-col  p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex gap-4 mt-6 max-sm:flex-col justify-evenly">
        <DashboardCards title="Dashboard Overview">
          <p>Contenido del Dashboard Overview</p>
        </DashboardCards>
        <DashboardCards title="Recent Activities">
          {history.length > 0 ? (
            <div className="space-y-2">
              {history
                .slice(-2)
                .reverse()
                .map((path, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 bg-white rounded-md"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      {formatPath(path)}
                    </span>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              No hay actividades recientes
            </p>
          )}
        </DashboardCards>
      </div>
    </div>
  );
}
