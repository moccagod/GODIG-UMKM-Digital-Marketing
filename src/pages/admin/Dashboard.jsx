import PageWrapper from "../../components/PageWrapper";
import RequireAuth from "../../components/RequireAuth";
import AdminLayout from "../../layouts/AdminLayout";

const Dashboard = () => {
  return (
    <RequireAuth>
      <PageWrapper>
        <AdminLayout>
          <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-100 rounded shadow">
              <h2 className="font-semibold">Jumlah Artikel</h2>
              <p className="text-2xl">12</p>
            </div>
            <div className="p-4 bg-green-100 rounded shadow">
              <h2 className="font-semibold">Layanan Aktif</h2>
              <p className="text-2xl">4</p>
            </div>
            <div className="p-4 bg-green-100 rounded shadow">
              <h2 className="font-semibold">Pesan Masuk</h2>
              <p className="text-2xl">9</p>
            </div>
          </div>
        </AdminLayout>
      </PageWrapper>
    </RequireAuth>
  );
};

export default Dashboard;
