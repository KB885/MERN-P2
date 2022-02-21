import SimpleStat from "../../components/Stats/Stats";
import SimpleTable from "../../components/Lists/Table";

export default function Dashboard() {
    return (
        <>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-4 sm:px-0">
                <SimpleStat />
            </div>
            <div className="px-4 py-4 sm:px-0">
                <SimpleTable />
            </div>
          </div>
        </>
    )
}
